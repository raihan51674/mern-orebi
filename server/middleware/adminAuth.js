import jwt from 'jsonwebtoken'


//database data protected system
const adminAuth =async(req, res, next)=>{
    try {
     const {token}= req.headers; 
     if(!token){
        return res.json({ success:false, message:"Not Authorization, let try again"})
     }
     const decode_token =jwt.verify(token, process.env.JWT_SECRET);
     if(decode_token !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
        return res.json({ success:false, message:"Not Authorization, let try again"})
     }
     next()
        
    } catch (error) {

        console.log('Admin Auth Error', error)
        res.json({ success:false, message: error?.message})
        
    }
}

export default adminAuth;