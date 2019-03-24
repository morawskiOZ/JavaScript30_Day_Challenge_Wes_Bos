/* Get Our Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const toggleIcon = player.querySelector("#toggleIcon");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullScreen = player.querySelector('#fullScreen')

// Build the function
const togglePlay = () => {
  // if(video.paused) {
  //   video.play()
  // } else {
  //   video.pause()
  // }
  const method = video.paused ? "play" : "pause";
  video[method]();
};
const updateButton = () => {
  toggleIcon.classList.toggle("fa-play");
  toggleIcon.classList.toggle("fa-pause-circle");
};

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach(button => button.addEventListener("click", skip));

// change the volume and speed
function handleRangeUpdate() {
  video[this.name] = this.value;
}
ranges.forEach(range => range.addEventListener("input", handleRangeUpdate));

// manipulate progress bar 
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
video.addEventListener("timeupdate", handleProgress);

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}

let mouseDown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e))
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)

// full screen

const  changeScreenSize  =()   => {
  console.log(video);
  video.requestFullscreen()
}

fullScreen.addEventListener("click" , changeScreenSize)