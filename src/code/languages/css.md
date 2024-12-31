# CSS

<abbr title="Cascading Style Sheets">CSS</abbr> is a stylesheet language. It is basically the cosmetic layer of a web page (i.e. HTML).

## Variables

```CSS
:root {
  --main-color: blue;
}

body {
  color: var(--main-color);
}
```

[`@property`](https://devdocs.io/css/@property) can define variables with more precisions

## Light-dark themes

You can use[`color-scheme`](https://devdocs.io/css/color-scheme) and [`light-dark()`](https://devdocs.io/css/color_value/light-dark) to easily define light-dark color themes.

```css
/* Use at property level */
:root {
  color-scheme: light dark;
  --color-background: light-dark(white, black);
}

/* Use at media query level */
@media (prefers-color-scheme: light) {
  body {
    color: black;
  }
}
```

> [!INFO]
> You can switch between themes with `@matchMedia`

```javascript
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
// …

// Watch for change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
});
```

Read more: [`@matchMedia`](https://devdocs.io/dom/window/matchmedia)

## Scroll

The [scroll-snap](https://devdocs.io/css/css_scroll_snap) properties allows to align ("snap") the scroll on certain elements within HTML containers.

```css
.container {
    scroll-snap-type: y mandatory;
    scroll-padding: 50px;
    scroll-margin: 50px;
}

.container .section {
    scroll-snap-align: start;
}
```

- [`scroll-snap-type`](https://devdocs.io/css/scroll-snap-type)'s first parameter is the axis. Second one can be `mandatory` (always snap to sections) or `proximity` (snap if close to the section).
- [`scroll-margin`](https://devdocs.io/css/scroll-margin) and [`scroll-padding`](https://devdocs.io/css/scroll-padding) define offsets of section's align point.
- [`scroll-snap-align`](https://devdocs.io/css/scroll-snap-align) can be at the `start` or at the `end` of the section.

## Resources

- [postcss.org](https://postcss.org/) – Tool to lint and enable extra features to CSS
- [cssdb.org](https://cssdb.org) – A list of current and potential future CSS features
- [projectwallace.com](https://www.projectwallace.com/) – CSS analyser
