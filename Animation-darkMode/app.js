const moonPath = "M17 27.5C17 42.6878 30.0943 55 30.0943 55C13.4737 55 0 42.6878 0 27.5C0 12.3122 13.4737 0 30.0943 0C30.0943 0 17 12.3122 17 27.5Z";

const sunPath = "M60.1887 27.5C60.1887 42.6878 46.715 55 30.0943 55C13.4737 55 0 42.6878 0 27.5C0 12.3122 13.4737 0 30.0943 0C46.715 0 60.1887 12.3122 60.1887 27.5Z";

const darkMode = document.querySelector("#darkMode");

let toggle = false;

darkMode.addEventListener("click", () => {

    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    timeline.add({
            targets: ".sun",
            d: [
                { value: toggle ? sunPath : moonPath }
            ]
        })
        .add({
            targets: "#darkMode",
            rotate: toggle ? 0 : 320
        }, '-= 350')
        .add({
            targets: "section",
            backgroundColor: toggle ? "rgb(255, 255, 255)" : "rgb(22, 22, 22)",
            color: !toggle ? "rgb(255, 255, 255)" : "rgb(22, 22, 22)"
        }, '-= 700');
    toggle = !toggle;
});