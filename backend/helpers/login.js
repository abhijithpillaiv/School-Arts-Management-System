var db = require('../config/connection')
var collection = require('../config/collection');
var bcrypt = require('bcrypt');
const { resolve, reject } = require('promise');
const { ObjectID } = require('bson');
module.exports = {
    login: (data) => {
        return new Promise(async (resolve, reject) => {
            let response = {}
            console.log("admin check");
            if (data.email=='admin@vcs'){ 
                    if (data.password == 'admin') {
                        console.log('login success')
                        let user={name:'Deepa Vinod',previlage:'admin',_id : '12123'}
                        response.user = user
                        response.previlage = user.previlage
                        response.status = true
                        resolve(response)
                    } else {
                        console.log('login failed');
                        resolve({ status: false })
                    }
                
            }else {
                    let response = {}
                    console.log("teacher check");
                    var user = await db.get().collection(collection.teacher).findOne({ email: data.email })
                    if (user) {
                        bcrypt.compare(data.password, user.password).then((status) => {
                            if (status) {
                                console.log('login success')
                                response.user = user
                                response.previlage = user.previlage
                                response.status = true
                                resolve(response)
                            } else {
                                console.log('login failed');
                                resolve({ status: false })
                            }
                        })
                    } else {
                            console.log('login failed no user found');
                            resolve({ status: false })
                        }
                }

        })
}
}