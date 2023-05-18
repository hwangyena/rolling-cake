import { oakCors } from 'https://deno.land/x/cors/mod.ts';
import { Application } from 'https://deno.land/x/oak/mod.ts';

import router from './routes.ts';

const app = new Application();

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

//TODO: to stg server
console.log(`Listening on port:8000...`);
app.listen({ port: 8000 });
