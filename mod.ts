/* Crate —— v0.22 */

import serveCrate from "./server.ts";

export default class Crate {
    serve(src: Record<string, unknown>) {
        serveCrate(src);
    }

    /* more functions soon! */
}