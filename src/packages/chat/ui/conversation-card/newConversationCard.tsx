import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Card, Input } from "common/components";
import { User } from "packages/chat/models/types";
import { fetchTopResults } from "packages/chat/store/actions/conversationsActions";
import { ReactComponent as ConversationIcon } from "common/images/messages/conversationGraphic.svg";
import { ReactComponent as SendMessage } from "common/images/messages/send.svg";
import SearchUserItem from "./searchUserItem";

const NewConversationCard = (): ReactElement => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState<string>("");
  const [topResults, setTopResults] = useState<User[]>([]);

  useEffect(() => {
    if (searchValue) {
      fetchTopResults(searchValue).then((res) => {
        setTopResults(res.data.topResults);
      });
    } else {
      setTopResults([]);
    }
  }, [searchValue]);

  return (
    <Card additionalClassName="relative w-full p-8 divide-y-2 divide-primary text-primary">
      <div className="relative flex flex-row items-center h-20 pb-4">
        <Input
          height="h-9"
          width="w-4/12"
          additionalClassName="text-6"
          placeholder={t("messages.searchUsers")}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearchValue(event.target.value)
          }
          delay={500}
        >
          {topResults ? (
            <ul className="absolute z-10 top-10 min-w-full max-w-fit max-h-80 bg-secondary-lightest rounded-xl overflow-auto">
              {topResults.map((user) => (
                <SearchUserItem user={user} />
              ))}
            </ul>
          ) : (
            <></>
          )}
        </Input>
      </div>
      <div className="absolute flex flex-col justify-between inset-8 top-28">
        <div className="absolute flex flex-col-reverse flex-auto w-full overflow-y-auto top-2 bottom-24">
          <div className="relative w-full">
            <div className="float-right p-6">
              <ConversationIcon />
            </div>
          </div>
        </div>
        <div className="absolute flex flex-row h-12 inset-x-0 bottom-0">
          <Input
            additionalClassName="text-xl py-4 px-6 h-12"
            height="h-min"
            placeholder="Aa"
            disabled
          />
          <div className="py-1 px-7">
            <SendMessage className="text-secondary-lightest" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NewConversationCard;
