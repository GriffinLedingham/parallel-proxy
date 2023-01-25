import { customElement, html, LitElement, property, TemplateResult } from 'lit-element';
import { cardTemplate } from '../card-templates';
import { ParallelCardFunctions } from '../data/parallelFunctions';
import { ParallelCard } from '../parallel/parallelCard';
import { resultsCardStyles } from './results-card-styles';

@customElement('mtgp-results-card')
class ResultsCardElement extends LitElement {
    @property({ type: String })
    name: string;

    @property({ type: Number })
    count: number;

    @property({ type: Boolean })
    loading = true;

    @property({ type: Object })
    card: ParallelCard;

    static get styles() {
        return resultsCardStyles;
    }

    render() {
        const cards: TemplateResult[] = [];

        for (let i = 0; i < this.count; i++) {
            let template: TemplateResult;

            if (this.loading) {
                template = html`
                <div class="card_frame dont_print">
                    <p class="loading">Loading...</p>
                </div>`;
            } else if (!this.card ) {
                template = html`
                <div class="card_frame dont_print">
                    <p class="card_not_found">Card "${this.name}" not found.<br><br><i>This will not be printed.</i></p>
                </div>
                `;
            } else {
                try {
                    template = cardTemplate(this.card);
                } catch {
                    template = html`
                    <div class="card_frame dont_print">
                        <p class="error">
                            An error occurred while generating the proxy for the card "${this.name}".<br><br>
                            This may be because the card type is not supported.<br><br>
                            If you think this should work, please add an issue on the
                            <a href="https://github.com/fklingler/mtgproxy">Github Repository</a> of this website, or
                            contact <a href="https://twitter.com/fklingler">@fklingler</a>.<br><br>
                            <i>This will not be printed.</i>
                        </p>
                    </div>`;
                }
            }

            cards.push(template);
        }

        return html`${cards}`;
    }

    updated(changedProperties: Map<PropertyKey, unknown>): void {
        super.updated(changedProperties);

        if (changedProperties.has('name')) {
            this.fetchCard();
        }
    }

    async fetchCard() {
        this.loading = true;

        // const response = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(this.name)}`);
        const response = ParallelCardFunctions.find((card) => card.title.toLowerCase() === this.name.toLowerCase());
        this.card = {
            name: response.title,
            mana_cost: response.cost.toString(),
            type_line: response.card_type,
            subtype: response.subtype?.toString(),
            attack: response.attack?.toString(),
            health: response.health?.toString(),
            active_text: response.function_text,
            passive_text: response?.passive_ability,
            parallel: response.parallel

        }



        this.loading = false;
    }
}
