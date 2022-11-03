<body>
  <main>
    <header>
      <img src="https://crate.land/logo.svg" alt="crate" width="50" style="float: left" />
      <h3 style="float: right; text-align: right;">crate</h3>
      <div style="clear:both; user-select: none;"></div>
    </header>
    <article>
      <h2>README</h2>
      <div class="body">
        crate is a fullstack web framework built on deno!
        <br />
        <br />
        [<a href="https://deno.land/x/crate">deno.land/x</a>] [<a href="https://github.com/jordanreger/crate">github</a>]
      </div>
    </article>
    <hr />
    <article>
      <h2>getting started</h2>
      <div class="body">
        the below code will spawn a basic web server.
        <br/>
        <br/>
        <b>main.ts</b>
        <pre>
const App = {
  directory: "./src",
  routes: {
    "/": "./index.html",
    "/redirect": "https://crate.land"
  }
}
            
import Crate from "https://crate.land/mod.ts";
  
const crate = new Crate();
crate.serve(App);</pre>
        <br/>
        <b>./src/index.html</b>
        <pre>&lt;html&gt;
  &lt;main&gt;
    hello from index.html!
    &lt;br/&gt;
    &lt;Link to="https://crate.land/deno"&gt;
      Built with Crate!
      &lt;/Link&gt;
  &lt;/main&gt;
&lt;/html&gt;</pre>
      </div>
    </article>
    <article>
      <h2>dev</h2>
      <div class="body">
        <a href="/deno"><img alt="Deno release" src="https://shield.deno.dev/x/crate"></a> <a href="/github"><img alt="GitHub license" src="https://img.shields.io/github/license/jordanreger/crate"></a>
        <br/>
        <br/>
        built with ♡ and <a href="https://deno.land" class="outbound">deno</a> by <a href="https://jordanreger.com" class="outbound">jordan reger</a>.
      </div>
    </article>
  </main>
</body>