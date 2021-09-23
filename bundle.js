const FastButton = function () {
  return Object.create(HTMLElement.prototype, {
    createdCallback: {
      value: function() {
        /*
        var root = this.createShadowRoot();
        var template = thisDoc.querySelector("template");
        var content = thisDoc.importNode(template.content, true);
        root.appendChild(content);
        */
        const _this = this;
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
      value: function () {
        if (this.ondown) {
          this.ondown();
        }
      }
    },
    _fireUp: {
      value: function() {
        if (this.onup) {
          this.onup();
        }
      }
    }
  });
};

console.log(FastButton);
console.log(FastButton._fireUp);
const fs = new FastButton();
fs.ondown = function() {
  console.log("down")
}
fs._fireDown();

customElements.define("fast-button", FastButton);
//document.registerElement("fast-button", { prototype: FastButton });


//export { FastButton };
