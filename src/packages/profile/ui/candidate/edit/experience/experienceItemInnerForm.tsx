import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { addAsterisk } from "common/utils";
import { Input, Textarea } from "common/components";
import {
  deleteCandidateProfileExperienceItem,
  fetchCandidateProfile,
} from "packages/profile/store/actions/profileActions";
import { ExperienceItemInnerFormProps } from "./types";

const TRANSLATION_PATH = "profile.candidate";

const ExperienceItemInnerForm = ({
  index,
  remove,
  handleChange,
  errors,
  values,
  fetchCandidateProfile,
}: ExperienceItemInnerFormProps): ReactElement => {
  const { t } = useTranslation();

  const handleOnRemoveItem = async (): Promise<void> => {
    const idToRemove = values.experience[index]?.id;
    if (idToRemove) {
      await deleteCandidateProfileExperienceItem(idToRemove);
      return fetchCandidateProfile();
    }

    remove(index);
  };

  return (
    <div className="border-b py-8 first:py-0 first:pb-8 border-action relative">
      <button
        className="absolute top-5 right-5 text-lg w-8 h-8 pb-1 bg-error rounded-full text-white font-semibold"
        onClick={handleOnRemoveItem}
        type="button"
      >
        x
      </button>
      <div className="grid grid-cols-3 grid-rows-1 gap-10">
        <Input
          name={`experience.${index}.jobTitle`}
          type="text"
          onChange={handleChange}
          defaultValue={values.experience[index].jobTitle}
          label={addAsterisk(t(`${TRANSLATION_PATH}.jobTitle`))}
          isError={
            errors.experience &&
            errors.experience[index] &&
            // @ts-ignore
            errors.experience[index]?.jobTitle
          }
          errorMessage={t(
            // @ts-ignore
            errors?.experience?.[index]?.jobTitle || "",
            {
              field: t(`${TRANSLATION_PATH}.jobTitle`),
            },
          )}
          placeholder={t(`${TRANSLATION_PATH}.jobTitle`)}
        />
        <Input
          name={`experience.${index}.company`}
          type="text"
          onChange={handleChange}
          defaultValue={values.experience[index].company}
          additionalClassName="col-span-2"
          label={addAsterisk(t(`${TRANSLATION_PATH}.company`))}
          placeholder={t(`${TRANSLATION_PATH}.company`)}
          isError={
            errors.experience &&
            errors.experience[index] &&
            // @ts-ignore
            errors.experience[index]?.company
          }
          errorMessage={t(
            // @ts-ignore
            errors?.experience?.[index]?.company || "",
            {
              field: t(`${TRANSLATION_PATH}.company`),
            },
          )}
        />
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-10">
        <Input
          name={`experience.${index}.country`}
          type="text"
          onChange={handleChange}
          defaultValue={values.experience[index].country}
          label={addAsterisk(t(`${TRANSLATION_PATH}.country`))}
          placeholder={t(`${TRANSLATION_PATH}.country`)}
          isError={
            errors.experience &&
            errors.experience[index] &&
            // @ts-ignore
            errors.experience[index]?.country
          }
          errorMessage={t(
            // @ts-ignore
            errors?.experience?.[index]?.country || "",
            {
              field: t(`${TRANSLATION_PATH}.country`),
            },
          )}
        />
        <Input
          name={`experience.${index}.from`}
          type="text"
          onChange={handleChange}
          defaultValue={values.experience[index].from}
          label={addAsterisk(t(`${TRANSLATION_PATH}.from`))}
          placeholder={t(`${TRANSLATION_PATH}.mmYyyy`)}
          isError={
            errors.experience &&
            errors.experience[index] &&
            // @ts-ignore
            errors.experience[index]?.from
          }
          errorMessage={t(
            // @ts-ignore
            errors?.experience?.[index]?.from || "",
            {
              field: t(`${TRANSLATION_PATH}.from`),
            },
          )}
        />
        <Input
          name={`experience.${index}.to`}
          type="text"
          onChange={handleChange}
          defaultValue={values.experience[index].to}
          label={addAsterisk(t(`${TRANSLATION_PATH}.to`))}
          placeholder={t(`${TRANSLATION_PATH}.mmYyyy`)}
          isError={
            errors.experience &&
            errors.experience[index] &&
            // @ts-ignore
            errors.experience[index]?.to
          }
          errorMessage={t(
            // @ts-ignore
            errors?.experience?.[index]?.to || "",
            {
              field: t(`${TRANSLATION_PATH}.to`),
            },
          )}
        />
      </div>
      <Textarea
        name={`experience.${index}.details`}
        onChange={handleChange}
        defaultValue={values.experience[index].details}
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

export default connect(null, mapDispatchToProps)(ExperienceItemInnerForm);
