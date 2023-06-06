import { Application, oakCors } from './deps.ts';
import router from './router/index.ts';

const app = new Application();

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

//TODO: to stg server
console.log(`Listening on port:8000...`);
app.listen({ port: 8000 });
