import React from 'react';
import Head from 'next/head';
import lastIssue from '../../public/assets/issues/tom7n3.jpeg'

const HeadMeta = () => {
  return (
    <Head>
      <title>Ural Radio Engineering Journal</title>
      <meta name="description" content="Рецензируемый международный научно-технический журнал с открытым доступом, посвященный последним достижениям радиоэлектроники и связи."/>

      <meta property="og:title" content="Ural Radio Engineering Journal"/>
      <meta property="og:description" content="Рецензируемый международный научно-технический журнал с открытым доступом, посвященный последним достижениям радиоэлектроники и связи."/>
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={window.location.href}/>
      <meta property="og:image" content='../../public/assets/issues/tom7n3.jpeg'/>
      <meta property="og:image:secure_url" content='../../public/assets/issues/tom7n3.jpeg' />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
  );
};

export default HeadMeta;