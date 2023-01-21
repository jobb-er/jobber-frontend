import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

import { NEW_MESSAGE } from "common/constants";
import { Label, Link } from "common/components";
import { ReactComponent as EmptyInboxIcon } from "common/images/messages/emptyInboxGraphic.svg";
import { ReactComponent as NoteAdd } from "common/images/messages/noteAddAction.svg";
import NewConversationCard from "./conversation-card/newConversationCard";
import ConversationsList from "./conversations-list/conversationsList";
import ConversationCard from "./conversation-card/conversationCard";
import {
  MessagesContentProps,
  MessagesContentMapState,
  MessagesContentMapStateReturn,
} from "./types";

const MessagesContent = ({
  conversations,
  searchValue,
}: MessagesContentProps): ReactElement => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { id } = useParams();

  if (!conversations?.length && !pathname.includes(NEW_MESSAGE) && !id)
    return (
      <div className="flex justify-between gap-10 h-max p-16">
        <div className="flex flex-col gap-6">
          <Label>{t("messages.emptyInbox")}</Label>
          <Link
            Icon={NoteAdd}
            title={t("messages.newMessage")}
            path={NEW_MESSAGE}
          />
        </div>
        <EmptyInboxIcon className="self-end absolute bottom-20 right-20" />
      </div>
    );

  return (
    <div className="flex flex-row justify-between gap-12 h-85 px-10">
      <div className="flex w-3/12 h-full overflow-auto">
        <ConversationsList searchValue={searchValue} />
      </div>
      <div className="flex grow h-full">
        <Routes>
          <Route path={`${NEW_MESSAGE}`} element={<NewConversationCard />} />
          <Route path=":id" element={<ConversationCard />} />
        </Routes>
      </div>
    </div>
  );
};

const mapStateToProps = (
  state: MessagesContentMapState,
): MessagesContentMapStateReturn => ({
  conversations: state.messages.conversations,
});

export default connect(mapStateToProps)(MessagesContent);
