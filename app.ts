Deno.serve(
    { port: 3000, hostname: "0.0.0.0" },
    (_req) => new Response("Hello, world")
  );



// -----------------------------------------------------------//

// const text = "This is a test - and it should be stored in a file!"

// const encoder = new TextEncoder();
// const data = encoder.encode(text);

// Deno.writeFile('message.txt', data). then(() => {
//     console.log("Wrote to file!")
// })
