import Plot from './plot';
import { timer } from 'd3-timer';
import { transition } from 'd3-transition';

let i = 0;

export default class AnimatedScatterPlot extends Plot {

  constructor(data, view) {
    super(data, view);
    this.timeStep();
  }

  //define timeSteps
  timeStep() {
    let lookup = {};
    let attribute = this.data.vmap.time;
    let items = this.data.json;
    let result = [];

    for (var i = 0; i < items.length; i++) {
      let timeStep = items[i][attribute];

      if (!(timeStep in lookup)) {
        lookup[timeStep] = 1;
        result.push(timeStep);
      }
    }
    result = result.sort((a, b) => a - b);
    this.filter(result);
  }

  //filter the data based on the timstep
  filter(timeSteps, i) {
    let that = this;
    let data = this.data.json;

    // render()
    for (let i = 0; i < timeSteps.length; i++) {
      let filtered = data.filter(d => d.real_TS == timeSteps[i]);
      (function(ind) {
        setTimeout(function() {
          that.render(filtered, i);
        }, 2000 * ind);
      })(i);
    }
  }

  render(result, i) {
    const t = transition().duration(750);
    let vmap = this.data.vmap;

    if (i == 0) {
      super.axes();
    }

    // JOIN new data with old elements.
    const circle = this.svg.main.selectAll('circle')
      .data(result);

    // EXIT old elements not present in new data.
    circle.exit()
      .attr("class", "exit")
      .transition(t)
      .style("fill-opacity", 1e-6)
      .remove();

    //UPDATE old elements present in new data.
    circle
      .data(result)
      .attr("class", "update")
      .transition(t)
      .attr('cx', d => this.scales.x(d[vmap.x]))
      .attr('cy', d => this.scales.y(d[vmap.y]))
      .attr('r', d => this.scales.size(d[vmap.size]))
      .style("fill-opacity", 0.8);

    //Create new elements
    circle
      .data(result)
      .enter().append('circle')
      .attr('class', 'new-plot-circles')
      .attr('cx', d => this.scales.x(d[vmap.x]))
      .attr('cy', d => this.scales.y(d[vmap.y]))
      .attr('r', d => this.scales.size(d[vmap.size]))
      .style("fill", d => this.scales.color(d[vmap.color]))
      .style("fill-opacity", 1)
      .style("stroke-width", 0)

  }
}