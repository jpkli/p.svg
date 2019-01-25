import Plot from './plot';
import * as d3 from 'd3-geo';
import * as topojson from 'topojson-client';
import {interpolateBlues} from 'd3-scale-chromatic';
import {scalePow} from 'd3-scale';
import world from "../assets/world-110m.json";
import countries from '../assets/countries.json';

export default class Map extends Plot {
    constructor(data, view) {
        super(data, view);
        
        this.feature = data.feature || 'countries';
        this.circle = data.vmap.points;
        this.scale = data.vmap.scale;
        this.gis = data.gis || world;

        this.borders = view.borders || true;
        this.translate = view.translate || [this.width / 2, this.height / 1.5];
        this.scale = view.scale || ((view.projection == 'Albers') ? 1 : 150);
        this.exponent = view.exponent || 1/3;
        this.projection = d3['geo'+ (view.projection || 'Albers')].call()
            .scale(this.scale)
            .translate(this.translate);

        this.path = d3.geoPath()
            .projection(this.projection);

        if(data.vmap.color) {
            let valueById = {};
            data.json.forEach( d => {
                let country = countries.filter(c => c[data.join.type || 'code']== d[data.join.field])[0] || -1;
                if(country && country.id){
                    valueById[country.id] = Number(d[data.vmap.color].replace(/,/g, ''));
                }
            })
            let values = Object.keys(valueById).map(k => valueById[k]).filter(d=>!Number.isNaN(d));
            let domain = [Math.min(...values), Math.max(...values)]
            let colorScale = scalePow().exponent(1/3).domain(domain).range([0.1, 1]);
            this.setColor = function(d) {
                return interpolateBlues(colorScale(valueById[d.id] || domain[0]));
            }
            if(view.color && typeof(view.color.setter) === 'function') {
                this.setColor = function() {
                    return this.color.setter(colorScale(valueById[d.id] || domain[0]))
                }
            }
        }
    }

    render() { 
        this.svg.main.selectAll(".geo-paths")
            .data(topojson.feature(this.gis, this.gis.objects[this.feature]).features)
            .enter()
            .append('path')
                .attr('class', 'geo-paths')
                .attr("d", this.path)
                .attr("stroke", "white")
                .attr("fill", this.setColor);
            
        if(this.borders) {
            this.svg.main.append("path")
            .attr('class', 'geo-borders')
            .datum(topojson.mesh(this.gis, this.gis.objects[this.feature], function(a, b) { return a !== b; }))
            .attr("d", this.path)
            .attr("fill", "none")
            .attr("stroke", "white");
        }

        return this;
    }

    addLayer({type = 'point', radius = 1.0, data, feature}) {
        if(type == 'point') {
            this.path.pointRadius(radius);
            this.svg.main.append("path")
                .datum(topojson.feature(data, data.objects[feature]))
                .attr("d", this.path);
        }
    }
}