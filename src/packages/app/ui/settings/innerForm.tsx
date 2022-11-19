import { ReactElement } from "react";
import { FormikProps, Form } from "formik";
import { useTranslation } from "react-i18next";

import { Input, Label, Button } from "../../../../common/components";
import { SettingsFormValues } from "./types";

const InnerForm = ({
  handleChange,
  touched,
  isValid,
  errors,
  values,
}: FormikProps<SettingsFormValues>): ReactElement => {
  const { t } = useTranslation();

  return (
    <Form className="flex flex-col gap-5">
      <Label>{t("settings.account")}</Label>
      <div className="flex items-center gap-5">
        <Input
          onChange={handleChange}
          name="password"
          type="password"
          label={t("settings.changePassword")}
          placeholder={t("settings.password")}
          isError={touched && !!errors.password}
          errorMessage={t(errors?.password || "", {
            field: t("settings.password"),
          })}
        />
        <Input
          onChange={handleChange}
          name="confirmPassword"
          type="password"
          label={t("settings.confirmPassword")}
          placeholder={t("settings.password")}
          isError={touched && !!errors.confirmPassword}
          errorMessage={t(errors?.confirmPassword || "", {
            field: t("settings.password"),
          })}
        />
      </div>
      <Input
        onChange={handleChange}
        name="email"
        label={t("settings.changeEmail")}
        placeholder={t("settings.email")}
        width="w-1/2"
        isError={touched && !!errors.email}
        errorMessage={t(errors?.email || "", {
          field: t("settings.email"),
        })}
      />
      {isValid && (values.password || values.email) ? (
        <Button type="submit">{t("settings.change")}</Button>
      ) : (
        <></>
      )}
    </Form>
  );
};

export default InnerForm;
