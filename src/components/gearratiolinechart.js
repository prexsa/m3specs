import React, { Component } from 'react';
import * as d3 from 'd3';

class LineChart extends Component {
  componentDidMount() {
    var data = [{
  "Date": "\/Date(1475272800000)\/",
  "Open": 0,
  "Closed": 0
}, {
  "Date": "\/Date(1475359200000)\/",
  "Open": 0,
  "Closed": 0
}, {
  "Date": "\/Date(1475445600000)\/",
  "Open": 0,
  "Closed": 0
}, {
  "Date": "\/Date(1475532000000)\/",
  "Open": 0,
  "Closed": 0
}, {
  "Date": "\/Date(1475618400000)\/",
  "Open": 0,
  "Closed": 0
}, {
  "Date": "\/Date(1475704800000)\/",
  "Open": 0,
  "Closed": 0
}, {
  "Date": "\/Date(1475791200000)\/",
  "Open": 0,
  "Closed": 0
}, {
  "Date": "\/Date(1475877600000)\/",
  "Open": 0,
  "Closed": 0
}, {
  "Date": "\/Date(1475964000000)\/",
  "Open": 0,
  "Closed": 0
}, {
  "Date": "\/Date(1476050400000)\/",
  "Open": 0,
  "Closed": 0
}, {
  "Date": "\/Date(1476136800000)\/",
  "Open": 0,
  "Closed": 0
}, {
  "Date": "\/Date(1476223200000)\/",
  "Open": 0,
  "Closed": 0
}, {
  "Date": "\/Date(1476309600000)\/",
  "Open": 0,
  "Closed": 0
}, {
  "Date": "\/Date(1476396000000)\/",
  "Open": 0,
  "Closed": 0
}, {
  "Date": "\/Date(1475445600000)\/",
  "Open": 1,
  "Closed": 0
}, {
  "Date": "\/Date(1475532000000)\/",
  "Open": 1,
  "Closed": 0
}, {
  "Date": "\/Date(1475618400000)\/",
  "Open": 2,
  "Closed": 0
}, {
  "Date": "\/Date(1475791200000)\/",
  "Open": 9,
  "Closed": 0
}, {
  "Date": "\/Date(1475964000000)\/",
  "Open": 1,
  "Closed": 0
}, {
  "Date": "\/Date(1475445600000)\/",
  "Open": 0,
  "Closed": 1
}, {
  "Date": "\/Date(1475532000000)\/",
  "Open": 0,
  "Closed": 1
}, {
  "Date": "\/Date(1475618400000)\/",
  "Open": 0,
  "Closed": 1
}, {
  "Date": "\/Date(1475964000000)\/",
  "Open": 0,
  "Closed": 1
}]
// http://stackoverflow.com/questions/40045219/d3-v4-line-chart-with-json-dates
// http://www.d3noob.org/2012/12/setting-scales-domains-and-ranges-in.html
    data.forEach((d) => {
      var unixToISO = new Date(d.Date.match(/\d+/)[0] * 1);
      d.Date = unixToISO;
      d.Open = +d.Open;
      d.Closed = +d.Closed;
      //console.log(d.Date);
      return d;
    });
    // set dimensions and margins of the graph
    const margin = {top: 20, right: 20, bottom: 50, left: 70},
        width = 500 - margin.left - margin.right,
        height = 375 - margin.top - margin.bottom;

    const x = d3.scaleLinear().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    x.domain(d3.extent(data, (d) => { return d.Date; }));
    y.domain([
        d3.min(data, function (d) { return Math.min(d.Open); }),
        d3.max(data, function (d) { return Math.max(d.Open); })]);

    const valueline1 = d3.line()
      .x(function (d) { console.log(x(d.Date)); return x(d.Date); })
      .y(function (d) { console.log(y(d.Open)); return y(d.Open); });

    const svg = d3.select('#chart')
        .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
        .append('g')
            .attr('transform', "translate(" + margin.left + "," + margin.top + ")");

    // add the x-axis
    svg.append('g')
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // add the y-axis
    svg.append("g")
        .attr("class", "y axis")
        .style("fill", "steelblue")
        .call(d3.axisLeft(y));

    // add the valueline path.
    svg.append("path") 
        .data([data])
        .attr("class", "line")
        .attr("d", valueline1);

  }

  render() {
    return(
      <div id={'chart'}></div>
    )
  }
}

export default LineChart;