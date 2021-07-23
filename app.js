const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  
  const video = document.querySelector(".vid-container video");
  
  const sounds = document.querySelectorAll(".sound-column button")
  
  const timeDisplay = document.querySelector(".time-display")
  const timeSelect = document.querySelectorAll(".time-button")
  
  const outline = document.querySelector(".outline")
  
  let duration = 600;
  
  
  
  sounds.forEach(sound =>{
    sound.addEventListener("click", function(){
      song.src = this.getAttribute('data-sound');
      video.src = this.getAttribute('data-video');
      checkPlaying(song);
    })
  })
  
  
  play.addEventListener('click', () =>{
   checkPlaying(song);
  });
  
  
  
  
  timeSelect.forEach(option => {
    option.addEventListener("click", function() {
      duration = this.getAttribute("data-time");
      timeDisplay.textContent = `${Math.floor(duration / 60)}:${Math.floor(duration % 60 )}`;
    });
  });
  
  const checkPlaying = song =>{
    if(song.paused){
      song.play();
      video.play();
      document.getElementById('headline').hidden = true;
      outline.classList.add('playing');
    
    play.src = "./svg/pause.svg";
   
    console.log(play.src);
    }else{
      song.pause();
      video.pause();
      play.src = "./svg/play.svg";
      outline.classList.remove('playing');
    
    }
  }
  
  song.ontimeupdate = () =>{
    let currentTime = song.currentTime;
    let elapsed = duration - currentTime;
    let seconds = Math.floor(elapsed % 60) ;
    let minutes = Math.floor(elapsed / 60) ;
  
  
  timeDisplay.textContent = `${minutes}:${seconds}`;
  
  if(currentTime >= duration){
    song.pause();
    song.currentTime = 0;
    play.src = './svg/play.svg';
    video.pause();
  }
  
  
  }
  
  };
  
  app();