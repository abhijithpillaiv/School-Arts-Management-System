const promise = require('promise');
var db =require('../config/connection')
var bcrypt = require('bcrypt');
var collection=require('../config/collection');
const { ObjectID } = require('bson');
const { resolve, reject } = require('promise');
const { response } = require('express');

module.exports={
    addTeacher:(data)=>{
        return new promise(async(resolve,reject)=>{
            data.password=await bcrypt.hash(data.password,10)
            db.get().collection(collection.teacher).insertOne(data).then((data)=>{
                resolve(data.ops[0])
            })
        })
    },
    getTeacher:()=>{
        return new promise(async(resolve,reject)=>{
           let teacher = await db.get().collection(collection.teacher).find().sort({"category":1}).toArray()
           resolve(teacher)
        })
    },
    getTeacherCount:()=>{
        return new promise(async(resolve,reject)=>{
           let teacher = await db.get().collection(collection.teacher).find().count()
           resolve(teacher)
        })
    },
    deleteTeacher:(id)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.teacher).removeOne({_id:ObjectID(id)}).then((response)=>{
                resolve()
            })
        })
    },
}