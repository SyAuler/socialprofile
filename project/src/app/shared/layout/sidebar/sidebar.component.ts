import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ViewChild,
} from '@angular/core';
import { MatTooltip, TooltipPosition } from '@angular/material/tooltip';

interface MenuItem {
	name?: string;
	path: string;
	icon?: string;
	svg_icon?: string;
	colored?: string;
	dropdown?: string;
	items?: MenuItem[];
}

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
	@ViewChild('sidebarTooltip') sidebarTooltip!: MatTooltip;

	@Input() teste: any;

	@Input() links: MenuItem[] = [
		{
			name: `:Item do menu@@menuItemDashboard:Dashboards`,
			path: 'dashboard',
			icon: 'dashboard',
		},
		{
			name: `:Item do menu@@menuItemCollectPlan:Plano de Coleta`,
			path: '/collection/plan',
			icon: 'assignment_returned',
		},
		{
			name: `:Item do menu@@menuItemCalendar:Cronograma`,
			path: '/calendar',
			icon: 'calendar_today',
		},
        {
			dropdown: `:Item do menu@@menuItemReport:Relatório`,
			icon: 'assignment',
			path: '/report',
			items: [
				{
					name: `:Item do submenu@@submenuDefaultReport:Padrão`,
					path: '/report',
				},
				{
					name: `:Item do submenu@@submenuCustomReport:Personalizado`,
					path: '/custom-report',
				},
				
			],
		},
	];
	@Input() theme!: string;
	@Input() alignment!: string;
	@Input() collapsePersist: boolean = true;
	@Input() tooltip!: string;
	@Input() tooltipClass!: string;
	@Input() tooltipPosition: TooltipPosition = 'right';
	@Input() fixedTooltip!: boolean;
	@Input() expandable: boolean = true;
	@Input()
	set isExpanded(value: boolean) {
		this._isExpanded = value;
		this.collapseExpand();
	}
	get isExpanded(): boolean {
		return this._isExpanded || !this.expandable;
	}

	@Output() toggled = new EventEmitter<boolean>();

	public _isExpanded: boolean = true;
	public showSubmenu: boolean = false;

	public collapseIcon: string = 'keyboard_arrow_left';

	constructor(
		private router: Router
	) {	}

	ngOnInit() {
		this.checkCollapsed();
	}

	navigate(link: string) {
		this.router.navigate([link]);
	}

	toggleCollapse(): void {
		this.isExpanded = !this.isExpanded;
		this.collapseExpand();
	}

	collapseExpand(): void {
		if (!this.expandable) {
			return;
		}
		if (this.isExpanded) {
			this.collapseIcon = 'keyboard_arrow_left';
			if (this.collapsePersist) {
				localStorage.setItem(
					'sideBarIsExpanded',
					JSON.stringify(this.isExpanded)
				);
			}
		} else {
			this.collapseIcon = 'keyboard_arrow_right';
			if (this.collapsePersist) {
				localStorage.setItem(
					'sideBarIsExpanded',
					JSON.stringify(this.isExpanded)
				);
			}
		}

		this.toggled.next(this.isExpanded);
	}

	checkCollapsed(): void {
		if (this.collapsePersist) {
			if (localStorage.getItem('sideBarIsExpanded')) {
				this.isExpanded =
					localStorage.getItem('sideBarIsExpanded') === 'true';
			}
		}
		this.collapseIcon = this.isExpanded
			? 'keyboard_arrow_left'
			: 'keyboard_arrow_right';
	}
}
