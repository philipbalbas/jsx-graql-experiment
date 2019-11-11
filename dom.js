const Adapter = require('enzyme-adapter-react-16');
const enzyme = require('enzyme');
const jsdom = require('jsdom');

enzyme.configure({ adapter: new Adapter() });

const container = 'container';
const { window, document } = new jsdom.JSDOM(
  `DOCTYPE html <div id="${container}"> </div>`
);
function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
global.requestAnimationFrame = function(callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function(id) {
  clearTimeout(id);
};
copyProps(window, global);

module.exports.default = document;
