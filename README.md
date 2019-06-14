# babel-plugin-add-regex-unicode
> Babel plugin to add regex Unicode flag

[![Build Status](https://travis-ci.org/pgilad/babel-plugin-add-regex-unicode.svg?branch=master)](https://travis-ci.org/pgilad/babel-plugin-add-regex-unicode)

This babel plugin will add `/u` flag to all your literal unicode regexp so
that you don't need to remember to do it.

Off course it won't add it twice ;)

Now you can have fun with regex sleeping safely at night that you are handling unicode correctly

```shell
$ npm install babel-plugin-add-regex-unicode --save-dev
```

**.babelrc**

```json
{
  "plugins": [
    ["babel-plugin-add-regex-unicode"]
  ]
}
```


**Source Code**:

```js
var regex = /anything/;
```

**Output Code**:

```js
var regex = /anything/u;
```

## License

MIT © [Gilad Peleg](https://www.giladpeleg.com)
