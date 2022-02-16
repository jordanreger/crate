import { make_crate } from "./src/bindings.ts";

export class Crate {
  #title?: string;
  #url?: string;
  #width?: number;
  #height?: number;

  set title(title) {
    this.#title = title;
  }

  get title(): string {
    if (this.#title == undefined) throw new TypeError("crate not initialized");
    return this.#title;
  }

  set url(url) {
    this.#url = url;
  }

  get url(): string {
    if (this.#url == undefined) throw new TypeError("crate not initialized");
    return this.#url;
  }

  set width(width) {
    this.#width = width;
  }

  get width(): number {
    if (this.#width == undefined){ return 320 } else { return this.#width }
  }

  set height(height) {
    this.#height = height;
  }

  get height(): number {
    if (this.#height == undefined){ return 480 } else { return this.#height }
  }

  async run(){
    await make_crate(this.title, this.url, this.width, this.height);
  }
}

export const file = async (fp:string) => { const d = new TextDecoder("utf-8"); return d.decode(await Deno.readFile(fp)) };
