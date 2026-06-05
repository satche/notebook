# CSS

<abbr title="Cascading Style Sheets">CSS</abbr> is a stylesheet language. It is basically the cosmetic layer of a web page (i.e. HTML).

## Variables

```CSS
:root { --main-color: blue; }

body { color: var(--main-color); }
```

[`@property`](https://devdocs.io/css/@property) can define variables with more precisions

## Colors

### Key terms

**[`<named-color>`](https://devdocs.io/css/named-color)**
Examples: `red`, `green`, `blue`

**[`<hex-color>`](https://devdocs.io/css/hex-color)**
Examples: `#FF0000`, `#008000`, `#0000FF`
- Some hex codes can be shorten: `#FF000` → `#F00`

**[`rgb()`](https://devdocs.io/css/color_value#rgba())**
Examples: `rgb(255,0,0)`, `rgb(0,255,0)`, `rgb(0,0,100%)`
- Values by Red-Green-Blue canals

**[`hsl()`](https://devdocs.io/css/color_value#hsla())**
Examples: `hsl(0, 100%, 50%)`, `hsl(120, 100%, 25%)`, `hsl(240, 100%, 50%)`
- Values define respectively the *hue*, *saturation* and *lightness*
- Use `hsl(120, 100%, 25%, 0.6)` to apply opacity (alpha canal). Also works with % value
- `deg` and `turn` can be used for *hue* value, according to the [color wheel](https://developer.mozilla.org/en-US/docs/Glossary/Color_wheel)

**[`oklch()`](https://devdocs.io/css/color_value/oklch)**
Examples: `oklch(0.7 0.1 84)`
- Define *lightness*, *chroma*, *hue* (improved version of [`lch()`](https://devdocs.io/css/color_value/lch))
- Lightness is *perceived*: it's consistent if chroma and hue change
- Better to create themes and palette

**[`currentColor`](https://devdocs.io/css/color_value#currentcolor_keyword)**
Example: `color: red; border: 1px solid currentColor;`
- This special keyword can get the value defined in `color`

**Other specifics terms**
- **[`color-mix()`](https://devdocs.io/css/color_value/color-mix)**: mix 2 colors together ([example](https://mdn.github.io/css-examples/tools/color-mixer/))
- **[`hwb()`](https://devdocs.io/css/color_value/hwb)**: define *hue*, *whitness* and *blackness*. 
- **`color()`**: change the current [color space](https://developer.mozilla.org/en-US/docs/Glossary/Color_space) (can be be detected via [`color-gamut`](https://devdocs.io/css/@media/color-gamut))

**Read more**
- [Web colors](https://en.wikipedia.org/wiki/Web_colors) – Wikipedia
- [htmlcolorcodes.com](https://htmlcolorcodes.com/)
- [oklch.com](https://oklch.com) – OKLCH Color Picker & Converter

### Relative colors

The [relative color syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors) allows a color to be defined relative to another color

```css
#left-square  { background-color: red; }
#right-square { background-color: rgb(from red 200 g b); }
```

![This is an example of a result using relative colors in CSS. There is 2 red squares. The first one is red. The second one is red with a darker tone, illustrating how it has been changed relatively to the first one.](relative-colors.png)

- Here, `red`, which value is `rgb(255, 0, 0)`, has been defined as `rgb(200, 0, 0)`. The second red square has a darker tone relative to the first one.
- It's possible to use other color properties in the same fashion: `color()`, `hsl()`, etc.

### Light-dark themes

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
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { /* … */ }

// Watch for change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
});
```

Read more: [`@matchMedia`](https://devdocs.io/dom/window/matchmedia)

### Blend modes

Use [`mix-blend-mode`](https://devdocs.io/css/mix-blend-mode) to create superposition images effects.

**Examples**
- `difference` value can be used to dynamically change text's color when it appears on same-color background.

## Typography

[`font-variant-numeric`](https://devdocs.io/css/font-variant-numeric) can be used to display changing text while keeping horizontal consistency and alignment. Typically used with none monotype fonts to keep the same width between digits. ""

Read more in [this article](https://iprodan.dev/l/font-variant-tabular-nums/)

## Shapes

[`shape-outside`](https://devdocs.io/css/shape-outside): adjacent inline content (e.g. text) will wrap around the shape (usually none-square shape, like a round object or transparent image). A margin can be defined with [`shape-margin`](https://devdocs.io/css/shape-margin).

[`corner-shape`](https://devdocs.io/css/corner-shape): specify the shape of the corners. Typically useful for incurved corners.

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
