import express from "express"
import bodyParser from "body-parser"
import {v4 as uuidv4} from "uuid"

const app=express()
const port=3000
app.use(bodyParser.json())
var tempStorage=[]

app.post("/dodajAutora",(req,res)=>{
    var data=req.body
    if(!data.naziv || !data.djela){
        res.send({"Error":"Krivi kljucevi"})
    }
    for(var i=0;i<data.lenght;i++){
        if(data.djela.lenght>=20){
            res.send({"Error":`Djelo ${data[i].djela} ima vise od 20 znakova`})
        }
    }
    data.id=uuidv4()
    data.datum=new Date()
    tempStorage.push(data)
    console.log(tempStorage)
    res.send(tempStorage)
})
app.get("/vratiAutore",(req,res)=>{
    console.log(tempStorage)
    res.send(tempStorage)
})
app.delete("/izbrisiDjeloAutora/:id",(req,res)=>{
    var {id}=req.params
    var data1=req.body
    if(tempStorage.find((data1)=>data1.id==id)){
        tempStorage.djela.splice(0,1)
    }
    console.log(tempStorage)
    res.send(tempStorage)
})
app.listen(port,()=>console.log(`Work on port ${port}`))