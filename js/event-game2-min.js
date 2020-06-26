import{Timer}from"./timer.js";import{playSound,stopSound,playLowSound}from"./sound-functions.js";export function listenGame2Events(e){const t=document.getElementById("immune-system"),o=document.getElementById("pourcentage"),n=document.getElementById("nose"),s=document.getElementsByClassName("game-over-or-next-game")[0],i=document.getElementsByClassName("game-over-or-next-game")[1],r=document.getElementById("btn-play-again"),l=document.getElementById("btn-next-game"),m=document.getElementsByClassName("virus-green")[0],d=document.getElementsByClassName("virus-green")[1],a=document.getElementsByClassName("virus-purple")[0],u=document.getElementsByClassName("virus-purple")[1],c=document.getElementsByClassName("virus-blue")[0],g=document.getElementsByClassName("virus-blue")[1],v=document.getElementsByClassName("antidote")[0],y=document.getElementById("wind"),p=document.getElementById("atchoum"),h=document.getElementById("death"),w=document.getElementById("countdown");let M=document.getElementById("minDec"),A=document.getElementById("minUni"),E=document.getElementById("secDec"),I=document.getElementById("secUni"),B=Number(localStorage.getItem("score")),f=1,S=15;function C(){var e,t;e=x.twoDigitsNumber(x.getMinutes()),M.textContent=e[0],A.textContent=e[1],t=x.twoDigitsNumber(x.getSeconds()),E.textContent=t[0],I.textContent=t[1]}t.style.width=`${B}%`,o.innerHTML=`${B}%`;var x=new Timer(45);class N{constructor(e,t,o,n=1e3,s){this.points=e,this.rowVorA=t,this.columnVorA=o,this.interval=n,this.element=s,this.intervalId=0}virusOrAntidoteMove(){this.intervalId=setInterval(()=>{this.rowVorA>=15?(this.rowVorA=1,this.columnVorA=1+Math.floor(16*Math.random())):this.rowVorA+=1,this.element.style.gridColumn=`${this.columnVorA}`,this.element.style.gridRow=`${this.rowVorA}`},this.interval)}stopMoving(){clearInterval(this.intervalId)}collision(){return f!=this.columnVorA||S!=this.rowVorA||(B+this.points>=100?(B=100,t.style.width=`${B}%`,o.innerHTML=`${B}%`):(B+=this.points,t.style.width=`${B}%`,o.innerHTML=`${B}%`),playSound(p),!1)}destroySelf(){delete this.points,delete this.rowVorA,delete this.columnVorA,delete this.interval,delete this.element,delete this.intervalId}}let V=new N(-5,2,2,40,m),L=new N(-5,3,2,40,d),$=new N(-10,10,5,40,a),T=new N(-10,6,10,40,u),b=new N(-15,6,10,40,c),O=new N(-15,6,10,40,g),k=new N(5,6,10,40,v);function q(){i.classList.remove("game-over-or-next-game"),i.classList.add("game-over-or-next-game-display"),n.style.display="none",V.stopMoving(),L.stopMoving(),$.stopMoving(),T.stopMoving(),b.stopMoving(),O.stopMoving(),k.stopMoving(),stopSound(y)}document.onkeydown=function(){switch(window.event.keyCode){case 37:f<=1?f=1:f--,n.style.gridColumn=`${f}`;break;case 39:f>=16?f=16:f++,n.style.gridColumn=`${f}`}},r.onclick=function(){window.location.href="index.html"},l.onclick=function(){localStorage.setItem("scoreGame2",B),e(3)},requestAnimationFrame(function e(t){var o=!0;!1===(o=(o=(o=(o=(o=(o=(o=o&&V.collision())&&L.collision())&&$.collision())&&T.collision())&&b.collision())&&O.collision())&&k.collision())?window.setTimeout(()=>{requestAnimationFrame(e)},500):requestAnimationFrame(e)}),requestAnimationFrame(function e(t){var i=!0;!1===(i=i&&!(B<1&&(B=0,o.innerHTML="0%",s.classList.remove("game-over-or-next-game"),s.classList.add("game-over-or-next-game-display"),n.style.display="none",V.stopMoving(),L.stopMoving(),$.stopMoving(),T.stopMoving(),b.stopMoving(),O.stopMoving(),k.stopMoving(),clearInterval(x.intervalId),V.destroySelf(),L.destroySelf(),$.destroySelf(),T.destroySelf(),b.destroySelf(),O.destroySelf(),k.destroySelf(),stopSound(y),playLowSound(h),1)))||requestAnimationFrame(e)}),playSound(w),setTimeout(()=>{V.virusOrAntidoteMove(),L.virusOrAntidoteMove(),$.virusOrAntidoteMove(),T.virusOrAntidoteMove(),b.virusOrAntidoteMove(),O.virusOrAntidoteMove(),k.virusOrAntidoteMove(),x.startTimer(C,q),playSound(y)},5e3)}