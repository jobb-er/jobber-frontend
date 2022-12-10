import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { FormikProps, Form } from "formik";

import { RECRUITER, CANDIDATE } from "common/constants";
import { addAsterisk } from "common/utils";
import { Input, Button, Select, Checkbox } from "common/components";
import { RegisterFormValues } from "./types";

const InnerForm = ({
  touched,
  errors,
  isSubmitting,
  handleChange,
  setFieldValue,
  values,
}: FormikProps<RegisterFormValues>): ReactElement => {
  const { t } = useTranslation();

  const roleOptions = [t("roles.candidate"), t("roles.recruiter")];

  return (
    <Form className="flex flex-col gap-3 w-full items-center">
      <div className="grid grid-cols-2 gap-x-5 gap-y-3 w-3/4">
        <Input
          label={addAsterisk(t("register.firstName"))}
          placeholder={t("register.firstNamePlaceholder")}
          name="firstName"
          onChange={handleChange}
          isError={touched && !!errors.firstName}
          errorMessage={t(errors?.firstName || "", {
            field: t("register.firstName"),
          })}
        />
        <Input
          label={addAsterisk(t("register.lastName"))}
          placeholder={t("register.lastNamePlaceholder")}
          name="lastName"
          onChange={handleChange}
          isError={touched && !!errors.lastName}
          errorMessage={t(errors?.lastName || "", {
            field: t("register.lastName"),
          })}
        />
        <Input
          label={addAsterisk(t("register.password"))}
          placeholder={t("register.password")}
          type="password"
          name="password"
          onChange={handleChange}
          isError={touched && !!errors.password}
          errorMessage={t(errors?.password || "", {
            field: t("register.password"),
          })}
        />
        <Input
          label={addAsterisk(t("register.confirmPassword"))}
          placeholder={t("register.password")}
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          isError={touched && !!errors.confirmPassword}
          errorMessage={t(errors?.confirmPassword || "", {
            field: t("register.confirmPassword"),
          })}
        />
        <Select
          label={addAsterisk(t("register.role"))}
          placeholder={t("register.rolePlaceholder")}
          value={values.role && t(`roles.${values.role.toLowerCase()}`)}
          onChange={(newRole: string): void =>
            setFieldValue(
              "role",
              newRole === t("roles.recruiter") ? RECRUITER : CANDIDATE,
            )
          }
          options={roleOptions}
          isError={touched && !!errors.role}
          errorMessage={t(errors?.role || "", {
            field: t("register.role"),
          })}
        />
        <Input
          label={addAsterisk(t("register.email"))}
          placeholder={t("register.emailPlaceholder")}
          type="email"
          name="email"
          onChange={handleChange}
          isError={touched && !!errors.email}
          errorMessage={t(errors?.email || "", {
            field: t("register.email"),
          })}
        />
        <Checkbox
          isChecked={values.acceptedTerms}
          onCheck={(check: boolean) => setFieldValue("acceptedTerms", check)}
          additionalClassName="col-span-2"
          label={t("register.acceptTerms")}
          isError={touched && !!errors.acceptedTerms}
          errorMessage={t(errors?.acceptedTerms || "")}
        />
      </div>
      <Button disabled={isSubmitting} type="submit">
        {t("register.register")}
      </Button>
    </Form>
  );
};

export default InnerForm;
