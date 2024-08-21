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
> You can switch between themes with @matchMedia

```javascript
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // …

// Watch for change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
});
```

Read more: [`@matchMedia`](https://devdocs.io/dom/window/matchmedia)

## Resources

- [cssdb.org](https://cssdb.org) – A list of current and potential future CSS features
- [projectwallace.com](https://www.projectwallace.com/) – CSS analyzer