(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),l=n.n(c),o=(n(18),n(4)),s=n(5),i=n(7),u=n(6),h=n(8),m=(n(20),n(2),function(e){var t=e.list;return r.a.createElement("div",null,t.map(function(e){var t=e.name,n=e.image,a=e.salePrice,c=e.sku,l=e.url;return r.a.createElement("div",{className:"tc f7 lh-title bg-gray dib pa3 ma2 grow bw2 shadow-5 w-10"},r.a.createElement("a",{href:l},r.a.createElement("img",{className:"h4",src:n,alt:"Lens"})),r.a.createElement("h2",null,t," "),r.a.createElement("h2",null,a," "),r.a.createElement("h3",null,c))}))}),f=function(e){var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{type:"search",placeholder:"Search for a lens",onChange:t}))},d=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).onSearchChange=function(e){n.setState({searchfield:e.target.value}),console.log(e),console.log(2)},n.state={list:[],searchfield:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.bestbuy.com/v1/products((search=Lens)&manufacturer=sony&name=e-mount*)?apiKey=n6AZysP6mrFp3ljQjiVlvYCQ&sort=name.asc&show=name,image,salePrice,sku,url&pageSize=100&format=json").then(function(e){return e.json()}).then(function(t){e.setState({list:t.products})})}},{key:"render",value:function(){var e=this,t=this.state.list.filter(function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return r.a.createElement("div",null,r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(m,{list:t}))}}]),t}(r.a.Component),g=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,24)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),c(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null))),g()},9:function(e,t,n){e.exports=n(23)}},[[9,3,2]]]);
//# sourceMappingURL=main.2097f7ba.chunk.js.map