// this version uses the manual mode
class Toast4 extends HTMLElement {
  connectedCallback() {
    const id = this.getAttribute('target');
    const effect = this.getAttribute('effect')
    const mode = this.getAttribute('mode') || 'auto'

    this.innerHTML = `
      <div id="${id}"class="ns-box ns-growl ns-effect-${effect} ns-type-notice ns-show" popover="${mode}">
        <div class="ns-box-inner">
${Array.from(this.children).map(el => el.outerHTML).join('\n')}
        </div>
        <button popovertarget="${id}"  popovertargetaction="hide" class="ns-close"></button>
      </div> `

  }
}

export const registerToast4 = () => customElements.define('x-toast4', Toast4);
