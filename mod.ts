/* Crate —— v1.0 */

import serveCrate from "./server.ts";
import { ssr, route } from "./utils.ts";

export default class Crate {

    serve(directory: string) {
        serveCrate(directory);
    }

    route(src: string) {
        route(src);
    }

    ssr(file: string){
        ssr(file);
    }
}