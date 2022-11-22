import { ReactElement } from "react";
import { FormikProps, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { addAsterisk } from "../../../../../../common/utils";
import { ReactComponent as BuildingIcon } from "../../../../../../common/images/offers/building.svg";
import { ReactComponent as MapPinIcon } from "../../../../../../common/images/offers/mapPin.svg";
import { ReactComponent as ExperienceIcon } from "../../../../../../common/images/offers/experience.svg";
import { ReactComponent as MoneyIcon } from "../../../../../../common/images/offers/money.svg";
import { ReactComponent as CheckMarkIcon } from "../../../../../../common/images/offers/checkMark.svg";
import { Input, Button, Textarea } from "../../../../../../common/components";
import { MY_OFFERS } from "../../../../../../common/constants";
import { NewOfferValues } from "../../../../models";
const TRANSLATION_PATH = "myOffers.recruiter";

const InnerForm = ({
  handleChange,
  touched,
  errors,
}: FormikProps<NewOfferValues>): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Form className="flex flex-col h-full">
      <section className="flex flex-col p-6 h-full overflow-y-auto text-secondary-dark">
        <div className="flex items-center">
          <Input
            onChange={handleChange}
            name="title"
            label={addAsterisk(t(`${TRANSLATION_PATH}.title`))}
            placeholder={t(`${TRANSLATION_PATH}.titlePlaceholder`)}
            isError={touched && !!errors.title}
            errorMessage={t(errors?.title || "", {
              field: t(`${TRANSLATION_PATH}.title`),
            })}
            width="w-1/2"
          />
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 w-full">
            <BuildingIcon className="w-7 h-7 mb-1.5" />
            <Input
              onChange={handleChange}
              name="companyName"
              label={addAsterisk(t(`${TRANSLATION_PATH}.companyName`))}
              placeholder={t(`${TRANSLATION_PATH}.companyName`)}
              isError={touched && !!errors.companyName}
              errorMessage={t(errors?.companyName || "", {
                field: t(`${TRANSLATION_PATH}.companyName`),
              })}
            />
          </div>
          <div className="flex items-center gap-2 w-full">
            <MapPinIcon className="w-7 h-7 mb-1.5" />
            <Input
              onChange={handleChange}
              name="location"
              label={addAsterisk(t(`${TRANSLATION_PATH}.location`))}
              placeholder={t(`${TRANSLATION_PATH}.locationPlaceholder`)}
              isError={touched && !!errors.location}
              errorMessage={t(errors?.location || "", {
                field: t(`${TRANSLATION_PATH}.location`),
              })}
            />
          </div>
        </div>
        <div className="flex items-center gap-8 w-full">
          <div className="flex items-center gap-2 w-1/2">
            <ExperienceIcon className="w-7 h-7 mb-1.5" />
            <Input
              onChange={handleChange}
              name="experience"
              label={addAsterisk(t(`${TRANSLATION_PATH}.experience`))}
              placeholder={t(`${TRANSLATION_PATH}.experiencePlaceholder`)}
              isError={touched && !!errors.experience}
              errorMessage={t(errors?.experience || "", {
                field: t(`${TRANSLATION_PATH}.experience`),
              })}
            />
          </div>
          <div className="flex items-center gap-2 w-1/2">
            <MoneyIcon className="w-7 h-7 mb-1.5" />
            <div className="flex items-center gap-2">
              <Input
                onChange={handleChange}
                name="bottomPayrange"
                type="number"
                label={t(`${TRANSLATION_PATH}.bottomPayrange`)}
                placeholder="3000"
              />
              <span className="text-primary">-</span>
              <Input
                onChange={handleChange}
                name="topPayrange"
                type="number"
                label={t(`${TRANSLATION_PATH}.topPayrange`)}
                placeholder="5000"
              />
            </div>
            <Input
              onChange={handleChange}
              name="currency"
              label={t(`${TRANSLATION_PATH}.currency`)}
              placeholder="EUR"
              width="w-1/3"
            />
          </div>
        </div>
        <Textarea
          onChange={handleChange}
          name="description"
          label={addAsterisk(t(`${TRANSLATION_PATH}.description`))}
          placeholder={t(`${TRANSLATION_PATH}.descriptionPlaceholder`)}
          isError={touched && !!errors.description}
          errorMessage={t(errors?.description || "", {
            field: t(`${TRANSLATION_PATH}.description`),
          })}
        />
      </section>
      <div className="flex items-center gap-3 justify-end bg-secondary-light w-full h-16 px-6 py-3 rounded-b-xl">
        <Button variant="secondary" onClick={() => navigate(MY_OFFERS)}>
          {t(`${TRANSLATION_PATH}.cancel`)}
        </Button>
        <Button type="submit">
          <div className="flex items-center gap-3">
            <CheckMarkIcon className="w-4 h-4" />
            {t(`${TRANSLATION_PATH}.post`)}
          </div>
        </Button>
      </div>
    </Form>
  );
};

export default InnerForm;
