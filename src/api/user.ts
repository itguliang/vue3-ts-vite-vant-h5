import axios from "@/utils/axios"

export const getUserInfo = () => {
    return axios
        .get('/users/itguliang')
        .then((response) => {
            console.log('response: ', response.data)
        })
        .catch((error) => {
            console.error(error)
        })
}
