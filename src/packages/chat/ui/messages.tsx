import { ChangeEvent, ReactElement, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

import { Input, Link, TopBar } from "common/components";
import { ReactComponent as SearchIcon } from "common/images/offers/search.svg";
import { ReactComponent as NoteAdd } from "common/images/messages/noteAdd.svg";
import { MESSAGES, NEW_MESSAGE } from "common/constants";
import MessagesContent from "./messagesContent";
import {
  MessagesProps,
  MessagesMapState,
  MessagesMapStateReturn,
} from "./types";

const Messages = ({ auth, conversations }: MessagesProps): ReactElement => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const [searchValue, setSearchValue] = useState<string>("");

  if (conversations.length && pathname === MESSAGES)
    return <Navigate replace to={`${conversations[0].user.id}`} />;

  return (
    <section className="flex flex-col gap-6 h-full p-8">
      <TopBar
        role={
          auth?.accountType ? t(`roles.${auth.accountType.toLowerCase()}`) : ""
        }
        name={`${auth?.firstName || ""} ${auth?.lastName || ""}`}
        additionalClassName="gap-12"
        avatar={auth?.avatar}
      >
        {conversations?.length ? (
          <>
            <Input
              height="h-9"
              width="w-3/12"
              placeholder={t("messages.searchConvs")}
              Icon={SearchIcon}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setSearchValue(event.target.value)
              }
              delay={500}
            />
            <div className="grow">
              <Link
                Icon={NoteAdd}
                title={t("messages.newMessage")}
                path={NEW_MESSAGE}
                textColor="text-primary"
                additionalClassName="no-underline"
              />
            </div>
          </>
        ) : (
          <span></span>
        )}
      </TopBar>
      <MessagesContent searchValue={searchValue} />
    </section>
  );
};

const mapStateToProps = (state: MessagesMapState): MessagesMapStateReturn => ({
  auth: state.auth,
  conversations: state.messages.conversations,
});

export default connect(mapStateToProps)(Messages);
