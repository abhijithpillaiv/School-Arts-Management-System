var express = require('express');
var router = express.Router();
var teacherHelper = require("../helpers/teacherHelper")

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


router.post('/addTeacher',upload.single('image'),((req,res)=> {
  console.log(req.body);
  teacherHelper.addTeacher(req.body).then((response)=>{
    res.send(response)
  })
}));

router.get('/allTeacher',((req,res)=>{
  
  teacherHelper.getTeacher().then((data)=>{
    res.send(data)
    })
}))
router.get('/getTeacherCount',((req,res)=>{
  
  teacherHelper.getTeacherCount().then((data)=>{
      res.json(data)
    })
    
}));

router.get('/teacherDelete/:id',((req,res)=>{
  teacherHelper.deleteTeacher(req.params.id).then((data)=>{
    res.send(data)
  })
}));
module.exports = router;
