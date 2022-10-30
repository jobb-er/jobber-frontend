import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as SearchIcon } from "../../../../common/images/offers/search.svg";
import { ReactComponent as LocationIcon } from "../../../../common/images/offers/location.svg";
import { TopBar, Input, Select } from "../../../../common/components";

const AllOffers = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-6">
      <TopBar role="recruiter" name="Jakub Kołosowski">
        <div className="flex items-center gap-3 w-1/2">
          <Input
            height="h-min"
            placeholder={t("allOffers.search")}
            Icon={SearchIcon}
          />
          <Select
            options={[]}
            value=""
            onChange={() => {
              // do nth
            }}
            Icon={LocationIcon}
            placeholder={t("allOffers.location")}
            height="h-min"
          />
        </div>
      </TopBar>
      <span>All offers</span>
    </section>
  );
};

export default AllOffers;
