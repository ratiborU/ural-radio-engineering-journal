import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IEditor, IRuEng } from '@/lib/types';
import { useLanguageContext } from '@/i18n/languageContext';
import { useQuery } from '@tanstack/react-query';
import { getFileLink } from '@/data/FileApi';

type MainEditorProps = {
  editor: IEditor;
}

const MainEditor = ({editor} : MainEditorProps) => {
  const {lang} = useLanguageContext();

  const {status: editorStatus, data: image} = useQuery({
    queryFn: async () => await getFileLink(editor["imagePathId"]),
    queryKey: ["image"],
  });

  return (
    <div className="editors__editor editor">
      <div className="editor__block">
        <div className="editor__image">
          <Link href={`/editors/${editor["id"]}`}>
            <Image className="editor__image-img" src={image!} alt="" />
          </Link>
        </div>
        <div className="editor__description">
          <p className='editor__name'>{editor["name"][lang as keyof IRuEng]}</p>
          <p className='editor__workplace'>{editor["description"][lang as keyof IRuEng]}</p>
        </div>
      </div>
    </div>
  );
};

export default MainEditor;