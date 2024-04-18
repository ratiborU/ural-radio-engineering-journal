"use client"
import React from 'react';
import image from "../../public/assets/image 4.svg"
import image2 from "../../public/assets/image 3.svg"
import Link from 'next/link';
import Image from 'next/image';
import { usePathname  } from 'next/navigation';

import { useLanguageContext } from '../i18n/languageContext';
import { LOCALES } from '../i18n/locales'
import { FormattedMessage } from 'react-intl'


const Header = () => {
  const {localeChange} = useLanguageContext();
  const pathname = usePathname ();
  const checkActiveLinc = (path: string) => pathname == path ? 'header__group-link header__group-link-active' : 'header__group-link';

  return (
    <header className='header'>
         <nav className='header__nav'>
          <div className="header__nav-group">
            <Link className={checkActiveLinc("/catalog")}  href="/catalog"><FormattedMessage id='header-navlink1' /></Link>
            <Link className={checkActiveLinc("/editors")} href="/editors"><FormattedMessage id='header-navlink2' /></Link>
            <Link className={checkActiveLinc("/")} href="/"><FormattedMessage id='header-navlink3' /></Link>
          </div>
          <div className="header__nav-group">
            <Link className="header__group-link header__group-link_logo" href="/">URAL RADIO ENGINEERING JOURNAL</Link>
          </div>
          <div className="header__nav-group">
            <Link className={checkActiveLinc("/contacts")} href="/contacts"><FormattedMessage id='header-navlink4' /></Link>
            <Link className={checkActiveLinc("/authors")} href="/authors"><FormattedMessage id='header-navlink5' /></Link>
          </div>
        </nav>

        <div className='header__languages'>
          <div className="header__language-img">
            <Image src={image} width="30" height="30" alt="" onClick={() => localeChange(LOCALES.ENGLISH)}/>
          </div>
          <div className="header__language-img">
            <Image src={image2}  width="30" height="30" alt="" onClick={() => localeChange(LOCALES.RUSSIAN)}/>
          </div>
        </div>
      </header>
  );
};

export default Header;