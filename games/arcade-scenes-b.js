(()=>{
const {c,W,H,keys,fill,stroke,text,line,circle,base,panel,button,overlay,inside,R,ri,pick,clamp,scenes}=window.Arcade;
scenes["multiplayer-quiz"]=()=>({
help:"Dois jogadores no mesmo aparelho: escolha A/B/C/D por toque ou teclado. Pressione Enter para avançar.",
questions:[
["Qual planeta é conhecido como planeta vermelho?",["Vênus","Marte","Júpiter","Saturno"],1],
["Qual linguagem executa no navegador?",["SQL","C++","JavaScript","Assembly"],2],
["Quanto é 7 × 8?",["54","56","64","58"],1],
["Qual destes é um oceano?",["Saara","Pacífico","Andes","Cáspio"],1],
["Qual é a capital do Brasil?",["Salvador","Brasília","Recife","São Paulo"],1],
["Qual tecla costuma mover para cima?",["W","Z","Q","X"],0],
["O que significa HTML?",["HyperText Markup Language","Home Tool Modern Link","High Tech Media Logic","Hyper Time Main List"],0],
["Quantos lados tem um hexágono?",["5","7","8","6"],3],
["Qual destes é um banco de dados?",["CSS","SQLite","PNG","HTTP"],1],
["Qual componente executa instruções?",["CPU","SSD","Monitor","Teclado"],0],
["Qual símbolo representa porcentagem?",["#","@","%","&"],2],
["Quanto é 12 + 19?",["29","31","33","41"],1]],
reset(){this.questions=this.questions.sort(()=>Math.random()-.5);this.index=0;this.scores=[0,0];this.answered=false;this.selected=-1;this.feedback="";this.finished=false;this.player=0},
answer(n){if(this.answered||this.finished||n<0||n>3)return;this.selected=n;this.answered=true;let ok=n===this.questions[this.index][2];if(ok)this.scores[this.player]+=10;this.feedback=ok?"CORRETO! +10":"RESPOSTA INCORRETA"},
next(){if(!this.answered){return}this.index++;if(this.index>=this.questions.length){this.finished=true}else{this.player=1-this.player;this.answered=false;this.selected=-1;this.feedback=""}},
key(k){if(k==="enter"){if(this.finished)this.reset();else this.next()}else if(["a","b","c","d","1","2","3","4"].includes(k))this.answer("abcd".includes(k)?"abcd".indexOf(k):Number(k)-1)},
pointer(x,y){if(this.finished){this.reset();return}if(this.answered&&inside(x,y,325,508,255,55)){this.next();return}for(let i=0;i<4;i++){let xx=70+(i%2)*390,yy=296+Math.floor(i/2)*87;if(inside(x,y,xx,yy,362,70)){this.answer(i);return}}},
update(){},
draw(){base("QUIZ MULTIPLAYER","2 jogadores • 12 perguntas");panel(25,73,409,93);panel(466,73,409,93);for(let i=0;i<2;i++){text("JOGADOR "+(i+1),50+i*441,96,17,i===this.player?"#7ce9dc":"#a6b3cb");text("PONTOS: "+this.scores[i],50+i*441,133,25,"#f7d384")}if(this.finished){overlay(this.scores[0]===this.scores[1]?"EMPATE!":this.scores[0]>this.scores[1]?"JOGADOR 1 VENCEU!":"JOGADOR 2 VENCEU!","Toque na tela ou pressione Enter para reiniciar");return}panel(33,183,834,103);text("PERGUNTA "+(this.index+1)+"/"+this.questions.length,60,209,15,"#8edacb");text(this.questions[this.index][0],60,251,22);let opts=this.questions[this.index][1];for(let i=0;i<4;i++){let xx=70+(i%2)*390,yy=296+Math.floor(i/2)*87;let correct=this.questions[this.index][2]===i;let color=this.answered&&correct?"#246c57":this.answered&&this.selected===i?"#814346":"#223e5a";fill(xx,yy,362,70,color,11);stroke(xx,yy,362,70,"#446e83",11);text("ABCD"[i]+". "+opts[i],xx+17,yy+35,18)}if(this.answered){text(this.feedback,70,489,19,this.selected===this.questions[this.index][2]?"#83ecc5":"#ffb2ab");button(325,508,255,55,"Próxima →",true)}else text("Vez do jogador "+(this.player+1),70,502,20,"#e0eafb")}
});
scenes["2d-racing"]=()=>({
help:"Desvie dos carros com ← → (ou botões). ↑ acelera e ↓ freia. R reinicia.",
reset(){this.x=450;this.v=5;this.enemies=[];this.time=0;this.score=0;this.distance=0;this.over=false;this.lines=0;this.best=Number(localStorage.getItem("aa_racing_best")||0)},
key(k){if((k==="enter"||k===" ")&&this.over)this.reset()},
update(dt){if(this.over)return;let step=dt*60;if(keys.has("arrowleft")||keys.has("a"))this.x-=dt*285;if(keys.has("arrowright")||keys.has("d"))this.x+=dt*285;if(keys.has("arrowup")||keys.has("w"))this.v=Math.min(12,this.v+dt*2);if(keys.has("arrowdown")||keys.has("s"))this.v=Math.max(2,this.v-dt*4);this.x=clamp(this.x,279,620);this.lines=(this.lines+this.v*step*1.6)%95;this.time+=dt;this.distance+=this.v*dt*5;this.score=Math.floor(this.distance);if(this.time>Math.max(.35,1.1-this.v*.048)){this.time=0;this.enemies.push({x:pick([317,410,501,594]),y:-65,v:R(90,180),color:pick(["#f5bf63","#56c0e2","#b992e8","#f58da2"])})}for(const e of this.enemies){e.y+=(e.v+this.v*18)*dt;if(Math.abs(e.x-this.x)<42&&Math.abs(e.y-460)<68){this.over=true;this.best=Math.max(this.score,this.best);localStorage.setItem("aa_racing_best",this.best)}}this.enemies=this.enemies.filter(e=>e.y<665)},
pointer(x,y){if(this.over){this.reset();return}if(x<W/2)this.x-=50;else this.x+=50},
car(x,y,color,player){fill(x-25,y-41,50,82,color,11);fill(x-19,y-16,38,25,player?"#b4e7ff":"#1f3045",5);fill(x-17,y+16,34,15,"#192b40",4);fill(x-24,y-31,10,10,"#f8f8ce",3);fill(x+14,y-31,10,10,"#f8f8ce",3);fill(x-26,y+22,10,12,"#fc6870",3);fill(x+16,y+22,10,12,"#fc6870",3)},
draw(){base("NEON RACER 2D","Desvie do trânsito!");fill(0,58,W,542,"#183c3a");fill(246,58,408,542,"#263447");fill(245,58,7,542,"#fbefbe");fill(648,58,7,542,"#fbefbe");for(const x of [383,515])for(let y=-75+this.lines;y<670;y+=95)fill(x,y,7,44,"#b7c0d0",3);for(const e of this.enemies)this.car(e.x,e.y,e.color,false);this.car(this.x,460,"#26d4b7",true);panel(15,73,205,150,"CORRIDA");text("Pontos "+this.score,33,127,24,"#f7d381");text("Veloc. "+Math.floor(this.v*20)+" km/h",33,163,17);text("Recorde "+this.best,33,195,17,"#9ecbd9");if(this.over)overlay("BATIDA!","R ou toque para reiniciar")}
});
scenes["dungeon-explorer"]=()=>({
help:"Pegue 3 chaves e vá até a saída dourada. Setas para andar. Evite os monstros. Adaptação do código incompleto.",
reset(){this.map=["###############","#.....#.......#","#.##..#..###..#","#.....#.......#","###.#####.##..#","#.............#","#.##...##..##.#","#....#........#","#....#..##....#","#.............#","###############"].map(r=>[...r]);this.player={x:1,y:1};this.life=4;this.loot=new Set(["3,1","8,5","12,9"]);this.enemies=[{x:9,y:1},{x:3,y:7},{x:12,y:5}];this.timer=0;this.score=0;this.keys=0;this.over=false;this.won=false;this.msg="Encontre 3 chaves e saia pela porta!";this.exit={x:13,y:9};},
free(x,y){return this.map[y]?.[x]==="."},
walk(dx,dy){if(this.over||this.won)return;let nx=this.player.x+dx,ny=this.player.y+dy;if(!this.free(nx,ny))return;this.player.x=nx;this.player.y=ny;let cell=nx+","+ny;if(this.loot.has(cell)){this.loot.delete(cell);this.score+=100;this.keys++;this.msg="Tesouro +100, chave "+this.keys+"/3"}if(nx===this.exit.x&&ny===this.exit.y){if(this.keys>=3){this.won=true;this.msg="A masmorra foi conquistada!"}else this.msg="Precisa de 3 chaves!"}this.hit()},
hit(){for(const e of this.enemies){if(e.x===this.player.x&&e.y===this.player.y){this.life--;this.player={x:1,y:1};this.msg="O monstro te atingiu!";if(this.life<=0)this.over=true;break}}},
key(k){if(this.over||this.won){if(k==="enter"||k===" ")this.reset();return}let dir={arrowup:[0,-1],w:[0,-1],arrowdown:[0,1],s:[0,1],arrowleft:[-1,0],a:[-1,0],arrowright:[1,0],d:[1,0]};if(dir[k])this.walk(...dir[k])},
pointer(x,y){if(this.over||this.won){this.reset();return}const xx=105,yy=79,sz=43;if(inside(x,y,xx,yy,15*sz,11*sz)){let tx=Math.floor((x-xx)/sz),ty=Math.floor((y-yy)/sz);let dx=tx-this.player.x,dy=ty-this.player.y;if(Math.abs(dx)>Math.abs(dy))this.walk(Math.sign(dx),0);else this.walk(0,Math.sign(dy))}},
update(dt){if(this.over||this.won)return;this.timer+=dt;if(this.timer>.85){this.timer=0;for(const e of this.enemies){let choices=[[0,1],[1,0],[-1,0],[0,-1]].filter(([dx,dy])=>this.free(e.x+dx,e.y+dy));if(choices.length){let [dx,dy]=pick(choices);e.x+=dx;e.y+=dy}}this.hit()}},
draw(){base("DUNGEON EXPLORER","3 tesouros para abrir a saída");const xx=105,yy=75,sz=43;for(let y=0;y<11;y++)for(let x=0;x<15;x++){let wall=this.map[y][x]==="#";fill(xx+x*sz,yy+y*sz,sz-2,sz-2,wall?"#546174":"#1b394a",3);if(!wall)stroke(xx+x*sz+5,yy+y*sz+5,sz-12,sz-12,"#264b5c",1)}for(const cell of this.loot){let [x,y]=cell.split(",").map(Number);circle(xx+(x+.5)*sz,yy+(y+.5)*sz,12,"#f7d56a");circle(xx+(x+.5)*sz,yy+(y+.5)*sz,5,"#fff6c9")}fill(xx+this.exit.x*sz+9,yy+this.exit.y*sz+5,sz-18,sz-10,"#f1bb56",5);for(const e of this.enemies){circle(xx+(e.x+.5)*sz,yy+(e.y+.5)*sz,15,"#de6e7b");circle(xx+(e.x+.5)*sz-5,yy+(e.y+.5)*sz-2,2,"white");circle(xx+(e.x+.5)*sz+5,yy+(e.y+.5)*sz-2,2,"white")}circle(xx+(this.player.x+.5)*sz,yy+(this.player.y+.5)*sz,15,"#67d4f8");panel(766,76,122,300,"STATUS");text("HP "+this.life,782,131,22,"#fa8f95");text("Chaves",782,182,16);text(this.keys+"/3",782,218,28,"#f5d67e");text("Score",782,267,16);text(this.score,782,303,22);text(this.msg,58,576,17,"#dcecf4");if(this.over)overlay("FIM DE JOGO","Toque na tela ou pressione R");if(this.won)overlay("VITÓRIA!","Você encontrou os 3 tesouros!")}
});
})();
