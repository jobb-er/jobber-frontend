import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import {
  Formik,
  Form,
  FieldArray,
  FormikProps,
  FieldArrayRenderProps,
} from "formik";

import {
  CandidateEducationItemFormValues,
  CandidateEducationFormValues,
} from "packages/profile/models";
import { initialEducationItemFormValues } from "common/constants";
import { useProfileContext } from "packages/profile/ui/context";
import { ReactComponent as CheckMarkIcon } from "common/images/offers/checkMark.svg";
import { Button, Link } from "common/components";
import { EducationFormProps } from "./types";
import EducationItemInnerForm from "./educationItemInnerForm";

const TRANSLATION_PATH = "profile.candidate";
const requiredPath = "profile.errors.fieldRequired";

const EducationForm = ({
  data,
  submitAction,
}: EducationFormProps): ReactElement => {
  const { t } = useTranslation();
  const { setMode } = useProfileContext();

  return (
    <Formik
      initialValues={data}
      validate={(values: { education: CandidateEducationFormValues }) => {
        let errors = {
          education: [] as (
            | CandidateEducationFormValues
            | Record<string, unknown>
          )[],
        };

        if (values.education.length) {
          values.education.forEach((item: CandidateEducationItemFormValues) => {
            const error:
              | CandidateEducationItemFormValues
              | Record<string, unknown> = {};

            if (!item.school?.trim()?.length) error.school = requiredPath;
            if (!item.degree.trim()?.length) error.degree = requiredPath;
            if (!item.name.trim()?.length) error.name = requiredPath;
            if (!item.from.trim()?.length) error.from = requiredPath;
            if (!item.to.trim().length) error.to = requiredPath;

            errors.education.push(error);
          });
        }
        if (!errors.education.filter((item) => Object.keys(item).length).length)
          return {};

        return errors;
      }}
      onSubmit={(values: { education: CandidateEducationFormValues }): void =>
        submitAction(values)
      }
    >
      {({
        values,
        errors,
        handleChange,
      }: FormikProps<{
        education: CandidateEducationFormValues;
      }>) => (
        <Form className="h-full overflow-y-auto pb-10">
          <FieldArray
            name="education"
            render={({ remove, push }: FieldArrayRenderProps) => (
              <div className="flex flex-col">
                {values.education.length ? (
                  values.education.map(
                    (
                      _: CandidateEducationItemFormValues,
                      index: number,
                    ): ReactElement => (
                      <EducationItemInnerForm
                        key={index}
                        index={index}
                        remove={remove}
                        handleChange={handleChange}
                        errors={errors}
                        values={values}
                      />
                    ),
                  )
                ) : (
                  <></>
                )}
                <div className="flex items-center justify-between py-6">
                  <Link
                    onClick={() => push(initialEducationItemFormValues)}
                    title={t(`${TRANSLATION_PATH}.addNewEducation`)}
                    textSize="text-md"
                  />
                  <div className="flex items-center gap-4 self-end">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setMode("view")}
                    >
                      {t("profile.view")}
                    </Button>
                    <Button type="submit">
                      <div className="flex items-center gap-3">
                        <CheckMarkIcon className="w-4 h-4" />
                        {t("profile.save")}
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    </Formik>
  );
};

export default EducationForm;
