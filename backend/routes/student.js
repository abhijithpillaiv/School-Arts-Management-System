var express = require('express');
var router = express.Router();
var studentHelper=require('../helpers/studentHelper')
var categoryHelper = require('../helpers/categoryHelper')

const multer = require("multer")
const storage = multer.diskStorage({
  destination:((req,file,cb)=>{
    cb(null,'./public/');
  }),
  filename:((req,file,cb)=>{
    cb(null,new Date().toISOString()+file.originalname);
  })

})
const upload = multer({storage:storage})

router.post('/addStudent',upload.single('image'), function(req, res) {
  req.body.items ? req.body.items = req.body.items.split(',') : null
  console.log(req.body);

  console.log(req.file);
  studentHelper.addStudent(req.body).then((response)=>{
    res.send(response._id)
  })
});

router.get('/getStudents/:cat',((req,res)=>{
  
  studentHelper.getStudent(req.params.cat).then((data)=>{
    res.send(data)
    })
    
}))

router.get('/getStudents/class/:clas',((req,res)=>{
  
  studentHelper.getStudentByClass(req.params.clas).then((data)=>{
    res.send(data)
    })
    
}))

router.get('/getStudentCount',((req,res)=>{
  
  studentHelper.getStudentCount().then((data)=>{
    res.json(data)
    })
    
}))
router.get('/getStudentCountCat/:cat',((req,res)=>{
  
  studentHelper.getStudentCountCat(req.params.cat).then((data)=>{
    res.json(data)
    })
    
}))


router.get('/studentDetail/:id',((req,res)=>{
  studentHelper.getOneStudent(req.params.id).then((data)=>{
    console.log(data);
    res.send(data);
  })
}))

router.post('/studentEdit',upload.single('image'), function(req, res) {
  console.log(req.file);
  req.body.items ? req.body.items = req.body.items.split(',') : null
  console.log(req.body);
  studentHelper.updateStudent(req.body._id,req.body).then((response)=>{
  res.send(response)
  })
});

router.get('/studentDelete/:id',((req,res)=>{
  studentHelper.deleteStudent(req.params.id).then((data)=>{
    res.send(data)
  })
}));

router.post('/item',((req,res)=>{
  var cat = req.body.cat;
  var itemList = req.body.data.map(a => a.value)
  
   itemList.map((obj)=>{
    categoryHelper.getItem(obj,cat).then((data)=>{
      finalList[obj]=data;
    })
    
  })

}));

module.exports = router;
