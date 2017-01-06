/**
 * Created by solee on 06/01/2017.
 */
'use strict';

const Promise = require('bluebird');

module.exports = function (options) {
  return new Promise(function (resolve) {

    var data = options.data || [];
    var fields = options.fields || [];
    var delimiter = options.delimiter || ',';

    if (fields.length === 0) {
      return 'Need Fields!';
    }

    if (!Array.isArray(data) || !Array.isArray(fields)) {
      return 'Data and Fields should be array!';
    }

    var csv = '';
    csv += fields.join(delimiter) + '\n';

    data.forEach(function (item, index) {
      var tmpRow = [];
      fields.forEach(function (field) {
        var tmpField = field.split('.');
        var tmpValue = '';
        if (tmpField.length === 1) {
          tmpValue = item[field] === undefined || item[field] === null ? '' : item[field];
        } else {
          tmpValue = item;
          var n = 0;
          while (n < tmpField.length) {
            tmpValue = tmpValue[tmpField[n]] === undefined || tmpValue[tmpField[n]] === null ? '' : tmpValue[tmpField[n]];
            if (!tmpValue) {
              break;
            }
            n++;
          }
        }

        if (Array.isArray(tmpValue)) {
          tmpValue = '"' + String(tmpValue).replace(/"/g, '""') + '"';
        } else {
          tmpValue = String(tmpValue).replace(/"/g, '""');
        }

        tmpRow.push(tmpValue);
      });
      csv += tmpRow.join(delimiter) + '\n';
    });

    resolve(csv);
  });
};