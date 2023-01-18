import { ChangeEvent, ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Navigate, useLocation, useParams } from "react-router-dom";

import { Input, Link, TopBar } from "common/components";
import {
  MessagesProps,
  MessagesMapState,
  MessagesMapStateReturn,
} from "./types";
import MessagesContent from "./messagesContent";
import { ReactComponent as SearchIcon } from "common/images/offers/search.svg";
import { ReactComponent as NoteAdd } from "common/images/messages/noteAddPrimary.svg";
import { MESSAGES, NEW_MESSAGE } from "common/constants";

const Messages = ({ auth, conversations }: MessagesProps): ReactElement => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { id } = useParams();

  const [searchValue, setSearchValue] = useState<string>("");

  if (conversations.length > 0 && pathname === MESSAGES)
    return <Navigate replace to={`${conversations[0].user.id}`} />;

  return (
    <section className="flex flex-col gap-6 h-full p-8">
      <TopBar
        role={
          auth?.accountType ? t(`roles.${auth.accountType.toLowerCase()}`) : ""
        }
        name={`${auth?.firstName || ""} ${auth?.lastName || ""}`}
        additionalClassName="gap-12"
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
