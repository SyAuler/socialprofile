import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-calendar-weeks',
    templateUrl: './calendar-weeks.component.html',
    styleUrls: ['./calendar-weeks.component.scss']
})
export class CalendarWeeksComponent implements OnInit {


    abas!: any[];
    semanaAtual: Array<any> = [];
    currentMonth = new Date();
    currentWeek!: string;
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

    constructor(
        @Inject(LOCALE_ID) private locale: string,
        private sanitizer: DomSanitizer,
    ) { }

    ngOnInit(): void {
        this.abas = this.getSemanaAtual();
        this.currentWeek = this.calcularIntervaloSemana();
        this.diaAtual();
    }

    sanitizeHtml(html: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(html);
      }
      
    calcularIntervaloSemana(): string {
        if (this.abas.length > 0) {
            const primeiraData = formatDate(this.abas[0].data, 'dd/MM', this.locale);
            const ultimaData = formatDate(this.abas[this.abas.length - 1].data, 'dd/MM', this.locale);
            return `${primeiraData} até ${ultimaData}`;
        }
        return '';
    }

    getSemanaAtual(): any[] {
        const hoje = new Date();
        const diaSemanaAtual = hoje.getDay();

        for (let i = 0; i < 7; i++) {
            const data = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - diaSemanaAtual + i);
            const tarefas: never[] = []; // Aqui você pode buscar as tarefas para cada dia da semana

            this.semanaAtual.push({ data: data, tarefas: tarefas });
        }
        this.semanaAtual.map(item => { this.currentWeek = `${item.data} até ${item.data[6]}` })
        return this.semanaAtual;
    }


    diaAtual() {

        const dataAtual = new Date();
        const diaAtual = dataAtual.getDate();

        const abaAtual = this.abas.find(aba => aba.data.getDate() === diaAtual);

        if (abaAtual) {
            this.selecionarAba(abaAtual);
        }
    }

    selecionarAba(aba: any) {
        this.abas.forEach(a => {
            a.ativa = false;
            a.selecionada = false;
            this.activeTab = false;
        });
        aba.ativa = true;
        aba.selecionada = true;
        this.activeTab = true;
    }

}
