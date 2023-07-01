import { Component, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-progress-bar-chart',
    templateUrl: './progress-bar-chart.component.html',
    styleUrls: ['./progress-bar-chart.component.scss']
})
export class ProgressBarChartComponent {

    @ViewChild('progressBar', { static: true }) progressBarRef!: ElementRef<SVGSVGElement>;

    ngAfterViewInit(): void {
        this.initProgressChart();
    }

    initProgressChart() {
        const progressBar = d3.select(this.progressBarRef.nativeElement);
        const height = 24;
        const backgroundColor = '#EAEAEA';
        const highlightColor = '#8A70D6';
        const percentage = 75;

        progressBar.attr('height', height);

        progressBar.append('rect')
            .attr('width', '100%')
            .attr('height', height)
            .attr('rx', 14)
            .attr('fill', backgroundColor);

        progressBar.append('rect')
            .attr('width', 0)
            .attr('height', height)
            .attr('rx', 14)
            .attr('fill', highlightColor)
            .classed('highlight', true);

        progressBar.select('rect.highlight')
            .transition()
            .duration(2000)
            .attr('width', percentage + '%');

        const text = progressBar.append('text')
            .text(percentage + '%')
            .attr('x', 0)
            .attr('y', height / 2)
            .attr('dy', '0.35em')
            .attr('text-anchor', 'middle')
            .style('fill', 'white');

        text.transition()
            .duration(2000)
            .attr('x', (percentage - 4) + '%');
    }
}
