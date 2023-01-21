import { ReactElement } from "react";
import { connect } from "react-redux";

import { Loader } from "common/components";
import ConversationsListItem from "./conversationsListItem";
import {
  ConversationsListMapState,
  ConversationsListMapStateReturn,
  ConversationsListProps,
} from "./types";
import { filterConversations } from "./helpers";

const ConversationsList = ({
  conversations,
  isFetchingConversationsReducer,
  searchValue,
}: ConversationsListProps): ReactElement => {
  if (isFetchingConversationsReducer) {
    return (
      <div className="flex flex-col w-full h-full pr-1">
        <Loader additionalClassName="flex items-center justify-center h-full" />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full pr-1">
      {filterConversations(conversations, searchValue).map((item) => (
        <ConversationsListItem
          key={item.user.id}
          user={item.user}
          latestMessage={item.latestMessage}
          markAsRead={item.markAsRead}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (
  state: ConversationsListMapState,
): ConversationsListMapStateReturn => ({
  conversations: state.messages.conversations,
  isFetchingConversationsReducer:
    state.requestStatuses.isFetchingConversationsReducer,
});

export default connect(mapStateToProps)(ConversationsList);
