import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("About");
    }

    async getHtml() {
        return `
        <div class="view">
            <h2>Sed ut perspiciatis omnis </h2>
                <p>Sed ut perspiciatis unde omnis iste 
                natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. 
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
                aut odit aut fugit, sed quia consequuntur magni dolores eos qui.</p>
    </div>
        `;
    }
}