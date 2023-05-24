const express = require('express')
const cookieParser = require('cookie-parser')
const jwd = require('jsonwebtoken')


const uuid = require('uuid').v4

const cors = require('cors')

require('./conn/dbconnect')
require('dotenv').config();
const { hashPass, logPas } = require('./conn/hashing')
// const Update =require('./conn/update')
const Login = require('./conn/login')
const signup = require('./conn/signupdetails')


const session = {}

const authenticate = (req, res, next) => {

    const auths = req.headers['authorization']
    console.log(auths)
    const token = auths && auths.split(' ')[1]
    console.log(token)
    console.log('56')

    if (!token) {
        res.send('error')
    }
    jwd.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) {
            res.send('403')
        }
        req.user = user
        next()
    })

}


const app = express()

app.use(express.json())
app.use(cookieParser())



app.use(cors())

app.post('/signup', async (req, res) => {

    const hashPassword = hashPass(req.body.password)
    console.log(hashPassword)
    req.body.password = hashPassword
    let data = new signup(req.body)
    console.log("3")
    let data2 = await data.save()
    console.log(data2)
    res.send(data2)
})
app.post('/login', async (req, res) => {

    if (req.body.email && req.body.password) {
        const passwor = req.body.password
        const email = req.body.email
        let datas = await Login.findOne({ email })
        let pass = logPas(passwor, datas.password)
        console.log('56')
        console.log(datas)
        if (datas && pass) {
            const user = { name: email }
            const gut = jwd.sign(user, process.env.ACCESS_TOKEN)
            // res.json({access_token : gut})
            console.log('56')
            datas = datas.toObject()
            delete datas.password
            res.send(datas)


            console.log({ access_token: gut })
        }
        else {
            res.send('nothing')
        }
    }
    else[
        res.send('invalid user')
    ]

})

// app.post('/login',async(req,res)=>{
//     const{username,password} =req.body

//     if(username !== 'srini' && password !=='1234'){
//         return res.send("invalid user")
//     }

//     const sessionId = uuid();
//     session[sessionId] = {username,userId :1},
//     res.set('Set-Cookie',`session=${sessionId}`);
//     res.send('Success')
//     console.log(sessionId)

// })
app.get('/get', (req, res) => {

    const sessionID = req.headers.cookie?.split('=')[1]
    console.log(sessionID)
    const userSession = session[sessionID];
    console.log(userSession)
    if (!userSession) {
        res.send("not succes")
    } else {
        res.send(userSession)
    }
})

app.get('/ge', authenticate, async (req, res) => {
    console.log(req.user.name)
    email = req.user.name
    let data = await Login.findOne({ email })
    if (data)
        res.json('success')
    console.log('success')

})

app.put('/update/:email', async (req, res) => {
    
    let data = await signup.updateOne({email:req.params.email },{ $set: req.body })
    console.log(req.params.email)
    console.log(data)
    res.send(data)
    
})


app.get('/gett/:_id', async (req, res) => {
    

   
    console.log(req.params._id)
    let data = await signup.findOne({ _id :req.params._id})

    if (data) {
        res.send(data)
        console.log(data)
    } else {
        res.send('this is invalid user')
    }
})












app.listen(3003)




