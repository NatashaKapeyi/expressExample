import express from 'express'

//create express app
const app = express()
const port= +process.env.PORT|| 4000
//router using app.Get
app.get('/', (req, res)=>{
    res.status(200).json({
        status:res.statusCode,
        msg:'You\' re home'
    })
})

 app.listen(port)

 app.get('/about', (req, res)=>{
    res.json({
        status:res.statusCode,
        msg:'About Page'
    })
 })


 app.all('*', (req, res)=>{
    res.json({
        status:404,
        msg:'404 Page'
    })
 })
 app.listen(port)