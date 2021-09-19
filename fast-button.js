class FastButton extends HTMLElement {
  constructor() {
    super();
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
  _fireDown() {
    if (this.ondown) {
      this.ondown();
    }
  }
  _fireUp() {
    if (this.onup) {
      this.onup();
    }
  }
};

customElements.define("fast-button", FastButton);
