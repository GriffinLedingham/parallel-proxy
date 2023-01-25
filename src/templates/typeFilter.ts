import { html } from "lit-html";

export function typeFilter(updateTypeFilter) {
  return html`
    Type:
    <select
      style="border: 1px solid grey;"
      name="type"
      id="type"
      @change="${(e) => updateTypeFilter(e.target.value)}"
    >
      <option value="all">All</option>
      <option value="unit">Unit</option>
      <option value="upgrade">Upgrade</option>
      <option value="relic">Relic</option>
      <option value="effect">Effect</option>
    </select>
  `;
}
