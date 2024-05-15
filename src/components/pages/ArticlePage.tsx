'use client'
import React from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getArticleById } from '@/data/AticleApi';
import { getCommentsByArticleId, createComment } from '@/data/CommentApi';
import { IRuEng } from '@/lib/types';
import { FormattedMessage } from 'react-intl';
import { useLanguageContext } from '@/i18n/languageContext';
import Comment from '@/components/Comment';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Head from 'next/head';

const commentSchema = z.object({
  comment: z.string().min(1, "Комментарий не должен быть пустым")
});

type ICommentSchema = z.infer<typeof commentSchema>;

const ArticlePageClient = ({ params }: { params: { id: string } }) => {
  const {lang} = useLanguageContext();

  const {status: articleStatus, data: article, error: articleError} = useQuery({
    queryFn: async () => await getArticleById(params.id),
    queryKey: ["article", params.id],
    staleTime: Infinity
  });

  const {status: commentsStatus, data: comments, error: commentsError} = useQuery({
    queryFn: async () => await getCommentsByArticleId(params.id),
    queryKey: ["pdf", params.id],
    staleTime: Infinity
  });

  const mutation = useMutation({
    mutationFn: (content: string) => createComment(params.id, content)
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset: resetComment,
  } = useForm<ICommentSchema>({resolver: zodResolver(commentSchema)});

  const onSubmit = (data: ICommentSchema) => {
    mutation.mutate(data.comment);
    resetComment();
  }

  if (articleError) {
    return <p>Произошла ошибка</p>
  }
  if (articleStatus == 'pending') {
    return <p>Загрузка...</p>;
  }

  return (
    <>
      {/* <Head>
        <title lang={lang == "Ru" ? "ru": "en"}>заголовок</title>
      </Head> */}
      {/* <Head>
        <title lang="ru">{`${article?.title[lang as keyof IRuEng]}`}</title>
        <meta name="description" content={`${article?.content[lang as keyof IRuEng]}`} lang={lang == "Ru" ? "ru": "en"}/>
        <meta name="keywords" content={`${article?.keywords.map(x => x[lang as keyof IRuEng]).join(',')}`} lang={lang == "Ru" ? "ru": "en"}/>

        <meta property='og:title' content={`${article?.title[lang as keyof IRuEng]}`}/>
        <meta property='og:description' content={`${article?.content[lang as keyof IRuEng]}`}/>
        <meta property='og:type' content="article"/>
        {article?.authors.map((author, i) => <meta key={i} property="article:author" content={author}/>)}
        {article?.keywords.map((keyword, i) => <meta key={i} property="article:tag" content={keyword[lang as keyof IRuEng]}/>)}
        
        <meta property='og:url' content={`http://localhost:5173/catalog/article/${params.id}`}/>
      </Head> */}
      <div className='article'>
        <p className='article__title'>{article?.title[lang as keyof IRuEng]}</p>
        <p className='article__authors'>{article?.authors.join(", ")}</p>

        <div className="article__buttons">
          <a className="article__button-link" href={'pdf'}>
            <button className='article__pdf-download'><FormattedMessage id='article-article__pdf-download'/></button>
          </a>
          <a className="article__button-link" href='#'>
            <button className='article__pdf-download article__pdf-download_second' onClick={() => {
              navigator.clipboard.writeText(article?.reference[lang as keyof IRuEng] ?? '');
            }}><FormattedMessage id='article-article__pdf-download_second'/></button>
          </a>
        </div>
              
            
        <p className='article__subtitle'><FormattedMessage id='article-article__annotation'/></p>
        <p className='article__text'>{article?.content[lang as keyof IRuEng]}</p>

        <p className='article__subtitle'><FormattedMessage id='article-article__words'/></p>
        <p className='article__text'>{article?.keywords.map(item => item[lang as keyof IRuEng]).join(", ")}</p>

        <p className='article__subtitle'><FormattedMessage id='article-article__literature'/></p>
        <ol className='article__literature-list'>
          {
            article?.literature.map((item, itemId) => <li className='article__literature-book' key={itemId}>{item}</li>)
          }
        </ol>
              
              
        <p className='article__title'><FormattedMessage id='article-article__comments-title'/></p>
        {commentsStatus == 'pending'
          ? <p>загрузка</p>
          : <div className="article__comments">
              {comments?.map((comment, commentId) => <Comment key={commentId} comment={comment}/>)}
            </div>
        }
  
        <p className='article__subtitle'><FormattedMessage id='article-article__comments-subtitle1'/></p>
        <p className='article__comment-title'><FormattedMessage id='article-article__comments-subtitle2'/></p>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea 
            {...register("comment")}
            className='article__comment-field' 
            placeholder='Введите текст...' 
          >
          </textarea>
          {errors.comment && <p>{`${errors.comment.message}`}</p>}
          <button className='article__comment-button' disabled={isSubmitting} type="submit"><FormattedMessage id='article-article__comment-button'/></button>
        </form>
        <div className="buttom"></div>
      </div>
    </>
  );
};

export default ArticlePageClient;