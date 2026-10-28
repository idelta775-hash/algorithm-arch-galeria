/* DELTA ARCADE: identidade da plataforma e títulos locais em pt-BR. */
(function(){
"use strict";
function run(){
var isCatalog=location.pathname.indexOf("arcade-352")!==-1;
document.documentElement.lang="pt-BR";
document.title=isCatalog?"DELTA ARCADE Δ | 352 jogos com tradução PT-BR assistida":"DELTA ARCADE Δ | Galeria Algorithm Arch — 372 jogos";
var meta=document.querySelector('meta[name="description"]');
if(meta)meta.content=isCatalog?"DELTA ARCADE: 352 jogos extras com catálogo, favoritos, categorias e tradução assistida para português brasileiro.":"DELTA ARCADE: 20 jogos Algorithm Arch, 352 jogos extras e 6 demonstrações de aplicativos.";
var brand=document.querySelector(".brand");
if(brand){brand.innerHTML='<span class="delta-mark" aria-hidden="true">Δ</span><span class="delta-title">DELTA <strong>ARCADE</strong><small class="delta-byline">Coleção Algorithm Arch</small></span>';brand.setAttribute("aria-label","Delta Arcade — Coleção Algorithm Arch");}
var hero=document.querySelector(".hero");
if(hero){
var eyebrow=hero.querySelector(".eyebrow");
if(eyebrow)eyebrow.textContent=isCatalog?"DELTA ARCADE • BIBLIOTECA DE 352 JOGOS":"DELTA ARCADE • PORTAL BRASILEIRO DE JOGOS";
if(!isCatalog){var h=hero.querySelector("h1");if(h)h.innerHTML='Seus jogos. Sua diversão.<br><em>Universo DELTA.</em>';}
}
if(!isCatalog){
var stats=document.querySelector(".stats");
if(stats&&!document.getElementById("delta372")){var el=document.createElement("div");el.id="delta372";el.className="stat";el.innerHTML="<b>372</b><span>Jogos nas duas bibliotecas</span>";stats.appendChild(el);}
var mappings={
"Zombie Survival Game":"Sobrevivência Zumbi",
"Fishing Game":"Jogo de Pesca",
"City Builder":"Construtor de Cidades",
"Virtual Pet Game":"Bichinho Virtual",
"Number Merge Puzzle — Web":"Quebra-cabeça Numérico — Web",
"Number Merge Puzzle — SFML":"Quebra-cabeça Numérico — SFML",
"Multiplayer Quiz Game":"Quiz Multijogador",
"2D Racing Game":"Corrida 2D",
"Dungeon Explorer":"Explorador de Masmorras",
"2D Platformer — SFML":"Plataforma 2D — SFML",
"Space Shooter — Console":"Tiro Espacial — Console",
"2D Platformer — Flask":"Plataforma 2D — Flask",
"Space Shooter — Flask":"Tiro Espacial — Flask",
"Farming Simulator":"Simulador de Fazenda",
"Billiards Simulator":"Simulador de Sinuca",
"Rhythm Tap Game":"Jogo de Ritmo",
"Solar System Simulator":"Simulador do Sistema Solar",
"Tower Defense":"Defesa de Torres",
"Chess Game":"Jogo de Xadrez",
"Block Puzzle":"Quebra-cabeça de Blocos"
};
document.querySelectorAll(".card").forEach(function(card){
if(card.getAttribute("data-cat")!=="games")return;
var h=card.querySelector("h3");if(!h)return;
var original=h.textContent.trim(),translation=mappings[original];
if(translation){h.textContent=translation;h.title="Título original: "+original;card.setAttribute("data-search",(card.getAttribute("data-search")||"")+" "+translation.toLocaleLowerCase("pt-BR"));}
});
var note=document.querySelector(".note");
if(note&&!document.getElementById("deltaCredits")){var credits=document.createElement("p");credits.id="deltaCredits";credits.style.marginBottom="0";credits.textContent="DELTA ARCADE é a identidade deste portal. Os jogos preservam seus créditos e direitos autorais originais; a tradução de conteúdos externos é assistida e pode ser parcial.";note.appendChild(credits);}
}
if(isCatalog){
var info=document.querySelector(".info");
if(info&&!document.getElementById("deltaLocalizationNote")){
var p=document.createElement("p");p.id="deltaLocalizationNote";p.innerHTML="<strong>Português (Brasil):</strong> a plataforma está em português e a tradução automática dos textos de menus, HUD e instruções reconhecidos é aplicada durante a execução. Elementos desenhados como imagens, WebGL ou textos não reconhecidos podem permanecer no idioma original. Os jogos são de terceiros.";p.style.margin="9px 0 0";info.appendChild(p);}
}
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run,{once:true});else run();
})();
