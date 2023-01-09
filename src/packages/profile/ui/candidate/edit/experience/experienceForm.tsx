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
  CandidateExperienceItemFormValues,
  CandidateExperienceFormValues,
} from "packages/profile/models/types";
import { initialExperienceItemFormValues } from "common/constants";
import { useProfileContext } from "packages/profile/ui/context";
import { ReactComponent as CheckMarkIcon } from "common/images/offers/checkMark.svg";
import { Button, Link } from "common/components";
import { ExperienceFormProps } from "./types";
import ExperienceItemInnerForm from "./experienceItemInnerForm";

const TRANSLATION_PATH = "profile.candidate";
const requiredPath = "profile.errors.fieldRequired";

const ExperienceForm = ({
  data,
  submitAction,
}: ExperienceFormProps): ReactElement => {
  const { t } = useTranslation();
  const { setMode } = useProfileContext();

  return (
    <Formik
      initialValues={data}
      validate={(values: { experience: CandidateExperienceFormValues }) => {
        let errors = {
          experience: [] as (
            | CandidateExperienceItemFormValues
            | Record<string, unknown>
          )[],
        };

        if (values.experience.length) {
          values.experience.forEach(
            (item: CandidateExperienceItemFormValues) => {
              const error:
                | CandidateExperienceItemFormValues
                | Record<string, unknown> = {};

              if (!item.jobTitle.trim().length) error.jobTitle = requiredPath;
              if (!item.company.trim().length) error.company = requiredPath;
              if (!item.country.trim().length) error.country = requiredPath;
              if (!item.from.trim().length) error.from = requiredPath;
              if (!item.to.trim().length) error.to = requiredPath;

              errors.experience.push(error);
            },
          );
        }
        if (
          !errors.experience.filter((item) => Object.keys(item).length).length
        )
          return {};

        return errors;
      }}
      onSubmit={(values: { experience: CandidateExperienceFormValues }): void =>
        submitAction(values)
      }
    >
      {({
        values,
        errors,
        handleChange,
      }: FormikProps<{
        experience: CandidateExperienceFormValues;
      }>) => (
        <Form className="h-full overflow-y-auto pb-10">
          <FieldArray
            name="experience"
            render={({ remove, push }: FieldArrayRenderProps) => (
              <div className="flex flex-col">
                {values.experience.length ? (
                  values.experience.map(
                    (
                      _: CandidateExperienceItemFormValues,
                      index: number,
                    ): ReactElement => (
                      <ExperienceItemInnerForm
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
                    onClick={() => push(initialExperienceItemFormValues)}
                    title={t(`${TRANSLATION_PATH}.addNewExperience`)}
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

export default ExperienceForm;
