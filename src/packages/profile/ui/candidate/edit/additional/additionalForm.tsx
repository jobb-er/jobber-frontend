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
  CandidateAdditionalFormValues,
  CandidateAdditionalItemFormValues,
} from "packages/profile/models/types";
import { initialAdditionalItemFormValues } from "common/constants/profile";
import { ReactComponent as CheckMarkIcon } from "common/images/offers/checkMark.svg";
import { Button, Link } from "common/components";
import { AdditionalFormProps } from "./types";
import AdditionalItemInnerForm from "./additionaltemInnerForm";

const TRANSLATION_PATH = "profile.candidate";
const requiredPath = "profile.errors.fieldRequired";

const AdditionalForm = ({
  data,
  submitAction,
}: AdditionalFormProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={data}
      validate={(values: { additional: CandidateAdditionalFormValues }) => {
        let errors = {
          additional: [] as (
            | CandidateAdditionalFormValues
            | Record<string, unknown>
          )[],
        };

        if (values.additional.length) {
          values.additional.forEach(
            (item: CandidateAdditionalItemFormValues) => {
              const error:
                | CandidateAdditionalItemFormValues
                | Record<string, unknown> = {};

              if (!item.title?.trim()?.length) error.title = requiredPath;

              errors.additional.push(error);
            },
          );
        }
        if (
          !errors.additional.filter((item) => Object.keys(item).length).length
        )
          return {};

        return errors;
      }}
      onSubmit={(values: { additional: CandidateAdditionalFormValues }): void =>
        submitAction(values)
      }
    >
      {({
        values,
        errors,
        handleChange,
      }: FormikProps<{ additional: CandidateAdditionalFormValues }>) => (
        <Form className="h-full overflow-y-auto pb-10">
          <FieldArray
            name="additional"
            render={({ remove, push }: FieldArrayRenderProps) => (
              <div className="flex flex-col">
                {values.additional.length ? (
                  values.additional.map(
                    (
                      _: CandidateAdditionalItemFormValues,
                      index: number,
                    ): ReactElement => (
                      <AdditionalItemInnerForm
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
                    onClick={() => push(initialAdditionalItemFormValues)}
                    title={t(`${TRANSLATION_PATH}.addNewAdditional`)}
                    textSize="text-md"
                  />
                  <Button type="submit" additionalClassName="self-end">
                    <div className="flex items-center gap-3">
                      <CheckMarkIcon className="w-4 h-4" />
                      {t("profile.save")}
                    </div>
                  </Button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    </Formik>
  );
};

export default AdditionalForm;
