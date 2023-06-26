import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Skills");
    }

    async getHtml() {
        return `
        <div class="view">
            <h2>Aenean commodo ligula eget dolor.</h2>
            <ul>
                <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                <li>Donec quam felis, ultricies nec, pellentesque eu, pretium quis.</li>
                <li>Nulla consequat massa quis enim.</li>
                <li>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</li>
                <li>Integer tincidunt. Cras dapibus.</li>
            </ul>
    </div>
        `;
    }
}