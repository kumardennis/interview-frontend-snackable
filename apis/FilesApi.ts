import { AllFileModel } from "../models/AllFileModel"
import { FileDetailsModel } from "../models/FileDetailsModel"
import { FileSegmentsModel } from "../models/FileSegmentsModel"
import { FilesApiClient } from "./FIlesApiClient"


export const FilesApi = {
    getAllFiles: (url: string, params?: any): Promise<AllFileModel[]> => FilesApiClient.get(url, params),
    getFileDetails: (url: string): Promise<FileDetailsModel> => FilesApiClient.get(url),
    getFileSegments: (url: string): Promise<FileSegmentsModel[]> => FilesApiClient.get(url)
}