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
app.delete("/izbrisiDjeloAutora",(req,res)=>{
    var data=req.body
    var autor = tempStorage.find((x)=>x.naziv ==data.naziv)
    var ind= tempStorage.indexOf(autor)
    tempStorage=tempStorage.splice(ind,1)
    console.log(tempStorage)
    console.log(autor)
    var filter_djela=autor.djela.filter(x=>x!=data.djelo)
    autor.djela=filter_djela
    console.log("------------------------------")
    console.log("Filter : ",autor)
    console.log("New : ",tempStorage)
    res.send({"Status":"OK"})
})
app.listen(port,()=>console.log(`Work on port ${port}`))