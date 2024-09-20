class Toast extends HTMLElement {
  connectedCallback() {
    const id = this.getAttribute('id');
    const type = this.getAttribute('type')

    this.popover = "auto";




    this.innerHTML = `

<div class="ns-box ns-growl ns-effect-${type} ns-type-notice ns-show">
  <div class="ns-box-inner">
${this.children}
<slot></slot>
  </div><button popovertarget="${id}" popovertargetaction="hide" class="ns-close"></button>
</div>
`
    this.replaceChildren(template)
  }
}

export const registerToast = () => customElements.define('x-toast', Toast);
