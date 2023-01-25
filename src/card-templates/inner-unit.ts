import { innerBase } from './inner-base';
import { html } from 'lit-element';
import { ParallelCard } from '../parallel/parallelCard';

export function innerUnit(face: ParallelCard) {
    return html`
        ${innerBase(face)}
        <p class="power_toughness">${face.attack}/${face.health}</p>
    `;
}
