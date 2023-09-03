import { createClient } from '../deps.ts';

// TODO: 필요한 옵션 추가
const options = {};

const db_domain = Deno.env.get('DB_DOMAIN') ?? '';
const db_anon = Deno.env.get('DB_ANON') ?? '';

const DB = createClient(db_domain, db_anon, options);

export default DB;
