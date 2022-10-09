# Css Units

## Reference

- [Css Unit](https://www.oxxostudio.tw/articles/201809/css-font-size.html)
- [CSS 小技巧分享：em 單位的強大用途](https://reurl.cc/D3Vldm)
- [rem vs em Units in CSS](https://medium.com/@hossam.hilal0/rem-vs-em-units-in-css-96d5ac15878e")

## em

When em units are used on other properties than font-size, the value is relative to the element’s own font-size.

```scss
.parent {
   font-size: 18px;
}
.child {
   font-size: 1.5em; // 18*1.5
   padding: 2em 1em; // 18*1.5*(2  1)
}
```

## rem (root-em)

**using rem units allow us to avoid the compounding effect of em units.**

```css
.html {
   font-size: 16px;
}
.parent {
   font-size: 15px;
}
.child-rem {
   font-size: 2rem;
}
```

```html
<div class="parent">
    I'm 15px
    <div class="child-rem">
         I'm 32px, as expected
         <div class="child-rem">
              I'm 32px, yep!
              <div class="child-rem">
                   I'm 32px, like clockwork!
              </div>
         </div>
    </div>
</div>
```

**Using rem units on those will still be relative to the `font-size` of the root element for other values than `font-size` itself (`margin`, `padding`,…)**

It is a relative unit.  
Always being based upon the font-size value of the root element, which is the `<html>` element.  
And if the `<html>` element doesn’t have a specified font-size, the browser default of `16px` is used.
