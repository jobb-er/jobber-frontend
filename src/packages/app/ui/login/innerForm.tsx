import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { FormikProps, Form } from "formik";

import { addAsterisk } from "common/utils";
import { Input, Button } from "common/components";
import { LoginValues } from "../../models";

const InnerForm = ({
  touched,
  errors,
  isSubmitting,
  handleChange,
}: FormikProps<LoginValues>): ReactElement => {
  const { t } = useTranslation();

  return (
    <Form className="w-1/2 flex flex-col items-center gap-3">
      <Input
        label={addAsterisk(t("login.email"))}
        placeholder={t("login.emailPlaceholder")}
        type="email"
        name="email"
        onChange={handleChange}
        isError={touched && !!errors.email}
        errorMessage={t(errors?.email || "", {
          field: t("login.email"),
        })}
      />
      <Input
        label={addAsterisk(t("login.password"))}
        placeholder={t("login.password")}
        type="password"
        name="password"
        onChange={handleChange}
        isError={touched && !!errors.password}
        errorMessage={t(errors?.password || "", {
          field: t("login.password"),
        })}
      />
      <span className="text-error h-8 font-semibold">
        {t(errors?.invalid || "")}
      </span>
      <Button disabled={isSubmitting} type="submit">
        {t("login.login")}
      </Button>
    </Form>
  );
};

export default InnerForm;
