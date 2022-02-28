<div id="airframe">
<header>
<img src="https://siasky.net/CAD7j5WQJXvVyfBOOA0QSecHVrbeKrqoXOVpnN3vf03Uig" alt="crate" width="50" style="float: left"/>
<h2 style="float: right">crate</h2>

<div style="clear:both"></div>
</header>
<br/>
<br/>
<h2>readme</h2>
<div class="body">
crate is a fullstack web framework built on deno!
<br/>
<br/>
available on:
<br/>
[<a href="https://deno.land/x/crate" class="outbound">deno.land/x</a>]
<br/>
[<a href="https://github.com/jordanreger/crate" class="outbound">github</a>]
<br/>
<br/>
<hr>
<br/>
<h2>get started</h2>
all you need to do is make two files. seriously!
<br/>
<br/>
<b>main.ts</b>

```ts
const App = {
  directory: "./src",
  routes: {
    "/": "./index.html",
    "/redirect": "https://crate.land"
  }
}

import Crate from "https://crate.land/mod";

let crate = new Crate();
crate.serve(App);
```

<br/>
<b>./src/index.html</b>


```html
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
<br/>
<hr/>
</div>
<br/>
<h2>roadmap</h2>
<br/>
<div class="body">

- [x] make a basic server-side rendering tool and an automatic server
<br/>
- [ ] attach a universal backend (pallet) so you can run it anywhere
<br/>
- [ ] ??? — <a href="https://github.com/jordanreger/crate/issues" class="outbound">make an issue</a>!

</div>
<br/>
<br/>
<h2>where's the old crate?</h2>
<br/>
<div class="body">
for those of you who don't know, crate used to be a fancy webview wrapper. now, it's evolving into a fullstack web framework that will have a seamless native experience as well with an upcoming tool called "pallet." 
</div>
<br/>
<br/>
<h2>dev</h2>
<br/>
<div class="body">
<a href="/deno"><img alt="Deno release" src="https://shield.deno.dev/x/crate"></a> <a href="/github"><img alt="GitHub license" src="https://img.shields.io/github/license/jordanreger/crate"></a>
<br/>
<br/>
built with ♡ and <a href="https://deno.land" class="outbound">deno</a> by <a href="https://jordanreger.com" class="outbound">jordan reger</a>.
</div>
<br/>
<br/>
</div>