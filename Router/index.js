const express = require('express');
// const { getdata, deletedata,insertdata,editdata } = require('../controller/studentlist');
const router = express.Router();
const studentlist = require('../controller/studentlist');
router.get('/',studentlist. getdata);
router.get('/getdata', studentlist.getdata);
router.post('/insertdata',studentlist.insertdata)
router.delete('/deletedata',studentlist.deletedata)
router.put('/editdata',studentlist.editdata)
module.exports=router