import React from "react";
import Head from "next/head";

const FilesPage = ({ children }) => {
  return (
    <div className="flex flex-auto items-center justify-center">
      <Head>
        <title>Snackable - File browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};

export default FilesPage;
