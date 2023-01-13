import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { Card, Input } from "common/components";
import { User } from "packages/chat/models/types";
import { fetchTopResults } from "packages/chat/store/actions/conversationsActions";
import { ReactComponent as NoAvatarIcon } from "common/images/top-bar/noAvatar.svg";
import { ReactComponent as ConversationIcon } from "common/images/messages/conversationGraphic.svg";
import { ReactComponent as SendMessageDisabled } from "common/images/messages/sendDisabled.svg";

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
            <ul className="absolute z-10 top-10 min-w-full max-w-fit bg-secondary-lightest rounded-xl">
              {topResults.map(
                (user: User): ReactElement => (
                  <NavLink key={user.id} to={`/messages/${user.id}`}>
                    <li className="flex flex-row group gap-3 text-primary cursor-pointer hover:bg-primary hover:text-white rounded-xl p-2">
                      <div className="flex box-content justify-center items-center">
                        <div className="w-12 h-12 box-content border border-primary group-hover:border-white rounded-full focus:outline-none">
                          {user.avatar || (
                            <NoAvatarIcon className="w-12 h-12 p-3" />
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col flex-auto justify-center truncate">
                        <div className="font-medium truncate">
                          {user.firstName} {user.lastName}
                        </div>
                        <div className="text-sm truncate">{user.email}</div>
                      </div>
                    </li>
                  </NavLink>
                ),
              )}
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
        <div className="absolute flex flex-row h-14 inset-x-0 bottom-0">
          <Input
            additionalClassName="text-msg-conv-msg-inp py-4 px-6 h-14"
            height="h-min"
            placeholder="Aa"
            disabled
          />
          <div className="py-2 px-7">
            <SendMessageDisabled />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NewConversationCard;
