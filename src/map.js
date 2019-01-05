import Plot from './plot';
import {geoPath} from 'd3-geo';
import * as topojson from 'topojson-client';
import usaTopo from "../assets/usa.topo.json";

export default class Map extends Plot {
    constructor(data, view) {
        super(data, view);
    }

    render() { 
        let path = geoPath();

        this.svg.main.append("g")
            .attr("class", "states")
            .selectAll("path")
            .data(topojson.feature(usaTopo, usaTopo.objects.states).features)
            .enter().append("path")
                .attr("d", path);
    
        this.svg.main.append("path")
            .attr("class", "state-borders")
            .attr("d", path(topojson.mesh(usaTopo, usaTopo.objects.states, function(a, b) { return a !== b; })));

    }
}