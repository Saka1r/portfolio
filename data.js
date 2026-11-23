// Единственный источник данных. Правишь только его — сайт и PDF обновятся сами.
const DATA = {
  user: {
    name: "Svyatoslav Mikhailov",
    alias: "sakair",
    age: 17,
    role: "Student · C / C++ / Rust / Python / asm",
    location: "Russia",
    email: "sakairlinux@gmail.com",
    github: "https://github.com/Saka1r",
    site: "https://saka1r.github.io/portfolio/",
    telegram: "sakairCode", // ник без @ — строка появится сама
  },

  summary:
    "17 y.o. student from Russia. I build small systems from scratch to understand " +
    "how they work: a VCS, a terminal editor, a CPU emulator, an interpreter in pure " +
    "assembly — and a fully offline voice assistant. Currently going deeper into Rust " +
    "and computer architecture.",

  kernel: {
    patch: "staging: sm750fb: rename p_PLL to pll in sm750_format_pll_reg()",
    accepted: "2026-11-20",
    tree: "staging-next",
    maintainer: "Greg Kroah-Hartman",
    url: "https://lore.kernel.org/all/?q=sm750fb+p_PLL",
    note: "A tiny cleanup patch. More in progress.",
    workflow: "Went through the full upstream process: checkpatch, get_maintainer, git send-email, mailing-list review.",
  },

  projects: [
    { name: "nuta", stack: "Rust", url: "https://github.com/Saka1r/nuta",
      desc: "Modal terminal editor: hand-written TUI engine (raw mode, ANSI, UTF-8), LSP diagnostics, event-driven core." },
    { name: "J.A.R.V.I.S.", stack: "Python · asyncio · Vosk/Whisper · llama.cpp · XTTS v2",
      url: "https://github.com/Saka1r/Jarvis",
      desc: "Fully offline voice assistant: STT → local LLM → TTS. Plugin system, FSM core, tool calling. No cloud." },
    { name: "fu", stack: "C / C++ · zlib", url: "https://github.com/Saka1r/fu",
      desc: "Version control system from scratch — git object model, commits, revert." },
    { name: "brainfuck", stack: "x86-64 NASM", url: "https://github.com/Saka1r/brainfuck",
      desc: "Brainfuck interpreter. No libc — pure Linux syscalls. Boundary tests included." },
    { name: "chip8", stack: "Rust", url: "https://github.com/Saka1r/School_project_cpu",
      desc: "Minimal CPU emulator — fetch, decode, execute." },
	{ name: "Mai catgirl", stack: "Python · asyncio · llama.cpp · telegram " , url: "https://github.com/Saka1r/Mai_catgirl",
		desc: "Lazy userbot for chating. About: https://saka1r.github.io/Mai_catgirl/" },

  ],

  skills: [
    ["Languages", "C, Python, Rust, x86-64 assembly (NASM), Bash"],
    ["Systems & tools", "Linux (Arch daily driver), git, neovim, Makefile / Cargo"],
    ["Hardware", "ESP32, Raspberry Pi / Orange Pi, soldering, 3D printing"],
    ["Currently learning", "Rust in depth, computer architecture, upstream kernel workflow"],
  ],

  education: [
    "School — 11th grade, math & physics focus",
    "Kvantorium — 2 years of hands-on project work",
    "Self-study: K&R, Grokking Algorithms, Rust in Action, computer architecture",
  ],

  hardware: [
    "Daily driver: Arch Linux + Hyprland",
    "Boards: Orange Pi Zero 3, Raspberry Pi Zero 2W",
    "MCU: ESP32, Arduino",
    "3D printing: modeling & printing parts for my setups",
    "Electronics & soldering",
  ],

  books: {
    finished: ["The C Programming Language (K&R)", "Grokking Algorithms"],
    reading: ["Rust in Action", "Digital Design and Computer Architecture", "Clean Code"],
  },

  hobbies: ["Electric guitar", "Electronics & soldering", "3D printing"],
};
