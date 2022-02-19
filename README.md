
<div align="center">
  <a href="https://crate.land"><img src="https://siasky.net/CAD7j5WQJXvVyfBOOA0QSecHVrbeKrqoXOVpnN3vf03Uig" alt="crate" width="200"></a>
  <h2>crate — <i>a fullstack web framework built with deno!</i></h2>
</div>

<br/>

<div>
  <h2>get started</h2>
  <p>
  all you need to do is make two files. seriously!

  <code>main.ts</code>

  ```ts
  import Crate from "https://crate.land/mod";

const crate = new Crate();
crate.serve("./src");
  ```

  `./src/index.html`

  ```html
  <Route="/" />
  <html>
    <main>
      hello from index.html!
      <br/>
      <Link to="https://crate.land/deno">
        Built with Crate!
      </Link>
    </main>
  </html>
  ```

<div>
  <h2>roadmap</h2>

  - [x] make a basic server-side rendering tool and a basic server with automatic route detection 
  - [ ] attach a universal backend (pallet) so you can run it anywhere
  - [ ] ??? — <a href="https://github.com/jordanreger/crate/issues">make an issue</a>!

</div>

<div>
  <h2>where's the old crate?</h2>
  for those of you who don't know, crate used to be a fancy webview wrapper. now, it's evolving into a fullstack web framework that will have a seamless native experience as well with an upcoming tool called "pallet." 

</div>

<div>
  <h2>contact</h2>

  - email — <a href="mailto:jordanreger@gmail.com">jordanreger@gmail.com</a>
  - mastodon — <a href="https://indieweb.social/@jr">@jr</a>

</div>
