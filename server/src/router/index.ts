import { Router } from '../deps.ts';
import login from './auth.ts';
import { createCake, getCakeDetail } from './cake.ts';
import { getUser } from './user.ts';

const router = new Router();

router.post('/login', login);

router.get('/user/:id', getUser);

router.get('/cake/:id', getCakeDetail);
router.post('/cake', createCake);

// TODO: 404 error handling

export default router;
