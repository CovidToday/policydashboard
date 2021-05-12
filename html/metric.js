var data = [
  {
    type: "indicator",
    mode: "number+gauge",
    value: 50, //input from json "icuvacancy"
    //delta: { reference: 200 }, //removed as not using delta
    domain: { x: [0.5, 1.5], y: [0.05, 0.15] },
    title: { text: "ICU Vacancy (%)" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 100] },
      threshold: {
        line: { color: "3d3d5c", width: 2 },
        thickness: 0.75,
        value: 30, //input from json "icuvacancy" from -14 days
      },
      steps: [
        { range: [0, 40], color: "ff4d4d" },
        { range: [40, 80], color: "FFBF00" },
        { range: [80, 100], color: "238823" },
      ],
      bar: { color: "1f1f2e" },
    },
  },
  {
    type: "indicator",
    mode: "number+gauge",
    value: 700, //input from json "dailytestpermillion"
    //delta: { reference: 200 }, //removed as not using delta
    domain: { x: [0.5, 1.5], y: [0.22, 0.32] },
    title: { text: "Tests Per Million" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 1000] },
      threshold: {
        line: { color: "3d3d5c", width: 2 },
        thickness: 0.75,
        value: 400, //input from json "dailytestpermillion" from -14 days
      },
      steps: [
        { range: [0, 140], color: "ff4d4d" },
        { range: [140, 1000], color: "238823" },
      ],
      bar: { color: "1f1f2e" },
    },
  },
  {
    type: "indicator",
    mode: "number+gauge",
    value: 30, //input from json "dailytestpositivityrate"
    //delta: { reference: 200 }, //removed as not using delta
    domain: { x: [0.5, 1.5], y: [0.39, 0.49] },
    title: { text: "Tests Positivity (%)" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 100] },
      threshold: {
        line: { color: "3d3d5c", width: 2 },
        thickness: 0.75,
        value: 40, //input from json "dailytestpositivityrate" from -14 days
      },
      steps: [
        { range: [0, 5], color: "238823" },
        { range: [5, 10], color: "FFBF00" },
        { range: [10, 100], color: "ff4d4d" },
      ],
      bar: { color: "1f1f2e" },
    },
  },
  {
    type: "indicator",
    mode: "number+gauge",
    value: 30, //input from json "casegrowthrate"
    //delta: { reference: 200 }, //removed as not using delta
    domain: { x: [0.5, 1.5], y: [0.56, 0.66] },
    title: { text: "Case Growth Rate (%)" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 100] },
      threshold: {
        line: { color: "3d3d5c", width: 2 },
        thickness: 0.75,
        value: 40, //input from json "casegrowthrate" from -14 days
      },
      steps: [
        { range: [0, 2], color: "238823" },
        { range: [2, 5], color: "FFBF00" },
        { range: [5, 100], color: "ff4d4d" },
      ],
      bar: { color: "1f1f2e" },
    },
  },
  {
    type: "indicator",
    mode: "number+gauge",
    value: 1200, //input from json "dailycasespermillion"
    //delta: { reference: 200 }, //removed as not using delta
    domain: { x: [0.5, 1.5], y: [0.73, 0.83] },
    title: { text: "Cases Per Million" },
    gauge: {
      shape: "bullet",
      axis: {
        range: [null, 1000],
      },
      threshold: {
        line: { color: "3d3d5c", width: 2 },
        thickness: 0.75,
        value: 40, //input from json "dailycasespermillion" from -14 days
      },
      steps: [
        { range: [0, 20], color: "238823" },
        { range: [20, 100], color: "FFBF00" },
        { range: [100, 1000], color: "ff4d4d" },
      ],
      bar: { color: "1f1f2e" },
    },
  },
]

var layout = {
  width: 800,
  height: 500,
  margin: { t: 10, r: 25, l: 25, b: 10 },
}
Plotly.newPlot("metric", data, layout)
