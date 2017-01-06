# promise-simple-json2csv
A simple json to csv module build with promise.

<p align="left">
  <a href="https://npmjs.org/package/promise-simple-json2csv">
    <img src="https://img.shields.io/npm/v/promise-simple-json2csv.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://npmjs.org/package/promise-simple-json2csv">
    <img src="http://img.shields.io/npm/dm/promise-simple-json2csv.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/solee0524/promise-simple-json2csv.svg">
    <img src="https://david-dm.org/solee0524/promise-simple-json2csv.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/solee0524/promise-simple-json2csv/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/promise-simple-json2csv.svg?style=flat-square"
         alt="License">
  </a>
</p>

## Usage

```
var json2csv = require('promise-simple-json2csv');

var authors = [{
  name: 'solee',
  homepage: 'http://solee.me',
  repo: {
    url: 'https://github.com/solee0524/promise-simple-json2csv.git',
    type: 'git'
  },
  keys: ['coo"l', 'lol']
}, {
  name: 'solee_clone',
  homepage: 'http://solee.me',
  repo: {
    url: 'https://github.com/solee0524/promise-simple-json2csv.git',
    type: 'git'
  },
  keys: ['clone', 'myth']
}];

var options = {
  data: authors,
  fields: ['name', 'homepage', 'repo.url', 'keys']
};

json2csv(options).then(function (csv) {
  console.log(csv);
});
```

`data` and `fields` in `options` must be **Array**

## License
MIT © Bo Li ([solee.me](http://solee.me))