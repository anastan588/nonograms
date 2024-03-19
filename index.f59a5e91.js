(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var l=i.getElementsByTagName("script");if(l.length)for(var n=l.length-1;n>-1&&!t;)t=l[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"assets\\images\\soundon.png";console.log(t),document.body.insertAdjacentHTML("beforeend",'<div class="main_container">\n              <div class="overlay"></div>\n              <header class="header">\n                 <h1>Nonograms Game</h1>\n              </header>\n              <main class="main">\n                <section class="game">\n                 \n                  <div class="timer">00:00</div>\n                  <div class="nonograms_settings_field">\n                   <div class="levels settings_item">Levels</div>\n                   <div class="random_game settings_item">Random</div>\n                   <div class="last_game settings_item">Last Game</div>\n                   <div class="solution_game settings_item">Solution</div>\n                   \n                  </div>\n                  <div class="nonograms_settings_field">\n                  <div class="results settings_item">Results</div>\n                   <div class="restart_game settings_item">Restart</div>\n                   <div class="save_game settings_item">Save</div>  \n                   <div class="themes settings_item">Themes</div>\n                   <div class="sound settings_item">\n                     <img class="sound_image" alt="sound" src="'.concat(t,'">\n                   </div> \n                 </div> \n                 <div class="name"></div>\n                 <div class="complicity"></div>\n                  <div class="nonograms_game_field">\n                    <div class="empty_field"></div>\n                    <div class="top_field"></div>\n                    <div class="left_field"></div>\n                    <div class="main_field"></div>\n                  </div>\n                 </section>\n              </main>\n              <footer class="footer">\n                 <p class="footer_item">\n                   anastan588\n                 </p>\n                 <p class="footer_item">\n                   2024\n                 </p>\n                 <a class="footer_item github" href="https://github.com/anastan588" target="_blank">\n                   Github\n                 </a>\n              </footer>\n            </div>'));var i={5:[{title:"cat",image:"./5/cat/cat.png",gameFieldCode:[[0,0,1,0,1],[0,0,1,1,1],[1,1,1,1,1],[1,1,1,1,0],[1,1,1,1,1]],leftDigitFieldCode:[[1,1],3,5,4,5],leftDigitFieldMaxLength:2,rightDigitFieldCode:[3,3,5,4,[3,1]],rightDigitFieldMaxLength:2},{title:"flower",image:"./5/flower/flower.png",gameFieldCode:[[0,1,1,1,0],[0,1,1,1,0],[1,0,1,0,1],[1,1,1,1,1],[0,1,1,1,0]],leftDigitFieldCode:[3,3,[1,1,1],5,3],leftDigitFieldMaxLength:3,rightDigitFieldCode:[2,[2,2],5,[2,2],2],rightDigitFieldMaxLength:2},{title:"heart",image:"./5/heart/heart.png",gameFieldCode:[[1,1,0,1,1],[1,1,1,1,1],[1,1,1,1,1],[0,1,1,1,0],[0,0,1,0,0]],leftDigitFieldCode:[[2,2],5,5,3,1],leftDigitFieldMaxLength:2,rightDigitFieldCode:[3,4,4,4,3],rightDigitFieldMaxLength:1},{title:"orange",image:"./5/orange/orange.png",gameFieldCode:[[0,0,1,0,0],[0,1,1,1,0],[1,1,1,1,1],[0,1,1,1,0],[0,0,1,0,0]],leftDigitFieldCode:[1,3,5,3,1],leftDigitFieldMaxLength:1,rightDigitFieldCode:[1,3,5,3,1],rightDigitFieldMaxLength:1},{title:"sunflower",image:"./5/sunflower/sunflower.png",gameFieldCode:[[0,1,1,1,0],[1,0,0,0,1],[0,1,1,1,0],[0,0,1,0,0],[0,1,1,1,0]],leftDigitFieldCode:[3,[1,1],3,1,3],leftDigitFieldMaxLength:2,rightDigitFieldCode:[1,[1,1,1],[1,3],[1,1,1],1],rightDigitFieldMaxLength:3}],10:[{title:"jug",image:"./10/jug/jug.png",gameFieldCode:[[0,0,1,1,1,1,1,1,0,0],[0,1,0,0,1,1,0,0,1,0],[0,0,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,0,0],[0,0,0,1,1,1,1,0,0,0]],leftDigitFieldCode:[6,[1,2,1],6,8,10,10,10,8,6,4],leftDigitFieldMaxLength:3,rightDigitFieldCode:[3,[1,5],[1,7],[1,8],10,10,[1,8],[1,7],[1,5],3],rightDigitFieldMaxLength:2},{title:"man",image:"./10/man/man.png",gameFieldCode:[[1,1,1,1,1,0,0,1,1,0],[0,0,1,1,0,0,1,1,1,1],[0,0,0,1,0,0,1,1,1,1],[0,0,0,1,1,1,1,1,1,0],[0,0,0,0,1,1,1,0,0,0],[0,0,0,0,1,1,0,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,0,0,0],[0,0,1,0,1,1,0,0,0,0],[0,1,1,0,0,1,1,1,0,0]],leftDigitFieldCode:[[5,2],[2,4],[1,4],6,3,2,4,5,[1,2],[2,3]],leftDigitFieldMaxLength:2,rightDigitFieldCode:[1,[1,1],[2,3],[4,2],[1,6],7,[4,2,1],[4,1],4,2],rightDigitFieldMaxLength:3},{title:"mashroom",image:"./10/mashroom/mashroom.png",gameFieldCode:[[0,0,0,1,0,1,1,0,0,0],[0,1,1,1,1,1,0,1,1,0],[1,0,1,1,0,1,1,1,0,1],[1,1,1,0,1,1,0,1,1,1],[0,0,0,1,0,0,1,0,0,0],[0,0,0,1,0,0,1,0,0,0],[0,0,1,0,0,0,0,1,0,0],[0,0,1,1,1,1,1,1,0,0],[0,0,0,1,0,0,1,0,0,0],[0,0,0,1,1,1,1,0,0,0]],leftDigitFieldCode:[[1,2],[5,2],[1,2,3,1],[3,2,3],[1,1],[1,1],[1,1],6,[1,1],4],leftDigitFieldMaxLength:4,rightDigitFieldCode:[2,[1,1],[3,2],[3,2,3],[1,1,1,1],[4,1,1],[1,1,2,3],[3,2],[1,1],2],rightDigitFieldMaxLength:4},{title:"rabbit",image:"./10/rabbit/rabbit.png",gameFieldCode:[[0,0,0,0,0,1,1,0,0,0],[0,0,0,0,0,1,0,1,0,0],[0,0,0,0,0,0,1,1,1,0],[0,0,0,0,0,0,1,1,0,1],[0,0,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,0,0],[0,1,1,1,0,0,1,1,1,0],[0,0,1,1,1,1,0,1,1,1]],leftDigitFieldCode:[2,[1,1],3,[2,1],8,9,9,7,[3,3],[4,3]],leftDigitFieldMaxLength:2,rightDigitFieldCode:[1,4,6,6,[4,1],[2,4,1],[1,7],9,[1,3,2],[3,1]],rightDigitFieldMaxLength:3},{title:"squirell",image:"./10/squirell/squirell.png",gameFieldCode:[[0,0,0,0,0,0,1,0,1,0],[1,1,0,0,0,0,1,1,1,0],[1,1,1,0,0,0,1,0,1,1],[1,1,1,0,0,0,1,1,1,1],[1,1,1,0,1,1,1,0,0,0],[0,1,1,1,1,1,1,1,0,0],[0,0,1,1,1,1,0,0,0,0],[0,0,0,1,1,0,0,0,0,0],[0,0,1,1,0,0,0,0,0,0],[0,0,1,1,1,0,0,0,0,0]],leftDigitFieldCode:[[1,1],[2,3],[3,1,2],[3,4],[3,3],7,4,2,2,3],leftDigitFieldMaxLength:3,rightDigitFieldCode:[4,5,[5,2],5,[4,1],3,6,[1,1,1],4,2],rightDigitFieldMaxLength:3}],15:[{title:"bird",image:"./15/bird/bird.png",gameFieldCode:[[0,0,0,1,1,1,1,1,1,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[1,1,1,1,0,0,0,0,1,1,1,0,1,1,0],[1,1,0,0,1,1,1,1,1,1,0,1,0,1,1],[1,0,1,1,1,1,1,1,1,1,0,0,0,0,1],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],[0,0,0,0,0,0,1,1,1,1,0,0,0,0,1],[0,0,0,0,0,1,1,1,1,1,0,0,0,0,1],[0,0,0,0,1,1,1,1,1,1,0,0,0,0,1],[0,0,0,0,1,1,0,1,1,1,1,0,0,1,1],[0,0,0,1,1,0,1,1,1,1,1,1,1,1,1],[0,0,1,1,0,1,1,1,1,1,1,1,1,1,0],[0,0,0,0,1,1,1,1,1,1,1,1,1,0,0],[0,0,0,1,1,1,0,1,0,1,1,0,0,0,0],[0,0,0,1,1,0,0,1,1,0,1,1,0,0,0]],leftDigitFieldCode:[6,12,[4,3,2],[2,6,1,2],[1,8,1],[1,1],[4,1],[5,1],[6,1],[2,4,2],[2,9],[2,9],[3,1,2],[2,2,2]],leftDigitFieldMaxLength:4,rightDigitFieldCode:[3,3,[2,1,1],[3,1,2,2],[2,2,3,3],[2,2,3,3],[2,2,3,3],[2,2,9],[13,1],[4,8],[2,6],[1,1,3,1],[2,3],[2,3],8],rightDigitFieldMaxLength:4},{title:"icecream",image:"./15/icecream/icecream.png",gameFieldCode:[[0,1,1,1,1,1,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,1,1,1,1,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,1,1,0,0,0,0,0],[1,0,0,0,0,1,1,0,0,1,1,0,0,0,0],[1,1,0,0,1,1,0,0,0,0,1,0,0,0,0],[0,1,1,1,1,0,0,0,0,0,1,0,0,0,0],[0,0,1,1,1,0,0,0,0,0,1,0,0,0,0],[0,1,1,1,1,1,0,0,0,1,1,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[1,1,1,1,1,1,1,0,1,1,1,1,0,0,0],[0,1,1,1,1,1,0,1,1,1,1,1,1,0,0],[0,0,1,1,1,0,1,1,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1]],leftDigitFieldCode:[5,[2,4],[1,1,2],[1,2,2],[2,2,1],[4,1],[3,1],[5,2],12,[7,4],[5,6],[3,7],7,5,4],leftDigitFieldMaxLength:3,rightDigitFieldCode:[[4,2],[2,2,4],[2,1,1],[1,7],[1,7],[1,8],[2,2,4],[3,2,1],[1,1,3],[2,5],[2,7],11,7,5,3,1],rightDigitFieldMaxLength:3},{title:"mouse",image:"./15/mouse/mouse.png",gameFieldCode:[[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,0,0,1,1,1,1,0,1,0],[0,1,1,1,1,0,1,1,0,1,1,0,0,1,0],[1,1,1,1,1,0,1,1,0,0,0,0,0,1,1],[1,1,1,1,1,1,0,1,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,0,0,1,0,1,1,1,1],[1,0,1,1,1,1,0,0,0,0,0,0,1,0,1],[1,1,0,1,1,0,0,0,0,0,0,0,0,1,1],[1,1,0,1,1,0,0,0,0,0,1,1,1,1,1],[1,0,1,1,0,0,0,0,0,0,1,1,1,1,1],[1,0,1,1,0,0,0,0,0,0,0,1,1,1,1],[1,0,1,1,0,0,0,0,0,0,0,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,1,1]],leftDigitFieldCode:[5,9,11,[5,4,1],[4,2,2,1],[5,2,2],[6,1,3],[7,1,4],[1,4,1,1],[2,2,2],[2,2,5],[1,2,5],[1,2,4],[1,2,4],[2,3]],leftDigitFieldMaxLength:4,rightDigitFieldCode:[10,[5,2,1],[7,3],13,10,[4,3],[3,2,1],[3,3],4,[5,1],[4,2],[3,1,4],[1,3,5],[5,6],10],rightDigitFieldMaxLength:3},{title:"penguin",image:"./15/penguin/penguin.png",gameFieldCode:[[0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,1,1,0,0,0,0,0,1,1,0,0,0],[0,0,0,1,0,0,1,0,1,0,0,1,0,0,0],[0,0,0,1,0,0,1,0,1,0,0,1,0,0,0],[0,0,0,1,1,0,1,1,1,0,1,1,0,0,0],[0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],[0,0,1,1,1,0,0,1,0,0,1,1,1,0,0],[0,1,1,1,1,1,0,0,0,1,1,1,1,1,0],[1,1,1,1,1,0,1,1,1,0,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,1,1,1,1],[1,0,1,1,0,0,0,0,0,0,0,1,1,0,1],[0,0,1,1,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,1,1,1,0,0,0,1,1,1,1,0,0],[1,1,1,0,0,1,1,0,1,1,0,0,1,1,1]],leftDigitFieldCode:[7,[2,2],[1,1,1,1],[1,1,1,1],[2,3,2],[3,3],[3,1,3],[5,5],[5,3,5],[4,4],[1,2,2,1],[2,2],[1,1],[4,4],[3,2,2,3]],leftDigitFieldMaxLength:4,rightDigitFieldCode:[[3,1],[3,1],[6,2],13,[2,5,1],[1,1,1,2],[1,3,1,1],[1,1,1,1],[1,3,1,1],[1,3,1,2],[2,5,1],13,[6,2],[3,1],[3,1]],rightDigitFieldMaxLength:4},{title:"rose",image:"./15/rose/rose.png",gameFieldCode:[[0,0,0,0,0,1,1,0,1,1,1,0,0,0,0],[0,0,0,0,1,1,0,1,1,0,0,1,0,0,0],[0,0,0,1,1,0,1,0,0,1,1,0,1,0,0],[0,0,0,1,0,0,1,1,0,0,0,0,1,0,0],[0,0,0,0,1,0,1,1,1,0,0,1,1,0,1],[0,0,0,1,1,0,0,1,1,1,1,1,0,1,1],[0,0,0,1,1,1,0,0,0,0,0,0,1,1,1],[1,0,0,0,1,1,0,1,0,0,0,1,1,1,0],[1,1,1,0,1,1,0,1,1,1,1,0,0,0,0],[1,1,1,1,0,1,1,0,1,1,1,1,1,0,0],[1,1,1,1,1,0,0,1,0,1,1,1,0,0,0],[1,1,1,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0]],leftDigitFieldCode:[[2,3],[2,2,1],[2,1,2,1],[1,2,1],[1,3,2,1],[2,5,2],[3,3],[1,2,1,3],[3,2,4],[4,2,5],[5,1,3],[5,1],6,5,2],leftDigitFieldMaxLength:4,rightDigitFieldCode:[5,5,6,[2,2,5],[2,5,4],[2,4,3],[1,3,1,4],[1,3,2,1],[2,2,2],[1,1,1,3],[1,2,1,2],[3,2,1],3,3],rightDigitFieldMaxLength:4}]};function l(e,t){var i=document.querySelector(".main_field");i.innerHTML="",i.style.gridTemplateColumns="repeat(".concat(Number(t.fieldSize),", auto)");var l=document.querySelector(".name"),n=document.querySelector(".complicity");l.textContent=t.image.title.toUpperCase(),5===t.fieldSize?n.textContent="Level: Easy":10===t.fieldSize?n.textContent="Level: Medium":15===t.fieldSize&&(n.textContent="Level: Hard");for(var a=0,s=0;s<t.fieldSize;s+=1)for(var o=0;o<t.fieldSize;o+=1){var r=document.createElement("div");(s+1)%5==0&&s+1!==t.fieldSize&&r.classList.add("border_bottom"),(o+1)%5==0&&o+1!==t.fieldSize&&r.classList.add("border_right"),r.classList.add("main_cell"),1===t.image.gameFieldCode[s][o]&&(a+=1),localStorage.getItem("theme")&&r.classList.add("main_cell_light"),r.dataset.position="".concat(s,",").concat(o),r.setAttribute("id",t.image.gameFieldCode[s][o]),i.append(r),s===t.fieldSize-1&&o===t.fieldSize-1&&(t.countOfFilledCells=a,t.initialCountOfCells=a)}}function n(e){var t=document.querySelector(".left_field");t.innerHTML="";for(var i=document.querySelector(".main_field").children,l=0;l<e.fieldSize;l+=1){for(var n=e.fieldSize*(l+1)-1,a=n-e.fieldSize+1,s=1,o=n;o>=a;o-=1)1===Number(i[o].getAttribute("id"))&&(i[o].dataset.hintidrow="".concat(s),void 0!==i[o-1]&&0===Number(i[o-1].getAttribute("id"))&&(s+=1));for(var r=document.createElement("div"),c=e.image.gameFieldCode[l].join("").split("0").filter((function(e){return""!==e})).map((function(e){for(var t=e.split(""),i=0,l=0;l<t.length;l+=1)i+=1;return i})).filter((function(e){return 0!==e})),d=c.length-1,m=1,g=e.image.leftDigitFieldMaxLength-1;g>=0;g-=1){var u=document.createElement("div");d>=0&&(u.innerHTML=c[d],d-=1),(l+1)%5==0&&l+1!==e.fieldSize&&u.classList.add("border_bottom"),u.classList.add("left_hint"),localStorage.getItem("theme")&&u.classList.add("left_hint_light"),u.dataset.hintidleft="".concat(m),m+=1,r.append(u)}r.classList.add("hint_left_container"),t.append(r)}}function a(e){var t=document.querySelector(".top_field");t.innerHTML="",t.style.gridTemplateColumns="repeat(".concat(Number(e.fieldSize),", auto)");for(var i=document.querySelector(".main_field").children,l=0;l<e.fieldSize;l+=1){for(var n=l,a=i.length-(e.fieldSize-l),s=[],o=n;o<=a;o+=e.fieldSize)s.push(o);for(var r=1,c=s.length-1;c>=0;c-=1)1===Number(i[Number(s[c])].getAttribute("id"))&&(i[Number(s[c])].dataset.hintidcolumn="".concat(r),0!==c&&0===Number(i[Number(s[c-1])].getAttribute("id"))&&(r+=1));for(var d=document.createElement("div"),m=[],g=0;g<=e.fieldSize-1;g+=1)m.push(e.image.gameFieldCode[g][l]);for(var u=m.join("").split("0").filter((function(e){return""!==e})).map((function(e){for(var t=e.split(""),i=0,l=0;l<t.length;l+=1)i+=1;return i})).filter((function(e){return 0!==e})),f=u.length-1,h=1,v=e.image.rightDigitFieldMaxLength-1;v>=0;v-=1){var _=document.createElement("div");f>=0&&(_.innerHTML=u[f],f-=1),(l+1)%5==0&&l+1!==e.fieldSize&&_.classList.add("border_right"),_.classList.add("top_hint"),localStorage.getItem("theme")&&_.classList.add("top_hint_light"),_.dataset.hintidtop="".concat(h),h+=1,d.append(_)}d.classList.add("hint_top_container"),t.append(d)}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,l=new Array(t);i<t;i++)l[i]=e[i];return l}function o(e){return e instanceof Event}var r='<div class="cross">\n                  <div class="cross_line line_one"></div>\n                  <div class="cross_line line_two"></div>\n               </div>';function c(e){var t="";if(o(e))(t=e.target).classList.contains("cross")&&(t=e.target.parentElement),t.classList.contains("cross_line")&&(t=e.target.parentElement.parentElement);else if(t=e,console.log(t),t.classList.contains("main_cell_crossed"))return;t.classList.contains("main_cell")&&(t.classList.contains("main_cell_filled")||(t.classList.contains("main_cell_crossed")?d(e):(t.classList.add("main_cell_crossed"),o(e)&&(H.pause(),T.pause(),A.pause(),H.load(),T.load(),A.load(),H.play()),t.dataset.crossed="true",t.insertAdjacentHTML("beforeend",r))))}function d(e){var t=e.target;console.log(t),t.classList.contains("cross")&&(t=e.target.parentElement),t.classList.contains("cross_line")&&(t=e.target.parentElement.parentElement),t.classList.contains("main_cell")&&(t.classList.contains("main_cell_filled")&&(t.classList.remove("main_cell_filled"),H.pause(),T.pause(),A.pause(),H.load(),T.load(),A.load(),T.play(),delete t.dataset.fill,C.countOfFilledCells+=1,console.log(C.countOfFilledCells),console.log(C.countOfFilledCells),u(C,t),f(C,t),0===C.countOfFilledCells&&h(C)),t.classList.contains("main_cell_crossed")&&(t.classList.remove("main_cell_crossed"),H.pause(),T.pause(),A.pause(),H.load(),T.load(),A.load(),T.play(),t.innerHTML="",delete t.dataset.crossed))}function m(e,t,i){void 0!==e&&e.stopPropagation(),clearInterval(i),document.querySelector(".timer").textContent="00:00",l(0,t),n(t),a(t)}function g(e){var t=e;console.log(t),t.classList.add("main_cell_crossed"),t.dataset.crossed="true",t.insertAdjacentHTML("beforeend",r)}function u(e,t){var i=Number(t.dataset.position.split(",")[0]),l=document.querySelector(".main_field").children,n=e.fieldSize*(i+1)-1,a=n-e.fieldSize+1,s=document.querySelector(".left_field").children[i].children;console.log(s);for(var o=0,r=0,d=n;d>=a;d-=1)l[d].classList.contains("main_cell_filled")&&(1===Number(l[d].getAttribute("id"))?(o+=1,console.log(l[d])):r+=1);for(var m=[],u=0;u<s.length;u+=1)console.log(s[u]),s[u].childNodes.length>1?""!==s[u].childNodes[0].innerHTML&&m.push(s[u].childNodes[0].data):""!==s[u].innerHTML&&m.push(s[u].innerHTML);console.log(m);for(var f=0,h=a;h<=n;h+=1)if(console.log(a,n),1===Number(l[h].getAttribute("id"))&&l[h].classList.contains("main_cell_filled")){if(f+=1,h===n&&f!==e.fieldSize){if(1!==Number(l[h-f].getAttribute("id"))){c(l[h-f]),f=0;for(var v=0;v<s.length;v+=1)l[h].dataset.hintidrow===s[v].dataset.hintidleft&&g(s[v])}}else if(f===e.fieldSize)for(var _=0;_<s.length;_+=1)l[h].dataset.hintidrow===s[_].dataset.hintidleft&&g(s[_]);if(void 0!==l[h+1]&&0===Number(l[h+1].getAttribute("id"))&&!l[h+1].classList.contains("main_cell_filled")&&f>0&&f!==e.fieldSize){if(h===a){c(l[h+1]);for(var p=0;p<s.length;p+=1)l[h].dataset.hintidrow===s[p].dataset.hintidleft&&g(s[p])}if(void 0!==l[h-f]){if(1!==Number(l[h-f].getAttribute("id"))&&!l[h-f].classList.contains("main_cell_filled")){c(l[h-f]),c(l[h+1]);for(var L=0;L<s.length;L+=1)l[h].dataset.hintidrow===s[L].dataset.hintidleft&&g(s[L])}}else if(void 0===l[h-f]){c(l[h+1]);for(var y=0;y<s.length;y+=1)l[h].dataset.hintidrow===s[y].dataset.hintidleft&&g(s[y])}f=0}}for(var S=0,b=0;b<m.length;b++)S+=Number(m[b]);if(console.log(S),console.log(o),S===o&&0===r){for(var F=n;F>=a;F-=1)c(l[F]);setTimeout((function(){for(var e=n;e>=a;e-=1)l[e].classList.contains("main_cell_crossed")||l[e].classList.contains("main_cell_filled")||(console.log("lastcheck"),c(l[e]))}),0)}}function f(e,t){var i=Number(t.dataset.position.split(",")[1]);console.log(i);var l=document.querySelector(".top_field").children[i].children;console.log(l);var n=document.querySelector(".main_field").children,a=i,s=n.length-(e.fieldSize-i);console.log(a),console.log(s);for(var o=[],r=a;r<=s;r+=e.fieldSize)o.push(r);console.log(o);for(var d=0,m=0,u=o.length-1;u>=0;u-=1)n[Number(o[u])].classList.contains("main_cell_filled")&&(1===Number(n[Number(o[u])].getAttribute("id"))?d+=1:m+=1);for(var f=[],h=0;h<l.length;h+=1)console.log(l[h]),l[h].childNodes.length>1?""!==l[h].childNodes[0].innerHTML&&f.push(l[h].childNodes[0].data):""!==l[h].innerHTML&&f.push(l[h].innerHTML);console.log(f);for(var v=0,_=0;_<=o.length-1;_+=1)if(1===Number(n[Number(o[_])].getAttribute("id"))&&n[Number(o[_])].classList.contains("main_cell_filled")){if(v+=1,Number(o[_])===s&&v!==o.length){if(1!==Number(n[Number(o[_-v])].getAttribute("id"))){c(n[Number(o[_-v])]),v=0;for(var p=0;p<l.length;p+=1)n[Number(o[_])].dataset.hintidcolumn===l[p].dataset.hintidtop&&g(l[p])}}else if(v===o.length)for(var L=0;L<l.length;L+=1)n[Number(o[_])].dataset.hintidcolumn===l[L].dataset.hintidtop&&g(l[L]);if(void 0!==n[Number(o[_+1])]&&0===Number(n[Number(o[_+1])].getAttribute("id"))&&!n[Number(o[_+1])].classList.contains("main_cell_filled")&&v>0&&v!==e.fieldSize){if(Number(o[_])===a){c(n[Number(o[_+1])]);for(var y=0;y<l.length;y+=1)n[Number(o[_])].dataset.hintidcolumn===l[y].dataset.hintidtop&&g(l[y])}if(console.log(n[Number(o[_-v])]),void 0!==n[Number(o[_-v])]){if(1!==Number(n[Number(o[_-v])].getAttribute("id"))&&!n[Number(o[_-v])].classList.contains("main_cell_filled")){c(n[Number(o[_-v])]),c(n[Number(o[_+1])]);for(var S=0;S<l.length;S+=1)n[Number(o[_])].dataset.hintidcolumn===l[S].dataset.hintidtop&&g(l[S])}}else{c(n[Number(o[_+1])]);for(var b=0;b<l.length;b+=1)n[Number(o[_])].dataset.hintidcolumn===l[b].dataset.hintidtop&&g(l[b])}v=0}}for(var F=0,C=0;C<f.length;C++)F+=Number(f[C]);if(console.log(F),console.log(d),F===d&&0===m){for(var M=o.length-1;M>=0;M-=1)c(n[Number(o[M])]);setTimeout((function(){for(var e=o.length-1;e>=0;e-=1)n[Number(o[e])].classList.contains("main_cell_crossed")||n[Number(o[e])].classList.contains("main_cell_filled")||(console.log("lastcheck"),c(n[Number(o[e])]))}),0)}}function h(e){var t=document.querySelector(".main_field").children;console.log(e),console.log(t);for(var i=0,l=0;l<t.length;l+=1)t[l].classList.contains("main_cell_filled")&&1===Number(t[l].getAttribute("id"))&&(i+=1),t[l].classList.contains("main_cell_filled")&&Number(t[l].getAttribute("id"));console.log(i),console.log(!0),console.log(i===e.initialCountOfCells),console.log("hello"),i===e.initialCountOfCells&&(clearInterval(M),v())}function v(){x.play();var e=document.querySelector(".timer");console.log(e);var t,i,l=e.innerHTML,n=(t=l.split(":"),i=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var l,n,a,s,o=[],r=!0,c=!1;try{if(a=(i=i.call(e)).next,0===t){if(Object(i)!==i)return;r=!1}else for(;!(r=(l=a.call(i)).done)&&(o.push(l.value),o.length!==t);r=!0);}catch(e){c=!0,n=e}finally{try{if(!r&&null!=i.return&&(s=i.return(),Object(s)!==s))return}finally{if(c)throw n}}return o}}(t,i)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(e,t):void 0}}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],o=n[1],r=60*parseInt(a)+parseInt(o),c='<div class="finish_window">\n              <p class="finish_text">\n                Great! You have solved the nonogram in '.concat(r,' seconds !\n              </p>\n              <div class="finish_close">OK</div>\n            </div>'),d="";5===C.fieldSize?d="easy":10===C.fieldSize?d="medium":15===C.fieldSize&&(d="hard");var m={name:C.image.title,difficulty:d,fulltime:l,seconds:r},g=[];localStorage.getItem("winResults")&&(g=JSON.parse(localStorage.getItem("winResults"))),5===g.length&&(g=g.slice(1)),g.push(m),localStorage.setItem("winResults",JSON.stringify(g)),console.log(c);var u=document.querySelector(".main_container");console.log(u),u.insertAdjacentHTML("beforeend",c);var f=document.querySelector(".finish_window");localStorage.getItem("theme")&&f.classList.add("finish_window_light"),F.style.display="block",document.querySelector(".finish_close").addEventListener("click",_)}function _(){document.querySelector(".finish_window").remove(),F.style.removeProperty("display"),m(event,C,M),w=0,q=0,N=0}document.querySelector(".solution_game").addEventListener("click",(function(){console.log("solution");for(var e=document.querySelectorAll(".main_cell"),t=0;t<e.length;t+=1)e[t].innerHTML="",e[t].classList.contains("main_cell_filled")&&e[t].classList.remove("main_cell_filled"),1===Number(e[t].getAttribute("id"))&&e[t].classList.add("main_cell_filled"),0===Number(e[t].getAttribute("id"))&&e[t].insertAdjacentHTML("beforeend",r);var i=document.querySelectorAll(".left_hint");console.log(i);for(var l=0;l<i.length;l+=1)console.log(i[l].innerHTML),""!==i[l].innerHTML&&i[l].insertAdjacentHTML("beforeend",r);var n=document.querySelectorAll(".top_hint");console.log(n);for(var a=0;a<n.length;a+=1)console.log(n[a].innerHTML),""!==n[a].innerHTML&&n[a].insertAdjacentHTML("beforeend",r)})),document.querySelector(".save_game").addEventListener("click",(function(){console.log(C);var e=document.querySelector(".timer"),t=document.querySelectorAll(".main_cell"),i=document.querySelectorAll(".left_hint"),l=document.querySelectorAll(".top_hint");console.log(t);for(var n=[],a=[],s=[],o=0;o<t.length;o+=1)t[o].classList.contains("main_cell_filled")?n.push("filled"):t[o].classList.contains("main_cell_crossed")?n.push("crossed"):n.push("empty");for(var r=0;r<i.length;r+=1)i[r].children.length>0?a.push("crossed"):a.push("empty");for(var c=0;c<l.length;c+=1)l[c].children.length>0?s.push("crossed"):s.push("empty");var d={picture:JSON.stringify(C),minutes:q,seconds:N,timer:e.innerHTML,clickCount:w,arrayofmainFieldCells:n,arrayOfLeftHints:a,arrayOfTopHints:s};console.log(d),localStorage.setItem("savedGame",JSON.stringify(d))}));const p=e.p+"assets\\sounds\\fillsound.mp3",L=e.p+"assets\\sounds\\emptysound.mp3",y=e.p+"assets\\sounds\\crosssound.mp3",S=e.p+"assets\\sounds\\winsound.mp3",b=e.p+"assets\\images\\soundoff.png";document.querySelector(".main_container");var F=document.querySelector(".overlay"),C={fieldSize:5,image:i[5][0],countOfFilledCells:0,initialCountOfCells:0},M="",q=0,N=0,w=0,D=!1,A=new Audio(p),T=new Audio(L),H=new Audio(y),x=new Audio(S);console.log(C),l(0,C),n(C),a(C);var E=document.querySelector(".main_field");function O(){var e=document.querySelector(".timer");N>60&&(q+=1,N=0),N+=1,q>=10&&N<10?e.textContent="".concat(q,":0").concat(N):q>=10&&N>=10?e.textContent="".concat(q,":").concat(N):N<10?e.textContent="0".concat(q,":0").concat(N):N>=10&&(e.textContent="0".concat(q,":").concat(N))}function z(e){var t=e.target;console.log(t),t.classList.add("image_name_play"),localStorage.getItem("theme")&&t.classList.add("image_name_play_light");for(var l=document.querySelectorAll(".image_name"),n=0;n<l.length;n+=1)l[n].classList.contains("image_name_play")&&l[n].innerHTML!==t.innerHTML&&(l[n].classList.remove("image_name_play"),localStorage.getItem("theme")&&l[n].classList.remove("image_name_play_light"));var a=0;t.classList.contains("image_easy")&&(a=5),t.classList.contains("image_medium")&&(a=10),t.classList.contains("image_hard")&&(a=15);for(var s=0;s<i[a].length;s+=1)i[a][s].title===t.innerHTML.toLowerCase()&&(C.fieldSize=a,C.image=i[a][s])}E.addEventListener("click",(function(e){console.log(e.button),0===e.button&&(function(e){var t=e.target;t.classList.contains("cross")&&(t=e.target.parentElement),t.classList.contains("cross_line")&&(t=e.target.parentElement.parentElement),t.classList.contains("main_cell")&&(t.classList.contains("main_cell_filled")?d(e):(t.classList.add("main_cell_filled"),H.pause(),T.pause(),A.pause(),H.load(),T.load(),A.load(),A.play(),t.dataset.fill="true",u(C,t),f(C,t),C.countOfFilledCells-=1,console.log(C.countOfFilledCells),0===C.countOfFilledCells&&h(C),t.classList.contains("main_cell_crossed")&&(t.classList.remove("main_cell_crossed"),t.innerHTML="",delete t.dataset.crossed)))}(e),w+=1,console.log(C.countOfFilledCells),1!==w&&!0!==D||(setTimeout((function(){O()}),0),M=setInterval((function(){O()}),1e3),D=!1))})),E.addEventListener("contextmenu",(function(e){e.preventDefault(),c(e)})),document.querySelector(".restart_game").addEventListener("click",(function(e){w=0,q=0,N=0,m(e,C,M)})),document.querySelector(".levels").addEventListener("click",(function(){var e=document.querySelector(".main_container");console.log(e),e.insertAdjacentHTML("beforeend",'<div class="levels_widow">\n                             <div class="levels_item easy">\n                               <p class="level_title">Easy</p>\n                               <div class="level_variants easy"></div>\n                             <div>\n                             <div class="levels_item medium">\n                               <p class="level_title">Medium</p>\n                               <div class="level_variants medium"></div>\n                             <div>\n                             <div class="levels_item hard">\n                               <p class="level_title">Hard</p>\n                               <div class="level_variants hard"></div>\n                             <div>\n                             <div class="level_close">OK</div>\n                           </div>');for(var t=document.querySelectorAll(".level_variants"),l=0;l<t.length;l+=1){if(t[l].classList.contains("easy"))for(var n=0;n<i[5].length;n+=1){var a=document.createElement("div");a.classList.add("image_name"),localStorage.getItem("theme")&&a.classList.add("image_name_light"),a.classList.add("image_easy"),a.innerHTML=i[5][n].title.charAt(0).toUpperCase()+i[5][n].title.slice(1).toLowerCase(),a.addEventListener("click",(function(e){return z(e)})),t[l].append(a)}if(t[l].classList.contains("medium"))for(var s=0;s<i[10].length;s+=1){var o=document.createElement("div");o.classList.add("image_name"),localStorage.getItem("theme")&&o.classList.add("image_name_light"),o.classList.add("image_medium"),o.innerHTML=i[10][s].title.charAt(0).toUpperCase()+i[10][s].title.slice(1).toLowerCase(),o.addEventListener("click",(function(e){return z(e)})),t[l].append(o)}if(t[l].classList.contains("hard"))for(var r=0;r<i[15].length;r+=1){var c=document.createElement("div");c.classList.add("image_name"),localStorage.getItem("theme")&&c.classList.add("image_name_light"),c.classList.add("image_hard"),c.innerHTML=i[15][r].title.charAt(0).toUpperCase()+i[15][r].title.slice(1).toLowerCase(),c.addEventListener("click",(function(e){return z(e)})),t[l].append(c)}}F.style.display="block",document.querySelector(".level_close").addEventListener("click",(function(e){return function(e){e.stopPropagation(),document.querySelector(".levels_widow").remove(),F.style.removeProperty("display"),m(e,C,M),w=0,q=0,N=0}(e)}));var d=document.querySelector(".levels_widow");localStorage.getItem("theme")&&d.classList.add("levels_window_light")})),document.querySelector(".random_game").addEventListener("click",(function(e){return function(e){var t=Object.keys(i).length,l=Object.keys(i),n=Math.floor(Math.random()*t);console.log(l),console.log(n);var a=Number(l[n]);console.log(a);var s=Math.floor(Math.random()*i[a].length);console.log(s),C.fieldSize=a,C.image=i[a][s],m(e,C,M),w=0,q=0,N=0}(e)}));var I=document.querySelector(".sound");I.addEventListener("click",(function(e){return I.classList.toggle("sound_off"),localStorage.getItem("theme")&&I.classList.toggle("sound_off_light"),void(I.classList.contains("sound_off")?(I.children[0].src=b,A.volume=0,T.volume=0,H.volume=0,x.volume=0):I.classList.contains("sound_off")||(I.children[0].src=t,A.volume=1,T.volume=1,H.volume=1,x.volume=1))}));document.querySelector(".results").addEventListener("click",(function(e){return function(e){var t=document.querySelector(".main_container");if(console.log(t),t.insertAdjacentHTML("beforeend",'<div class="results_table">\n                         <p class="results_title">Win results</p>\n                         <div class="results_block">\n                           <div class="results_hat">\n                              <p class="hat_item">Title</p>\n                              <p class="hat_item">Level</p>\n                              <p class="hat_item">Time</p>\n                           </div>\n                           <div class="table">\n                           </div>\n                         </div>\n                         <div class="results_close">OK</div>\n                      <div>'),F.style.display="block",document.querySelector(".results_close").addEventListener("click",(function(e){return function(e){e.stopPropagation(),document.querySelector(".results_table").remove(),F.style.removeProperty("display")}(e)})),localStorage.getItem("winResults")){var i=JSON.parse(localStorage.getItem("winResults")).sort((function(e,t){return e.seconds-t.seconds}));console.log(JSON.parse(localStorage.getItem("winResults"))),console.log(i);for(var l=document.querySelector(".table"),n=0;n<i.length;n+=1){var a=document.createElement("div");for(var s in a.classList.add("table_item"),i[n]){if("seconds"===s.valueOf())break;var o=document.createElement("div");o.classList.add("table_item_item"),o.innerHTML=i[n][s],a.append(o)}l.append(a)}}var r=document.querySelector(".results_table");localStorage.getItem("theme")&&r.classList.add("results_table_light")}()}));var k=document.querySelector(".themes");function j(e){console.log(k),k.classList.toggle("themes_light");var t=document.querySelector(".main_container"),i=document.querySelectorAll(".settings_item"),l=document.querySelector(".footer"),n=document.querySelector(".header"),a=document.querySelector(".empty_field"),s=document.querySelector(".top_field"),o=document.querySelector(".left_field"),r=document.querySelector(".main_field"),c=document.querySelectorAll(".main_cell"),d=document.querySelectorAll(".top_hint"),m=document.querySelectorAll(".left_hint"),g=document.querySelector(".name"),u=document.querySelector(".github");if(k.classList.contains("themes_light")){localStorage.setItem("theme","light"),t.classList.add("main_container_light");for(var f=0;f<i.length;f+=1)i[f].classList.add("settings_item_light");l.classList.add("footer_light"),n.classList.add("header_light"),a.classList.add("empty_field_light"),s.classList.add("top_field_light"),o.classList.add("left_field_light"),r.classList.add("left_field_light"),g.classList.add("name_light"),u.classList.add("github_light");for(var h=0;h<c.length;h+=1)c[h].classList.add("main_cell_light");for(var v=0;v<d.length;v+=1)d[v].classList.add("top_hint_light");for(var _=0;_<m.length;_+=1)m[_].classList.add("left_hint_light")}else if(!k.classList.contains("themes_light")){localStorage.removeItem("theme"),t.classList.remove("main_container_light");for(var p=0;p<i.length;p+=1)i[p].classList.remove("settings_item_light");l.classList.remove("footer_light"),n.classList.remove("header_light"),a.classList.remove("empty_field_light"),s.classList.remove("top_field_light"),o.classList.remove("left_field_light"),r.classList.remove("left_field_light"),g.classList.remove("name_light"),u.classList.remove("github_light");for(var L=0;L<c.length;L+=1)c[L].classList.remove("main_cell_light");for(var y=0;y<d.length;y+=1)d[y].classList.remove("top_hint_light");for(var S=0;S<m.length;S+=1)m[S].classList.remove("left_hint_light")}}function J(e){e.stopPropagation(),document.querySelector(".last_window").remove(),F.style.removeProperty("display")}k.addEventListener("click",(function(e){return j()})),window.addEventListener("load",(function(e){setTimeout((function(e){localStorage.getItem("theme")&&j()}),0),console.log(e)})),document.querySelector(".last_game").addEventListener("click",(function(){document.querySelector(".main_container").insertAdjacentHTML("beforeend",'<div class="last_window">\n                                 <p class="last_text">\n                                      Do you want to load last game?\n                             </p>\n                             <div class="last_choice">\n                                 <div class="last_no last_button">No</div>\n                                <div class="last_yes last_button">Yes</div>\n                             </div>\n                             </div>'),F.style.display="block";var e=document.querySelector(".last_window");localStorage.getItem("theme")&&e.classList.add("last_window_light");var t=document.querySelector(".last_yes");document.querySelector(".last_no").addEventListener("click",(function(e){J(e)})),t.addEventListener("click",(function(e){J(e),clearInterval(M),function(){if(localStorage.getItem("savedGame")){var e=JSON.parse(localStorage.getItem("savedGame")),t=JSON.parse(e.picture);console.log(t),document.querySelector(".timer").innerHTML=e.timer,document.querySelector(".name").innerHTML=t.image.title.toUpperCase(),C=t,w=e.clickCount,q=e.minutes,N=e.seconds;var i=JSON.parse(JSON.stringify(t.countOfFilledCells));l(0,C),n(C),a(C);for(var s=document.querySelectorAll(".main_cell"),o=document.querySelectorAll(".left_hint"),c=document.querySelectorAll(".top_hint"),d=0;d<e.arrayofmainFieldCells.length;d+=1)"filled"===e.arrayofmainFieldCells[d]?s[d].classList.add("main_cell_filled"):"crossed"===e.arrayofmainFieldCells[d]&&(s[d].classList.add("main_cell_crossed"),s[d].insertAdjacentHTML("beforeend",r));for(var m=0;m<e.arrayOfLeftHints.length;m+=1)"crossed"===e.arrayOfLeftHints[m]&&o[m].insertAdjacentHTML("beforeend",r);for(var g=0;g<e.arrayOfTopHints.length;g+=1)"crossed"===e.arrayOfTopHints[g]&&c[g].insertAdjacentHTML("beforeend",r);D=!0,setTimeout((function(){console.log(t),console.log(i),C.countOfFilledCells=i,console.log(C),console.log(w),console.log(C.countOfFilledCells)}),0)}}()}))})),e.p,e.p,e.p})();