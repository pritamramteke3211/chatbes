import { saveUserData }  from  "../reducers/auth"
import store  from '../store'
import { SIGNUP_API, VERIFY_OTP } from '../../config/urls'
import { apiPost } from "../../utils/utils"

export function signUp(data) {
    // console.log("signUp",data)
    return apiPost(SIGNUP_API, data)
    // store.dispatch(saveUserData(data))
}

export function otpVerify(data) {
    return new Promise((resolve, reject) => {
        apiPost(VERIFY_OTP, data).then((res) => {
            if (!!res?.data?._id) {
                
                store.dispatch(saveUserData(data))
                resolve(res)
                return;
            }
            resolve(res)
        }).catch((err) => reject(err))
    })

}
