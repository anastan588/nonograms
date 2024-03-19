import soundonImage from './../images/soundon.png';
console.log(soundonImage);

document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="main_container">
              <div class="overlay"></div>
              <header class="header">
                 <h1>Nonograms Game</h1>
              </header>
              <main class="main">
                <section class="game">
                 
                  <div class="timer">00:00</div>
                  <div class="nonograms_settings_field">
                   <div class="levels settings_item">Levels</div>
                   <div class="random_game settings_item">Random</div>
                   <div class="last_game settings_item">Last Game</div>
                   <div class="solution_game settings_item">Solution</div>
                   
                  </div>
                  <div class="nonograms_settings_field">
                  <div class="results settings_item">Results</div>
                   <div class="restart_game settings_item">Restart</div>
                   <div class="save_game settings_item">Save</div>  
                   <div class="themes settings_item">Themes</div>
                   <div class="sound settings_item">
                     <img class="sound_image" alt="sound" src="${soundonImage}">
                   </div> 
                 </div> 
                 <div class="name"></div>
                 <div class="complicity"></div>
                  <div class="nonograms_game_field">
                    <div class="empty_field"></div>
                    <div class="top_field"></div>
                    <div class="left_field"></div>
                    <div class="main_field"></div>
                  </div>
                 </section>
              </main>
              <footer class="footer">
                 <p class="footer_item">
                   anastan588
                 </p>
                 <p class="footer_item">
                   2024
                 </p>
                 <a class="footer_item github" href="https://github.com/anastan588" target="_blank">
                   Github
                 </a>
              </footer>
            </div>`
);
