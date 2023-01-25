import { html } from 'lit-html';
import { ParallelCard } from '../parallel/parallelCard';
import { layoutNormal } from './layout-normal';

export function cardTemplate(card: ParallelCard) {
    return layoutNormal(card);
}
export function cardListTemplate(addCard: Function, card: ParallelCard) {
    // onclick add the card to #cards
    return html`
    <div @click="${() => addCard(card.name)}">
    ${layoutNormal(card)}
    </div>
    `;
}
