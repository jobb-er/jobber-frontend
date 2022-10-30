import { ReactElement } from "react";

import { TopBar } from "../../../common/components";

const Messages = (): ReactElement => {
  return (
    <section>
      <TopBar role="candidate" name="Jakub Kołosowski">
        <span>Messages</span>
      </TopBar>
    </section>
  );
};

export default Messages;
