# ReplaceJs

## Micro plugin to to create easy word-carousels

Simple plugin to use on landingpages or startpages to make stuff look a bit more interesting. 
Basically this lib is just for replace words in one element to create a simple *word-carousel*.

## Usage

* 1. Require script

```html
<script type="text/javascript" src="./dist/replace.min.js"></script>
```

* 2. Add element

```html
<span id="js_replace"></span>
```

* 2. Initialize lib

```javascript
<script type="text/javascript">
    replaceJs({
        element: document.getElementById('#js_replace'),
        words: ['cool', 'nice', 'sweet', 'lovely']
    });
</script>
```