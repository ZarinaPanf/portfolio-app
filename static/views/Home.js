import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml() {
        return `
        <div class="wrapper">
            <div class="cols cols0">
                <span class="topline">Hello</span>
                <h1>I'm Zarina.<br></h1>
                <h2>I build things for the web.</h2>
                <div class="btns">
                    <button><a href="./CV.pdf" download>download CV</a></button>
                    <button><a href="mailto:zhiyenbayeva.z@gmail.com">hire me</a></button>
                </div>
            </div>
        </div>
    </div>
        `;
    }
}