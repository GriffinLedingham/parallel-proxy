import { html } from "lit-html";

export function parallelFilter(updateParallelFilter) {
  return html`
    Parallel: <select
      name="parallel"
      id="parallel"
      @change="${(e) => updateParallelFilter(e.target.value)}"
    >
      <option value="all">All</option>
      <option value="marcolian">Marcolian</option>
      <option value="kathari">Kathari</option>
      <option value="earthen">Earthen</option>
      <option value="shroud">Shroud</option>
      <option value="augencore">Augencore</option>
    </select>
  `;
}
