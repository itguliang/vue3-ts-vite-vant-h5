import axios from "@/utils/axios"

export const getUserInfo = () => {
    return axios.get('/users/vuejs')
}
