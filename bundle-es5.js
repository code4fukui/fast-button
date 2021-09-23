(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var FastButton = function FastButton() {
  return Object.create(HTMLElement.prototype, {
    createdCallback: {
      value: function value() {
        /*
        var root = this.createShadowRoot();
        var template = thisDoc.querySelector("template");
        var content = thisDoc.importNode(template.content, true);
        root.appendChild(content);
        */
        var _this = this;

        if (this.ontouchstart) {
          this.onaddEventListener("touchstart", function (e) {
            e.preventDefault();

            _this._fireDown();
          });
          this.addEventListener("touchstop", function (e) {
            e.preventDefault();

            _this._fireUp();
          });
        } else {
          this.addEventListener("mousedown", function (e) {
            e.preventDefault();

            _this._fireDown();
          });
          this.addEventListener("mouseup", function (e) {
            e.preventDefault();

            _this._fireUp();
          });
        }
      }
    },
    _fireDown: {
      value: function value() {
        if (this.ondown) {
          this.ondown();
        }
      }
    },
    _fireUp: {
      value: function value() {
        if (this.onup) {
          this.onup();
        }
      }
    }
  });
};

console.log(FastButton);
console.log(FastButton._fireUp);
var fs = new FastButton();

fs.ondown = function () {
  console.log("down");
};

fs._fireDown();

customElements.define("fast-button", FastButton); //document.registerElement("fast-button", { prototype: FastButton });
//export { FastButton };

},{}]},{},[1]);
