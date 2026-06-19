# 🚀 GitAchieve | Ultimate GitHub Achievement Hunter Guide

A premium, interactive, and bilingual single-page web application designed to help developers guide and automate the collection of GitHub profile achievements (like YOLO, Pull Shark, Quickdraw, and Pair Extraordinaire) using dynamically generated shell scripts (Bash/PowerShell) and GitHub CLI commands.

*Baca dalam bahasa lain: [English](README.md), [Bahasa Indonesia](README.md#id-bahasa-indonesia)*

---

## ✨ Features

1. **Dynamic Custom Command Generator:**
   - Real-time updates of Git/GitHub CLI scripts when modifying your username or target repository.
   - Cross-platform support: Switchable scripts between **Bash** (Linux/macOS/Git Bash) and **PowerShell** (Windows).

2. **Achievements Automation:**
   - **YOLO:** Automated branch checkout, file editing, PR opening, and instant merge without code reviews.
   - **Pull Shark:** Interactive loop script to farm multiple pull requests sequentially (2 for Bronze, 16 for Silver, 128 for Gold, 1024 for Platinum).
   - **Quickdraw:** Automated issue creation and immediate closure within under 10 seconds.
   - **Pair Extraordinaire:** Automatic injection of co-authored metadata inside commit messages to credit multiple authors.
   - **Galaxy Brain / Starstruck / Public Sponsor:** Manual walk-through recipe cards.

3. **Premium User Experience (UX):**
   - **Bilingual Interface:** Toggle the entire app instantly between English and Bahasa Indonesia.
   - **Shape Consistency Lock:** Visual elements aligned to exact ratios (panels/cards at `16px` radius; interactive buttons at `30px` pill radius).
   - **Tactile Button Press:** Springy click feedback scale (`scale-[0.97]`) mimicking physical button presses.
   - **Refraction Glassmorphic Look:** Glowing border refraction panels matching GitHub's official Dark design language.
   - **Progress Tracker:** Local checkbox progress is automatically saved to browser `localStorage` and drives a completion progress display.

---

## 🛠️ Tech Stack & Design Dials

- **HTML5 & Vanilla Javascript** (100% Client-side, no build steps required)
- **Vanilla CSS3** featuring CSS variables, glassmorphic filters, and transitions
- **tasteskill Dials:**
  - `DESIGN_VARIANCE: 6` (Structured alignment with asymmetric accents)
  - `MOTION_INTENSITY: 5` (Tactile feedback click scale + smooth hover transitions)
  - `VISUAL_DENSITY: 5` (Cockpit layout for structured data view)

---

## 🚀 Getting Started

1. **Clone this repository:**
   ```bash
   git clone https://github.com/your-username/github-achievements-farmer.git
   cd github-achievements-farmer
   ```
2. **Open the interface:**
   Double-click the `index.html` file or open it directly in any modern web browser.
3. **Usage:**
   - Enter your **GitHub Username** and your **Farming Repository** (make sure it's a dedicated private test repository).
   - Choose your shell target, select the achievement card, copy the generated script, and run it inside your local repository terminal.

---

<h2 id="id-bahasa-indonesia">🇮🇩 Bahasa Indonesia</h2>

GitAchieve adalah aplikasi web satu halaman interaktif dan premium yang dirancang untuk membantu developer mengotomatiskan koleksi lencana pencapaian (achievements) profil GitHub menggunakan script otomatis (Bash/PowerShell) dan GitHub CLI.

### ✨ Fitur Utama

1. **Generator Script Dinamis:**
   - Script akan ter-update secara real-time saat Anda mengubah nama username atau repositori target.
   - Dukungan lintas platform: **Bash** (Linux/macOS/Git Bash) dan **PowerShell** (Windows).

2. **Otomatisasi Pencapaian:**
   - **YOLO:** Otomatisasi checkout branch, pembuatan commit, pembukaan PR, dan merge instan tanpa review.
   - **Pull Shark:** Loop script untuk men-farm PR dalam jumlah banyak secara berurutan (Bronze, Silver, Gold, Platinum).
   - **Quickdraw:** Otomatisasi pembuatan issue dan langsung menutupnya dalam hitungan detik.
   - **Pair Extraordinaire:** Penyusunan metadata co-author secara otomatis dalam pesan commit untuk mencantumkan penulis bersama.

3. **Aksesibilitas & Estetika Premium:**
   - Pilihan bahasa instan antara **Bahasa Indonesia** dan **English**.
   - Efek fisik tekan tombol pegas saat diklik (`scale-[0.97]`).
   - Penataan sudut yang konsisten (panel/kartu pada radius `16px`; tombol interaktif berbentuk kapsul pada radius `30px`).
   - Penyimpanan kemajuan (progress tracker) otomatis menggunakan `localStorage` browser.

---

## ⚠️ Safety Warning & Disclaimer

Achievement farming scripts should **ONLY** be executed on a **private repository** created solely for this purpose. This ensures zero impact on other active repositories, contributors, or main branch policies.

*Harap gunakan script otomasi ini **hanya** pada **repositori privat** yang dibuat khusus untuk pengujian. Jangan jalankan pada repositori produksi aktif untuk menghindari spam kontribusi.*
