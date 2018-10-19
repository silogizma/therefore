import React, { Component } from "react";
import * as d3 from "d3";
import { VennDiagram } from "venn.js";

export default class extends Component {
  componentDidMount() {
    console.log(this.props.syllogism);
    window.SYL = this.props.syllogism;
    const sets = [
      { sets: ["Information"], size: 12 },
      { sets: ["Things That Overlap"], size: 12 },
      { sets: ["Circles"], size: 12 },
      {
        sets: ["Information", "Things That Overlap"],
        size: 4,
        label: "Redundancy"
      },
      { sets: ["Information", "Circles"], size: 4, label: "Pie Charts" },
      { sets: ["Things That Overlap", "Circles"], size: 4, label: "Eclipses" },
      {
        sets: ["Information", "Things That Overlap", "Circles"],
        size: 2,
        label: "Venn Diagrams"
      }
    ];

    const chart = VennDiagram()
      .width(400)
      .height(400);

    var div = d3
      .select(this.element)
      .datum(sets)
      .call(chart);

    div.selectAll("text").style("fill", "white");

    div.selectAll(".venn-circle path").style("fill-opacity", 0.6);
  }

  render() {
    return <div ref={ref => (this.element = ref)}>hey</div>;
  }
}
