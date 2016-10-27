'use strict';

const assert = require('assert');
const hi = require('../../../../src/services/g/hooks/Hi.js');

describe('g hi hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    hi()(mockHook);

    assert.ok(mockHook.hi);
  });
});
