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
        if (this.ontouchstart) {
          this.onaddEventListener("touchstart", (e) => {
            e.preventDefault();
            this._fireDown();
          });
          this.addEventListener("touchstop", (e) => {
            e.preventDefault();
            this._fireUp();
          });
        } else {
          this.addEventListener("mousedown", (e) => {
            e.preventDefault();
            this._fireDown();
          });
          this.addEventListener("mouseup", (e) => {
            e.preventDefault();
            this._fireUp();
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
