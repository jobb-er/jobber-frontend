import { Loader } from "common/components";
import { ReactElement } from "react";
import { connect } from "react-redux";
import ConversationsListItem from "./conversationsListItem";
import {
  ConversationsListMapState,
  ConversationsListMapStateReturn,
  ConversationsListProps,
} from "./types";

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
      {conversations
        .filter((item) => {
          if (!searchValue) return true;
          const lcSearchValue = searchValue
            .toLowerCase()
            .trim()
            .split(" ")
            .filter((val) => val);
          return lcSearchValue.some((val) => {
            return (
              item.user.email.toLowerCase().includes(val) ||
              item.user.firstName.toLowerCase().includes(val) ||
              item.user.lastName.toLowerCase().includes(val)
            );
          });
        })
        .map((item) => {
          return (
            <ConversationsListItem
              key={item.user.id}
              user={item.user}
              latestMessage={item.latestMessage}
              markAsRead={item.markAsRead}
            />
          );
        })}
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
