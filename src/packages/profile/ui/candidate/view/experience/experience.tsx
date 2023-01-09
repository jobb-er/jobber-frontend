import { ReactElement } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { ReactComponent as BuildingIcon } from "common/images/profile/building.svg";
import { ReactComponent as LocationIcon } from "common/images/profile/location.svg";
import { ReactComponent as CalendarIcon } from "common/images/profile/calendar.svg";
import { Card } from "common/components";
import { CandidateExperienceItemFormValues } from "packages/profile/models/types";
import { SectionSeparator } from "../common";
import {
  ExperienceProps,
  ExperienceMapState,
  ExperienceMapStateReturn,
} from "./types";

const Experience = ({ candidateProfile }: ExperienceProps): ReactElement => {
  const { t } = useTranslation();

  const { experience } = candidateProfile;

  if (!experience?.length || !experience?.[0]?.id) return <></>;

  return (
    <>
      <SectionSeparator title={t("profile.tabs.experience")} />
      <section className="grid grid-cols-2 grid-flow-row gap-8">
        {experience.map(
          (item: CandidateExperienceItemFormValues): ReactElement => (
            <Card key={item.id} additionalClassName="flex flex-col gap-2">
              <span className="text-xl font-semibold">{item.jobTitle}</span>
              <div className="flex items-center gap-10 text-secondary-dark">
                <span className="flex items-center gap-2">
                  <BuildingIcon className="w-4 h-4" />
                  {item.company}
                </span>
                <span className="flex items-center gap-2">
                  <LocationIcon className="w-4 h-4" />
                  {item.country}
                </span>
              </div>
              <span className="flex items-center gap-2 font-medium">
                <CalendarIcon className="w-4 h-4" />
                {`${item.from} - ${item.to}`}
              </span>
              <span className="whitespace-pre-wrap h-32 overflow-y-auto">
                {item?.details}
              </span>
            </Card>
          ),
        )}
      </section>
    </>
  );
};

const mapStateToProps = (
  state: ExperienceMapState,
): ExperienceMapStateReturn => ({
  candidateProfile: state.profile.candidateProfile,
});

export default connect(mapStateToProps)(Experience);
