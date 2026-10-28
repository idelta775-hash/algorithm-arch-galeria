/* DELTA ARCADE · PT-BR - interface translation layer. Third-party game originals remain owned by their authors. */
(function(){
"use strict";
if(window.__deltaPtBrLoaded)return;
window.__deltaPtBrLoaded=true;
var words={
"play":"Jogar","play now":"Jogar agora","play game":"Jogar","start":"Iniciar","start game":"Iniciar jogo","new game":"Novo jogo",
"restart":"Reiniciar","restart game":"Reiniciar jogo","retry":"Tentar novamente","try again":"Tentar novamente","play again":"Jogar novamente",
"continue":"Continuar","resume":"Retomar","pause":"Pausar","paused":"Pausado","back":"Voltar","go back":"Voltar","return":"Retornar",
"exit":"Sair","quit":"Sair","quit game":"Sair do jogo","close":"Fechar","cancel":"Cancelar","confirm":"Confirmar","ok":"OK","yes":"Sim","no":"Não",
"next":"Próximo","next level":"Próxima fase","previous":"Anterior","skip":"Pular","skip intro":"Pular introdução",
"menu":"Menu","main menu":"Menu principal","home":"Início","options":"Opções","settings":"Configurações","preferences":"Preferências",
"controls":"Controles","how to play":"Como jogar","instructions":"Instruções","tutorial":"Tutorial","help":"Ajuda","about":"Sobre",
"language":"Idioma","english":"Inglês","portuguese":"Português","português":"Português","sound":"Som","sounds":"Sons","music":"Música",
"audio":"Áudio","volume":"Volume","mute":"Silenciar","unmute":"Ativar som","on":"Ligado","off":"Desligado",
"fullscreen":"Tela cheia","full screen":"Tela cheia","windowed":"Janela","graphics":"Gráficos","quality":"Qualidade","resolution":"Resolução",
"easy":"Fácil","medium":"Médio","normal":"Normal","hard":"Difícil","expert":"Especialista","difficulty":"Dificuldade",
"single player":"Um jogador","singleplayer":"Um jogador","multiplayer":"Multijogador","two players":"Dois jogadores",
"player":"Jogador","player 1":"Jogador 1","player 2":"Jogador 2","opponent":"Adversário","enemy":"Inimigo","enemies":"Inimigos",
"score":"Pontuação","your score":"Sua pontuação","high score":"Recorde","highscore":"Recorde","best score":"Melhor pontuação",
"best":"Melhor","points":"Pontos","level":"Nível","stage":"Fase","wave":"Onda","round":"Rodada","lives":"Vidas","life":"Vida",
"health":"Vida","hp":"PV","energy":"Energia","stamina":"Resistência","speed":"Velocidade","power":"Poder","strength":"Força",
"time":"Tempo","timer":"Cronômetro","remaining":"Restante","distance":"Distância","moves":"Movimentos","steps":"Passos",
"coins":"Moedas","coin":"Moeda","gold":"Ouro","money":"Dinheiro","cash":"Dinheiro","gems":"Gemas","keys":"Chaves","key":"Chave",
"inventory":"Inventário","items":"Itens","item":"Item","shop":"Loja","store":"Loja","buy":"Comprar","sell":"Vender",
"upgrade":"Melhorar","upgrades":"Melhorias","unlock":"Desbloquear","locked":"Bloqueado","unlocked":"Desbloqueado",
"save":"Salvar","load":"Carregar","load game":"Carregar jogo","save game":"Salvar jogo","progress":"Progresso",
"game over":"Fim de jogo","game over!":"Fim de jogo!","you win":"Você venceu","you win!":"Você venceu!",
"you lose":"Você perdeu","you lose!":"Você perdeu!","you lost":"Você perdeu","victory":"Vitória","defeat":"Derrota",
"winner":"Vencedor","draw":"Empate","congratulations":"Parabéns","congratulations!":"Parabéns!","completed":"Concluído",
"level complete":"Nível concluído","level completed":"Nível concluído","mission complete":"Missão cumprida",
"mission failed":"Missão fracassou","failed":"Falhou","success":"Sucesso","perfect":"Perfeito","great":"Ótimo","good":"Bom",
"ready":"Pronto","ready?":"Pronto?","go!":"Vai!","go":"Ir","loading":"Carregando","loading...":"Carregando...",
"please wait":"Aguarde","please wait...":"Aguarde...","press start":"Pressione Iniciar",
"press enter to start":"Pressione Enter para começar","press space to start":"Pressione Espaço para começar",
"tap to start":"Toque para começar","click to start":"Clique para começar","press any key":"Pressione qualquer tecla",
"press any key to continue":"Pressione qualquer tecla para continuar","tap to play":"Toque para jogar",
"click to play":"Clique para jogar","press space to jump":"Pressione Espaço para pular",
"pause game":"Pausar jogo","resume game":"Retomar jogo","are you sure?":"Tem certeza?",
"are you sure you want to quit?":"Tem certeza de que deseja sair?","game paused":"Jogo pausado",
"touch to start":"Toque para começar","tap anywhere to start":"Toque em qualquer lugar para começar",
"use arrow keys to move":"Use as setas para mover","use wasd to move":"Use WASD para mover",
"left":"Esquerda","right":"Direita","up":"Cima","down":"Baixo","jump":"Pular","attack":"Atacar","shoot":"Atirar",
"move":"Mover","run":"Correr","walk":"Andar","crouch":"Agachar","reload":"Recarregar","fire":"Atirar",
"select":"Selecionar","submit":"Enviar","enter name":"Digite seu nome","username":"Nome de usuário","name":"Nome",
"email":"E-mail","password":"Senha","search":"Buscar","search games":"Buscar jogos","choose game":"Escolha um jogo",
"start over":"Começar de novo","reset":"Redefinir","clear":"Limpar","undo":"Desfazer","hint":"Dica",
"check":"Verificar","correct":"Correto","incorrect":"Incorreto","wrong":"Errado","answer":"Resposta",
"question":"Pergunta","questions":"Perguntas","results":"Resultados","result":"Resultado","leaderboard":"Classificação",
"achievements":"Conquistas","achievement unlocked":"Conquista desbloqueada","new record":"Novo recorde",
"final score":"Pontuação final","total score":"Pontuação total","bonus":"Bônus","combo":"Combo","multiplier":"Multiplicador",
"endless":"Sem fim","survival":"Sobrevivência","arcade":"Arcade","campaign":"Campanha","story":"História",
"world":"Mundo","map":"Mapa","game":"Jogo","games":"Jogos","menu principal":"Menu principal",
"next question":"Próxima pergunta","play online":"Jogar online","new high score!":"Novo recorde!",
"tap or click to start":"Toque ou clique para começar","loading game...":"Carregando jogo..."
};
var keys=Object.create(null);Object.keys(words).forEach(function(k){keys[k]=words[k]});
var fields={
"score":"Pontuação","level":"Nível","stage":"Fase","wave":"Onda","round":"Rodada","time":"Tempo",
"lives":"Vidas","life":"Vida","health":"Vida","points":"Pontos","coins":"Moedas","money":"Dinheiro",
"best":"Melhor","high score":"Recorde","highscore":"Recorde","total":"Total","speed":"Velocidade",
"distance":"Distância","moves":"Movimentos","combo":"Combo","player":"Jogador"
};
function translate(value){
if(typeof value!=="string"||!value||value.length>200)return value;
var leading=(value.match(/^\s*/)||[""])[0],tail=(value.match(/\s*$/)||[""])[0],v=value.trim();
if(!v)return value;
var lower=v.toLocaleLowerCase("en-US");
var exact=keys[lower];if(exact!==undefined)return leading+exact+tail;
var m=/^([\w ]{2,25})\s*[:：]\s*(\d[\d\s.,%:+-]*)$/i.exec(v);
if(m){var key=m[1].toLowerCase();if(fields[key])return leading+fields[key]+": "+m[2]+tail;}
m=/^(level|stage|wave|round|player)\s+(\d+)$/i.exec(v);
if(m){return leading+fields[m[1].toLowerCase()]+" "+m[2]+tail;}
m=/^(\d+)\s+(points|coins|lives|moves|seconds|minutes)$/i.exec(v);
if(m){var noun={"points":"pontos","coins":"moedas","lives":"vidas","moves":"movimentos","seconds":"segundos","minutes":"minutos"};return leading+m[1]+" "+noun[m[2].toLowerCase()]+tail;}
m=/^(press|tap|click)\s+(enter|space|start|here|any key)\s+to\s+(start|play|continue|restart)$/i.exec(v);
if(m){var verbs={press:"Pressione",tap:"Toque em",click:"Clique em"},targets={enter:"Enter",space:"Espaço",start:"Iniciar",here:"aqui","any key":"qualquer tecla"},actions={start:"começar",play:"jogar",continue:"continuar",restart:"reiniciar"};return leading+verbs[m[1].toLowerCase()]+" "+targets[m[2].toLowerCase()]+" para "+actions[m[3].toLowerCase()]+tail}
return value;
}
function translateElement(el){
if(!el||!el.attributes||!el.tagName)return;
var tag=el.tagName.toUpperCase();
if(/^(SCRIPT|STYLE|TEXTAREA|CODE|PRE|NOSCRIPT|SVG)$/.test(tag)||el.isContentEditable)return;
["placeholder","title","aria-label","alt"].forEach(function(attr){var x=el.getAttribute(attr);if(!x)return;var y=translate(x);if(x!==y)el.setAttribute(attr,y)});
if((tag==="INPUT"&&/^(button|submit|reset)$/i.test(el.type))||tag==="BUTTON"){if(el.value){var y=translate(el.value);if(y!==el.value)el.value=y}}
}
function walk(root){
if(!root)return;
if(root.nodeType===3){
var p=root.parentNode;if(!p||!p.tagName||/^(SCRIPT|STYLE|TEXTAREA|CODE|PRE|NOSCRIPT|SVG|OPTION)$/.test(p.tagName.toUpperCase())||p.isContentEditable)return;
var current=root.nodeValue;if(current){var translated=translate(current);if(current!==translated)root.nodeValue=translated}return;
}
if(root.nodeType!==1&&root.nodeType!==9&&root.nodeType!==11)return;
if(root.nodeType===1)translateElement(root);
if(root.nodeType===1&&/^(SCRIPT|STYLE|TEXTAREA|PRE|CODE|CANVAS|SVG|NOSCRIPT)$/.test(root.tagName.toUpperCase()))return;
var iterator=document.createTreeWalker(root,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT);
var node,count=0;
while((node=iterator.nextNode())&&count++<12000){if(node.nodeType===3)walk(node);else translateElement(node);}
}
var queue=[],timer=null;
function flush(){timer=null;var q=queue;queue=[];for(var i=0;i<q.length&&i<100;i++){try{walk(q[i])}catch(e){}}}
function enqueue(node){if(!node)return;queue.push(node);if(!timer)timer=setTimeout(flush,120)}
function installObserver(){if(!document.documentElement)return;walk(document.documentElement);var o=new MutationObserver(function(records){records.forEach(function(rec){if(rec.type==="characterData")enqueue(rec.target);else{rec.addedNodes.forEach(enqueue);if(rec.type==="attributes")enqueue(rec.target)}})});o.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:["placeholder","title","aria-label","alt","value"]})}
function patchCanvas(){
try{if(!window.CanvasRenderingContext2D)return;var p=CanvasRenderingContext2D.prototype;
["fillText","strokeText"].forEach(function(key){var native=p[key];if(typeof native!=="function"||native.__deltaWrapped)return;
var translated=function(text,x,y,maxWidth){var str=translate(text);return arguments.length>3?native.call(this,str,x,y,maxWidth):native.call(this,str,x,y)};
translated.__deltaWrapped=true;p[key]=translated;});
}catch(e){}
}
function badge(){
if(!document.body||document.getElementById("__delta_brand"))return;
var div=document.createElement("div");div.id="__delta_brand";
div.textContent="Δ DELTA ARCADE · PT-BR";
div.setAttribute("aria-label","DELTA ARCADE - tradução brasileira");
div.style.cssText="all:initial!important;position:fixed!important;bottom:7px!important;left:7px!important;z-index:2147483647!important;pointer-events:none!important;display:block!important;background:rgba(6,18,32,.78)!important;color:#8cead5!important;padding:4px 9px!important;border-radius:8px!important;border:1px solid rgba(111,236,205,.5)!important;font:700 10px/1.3 system-ui,sans-serif!important;letter-spacing:.05em!important;box-shadow:0 4px 14px rgba(0,0,0,.2)!important";
document.body.appendChild(div);
}
patchCanvas();
var bootstrap=function(){try{installObserver();badge()}catch(e){}};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",bootstrap,{once:true});else bootstrap();
window.DeltaArcade={locale:"pt-BR",translate:translate,version:"1.0",mode:"assistida"};
})();