import React from "react";
import Head from "next/head";

const MetaTag = ({title,description,author,keywords}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={keywords}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content={author}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default MetaTag;
