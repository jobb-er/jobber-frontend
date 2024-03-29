import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as CalendarIcon } from "common/images/profile/calendar.svg";
import { Card } from "common/components";
import { CandidateEducationItemFormValues } from "packages/profile/models";
import SectionSeparator from "../sectionSeparator";
import { EducationProps } from "./types";

const Education = ({ education }: EducationProps): ReactElement => {
  const { t } = useTranslation();

  if (!education?.length || !education?.[0]?.id) return <></>;

  return (
    <>
      <SectionSeparator title={t("profile.tabs.education")} />
      <section className="grid grid-cols-2 grid-flow-row gap-8">
        {education.map(
          (item: CandidateEducationItemFormValues): ReactElement => (
            <Card key={item.id} additionalClassName="flex flex-col gap-2">
              <span className="text-xl font-semibold">{item.school}</span>
              <span className="font-semibold">{item.degree}</span>
              <span className="text-secondary-dark font-semibold">
                {item.name}
              </span>
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

export default Education;
