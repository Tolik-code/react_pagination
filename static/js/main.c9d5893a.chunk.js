(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(2),l=a.n(r),o=a(3),s=a(4),c=a(6),g=a(5),u=(a(12),a(13),function(e){for(var t=e.prevPage,a=e.nextPage,n=e.total,r=e.firstVisiblePage,l=e.withInfo,o=e.onPageChange,s=e.page,c=e.perPage,g=[],u=function(e){return i.a.createElement("button",{className:e===+s?"list-page--active list-page":"list-page",type:"button",onClick:function(){e!==+s&&o(e)}},e)},p=r;p<=r+c-1;p++){var P=p;if(g.push(i.a.createElement("li",{key:P},u(P))),n<p+1)break}var f=function(e,t){g.splice(e,0,i.a.createElement("li",null,u(t)))};return 1!==r&&(f(0,"..."),f(0,1)),n>r+c&&(f(g.length,"..."),f(g.length,n)),i.a.createElement(i.a.Fragment,null,l&&i.a.createElement("h2",null,"".concat(r," - \n          ").concat(r+c-1>n?n:r+c-1,"\n          of ").concat(n)),i.a.createElement("button",{type:"button",onClick:t,className:"list-bottom",disabled:1===r},"prev"),i.a.createElement("ul",{className:"list-pages"},g.map((function(e){return e}))),i.a.createElement("button",{type:"button",onClick:a,className:"list-bottom",disabled:r+c>n},"next"))});u.defaultProps={withInfo:!0};var p=function(e){Object(c.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={selectedPage:1,firstVisiblePage:1,total:42,perPage:5,withInfo:!0},e.nextPage=function(){e.state.firstVisiblePage+e.state.perPage>e.state.total||e.setState((function(e){return{firstVisiblePage:e.firstVisiblePage+e.perPage}}))},e.prevPage=function(){1!==e.state.firstVisiblePage&&e.setState((function(e){return{firstVisiblePage:e.firstVisiblePage-e.perPage<1?1:e.firstVisiblePage-e.perPage}}))},e.onPageChange=function(t){e.setState({selectedPage:t})},e.onPerPageChange=function(t){var a=t.target;+a.value!==e.state.perPage&&e.setState({perPage:+a.value})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.total,a=e.perPage,n=e.firstVisiblePage,r=e.withInfo;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Pagination"),i.a.createElement("select",{value:a,onChange:this.onPerPageChange},i.a.createElement("option",{value:"3"},"3"),i.a.createElement("option",{value:"5"},"5"),i.a.createElement("option",{value:"10"},"10"),i.a.createElement("option",{value:"20"},"20")),i.a.createElement(u,{firstVisiblePage:n,prevPage:this.prevPage,nextPage:this.nextPage,onPageChange:this.onPageChange,total:t,perPage:a,page:this.state.selectedPage,withInfo:r}))}}]),a}(i.a.Component);l.a.render(i.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.c9d5893a.chunk.js.map