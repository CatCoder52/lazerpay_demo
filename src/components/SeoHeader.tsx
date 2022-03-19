import React from "react";
import Head from "next/head";

interface Props {
  title: String;
  metaName?: String;
  mataContent?: String;
}

const SeoHeader = ({ title, metaName, mataContent }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name={`${metaName}`} content={`${mataContent}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default SeoHeader;
