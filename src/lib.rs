use deno_bindgen::deno_bindgen;
use web_view::*;

#[deno_bindgen]
fn make_crate(title: &str, html: &str, width: i32, height: i32) -> u8 {
    web_view::builder()
        .title(title)
        .content(Content::Html(html))
        .size(width, height)
        .resizable(true)
        .debug(true)
        .user_data(())
        .invoke_handler(|_webview, _arg| Ok(()))
        .run()
        .unwrap();
    return 0;
}
