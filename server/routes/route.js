const express = require('express');
const  {addUser,getUsers,getUser,editUser,deleteUser}  = require('../controller/userController');

const router = express.Router();

router.post("/add",addUser)
router.get("/all",getUsers)
router.get("/:id",getUser)
router.post("/:id",editUser)
router.delete("/:id",deleteUser)




module.exports = router