import React, { ReactElement } from "react";
import { connect } from "react-redux";

import { CandidateAdditionalItemFormValues } from "packages/profile/models";
import { SectionSeparator } from "../common";
import {
  AdditionalMapState,
  AdditionalMapStateReturn,
  AdditionalProps,
} from "./types";

const Additional = ({ candidateProfile }: AdditionalProps): ReactElement => {
  const { additional } = candidateProfile;

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

const mapStateToProps = (
  state: AdditionalMapState,
): AdditionalMapStateReturn => ({
  candidateProfile: state.profile.candidateProfile,
});

export default connect(mapStateToProps)(Additional);
