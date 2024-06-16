"use client"
import { FormattedMessage } from 'react-intl';
import image from '../../../public/assets/photo_5269545055805365753_y.jpg'
import Image from 'next/image';
import { title } from 'process';
import { getAuthorsStatic } from '@/data/WordPressApi';
import { useQuery } from '@tanstack/react-query';
import { getByLang, useLanguageContext } from '@/i18n/languageContext';
// import { AwaitedReactNode, JSXElementConstructor, AwaitedReactNode, JSXElementConstructor, AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, ReactElement, ReactNode, ReactPortal, ReactElement, ReactNode, ReactPortal } from 'react';



const ForAuthorspage = () => {
  const {lang} = useLanguageContext();
  
  const {status: articleStatus, data: staticAuthors, error: articleError} = useQuery({
    queryFn: async () => await getAuthorsStatic(),
    queryKey: ["authorsStatic"],
    staleTime: Infinity
  });

  if (articleStatus =='error') {
    return <>загрузка</>
  }

  if (articleStatus =='pending') {
    return <>загрузка</>
  }

  return (
    <>
      <div className='image'></div>

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p>{staticAuthors[lang.toLowerCase()][0][0].replaceAll('_', ' ')}</p></div>
        <div className="paragraph__text">
          <p>{staticAuthors[lang.toLowerCase()][0][1].text}</p>
        </div>
        <ol className="paragraph__list-ol">
          {staticAuthors[lang.toLowerCase()][0][1].files.map((item: string[], i: number) => (
            <li className='paragraph__item' key={i}>
              <a href={item[1]} download>
                {item[0].replaceAll('_', ' ')}
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p>{staticAuthors[lang.toLowerCase()][1][0].replaceAll('_', ' ')}</p></div>
        <ul className="paragraph__list-ul paragraph__text_list">
          {staticAuthors[lang.toLowerCase()][1][1].list.map((item: string, i: number) => 
            <li className='paragraph__item' key={i}>
              {item}
            </li>
          )}
        </ul>
      </div>

      <div className="forauthors__image">
        <Image src={staticAuthors[lang.toLowerCase()][1][1].images[0][1]} width={400} height={1000} alt=""/>
      </div>
      

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p>{staticAuthors[lang.toLowerCase()][2][0].replaceAll('_', ' ')}</p></div>
        <div className="paragraph__text">
          <p>{staticAuthors[lang.toLowerCase()][2][1].text}</p>
        </div>
        <div className="paragraph__text paragraph__text_list">
          {staticAuthors[lang.toLowerCase()][2][1].list_custom.map((item: string[], i: number) => 
            <p key={i}>
              <span className='paragraph__number'>{item[0]}</span>
              {item[1]}
            </p>
          )}
        </div>
      </div>

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p>{staticAuthors[lang.toLowerCase()][3][0].replaceAll('_', ' ')}</p></div>
        <ol className="paragraph__list-ol">
        {staticAuthors[lang.toLowerCase()][3][1].list.map((item: string, i: number) => 
            <li className='paragraph__item' key={i}>
              {item}
            </li>
          )}
        </ol>
      </div>
    </>
  );






  return (
    <>
      <div className='image'></div>

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p><FormattedMessage id='authors-paragraph__title1' /></p></div>
        <div className="paragraph__text">
          <p>{staticAuthors[lang.toLowerCase()][getByLang(lang, "Полезные_файлы", "Useful_files")].text}</p>
        </div>
        <ol className="paragraph__list-ol">
          {staticAuthors[lang.toLowerCase()][getByLang(lang, "Полезные_файлы", "Useful_files")].files.map((item: string[], i: number) => (
            <li className='paragraph__item' key ={i}>
              <a href={item[1]} download>
                {item[0].replaceAll('_', ' ')}
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p><FormattedMessage id='authors-paragraph__title2' /></p></div>
        <ul className="paragraph__list-ul paragraph__text_list">
          {staticAuthors[lang.toLowerCase()][getByLang(lang, "Общая_информация", "General_information")].list.map((item: string, i: number) => 
            <li className='paragraph__item' key={i}>
              {item}
            </li>
          )}
          {/* <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item5' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item6' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item7' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item8' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item9' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item10' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item11' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item12' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__item13' /></li> */}
        </ul>
      </div>

      <div className="forauthors__image">
        {/* <Image src={staticAuthors[lang.toLowerCase()][getByLang(lang, "Общая_информация", "General_information")].images[1]} alt="" /> */}
        {/* <Image src={staticAuthors[lang.toLowerCase()][getByLang(lang, "Общая_информация", "General_information")].images[1]} alt="" /> */}
        {/* <Image src="http://158.160.135.237:7006/wp-content/uploads/2024/06/photo_2023-10-23_19-23-14.jpg" width={400} height={1000} alt=""/> */}
        <Image src={staticAuthors[lang.toLowerCase()][getByLang(lang, "Общая_информация", "General_information")].images[0][1]} width={400} height={1000} alt=""/>
      </div>
      

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p><FormattedMessage id='authors-paragraph__title3' /></p></div>
        <div className="paragraph__text">
          <p>{staticAuthors[lang.toLowerCase()][getByLang(lang, "Направления_журнала", "Journal_directions")].text}</p>
        </div>
        <div className="paragraph__text paragraph__text_list">
          {staticAuthors[lang.toLowerCase()][getByLang(lang, "Направления_журнала", "Journal_directions")].list_custom.map((item: string[], i: number) => 
            <p key={i}>
              <span className='paragraph__number'>{item[0]}</span>
              {item[1]}
            </p>
          )}
          {/* <p><span className='paragraph__number'>2.2.2.</span> <FormattedMessage id='authors-paragraph__text3' /></p>
          <p><span className='paragraph__number'>2.2.8.</span> <FormattedMessage id='authors-paragraph__text4' /></p>
          <p><span className='paragraph__number'>2.2.13.</span> <FormattedMessage id='authors-paragraph__text5' /></p>
          <p><span className='paragraph__number'>2.2.14.</span> <FormattedMessage id='authors-paragraph__text6' /></p>
          <p><span className='paragraph__number'>2.2.15.</span> <FormattedMessage id='authors-paragraph__text7' /></p>
          <p><span className='paragraph__number'>2.2.16.</span> <FormattedMessage id='authors-paragraph__text8' /></p> */}
        </div>
      </div>

      <div className="main__paragraph paragraph">
        <div className="paragraph__title"><p><FormattedMessage id='authors-paragraph__titile4' /></p></div>
        <ol className="paragraph__list-ol">
        {staticAuthors[lang.toLowerCase()][getByLang(lang, "Принципы_рецензирования_статей", "Principles_of_article_review")].list.map((item: string, i: number) => 
            <li className='paragraph__item' key={i}>
              {item}
            </li>
          )}
          {/* <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text9' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text10' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text11' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text12' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text13' /></li>
          <li className='paragraph__item'><FormattedMessage id='authors-paragraph__text14' /></li> */}
        </ol>
      </div>
    </>
  );
};

export default ForAuthorspage;