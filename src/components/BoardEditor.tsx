import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IEditor, IRuEng } from '@/lib/types';
import { useLanguageContext } from '@/i18n/languageContext';
import { useQuery } from '@tanstack/react-query';
import { getFileLink } from '@/data/FileApi';

type BoardEditorProps = {
  editor: IEditor;
}

const BoardEditor = ({editor}: BoardEditorProps) => {
  const {lang} = useLanguageContext();

  const { data: image } = useQuery({
    queryFn: async () => await getFileLink(editor["imagePathId"]),
    queryKey: ["image"],
    staleTime: Infinity,
  });

  return (
    <div>
      <div className="editors__board-element">
        <div className="editors__board-image">
          <Link  href={`/editors/${editor["id"]}`}>
            <Image src={image!} alt="" />
          </Link>
        </div>
        <p className='editors__board-name'>{editor["name"][lang as keyof IRuEng]}</p>
      </div>
    </div>
  );
};

export default BoardEditor;