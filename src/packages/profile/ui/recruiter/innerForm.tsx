import { ReactElement } from "react";
import { Form, FormikProps } from "formik";
import { useTranslation } from "react-i18next";

import { addAsterisk } from "common/utils";
import { Input, ImageUploader, Button } from "common/components";
import { ReactComponent as CheckMarkIcon } from "common/images/offers/checkMark.svg";
import { RecruiterProfileFormValues } from "packages/profile/models";

const TRANSLATION_PATH = "profile.common";

const InnerForm = ({
  initialValues,
  handleChange,
  setFieldValue,
  touched,
  errors,
  values,
}: FormikProps<RecruiterProfileFormValues>): ReactElement => {
  const { t } = useTranslation();

  return (
    <Form className="flex flex-col gap-8 py-8 px-10 h-full">
      <div className="flex items-center gap-10">
        <ImageUploader
          title={t("profile.common.uploadAvatar")}
          image={initialValues?.avatar || values?.avatar || ""}
          onChange={(newImage: string) => setFieldValue("avatar", newImage)}
        />
        <Input
          defaultValue={initialValues.firstName}
          onChange={handleChange}
          name="firstName"
          label={addAsterisk(t(`${TRANSLATION_PATH}.firstName`))}
          placeholder={t(`${TRANSLATION_PATH}.firstName`)}
          isError={touched && !!errors.firstName}
          errorMessage={t(errors?.firstName || "", {
            field: t(`${TRANSLATION_PATH}.firstName`),
          })}
          width="w-1/4"
        />
        <Input
          defaultValue={initialValues.lastName}
          onChange={handleChange}
          name="lastName"
          label={addAsterisk(t(`${TRANSLATION_PATH}.lastName`))}
          placeholder={t(`${TRANSLATION_PATH}.lastName`)}
          isError={touched && !!errors.lastName}
          errorMessage={t(errors?.lastName || "", {
            field: t(`${TRANSLATION_PATH}.lastName`),
          })}
          width="w-1/4"
        />
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-10">
        <Input
          label={addAsterisk(t(`${TRANSLATION_PATH}.email`))}
          placeholder={t(`${TRANSLATION_PATH}.email`)}
          type="email"
          name="email"
          onChange={handleChange}
          isError={touched && !!errors.email}
          defaultValue={initialValues.email}
          errorMessage={t(errors?.email || "", {
            field: t(`${TRANSLATION_PATH}.email`),
          })}
        />
        <Input
          label={addAsterisk(t(`${TRANSLATION_PATH}.phoneNumber`))}
          placeholder="+1 111 222 333"
          name="phoneNumber"
          onChange={handleChange}
          isError={touched && !!errors.phoneNumber}
          defaultValue={initialValues.phoneNumber}
          errorMessage={t(errors?.phoneNumber || "", {
            field: t(`${TRANSLATION_PATH}.phoneNumber`),
          })}
        />
        <Input
          label={addAsterisk(t(`${TRANSLATION_PATH}.country`))}
          placeholder={t(`${TRANSLATION_PATH}.country`)}
          name="country"
          onChange={handleChange}
          isError={touched && !!errors.country}
          defaultValue={initialValues.country}
          errorMessage={t(errors?.country || "", {
            field: t(`${TRANSLATION_PATH}.country`),
          })}
        />
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-10">
        <Input
          label={t(`${TRANSLATION_PATH}.linkedin`)}
          placeholder={t(`${TRANSLATION_PATH}.link`)}
          name="linkedin"
          onChange={handleChange}
          defaultValue={initialValues.linkedin}
          isError={touched && !!errors.linkedin}
          errorMessage={t(errors?.linkedin || "", {
            field: t(`${TRANSLATION_PATH}.linkedin`),
          })}
        />
        <Input
          label={t("profile.recruiter.company")}
          placeholder={t("profile.recruiter.company")}
          name="company"
          defaultValue={initialValues.company}
          onChange={handleChange}
          isError={touched && !!errors.company}
          errorMessage={t(errors?.company || "", {
            field: t("profile.recruiter.company"),
          })}
        />
      </div>
      <Button type="submit" additionalClassName="self-end">
        <div className="flex items-center gap-3">
          <CheckMarkIcon className="w-4 h-4" />
          {t("profile.save")}
        </div>
      </Button>
    </Form>
  );
};

export default InnerForm;
