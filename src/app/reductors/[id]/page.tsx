// "use client"
import React from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { useLanguageContext } from '@/i18n/languageContext';
import { IRuEng } from '@/lib/types';
// import { getEditorById } from '@/data/ReductorApi';
import { getCouncilById } from '@/data/CouncilApi';
import EditorPageClient from '@/components/pages/EditorPage';
import { Metadata } from 'next';
import { getReductorById } from '@/data/ReductorService';
import ReductorPageClient from '@/components/pages/ReductorPage';
import { frontUrl } from '@/lib/utils';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {

  const editor = await getReductorById(params.id);
  const title = editor?.name.Ru;
  const description = `${editor?.content.Ru} ${editor?.location.Ru}`;

  return {
    title: title,
    description: description,
    openGraph: {
      type: "website",
      url: `${frontUrl}/reductors/${params.id}`,
      title: title,
      description: description,
      siteName: "Ural Radio Enjeenering journal"
    }
  }
}

const EditorPage = ({ params }: { params: { id: string } }) => {

  return (
    <ReductorPageClient params={params}/>
  );
};

export default EditorPage;