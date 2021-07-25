var express = require('express');
const fs = require("fs")
var router = express.Router();
var studentHelper=require('../helpers/studentHelper')
var categoryHelper = require('../helpers/categoryHelper')

const multer = require("multer")
const storage = multer.diskStorage({
  destination:((req,file,cb)=>{
    cb(null,'./public/image/');
  }),
  filename:((req,file,cb)=>{
    cb(null,new Date().toISOString()+file.originalname);
  })

})
const upload = multer({storage:storage})

router.post('/addStudent',upload.single('image'), function(req, res) {
  req.body.items ? req.body.items = req.body.items.split(',') : null
  console.log(req.file);

  if(req.file != undefined){
    const arrayOfStrings = req.file.path.split('/')
  console.log(arrayOfStrings);
  req.body.image = arrayOfStrings[2]
  }
  console.log(req.body.image);

  studentHelper.addStudent(req.body).then((response)=>{
    res.send(response._id)
  })
});

router.get('/getStudents/:cat',((req,res)=>{
  
  studentHelper.getStudent(req.params.cat).then((data)=>{
    console.log(data);
    res.send(data)
    })
    
}))

router.get('/getSelectedStudents/:cat',((req,res)=>{
  
  studentHelper.getSelectedStudent(req.params.cat).then((data)=>{
    console.log(data);
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

router.get('/selectStudent/:id/:select',((req,res)=>{

  studentHelper.updateSelect(req.params.id,req.params.select).then((response)=>{
      res.send(response)
      })
}))

router.post('/studentEdit',upload.single('image'), function(req, res) {

  req.body.items ? req.body.items = req.body.items.split(',') : null
  console.log(req.body);
  

if(req.file != undefined){

  if (req.body.oldImage == undefined ) {
    const arrayOfStrings = req.file.path.split('/')
    req.body.image = arrayOfStrings[2]
    studentHelper.updateStudent(req.body._id,req.body).then((response)=>{
    res.send(response)
    })
  }
else{
  const pathToFile = './public/image/'+req.body.oldImage

  fs.unlink(pathToFile, function(err) {
    if (err) {
      console.log("Action cannot be performed...")

      const arrayOfStrings = req.file.path.split('/')
       req.body.image = arrayOfStrings[2]

    studentHelper.updateStudent(req.body._id,req.body).then((response)=>{
    res.send(response)
    })
    } else {
      console.log("Successfully deleted the file.")

      const arrayOfStrings = req.file.path.split('/')
       req.body.image = arrayOfStrings[2]

    studentHelper.updateStudent(req.body._id,req.body).then((response)=>{
    res.send(response)
    })
    }
  })
}
}
else{
  req.body.image = req.body.oldImage
  studentHelper.updateStudent(req.body._id,req.body).then((response)=>{
    res.send(response) 
  })
}

});

router.get('/studentDelete/:id',((req,res)=>{

  studentHelper. getOneStudent(req.params.id).then((data)=>{
    const pathToFile = './public/image/'+data.image

    console.log(pathToFile);
  fs.unlink(pathToFile, function(err) {
    if (err) {
      console.log("Action cannot be performed...")
      studentHelper.deleteStudent(req.params.id).then((data)=>{
        res.send(data)
    })
    } else {
      console.log("Successfully deleted the file.")
      studentHelper.deleteStudent(req.params.id).then((data)=>{
        res.send(data)
      })
    }
  })
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
