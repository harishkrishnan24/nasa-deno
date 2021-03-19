import { Application } from "https://deno.land/x/oak@v6.5.0/mod.ts";

const app = new Application();
const PORT = 8000;

app.listen({
  port: PORT,
});
