import { Component, ElementRef, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';


@Component({
    selector: 'app-donut-chart',
    templateUrl: './donut-chart.component.html',
    styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

    @Input() dataChart: any;

    private container: any;
    private svg: any;
    private width = window.innerWidth * 0.4;
    private height = window.innerHeight * 0.3;

    constructor(
        private elRef: ElementRef,
    ) { }

    ngOnInit() {
        this.container = d3.select(this.elRef.nativeElement.querySelector('.chart-container'));
        this.createSvg();
        this.drawChart();
        this.addResizeListener();
    }

    private createSvg(): void {
        this.svg = this.container.append('svg')
            .attr('width', this.width)
            .attr('height', this.height)

        this.svg = d3.select('svg').append("g")
            .attr("transform", "translate(" + [this.width / 2, this.height / 1.4] + ")");
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
        const raio = Math.min(this.width, this.height) / 2;

        const variableArc = d3.arc()
            .innerRadius(raio - 50)
            .outerRadius(raio)
            .startAngle(-Math.PI / 2)
            .endAngle(-Math.PI / 2 + Math.PI * this.dataChart / 100);

        const fixedArc = d3.arc()
            .innerRadius(raio - 50)
            .outerRadius(raio)
            .startAngle(-Math.PI / 2)
            .endAngle(Math.PI / 2);

        this.svg.append('path')
            .attr('d', fixedArc)
            .attr('fill', '#e6e6e6');

        this.svg.append('path')
            .attr('d', variableArc)
            .attr('fill', '#997DF0');

        this.svg.append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '-0.5em')
            .attr('font-size', '3em')
            .style('font-family', "'Rajdhani', sans-serif")
            .text(`${this.dataChart}%`);
    }

}
