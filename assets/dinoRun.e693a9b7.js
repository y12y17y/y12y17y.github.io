import{_ as u,o as c,c as y,a as n,t as _}from"./index.598232f6.js";var f="/assets/back.1ced0455.png",b="/assets/trex.9191a30b.png";var l=[-30,-50,-63,-70,-75,-78,-80,-80,-80,-78,-75,-70,-63,-50,-30,0],a=!1,p=1,r=0;const v={name:"dr",created(){window.addEventListener("keydown",this.handleKeyDown)},beforeDestroy(){window.removeEventListener("keydown",this.handleKeyDown)},data(){return{count:0}},methods:{handleKeyDown(s){if(s.key==" "&&r==1){var t=0;if(t==0&&a==!1){a=!0,t=Number(document.getElementsByName("char")[0].style.top.split("px")[0]);for(var e=0;e<=l.length;e++)(function(o){setTimeout(function(){o!=l.length?document.getElementsByName("char")[0].style.top=t+l[o]+"px":(t=0,a=!1)},o*50)})(e)}}},plusCnt(){this.count++},btnPlay(){document.getElementsByName("btnStart")[0].style.display="none",r=1;var s=this;p=5;for(var t=Number(document.getElementsByName("obj")[0].style.left.split("px")[0]),e=1,o=0;o<=1e4;o++)(function(m){setTimeout(function(){t>0?(document.getElementsByName("obj")[0].style.left=Number(document.getElementsByName("obj")[0].style.left.split("px")[0])-p+"px",t=Number(document.getElementsByName("obj")[0].style.left.split("px")[0]),t<331&&t>290&&e==1&&(a?(e=0,s.plusCnt()):(r=2,document.getElementsByName("obj")[0].style.background="rgba(0,0,0,0)",document.getElementsByName("btnStart")[0].style.display="none",$("#char").addClass("animate__animated animate__fadeOutUp")))):(document.getElementsByName("obj")[0].style.left="840px",p=Math.random()*(20-5)+5,e=1),t=Number(document.getElementsByName("obj")[0].style.left.split("px")[0])},m*20)})(o)},btnJump(){if(r==1){var s=0;if(s==0&&a==!1){a=!0,s=Number(document.getElementsByName("char")[0].style.top.split("px")[0]);for(var t=0;t<=l.length;t++)(function(e){setTimeout(function(){e!=l.length?document.getElementsByName("char")[0].style.top=s+l[e]+"px":(s=0,a=!1)},e*50)})(t)}}}}},g={id:"dr",style:{"margin-top":"34px"}},h=n("div",{style:{position:"absolute"}},"verion 0.0.5",-1),x={class:"card"},N={class:"score card__content"},B=n("div",null,[n("img",{src:f,style:{width:"840px",position:"relative"}})],-1),E=n("div",{name:"obj",style:{background:"rgba(0, 0, 0, 0.5)",width:"10px",height:"10px",position:"absolute",top:"350px",left:"830px"}},null,-1),w=n("div",{name:"char",id:"char",style:{position:"absolute",top:"317px",left:"300px"}},[n("img",{src:b,style:{width:"60px"}})],-1),j=n("span",{class:"button_top"}," Start ",-1),k=[j],C=n("span",{class:"button_top"}," Jump ",-1),D=[C];function J(s,t,e,o,m,i){return c(),y("div",g,[h,n("div",x,[n("div",N,_(m.count),1)]),B,E,w,n("button",{name:"btnStart",style:{position:"absolute",top:"415px",left:"690px"},onClick:t[0]||(t[0]=(...d)=>i.btnPlay&&i.btnPlay(...d))},k),n("button",{name:"btnJump",style:{position:"absolute",top:"415px",left:"30px"},onClick:t[1]||(t[1]=(...d)=>i.btnJump&&i.btnJump(...d))},D)])}var S=u(v,[["render",J]]);export{S as default};
