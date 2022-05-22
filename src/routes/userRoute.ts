import * as express from 'express'
import userService from '../Service/userService'

const userRoute = express.Router()
userRoute.get('/users',(req,res)=>{

   

    userService.getAllUsers()
    .then(data=>{ res.json({data})})
    .catch(err=>res.json({err}))
})
export default userRoute