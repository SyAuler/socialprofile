import { Component, OnInit, Input } from '@angular/core';

interface IMenuItem {
    name?: string;
    path: string;
    icon?: string;
    svg_icon?: string;
    colored?: string;
    dropdown?: string;
    items?: IMenuItem[];
}

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

    @Input() links: IMenuItem[] = []
    @Input() theme!: string;

    collapseIcon: string = 'chevron_left';
    isExpanded: boolean = false;
    showSubmenu: boolean = false;
    opened: boolean = true;

    constructor() { }

    ngOnInit() {
    }

    toggleCollapse(): boolean {
        const sidebar = document.querySelector('.app-sidebar') as HTMLElement;
        if (sidebar) {
            if (this.isExpanded) {
                sidebar.classList.remove('collapsed');
            } else {
                sidebar.classList.add('collapsed');
            }
        }

        this.collapseIcon = this.isExpanded ? 'chevron_left' : 'chevron_right';
        return this.isExpanded = !this.isExpanded;
    }

}
