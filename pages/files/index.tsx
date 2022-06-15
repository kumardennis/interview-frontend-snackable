import React from "react";
import FileList from "../../components/FileList";
import FilesPage from "../../layouts/FilesPage";
import { FilesApi } from "../../apis/FilesApi";

const FileListPage = ({ files }) => {

  /* TODO: Create client-side filter system. */
  /* TODO: Put filter and pagination params into URL for easy sharing */
  return (
    <FilesPage>
      <FileList files={files} />
    </FilesPage>
  );
};

export const getServerSideProps = async () => {
  const resp = await FilesApi.getAllFiles("http://interview-api.snackable.ai/api/file/all");

  return {props: { files: resp }};
};

export default FileListPage;
