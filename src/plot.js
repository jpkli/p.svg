import {scaleLinear} from 'd3-scale';
import {select} from 'd3-selection';
import {axisLeft, axisBottom} from 'd3-axis';

let Data = {
    json: [],
    domains: {},
    vmap: {}
}

let View = {
    container: null,
    svg: null,
    height: 300,
    width: 400,
    axes: true
}

export default class Plot {
    constructor(data = Data, view = View) {
        this.data = data;
        this.view = view;
        this.container = view.container;
        this.padding = view.padding || {top: 0, bottom: 0, left: 0, right: 0};
        this.height = view.height;
        this.width = view.width;
        this.svg = {};

        if(!view.svg || view.svg === null) {
            if(view.container !== null) {
                this.svg = this.createSvg();
            }
            this.height -= this.padding.top + this.padding.bottom;
            this.width -= this.padding.left + this.padding.right;
            this.svg.main = this.svg.append('g')
                .attr("transform", `translate(${this.padding.left}, ${this.padding.top})`);
    
        } else {
            this.svg.main = select(view.svg);
        }

        this.scales = this.getScales()
    }

    createSvg() {
        let svg = select(this.container)
            .append('svg')
                .attr('width', this.width)
                .attr('height', this.height);
        return svg;
    }

    channels() {
        return {
            x: [0, this.width],
            y: [this.height, 0],
            color: ['white', 'green'],
            opacity: [0, 1],
            size: [2, 20],
            width: [0, this.width],
            height: [0, this.height]
        }
    }

    getScales() {
        let scales = {};
        let channels = this.channels();
        let vmap = this.data.vmap;
        let domains = this.data.domains || null;
        // let fields = this.data.fields || null;
        // if(fields === null) fields = Object.keys(this.data.json[0]);
        
        for (let channel of Object.keys(channels)) {
            if(channel in vmap) {
                let domain; 
                if(domains === null) {
                    let value = this.data.json.map(d=>d[vmap[channel]]);
                    let min = Math.min(...value) || 0;
                    let max = Math.max(...value) || 0;
                   
                    if(max === min) {
                        max += 1e-6;
                    }
                    domain = [min, max];
                } else {
                    domain = domains[vmap[channel]] || [0, 1];
                }
                
                let range = channels[channel];
                scales[channel] = scaleLinear().domain(domain).range(range);
            }
        }

        return scales;
    }

    axes() {
        if(!this.view.hideAxes) {
            this.xAxis = this.svg.main.append('g')
            .attr("transform", `translate(0, ${this.height})`)
            .call(axisBottom(this.scales.x))
            
            this.yAxis = this.svg.main.append('g')
                .call(axisLeft(this.scales.y).ticks(this.height/20))

            if(this.view.gridlines && this.view.gridlines.y) {
                this.yGridlines = this.yAxis.append('g')
                .style('opacity', 0.3)
                .call(axisLeft(this.scales.y).ticks(this.height/30).tickSize(-this.width))
                .selectAll('text').remove()
            }
            
        }
    }

    render() {
        this.axes();
    }
}