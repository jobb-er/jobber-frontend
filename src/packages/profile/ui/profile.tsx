import { ReactElement } from "react";

import { TopBar } from "../../../common/components";

const Profile = (): ReactElement => {
  return (
    <section>
      <TopBar role="candidate" name="Jakub Kołosowski">
        <span>Profile</span>
      </TopBar>
    </section>
  );
};

export default Profile;
