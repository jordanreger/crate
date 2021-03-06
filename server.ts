import { serve } from "https://deno.land/std@0.119.0/http/server.ts";
/* import { ssr } from "./ssr.ts"; */
import { Router } from "./routes.ts";

import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";

export default function serveCrate(src: Record<string, unknown>){
  const paths = Router(src);

  async function handler(req: Request): Promise<Response> {
    const url = new URL(req.url), path = url.pathname, decoder = new TextDecoder("utf-8"), file = async (file_path:string) => { return decoder.decode(await Deno.readFile(file_path))};
    const route = (path: string) => {
      const arr = Array.from(paths.keys());
      for(const e of arr) {
        if(e.charAt(e.length - 1) === "."){
          const regex = new RegExp(e, "gmi");
          if(regex.test(String(path))){
            path = e;
          }
        }
      }

      return path;
    }

    const routed_path = paths.get(route(path));

    let response: Response, content: string, contentType: string;
    if (!routed_path) {
      response = new Response("not found");
    } else {
      const isUrl = (path: string) => {
        try { return Boolean(new URL(path)); }
        catch(_){ return false; }
      }
      const isFile = async (path: string) => {
        try { return Boolean(await Deno.readFile(path)); }
        catch(_){ return false; }
      }

      if(isUrl(routed_path)) {
          response = Response.redirect(routed_path, 302);
      } else {
        if(await isFile(routed_path)){
          const fileType = routed_path.split(".")[routed_path.split(".").length - 1];
          content = await file(`${routed_path}`);

          if(fileType === "html"){
            contentType = "text/html; charset=UTF-8";
          }
          
          else if (fileType === "md") {
            content = Marked.parse(content).content;
            contentType = "text/html; charset=UTF-8";
          }

          else if (fileType === "svg") {
            contentType = "image/svg+xml";
          }

          else if (fileType === "ts" || fileType === "js" || fileType === "mjs" || fileType === "mts") {
            contentType = "text/javascript";
          }

          else if (fileType === "txt") {
            contentType = "text/plain";
          }

          else if (fileType === "json") {
            contentType = "application/json";
          }

          else {
            content = "not found";
            contentType = "text/plain";
          }
        } else {
          content = routed_path;
          contentType = "text/html; charset=UTF-8";
        }

        response = new Response(content!, {
          headers: { "content-type": contentType! },
        });
      }
    }
  
    return response;
  }

  serve(handler);
}