// Auto-generated with deno_bindgen
import { CachePolicy, prepare } from "https://deno.land/x/plug@0.5.1/plug.ts"
function encode(v: string | Uint8Array): Uint8Array {
  if (typeof v !== "string") return v
  return new TextEncoder().encode(v)
}

const opts = {
  name: "crate",
  url: (new URL("../target/debug", import.meta.url)).toString(),
  policy: CachePolicy.NONE,
}
const _lib = await prepare(opts, {
  make_crate: {
    parameters: ["pointer", "usize", "i32", "i32"],
    result: "u8",
    nonblocking: true,
  },
})

export async function make_crate(a0: string, a1: number, a2: number) {
  const a0_buf = encode(a0)
  const rawResult = _lib.symbols.make_crate(a0_buf, a0_buf.byteLength, a1, a2)
  const result = rawResult
  return await result
}
