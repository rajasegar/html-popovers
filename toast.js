class Toast extends HTMLElement {
  connectedCallback() {
    const id = this.getAttribute('target');
    const effect = this.getAttribute('effect')

    const el = document.createElement('div');
    el.id = id;
    el.popover = "auto";
    el.className = `ns-box ns-growl ns-effect-${effect} ns-type-notice ns-show`
    
    console.log(this.children)

    const $inner = document.createElement('div')
    $inner.className = "ns-box-inner";
    $inner.appendChild(...this.children)

    const $close = document.createElement('button');
    $close.setAttribute('popovertarget', id);
    $close.setAttribute('popovertargetaction', 'hide');
    $close.className = "ns-close";

    el.appendChild($inner);
    el.appendChild($close);

    this.replaceWith(el)

  }
}

export const registerToast = () => customElements.define('x-toast', Toast);
