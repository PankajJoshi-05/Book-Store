const router= require("express").Router();
const User=require("../models/user");
const bcrypt=require("bcryptjs");

//sign up
router.post('/sign-up',async(req,res)=>{
    try{
     const{username,email,password,address}=req.body;

    //checking for unique username
     const existingUserName = await User.findOne({username:username});
     if(existingUserName){
        return res.status(400).json({message:"UserName already Exist"});
     }

     // checking for existing email
     const existingEmail = await User.findOne({email:email});
     if(existingEmail){
        return res.status(400).json({message:"email already Exist"});
     }
     
     //Password Validation (at least one special char, one number, one uppercase, and minimum length of 6)
     const passwordRegrx=/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
     if(!passwordRegrx.test(password)){
        return  res.status(400).json({message: "Password must contain at least one uppercase letter, one number, one special character, and be at least 6 characters long."});
     }
     
     // hashing the password
     const hashedPassword= await bcrypt.hash(password,10);

     // creating newUser
     const newUser=new User({
        username:username,
        email:email,
        password:hashedPassword,
        address:address,
     });

     //saving the new user to the database
     await newUser.save();

     return res.status(201).json({message:"SignUp successfully"})
       
    }catch(error){
      console.error("Error during sign up:",error);
        res.status(500).json({message:"Internal server error"});
    }
})


//sign in 

router.post("/sign-in",async(req,res)=>{
   try{
      const {username,password}=req.body;

      //chech if user exists
      const existingUser=await User.findOne({username});
      if(!existingUser){
         return res.status(400).json({message:"Invalid Credentials"});
      }
      
      //compare passwords
      const isMatched= await bcrypt.compare(password, existingUser.password);
         if(isMatched){
            res.status(200).json({message:"SignIn success"});
         }else{
            res.status(400).json({message:"Invalid Credentials"});
         }
   }catch(error){
        console.error("Error during signing in: ",error);
        res.status(500).json({ message: "Server Error" });
   }
});


module.exports=router;