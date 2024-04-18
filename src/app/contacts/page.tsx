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
    // <div className="contacts">
    //   <div className="contacts__mail-address contacts__title">Почтовый адрес</div>
    //   <div className="contacts__address contacts__text">Россия, 620002, Екатеринбург, ул. Мира, 32, оф. 129а</div>
    //   <div className="contacts__address contacts__text">Тел.: +7 (343) 375-97-02</div>
    //   <div className="contacts__address contacts__address_last contacts__text">E-mail: urj@urfu.ru</div>
    //   <div className="contacts__map">
    //     <Image src={map} alt="" />
    //   </div>
    //   <div className="contacts__editor contacts__title">Представитель редакции</div>
    //   <div className="contacts__editor-information">
    //     <div className="contacts__editor-information-name contacts__text">Папуловская Наталья Владимировна</div>
    //     <div className="contacts__editor-information-phone contacts__text">Телефон: 8 (343) 375-97-02</div>
    //     <div className="contacts__editor-information-email contacts__text">E-mail: n.v.papulovskaia@urfu.ru</div>
    //   </div>

    //   <div className="contacts__support contacts__title">Представитель технической поддержки</div>
    //   <div className="contacts__support-information">
    //     <div className="contacts__support-information-name contacts__text">Кобелев Андрей Андреевич</div>
    //     <div className="contacts__support-information-email contacts__text">E-mail: qwink186@icloud.com</div>
    //   </div>
    // </div>
  )
};

export default ContactsPage;