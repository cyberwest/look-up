// script.js

// store switch buttons in an array in the dom
	var switchButtons = document.querySelectorAll(".switch-button");
	var videoWrappers = document.querySelectorAll(".video-wrapper");

	var videoWindow = document.getElementById("video-window");

	// define the landing play button 
	var landingPlay = document.getElementById("landing-play");
	// define the video play button
	var videoPlay = document.getElementById("video-play");

	// add event listener to landing play button
	landingPlay.addEventListener("click", landingPlayVideo);
	
	// add event listener to video play button
	videoPlay.addEventListener("click", videoPlayVideo);

	var videoOne = document.getElementById("video-one"),
		videoTwo = document.getElementById("video-two"),
		videoThree = document.getElementById("video-three");

	var audioThree = document.getElementById("audio-three");


	// loop to add event listener to each switch button
	for(var i = 0; i < switchButtons.length; i++) {

		// add event listener to each button in switchButtons array
		switchButtons[i].addEventListener("click", switchVideo);
	
	}

	// switch video function
	function switchVideo(e) {

		// variable to recieve dataset
		var target = e.target.dataset.video;

		// log the button clicked
		console.log("Switch to video " + target)

		// if/else statement to run code depending on the target
		if (target === "one") {

			// add active classes
			switchButtons[0].classList.add("button-active");
			videoWrappers[0].classList.add("video-active");

			// mute inactive videos, unmute the active video
			videoOne.muted = false;
			videoTwo.muted = true;
			videoThree.muted = true;

			audioThree.muted = true;

			// remove active classes
			switchButtons[1].classList.remove("button-active");
			videoWrappers[1].classList.remove("video-active");
			switchButtons[2].classList.remove("button-active");
			videoWrappers[2].classList.remove("video-active");

			// log to console
			console.log("Video has been switched to " + target);

		// if video two switch is pressed
		} else if (target === "two") {

			// add active classes
			switchButtons[1].classList.add("button-active");
			videoWrappers[1].classList.add("video-active");

			// mute inactive videos, unmute the active video
			videoTwo.muted = false;
			videoOne.muted = true;
			videoThree.muted = true;

			audioThree.muted = true;

			// remove active classes
			switchButtons[0].classList.remove("button-active");
			videoWrappers[0].classList.remove("video-active");
			switchButtons[2].classList.remove("button-active");
			videoWrappers[2].classList.remove("video-active");

			// log to console
			console.log("Video has been switched to " + target);

			// if video three switch is pressed
		} else if (target === "three") {
			
			// add active classes
			switchButtons[2].classList.add("button-active");
			videoWrappers[2].classList.add("video-active");
			videoWrappers[2].classList.add("video-active");

			// mute inactive videos, unmute the active video
			videoThree.muted = false;
			videoOne.muted = true;
			videoTwo.muted = true;

			audioThree.muted = false;

			// remove active classes
			switchButtons[0].classList.remove("button-active");
			videoWrappers[0].classList.remove("video-active");
			switchButtons[1].classList.remove("button-active");
			videoWrappers[1].classList.remove("video-active");

			// log to console
			console.log("Video has been switched to " + target);

		}

	}

		// function for playing video using landing page button
	function landingPlayVideo(e) {

		// play all videos
		videoOne.play();
		videoTwo.play();
		videoThree.play();

		audioThree.play();


		videoWindow.classList.add("move-content");

		// change videoPlay button text to pause
		videoPlay.innerHTML = "Pause";
		// add "playing" class to video play button
		videoPlay.classList.add("playing");

	}

	// function for playing and pausing video using the video tools
	function videoPlayVideo(e) {
		// change video play button text to play
		videoPlay.innerHTML = "Play";

		// if videoplay button contains playing class, pause all videos if button is pressed
		if(videoPlay.classList.contains("playing")) {
			videoOne.pause();
			videoTwo.pause();
			videoThree.pause();

			audioThree.pause();

			// add paused class to video play button
			videoPlay.classList.add("paused");
			// remove the playing class to play button
			videoPlay.classList.remove("playing");

			// if videoPlay button contains paused class, play all video if button is pressed
		} else if (videoPlay.classList.contains("paused")) {
			videoOne.play();
			videoTwo.play();
			videoThree.play();

			audioThree.play()

			// add playing class to video play button
			videoPlay.classList.add("playing");

			// remove paused class to video play button
			videoPlay.classList.remove("paused");

			// change video play button to "pause";
			videoPlay.innerHTML = "Pause";

		}
	}

videoOne.addEventListener("timeupdate", changeVideo);
videoTwo.addEventListener("timeupdate", changeVideo);
videoThree.addEventListener("timeupdate", changeVideo);

audioThree.addEventListener("timeupdate", changeVideo);

function changeVideo() {

	if(videoOne.currentTime > 20 && videoOne.currentTime < 21) {
		// add active classes
			switchButtons[2].classList.add("button-active");
			videoWrappers[2].classList.add("video-active");

			// mute inactive videos, unmute the active video
			videoThree.muted = false;
			videoOne.muted = true;
			videoTwo.muted = true;

			audioThree.muted = false;

			// remove active classes
			switchButtons[0].classList.remove("button-active");
			videoWrappers[0].classList.remove("video-active");
			switchButtons[1].classList.remove("button-active");
			videoWrappers[1].classList.remove("video-active");

	} else if (videoOne.currentTime > 40 && videoOne.currentTime < 41) {
		// add active classes
			switchButtons[2].classList.add("button-active");
			videoWrappers[2].classList.add("video-active");

			// mute inactive videos, unmute the active video
			videoThree.muted = false;
			videoOne.muted = true;
			videoTwo.muted = true;

			audioThree.muted = false;

			// remove active classes
			switchButtons[0].classList.remove("button-active");
			videoWrappers[0].classList.remove("video-active");
			switchButtons[1].classList.remove("button-active");
			videoWrappers[1].classList.remove("video-active");

	} else if (videoOne.currentTime > 60 && videoOne.currentTime < 61) {
		// add active classes
			switchButtons[2].classList.add("button-active");
			videoWrappers[2].classList.add("video-active");

			// mute inactive videos, unmute the active video
			videoThree.muted = false;
			videoOne.muted = true;
			videoTwo.muted = true;

			audioThree.muted = false;

			// remove active classes
			switchButtons[0].classList.remove("button-active");
			videoWrappers[0].classList.remove("video-active");
			switchButtons[1].classList.remove("button-active");
			videoWrappers[1].classList.remove("video-active");
	}
}









