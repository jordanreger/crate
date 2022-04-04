export const Router = (src: Record<string, unknown>) => {
    // read only from routes object
    src = Object(src.routes);

    const map = new Map();
    const routes = Object.keys(src), length = routes.length;

    // Convert object to map
    for(let i = 0; i < length; i++){
        const path = String(routes[i]), routedPath = String(src[path]).replace("./", "");
        map.set(path, routedPath);
    }

    return map;
}