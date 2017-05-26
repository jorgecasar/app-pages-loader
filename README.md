[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/jorgecasar/app-pages-loader)

# \<app-pages-loader\>

Component to load dynamically pages and keep a reduced DOM in huge apps.

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="app-pages-loader.html">
    <link rel="import" href="./bower_components/polymer/lib/elements/dom-bind.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<dom-bind id="demo">
  <template>
    <p>
      <label>Max nodes</label>
      <input value="{{maxNodes::input}}"/>
    </p>
    <p>
      <label>Max history</label>
      <input value="{{maxHistory::input}}"/>
    </p>
    <p>
      <label>Page</label>
      <select value="{{selected::input}}">
        <option value="view1">View 1</option>
        <option value="view2">View 2</option>
        <option value="view3">View 3</option>
        <option value="view404">View 404</option>
      </select>
    </p>
    <app-pages-loader selected="{{selected}}" fallback-selection="view404" max-nodes="{{maxNodes}}" max-history="{{maxHistory}}">
      <link rel="lazy-import" group="view1" href="./demo/components/page-test.html">
      <link rel="lazy-import" group="view2" href="./demo/components/page-test.html">
      <link rel="lazy-import" group="view3" href="./demo/components/page-test.html">
      <link rel="lazy-import" group="view404" href="./demo/components/page-test-404.html">
    </app-pages-loader>
  </template>
</dom-bind>
<script>
  var demo = document.querySelector('#demo');
  demo.selected = 'view1';
</script>
```

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
