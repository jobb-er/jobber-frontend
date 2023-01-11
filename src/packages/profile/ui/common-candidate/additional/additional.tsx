import React, { ReactElement } from "react";

import { CandidateAdditionalItemFormValues } from "packages/profile/models";
import SectionSeparator from "../sectionSeparator";
import { AdditionalProps } from "./types";

const Additional = ({ additional }: AdditionalProps): ReactElement => {
  if (!additional?.length || !additional?.[0]?.id) return <></>;

  return (
    <>
      {additional.map(
        (item: CandidateAdditionalItemFormValues): ReactElement => (
          <React.Fragment key={item.id}>
            <SectionSeparator />
            <div className="flex flex-col gap-2">
              <span className="text-xl font-semibold">{item.title}</span>
              <span className="whitespace-pre-wrap">{item?.details}</span>
            </div>
          </React.Fragment>
        ),
      )}
    </>
  );
};

export default Additional;
