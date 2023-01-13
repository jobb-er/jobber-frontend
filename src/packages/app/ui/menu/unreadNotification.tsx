import { ReactElement } from "react";
import { connect } from "react-redux";
import {
  UnreadNotificationMapState,
  UnreadNotificationMapStateReturn,
  UnreadNotificationProps,
} from "./types";

const UnreadNotification = ({
  unReadCount,
}: UnreadNotificationProps): ReactElement => {
  if (unReadCount < 1) return <></>;

  return (
    <div className="absolute w-6 h-4 rounded-full bg-action right-1 text-xs text-center text-white">
      {unReadCount > 9 ? "9+" : unReadCount}
    </div>
  );
};

const mapStateToProps = (
  state: UnreadNotificationMapState,
): UnreadNotificationMapStateReturn => ({
  unReadCount: state.messages.unReadCount,
});

export default connect(mapStateToProps)(UnreadNotification);
