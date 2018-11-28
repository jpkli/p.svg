import Plot from './plot';
import us from './usa.topo.json';
import airports from './airports.json';
import {geoPath, geoAlbers} from 'd3-geo';
import * as topojson from 'topojson-client';

export default class Map extends Plot {
    constructor(data, view) {
        super(data, view);
    }

    render() { 
        let projection = geoAlbers();

        let path = geoPath()
            .projection(projection)
            .pointRadius(1.5);

        this.svg.main.append("path")
            .datum(topojson.feature(us, us.objects.land))
            .attr("class", "land")
            .attr("d", path)
            .attr("fill", "lightgray");

        this.svg.main.append("path")
            .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
            .attr("class", "states")
            .attr("d", path)
            .attr("fill", "none")
            .attr("stroke", "white");
        
        this.svg.main.append("path")
            .datum(topojson.feature(airports, airports.objects.airports))
            .attr("class", "points")
            .attr("d", path);
    }
}