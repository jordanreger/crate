let root = ".";

if (Deno.args[0] !== "localhost") {
    root = "./land"
}

const App = {
    routes: {
        "/": `${root}/src/index.html`,

        "/index.css": `${root}/static/index.css`,
        "/logo.svg": `${root}/static/logo.svg`,
        "/mod.ts": "https://deno.land/x/crate@v1.2.4/mod.ts",
        "/deno": "https://deno.land/x/crate",
        "/github": "https://github.com/jordanreger/crate",
    }
}

import Crate from "../mod.ts";
const crate = new Crate();

crate.serve(App);