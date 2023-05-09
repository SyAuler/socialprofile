import { Component, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

    @Input() dataChart: any;
    
    private svg: any;
    private width = window.innerWidth * 0.25;
    private height = window.innerHeight * 0.2;
    private margin = 50;

    constructor() { }

    ngOnInit() {
        this.createSvg();
        this.drawBars(this.dataChart);
    }

    ngOnChange() {
        this.createSvg();
        this.drawBars(this.dataChart);
    }

    private createSvg(): void {
        this.svg = d3.select("div#bar")
            .append("svg")
            .attr("width", this.width + (this.margin * 2))
            .attr("height", this.height + (this.margin * 2))
            .append("g")
            .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
    }

    private drawBars(data: any[]): void {
        // Create the X-axis band scale
        const x = d3.scaleBand()
            .range([0, this.width])
            .domain(data.map(d => d.name))
            .padding(0.2);

        // Draw the X-axis on the DOM
        this.svg.append("g")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end")
            .attr('font-size', '1em')
            .style('font-family', "'Roboto', sans-serif");

        // Create the Y-axis band scale
        const y = d3.scaleLinear()
            .domain([0, 100])
            .range([this.height, 0]);

        // Draw the Y-axis on the DOM
        this.svg.append("g")
            .call(d3.axisLeft(y));

        // Create and fill the bars
        this.svg.selectAll("bars")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d: any) => x(d.name))
            .attr("y", (d: any) => y(d.Stars))
            .attr("width", x.bandwidth())
            .attr("height", (d: any) => this.height - y(d.Stars))
            .attr("fill", "#997DF0") //ccaaff 997DF0
    }

}
