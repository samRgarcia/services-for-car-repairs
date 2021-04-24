const routerx = require('express-promise-router');
import client from './clients';
import mechanic from './carMechanic';
import login from './login';

const router = routerx();
//TODO: All router
router.use('/client',client);
router.use('/mechanic',mechanic);
router.use('/login',login)
module.exports=router;
