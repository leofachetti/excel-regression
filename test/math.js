var math = require('../lib/utils/math');
var expect = require('chai').expect;

var values = [
  [0.827106,	32699512],
  [1.275007,	50550730],
  [1.435098,	56214886],
  [1.597657,	63010730],
  [1.748174,	68767902],
  [1.904614,	75539606]
];

describe('math utils', function() {
  it('should return the average', function() {
    expect(57797227.66667).to.be.equal(math.average(values));
  });

  it('should return the SS', function() {
    expect(1147239156098787.5).to.be.equal(math.ss(values));
  });

  it('should return the SSE', function() {
    expect(425436769345.9457).to.be.equal(math.sse(values));
  });
});
