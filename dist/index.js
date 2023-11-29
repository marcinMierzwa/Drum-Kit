function playAudioDrums(e) {
    var audio = (document.querySelector("audio[data-key=\"".concat(e.key, "\"]")));
    if (!audio)
        return;
    audio.currentTime = 0;
    audio.play();
}
function transformDrumKits(e) {
    var key = document.querySelector(".key[data-key=\"".concat(e.key, "\"]"));
    key.classList.add("playing");
    bindKey();
}
function bindKey() {
    var keys = document.querySelectorAll(".key");
    keys.forEach(function (key) {
        key.addEventListener("transitionend", removeTransition);
    });
}
function removeTransition(e) {
    if (e.propertyName !== "transform")
        return;
    this.classList.remove("playing");
}
window.addEventListener("keydown", playAudioDrums);
window.addEventListener("keydown", transformDrumKits);
// window.addEventListener("keydown", function (e: Event): void {
//   const audio = <HTMLAudioElement>(
//     document.querySelector(`audio[data-key="${e.keyCode}"]`)
//   );
//   const key = <HTMLElement>(
//     document.querySelector(`.key[data-key="${e.keyCode}"]`)
//   );
//   if (!audio) {
//     return;
//   }
//   audio.currentTime = 0;
//   audio.play();
//   key.classList.add("playing");
// });
// function removeTransition(e: { propertyName: string; }) {
// if(e.propertyName !== 'transform' ) return;
// this.classList.remove("playing");
// }
// const keys = document.querySelectorAll(".key") as NodeListOf<HTMLElement>;
// keys.forEach((key: HTMLElement) => {
//   key.addEventListener("transitionend", removeTransition);
// });
