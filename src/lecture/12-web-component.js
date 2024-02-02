// 웹 컴포넌트 API (웹 표준)
// 슬롯(Slot)

// 컴포넌트
class Stack extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
          <div class="euid-stack">
              <h2>
                  <slot name="headline"></slot>
              </h2>
              <p>
                  <slot name="description"></slot>
              </p>
          </div>
      `;
  }

  // vue : mounted
  // react : DOM committed
  // web standard : connectedCallback

  connectedCallback() {
    console.log('웹 컴포넌트가 생성 -> DOM에 반영된 이후 실행');
  }
}

if ('customElements' in globalThis) {
  customElements.define('euid-stack', Stack);
}
