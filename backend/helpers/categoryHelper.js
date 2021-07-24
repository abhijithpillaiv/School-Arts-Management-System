const promise = require('promise');
var bcrypt = require('bcrypt');
var db =require('../config/connection')
var collection=require('../config/collection');
const { ObjectID } = require('bson');
const { resolve, reject } = require('promise');
const { response } = require('express');

module.exports={
    getItem:(itemList,cate)=>{
        return new promise (async(resolve,response)=>{
            itemList.map(async(obj)=>{
                let cat=await db.get().collection(collection.student).find({'items' : obj , 'category': cate}).toArray()
                finalList[obj]=cat;
              })
            resolve (cat);
        })
    },
   
}