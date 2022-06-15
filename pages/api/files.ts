import { FilesApi } from "../../apis/FilesApi";
import type { NextApiRequest, NextApiResponse } from 'next'
import { AllFileModel } from "../../models/AllFileModel";



export default async (req: NextApiRequest, res: NextApiResponse<AllFileModel[]>) => {
    const resp = await FilesApi.getAllFiles("http://interview-api.snackable.ai/api/file/all");

    return resp
}