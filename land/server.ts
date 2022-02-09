import { serve } from "https://deno.land/std/http/server.ts";

async function handler(req: Request): Promise<any> {
  let url = new URL(req.url);
  let headers = new Headers(req.headers), userAgent = await headers.get("user-agent")!.split("/")[0];
  let path = url.pathname, params = new URLSearchParams(url.search);
  const route = (route:string) => { let regexRoute = new RegExp(route, "gmi"); if(regexRoute.test(path)){ return path } else { return null }}
  const file = async (fp:string) => { let d = new TextDecoder("utf-8"); return d.decode(await Deno.readFile(fp))}

  let tr, rb, ct = "";

  switch(path){
    case '/':
      if(userAgent !== "Deno"){
        tr = true, ct = "text/html; charset=UTF-8";
        if(url.host !== "localhost:8000"){
          rb = await file("./land/src/index.html")
        } else {
          rb = await file("./src/index.html")
        }
      } else {
        tr = false, rb = "https://deno.land/x/crate/mod.ts";
      }
      break;

    case '/robots.txt':
      tr = true, rb = "User-agent: * Disallow:", ct = "text/plain";
      break;
    case '/dll':
      tr = false, rb = "https://siasky.net/XAAyFP8gQv9FBH0iQEvPNktipJl8Xw32n2fR4raLvruOyA";
      break;

    case '/compile':
      tr = false, rb = "https://deno.land/x/crate/compile.ts";
      break;

    default:
      tr = false, rb = `${url.protocol}//${url.host}/`;
  }

  let res;

  if(tr){
    res = new Response(await rb, { headers: { "content-type": ct } });
  } else {
    res = Response.redirect(rb, 302);
  }
  return res;
}

await serve(handler);
