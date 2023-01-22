import { ReactElement } from "react";
import { connect } from "react-redux";

import { removeDuplicateWhitespaces } from "common/utils";
import { ReactComponent as ConversationIcon } from "common/images/messages/conversationGraphic.svg";
import Avatar from "common/components/avatar/avatar";
import {
  ConversationMessagesMapState,
  ConversationMessagesMapStateReturn,
  ConversationMessagesProps,
} from "./types";

const ConversationMessages = ({
  conversation: { user, messages },
}: ConversationMessagesProps): ReactElement => {
  return (
    <>
      <div className="absolute flex flex-col-reverse flex-auto w-full overflow-y-auto top-2 bottom-24">
        {messages.map((msg, i, arr) => {
          return (
            <div
              key={msg.id}
              className={`relative w-full ${
                arr[i - 1]?.received !== arr[i]?.received && "mb-2"
              } ${arr[i + 1]?.received !== arr[i]?.received && "mt-2"}`}
            >
              {msg.received && !arr[i - 1]?.received ? (
                <div className="absolute left-0 bottom-1">
                  <div className="w-6 h-6 border box-content border-primary rounded-full">
                    <Avatar
                      avatar={user?.avatar}
                      width="w-6"
                      height="h-6"
                      padding="p-1"
                    />
                  </div>
                </div>
              ) : (
                <></>
              )}
              <p
                className={`${removeDuplicateWhitespaces(
                  `text-lg rounded-xl px-4 py-1 my-0.5 text-white break-words ${
                    msg.received
                      ? "ml-10 float-left bg-secondary max-w-3/5"
                      : "mr-4 float-right bg-action max-w-1/2"
                  }`,
                )}`}
              >
                {msg.message}
              </p>
            </div>
          );
        })}
        {!messages.length && (
          <div className="relative w-full">
            <div className="float-right p-6">
              <ConversationIcon />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (
  state: ConversationMessagesMapState,
): ConversationMessagesMapStateReturn => ({
  conversation: state.messages.conversation,
});

export default connect(mapStateToProps)(ConversationMessages);
