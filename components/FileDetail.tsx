import { FilesApi } from "../apis/FilesApi";
import { FileDetailsModel } from "../models/FileDetailsModel";

interface PropTypes {
    fileDetails: FileDetailsModel
}

const FileDetails = ({ fileDetails }: PropTypes): JSX.Element => <div>file detail component for {fileDetails.fileId} {fileDetails.fileName}</div>;


  export default FileDetails