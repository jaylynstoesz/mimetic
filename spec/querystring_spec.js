var file = require('../lib/querystring');

describe('parseQueryString', function () {
  it('turns a querystring into an object', function () {


    // Part 1: setup your input
    var input = '?artist=Miles&year=1948';

    // Part 2: call your function,
    //    passing in the input
    //    and capturing the result in a variable named `actual`
    var actual = file.parseQueryString(input);

    // Part 3a: define your expected output for the given input
    var expected = { artist: 'Miles', year: '1948' }

    // Part 3b: check to see if your code produced the results you expected
    expect(actual).toEqual(expected);

  });


it("returns empty object when input is null", function() {
  var input = null;
  var actual = file.parseQueryString(input);
  var expected = {};
  expect(actual).toEqual(expected);
  });

});
