import { serve } from "https://deno.land/std@0.119.0/http/server.ts";
import { ssr, route } from "./utils.ts";

const paths = new Map(), decoder = new TextDecoder("utf-8"), file = async (file_path:string) => { return decoder.decode(await Deno.readFile(file_path))};

async function readPaths(directory: string){
  for await (const item of Deno.readDir(directory)) {
    const file_path = `${directory}/${item.name}`;
    const path = route(await file(file_path));
    paths.set(path, file_path);
  }
}

async function handler(req: Request): Promise<Response> {

  //let respond, content, contentType = "";
  const url = new URL(req.url), path = url.pathname, file = async (file_path:string) => { const decoder = new TextDecoder("utf-8"); return decoder.decode(await Deno.readFile(file_path))};
  const file_path = paths.get(path);
  let response;
  if (!file_path) {
    response = new Response("not found");
  } else {
    response = new Response(ssr(await file(file_path)), {
      headers: { "content-type": "text/html; charset=UTF-8" },
    });
  }

  return response;
}

export default async function serveCrate(directory: string){
  await readPaths(directory).catch((error) => {
    console.error(error);
  });
  await serve(handler);
}