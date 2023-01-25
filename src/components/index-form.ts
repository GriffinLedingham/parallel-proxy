import { css, customElement, html, LitElement } from 'lit-element';
import { cardList } from '../templates/card-list';
import {  typeFilter } from '../templates/typeFilter';
import { parallelFilter } from '../templates/parallelFilter';
import { resultsCardStyles } from './results-card-styles';

@customElement('mtgp-index-form')
class IndexFormElement extends LitElement {
    static get properties() {
        return {
            deckSize: {
                type: Number
            },
            textareaContent: {
                type: String
            },
            parallel: {
                type: String
            },
            type: {
                type: String
            },
        }
      }
    textareaContent = `Shoshanna's Standard
Tane, Shield of Meev'Tsar
Shaymak Stone-Eyes`;
    parallel = 'all';
    type = 'all';
    deckSize = 3;
    static get styles() {
        return css`
        * {
            font-family: 'Open Sans', sans-serif;
            margin: 0 0 1em;
            padding: 0;
            border: 0;
        }

        textarea {
            font-family: monospace;
            text-align: left;
            border: 1px solid black;
            display: block;
            font-size: 1em;
        }

        .cards {
            width: 100%;
            height: 20em;
        }

        button[type="submit"] {
            padding: 0.5em;
            font-size: 2em;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        ${resultsCardStyles}
        `;
    }

    addCard(name) {
        this.textareaContent += `
${name}`;
this.deckSize = this.textareaContent.split("\n").length;
    }

    updateParallelFilter(filter) {
        this.parallel = filter;
    }
    updateTypeFilter(filter) {
        this.type = filter;
    }

    changeDeckSize(e) {
        this.textareaContent = e.target.value.replace(/\n\n/g, "\n");
        this.deckSize = e.target.value.split("\n").length;
    }

    render() {
        return html`
        Cards: ${this.deckSize}
        <form action="results.html" method="get">
            <textarea name="cards" class="cards" @change=${e => this.changeDeckSize(e)} .value=${this.textareaContent}></textarea>

            <button type="submit">Get the proxies!</button>
        </form>
        ${parallelFilter(this.updateParallelFilter.bind(this))}
        <br>
        ${typeFilter(this.updateTypeFilter.bind(this))}
        <br><br><br>
        ${cardList(this.parallel, this.type, this.addCard.bind(this))}
        `;
    }
}
