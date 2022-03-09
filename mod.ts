/* Crate —— v0.22 */

import serveCrate from "./server.ts";
import { make_crate } from "./rust/bindings/bindings.ts";

type Obj = {
    native?: boolean,
    title?: string,
    width?: number,
    height?: number,
    directory: string,
    routes: Record<string, unknown>
}

export default class Crate {
    serve(src: Obj) {
        serveCrate(src);
        if(src.native) {
            make_crate(src.title!, src.width!, src.height!);
        }
    }
}