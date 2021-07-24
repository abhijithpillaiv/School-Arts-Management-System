var express = require('express');
var router = express.Router();
var lgHelper = require('../helpers/login')

/* GET home page. */
router.post('/', function(req, res, next) {
  lgHelper.login(req.body).then((response)=>{
    let data = {logStatus : false}
    if(response.status){
     data={logStatus : response.status, user : response.user, previlage : response.previlage}
    }
    console.log(data);
    res.json(data)
  })  
});

module.exports = router;
