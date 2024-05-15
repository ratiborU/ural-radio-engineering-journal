"use client"
import { FormattedMessage } from 'react-intl';
import image from '../../../public/assets/photo_5269545055805365753_y.jpg'
import Image from 'next/image';
import { title } from 'process';

// export const metadata = {
//   title: "dfdfdfdfd"
// }

const ForAuthorspage = () => {
  return (
    <>
      <div className='image'></div>

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p><FormattedMessage id='authors-paragraph__title1' /></p></div>
        <div className="paragraph__text">
          <p><FormattedMessage id='authors-paragraph__text1' /></p>
        </div>
        <ol className="paragraph__list-ol">
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item1' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item2' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item3' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item4' /></li>
        </ol>
      </div>

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p><FormattedMessage id='authors-paragraph__title2' /></p></div>
        <ul className="paragraph__list-ul paragraph__text_list">
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item5' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item6' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item7' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item8' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item9' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item10' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item11' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item12' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item13' /></li>
        </ul>
      </div>

      <div className="forauthors__image">
      <Image src={image} alt="" />
      </div>
      

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p><FormattedMessage id='authors-paragraph__title3' /></p></div>
        <div className="paragraph__text">
          <p><FormattedMessage id='authors-paragraph__text2' /></p>
        </div>
        <div className="paragraph__text paragraph__text_list">
          <p><span className='paragraph__number'>2.2.2.</span> <FormattedMessage id='authors-paragraph__text3' /></p>
          <p><span className='paragraph__number'>2.2.8.</span> <FormattedMessage id='authors-paragraph__text4' /></p>
          <p><span className='paragraph__number'>2.2.13.</span> <FormattedMessage id='authors-paragraph__text5' /></p>
          <p><span className='paragraph__number'>2.2.14.</span> <FormattedMessage id='authors-paragraph__text6' /></p>
          <p><span className='paragraph__number'>2.2.15.</span> <FormattedMessage id='authors-paragraph__text7' /></p>
          <p><span className='paragraph__number'>2.2.16.</span> <FormattedMessage id='authors-paragraph__text8' /></p>
        </div>
      </div>

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p><FormattedMessage id='authors-paragraph__titile4' /></p></div>
        <ol className="paragraph__list-ol">
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text9' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text10' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text11' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text12' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text13' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text14' /></li>
        </ol>
      </div>
    </>
  );
};

export default ForAuthorspage;