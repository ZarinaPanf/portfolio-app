import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Projects");
    }

    async getHtml() {
        return `
        <div class="view-projects">
                <img class="project-image" src="/static/img/1.jpg" alt="Project 1" />
                <span>Project 1 <br> Description </span>
                <img class="project-image" src="/static/img/2.jpg" alt="Project 2" />
                <span>Project 2 <br> Description </span>
                <img class="project-image" src="/static/img/3.jpg" alt="Project 3" />
                <span>Project 3 <br> Description </span>
                <img class="project-image" src="/static/img/4.jpg" alt="Project 4" />
                <span>Project 4 <br> Description </span>
                <img class="project-image" src="/static/img/5.jpg" alt="Project 5" />
                <span>Project 5 <br> Description </span>
                <img class="project-image" src="/static/img/6.jpg" alt="Project 6" />
                <span>Project 6 <br> Description </span>
        </div>
        `;
    }
}