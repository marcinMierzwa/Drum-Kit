function playAudioDrums(e: KeyboardEvent): void {
  const audio = <HTMLAudioElement>(
    document.querySelector(`audio[data-key="${e.key}"]`)
  );
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function transformDrumKits(e: KeyboardEvent): void {
  const key = <HTMLElement>document.querySelector(`.key[data-key="${e.key}"]`);
  key.classList.add("playing");
  bindKey();
}

function bindKey() {
  const keys = document.querySelectorAll(".key") as NodeListOf<HTMLElement>;
  keys.forEach((key: HTMLElement) => {
    key.addEventListener("transitionend", removeTransition);
  });
}

function removeTransition(e: { propertyName: string }) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

window.addEventListener("keydown", playAudioDrums);
window.addEventListener("keydown", transformDrumKits);
