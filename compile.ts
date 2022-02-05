import { change_subsystem } from "./src/change_subsystem.ts";

let filename = Deno.args[0];
const p = Deno.run({
  cmd: ["deno", "compile", "--output", "crate", "-A", "--unstable", `${filename}`],
});
await p.status();
await change_subsystem();
