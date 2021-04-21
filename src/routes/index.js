const routerx = require('express-promise-router');
import client from './clients';

const router = routerx();
//TODO: All router
router.use('/client',client);
//router.use('/car-mechanic');
module.exports=router;
