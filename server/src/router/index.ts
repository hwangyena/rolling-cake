import { Router } from '../deps.ts';
import login from './auth.ts';
import { getCakeDetail } from './cake.ts';
import { getUser } from './user.ts';

const router = new Router();

router.post('/login', login);

router.get('/user/:id', getUser);

router.get('/cake/:id', getCakeDetail);

// TODO: 404 error handling

export default router;
