const user_module = require('./user.modules');

class  user_controller extends user_module {
    static create_user = async (req, res) => {
        try{
            console.log("Controller response",  req.body)
            let response =  await this.save_user_details(req)
            let message = "Success";
            res.send({
                success: true,
                message: message,
                data: response
            })
        }
        catch  (err){
            let status_code = err.status.code != undefined  ? err.status_code : 500;
            let type = err.type != undefined  ? err.type : "Bad Request";
            let message =  err.custom_msg  != undefined ? err.custom_msg :  "Something went wrong"
            res.status(status_code).send({
                success: false,
                error: type,
                message: message,
            })
        }

    }


    static get_users = async (req, res) => {
        try{
            console.log("Controller response",  req.body)
            let response =  await this.reterive_user(req)
            let message = "Success";
            res.send({
                success: true,
                message: message,
                data: response
            })
        }
        catch  (err){
            let status_code = err.status.code != undefined  ? err.status_code : 500;
            let type = err.type != undefined  ? err.type : "Bad Request";
            let message =  err.custom_msg  != undefined ? err.custom_msg :  "Something went wrong"
            res.status(status_code).send({
                success: false,
                error: type,
                message: message,
            })
        }

    }

    static otp_verify = async (req, res) => {
        try{
            console.log("Controller response",  req.body)
            let response =  await this.verify_user(req)
            let message = "Success";
            if (response.status) {
                res.send({
                    success:true,
                    message: response.message,
                    data: response.user
                })
            }
            else{
                res.status(400).send({
                    success : false,
                    error: false,
                    message: response.message
                })
            }
            
        }
        catch  (err){
            let status_code = err.status_code != undefined  ? err.status_code : 500;
            let type = err.type != undefined  ? err.type : "Bad Request";
            let message =  err.custom_msg  != undefined ? err.custom_msg :  "Something went wrong"
            res.status(status_code).send({
                success: false,
                error: type,
                message: message,
            })
        }

    }
}

module.exports  = user_controller