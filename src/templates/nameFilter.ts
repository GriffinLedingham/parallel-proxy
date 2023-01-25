import { html } from "lit-html";

export function nameFilter(updateNameFilter) {
  return html`
    Name:
    <input
      style="border: 1px solid grey;"
      type="text"
      name="name"
      id="name"
      @keyup="${(e) => updateNameFilter(e.target.value)}"
    />
  `;
}
