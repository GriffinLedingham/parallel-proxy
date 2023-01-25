import { html } from 'lit-element';
import { inner } from './inner';
import { ParallelCard } from '../parallel/parallelCard';

export function layoutNormal(card: ParallelCard) {
    return html`
        <div class="card_frame">
            <div class="card_inner">
                    ${inner(card)}
            </div>
        </div>
    `;
}
