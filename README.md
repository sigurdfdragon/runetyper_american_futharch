# Runetyper American Futharch
https://sigurdfdragon.github.io/runetyper_american_futharch/

Forked from https://github.com/sigrarr/runetyper

## Idea and the main functionality
The purpose of this project is to provide a comfortable way of writing in American Futharch runes.

Runetyper American Futharch converts standard keyboard input to the American Futharch runic characters. The correspondence between typed keys and characters they produce is meant to practical and allow the typing of everything with a single key and no shift required. Where correspondences to alphabet letters were possible, these have been used. However, there’s only so much that can be done when there are 33 runes but only 26 letters. :)

The generated output is Unicode text (UTF-8). The application utilizes the Unicode Runic block.

## Building
### JavaScript
1. Input: /sources/js/App.inc.js
2. Replace each occurrence of the pseudo-function `include(String filePath)` with the content of the specified file. Paths are relative to the input file (*.inc.js), or to the project root if start with /
3. Minify/compress the code.
4. Output: /assets/app.min.js
### CSS
1. Input: /sources/scss/master.scss
2. Run a Sass parser on the SCSS code to produce minified CSS.
3. Output: /assets/style.min.css

## Licence
Feel free to use this project on the condition that it will be noticed in any published derivative work, with the link to this repository (<https://github.com/sigurdfdragon/runetyper_american_futharch>) or to the Runetyper American Futharch GitHub Page (<https://sigurdfdragon.github.io/runetyper_american_futharch/>).
And also a link to the original repository (<https://github.com/Sigrarr/runetyper>) or to the original Runetyper GitHub Page (<https://sigrarr.github.io/runetyper/>).
