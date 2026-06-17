const topics = {

    C: [
        "Pointers",
        "Structures",
        "Bitwise operators",
        "dynamic allocation",
        "Strings",
        "File Handling",
        "Preprocessor",
        "modifiers & qualifiers",
        "pass-by-value / pass-by-reference",
        "storage classes",
        "memory management",
        "memory layout",
        "compilation stages",
        "data types",
        "user-defined data types",
        "macro / function",
        "const keyword",
        "volatile keyword",
        "FILE"
    ],

    DS: [
        "Array",
        "Linked List",
        "Stack",
        "Queue",
        "Tree",
        "Graph",
        "Hash Table",
        "time complexity",
        "space complexity",
        "data structures",
        "stack implementation",
        "data structures",
        "sorting",
        "circular queue",
        "hash table"
    ],

    MC: [
        "SPI",
        "UART",
        "I2C",
        "ADC",
        "PWM",
        "Interrupts",
        "DMA",
        "class c amplifier",
        "schmitt trigger",
        "CMOS",
        "Boolean expressions",
        "Op-amp",
        "phase difference",
        "avalanche breakdown",
        "zener breakdown",
        "SCR / TRIAC",
        "watchdog timer",
        "timers / counters",
        "polling",
        "baude rate",
        "EEPROM",
        "MOSFET",
        "BJT",
        "RTC",
        "mc / mp"
    ],

    LI: [
        "Signals",
        "Threads",
        "Socket",
        "Fork",
        "IPC",
        "Semaphore",
        "Zombie Process",
        "OS kernel",
        "hard link / soft link",
        "system calls",
        "wait",
        "Process Control Block",
        "context switching",
        "pipelines",
        "shared memory",
        "deadlock",
        "mutex",
        "race condition",
        "booting process"
    ]
};

let currentModule = "C";
let selectedWord = "";

const buttons =
    document.querySelectorAll(".module-btn");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        buttons.forEach(
            b => b.classList.remove("active")
        );

        btn.classList.add("active");

        currentModule =
            btn.dataset.module;
    });

});


document
    .getElementById("spinBtn")
    .addEventListener("click", spin);

function spin() {

    const words =
        topics[currentModule];

    let count = 0;

    const interval =
        setInterval(() => {

            const middle =
                words[
                Math.floor(
                    Math.random() * words.length)];

            const top =
                words[
                Math.floor(
                    Math.random() * words.length)];

            const bottom =
                words[
                Math.floor(
                    Math.random() * words.length)];

            document
                .getElementById("top-word")
                .textContent = top;

            document
                .getElementById("middle-word")
                .textContent = middle;

            document
                .getElementById("bottom-word")
                .textContent = bottom;

            count++;

            if (count > 25) {

                clearInterval(interval);

                selectedWord = middle;
            }

        }, 100);
}



const star =
    document.getElementById("star");

star.addEventListener("click", () => {

    star.classList.add("bounce");

    setTimeout(() => {

        star.classList.remove("bounce");

    }, 500);
});



const mainPage =
    document.getElementById("mainPage");

const timerPage =
    document.getElementById("timerPage");

document
    .getElementById("timerBtn")
    .addEventListener("click", () => {

        mainPage.style.display = "none";

        timerPage.style.display = "block";

        document
            .getElementById("timerTopic")
            .textContent =
            selectedWord || "No Topic Selected";
    });



document
    .getElementById("backBtn")
    .addEventListener("click", () => {

        timerPage.style.display = "none";

        mainPage.style.display = "block";
    });



let timer;
let timeLeft = 300;

const circle =
    document.getElementById(
        "progressCircle");

document
    .getElementById("startTimer")
    .addEventListener("click", () => {

        clearInterval(timer);

        timeLeft =
            parseInt(
                document
                    .getElementById("timeSelect")
                    .value);

        const totalTime = timeLeft;

        timer = setInterval(() => {

            let min =
                Math.floor(timeLeft / 60);

            let sec =
                timeLeft % 60;

            document
                .getElementById(
                    "timerDisplay")
                .textContent =

                `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

            const offset =
                754 -
                (timeLeft / totalTime) * 754;

            circle.style
                .strokeDashoffset =
                offset;

            timeLeft--;

            if (timeLeft < 0) {

                clearInterval(timer);

                alert("Time Up!");
            }

        }, 1000);

    });



document
    .getElementById("resetTimer")
    .addEventListener("click", () => {

        clearInterval(timer);

        document
            .getElementById("timerDisplay")
            .textContent = "05:00";

        circle.style
            .strokeDashoffset = 0;
    });