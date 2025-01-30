const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

});


describe("returns the correct spiral order for a 4x4 array", function () {
    const input = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const expected = [
      1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
    ];
    expect(unroll(input)).toEqual(expected);
  });

  describe("returns the correct spiral order for a 1x3 array", function () {
    const input = [
      [1, 2, 3],
    ];
    const expected = [1, 2, 3];
    expect(unroll(input)).toEqual(expected);
  });

  describe("returns the correct spiral order for a 3x1 array", function () {
    const input = [
      [1],
      [2],
      [3],
    ];
    const expected = [1, 2, 3];
    expect(unroll(input)).toEqual(expected);
  });
