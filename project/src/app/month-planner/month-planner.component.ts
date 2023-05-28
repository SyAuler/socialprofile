import { Component } from '@angular/core';

@Component({
    selector: 'app-month-planner',
    templateUrl: './month-planner.component.html',
    styleUrls: ['./month-planner.component.scss']
})
export class MonthPlannerComponent {

    date: Date = new Date()

    data: any = [
        {
            id: 1,
            name: 'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Delegadis gente finis, bibendum egestas augue arcu ut est.',
        },
        {
            id: 2,
            name: 'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Delegadis gente finis, bibendum egestas augue arcu ut est.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Suco de cevadiss deixa as pessoas mais interessantis.',
        },
        {
            id: 3,
            name: 'Detraxit consequat et quo num tendi nada.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.',
        },
        {
            id: 4,
            name: 'Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!',
        },
        {
            id: 5,
            name: 'Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!',
        },
    ]

    teste: any = [
        {
            id: 1,
            name: 'Mussum Ipsum, cacilds vidis litro abertis.',
        },
        {
            id: 2,
            name: 'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Delegadis gente finis, ',
        },
        {
            id: 3,
            name: 'Detraxit consequat et quo num tendi nada.Copo furadis é disculpa de bebadis',
        },
        {
            id: 4,
            name: 'item 4',
        },
        {
            id: 5,
            name: 'Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!',
        },
    ]
    
    teste1: any = [
        {
            id: 1,
            name: 'Mussum Ipsum, cacilds vidis litro abertis.',
        },        
        {
            id: 2,
            name: 'Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!',
        },
        {
            id: 2,
            name: 'Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!',
        },
    ]

}
