//declarations
const express = require('express');
const router = express.Router();


//imports
const ctrlUser = require('../controllers/user.controller');
const ctrlRole = require('../controllers/role.controller');
const mdlreg = require('../middlewares/verifyregister')
const auth = require('../middlewares/AuthJwt')

// /api/user registration
router.post('/addrole', ctrlRole.addrole);
router.post('/auth/register', [mdlreg.CheckRoles, mdlreg.CheckUserOrEmail], ctrlUser.register);
router.post('/auth/login', ctrlUser.login);
router.post("/auth/refreshtoken", ctrlUser.refreshToken);
router.put("/auth/UpdateUserById", [auth.verifyToken] , ctrlUser.updatereg)
router.patch("/auth/forgotpassword" , ctrlUser.forgotpass);
router.patch("/auth/addprofileID",[auth.verifyToken] , ctrlUser.addprofileID)
router.delete("/auth/RemoveUser" , [auth.verifyToken], ctrlUser.RemoveUser);


module.exports = router;