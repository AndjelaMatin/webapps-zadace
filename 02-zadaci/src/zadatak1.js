import express from "express"
import bodyParser from "body-parser"
import {v4 as uuidv4} from "uuid"

const app=express()
const port=3000
app.use(bodyParser.json())
var tempStorage=[]

app.post("/dodajObavjest",(req,res)=>{
    var data=req.body
    data.id=uuidv4()
    data.datum=new Date()
    tempStorage.push(data)
    console.log(tempStorage)
    res.send(tempStorage)
})
app.get("/vratiObavjesti",(req,res)=>{
    var data1=[]
    for(var i=0;i<tempStorage.length;i++){
        data1.push({
            "naziv":tempStorage[i].naziv,
            "datum":tempStorage[i].datum
        })
    }
    console.log(data1)
    res.send(data1)
})
app.get("/vratiObavjest/:id",(req,res)=>{
    var {id}=req.params
    var obavjest=tempStorage.find((data)=>data.id==id)
    console.log(obavjest)
    res.send({
        "naziv":obavjest.naziv,
        "sadrzaj":obavjest.sadrzaj,
        "timestamp":obavjest.datum
    })
}) 
app.patch("/izmjeniObavjest/:id",(req,res)=>{
    var {id}=req.params
    var data1=req.body
    var obavjest1=tempStorage.find((data1)=>data1.id==id)
    var {sadrzaj}=req.body
    obavjest1.sadrzaj=sadrzaj
    console.log(obavjest1)
    res.send(tempStorage)
})
app.listen(port,()=>console.log(`Work on port ${port}`))