import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { addAsterisk } from "common/utils";
import { Input, Textarea } from "common/components";
import {
  deleteCandidateProfileEducationItem,
  fetchCandidateProfile,
} from "packages/profile/store/actions/profileActions";
import { EducationItemInnerFormProps } from "./types";

const TRANSLATION_PATH = "profile.candidate";

const EducationItemInnerForm = ({
  index,
  remove,
  handleChange,
  errors,
  values,
  fetchCandidateProfile,
}: EducationItemInnerFormProps): ReactElement => {
  const { t } = useTranslation();

  const handleOnRemoveItem = async (): Promise<void> => {
    const idToRemove = values.education[index]?.id;
    if (idToRemove) {
      await deleteCandidateProfileEducationItem(idToRemove);
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
          name={`education.${index}.school`}
          onChange={handleChange}
          defaultValue={values.education[index].school}
          label={addAsterisk(t(`${TRANSLATION_PATH}.school`))}
          isError={
            errors.education &&
            errors.education[index] &&
            // @ts-ignore
            errors.education[index]?.school
          }
          errorMessage={t(
            // @ts-ignore
            errors?.education?.[index]?.school || "",
            {
              field: t(`${TRANSLATION_PATH}.school`),
            },
          )}
          placeholder={t(`${TRANSLATION_PATH}.school`)}
        />
        <Input
          name={`education.${index}.degree`}
          onChange={handleChange}
          defaultValue={values.education[index].degree}
          additionalClassName="col-span-2"
          label={addAsterisk(t(`${TRANSLATION_PATH}.degree`))}
          placeholder={t(`${TRANSLATION_PATH}.degree`)}
          isError={
            errors.education &&
            errors.education[index] &&
            // @ts-ignore
            errors.education[index]?.degree
          }
          errorMessage={t(
            // @ts-ignore
            errors?.education?.[index]?.degree || "",
            {
              field: t(`${TRANSLATION_PATH}.degree`),
            },
          )}
        />
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-10">
        <Input
          name={`education.${index}.name`}
          type="text"
          onChange={handleChange}
          defaultValue={values.education[index].name}
          label={addAsterisk(t(`${TRANSLATION_PATH}.name`))}
          placeholder={t(`${TRANSLATION_PATH}.name`)}
          isError={
            errors.education &&
            errors.education[index] &&
            // @ts-ignore
            errors.education[index]?.name
          }
          errorMessage={t(
            // @ts-ignore
            errors?.education?.[index]?.name || "",
            {
              field: t(`${TRANSLATION_PATH}.name`),
            },
          )}
        />
        <Input
          name={`education.${index}.from`}
          onChange={handleChange}
          defaultValue={values.education[index].from}
          label={addAsterisk(t(`${TRANSLATION_PATH}.from`))}
          placeholder={t(`${TRANSLATION_PATH}.mmYyyy`)}
          isError={
            errors.education &&
            errors.education[index] &&
            // @ts-ignore
            errors.education[index]?.from
          }
          errorMessage={t(
            // @ts-ignore
            errors?.education?.[index]?.from || "",
            {
              field: t(`${TRANSLATION_PATH}.from`),
            },
          )}
        />
        <Input
          name={`education.${index}.to`}
          onChange={handleChange}
          defaultValue={values.education[index].to}
          label={addAsterisk(t(`${TRANSLATION_PATH}.to`))}
          placeholder={t(`${TRANSLATION_PATH}.mmYyyy`)}
          isError={
            errors.education &&
            errors.education[index] &&
            // @ts-ignore
            errors.education[index]?.to
          }
          errorMessage={t(
            // @ts-ignore
            errors?.education?.[index]?.to || "",
            {
              field: t(`${TRANSLATION_PATH}.to`),
            },
          )}
        />
      </div>
      <Textarea
        name={`education.${index}.details`}
        onChange={handleChange}
        defaultValue={values.education[index].details}
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

export default connect(null, mapDispatchToProps)(EducationItemInnerForm);
