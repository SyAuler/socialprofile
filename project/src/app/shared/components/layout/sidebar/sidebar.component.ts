import { Router } from '@angular/router';
import { Component,	OnInit,	Input } from '@angular/core';

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
    isExpanded = false;
    showSubmenu: boolean = false;
    
    constructor() {	}

    ngOnInit() {
    }

    toggleCollapse(): boolean {
        this.collapseIcon = this.isExpanded ? 'chevron_left' : 'chevron_right';
        return this.isExpanded = !this.isExpanded;
    }

}
