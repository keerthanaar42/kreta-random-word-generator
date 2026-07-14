# 🎰 KRETA — Random Topic Generator

A simple slot-machine style web tool that picks a random topic for you to explain out loud — built for quick viva/interview prep across C, Data Structures, Microcontrollers, and Linux.

## What it does

1. Pick a module — **C**, **DS**, **MC**, or **LI**
2. Hit **Spin** — the reels shuffle and land on a random topic
3. Hit **Timer** to set a countdown (1, 3, 5, or 10 minutes)
4. Explain the topic out loud before the timer runs out

## Modules

| Module | Covers |
|---|---|
| **C** | Pointers, structures, memory management, file handling, preprocessor |
| **DS** | Arrays, linked lists, stacks, queues, trees, graphs, hash tables |
| **MC** | SPI, UART, I2C, ADC, PWM, interrupts, timers, EEPROM |
| **LI** | Signals, threads, fork, IPC, semaphores, system calls, deadlocks |

## Built with

- HTML
- CSS
- Vanilla JavaScript

## Run it locally

Just open `index.html` in a browser — no build step, no dependencies.

```bash
git clone https://github.com/keerthanaar42/kreta-random-word-generator.git
cd kreta-random-word-generator
open index.html
```

## Why I built this

Repeating the same 4-5 topics when practicing gets stale fast. KRETA forces random recall instead of rehearsed answers, with a timer so you also practice explaining under pressure.
