import { Component, ElementRef, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { pie } from 'd3';

@Component({
    selector: 'app-donut-chart',
    templateUrl: './donut-chart.component.html',
    styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

    data = [
        { label: 'Concluído', value: 70 },
        { label: 'Pendente', value: 30 }
    ];

    @Input() dataChart: any;
    
    private container: any;
    private svg: any;
    private width = window.innerWidth * 0.1;
    private height = window.innerHeight * 0.15;

    constructor(
        private elRef: ElementRef,
    ) { }


    ngOnInit() {
        this.container = d3.select(this.elRef.nativeElement.querySelector('.chart-container'));
        this.createSvg();
    }

    private createSvg(): void {
        this.svg = this.container.append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .append("g")
            .attr("transform", "translate(" + [this.width / 2, this.height / 2] + ")");

        this.addResizeListener();
        this.drawChart();
    }

    private addResizeListener(): void {
        d3.select(window).on('resize', () => {
            const { width, height } = this.container.node().getBoundingClientRect();
            this.width = width;
            this.height = height;
            this.svg.attr('width', this.width).attr('height', this.height);
            this.drawChart();
        });
    }

    private drawChart() {
        const radius = Math.min(this.width, this.height) / 2;
        const donutWidth = 25;
        const color = d3.scaleOrdinal().range(['#cccccc', '#800080']);

        const pie = d3.pie<any>()
            .value((d: any) => d.value)
            .sort(null);

        const arc = d3.arc()
            .innerRadius(radius - donutWidth)
            .outerRadius(radius)
            .startAngle(0)
            .endAngle(2 * Math.PI * this.data[0].value / 100);

        const fixedArc = d3.arc()
            .innerRadius(radius - donutWidth)
            .outerRadius(radius)
            .startAngle(0)
            .endAngle(2 * Math.PI);

            this.svg.append('path')
            .attr('d', fixedArc)
            .attr('fill', '#EAEAEA');

        this.svg.append('path')
            .attr('d', arc)
            .attr('fill', '#997DF0');

        this.svg.selectAll('path')
            .data(pie(this.data))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', (d: any) => color(d.data.label))
            .attr('stroke', 'white')
            .style('stroke-width', '2px');

        this.svg.append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '.35em')
            .text(`${this.data[0].value}%`)
            .attr('font-size', '2.5em')
            .style('font-family', "'Rajdhani', sans-serif")
            .style('fill', '#800080');
    }
}
