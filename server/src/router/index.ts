import { Router } from '../deps.ts';
import login from './auth.ts';
import { getUser } from './user.ts';

const router = new Router();

router.post('/login', login);

router.get('/user/:id', getUser);

export default router;
