
<div align="center">
  <a href="https://crate.land"><img src="https://siasky.net/CAD7j5WQJXvVyfBOOA0QSecHVrbeKrqoXOVpnN3vf03Uig" alt="crate" width="200"></a>
  <h2>crate — <i>native apps with <a href="https://deno.land">deno</a>!</i></h2>
</div>

<br/>

<a href="https://crate.land"><img src="https://siasky.net/fAJ-mKzuT_ixPDZ0v6Ka73VO4Urt6naVDYEE5iqESPy-jQ" alt="demo" /></a>

<div>
  <h2>get started</h2>
  <p>
  all you need to do is make two files. seriously!

  <code>main.ts</code>

  ```ts
  import { Crate, file } from "https://deno.land/x/crate/mod.ts";

  let crate = new Crate();
  crate.title = "Crate";
  crate.url = await file("index.html");
  crate.width = 720, crate.height = 480;
  crate.run();
  ```

  `index.html`

  ```html
  <html>
    <main>hello from index.html!</main>
  </html>
  ```

<h3>linux/mac</h3>
run the command below in your terminal, and a window will appear —

  ```sh
  deno run -A --unstable main.ts
  ```

<h3>windows</h3>
run the command below to get  <code>crate.exe</code>. Zip this with <code>index.html</code> and distribute!

```sh
deno run -A --unstable https://crate.land/compile main.ts
```
  </p>
</div>

<div>
  <h2>roadmap</h2>

  - [x] make basic window control and customization
  - [x] custom executables that can be packaged and delivered (windows only)
  - [ ] universal support
  - [ ] ??? — <a href="https://github.com/jordanreger/crate/issues">make an issue</a>!

</div>

<div>
  <h2>related</h2>

  - <a href="https://deno.land/x/webview">deno_webview</a> — deno bindings for webview

</div>

<div>
  <h2>contact</h2>

  - email — <a href="mailto:jordanreger@gmail.com">jordanreger@gmail.com</a>
  - mastodon — <a href="https://indieweb.social/@jr">@jr</a>

</div>
