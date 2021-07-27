const promise = require('promise');
var bcrypt = require('bcrypt');
var db =require('../config/connection')
var collection=require('../config/collection');
const { ObjectID } = require('bson');
const { resolve, reject } = require('promise');
const { response } = require('express');
const { student } = require('../config/collection');

module.exports={
    addStudent:(data)=>{
        return new promise(async(resolve,reject)=>{
            db.get().collection(collection.student).insertOne(data).then((data)=>{
                resolve(data.ops[0])
            })
        })
    },
    getStudent:(cat)=>{
        return new promise(async(resolve,reject)=>{
           let student = await db.get().collection(collection.student).find({"category":cat}).toArray()//.sort({'name':1})
           resolve(student)
        })
    },
    getSelectedStudent:(cat)=>{
        return new promise(async(resolve,reject)=>{
           let student = await db.get().collection(collection.student).find({"category":cat,"select":'true'}).toArray()
           resolve(student)
        })
    },
    getStudentCount:()=>{
        return new promise(async(resolve,reject)=>{
           let student = await db.get().collection(collection.student).find().count()
           resolve(student)
        })
    },
    getStudentCountCat:(cat)=>{
        return new promise(async(resolve,reject)=>{
           let student = await db.get().collection(collection.student).find({"category":cat}).count()
           resolve(student)
        })
    },
    
    getStudentByClass:(clas)=>{
        return new promise(async(resolve,reject)=>{
           let student = await db.get().collection(collection.student).find({"clas":clas}).toArray()
           resolve(student)
        })
    },
    getOneStudent:(id)=>{
        return new promise(async(resolve,reject)=>{
            let student = await db.get().collection(collection.student).findOne({_id:ObjectID(id)})
            resolve(student)
        })
    },
    updateStudent:(id,data)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.student).updateOne({_id:ObjectID(id)},{
                $set:{
                    name:data.name,
                    gender:data.gender,
                    dob:data.dob,
                    roll:data.roll,
                    category:data.category,
                    items:data.items,
                    clas:data.clas,
                    section:data.section,
                    admnId:data.admnId,
                    phoneNum:data.phoneNum,
                    image:data.image,
                }
            }).then((response)=>{
                resolve(response)
            })
        })
    },
    updateSelect:(id,data)=>{
        return new Promise((resolve,reject)=>{
            console.log('inside helper '+ data);
            db.get().collection(collection.student).updateOne({_id:ObjectID(id)},{
                $set:{
                   select:data,
                }
            }).then((response)=>{
                resolve(response)
            })
        })
    },
    deleteStudent:(id)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.student).removeOne({_id:ObjectID(id)}).then((response)=>{
                resolve(response)
            })
        })
    }
}