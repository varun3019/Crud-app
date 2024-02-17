
const User = require('../userschema');
const  addUser = async (req,res)=>
{ 
        const newUser = new User({
            userId:req.body.userId,
            Username: req.body.username,
            Email: req.body.email,
            Phone: req.body.phone,
        });
        console.log(req);

        console.log(newUser);
        try{
            await newUser.save();
            res.status(201).json(newUser);
        }catch(error)
        {
            res.status(401).json({message:error.message});

        }
}

const getUsers = async (req,res)=>
{
    
        try{
            const users =await User.find({});
            res.status(200).json(users);
        }catch(error)
        {
            res.status(400).json({message:error.message});

        }
}
const getUser = async (req,res)=>
{
    
        try{
            const user =await User.find({userId:req.params.id});
            res.status(200).json(user);
        }catch(error)
        {
            res.status(400).json({message:error.message});

        }
}
const editUser = async (req,res)=>
{
        let user = req.body;
        const editUser = new User(user);
        try{
            const user =await User.updateOne({userId:req.params.id},editUser);
            res.status(200).json(user);
        }catch(error)
        {
            res.status(409).json({message:error.message});

        }
}


const deleteUser = async (req,res)=>
{
       
        try{
            const user =await User.deleteOne({userId:req.params.id});
            res.status(200).json({message:"User deleted Succesfully"});
        }catch(error)
        {
            res.status(409).json({message:error.message});

        }
}
module.exports = {addUser,getUsers,getUser,editUser,deleteUser}