const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());
const { connectToDatabase } = require('../db'); 

const editdata = async (req, res) => {
        const db = await connectToDatabase();
        const collection = db.collection('sample_mflix'); 
        console.log(req.query.first_name +"changes to"+req.body.first_name);
        const updateResult = await collection.updateOne({first_name:req.query.name },{$set:req.body});
        console.log('Updated documents =>', updateResult);
        res.send({
     status:200,
    message:"Data successfully updated"        })
            
       
}

const deletedata = async (req, res) => {
        const db = await connectToDatabase();
        const collection = db.collection('sample_mflix');
        const student = await collection.deleteOne({first_name:req.query.name });
        res.send({ status: 200, message: "Data successfully deleted"});
        console.log('Deleted documents =>',student)
    
};


const insertdata = async (req, res) => {
        const db = await connectToDatabase();
        const collection = db.collection('sample_mflix');
        const student = await collection.insertOne(req.body);
        res.send({ status: 200, message: student });
      
};

const getdata = async (req, res) => {
        const db = await connectToDatabase();
        const collection = db.collection('sample_mflix');
        const students = await collection.find({}).toArray();
        res.send({ status: 200, message: students });
    
};

module.exports = { insertdata, getdata, editdata, deletedata };