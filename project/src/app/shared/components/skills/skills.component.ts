import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngular, faCss3Alt, faFigma, faGitAlt, faGithub, faHtml5, faJs, faSass } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

    faGithub = faGithub;
    faHtml5 = faHtml5;
    faCss3Alt = faCss3Alt;
    faJs = faJs;
    faSass = faSass;

    constructor(library: FaIconLibrary) {
        library.addIcons(
            faAngular,
            faGitAlt,
            faGithub,
            faFigma,
        );
    }
}
