const App = {
    routes: {
        "/": "./land/src/index.html",
        "/mod": "https://deno.land/x/crate@v1.2.0/mod.ts",
        "/deno": "https://deno.land/x/crate",
        "/github": "https://github.com/jordanreger/crate"
    }
}

import Crate from "../mod.ts";
const crate = new Crate();

crate.serve(App);