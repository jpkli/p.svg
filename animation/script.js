const margin = {
  top: 20,
  right: 20,
  bottom: 30,
  left: 50
};
let i = 0;
let entireData = [];
const realTime = ["7061511.000000", "7061657.000000", "7061803.000000", "7061950.000000",
  "7062096.000000", "7062176.500000", "7062257.500000", "7062403.000000", "7062548.000000",
  "7062693.000000", "7062773.500000", "7062918.500000", "7062919.000000"
];

const width = document.getElementById('scatterplot').offsetWidth;
const height = 500 - margin.top - margin.bottom;

const svg = d3.select("#scatterplot").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

const file = 'ross_filtered.csv';

// set the ranges
const x = d3.scaleLinear()
  .range([0, width]);
const y = d3.scaleLinear()
  .range([height, 1]);

const xAxis = d3.axisBottom(x);
const yAxis = d3.axisLeft(y);

d3.csv('ross_filtered.csv', function(err, data) {
  if (err) return console.error('error reading JSON file:', err);

  data.forEach(function(d) {
    d.pe = +d.pe;
    d.total_rollbacks = +d.total_rollbacks;
  });

  // scale the range of the data
  x.domain(d3.extent(data, function(d) {
    return d.pe;
  })).nice();
  y.domain([0, 750]);

  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .append("text")
    .attr("class", "label")
    .attr("x", width)
    .attr("y", -6)
    .style("text-anchor", "end")
    .text("Sepal Width (cm)");

  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("class", "label")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Sepal Length (cm)");

});

function updateCircles(data) {
  if (i < 13) {
    d3.csv(data, function(rows) {
      console.log("entering" + i);
      console.log(realTime[i]);
      const t = d3.transition()
        .duration(750);
      entireData = rows;
      let filtered = entireData.filter(function(a) {
        return a.real_TS == realTime[i];
      });

      filtered.forEach(function(d) {
        d.pe = +d.pe;
        d.total_rollbacks = +d.total_rollbacks;
      });

      i++;

      const circle = svg.selectAll("circle");

      // UPDATE old elements present in new data.
      circle
        .data(filtered)
        .attr("class", "update")
        .transition(t)
        .attr("r", 5)
        .attr("cx", function(d) {
          return x(d.pe);
        })
        .attr("cy", function(d) {
          return y(d.total_rollbacks);
        })
        .style("fill-opacity", 0.8);

      //Create new elements
      circle
        .data(filtered)
        .attr("class", "new")
        .enter().append("circle")
        .attr("r", 5)
        .attr("cx", function(d) {
          return x(d.pe);
        })
        .attr("cy", function(d) {
          return y(d.total_rollbacks);
        })
        .style("fill-opacity", 0.8);

    });
  }
}

d3.interval(function() {
  updateCircles(file)
}, 750);