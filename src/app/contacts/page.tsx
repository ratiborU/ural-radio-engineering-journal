"use client"
import React from 'react';
import Image from 'next/image';
import map from "../../../public/assets/photo_5269545055805365753_y.jpg";
import { FormattedMessage } from 'react-intl'

const ContactsPage = () => {
  return (
    <div className="contacts">
      <div className="contacts__mail-address contacts__title"><FormattedMessage id='contacts-mail-address' /></div>
      <div className="contacts__address contacts__text"><FormattedMessage id='contacts-address1' /></div>
      <div className="contacts__address contacts__text"><FormattedMessage id='contacts-address2' /></div>
      <div className="contacts__address contacts__address_last contacts__text"><FormattedMessage id='contacts-address3' /></div>
      <div className="contacts__map">
        <Image src={map} alt="" />
      </div>
      <div className="contacts__editor contacts__title"><FormattedMessage id='contacts-editor' /></div>
      <div className="contacts__editor-information">
        <div className="contacts__editor-information-name contacts__text"><FormattedMessage id='contacts-editor-information-name' /></div>
        <div className="contacts__editor-information-phone contacts__text"><FormattedMessage id='contacts-editor-information-phone' /></div>
        <div className="contacts__editor-information-email contacts__text"><FormattedMessage id='contacts-editor-information-email' /></div>
      </div>

      <div className="contacts__support contacts__title"><FormattedMessage id='contacts-support' /></div>
      <div className="contacts__support-information">
        <div className="contacts__support-information-name contacts__text"><FormattedMessage id='contacts-support-information-name' /></div>
        <div className="contacts__support-information-email contacts__text"><FormattedMessage id='contacts-support-information-email' /></div>
      </div>
    </div>
  )
};

export default ContactsPage;