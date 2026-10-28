(()=>{
"use strict";
const canvas=document.getElementById("game"),c=canvas.getContext("2d"),W=900,H=600;
const mode=new URLSearchParams(location.search).get("game")||document.body.dataset.game||"city-builder";
const names={"fishing-game":"Fishing Adventure","city-builder":"City Builder","number-merge-sfml":"Number Merge 2048","multiplayer-quiz":"Quiz Multiplayer","2d-racing":"Neon Racer","dungeon-explorer":"Dungeon Explorer","2d-platformer-sfml":"2D Platformer","space-shooter-console":"Space Shooter Console","farming-simulator":"Farming Simulator","billiards-simulator":"Billiards Simulator","rhythm-tap":"Rhythm Tap Game","solar-system":"Solar System Simulator","tower-defense":"Tower Defense","chess-game":"Chess Game","block-puzzle":"Block Puzzle"};
const $=q=>document.querySelector(q); $("#game-title").textContent=names[mode]||"Jogo";
document.title=(names[mode]||"Arcade")+" | Algorithm Arch";
const keys=new Set();let scene=null,last=0,paused=false;
const R=(a,b)=>Math.random()*(b-a)+a,ri=(a,b)=>Math.floor(R(a,b+1)),pick=a=>a[ri(0,a.length-1)],clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function fill(x,y,w,h,color,r=0){c.fillStyle=color;if(r){c.beginPath();c.roundRect(x,y,w,h,r);c.fill()}else c.fillRect(x,y,w,h)}
function stroke(x,y,w,h,color,r=0,weight=2){c.strokeStyle=color;c.lineWidth=weight;if(r){c.beginPath();c.roundRect(x,y,w,h,r);c.stroke()}else c.strokeRect(x,y,w,h)}
function text(t,x,y,size=20,color="#eef6ff",align="left",weight=600){c.fillStyle=color;c.textAlign=align;c.textBaseline="middle";c.font=weight+" "+size+"px system-ui,Segoe UI,sans-serif";c.fillText(String(t),x,y)}
function line(x,y,x2,y2,color,width=2){c.strokeStyle=color;c.lineWidth=width;c.beginPath();c.moveTo(x,y);c.lineTo(x2,y2);c.stroke()}
function circle(x,y,r,color){c.fillStyle=color;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill()}
function base(title,subtitle){let g=c.createLinearGradient(0,0,W,H);g.addColorStop(0,"#081528");g.addColorStop(1,"#112947");fill(0,0,W,H,g);fill(0,0,W,57,"#111f36");text(title,24,28,26,"#f3f7ff");text(subtitle,875,29,13,"#a2d9e4","right",500)}
function panel(x,y,w,h,label){fill(x,y,w,h,"#162a44",13);stroke(x,y,w,h,"#304b67",13);if(label)text(label,x+16,y+21,17,"#aed0e4")}
function button(x,y,w,h,label,active=false){fill(x,y,w,h,active?"#157f85":"#23405d",10);stroke(x,y,w,h,active?"#78ecd6":"#4a7592",10);text(label,x+w/2,y+h/2,18,"#ecfbff","center")}
function overlay(title,sub){fill(155,205,590,180,"#0a1728ed",17);stroke(155,205,590,180,"#6bc6d1",17,3);text(title,450,270,38,"#f8f0cb","center");text(sub,450,326,19,"#ccdeed","center")}
function inside(x,y,rx,ry,rw,rh){return x>=rx&&x<=rx+rw&&y>=ry&&y<=ry+rh}
function rndStars(n=65){return Array.from({length:n},()=>({x:R(0,W),y:R(60,H),r:R(.5,2.3)}))}
const scenes={};window.Arcade={c,W,H,keys,fill,stroke,text,line,circle,base,panel,button,overlay,inside,R,ri,pick,clamp,scenes};
function start(){scene=scenes[mode]?scenes[mode]():scenes["city-builder"]();scene.reset();$("#help").textContent=scene.help||"Use as setas e toque na tela";last=performance.now();requestAnimationFrame(loop)}
function loop(t){let dt=Math.min(.042,Math.max(0,(t-last)/1000));last=t;try{if(!paused)scene.update?.(dt);scene.draw()}catch(e){console.error(e);base("Erro no jogo",e.message);overlay("Não foi possível continuar","Clique em Reiniciar")}requestAnimationFrame(loop)}
window.addEventListener("keydown",e=>{const k=e.key.toLowerCase();if(["arrowup","arrowdown","arrowleft","arrowright"," ","enter"].includes(k))e.preventDefault();keys.add(k);if(!e.repeat){if(k==="p"){paused=!paused;$("#pause").textContent=paused?"Continuar":"Pausar"}else if(k==="r")scene.reset();else scene.key?.(k)}});
window.addEventListener("keyup",e=>keys.delete(e.key.toLowerCase()));
window.addEventListener("blur",()=>keys.clear());
canvas.addEventListener("pointerdown",e=>{const b=canvas.getBoundingClientRect();const x=(e.clientX-b.left)/b.width*W,y=(e.clientY-b.top)/b.height*H;scene.pointer?.(x,y);});
const pad=document.querySelectorAll("[data-key]");
pad.forEach(b=>{const k=b.dataset.key;b.addEventListener("pointerdown",e=>{e.preventDefault();b.setPointerCapture(e.pointerId);keys.add(k);scene.key?.(k)});const off=()=>keys.delete(k);b.addEventListener("pointerup",off);b.addEventListener("pointercancel",off);b.addEventListener("lostpointercapture",off)});
$("#restart").onclick=()=>{paused=false;$("#pause").textContent="Pausar";scene.reset()};
$("#pause").onclick=()=>{paused=!paused;$("#pause").textContent=paused?"Continuar":"Pausar"};
window.addEventListener("load",start);
})();
