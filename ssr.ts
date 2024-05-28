/*

CUSTOM TAGS ARE TEMPORARILY DISABLED

*/

const ssr = /* async */ (file: string) => {
    let src = file;

    /* BROKEN
    await (async() => {
        const FetchTags = src.match(/<Fetch url="[^"]*" \/>/gmi) || [];
        for(const tag of FetchTags){
            const url = tag.replace(`<Fetch url="`, "").replace(`" />`, "");
            const res = await fetch(url).then((data) => data.text()).then((data) => { return data })
            ssrSrc = ssrSrc.replace(/<Fetch url="[^"]*" \/>/gmi, res);
        }
    })();*/

    /* <Link to="{path}">{inner html}</Link> */
    (() => {
        const LinkTags = src.match(/<Link\s+to=(?:([^"]+?)|"([^"]+?)")>(.*?)<\/Link>/gmis) || [];
        for(const tag of LinkTags){
            const html = tag.replace(/<Link\s+to=(?:([^"]+?)|"([^"]+?)")>(.*?)<\/Link>/gmis, (_, url, url2, text) => {
                return `<a href="${url || url2}">${text}</a>`
            })
            src = src.replace(/<Link\s+to=(?:([^"]+?)|"([^"]+?)")>(.*?)<\/Link>/gmis, html)
        }
    })();

    return src;
}

export { ssr };