import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Navigate, useLocation } from "react-router-dom";

import { Input, Link, TopBar } from "common/components";
import {
  MessagesProps,
  MessagesMapState,
  MessagesMapStateReturn,
} from "./types";
import MessagesContent from "./messagesContent";
import { ReactComponent as SearchIcon } from "common/images/offers/search.svg";
import { ReactComponent as NoteAdd } from "common/images/messages/noteAddPrimary.svg";
import { fetchConversations } from "../store/actions/conversationsActions";
import { MESSAGES, NEW_MESSAGE } from "common/constants";

const Messages = ({
  auth,
  conversations,
  fetchMyConversations,
}: MessagesProps): ReactElement => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    fetchMyConversations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchMyConversations: () => dispatch(fetchConversations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
