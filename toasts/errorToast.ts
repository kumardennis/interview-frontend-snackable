import { toast } from 'react-toastify';

interface ToastArgs {
    title: string,
    body: string
}

export const showErrorToastBasic = (toastArgs: ToastArgs) => {
    toast.error(toastArgs.body, {
        autoClose: 5000
    })
}