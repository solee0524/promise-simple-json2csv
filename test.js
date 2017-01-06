/**
 * Created by solee on 06/01/2017.
 */
'use strict';

const json2csv = require('./index');

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
