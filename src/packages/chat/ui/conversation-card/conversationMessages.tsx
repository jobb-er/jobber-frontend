import { ReactElement } from "react";

import {
  ConversationMessagesMapState,
  ConversationMessagesMapStateReturn,
  ConversationMessagesProps,
} from "./types";
import { ReactComponent as ConversationIcon } from "common/images/messages/conversationGraphic.svg";
import { ReactComponent as NoAvatarIcon } from "common/images/top-bar/noAvatar.svg";
import { connect } from "react-redux";

const ConversationMessages = ({
  conversation: { user, messages },
}: ConversationMessagesProps): ReactElement => {
  return (
    <>
      <div className="absolute flex flex-col-reverse flex-auto w-full overflow-y-auto top-2 bottom-24">
        {messages.map((msg, i, arr) => {
          return (
            <div key={msg.id} className="relative w-full">
              {msg.received && !arr[i - 1]?.received ? (
                <div className="absolute left-0 bottom-1">
                  <div className="w-8 h-8 border box-content border-primary rounded-full">
                    {user?.avatar ? (
                      <img
                        src={user.avatar}
                        className="w-full h-full rounded-full"
                        alt="avatar"
                      />
                    ) : (
                      <NoAvatarIcon className="w-8 h-8 p-2" />
                    )}
                  </div>
                </div>
              ) : (
                <></>
              )}
              <p
                className={`text-msg-conv-msg rounded-xl px-5 py-3 my-0.5 w-max text-white ${
                  msg.received
                    ? "ml-14 float-left bg-secondary"
                    : "mr-4 float-right bg-action"
                }`}
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
