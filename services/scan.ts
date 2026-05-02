import api from './api'

export const scanFile = (formData: FormData) => {
    return api.post('/scan', formData)
}

export const scanUrl = (url: string) => {
    return api.post('/scan', { codeurl: url })
}