import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { addAsterisk } from "common/utils";
import { Input, Textarea } from "common/components";
import {
  deleteCandidateProfileAdditionalItem,
  fetchCandidateProfile,
} from "packages/profile/store/actions/profileActions";
import { AdditionalItemInnerFormProps } from "./types";

const TRANSLATION_PATH = "profile.candidate";

const AdditionalItemInnerForm = ({
  index,
  remove,
  handleChange,
  errors,
  values,
  fetchCandidateProfile,
}: AdditionalItemInnerFormProps): ReactElement => {
  const { t } = useTranslation();

  const handleOnRemoveItem = async (): Promise<void> => {
    const idToRemove = values.additional[index]?.id;
    if (idToRemove) {
      await deleteCandidateProfileAdditionalItem(idToRemove);
      return fetchCandidateProfile();
    }

    remove(index);
  };

  return (
    <div className="flex flex-col border-b py-8 first:py-0 first:pb-8 border-action relative">
      <button
        className="absolute top-5 right-5 text-lg w-8 h-8 pb-1 bg-error rounded-full text-white font-semibold"
        onClick={handleOnRemoveItem}
        type="button"
      >
        x
      </button>
      <Input
        name={`additional.${index}.title`}
        onChange={handleChange}
        defaultValue={values.additional[index].title}
        label={addAsterisk(t(`${TRANSLATION_PATH}.additionalTitle`))}
        isError={
          errors.additional &&
          errors.additional[index] &&
          // @ts-ignore
          errors.additional[index]?.title
        }
        errorMessage={t(
          // @ts-ignore
          errors?.additional?.[index]?.title || "",
          {
            field: t(`${TRANSLATION_PATH}.title`),
          },
        )}
        placeholder={t(`${TRANSLATION_PATH}.title`)}
        width="w-1/3"
      />
      <Textarea
        name={`additional.${index}.details`}
        onChange={handleChange}
        defaultValue={values.additional[index].details}
        label={t(`${TRANSLATION_PATH}.details`)}
        height="h-32"
        placeholder={t(`${TRANSLATION_PATH}.detailsPlaceholder`)}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchCandidateProfile: () => dispatch(fetchCandidateProfile()),
});

export default connect(null, mapDispatchToProps)(AdditionalItemInnerForm);
