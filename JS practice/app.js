const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.send('Hello World');
    
})
//query id 
app.get('/azmeer', (req, res)=>{
    const id = req.query.id
    res.send('welcome back azmeer' + id)
})
//placeholder
app.get('/azmeer/:id', (req,res)=>{
    const id = req.params.id
    res.send('Hey Azmeer '+id)
})

app.listen(9000, ()=>{
    console.log('running');
    
})
