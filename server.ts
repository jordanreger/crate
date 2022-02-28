import { serve } from "https://deno.land/std@0.119.0/http/server.ts";
import { ssr } from "./ssr.ts";
import { Router } from "./routes.ts";

export default async function serveCrate(src: Record<string, unknown>){
  const paths = Router(src);

  async function handler(req: Request): Promise<Response> {

    //let respond, content, contentType = "";
    const url = new URL(req.url), path = url.pathname, file = async (file_path:string) => { const decoder = new TextDecoder("utf-8"); return decoder.decode(await Deno.readFile(file_path))};
    const routed_path = paths.get(path);
    let response;
    if (!routed_path) {
      response = new Response("not found");
    } else {
      const isUrl = (path: string) => {
        try { return Boolean(new URL(path)); }
        catch(_){ return false; }
      }

      if(isUrl(routed_path)) {
          response = Response.redirect(routed_path, 302);
      } else {
        response = new Response(ssr(await file(`${src.directory}/${routed_path}`)), {
          headers: { "content-type": "text/html; charset=UTF-8" },
        });
      }
    }
  
    return response;
  }

  await serve(handler);
}