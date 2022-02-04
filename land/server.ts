import { serve } from "https://deno.land/std/http/server.ts";

async function handler(req: Request): Promise<any> {
  let url = new URL(req.url);
  let path = url.pathname, params = new URLSearchParams(url.search);
  const route = (route:string) => { let regexRoute = new RegExp(route, "gmi"); if(regexRoute.test(path)){ return path } else { return null }}
  const file = async (fp:string) => { let d = new TextDecoder("utf-8"); return d.decode(await Deno.readFile(fp))}

  let tr, rb, ct = "";

  switch(path){
    case '/':
      tr = true, rb = await file("./land/src/index.html"), ct = "text/html; charset=UTF-8";
      break;

    case '/robots.txt':
      tr = true, rb = "User-agent: * Disallow:", ct = "text/plain";
      break;
    case '/dll':
      tr = false, rb = "https://siasky.net/XAAyFP8gQv9FBH0iQEvPNktipJl8Xw32n2fR4raLvruOyA";
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
