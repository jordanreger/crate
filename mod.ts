/* Crate v1.2.2 */

import serveCrate from "./server.ts";

type Obj = {
    native?: boolean,
    title?: string,
    width?: number,
    height?: number,
    directory?: string,
    routes: Record<string, unknown>
}

export default class Crate {
    serve(src: Obj) {
        serveCrate(src);
        if(src.native) {
            import("./rust/bindings/bindings.ts").then((crate) => {
                crate.make_crate(src.title!, src.width!, src.height!)
            });
        }
    }
}