import { createClient, load } from '../deps.ts';

const env = await load();

// TODO: 필요한 옵션 추가
const options = {};

const DB = createClient(env['DB_DOMAIN'], env['DB_ANON'], options);

export default DB;
