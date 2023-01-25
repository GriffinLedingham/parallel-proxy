import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { ParallelCard } from '../parallel/parallelCard';

export function innerBase(face: ParallelCard) {
    return html`
        <div class="name_mana_line">
            <p class="name">${face.name}</p>
            <p class="manacost">${unsafeHTML(face.mana_cost.replace('}{', '}<wbr>{'))}</p>
        </div>
        <p class="typeline" style="text-transform:capitalize;">${face.parallel}</p>
        <br>
        <br>
        <p class="typeline" style="text-transform:capitalize;">${face.type_line}</p>
        <div class="oracle_div">${oracleText(face.active_text)}</div>
        <div class="oracle_div">${oracleText(face.passive_text)}</div>`;
}

function oracleText(oracleText: string) {
    if(!oracleText) return html``;
    return oracleText.split('\n').map(line => html`
        <p class="oracle_p">
            ${unsafeHTML(line.replace('(', '<i>(').replace(')', ')<i>'))}
        </p>
    `);
}
