# ReplaceJs

## Micro plugin to to create easy word-carousels

Simple plugin to use on landingpages or startpages to make stuff look a bit more interesting. 
This lib is for replacing words in one element to create a simple **word-carousel**.

## Advantages

* ~ 1KB
* without jQuery 
* easy-to-use

## Usage

1. Require script

```html
<script type="text/javascript" src="./dist/replace.min.js"></script>
```

2. Add element

```html
<span id="replace">cool</span>
```

3. Initialize lib

```javascript
replaceJs({
    element: document.getElementById('replace'), // REQUIRED - the element from which the text value should change
    words: ['cool', 'nice', 'sweet', 'lovely'] // REQUIRED - the words that should carousel through
});
```

* 4. Reload page and see how the words are changing :)