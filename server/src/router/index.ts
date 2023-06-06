import { Router } from '../deps.ts';
import login from './auth.ts';

const router = new Router();

router.post('/login', login);

export default router;
