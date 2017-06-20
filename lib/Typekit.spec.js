'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _Typekit = require('./Typekit');

var _Typekit2 = _interopRequireDefault(_Typekit);

var _buildScript = require('./utilities/buildScript');

var _buildScript2 = _interopRequireDefault(_buildScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Typekit />', function () {
  it('should output typekit script when kitId prop is present', function () {
    var kitId = 'abc123';
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Typekit2.default, { kitId: kitId }));
    (0, _chai.expect)(wrapper.text()).to.equal((0, _buildScript2.default)(kitId));
  });

  it('should output nothing when kitId prop is not present', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Typekit2.default, null));
    (0, _chai.expect)(wrapper.html()).to.equal(null);
  });
});