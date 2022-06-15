import React from "react";
import fetch from "isomorphic-unfetch";
import FilesPage from "../../layouts/FilesPage";
import FileDetail from "../../components/FileDetail";
import { FilesApi } from "../../apis/FilesApi";

const FileDetailPage = ({ fileDetails }) => {
  return (
    <FilesPage>
      <FileDetail fileDetails={fileDetails} />
    </FilesPage>
  );
};

export const getServerSideProps = async ({query}) => {
  const resp = await FilesApi.getAllFiles(`http://interview-api.snackable.ai/api/file/details/${query.id}`);

  return {props: { fileDetails: resp }};
};
export default FileDetailPage;
