import { ReactElement, useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  UnreadNotificationMapState,
  UnreadNotificationMapStateReturn,
  UnreadNotificationProps,
} from "./types";

const UnreadNotification = ({
  conversations,
}: UnreadNotificationProps): ReactElement => {
  const [unReadCount, setUnReadCount] = useState(0);

  useEffect(() => {
    setUnReadCount(conversations.filter((conv) => !conv.markAsRead).length);
  }, [conversations]);

  if (unReadCount < 1) return <></>;

  return (
    <div className="absolute w-4 h-4 rounded-full bg-action right-1 top-1 text-xs text-center text-white">
      {unReadCount > 9 ? "9+" : unReadCount}
    </div>
  );
};

const mapStateToProps = (
  state: UnreadNotificationMapState,
): UnreadNotificationMapStateReturn => ({
  conversations: state.messages.conversations,
});

export default connect(mapStateToProps)(UnreadNotification);
