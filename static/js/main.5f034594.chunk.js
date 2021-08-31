(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{50:function(e,t,a){},52:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(12),r=a.n(s),i=(a(50),a(19)),l=a.n(i),o=a(37),d=a(38),h=a(39),u=a(45),j=a(44),m=(a.p,a(52),a(53),a(54),a(9)),b=a.n(m),f=a(20),g=a.n(f),y=a(103),x=a(43),O=a(0),v=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(d.a)(this,a),(c=t.call(this,e)).state={cardsData:[],dataFromJson:{},heatmapFromJson:{},dataFromJson2:{},heatmapFromJson2:{},plotsData:[],plotLayout:[],heatMapData:[],heatMapLayout:[],heatMapConfig:[],categoryToday:"",city:"",dateUpdated:"",lastChangeDate:"",selectedType:"aggressive"},c}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,c,n=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://raw.githubusercontent.com/aberrantdoc/policydashboard/master/district_data/Cat_wise_policies.json").then((function(e){console.log(e.data),n.setState({cardsData:e.data})}));case 2:return e.next=4,b.a.get("https://raw.githubusercontent.com/aberrantdoc/policydashboard/master/district_data/actual.json").then((function(e){n.setState({dataFromJson:e.data})}));case 4:return e.next=6,b.a.get("https://raw.githubusercontent.com/aberrantdoc/policydashboard/master/district_data/demo.json").then((function(e){n.setState({heatmapFromJson:e.data})}));case 6:return e.next=8,b.a.get("https://raw.githubusercontent.com/aberrantdoc/policydashboard/master/district_data/agg_actual.json").then((function(e){n.setState({dataFromJson2:e.data})}));case 8:return e.next=10,b.a.get("https://raw.githubusercontent.com/aberrantdoc/policydashboard/master/district_data/agg_demo.json").then((function(e){n.setState({heatmapFromJson2:e.data})}));case 10:t=[],a=this.state.dataFromJson&&Object.keys(this.state.dataFromJson),c=this.state.dataFromJson2&&Object.keys(this.state.dataFromJson2),(t="conservative"===this.state.selectedType?a:c).pop(),this.setState({city:t[0]}),this.setData(t[0]);case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setData",value:function(e){console.log(this.state);var t="conservative"===this.state.selectedType?this.state.dataFromJson:this.state.dataFromJson2,a="conservative"===this.state.selectedType?this.state.heatmapFromJson:this.state.heatmapFromJson2;if(t){var c=[{type:"indicator",mode:"number+gauge",value:t[e].pct_ICU[t[e].pct_ICU.length-1],number:{suffix:"%",font:{size:20}},align:"right",domain:{x:[.5,1],y:[.05,.15]},title:{text:"ICU Vacancy (%)  ",font:{size:20}},gauge:{shape:"bullet",axis:{range:[null,100]},threshold:{line:{color:"3d3d5c",width:2},thickness:.75,value:t[e].pct_ICU[t[e].pct_ICU.length-14]},steps:[{range:[0,40],color:"fc0f03"},{range:[40,80],color:"e38109"},{range:[80,100],color:"FFBF00"}],bar:{color:"1f1f2e"}}},{type:"indicator",mode:"number+gauge",value:t[e].daily_tests_per_million_14ma[t[e].daily_tests_per_million_14ma.length-1],number:{font:{size:20}},align:"right",domain:{x:[.5,1],y:[.22,.32]},title:{text:"Tests Per Million  ",font:{size:20}},gauge:{shape:"bullet",axis:{range:[null,5e3]},threshold:{line:{color:"3d3d5c",width:2},thickness:.75,value:t[e].daily_tests_per_million_14ma[t[e].daily_tests_per_million_14ma.length-14]},steps:[{range:[0,140],color:"fc0f03"},{range:[140,5e3],color:"FFBF00"}],bar:{color:"1f1f2e"}}},{type:"indicator",mode:"number+gauge",value:t[e].TPR[t[e].TPR.length-1],number:{suffix:"%",font:{size:20}},align:"right",domain:{x:[.5,1],y:[.39,.49]},title:{text:"Tests Positivity (%)  ",font:{size:20}},gauge:{shape:"bullet",axis:{range:[null,100]},threshold:{line:{color:"3d3d5c",width:2},thickness:.75,value:t[e].TPR[t[e].TPR.length-14]},steps:[{range:[0,5],color:"FFBF00"},{range:[5,10],color:"e38109"},{range:[10,100],color:"fc0f03"}],bar:{color:"1f1f2e"}}},{type:"indicator",mode:"number+gauge",value:t[e].rate_increase_new_cases[t[e].rate_increase_new_cases.length-1],number:{suffix:"%",font:{size:20}},align:"right",domain:{x:[.5,1],y:[.56,.66]},title:{text:"Case Growth Rate (%)  ",font:{size:20}},gauge:{shape:"bullet",axis:{range:[-50,100]},threshold:{line:{color:"3d3d5c",width:2},thickness:.75,value:t[e].rate_increase_new_cases[t[e].rate_increase_new_cases.length-14]},steps:[{range:[-50,2],color:"FFBF00"},{range:[2,5],color:"e38109"},{range:[5,100],color:"fc0f03"}],bar:{color:"1f1f2e"}}},{type:"indicator",mode:"number+gauge",value:t[e].daily_cases_per_million[t[e].daily_cases_per_million.length-1],number:{font:{size:20}},align:"right",domain:{x:[.5,1],y:[.73,.83]},title:{text:"Cases Per Million  ",font:{size:20}},gauge:{shape:"bullet",axis:{range:[null,2e3]},threshold:{line:{color:"3d3d5c",width:2},thickness:.75,value:t[e].daily_cases_per_million[t[e].daily_cases_per_million.length-14]},steps:[{range:[0,20],color:"FFBF00"},{range:[20,100],color:"e38109"},{range:[100,2e3],color:"fc0f03"}],bar:{color:"1f1f2e"}}}],n=a[e].category,s=[{z:[(n=(n=(n=(n=n.map((function(e){return e.replace("GRAY",3)}))).map((function(e){return e.replace("ORANGE",2)}))).map((function(e){return e.replace("YELLOW",1)}))).map((function(e){return e.replace("RED",0)}))).slice(n.length-90)],colorscale:[[0,"rgb(255, 77, 77)"],[.33,"rgb(255, 77, 77)"],[.33,"#e38109"],[.67,"#e38109"],[.67,"#f2705c"],[1,"#f2705c"]],type:"heatmap",showscale:!1,y:[" "]}],r=t[e].category[t[e].category.length-1],i=t[e].dates[t[e].dates.length-1],l=a[e].is_change,o=l[l.length-1],d=l.reverse().findIndex((function(e){return e!==o}));l.reverse();var h=a[e].dates,u=h.reverse()[d];h.reverse(),this.setState({plotsData:c,plotLayout:{width:750,height:500,margin:{t:10,r:25,l:25,b:10}},heatMapData:s,heatMapLayout:{width:500,height:50,margin:{t:10,r:25,l:25,b:10}},heatMapConfig:{responsive:!0},categoryToday:r,dateUpdated:i,lastChangeDate:u})}}},{key:"selectCity",value:function(e){this.setState({city:e}),this.setData(e)}},{key:"switchApproach",value:function(){var e=this;this.setState({selectedType:"conservative"===this.state.selectedType?"aggressive":"conservative"},(function(){e.setData(e.state.city)}))}},{key:"render",value:function(){var e=this;console.log(this.state.cardsData);var t=this.state.cardsData,a=this.state.categoryToday&&this.state.categoryToday.toLowerCase().charAt(0).toUpperCase()+this.state.categoryToday.toLowerCase().slice(1),c=t.filter((function(e){return"Medical Preparedness"===e.Domain})),n="";c.forEach((function(e){"1"===e[a]&&(n+="- ",n+=e.Policy,n+="\n")})),console.log(n);var s=t.filter((function(e){return"Mobility"===e.Domain})),r="";s.forEach((function(e){"1"===e[a]&&(r+="- ",r+=e.Policy,r+="\n")}));var i=t.filter((function(e){return"Testing"===e.Domain})),l="";i.forEach((function(e){"1"===e[a]&&(l+="- ",l+=e.Policy,l+="\n")}));var o=t.filter((function(e){return"Closures"===e.Domain})),d="";o.forEach((function(e){"1"===e[a]&&(d+="- ",d+=e.Policy,d+="\n")}));var h=t.filter((function(e){return"Contact Tracing"===e.Domain})),u="";h.forEach((function(e){"1"===e[a]&&(u+="- ",u+=e.Policy,u+="\n")}));var j=t.filter((function(e){return"Communication"===e.Domain})),m="";j.forEach((function(e){"1"===e[a]&&(m+="- ",m+=e.Policy,m+="\n")}));var b=t.filter((function(e){return"Data"===e.Domain})),f="";b.forEach((function(e){"1"===e[a]&&(f+="- ",f+=e.Policy,f+="\n")}));var v=t.filter((function(e){return"Public Leadership"===e.Domain})),p="";v.forEach((function(e){"1"===e[a]&&(p+="- ",p+=e.Policy,p+="\n")}));var C=t.filter((function(e){return"Vaccinations"===e.Domain})),N="";C.forEach((function(e){"1"===e[a]&&(N+="- ",N+=e.Policy,N+="\n")}));var S=t.filter((function(e){return"Gatherings"===e.Domain})),k="";S.forEach((function(e){"1"===e[a]&&(k+="- ",k+=e.Policy,k+="\n")}));var I=t.filter((function(e){return"Mask Wearing and Ventilation"===e.Domain})),_="";I.forEach((function(e){"1"===e[a]&&(_+="- ",_+=e.Policy,_+="\n")}));var T=t.filter((function(e){return"Physical Distancing and Hygiene"===e.Domain})),D="";return T.forEach((function(e){"1"===e[a]&&(D+="- ",D+=e.Policy,D+="\n")})),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("div",{className:"heading jumbotron-fluid",style:{backgroundColor:"black"},children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("h1",{className:"display-4",children:this.state.city})})}),Object(O.jsx)("div",{className:"dropdown",children:Object(O.jsxs)(y.a,{children:[Object(O.jsx)(y.a.Toggle,{variant:"secondary",id:"dropdown-basic",children:this.state.city}),Object(O.jsxs)(y.a.Menu,{children:[Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("East Godavari")},children:"East Godavari"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Kolhapur")},children:"Kolhapur"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Raipur")},children:"Raipur"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Srikakulam")},children:"Srikakulam"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Mysuru")},children:"Mysuru"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Varanasi")},children:"Varanasi"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Chittoor")},children:"Chittoor"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Tumakuru")},children:"Tumakuru"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Nagpur")},children:"Nagpur"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Nanded")},children:"Nanded"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Vellore")},children:"Vellore"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Sangli")},children:"Sangli"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Chitradurga")},children:"Chitradurga"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Ballari")},children:"Ballari"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Bareilly")},children:"Bareilly"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Nashik")},children:"Nashik"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Thane")},children:"Thane"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Visakhapatnam")},children:"Visakhapatnam"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Vadodara")},children:"Vadodara"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Rajkot")},children:"Rajkot"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Tiruvannamalai")},children:"Tiruvannamalai"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Aligarh")},children:"Aligarh"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Ghaziabad")},children:"Ghaziabad"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Vizianagaram")},children:"Vizianagaram"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Prakasam")},children:"Prakasam"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Lucknow")},children:"Lucknow"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Pune")},children:"Pune"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Jaipur")},children:"Jaipur"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Jalgaon")},children:"Jalgaon"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Ahmedabad")},children:"Ahmedabad"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Satara")},children:"Satara"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Belagavi")},children:"Belagavi"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Madurai")},children:"Madurai"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Guntur")},children:"Guntur"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Kancheepuram")},children:"Kancheepuram"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Solapur")},children:"Solapur"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Kurnool")},children:"Kurnool"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Surat")},children:"Surat"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Coimbatore")},children:"Coimbatore"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Palghar")},children:"Palghar"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("West Godavari")},children:"West Godavari"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Kanpur Nagar")},children:"Kanpur Nagar"}),Object(O.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Chennai")},children:"Chennai"})]})]})}),Object(O.jsxs)("div",{className:"date d-none d-lg-block",children:["on ",this.state.dateUpdated," 2021"]}),Object(O.jsx)("div",{className:"switch",children:Object(O.jsx)(x.a,{variant:"secondary",onClick:function(){return e.switchApproach()},children:"aggressive"===this.state.selectedType?"Switch to conservative":"Switch to aggressive"})}),Object(O.jsx)("div",{className:"first",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-md-6 d-none d-lg-block",children:Object(O.jsx)("div",{id:"metric",children:Object(O.jsx)(g.a,{data:this.state.plotsData,layout:this.state.plotLayout})})}),Object(O.jsx)("div",{className:"col-md-4 col-sm-8",children:Object(O.jsxs)("div",{className:"left",children:[Object(O.jsxs)("div",{className:"risk-card risk card",children:[Object(O.jsx)("div",{className:"card-header",children:Object(O.jsx)("h2",{className:"lead font-weight-bold",children:"Today's Risk Score"})}),Object(O.jsx)("div",{className:"risk card-body",style:{backgroundColor:"RED"===this.state.categoryToday?"rgb(255, 77, 77)":"YELLOW"===this.state.categoryToday?"#ffbf00":"ORANGE"===this.state.categoryToday?"#f2705c":"#eaeaec",fontWeight:"bold",textAlign:"center"},children:Object(O.jsx)("span",{className:"risk-text",children:"RED"===this.state.categoryToday?"HIGH RISK":"YELLOW"===this.state.categoryToday?"LOW RISK":"ORANGE"===this.state.categoryToday?"MEDIUM RISK":"INSUFFICIENT DATA TO CATEGORIZE"})})]}),Object(O.jsxs)("div",{className:"d-none d-lg-block last-changed-date",children:["Risk score last changed on ",this.state.lastChangeDate]}),Object(O.jsx)("div",{id:"status",children:Object(O.jsx)(g.a,{data:this.state.heatMapData,layout:this.state.heatMapLayout,config:this.state.heatMapConfig})}),Object(O.jsx)("div",{className:"d-none d-lg-block last-changed-text",children:"Status of last 90 days"})]})})]})}),Object(O.jsxs)("div",{className:"second",children:[Object(O.jsx)("h2",{className:"display-4 text-center",children:"Suggested Policy Actions"}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"action card",children:[Object(O.jsx)("div",{className:"card-header",style:{backgroundColor:"#d8e2dc"},children:Object(O.jsx)("p",{className:"lead",children:"Gatherings"})}),Object(O.jsx)("div",{className:"card-body",children:k})]})}),Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"action card",children:[Object(O.jsx)("div",{className:"card-header",style:{backgroundColor:"#d8e2dc"},children:Object(O.jsx)("p",{className:"lead",children:"Closures"})}),Object(O.jsx)("div",{className:"card-body",children:d})]})}),Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"action card",children:[Object(O.jsx)("div",{className:"card-header",style:{backgroundColor:"#d8e2dc"},children:Object(O.jsx)("p",{className:"lead",children:"Travel"})}),Object(O.jsx)("div",{className:"card-body",children:r})]})}),Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"action card",children:[Object(O.jsx)("div",{className:"card-header",style:{backgroundColor:"#fcd5ce"},children:Object(O.jsx)("p",{className:"lead",children:"Medical Preparedness"})}),Object(O.jsx)("div",{className:"card-body",children:n})]})}),Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"action card",children:[Object(O.jsx)("div",{className:"card-header",style:{backgroundColor:"#fcd5ce"},children:Object(O.jsx)("p",{className:"lead",children:"Testing"})}),Object(O.jsx)("div",{className:"card-body",children:l})]})}),Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"action card",children:[Object(O.jsx)("div",{className:"card-header",style:{backgroundColor:"#fcd5ce"},children:Object(O.jsx)("p",{className:"lead",children:"Vaccination"})}),Object(O.jsx)("div",{className:"card-body",children:N})]})}),Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"action card",children:[Object(O.jsx)("div",{className:"card-header",style:{backgroundColor:"#fcd5ce"},children:Object(O.jsx)("p",{className:"lead",children:"Contact Tracing"})}),Object(O.jsx)("div",{className:"card-body",children:u})]})}),Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"action card",children:[Object(O.jsx)("div",{className:"card-header",style:{backgroundColor:"#ffd7ba"},children:Object(O.jsx)("p",{className:"lead",children:"Communication "})}),Object(O.jsx)("div",{className:"card-body",children:m})]})}),Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"action card",children:[Object(O.jsx)("div",{className:"card-header",style:{backgroundColor:"#ffd7ba"},children:Object(O.jsx)("p",{className:"lead",children:"Data"})}),Object(O.jsx)("div",{className:"card-body",children:f})]})}),Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"action card",children:[Object(O.jsx)("div",{className:"card-header",style:{backgroundColor:"#ffd7ba"},children:Object(O.jsx)("p",{className:"lead",children:"Public Leadership"})}),Object(O.jsx)("div",{className:"card-body",children:p})]})}),Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"action card",children:[Object(O.jsx)("div",{className:"card-header",style:{backgroundColor:"#ffd7ba"},children:Object(O.jsx)("p",{className:"lead",children:"Mask Wearing and Ventilation"})}),Object(O.jsx)("div",{className:"card-body",children:_})]})}),Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsxs)("div",{className:"action card",children:[Object(O.jsx)("div",{className:"card-header",style:{backgroundColor:"#ffd7ba"},children:Object(O.jsx)("p",{className:"lead",children:"Physical Distancing and Hygiene"})}),Object(O.jsx)("div",{className:"card-body",children:D})]})})]})]})]})}}]),a}(c.Component),p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,104)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),p()}},[[97,1,2]]]);
//# sourceMappingURL=main.5f034594.chunk.js.map