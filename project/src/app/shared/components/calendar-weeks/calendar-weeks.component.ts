import { DatePipe } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as moment from 'moment';

interface Day {
    data: Date;
    active: boolean;
    selected: boolean;
  }

@Component({
    selector: 'app-calendar-weeks',
    templateUrl: './calendar-weeks.component.html',
    styleUrls: ['./calendar-weeks.component.scss'],
    providers: [DatePipe],
})
export class CalendarWeeksComponent implements OnInit {

    daysInSelectedWeek: Day[] = [];
    currentMonth = new Date();
    currentWeek: number = 0;
    activeTab: boolean = false;

    dias = [
        {
            periodo: 'Manhã',
            svg: [
                {
                    color: '#4099ff',
                    path: `M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z`,
                },
                {
                    color: '#ebb400',
                    path: 'M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z'
                },
            ],
            tarefas: 'Tarefas da manhã',
        },
        {
            periodo: 'Tarde',
            svg: [
                {
                    color: '#ebb400',
                    path: 'M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z',
                }
            ],
            tarefas: 'Tarefas da tarde',
        },
        {
            periodo: 'Noite',
            svg: [
                {
                    color: '#ebb400',
                    path: 'M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z',
                }
            ],
            tarefas: 'Tarefas da noite',
        },
    ];

    status = [
        {
            id: 0,
            slug: 'open',
            name: 'Aberto',
        },
        {
            id: 1,
            slug: 'on-going',
            name: 'Em Andamento',
        },
        {
            id: 2,
            slug: 'done',
            name: 'Concluído',
        },
        {
            id: 3,
            slug: 'canceled',
            name: 'Cancelado',
        },
        {
            id: 4,
            slug: 'postpone',
            name: 'Adiado',
        },
    ]

    tasks: any = [
        {
            id: '1',
            name: 'Tarefa 1 tarefa teste 1',
            status: this.status[0].name,
            slug: this.status[0].slug,
        },
        {
            id: '2',
            name: 'Tarefa 2 teste 2 tarefa teste lalalala',
            status: this.status[1].name,
            slug: this.status[1].slug,
        },
        {
            id: '3',
            name: 'Tarefa 3 abs teste lalal allaa',
            status: this.status[2].name,
            slug: this.status[2].slug,
        },
        {
            id: '4',
            name: 'Tarefa 4',
            status: this.status[3].name,
            slug: this.status[3].slug,
        },
        {
            id: '5',
            name: 'Tarefa 5',
            status: this.status[4].name,
            slug: this.status[4].slug,
        },
    ]


    constructor(
        @Inject(LOCALE_ID) private locale: string,
        private sanitizer: DomSanitizer,
        private datePipe: DatePipe,
    ) { }
    
    ngOnInit(): void {
        this.currentWeek = this.getWeekNumber(new Date());
        this.daysInSelectedWeek = this.getDaysInWeek(this.currentWeek);
        this.daysInSelectedWeek[0].selected = true;
        this.getCurrentDay();
    }

    sanitizeHtml(html: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }      

    getFormattedDateRange(): string {
        const startDate = this.datePipe.transform(this.daysInSelectedWeek[0].data, 'dd/MM', this.locale);
        const endDate = this.datePipe.transform(this.daysInSelectedWeek[6].data, 'dd/MM', this.locale);
        return `${startDate} até ${endDate}`;
    }

    previousWeek() {
        this.currentWeek--;
        this.daysInSelectedWeek = this.getDaysInWeek(this.currentWeek);
        this.getCurrentDay();
    }
      
    nextWeek() {
        this.currentWeek++;
        this.daysInSelectedWeek = this.getDaysInWeek(this.currentWeek);
        this.getCurrentDay();
    }

    private getDaysInWeek(week: number): Day[] {
        const firstDayOfYear = new Date(new Date().getFullYear(), 0, 1);
        const daysToAdd = (week - 1) * 7;
        const startDate = new Date(firstDayOfYear.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
      
        return this.generateDaysInWeek(startDate);
      }
      
      private generateDaysInWeek(startDate: Date): Day[] {
        const daysInWeek: Day[] = [];
      
        for (let i = 0; i < 7; i++) {
          const currentDate = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
          const day: Day = {
            data: currentDate,
            active: this.isSameWeek(currentDate, new Date()),
            selected: this.isSameDate(currentDate, new Date())
          };
          daysInWeek.push(day);
        }
      
        return daysInWeek;
      }

    private getWeekNumber(date: Date): number {
        const onejan = new Date(date.getFullYear(), 0, 1);
        const millisecondsInWeek = 604800000;
        return Math.ceil(((date.getTime() - onejan.getTime()) / millisecondsInWeek) + 1);
    }

    private isSameWeek(date1: Date, date2: Date): boolean {
        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = Math.round(Math.abs((date1.getTime() - date2.getTime()) / oneDay));
        return diffDays < 7 && date1.getDay() >= date2.getDay();
      }
        
    private isSameDate(date1: Date, date2: Date): boolean {
        return date1.getFullYear() === date2.getFullYear() &&
                date1.getMonth() === date2.getMonth() &&
                date1.getDate() === date2.getDate();
    }

    private getCurrentDay() {
        const currentDate = moment();
        const currentDay = currentDate.date();
        const currentMonth = currentDate.month();
      
        const currentTab = this.daysInSelectedWeek.find(day => {
          return (
            day.data.getDate() === currentDay &&
            day.data.getMonth() === currentMonth
          );
        });

        if (currentTab) {
          this.selectTab(currentTab);
        } else {
          const firstDayOfWeek = this.daysInSelectedWeek[0];
          if (!firstDayOfWeek.selected) {
            this.selectTab(firstDayOfWeek);
          }
        }
      }
    
    selectTab(tab: any) {
        this.daysInSelectedWeek.forEach(day => {
            day.active = false;
            day.selected = false
            this.activeTab = false
          });
        tab.active = true;
        tab.selected = true;
        this.activeTab = true;
    }

}
