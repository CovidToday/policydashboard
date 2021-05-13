(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{46:function(e,a,t){},48:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var c=t(0),s=t.n(c),i=t(8),n=t.n(i),r=(t(46),t(14)),l=t.n(r),d=t(33),o=t(34),h=t(35),j=t(41),m=t(40),b=(t.p,t(48),t(49),t(36)),u=t.n(b),g=t(15),x=t.n(g),f=t(16),v=t.n(f),y=t(98),p=t(1),O=function(e){Object(j.a)(t,e);var a=Object(m.a)(t);function t(e){var c;return Object(o.a)(this,t),(c=a.call(this,e)).state={cardsData:[],dataFromJson:{},heatmapFromJson:{},plotsData:[],plotLayout:[],heatMapData:[],heatMapLayout:[],heatMapConfig:[],categoryToday:"",city:"",dateUpdated:"",lastChangeDate:""},c}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;u.a.init({key:"1-VF4_JFPZ5-mZGqdx0y0X_9CIc6WY-RMzeQjvxXNvZE",callback:function(a){console.log("google sheet data ---\x3e",a),e.setState({cardsData:a})},simpleSheet:!0}),this.getData()}},{key:"getData",value:function(){var e=Object(d.a)(l.a.mark((function e(){var a,t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://raw.githubusercontent.com/aberrantdoc/policydashboard/master/district_data/actual.json").then((function(e){t.setState({dataFromJson:e.data})}));case 2:return e.next=4,x.a.get("https://raw.githubusercontent.com/aberrantdoc/policydashboard/master/district_data/demo.json").then((function(e){t.setState({heatmapFromJson:e.data})}));case 4:a=[],(a=this.state.dataFromJson&&Object.keys(this.state.dataFromJson)).pop(),this.setState({city:a[0]}),this.setData(a[0]);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setData",value:function(e){var a=this.state.dataFromJson,t=this.state.heatmapFromJson;if(a){var c=[{type:"indicator",mode:"number+gauge",value:a[e].pct_ICU[a[e].pct_ICU.length-1],domain:{x:[.5,1.5],y:[.05,.15]},title:{text:"ICU Vacancy (%)  "},gauge:{shape:"bullet",axis:{range:[null,100]},threshold:{line:{color:"3d3d5c",width:2},thickness:.75,value:a[e].pct_ICU[a[e].pct_ICU.length-14]},steps:[{range:[0,40],color:"ff4d4d"},{range:[40,80],color:"FFBF00"},{range:[80,100],color:"238823"}],bar:{color:"1f1f2e"}}},{type:"indicator",mode:"number+gauge",value:a[e].daily_tests_per_million_14ma[a[e].daily_tests_per_million_14ma.length-1],domain:{x:[.5,1.5],y:[.22,.32]},title:{text:"Tests Per Million  "},gauge:{shape:"bullet",axis:{range:[null,5e3]},threshold:{line:{color:"3d3d5c",width:2},thickness:.75,value:a[e].daily_tests_per_million_14ma[a[e].daily_tests_per_million_14ma.length-14]},steps:[{range:[0,140],color:"ff4d4d"},{range:[140,5e3],color:"238823"}],bar:{color:"1f1f2e"}}},{type:"indicator",mode:"number+gauge",value:a[e].TPR[a[e].TPR.length-1],domain:{x:[.5,1.5],y:[.39,.49]},title:{text:"Tests Positivity (%)  "},gauge:{shape:"bullet",axis:{range:[null,100]},threshold:{line:{color:"3d3d5c",width:2},thickness:.75,value:a[e].TPR[a[e].TPR.length-14]},steps:[{range:[0,5],color:"238823"},{range:[5,10],color:"FFBF00"},{range:[10,100],color:"ff4d4d"}],bar:{color:"1f1f2e"}}},{type:"indicator",mode:"number+gauge",value:a[e].rate_increase_new_cases[a[e].rate_increase_new_cases.length-1],domain:{x:[.5,1.5],y:[.56,.66]},title:{text:"Case Growth Rate (%)  "},gauge:{shape:"bullet",axis:{range:[-50,100]},threshold:{line:{color:"3d3d5c",width:2},thickness:.75,value:a[e].rate_increase_new_cases[a[e].rate_increase_new_cases.length-14]},steps:[{range:[-50,2],color:"238823"},{range:[2,5],color:"FFBF00"},{range:[5,100],color:"ff4d4d"}],bar:{color:"1f1f2e"}}},{type:"indicator",mode:"number+gauge",value:a[e].daily_cases_per_million[a[e].daily_cases_per_million.length-1],domain:{x:[.5,1.5],y:[.73,.83]},title:{text:"Cases Per Million  "},gauge:{shape:"bullet",axis:{range:[null,2e3]},threshold:{line:{color:"3d3d5c",width:2},thickness:.75,value:a[e].daily_cases_per_million[a[e].daily_cases_per_million.length-14]},steps:[{range:[0,20],color:"238823"},{range:[20,100],color:"FFBF00"},{range:[100,2e3],color:"ff4d4d"}],bar:{color:"1f1f2e"}}}],s=t[e].category,i=[{z:[(s=(s=(s=(s=s.map((function(e){return e.replace("GRAY",3)}))).map((function(e){return e.replace("YELLOW",2)}))).map((function(e){return e.replace("GREEN",1)}))).map((function(e){return e.replace("RED",0)}))).slice(s.length-90)],colorscale:[[0,"rgb(255, 77, 77)"],[.33,"rgb(255, 77, 77)"],[.33,"#238823"],[.67,"#238823"],[.67,"#ffbf00"],[1,"#ffbf00"]],type:"heatmap",showscale:!1,y:[" "]}],n=a[e].category[a[e].category.length-1],r=a[e].dates[a[e].dates.length-1],l=t[e].is_change,d=l[l.length-1],o=l.reverse().findIndex((function(e){return e!==d}));l.reverse();var h=t[e].dates,j=h.reverse()[o];h.reverse(),this.setState({plotsData:c,plotLayout:{width:800,height:500,margin:{t:10,r:25,l:25,b:10}},heatMapData:i,heatMapLayout:{width:500,height:50,margin:{t:10,r:25,l:25,b:10}},heatMapConfig:{responsive:!0},categoryToday:n,dateUpdated:r,lastChangeDate:j})}}},{key:"selectCity",value:function(e){this.setState({city:e}),this.setData(e)}},{key:"render",value:function(){var e=this,a=this.state.cardsData,t=this.state.categoryToday&&this.state.categoryToday.toLowerCase().charAt(0).toUpperCase()+this.state.categoryToday.toLowerCase().slice(1),c=a.filter((function(e){return"Medical Preparedness"===e.Domain})),s="";c.forEach((function(e){"1"===e[t]&&(s+="- ",s+=e.Policy,s+="\n")})),console.log(s);var i=a.filter((function(e){return"Mobility"===e.Domain})),n="";i.forEach((function(e){"1"===e[t]&&(n+="- ",n+=e.Policy,n+="\n")}));var r=a.filter((function(e){return"Testing"===e.Domain})),l="";r.forEach((function(e){"1"===e[t]&&(l+="- ",l+=e.Policy,l+="\n")}));var d=a.filter((function(e){return"Closures"===e.Domain})),o="";d.forEach((function(e){"1"===e[t]&&(o+="- ",o+=e.Policy,o+="\n")}));var h=a.filter((function(e){return"Contact Tracing"===e.Domain})),j="";h.forEach((function(e){"1"===e[t]&&(j+="- ",j+=e.Policy,j+="\n")}));var m=a.filter((function(e){return"Communication"===e.Domain})),b="";m.forEach((function(e){"1"===e[t]&&(b+="- ",b+=e.Policy,b+="\n")}));var u=a.filter((function(e){return"Data"===e.Domain})),g="";u.forEach((function(e){"1"===e[t]&&(g+="- ",g+=e.Policy,g+="\n")}));var x=a.filter((function(e){return"Public Leadership"===e.Domain})),f="";x.forEach((function(e){"1"===e[t]&&(f+="- ",f+=e.Policy,f+="\n")}));var O=a.filter((function(e){return"Vaccinations"===e.Domain})),N="";O.forEach((function(e){"1"===e[t]&&(N+="- ",N+=e.Policy,N+="\n")}));var _=a.filter((function(e){return"Gatherings"===e.Domain})),D="";_.forEach((function(e){"1"===e[t]&&(D+="- ",D+=e.Policy,D+="\n")}));var C=a.filter((function(e){return"Mask Wearing and Ventilation"===e.Domain})),k="";C.forEach((function(e){"1"===e[t]&&(k+="- ",k+=e.Policy,k+="\n")}));var E=a.filter((function(e){return"Physical Distancing and Hygiene"===e.Domain})),T="";return E.forEach((function(e){"1"===e[t]&&(T+="- ",T+=e.Policy,T+="\n")})),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{className:"heading jumbotron-fluid",style:{backgroundColor:"black"},children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("h1",{className:"display-4",children:this.state.city})})}),Object(p.jsx)("div",{className:"dropdown",children:Object(p.jsxs)(y.a,{children:[Object(p.jsx)(y.a.Toggle,{variant:"secondary",id:"dropdown-basic",children:this.state.city}),Object(p.jsxs)(y.a.Menu,{children:[Object(p.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Delhi")},children:"Delhi"}),Object(p.jsx)(y.a.Item,{onSelect:function(){return e.selectCity("Chandigarh")},children:"Chandigarh"})]})]})}),Object(p.jsxs)("div",{className:"date d-none d-lg-block",children:["Data shown for ",this.state.dateUpdated]}),Object(p.jsx)("div",{className:"first",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-6 d-none d-lg-block",children:Object(p.jsx)("div",{id:"metric",children:Object(p.jsx)(v.a,{data:this.state.plotsData,layout:this.state.plotLayout})})}),Object(p.jsx)("div",{className:"col-md-4 col-sm-8",children:Object(p.jsxs)("div",{className:"left",children:[Object(p.jsxs)("div",{className:"risk-card risk card",children:[Object(p.jsx)("div",{className:"card-header",children:Object(p.jsx)("h2",{className:"lead font-weight-bold",children:"Today's Risk Score"})}),Object(p.jsx)("div",{className:"risk card-body",style:{backgroundColor:"RED"===this.state.categoryToday?"rgb(255, 77, 77)":"GREEN"===this.state.categoryToday?"#238823":"YELLOW"===this.state.categoryToday?"#ffbf00":"#eaeaec",fontWeight:"bold",textAlign:"center"},children:Object(p.jsx)("span",{className:"risk-text",children:"RED"===this.state.categoryToday?"HIGH RISK":"GREEN"===this.state.categoryToday?"LOW RISK":"YELLOW"===this.state.categoryToday?"MEDIUM RISK":"INSUFFICIENT DATA TO CATEGORIZE"})})]}),Object(p.jsxs)("div",{className:"d-none d-lg-block last-changed-date",children:["Status last changed on ",this.state.lastChangeDate]}),Object(p.jsx)("div",{id:"status",children:Object(p.jsx)(v.a,{data:this.state.heatMapData,layout:this.state.heatMapLayout,config:this.state.heatMapConfig})})]})})]})}),Object(p.jsxs)("div",{className:"second",children:[Object(p.jsx)("h2",{className:"display-4 text-center",children:"Suggested Actions"}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsxs)("div",{className:"action card",children:[Object(p.jsx)("div",{className:"card-header",children:Object(p.jsx)("p",{className:"lead",children:"Medical Preparedness"})}),Object(p.jsx)("div",{className:"card-body",children:s})]})}),Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsxs)("div",{className:"action card",children:[Object(p.jsx)("div",{className:"card-header",children:Object(p.jsx)("p",{className:"lead",children:"Mobility"})}),Object(p.jsx)("div",{className:"card-body",children:n})]})}),Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsxs)("div",{className:"action card",children:[Object(p.jsx)("div",{className:"card-header",children:Object(p.jsx)("p",{className:"lead",children:"Testing"})}),Object(p.jsx)("div",{className:"card-body",children:l})]})}),Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsxs)("div",{className:"action card",children:[Object(p.jsx)("div",{className:"card-header",children:Object(p.jsx)("p",{className:"lead",children:"Closures"})}),Object(p.jsx)("div",{className:"card-body",children:o})]})}),Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsxs)("div",{className:"action card",children:[Object(p.jsx)("div",{className:"card-header",children:Object(p.jsx)("p",{className:"lead",children:"Contact Tracking"})}),Object(p.jsx)("div",{className:"card-body",children:j})]})}),Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsxs)("div",{className:"action card",children:[Object(p.jsx)("div",{className:"card-header",children:Object(p.jsx)("p",{className:"lead",children:"Communication"})}),Object(p.jsx)("div",{className:"card-body",children:b})]})}),Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsxs)("div",{className:"action card",children:[Object(p.jsx)("div",{className:"card-header",children:Object(p.jsx)("p",{className:"lead",children:"Data"})}),Object(p.jsx)("div",{className:"card-body",children:g})]})}),Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsxs)("div",{className:"action card",children:[Object(p.jsx)("div",{className:"card-header",children:Object(p.jsx)("p",{className:"lead",children:"Public Leadership"})}),Object(p.jsx)("div",{className:"card-body",children:f})]})}),Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsxs)("div",{className:"action card",children:[Object(p.jsx)("div",{className:"card-header",children:Object(p.jsx)("p",{className:"lead",children:"Vaccinations"})}),Object(p.jsx)("div",{className:"card-body",children:N})]})}),Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsxs)("div",{className:"action card",children:[Object(p.jsx)("div",{className:"card-header",children:Object(p.jsx)("p",{className:"lead",children:"Gathering"})}),Object(p.jsx)("div",{className:"card-body",children:D})]})}),Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsxs)("div",{className:"action card",children:[Object(p.jsx)("div",{className:"card-header",children:Object(p.jsx)("p",{className:"lead",children:"Mask wearing and ventilation"})}),Object(p.jsx)("div",{className:"card-body",children:k})]})}),Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsxs)("div",{className:"action card",children:[Object(p.jsx)("div",{className:"card-header",children:Object(p.jsx)("p",{className:"lead",children:"Physical Distancing and Hygine"})}),Object(p.jsx)("div",{className:"card-body",children:T})]})})]})]})]})}}]),t}(c.Component),N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,99)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,i=a.getLCP,n=a.getTTFB;t(e),c(e),s(e),i(e),n(e)}))};n.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),N()}},[[92,1,2]]]);
//# sourceMappingURL=main.2990415e.chunk.js.map