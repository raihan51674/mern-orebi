import express from "express";
const app =express();
const port = 8000;

app.get('/',(req, res)=>{
    res.send('hello from  orebi api server');
});


app.listen(port, () => {
    console.log(`Server is runing on port: ${port}`)
  })