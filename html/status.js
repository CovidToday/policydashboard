var lastndays = [
  0, 3, 1, 0, 1, 1, 2, 1, 3, 1, 0, 2, 0, 3, 2, 1, 3, 3, 0, 3, 3, 1, 1, 2, 3, 1,
  0, 3, 2, 2, 1, 3, 0, 2, 2, 2, 0, 1, 0, 3, 0, 2, 2, 0, 3, 3, 0, 0, 2, 1, 3, 2,
  2, 0, 2, 3, 3, 0, 3, 2, 0, 0, 0, 0, 1, 3, 1, 1, 3, 3, 0, 3, 1, 1, 1, 1, 0, 3,
  1, 3, 0, 0, 1, 2, 3, 3, 3, 0, 1, 0,
]

var colorscaleValue = [
  [0, "rgb(255, 77, 77)"],
  [0.25, "#238823"],
  [0.75, "#ffbf00"],
  [1, "#eaeaec"],
]
//Red, Green Yellow Gray

var data = [
  {
    z: [lastndays],
    colorscale: colorscaleValue,
    type: "heatmap",
    y: [" "],
  },
]

var layout = {
  width: 600,
  height: 100,
  margin: { t: 10, r: 25, l: 25, b: 10 },
}

var config = { responsive: true }

Plotly.newPlot("status", data, layout, config)
