import { ReactElement } from "react";

import { ReactComponent as NoAvatarIcon } from "common/images/top-bar/noAvatar.svg";
import { ReactComponent as LinkIcon } from "common/images/profile/link.svg";
import { ReactComponent as LinkedinIcon } from "common/images/profile/linkedin.svg";
import { ReactComponent as LocationIcon } from "common/images/profile/location.svg";
import { ReactComponent as MailIcon } from "common/images/profile/mail.svg";
import { ReactComponent as PhoneIcon } from "common/images/profile/phone.svg";
import { AboutProps, IconTextContainerProps } from "./types";

const IconTextContainer = ({
  Icon,
  children,
}: IconTextContainerProps): ReactElement => (
  <div className="flex items-center gap-2">
    <Icon className="w-4 h-4" />
    {children}
  </div>
);

const About = ({ about }: AboutProps): ReactElement => (
  <section className="flex flex-col gap-8 pt-8 text-primary">
    <div className="flex items-center gap-10">
      <div className="w-40 h-40 border border-primary rounded-full">
        {about?.avatar ? (
          <img
            src={about.avatar}
            alt="avatar"
            className="rounded-full w-full h-full"
          />
        ) : (
          <NoAvatarIcon className="w-40 h-40 p-14 text-primary" />
        )}
      </div>
      <div className="grid grid-cols-2 grid-flow-row gap-x-8 gap-y-4">
        <span className="font-bold text-3xl col-span-2">{`${about?.firstName} ${about?.lastName}`}</span>
        {about?.email ? (
          <IconTextContainer Icon={MailIcon}>
            <a href={`mailto:${about?.email}`} className="underline">
              {about?.email}
            </a>
          </IconTextContainer>
        ) : (
          <></>
        )}
        {about?.phoneNumber ? (
          <IconTextContainer Icon={PhoneIcon}>
            <a href={`tel:${about?.phoneNumber}`}>{about?.phoneNumber}</a>
          </IconTextContainer>
        ) : (
          <></>
        )}
        {about?.linkedin ? (
          <IconTextContainer Icon={LinkedinIcon}>
            <a href={about?.linkedin} target="_blank" rel="noreferrer">
              {about?.linkedin}
            </a>
          </IconTextContainer>
        ) : (
          <></>
        )}
        {about?.portfolio ? (
          <IconTextContainer Icon={LinkIcon}>
            <a href={about?.portfolio} target="_blank" rel="noreferrer">
              {about?.portfolio}
            </a>
          </IconTextContainer>
        ) : (
          <></>
        )}
        {about?.country ? (
          <IconTextContainer Icon={LocationIcon}>
            <span className="text-secondary-dark">{about?.country}</span>
          </IconTextContainer>
        ) : (
          <></>
        )}
      </div>
    </div>
    <span className="whitespace-pre-wrap">{about?.bio}</span>
  </section>
);

export default About;
