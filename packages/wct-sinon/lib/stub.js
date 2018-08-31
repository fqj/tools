"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * stub
 *
 * The stub addon allows the tester to partially replace the implementation of
 * an element with some custom implementation. Usage example:
 *
 * beforeEach(function() {
 *   stub('x-foo', {
 *     attached: function() {
 *       // Custom implementation of the `attached` method of element `x-foo`..
 *     },
 *     otherMethod: function() {
 *       // More custom implementation..
 *     },
 *     getterSetterProperty: {
 *       get: function() {
 *         // Custom getter implementation..
 *       },
 *       set: function() {
 *         // Custom setter implementation..
 *       }
 *     },
 *     // etc..
 *   });
 * });
 */
function stub(_context, teardown) {
    return function stub(tagName, implementation) {
        // Find the prototype of the element being stubbed:
        var proto = document.createElement(tagName).constructor.prototype;
        // For all keys in the implementation to stub with..
        var stubs = Object.keys(implementation).map(function (key) {
            // Stub the method on the element prototype with Sinon:
            return window['sinon'].stub(proto, key, implementation[key]);
        });
        // After all tests..
        teardown(function () {
            stubs.forEach(function (stub) {
                stub.restore();
            });
        });
    };
}
exports.stub = stub;
//# sourceMappingURL=stub.js.map