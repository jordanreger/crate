// Auto-generated with deno_bindgen
import { CachePolicy, prepare } from "https://deno.land/x/plug@0.4.1/plug.ts"
function encode(v: string | Uint8Array): Uint8Array {
  if (typeof v !== "string") return v
  return new TextEncoder().encode(v)
}
function decode(v: any): Uint8Array {
  const ptr = new Deno.UnsafePointerView(v as Deno.UnsafePointer)
  const lengthBe = new Uint8Array(4)
  const view = new DataView(lengthBe.buffer)
  ptr.copyInto(lengthBe, 0)
  const buf = new Uint8Array(view.getUint32(0))
  ptr.copyInto(buf, 4)
  return buf
}

const policy = Deno.env.get("PLUGIN_URL") === undefined
  ? CachePolicy.STORE
  : CachePolicy.NONE;

const opts = {
  name: "crate",
  url: "https://github.com/jordanreger/crate/releases/download/v0.1.3/crate.dll",
  policy: policy,
}
const _lib = await prepare(opts, {
  make_crate: {
    parameters: ["pointer", "usize", "pointer", "usize", "i32", "i32"],
    result: "u8",
    nonblocking: false,
  },
})

export function make_crate(a0: string, a1: string, a2: number, a3: number) {
  const a0_buf = encode(a0)
  const a1_buf = encode(a1)
  let result = _lib.symbols.make_crate(
    a0_buf,
    a0_buf.byteLength,
    a1_buf,
    a1_buf.byteLength,
    a2,
    a3,
  ) as number

  return result
}
