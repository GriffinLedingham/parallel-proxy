import { html } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import { ParallelCard } from "../parallel/parallelCard";
import { ParallelCardFunctions } from "../data/parallelFunctions";
import { cardListTemplate } from "../card-templates";

export function cardList(parallelFilter, typeFilter, nameFilter, addCard) {
  return html`
    <div class="card_list" style="width:100%;text-align:left;">
      ${ParallelCardFunctions.filter(
        (card) =>
          (card.parallel === parallelFilter || parallelFilter === "all") &&
          (card.card_type === typeFilter || typeFilter === "all") &&
          (card.title.toLowerCase().includes(nameFilter.toLowerCase()) || nameFilter === "")
      ).map((card) =>
        cardListTemplate(addCard, {
          name: card.title,
          mana_cost: card.cost.toString(),
          type_line: card.card_type,
          attack: card.attack?.toString(),
          health: card.health?.toString(),
          active_text: card.function_text,
          passive_text: card?.passive_ability,
          parallel: card.parallel,
        })
      )}
    </div>
  `;
}
