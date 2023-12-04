//# Using Oak - 3rd party dependancy
// # run with deno run --allow-net app.ts

import { Application } from "https://deno.land/x/oak/mod.ts";

import todoRoutes from "./routes/routes.ts"

const app = new Application();

app.use(async (ctx, next) => {
  ctx.response.body = "Middleware";
  await next();
});

app.use(todoRoutes.routes());
app.use(todoRoutes.allowedMethods());


await app.listen({ port: 8000 });


// -----------------------------------------------------------//
// # Raw Deno Code
// # run with deno run --allow-net app.ts

// Deno.serve(
//     { port: 3000, hostname: "0.0.0.0" },
//     (_req) => new Response("Hello, world")
//   );


// -----------------------------------------------------------//

// const text = "This is a test - and it should be stored in a file!"

// const encoder = new TextEncoder();
// const data = encoder.encode(text);

// Deno.writeFile('message.txt', data). then(() => {
//     console.log("Wrote to file!")
// })
