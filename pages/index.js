import React from "react";
import Router from "next/router";

import "../styles/main.css";

const Index = () => <div />;

Index.getInitialProps = async ({ res, req }) => {
  if (res) {
    res.writeHead(302, {
      Location: "/files"
    });
    res.end();
  } else {
    Router.push("/files");
  }
  return {};
};

export default Index;
