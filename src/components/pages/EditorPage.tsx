"use client"
import React from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { useLanguageContext } from '@/i18n/languageContext';
import { IRuEng } from '@/lib/types';
import { getEditorById } from '@/data/ReductorApi';
import { getFileLink } from '@/data/FileApi';


const EditorPageClient = ({ params }: { params: { id: string } }) => {
  const {lang} = useLanguageContext();

  const {status: editorStatus, data: editor, error} = useQuery({
    queryFn: async () => await getEditorById(params.id),
    queryKey: ["editor", params.id],
    staleTime: Infinity
  });

  const {data: image} = useQuery({
    queryFn: async () => await getFileLink(editor!.imagePathId),
    queryKey: ["reductor", params.id],
    enabled: editorStatus === 'success',
    staleTime: Infinity
  });

  return (
    <div>
      <div className="editor-page">
        <div className="editor-page__block">
          <div className="editor-page__image">
          <Image src={image!} alt="" />
          </div>
          <div className="editor-page__description">
            <p className='editor-page__name'>{editor?.name[lang as keyof IRuEng]}</p>
            <p className='editor-page__workplace'>{editor?.description[lang as keyof IRuEng]}</p>
          </div>
        </div>

        <div className="editor-page__email-block">
          <div className="editor-page__email-block-container">
            <div className="editor-page__scopus">Scopus</div>
            <div className="editor-page__email">{editor?.email}</div>
          </div>
        </div>

        <div className="editor-page__text">
          <p>{editor?.content[lang as keyof IRuEng]}</p>
        </div>
      </div>
    </div>
  );
};

export default EditorPageClient;