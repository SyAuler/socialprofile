import {
    ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef,
    ViewChild, ViewEncapsulation
} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventColor } from 'calendar-utils';
import * as moment from 'moment';



import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours,
    startOfWeek,
    endOfWeek,
    startOfMonth,
} from 'date-fns';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent,
    CalendarMonthViewComponent,
    CalendarView,
} from 'angular-calendar';

const colors: Record<string, EventColor> = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA',
    },
};

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {

    @ViewChild('semana', { static: false }) semanaRef!: ElementRef;

    dataAtual: Date = new Date();

    @Input() view: CalendarView = CalendarView.Month;

    @Input() viewDate: Date = new Date();

    momentViewDate = moment();
    /* get viewDate(): Date {
        return this.momentViewDate.toDate();
    } */

    @Input() locale: string = 'en';

    @Output() viewChange = new EventEmitter<CalendarView>();

    @Output() viewDateChange = new EventEmitter<Date>();

    CalendarView = CalendarView;
    //openDayEventsTemplate!: TemplateRef<any>;
    eventTitleTemplate!: TemplateRef<any>;

    public colors = '#997DF0';

    anoSelecionado: number = this.dataAtual.getFullYear(); // Ano selecionado
    anos: any = [];

    meses = [
        { nome: 'Janeiro', valor: 0 },
        { nome: 'Fevereiro', valor: 1 },
        { nome: 'Março', valor: 2 },
        { nome: 'Abril', valor: 3 },
        { nome: 'Maio', valor: 4 },
        { nome: 'Junho', valor: 5 },
        { nome: 'Julho', valor: 6 },
        { nome: 'Agosto', valor: 7 },
        { nome: 'Setembro', valor: 8 },
        { nome: 'Outubro', valor: 9 },
        { nome: 'Novembro', valor: 10 },
        { nome: 'Dezembro', valor: 11 }
    ];

    mostrarBotaoHoje = false;

    modalData: {
        action: string;
        event: CalendarEvent;
    } | undefined;

    actions: CalendarEventAction[] = [
        {
            label: '<i class="fas fa-fw fa-pencil-alt"></i>',
            a11yLabel: 'Edit',
            onClick: ({ event }: { event: CalendarEvent }): void => {
                this.handleEvent('Edited', event);
            },
        },
        {
            label: '<i class="fas fa-fw fa-trash-alt"></i>',
            a11yLabel: 'Delete',
            onClick: ({ event }: { event: CalendarEvent }): void => {
                this.events = this.events.filter((iEvent) => iEvent !== event);
                this.handleEvent('Deleted', event);
            },
        },
    ];

    refresh = new Subject<void>();

    events: CalendarEvent[] = [
        {
            start: subDays(startOfDay(new Date()), 1),
            end: addDays(new Date(), 1),
            title: 'A 3 day event',
            color: { ...colors['red'] },
            actions: this.actions,
            allDay: true,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: true,
        },
        {
            start: startOfDay(new Date()),
            title: 'An event with no end date',
            color: { ...colors['yellow'] },
            actions: this.actions,
        },
        {
            start: subDays(endOfMonth(new Date()), 3),
            end: addDays(endOfMonth(new Date()), 3),
            title: 'A long event that spans 2 months',
            color: { ...colors['blue'] },
            allDay: true,
        },
        {
            start: addHours(startOfDay(new Date()), 2),
            end: addHours(new Date(), 2),
            title: 'A draggable and resizable event',
            color: { ...colors['yellow'] },
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: true,
        },
    ];

    activeDayIsOpen: boolean = true;
    isClicked = false;
    clickedDate = false;

    diasCalendario: Date[] = [];
    semanasCalendario: any[] = [];

    mostrarCollapse: any = [];
    isCollapsed = true;

    diasCalendarioCompleto: any = [];
    selectedDate!: Date;
    selectedDia: { semana: number, dia: number } | undefined;
    selectedItem!: { semana: number | null, dia: number | null };


    constructor() { }

    ngOnInit(): void {
        this.getSemanasCalendario();
        this.ano();
    }

    abrirCollapse(semana: number, dia: number) {
        const selectedItem = { semana, dia: dia };
        if (this.selectedItem && this.selectedItem.semana === semana
            && this.mostrarCollapse[semana] && this.selectedItem.dia === dia) { //this.mostrarCollapse[semana]
            // O collapse da semana selecionada já está aberto, mantenha-o aberto e atualize selectedItem
            this.selectedItem = selectedItem;
            this.mostrarCollapse[semana] = !this.mostrarCollapse[semana];

        } else {
            // Feche o collapse atual e abra o novo collapse
            this.mostrarCollapse.fill(false);
            this.mostrarCollapse[semana] = true;
            this.selectedItem = selectedItem;

        }
    }

    fecharCollapse(semana: any, dia?: any) {
        if (dia !== undefined) {
            const chave = `${semana}-${dia}`;
            this.mostrarCollapse[chave] = false;
        } else {
            for (const key in this.mostrarCollapse) {
                this.mostrarCollapse[key] = false;
            }
        }
    }

    selecionarDia(semana: number, dia: number) {
        const dataSelecionada = this.semanasCalendario[semana][dia];
        if (this.dataAtual.getMonth() === dataSelecionada.getMonth()) {
            this.selectedItem = { semana, dia };
            this.selectedDate = dataSelecionada
        }
    }

    getCollapseId(index: number): string {
        return `collapse-${Math.floor(index / 7)}`;
    }

    getSemanasCalendario(): Date[][] {
        const primeiroDiaMes = new Date(this.dataAtual.getFullYear(), this.dataAtual.getMonth(), 1);
        const ultimoDiaMes = new Date(this.dataAtual.getFullYear(), this.dataAtual.getMonth() + 1, 0);

        // Obtém o número de dias do mês e o dia da semana do primeiro e último dia do mês
        const numDiasMes = ultimoDiaMes.getDate();
        const diaSemanaPrimeiroDiaMes = primeiroDiaMes.getDay();
        const diaSemanaUltimoDiaMes = ultimoDiaMes.getDay();

        // Adiciona dias no início do calendário para preencher a primeira semana
        const diasInicioCalendario = [];
        for (let i = 0; i < diaSemanaPrimeiroDiaMes; i++) {
            const diaAnterior = new Date(this.dataAtual.getFullYear(), this.dataAtual.getMonth(), 0 - i);
            diasInicioCalendario.unshift(diaAnterior);
        }

        // Adiciona os dias do mês no calendário
        const diasCalendario = [];
        for (let i = 1; i <= numDiasMes; i++) {
            const dia = new Date(this.dataAtual.getFullYear(), this.dataAtual.getMonth(), i);
            diasCalendario.push(dia);
        }

        // Adiciona dias no final do calendário para preencher a última semana
        const diasFimCalendario = [];
        for (let i = 1; i < 7 - diaSemanaUltimoDiaMes; i++) {
            const diaPosterior = new Date(this.dataAtual.getFullYear(), this.dataAtual.getMonth() + 1, i);
            diasFimCalendario.push(diaPosterior);
        }

        // Combina os dias do calendário e retorna um array de arrays com 7 dias em cada
        this.diasCalendarioCompleto = [...diasInicioCalendario, ...diasCalendario, ...diasFimCalendario];

        this.semanasCalendario = [];
        for (let i = 0; i < this.diasCalendarioCompleto.length; i += 7) {
            this.semanasCalendario.push(this.diasCalendarioCompleto.slice(i, i + 7));
        }
        return this.semanasCalendario;
    }

    alterarMes(offsetMes: number) {
        const mesSelecionado = this.dataAtual.getMonth();
        const anoSelecionado = this.dataAtual.getFullYear();

        if (
            this.dataAtual.getMonth() !== offsetMes
        ) {
            this.mostrarBotaoHoje = true; // Define como true se o mês ou o ano foi alterado
        } else {
            this.mostrarBotaoHoje = false; // Define como false se apenas o dia foi alterado
        }

        this.dataAtual = new Date(anoSelecionado, mesSelecionado + offsetMes, 1);
        this.getSemanasCalendario();
    }

    voltarParaHoje() {
        this.dataAtual = new Date(); // Define a data atual como a nova data
        this.getSemanasCalendario(); // Atualiza o grid do calendário
        this.mostrarBotaoHoje = false; // Oculta o botão "Hoje"
    }


    ano() {
        const anoAtual = new Date().getFullYear();
        const anosAnteriores = 20;
        const anosPosteriores = 10;

        this.anos = Array.from({ length: anosAnteriores + anosPosteriores + 1 }, (_, index) => anoAtual - anosAnteriores + index);

    }

    atualizarAno(ano: any) {
        const anoSelecionado = ano.target.value;

        if (anoSelecionado !== null && this.anoSelecionado !== null) {
            if (
                this.dataAtual.getMonth() !== anoSelecionado
            ) {
                this.mostrarBotaoHoje = true; // Define como true se o mês ou o ano foi alterado
            } else {
                this.mostrarBotaoHoje = false; // Define como false se apenas o dia foi alterado
            }

            const novaData = new Date(this.dataAtual.getTime());
            const anoAtual = novaData.getFullYear();

            novaData.setFullYear(this.anoSelecionado);

            if (anoSelecionado != anoAtual) {
                novaData.setFullYear(anoSelecionado);
            }

            this.dataAtual = novaData;
            this.getSemanasCalendario();
        }
    }

    atualizarMes(offsetMes: any) {
        const mesSelecionado = offsetMes.target.value;
        const anoSelecionado = this.dataAtual.getFullYear();

        if (
            this.dataAtual.getMonth() !== offsetMes.target.value
        ) {
            this.mostrarBotaoHoje = true; // Define como true se o mês ou o ano foi alterado
        } else {
            this.mostrarBotaoHoje = false; // Define como false se apenas o dia foi alterado
        }
        this.dataAtual.setFullYear(anoSelecionado, mesSelecionado, 1);
        this.dataAtual = new Date(this.dataAtual.getTime());
        this.getSemanasCalendario();


    }


    onDayClicked(day?: any) {
        this.isClicked = true;
        this.clickedDate = true;
        const title = prompt('Digite o título da nova tarefa:');
        if (title) {
            const newEvent = {
                start: day.date,
                title: title
            };
            this.events.push(newEvent);
        }
    }

    createTask() {
        // Execute a ação para criar nova tarefa aqui
    }
    doSomething() {
        // Execute ação personalizada aqui
    }

    /* dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        console.log('date', date)
        if (isSameMonth(date, this.viewDate)) {
            this.viewDate = date;
            const excludeDays = this.getWeekdays(date)
                .filter((weekday) => !weekday.events.length)
                .map((weekday) => weekday.date);
            if (
                isSameDay(this.viewDate, date) &&
                (this.activeDayIsOpen === true || !this.excludeDays.includes(startOfMonth(this.viewDate).getDay()))
            ) {
                this.activeDayIsOpen = false;

                this.excludeDays = excludeDays;
            } else {
                this.activeDayIsOpen = true;

                this.excludeDays = excludeDays;
            }
            this.viewDate = date;
        }
    } */

    private getWeekdays(date: Date): { date: Date, events: CalendarEvent[] }[] {

        const days = [];

        for (let i = 0; i < 7; i++) {
            const day = addDays(startOfWeek(startOfMonth(date), { weekStartsOn: 0 }), i);
            const events = this.events.filter((event) => isSameDay(event.start, day));
            days.push({ date: day, events: events });
        }

        return days;
    }
    diaClicado: any


    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        console.log('activeDayIsOpen', this.activeDayIsOpen)
        const clickedDate = moment(date, moment.ISO_8601, true);
        //event.stopPropagation();

        if (isSameMonth(date, this.viewDate)) {
            console.log('entrou?', this.viewDate)
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true)
            ) {
                console.log('if?', this.activeDayIsOpen)
                this.activeDayIsOpen = false;
            } else {
                console.log('else?', this.activeDayIsOpen)
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }

        /* if (moment(date).isSame(this.momentViewDate, 'month')) {
            if (
                (moment(date).isSame(this.momentViewDate, 'day') && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
                this.momentViewDate = moment(date);
            }
        } */
    }

    eventTimesChanged({
        event,
        newStart,
        newEnd,
    }: CalendarEventTimesChangedEvent): void {
        this.events = this.events.map((iEvent) => {
            if (iEvent === event) {
                return {
                    ...event,
                    start: newStart,
                    end: newEnd,
                };
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    }

    handleEvent(action: string, event: CalendarEvent): void {
        this.modalData = { event, action };
        // this.modal.open(this.modalContent, { size: 'lg' });
    }

    addEvent(event: any): void {
        console.log('event', event)
        this.events = [
            ...this.events,
            {
                title: 'New event',
                start: startOfDay(new Date()),
                end: endOfDay(new Date()),
                color: colors['red'],
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
            },
        ];
    }

    deleteEvent(eventToDelete: CalendarEvent) {
        this.events = this.events.filter((event) => event !== eventToDelete);
    }


    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }


}
