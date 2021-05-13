import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import readXlsxFile from 'read-excel-file';
import Tabletop from 'tabletop';
import axios from 'axios';
import Plot from "react-plotly.js";
import {Dropdown} from 'react-bootstrap';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardsData: [],
            dataFromJson: {},
            heatmapFromJson: {},
            plotsData: [],
            plotLayout: [],
            heatMapData: [],
            heatMapLayout: [],
            heatMapConfig: [],
            categoryToday: "",
            city: "",
            dateUpdated: "",
            lastChangeDate: ""
        }
    }

    componentDidMount() {
        Tabletop.init({
              key: '1-VF4_JFPZ5-mZGqdx0y0X_9CIc6WY-RMzeQjvxXNvZE',
              callback: googleData => {
                console.log('google sheet data --->', googleData)
                this.setState({cardsData: googleData});
              },
              simpleSheet: true
            })
        this.getData();
    }

    async getData() {
        await axios.get('https://raw.githubusercontent.com/aberrantdoc/policydashboard/master/district_data/actual.json')
            .then(response => {
        	    this.setState({ dataFromJson: response.data });
        	});
        await axios.get('https://raw.githubusercontent.com/aberrantdoc/policydashboard/master/district_data/demo.json')
                    .then(response => {
                	    this.setState({ heatmapFromJson: response.data });
                	});
        let allCities = [];
        allCities = this.state.dataFromJson && Object.keys(this.state.dataFromJson);
        allCities.pop();
        this.setState({city: allCities[0]});
        this.setData(allCities[0]);
    }

    setData(city) {
        const allData = this.state.dataFromJson;
        const heatMapData = this.state.heatmapFromJson;
        if(allData) {
            const plotData = [
              {
                type: "indicator",
                mode: "number+gauge",
                value: allData[city]["pct_ICU"][allData[city]["pct_ICU"].length -1],     //input from json "icuvacancy"
                //delta: { reference: 200 }, //removed as not using delta
                number: { suffix: "%", font: {size: 20}},
                domain: { x: [0.5, 1], y: [0.05, 0.15] },
                title: { text: "ICU Vacancy (%)  ", font: {size: 20} },
                gauge: {
                  shape: "bullet",
                  axis: { range: [null, 100] },
                  threshold: {
                    line: { color: "3d3d5c", width: 2 },
                    thickness: 0.75,
                    value: allData[city]["pct_ICU"][allData[city]["pct_ICU"].length - 14]//30 //input from json "icuvacancy" from -14 days
                  },
                  steps: [
                    { range: [0, 40], color: "ff4d4d" },
                    { range: [40, 80], color: "FFBF00" },
                    { range: [80, 100], color: "238823" }
                  ],
                  bar: { color: "1f1f2e" }
                }
              },
                {
                type: "indicator",
                mode: "number+gauge",
                value: allData[city]["daily_tests_per_million_14ma"][allData[city]["daily_tests_per_million_14ma"].length -1],     //input from json "dailytestpermillion"
                //delta: { reference: 200 }, //removed as not using delta
                number: { font: {size: 20}},
                domain: { x: [0.5, 1], y: [0.22, 0.32] },
                title: { text: "Tests Per Million  ", font: {size: 20} },
                gauge: {
                  shape: "bullet",
                  axis: { range: [null, 5000] },
                  threshold: {
                    line: { color: "3d3d5c", width: 2 },
                    thickness: 0.75,
                    value: allData[city]["daily_tests_per_million_14ma"][allData[city]["daily_tests_per_million_14ma"].length -14], //input from json "dailytestpermillion" from -14 days
                  },
                  steps: [
                    { range: [0,140], color: "ff4d4d" },
                    { range: [140, 5000], color: "238823" }
                  ],
                  bar: { color: "1f1f2e" }
                }
              },
                {
                type: "indicator",
                mode: "number+gauge",
                value: allData[city]["TPR"][allData[city]["TPR"].length -1],     //input from json "dailytestpositivityrate"
                //delta: { reference: 200 }, //removed as not using delta
                number: { suffix: "%", font: {size: 20}},
                domain: { x: [0.5, 1], y: [0.39, 0.49] },
                title: { text: "Tests Positivity (%)  ", font: {size: 20} },
                gauge: {
                  shape: "bullet",
                  axis: { range: [null, 100] },
                  threshold: {
                    line: { color: "3d3d5c", width: 2 },
                    thickness: 0.75,
                    value: allData[city]["TPR"][allData[city]["TPR"].length -14],  //input from json "dailytestpositivityrate" from -14 days
                  },
                  steps: [
                    { range: [0, 5], color: "238823" },
                    { range: [5, 10], color: "FFBF00" },
                    { range: [10, 100], color: "ff4d4d" }
                  ],
                  bar: { color: "1f1f2e" }
                }
              },
                {
                type: "indicator",
                mode: "number+gauge",
                value: allData[city]["rate_increase_new_cases"][allData[city]["rate_increase_new_cases"].length -1] ,     //input from json "casegrowthrate"
                //delta: { reference: 200 }, //removed as not using delta
                number: { suffix: "%", font: {size: 20}},
                domain: { x: [0.5, 1], y: [0.56, 0.66] },
                title: { text: "Case Growth Rate (%)  ", font: {size: 20} },
                gauge: {
                  shape: "bullet",
                  axis: { range: [-50, 100] },
                  threshold: {
                    line: { color: "3d3d5c", width: 2 },
                    thickness: 0.75,
                    value: allData[city]["rate_increase_new_cases"][allData[city]["rate_increase_new_cases"].length -14] //input from json "casegrowthrate" from -14 days
                  },
                  steps: [
                    { range: [-50, 2], color: "238823" },
                    { range: [2, 5], color: "FFBF00" },
                    { range: [5, 100], color: "ff4d4d" }
                  ],
                  bar: { color: "1f1f2e" }
                }
              },
                {
                type: "indicator",
                mode: "number+gauge",
                value: allData[city]["daily_cases_per_million"][allData[city]["daily_cases_per_million"].length -1],     //input from json "dailycasespermillion"
                //delta: { reference: 200 }, //removed as not using delta
                number: { font: {size: 20}},
                domain: { x: [0.5, 1], y: [0.73, 0.83] },
                title: { text: "Cases Per Million  ", font: {size: 20} },
                gauge: {
                  shape: "bullet",
                  axis: {
                    range: [null, 2000]      },
                  threshold: {
                    line: { color: "3d3d5c", width: 2 },
                    thickness: 0.75,
                    value: allData[city]["daily_cases_per_million"][allData[city]["daily_cases_per_million"].length -14] //input from json "dailycasespermillion" from -14 days
                  },
                  steps: [
                    { range: [0, 20], color: "238823" },
                    { range: [20, 100], color: "FFBF00" },
                    { range: [100, 2000], color: "ff4d4d" }
                  ],
                  bar: { color: "1f1f2e" }
                }
              }
            ];
            const plotsLayout = {
              width: 750, height: 500,
              margin: { t: 10, r: 25, l: 25, b: 10 }
            };


            let heatMapArray = heatMapData[city]["category"];
            heatMapArray = heatMapArray.map((item) => {
                return item.replace("GRAY", 3);
            });
            heatMapArray = heatMapArray.map((item) => {
                return item.replace("YELLOW", 2);
            });
            heatMapArray = heatMapArray.map((item) => {
                return item.replace("GREEN", 1);
            });
            heatMapArray = heatMapArray.map((item) => {
                return item.replace("RED", 0);
            });
            const colorscaleValue = [
              [0, 'rgb(255, 77, 77)'],
              [0.33, 'rgb(255, 77, 77)'],
              [0.33, '#238823'],
              [0.67, '#238823'],
              [0.67, '#ffbf00'],
              [1, '#ffbf00']
            ];
            const mapData = [
              {
                z: [heatMapArray.slice(heatMapArray.length - 90)],
                colorscale: colorscaleValue,
                type: 'heatmap',
                showscale: false,
                 y:[" "]
              }
            ];
            const heatmapLayout = {
              width: 500, height: 50,
              margin: { t: 10, r: 25, l: 25, b: 10 }
            };
            const config = {responsive: true}

            const category = allData[city]["category"][allData[city]["category"].length - 1];

            const date = allData[city]["dates"][allData[city]["dates"].length - 1];


            const changeArr = heatMapData[city]["is_change"];
            const lastChangedValue = changeArr[changeArr.length - 1];
            const changeArrReverse = changeArr.reverse();
            const index = changeArrReverse.findIndex((i) =>
                i !== lastChangedValue
            )
            changeArr.reverse();
            const dateArr = heatMapData[city]["dates"];
            const dateArrReverse = dateArr.reverse();
            const changeDate = dateArrReverse[index];
            dateArr.reverse();



            this.setState({plotsData: plotData, plotLayout: plotsLayout,
            heatMapData: mapData, heatMapLayout: heatmapLayout, heatMapConfig: config,
            categoryToday: category, dateUpdated: date, lastChangeDate: changeDate});
        }
    }

    selectCity(key) {
        this.setState({city: key});
        this.setData(key);
    }

    render() {
        const policies = this.state.cardsData;
        let selectedCategory = this.state.categoryToday && this.state.categoryToday.toLowerCase().charAt(0).toUpperCase() + this.state.categoryToday.toLowerCase().slice(1);
        const medicalPreparedness = policies.filter((p) => p.Domain === "Medical Preparedness");
        let medicalPreparednessText = "";
        medicalPreparedness.forEach((i) => {
            if(i[selectedCategory] === "1") {
                medicalPreparednessText += "- ";
                medicalPreparednessText += i.Policy;
                medicalPreparednessText += "\n";
            }
        })
        console.log(medicalPreparednessText);
        const mobility = policies.filter((p) => p.Domain === "Mobility");
        let mobilityText = "";
        mobility.forEach((i) => {
            if(i[selectedCategory] === "1") {
                mobilityText += "- ";
                mobilityText += i.Policy;
                mobilityText += "\n";
            }
        })
        const testing = policies.filter((p) => p.Domain === "Testing");
        let testingText = "";
                testing.forEach((i) => {
                    if(i[selectedCategory] === "1") {
                        testingText += "- ";
                        testingText += i.Policy;
                        testingText += "\n";
                    }
                })
        const closures = policies.filter((p) => p.Domain === "Closures");
        let closuresText = "";
                closures.forEach((i) => {
                    if(i[selectedCategory] === "1") {
                        closuresText += "- ";
                        closuresText += i.Policy;
                        closuresText += "\n";
                    }
                })
        const contactTracing = policies.filter((p) => p.Domain === "Contact Tracing");
        let contactTracingText = "";
                contactTracing.forEach((i) => {
                    if(i[selectedCategory] === "1") {
                        contactTracingText += "- ";
                        contactTracingText += i.Policy;
                        contactTracingText += "\n";
                    }
                })
        const communication = policies.filter((p) => p.Domain === "Communication");
        let communicationText = "";
                communication.forEach((i) => {
                    if(i[selectedCategory] === "1") {
                        communicationText += "- ";
                        communicationText += i.Policy;
                        communicationText += "\n";
                    }
                })
        const data = policies.filter((p) => p.Domain === "Data");
        let dataText = "";
                data.forEach((i) => {
                    if(i[selectedCategory] === "1") {
                        dataText += "- ";
                        dataText += i.Policy;
                        dataText += "\n";
                    }
                })
        const publicLeadership = policies.filter((p) => p.Domain === "Public Leadership");
        let publicLeadershipText = "";
                publicLeadership.forEach((i) => {
                    if(i[selectedCategory] === "1") {
                        publicLeadershipText += "- ";
                        publicLeadershipText += i.Policy;
                        publicLeadershipText += "\n";
                    }
                })
        const vaccinations = policies.filter((p) => p.Domain === "Vaccinations");
        let vaccinationsText = "";
                vaccinations.forEach((i) => {
                    if(i[selectedCategory] === "1") {
                        vaccinationsText += "- ";
                        vaccinationsText += i.Policy;
                        vaccinationsText += "\n";
                    }
                })
        const gatherings = policies.filter((p) => p.Domain === "Gatherings");
        let gatheringsText = "";
                gatherings.forEach((i) => {
                    if(i[selectedCategory] === "1") {
                        gatheringsText += "- ";
                        gatheringsText += i.Policy;
                        gatheringsText += "\n";
                    }
                })
        const maskVentilation = policies.filter((p) => p.Domain === "Mask Wearing and Ventilation");
        let maskVentilationText = "";
                maskVentilation.forEach((i) => {
                    if(i[selectedCategory] === "1") {
                        maskVentilationText += "- ";
                        maskVentilationText += i.Policy;
                        maskVentilationText += "\n";
                    }
                })
        const distancing = policies.filter((p) => p.Domain === "Physical Distancing and Hygiene");
        let distancingText = "";
                distancing.forEach((i) => {
                    if(i[selectedCategory] === "1") {
                        distancingText += "- ";
                        distancingText += i.Policy;
                        distancingText += "\n";
                    }
                })

        return (
            <div className="App">
                <div className="heading jumbotron-fluid" style={{backgroundColor: "black"}}>
                    <div className="container">
                        <h1 className="display-4">{this.state.city}</h1>
                    </div>
                </div>
                <div className="dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {this.state.city}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onSelect={() => this.selectCity("Delhi")}>Delhi</Dropdown.Item>
                    <Dropdown.Item onSelect={() => this.selectCity("Chandigarh")}>Chandigarh</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
                <div className="date d-none d-lg-block">Data shown for {this.state.dateUpdated}</div>
                <div className="first">
                    <div className="row">
                        <div className="col-md-6 d-none d-lg-block">
                            <div id="metric">
                                <Plot data={this.state.plotsData}
                                      layout={this.state.plotLayout} />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-8">
                            <div className="left">
                                <div className="risk-card risk card">
                                    <div className="card-header">
                                        <h2 className="lead font-weight-bold">Today's Risk Score</h2>
                                    </div>
                                    <div className="risk card-body" style={{backgroundColor:
                                        this.state.categoryToday === "RED" ? "rgb(255, 77, 77)" :
                                        this.state.categoryToday === "GREEN" ? "#238823" :
                                        this.state.categoryToday === "YELLOW" ? "#ffbf00" : "#eaeaec", fontWeight: "bold", textAlign: "center"}}>
                                        <span className="risk-text">{this.state.categoryToday === "RED" ? "HIGH RISK" :
                                        this.state.categoryToday === "GREEN" ? "LOW RISK" :
                                        this.state.categoryToday === "YELLOW" ? "MEDIUM RISK" : "INSUFFICIENT DATA TO CATEGORIZE"}</span>
                                    </div>
                                </div>
                                <div className="d-none d-lg-block last-changed-date">Risk score last changed on {this.state.lastChangeDate}</div>
                                <div id = "status">
                                    <Plot data={this.state.heatMapData}
                                          layout={this.state.heatMapLayout}
                                          config={this.state.heatMapConfig} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "second">
                    <h2 className = "display-4 text-center">Suggested Actions</h2><br/>
                        <div className = "row">
                            <div className = "col-md-4">
                                <div className = "action card">
                                    <div className = "card-header" >
                                        <p className = "lead">Medical Preparedness</p>
                                    </div>
                                    <div className = "card-body">
                                        {medicalPreparednessText}
                                    </div>
                                </div>
                            </div>
                            <div className = "col-md-4">
                                <div className = "action card">
                                    <div className = "card-header">
                                        <p className = "lead">Mobility</p>
                                    </div>
                                    <div className = "card-body">
                                        {mobilityText}
                                    </div>
                                </div>
                            </div>
                            <div className = "col-md-4">
                                <div className = "action card">
                                    <div className = "card-header">
                                        <p className = "lead">Testing</p>
                                    </div>
                                    <div className = "card-body">
                                        {testingText}
                                    </div>
                                </div>
                            </div>
                            <div className = "col-md-4">
                                <div className = "action card">
                                    <div className = "card-header">
                                        <p className = "lead">Closures</p>
                                    </div>
                                    <div className = "card-body">
                                        {closuresText}
                                    </div>
                                </div>
                            </div>
                            <div className = "col-md-4">
                                <div className = "action card">
                                    <div className = "card-header">
                                        <p className = "lead">Contact Tracking</p>
                                    </div>
                                    <div className = "card-body">
                                        {contactTracingText}
                                    </div>
                                </div>
                            </div>
                            <div className = "col-md-4">
                                <div className = "action card">
                                    <div className = "card-header">
                                        <p className = "lead">Communication</p>
                                    </div>
                                    <div className = "card-body">
                                        {communicationText}
                                    </div>
                                </div>
                            </div>
                            <div className = "col-md-4">
                                <div className = "action card">
                                    <div className = "card-header">
                                        <p className = "lead">Data</p>
                                    </div>
                                    <div className = "card-body">
                                        {dataText}
                                    </div>
                                </div>
                            </div>
                            <div className = "col-md-4">
                                <div className = "action card">
                                    <div className = "card-header">
                                        <p className = "lead">Public Leadership</p>
                                    </div>
                                    <div className = "card-body">
                                        {publicLeadershipText}
                                    </div>
                                </div>
                            </div>
                            <div className = "col-md-4">
                                <div className = "action card">
                                    <div className = "card-header">
                                        <p className = "lead">Vaccinations</p>
                                    </div>
                                    <div className = "card-body">
                                        {vaccinationsText}
                                    </div>
                                </div>
                            </div>
                            <div className = "col-md-4">
                                <div className = "action card">
                                    <div className = "card-header">
                                        <p className = "lead">Gathering</p>
                                    </div>
                                    <div className = "card-body">
                                        {gatheringsText}
                                    </div>
                                </div>
                            </div>
                            <div className = "col-md-4">
                                <div className = "action card">
                                    <div className = "card-header">
                                        <p className = "lead">Mask wearing and ventilation</p>
                                    </div>
                                    <div className = "card-body">
                                        {maskVentilationText}
                                    </div>
                                </div>
                            </div>
                            <div className = "col-md-4">
                                <div className = "action card">
                                    <div className = "card-header">
                                        <p className = "lead">Physical Distancing and Hygine</p>
                                    </div>
                                    <div className = "card-body">
                                        {distancingText}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}