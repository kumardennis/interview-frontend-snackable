import axios, { AxiosResponse } from 'axios'
import { showErrorToastBasic } from '../toasts/errorToast'

const responseBody = (response: AxiosResponse) => response.data

axios.interceptors.response.use(response => response, (error) => {
    showErrorToastBasic({ title: 'API Error', body: error.toString() })
})


export const FilesApiClient = {
    get: (url: string, params?: any) => axios.get(url, params).then(responseBody)
}