app.post('/t',async(req,res)=>{
   if(req.body.email  && req.body.password){
   const password = req.body.password
   const email = req.body.email
   let datas = await Login.findOne({ email })
   console.log(datas)
   if(datas){
   const user = {name:password}
   const gut =jwd.sign(user,process.env.ACCESS_TOKEN)
   res.json({access_token : gut})
   }
   else{
    res.send('nothing')
   }
}})

let data = await product.findOne(req.body).select("-password")

app.get('/gt',authenicate,(req,res)=>{
   console.log(req.user.name)
   res.json(posts.filter(post=>post.name ==req.user.name))

})

const authenicate = (req,res,next)=>{

   const auth= req.headers['authorization']
   const token= auth && auth.split(' ')[1]
   console.log(token)
   
   if(!token){
       res.send('error')
   }
   jwd.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
       if(err){
           res.send('403')
       }
       req.user =user
       next()
   })}