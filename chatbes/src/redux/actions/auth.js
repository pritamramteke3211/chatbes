import { saveUserData }  from  "../reducers/auth"
import store  from '../store'
import { GET_USERS, SIGNUP_API, VERIFY_OTP } from '../../config/urls'
import { apiGet, apiPost } from "../../utils/utils"
import { setItem } from "../../utils/utils"

export function signUp(data) {
    return apiPost(SIGNUP_API, data)
}

export function otpVerify(data) {
    return new Promise((resolve, reject) => {
        apiPost(VERIFY_OTP, data).then((res) => {
            if (!!res?.data?._id) {
                setItem('userData', res.data).then((returnValue)=>  {
                    store.dispatch(saveUserData(res?.data))
                    resolve(res)
                }).catch(err =>{
                    resolve(err)
                })
                return;
            }
            resolve(res)
        }).catch((err) => reject(err))
    })

}


export function fetchUsers(query="") {
    return apiGet(GET_USERS + query)
}