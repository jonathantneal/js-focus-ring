# JS Focus Ring [<img src="https://resources.whatwg.org/logo-dom.svg" alt="DOM Logo" width="90" height="90" align="right">][JS Focus Ring]

[![NPM Version][npm-img]][npm-url]
[![Linux Build Status][cli-img]][cli-url]
[![Windows Build Status][win-img]][win-url]
[![Gitter Chat][git-img]][git-url]

[JS Focus Ring] helps you deliver a consistent focus experience to browsers,
following the [speculative `:focus-ring` pseudo-class].

Use the `js-focus` and `js-focus-ring` attributes to safely target different
`:focus-ring` experiences. This is probably the most common usecase:

```css
[js-focus]:not([js-focus-ring]) {
  outline-width: 0;
}
```

Someday, you will swap it out for this native solution:

```css
:focus:not(:focus-ring) {
  outline-width: 0;
}
```

## Usage

Add [JS Focus Ring] to your project:

```bash
npm install js-focus-ring --save
```

Import [JS Focus Ring] in JavaScript module environments and execute on demand:

```js
import jsFocusRing from 'js-focus-ring';

jsFocusRing(/* optionally pass in the window you are targetting */);
```

Alternatively, load it as an individual script:

```html
<script src="https://jonathantneal.github.io/js-focus-ring/js-focus-ring.env.js"></script>
<script>jsFocusRing(/* optionally pass in the window you are targetting */)</script>
```

---

[JS Focus Ring] is 446 bytes env transpiled, minified, and gzipped.

[JS Focus Ring] works in all browsers that support `addEventListener`, which includes Internet Explorer 9.

[npm-url]: https://www.npmjs.com/package/js-focus-ring
[npm-img]: https://img.shields.io/npm/v/js-focus-ring.svg
[cli-url]: https://travis-ci.org/jonathantneal/js-focus-ring
[cli-img]: https://img.shields.io/travis/jonathantneal/js-focus-ring.svg
[win-url]: https://ci.appveyor.com/project/jonathantneal/js-focus-ring
[win-img]: https://img.shields.io/appveyor/ci/jonathantneal/js-focus-ring.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[JS Focus Ring]: https://github.com/jonathantneal/js-focus-ring

[speculative `:focus-ring` pseudo-class]: https://drafts.csswg.org/selectors-4/#the-focusring-pseudo
