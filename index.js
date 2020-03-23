class Timer {
	constructor(durationInput, startButton, pauseButton, callbacks) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		if (callbacks) {
			this.onStart = callbacks.onStart;
		}

		this.startButton.addEventListener("click", this.start);
		this.pauseButton.addEventListener("click", this.pause);
	}

	start = () => {
		this.onStart();
		this.tick();
		this.intervalId = setInterval(this.tick, 1000);
	};

	pause = () => {
		clearInterval(this.intervalId);
	};

	tick = () => {
		if (this.timeRemaining <= 0) {
			this.pause();
		} else {
			this.timeRemaining -= 1;
		}
	};

	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}

	set timeRemaining(time) {
		this.durationInput.value = time;
	}
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart() {
		console.log("Timer started");
	},
	onTick() {},
	onComplete() {}
});
