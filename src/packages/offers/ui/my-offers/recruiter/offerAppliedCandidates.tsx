import { ReactElement } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useTranslation } from "react-i18next";

import { AppliedCandidate, RecruiterResponse } from "packages/offers/models";
import { ReactComponent as NoAvatarIcon } from "common/images/offers/noAvatar.svg";
import { ReactComponent as MessageIcon } from "common/images/offers/message.svg";
import { ReactComponent as XIcon } from "common/images/offers/x.svg";
import { ReactComponent as CheckMarkIcon } from "common/images/offers/checkMark.svg";
import { Button } from "common/components";
import { removeDuplicateWhitespaces } from "common/utils";
import {
  changeCandidateStatusOfApplication,
  fetchAppliedCandidatesForOffer,
} from "packages/offers/store/actions/myOffersActions";
import { OfferAppliedCandidatesProps } from "./types";
import { NavLink } from "react-router-dom";
import { MESSAGES } from "common/constants";

const OfferAppliedCandidates = ({
  candidates,
  offerId,
  fetchAppliedCandidatesForOffer,
}: OfferAppliedCandidatesProps): ReactElement => {
  const { t } = useTranslation();

  const getColorOfCandidate = (response: RecruiterResponse): string => {
    switch (response) {
      case "waiting":
        return "bg-secondary-light text-primary";
      case "accepted":
        return "bg-action text-white";
      case "rejected":
        return "bg-error text-white";
      default:
        return "bg-secondary-light text-primary";
    }
  };

  const handleOnClickButtons = async (
    candidateId: string,
    status: RecruiterResponse,
  ): Promise<void> => {
    await changeCandidateStatusOfApplication(offerId, candidateId, status);
    await fetchAppliedCandidatesForOffer(offerId);
  };

  return (
    <div className="flex flex-col gap-3 mt-3">
      <div className="border-b border-primary" />
      <div className="grid grid-cols-3 auto-rows-auto gap-6">
        {candidates.map(
          (candidate: AppliedCandidate): ReactElement => (
            <div
              key={candidate.id}
              className={removeDuplicateWhitespaces(
                `${getColorOfCandidate(
                  candidate.recruiterResponse,
                )} rounded-xl p-4 flex flex-col gap-5`,
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-transparent rounded-full">
                    <NoAvatarIcon className="w-10 h-10 p-2.5" />
                  </div>
                  <span className="underline font-semibold">{`${candidate.firstName} ${candidate.lastName}`}</span>
                </div>
                <NavLink to={`${MESSAGES}/${candidate.id}`}>
                  <div className="flex items-center gap-2">
                    <MessageIcon className="w-5 h-5" />
                    <span>{t("myOffers.recruiter.message")}</span>
                  </div>
                </NavLink>
              </div>
              <div className="flex items-center gap-3 justify-center">
                {candidate.recruiterResponse === "waiting" ? (
                  <>
                    <Button
                      onClick={() =>
                        handleOnClickButtons(candidate.id, "accepted")
                      }
                    >
                      <div className="flex items-center gap-2">
                        <CheckMarkIcon className="w-5 h-5" />
                        <span>{t("myOffers.recruiter.accept")}</span>
                      </div>
                    </Button>
                    <Button
                      variant="error"
                      onClick={() =>
                        handleOnClickButtons(candidate.id, "rejected")
                      }
                    >
                      <div className="flex items-center gap-2">
                        <XIcon className="w-5 h-5" />
                        <span>{t("myOffers.recruiter.reject")}</span>
                      </div>
                    </Button>
                  </>
                ) : (
                  <span className="font-bold text-2xl">
                    {t(
                      `myOffers.recruiter.statuses.${candidate.recruiterResponse}`,
                    )}
                  </span>
                )}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchAppliedCandidatesForOffer: (offerId: string) =>
    dispatch(fetchAppliedCandidatesForOffer(offerId)),
});

export default connect(null, mapDispatchToProps)(OfferAppliedCandidates);
