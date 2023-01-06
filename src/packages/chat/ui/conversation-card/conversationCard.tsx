import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { Card, Input } from "common/components";
import { ReactComponent as NoAvatarIcon } from "common/images/top-bar/noAvatar.svg";
import {
  ConversationCardMapState,
  ConversationCardMapStateReturn,
  ConversationCardProps,
} from "./types";
import { ReactComponent as SendMessage } from "common/images/messages/send.svg";
import { fetchConversation } from "packages/chat/store/actions/conversationsActions";
import { useParams } from "react-router-dom";

const ConversationCard = ({
  conversation: { user, messages },
  fetchUserConversation,
}: ConversationCardProps): ReactElement => {
  const { id } = useParams();

  const [messageInput, setMessageInput] = useState<string>();

  useEffect(() => {
    if (id) fetchUserConversation(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (id !== user?.id) {
    return (
      <Card additionalClassName="flex justify-center items-center w-full p-8">
        <p>Conversation not found!</p>
      </Card>
    );
  }

  return (
    <Card additionalClassName="relative w-full p-8 divide-y-2 divide-primary text-primary">
      <div className="flex flex-row">
        <div className="flex justify-center items-center w-18 h-20 pb-4">
          <div className="w-16 h-16 border border-primary rounded-full focus:outline-none">
            {user?.avatar || <NoAvatarIcon className="w-16 h-16 p-3" />}
          </div>
        </div>
        <div className="text-msg-conv-title px-6 py-3">
          {user.firstName} {user.lastName}
        </div>
      </div>
      <div className="absolute flex flex-col justify-between inset-8 top-28">
        <div className="absolute flex flex-col-reverse flex-auto w-full overflow-y-scroll top-2 bottom-24">
          {messages.map((msg, i, arr) => {
            return (
              <div key={msg.id} className="relative w-full">
                {msg.received && !arr[i - 1]?.received ? (
                  <div className="absolute left-0 bottom-1">
                    <div className="w-8 h-8 border border-primary rounded-full focus:outline-none">
                      {user?.avatar || <NoAvatarIcon className="w-8 h-8 p-2" />}
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
        </div>
        <div className="absolute flex flex-row inset-x-0 bottom-0">
          <Input
            additionalClassName="text-msg-conv-msg-inp py-4 px-6 h-14"
            height="h-min"
            placeholder="Aa"
            value={messageInput}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setMessageInput(event.target.value)
            }
          />
          <div className="py-2 px-7">
            <SendMessage />
          </div>
        </div>
      </div>
    </Card>
  );
};

const mapStateToProps = (
  state: ConversationCardMapState,
): ConversationCardMapStateReturn => ({
  conversation: state.messages.conversation,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchUserConversation: (id: string) => dispatch(fetchConversation(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationCard);
