global.fetch = require('jest-fetch-mock');
require('jest-localstorage-mock');

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({
  adapter: new Adapter()
});
