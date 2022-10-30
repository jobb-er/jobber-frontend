import { ReactElement } from "react";

import { TopBar } from "../../../../common/components";

const MyOffers = (): ReactElement => {
  return (
    <section>
      <TopBar role="recruiter" name="Jakub Kołosowski">
        <span>My offers</span>
      </TopBar>
    </section>
  );
};

export default MyOffers;
