// this version uses the template literal
class Toast3 extends HTMLElement {
  connectedCallback() {
    const id = this.getAttribute('target');
    const effect = this.getAttribute('effect')

    this.innerHTML = `
      <div id="${id}"class="ns-box ns-growl ns-effect-${effect} ns-type-notice ns-show" popover>
        <div class="ns-box-inner">
${Array.from(this.children)[0].outerHTML}
        </div>
        <button popovertarget="${id}"  popovertargetaction="hide" class="ns-close"></button>
      </div> `

  }
}

export const registerToast3 = () => customElements.define('x-toast3', Toast3);
