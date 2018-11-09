import Plot from './plot';
import * as d3 from 'd3';
import {geoPath} from 'd3-geo';
import * as topojson from 'topojson-client';

export default class Map extends Plot {
    constructor(data, view) {
        super(data, view);
    }

    render() { 
        var width = 960;
        var height = 600;
        
        let svg = d3.select("body")
          .append("svg")
          .attr('width', width)
          .attr('height', height);
        
        let path = d3.geoPath();

        let usData = d3.json("./usa.topo.json", function(error, us) {
            if (error) throw error;
        });

        usData.then(function(result) {
            console.log(result);

            svg.append("g")
                .attr("class", "states")
                .selectAll("path")
                .data(topojson.feature(result, result.objects.states).features)
                .enter().append("path")
                    .attr("d", path);
        
            svg.append("path")
                .attr("class", "state-borders")
                .attr("d", path(topojson.mesh(result, result.objects.states, function(a, b) { return a !== b; })));
        });
    
    }
}