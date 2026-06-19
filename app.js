// State Management
const state = {
    username: 'your-username',
    repoName: 'github-achievement-farm',
    shellType: 'bash',
    selectedBadge: 'yolo',
    sharkPrCount: '2',
    completedBadges: {},
    lang: 'en'
};

// UI Static Translation Data
const uiTranslations = {
    en: {
        completed: "Completed:",
        configTitle: "⚙️ Dashboard Configuration",
        configSubtitle: "Configure your details below. The scripts and commands will dynamically update with your repository details.",
        labelUsername: "GitHub Username",
        labelRepoName: "Farming Repository",
        labelShellType: "Shell Script Target",
        shellOptionBash: "Bash Script (Linux / macOS / Git Bash)",
        shellOptionPwsh: "PowerShell (Windows)",
        warningTitle: "Important Safety Tip:",
        warningText: "Always run achievement farming scripts on a <strong>private repository</strong> created solely for this purpose. This prevents polluting your active development repos and ensures zero impact on other collaborators.",
        availableAchievements: "🏆 Available Achievements",
        howToUnlock: "🛠️ How to Unlock",
        copyScript: "Copy Script",
        copied: "Copied!",
        copiedToast: "Copied to clipboard! 📋",
        footerText: "Built with ❤️ for GitHub Contributors. Please use responsibly on personal test repositories.",
        markUnlocked: "Mark as Unlocked",
        markLocked: "Mark as Locked",
        sharkPrCountLabel: "Number of Pull Requests to farm:",
        sharkOptionT1: "2 PRs (Bronze / Tier 1)",
        sharkOptionT2: "16 PRs (Silver / Tier 2)",
        sharkOptionT3: "128 PRs (Gold / Tier 3)",
        sharkOptionT4: "1024 PRs (Platinum / Tier 4)"
    },
    id: {
        completed: "Selesai:",
        configTitle: "⚙️ Konfigurasi Dasbor",
        configSubtitle: "Konfigurasikan detail Anda di bawah. Script dan perintah akan diperbarui secara dinamis sesuai detail repositori Anda.",
        labelUsername: "Username GitHub",
        labelRepoName: "Repositori Farming",
        labelShellType: "Target Script Shell",
        shellOptionBash: "Script Bash (Linux / macOS / Git Bash)",
        shellOptionPwsh: "PowerShell (Windows)",
        warningTitle: "Tips Keamanan Penting:",
        warningText: "Selalu jalankan script farming achievement pada <strong>repositori privat</strong> yang dibuat khusus untuk tujuan ini. Ini mencegah pengotoran repositori kerja aktif Anda dan memastikan tidak ada dampak pada kolaborator lain.",
        availableAchievements: "🏆 Pencapaian yang Tersedia",
        howToUnlock: "🛠️ Cara Membuka",
        copyScript: "Salin Script",
        copied: "Tersalin!",
        copiedToast: "Tersalin ke papan klip! 📋",
        footerText: "Dibuat dengan ❤️ untuk Kontributor GitHub. Silakan gunakan secara bertanggung jawab pada repositori pengujian pribadi.",
        markUnlocked: "Tandai Terbuka",
        markLocked: "Tandai Terkunci",
        sharkPrCountLabel: "Jumlah Pull Request untuk di-farm:",
        sharkOptionT1: "2 PR (Bronze / Tier 1)",
        sharkOptionT2: "16 PR (Silver / Tier 2)",
        sharkOptionT3: "128 PR (Gold / Tier 3)",
        sharkOptionT4: "1024 PR (Platinum / Tier 4)"
    }
};

// Official Badge Icons Data from drknzz/GitHub-Achievements
const badgeImages = {
    yolo: "https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/YOLO/PNG/YOLO_Badge.png",
    'pull-shark': "https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/Pull-Shark/PNG/PullShark.png",
    quickdraw: "https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/Quick-Draw/PNG/Skin-Tones/QuickDraw_SkinTone1.png",
    'pair-extraordinaire': "https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/Pair-Extraordinaire/PNG/PairExtraordinaire.png",
    'galaxy-brain': "https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/Galaxy-Brain/PNG/GalaxyBrain.png",
    starstruck: "https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/Star-Struck/PNG/Skin-Tones/StarStruck_SkinTone1.png",
    'public-sponsor': "https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/GitHub-Sponsor/PNG/GitHubSponsorBadge.png"
};

// Achievement Data Details
const achievementsData = {
    yolo: {
        tierClass: "bronze",
        en: {
            title: "YOLO",
            tier: "Common",
            desc: "Merge a pull request without code review.",
            longDesc: "This achievement rewards contributors who confidently (or daringly) merge a Pull Request into their repository's primary branch without requesting reviews or approval from other developers.",
            steps: [
                "Ensure you have the <a href='https://cli.github.com/' target='_blank'>GitHub CLI</a> authenticated (run <code>gh auth login</code>).",
                "Open your local repository in a terminal.",
                "Run the generated script below to push a new branch, create a Pull Request, and instantly merge it."
            ]
        },
        id: {
            title: "YOLO",
            tier: "Umum",
            desc: "Gabungkan pull request tanpa peninjauan kode.",
            longDesc: "Pencapaian ini menghargai kontributor yang dengan percaya diri (atau nekat) menggabungkan Pull Request ke branch utama repositori mereka tanpa meminta peninjauan atau persetujuan dari pengembang lain.",
            steps: [
                "Pastikan Anda telah mengautentikasi <a href='https://cli.github.com/' target='_blank'>GitHub CLI</a> (jalankan <code>gh auth login</code>).",
                "Buka repositori lokal Anda di terminal.",
                "Jalankan script yang dibuat di bawah ini untuk mendorong branch baru, membuat Pull Request, dan langsung menggabungkannya."
            ]
        }
    },
    'pull-shark': {
        tierClass: "silver",
        en: {
            title: "Pull Shark",
            tier: "Bronze / Silver / Gold / Platinum",
            desc: "Opened and merged pull requests.",
            longDesc: "Earned by opening pull requests that are subsequently merged. This badge features multiple tiers based on the total count of merged PRs: Tier 1 (Bronze - 2 PRs), Tier 2 (Silver - 16 PRs), Tier 3 (Gold - 128 PRs), and Tier 4 (Platinum - 1024 PRs).",
            steps: [
                "Ensure you have the <a href='https://cli.github.com/' target='_blank'>GitHub CLI</a> authenticated (run <code>gh auth login</code>).",
                "Select your desired farming level in the options below (Bronze/Silver/Gold/Platinum).",
                "Execute the script. It will run a loop to generate commits, create PRs, and merge them sequentially."
            ]
        },
        id: {
            title: "Pull Shark",
            tier: "Bronze / Silver / Gold / Platinum",
            desc: "Buka dan gabungkan pull request.",
            longDesc: "Diperoleh dengan membuka pull request yang kemudian digabungkan. Lencana ini memiliki beberapa tingkatan berdasarkan jumlah PR yang digabungkan: Tier 1 (Bronze - 2 PR), Tier 2 (Silver - 16 PR), Tier 3 (Gold - 128 PR), dan Tier 4 (Platinum - 1024 PR).",
            steps: [
                "Pastikan Anda telah mengautentikasi <a href='https://cli.github.com/' target='_blank'>GitHub CLI</a> (jalankan <code>gh auth login</code>).",
                "Pilih tingkat farming yang diinginkan pada opsi di bawah (Bronze/Silver/Gold/Platinum).",
                "Jalankan script. Ini akan menjalankan pengulangan untuk membuat commit, membuat PR, dan menggabungkannya secara berurutan."
            ]
        }
    },
    quickdraw: {
        tierClass: "bronze",
        en: {
            title: "Quickdraw",
            tier: "Common",
            desc: "Close an issue or PR within 5 minutes of opening it.",
            longDesc: "This achievement recognizes fast resolution times. To unlock it, you must open an issue or pull request and then officially close it within a 5-minute window.",
            steps: [
                "Ensure you have the <a href='https://cli.github.com/' target='_blank'>GitHub CLI</a> authenticated.",
                "Open your terminal in your repository directory.",
                "Run the script below to open a test issue and close it immediately within seconds."
            ]
        },
        id: {
            title: "Quickdraw",
            tier: "Umum",
            desc: "Tutup issue atau PR dalam waktu 5 menit.",
            longDesc: "Pencapaian ini mengakui penyelesaian masalah yang cepat. Untuk membukanya, Anda harus membuka issue atau pull request dan kemudian menutupnya secara resmi dalam waktu kurang dari 5 menit.",
            steps: [
                "Pastikan Anda telah mengautentikasi <a href='https://cli.github.com/' target='_blank'>GitHub CLI</a>.",
                "Buka terminal Anda di direktori repositori Anda.",
                "Jalankan script di bawah ini untuk membuka issue uji coba dan langsung menutupnya dalam hitungan detik."
            ]
        }
    },
    'pair-extraordinaire': {
        tierClass: "gold",
        en: {
            title: "Pair Extraordinaire",
            tier: "Rare",
            desc: "Co-authored a commit in a merged PR.",
            longDesc: "Earned by collaborating on a merged Pull Request. The commit history must contain at least one commit co-authored by another GitHub user, identified by the <code>Co-authored-by:</code> footer.",
            steps: [
                "Ensure you have the <a href='https://cli.github.com/' target='_blank'>GitHub CLI</a> authenticated.",
                "Run the script below to generate a co-authored commit pointing to our achievement bot user.",
                "The script pushes the branch, opens a Pull Request, and merges it."
            ]
        },
        id: {
            title: "Pair Extraordinaire",
            tier: "Langka",
            desc: "Co-author commit di PR yang digabungkan.",
            longDesc: "Diperoleh dengan berkolaborasi dalam Pull Request yang digabungkan. Riwayat commit harus mencantumkan setidaknya satu commit yang ditulis bersama (co-authored) oleh pengguna GitHub lain, yang diidentifikasi dengan catatan kaki <code>Co-authored-by:</code>.",
            steps: [
                "Pastikan Anda telah mengautentikasi <a href='https://cli.github.com/' target='_blank'>GitHub CLI</a>.",
                "Jalankan script di bawah ini untuk menghasilkan commit co-authored yang menunjuk ke akun bot pencapaian kami.",
                "Script akan mendorong branch baru, membuat Pull Request, dan menggabungkannya."
            ]
        }
    },
    'galaxy-brain': {
        tierClass: "purple",
        en: {
            title: "Galaxy Brain",
            tier: "Legendary",
            desc: "Have your answer accepted in Discussions.",
            longDesc: "Given to contributors who help resolve queries in GitHub Discussions. You must have one of your comments marked as the 'Accepted Answer' in an active discussion category.",
            steps: [
                "Enable <strong>Discussions</strong> in your repository settings (Settings -> General -> Features -> Discussions).",
                "Using a secondary GitHub account (or a friend's account), open a new Discussion inside the Q&A category.",
                "Reply to that discussion using your main account.",
                "Log back into the secondary account and mark your main account's reply as the <strong>Accepted Answer</strong>."
            ]
        },
        id: {
            title: "Galaxy Brain",
            tier: "Legendaris",
            desc: "Jawaban diterima di Discussions.",
            longDesc: "Diberikan kepada kontributor yang membantu menyelesaikan pertanyaan di GitHub Discussions. Anda harus memiliki salah satu komentar Anda yang ditandai sebagai 'Accepted Answer' (Jawaban Diterima) dalam kategori diskusi aktif.",
            steps: [
                "Aktifkan <strong>Discussions</strong> di pengaturan repositori Anda (Settings -> General -> Features -> Discussions).",
                "Menggunakan akun GitHub sekunder (atau akun teman), buka Diskusi baru di dalam kategori Q&A.",
                "Balas diskusi tersebut menggunakan akun utama Anda.",
                "Masuk kembali ke akun sekunder dan tandai balasan akun utama Anda sebagai <strong>Accepted Answer</strong>."
            ]
        }
    },
    starstruck: {
        tierClass: "silver",
        en: {
            title: "Starstruck",
            tier: "Bronze / Silver / Gold / Platinum",
            desc: "One of your repositories receives stars.",
            longDesc: "Unlocks when your repositories receive stars from the GitHub community. Tiers increase at 16 stars (Bronze), 128 stars (Silver), 512 stars (Gold), and 4096 stars (Platinum).",
            steps: [
                "Create a public repository with an interesting utility, documentation list, or portfolio template.",
                "Share your repository link with developer communities, forums, or friends.",
                "Alternatively, collaborate with colleagues to star each other's research or utility projects."
            ]
        },
        id: {
            title: "Starstruck",
            tier: "Bronze / Silver / Gold / Platinum",
            desc: "Repositori Anda menerima bintang (star).",
            longDesc: "Terbuka ketika repositori Anda menerima bintang dari komunitas GitHub. Tingkatan bertambah pada 16 bintang (Bronze), 128 bintang (Silver), 512 bintang (Gold), dan 4096 bintang (Platinum).",
            steps: [
                "Buat repositori publik yang berisi utilitas menarik, daftar dokumentasi, atau template portofolio.",
                "Bagikan tautan repositori Anda ke komunitas pengembang, forum, atau teman-teman.",
                "Alternatif lain, berkolaborasilah dengan rekan kerja untuk saling memberikan bintang pada proyek masing-masing."
            ]
        }
    },
    'public-sponsor': {
        tierClass: "pink",
        en: {
            title: "Public Sponsor",
            tier: "Special",
            desc: "Sponsor a project or contributor via GitHub Sponsors.",
            longDesc: "Unlocked by actively sponsoring another open-source contributor or organization through GitHub Sponsors. This supports the open-source community directly.",
            steps: [
                "Find an open-source contributor or organization you like (e.g., a tool, library, or framework you use).",
                "Click the <strong>Sponsor</strong> button on their profile or repository page.",
                "Select any tier (even $1/month counts) and complete the sponsorship checkout.",
                "Ensure your sponsorship list visibility is set to **Public** in your settings."
            ]
        },
        id: {
            title: "Public Sponsor",
            tier: "Spesial",
            desc: "Mensponsori proyek atau kontributor via GitHub Sponsors.",
            longDesc: "Terbuka dengan mensponsori kontributor atau organisasi open-source lain secara aktif melalui GitHub Sponsors. Ini membantu mendukung komunitas open-source secara langsung.",
            steps: [
                "Cari kontributor atau organisasi open-source yang Anda sukai (misalnya, alat, pustaka, atau kerangka kerja yang Anda gunakan).",
                "Klik tombol <strong>Sponsor</strong> pada profil mereka atau halaman repositori.",
                "Pilih tingkat apa saja (bahkan $1/bulan sudah cukup) dan selesaikan transaksi sponsor.",
                "Pastikan visibilitas daftar sponsor Anda disetel ke **Public** di pengaturan akun Anda."
            ]
        }
    }
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    loadSavedState();
    setupEventListeners();
    updateUI();
});

// Setup event listeners for inputs
function setupEventListeners() {
    document.getElementById('username').addEventListener('input', (e) => {
        state.username = e.target.value.trim() || 'your-username';
        updateUI();
    });

    document.getElementById('repo-name').addEventListener('input', (e) => {
        state.repoName = e.target.value.trim() || 'github-achievement-farm';
        updateUI();
    });

    document.getElementById('shell-type').addEventListener('change', (e) => {
        state.shellType = e.target.value;
        updateUI();
    });

    document.getElementById('shark-pr-count').addEventListener('change', (e) => {
        state.sharkPrCount = e.target.value;
        updateUI();
    });

    document.getElementById('lang-select').addEventListener('change', (e) => {
        state.lang = e.target.value;
        localStorage.setItem('gitachieve_lang', state.lang);
        updateUI();
    });
}

// Select a badge
window.selectBadge = function(badgeKey) {
    state.selectedBadge = badgeKey;
    
    // Update card selection active status
    document.querySelectorAll('.achievement-card').forEach(card => {
        if (card.getAttribute('data-badge') === badgeKey) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    updateUI();
};

// Checkbox complete toggler
window.toggleBadgeComplete = function(event, badgeKey) {
    event.stopPropagation(); // Stop trigger selectBadge on card click
    
    const checkbox = document.getElementById(`check-${badgeKey === 'pair-extraordinaire' ? 'pair' : badgeKey === 'galaxy-brain' ? 'galaxy' : badgeKey === 'public-sponsor' ? 'sponsor' : badgeKey}`);
    state.completedBadges[badgeKey] = checkbox.checked;
    
    saveCompletedBadges();
    updateCountDisplay();
};

// Toggle complete from panel button
window.markSelectedAsComplete = function() {
    const badgeKey = state.selectedBadge;
    const isCompleted = !state.completedBadges[badgeKey];
    state.completedBadges[badgeKey] = isCompleted;

    const checkbox = document.getElementById(`check-${badgeKey === 'pair-extraordinaire' ? 'pair' : badgeKey === 'galaxy-brain' ? 'galaxy' : badgeKey === 'public-sponsor' ? 'sponsor' : badgeKey}`);
    if (checkbox) checkbox.checked = isCompleted;

    saveCompletedBadges();
    updateCountDisplay();
    updateUI(); // Updates the button text
};

// Save state to localStorage
function saveCompletedBadges() {
    localStorage.setItem('gitachieve_completed_badges', JSON.stringify(state.completedBadges));
}

// Load state from localStorage
function loadSavedState() {
    // Load language preference
    const savedLang = localStorage.getItem('gitachieve_lang');
    if (savedLang) {
        state.lang = savedLang;
        document.getElementById('lang-select').value = savedLang;
    }

    // Load completed badges
    const saved = localStorage.getItem('gitachieve_completed_badges');
    if (saved) {
        try {
            state.completedBadges = JSON.parse(saved);
            // Setup checkboxes
            Object.keys(state.completedBadges).forEach(key => {
                const isChecked = state.completedBadges[key];
                const checkboxId = `check-${key === 'pair-extraordinaire' ? 'pair' : key === 'galaxy-brain' ? 'galaxy' : key === 'public-sponsor' ? 'sponsor' : key}`;
                const checkbox = document.getElementById(checkboxId);
                if (checkbox) checkbox.checked = isChecked;
            });
        } catch (e) {
            console.error("Error loading completed badges state", e);
        }
    }
    updateCountDisplay();
}

// Update the count UI in the header
function updateCountDisplay() {
    const total = Object.keys(achievementsData).length;
    const completed = Object.values(state.completedBadges).filter(Boolean).length;
    
    document.getElementById('completed-count').textContent = completed;
    document.getElementById('total-count').textContent = total;
}

// Update static elements that rely on data-i18n attributes
function updateTranslations() {
    const lang = state.lang;
    const dict = uiTranslations[lang];

    // Find and update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    // Update placeholders or dynamic content on card elements
    document.querySelectorAll('.achievement-card').forEach(card => {
        const badgeKey = card.getAttribute('data-badge');
        const cardData = achievementsData[badgeKey][lang];
        
        card.querySelector('.card-info h3').textContent = cardData.title;
        card.querySelector('.card-info p').textContent = cardData.desc;
        card.querySelector('.card-info .badge-tier').textContent = cardData.tier;
    });
}

// Main UI updater
function updateUI() {
    updateTranslations();

    const badgeKey = state.selectedBadge;
    const fullData = achievementsData[badgeKey];
    const data = fullData[state.lang];
    const dict = uiTranslations[state.lang];
    
    // Update badge details panel
    document.getElementById('guide-title').textContent = data.title;
    document.getElementById('guide-tier').textContent = data.tier;
    document.getElementById('guide-tier').className = `badge-tier ${fullData.tierClass}`;
    document.getElementById('guide-desc').textContent = data.longDesc;
    
    // Update image in preview
    document.getElementById('guide-badge-img').innerHTML = `<img class="badge-svg" src="${badgeImages[badgeKey]}" alt="${badgeKey}">`;
    
    // Update Button Text
    const markBtn = document.getElementById('mark-complete-btn');
    if (state.completedBadges[badgeKey]) {
        markBtn.textContent = dict.markLocked;
        markBtn.className = "btn btn-secondary unlocked";
    } else {
        markBtn.textContent = dict.markUnlocked;
        markBtn.className = "btn btn-secondary";
    }

    // Toggle option dropdowns (e.g. for Pull Shark count)
    const sharkOptions = document.getElementById('shark-options-container');
    if (badgeKey === 'pull-shark') {
        sharkOptions.classList.remove('hidden');
    } else {
        sharkOptions.classList.add('hidden');
    }

    // Render step list
    const stepList = document.getElementById('step-list');
    stepList.innerHTML = '';
    data.steps.forEach(stepText => {
        const li = document.createElement('li');
        li.innerHTML = stepText;
        stepList.appendChild(li);
    });

    // Update Script File name
    const scriptFileLabel = document.getElementById('script-filename');
    const ext = state.shellType === 'bash' ? 'sh' : 'ps1';
    scriptFileLabel.textContent = `${badgeKey}-farm.${ext}`;

    // Render Script Code Blocks or Info message if Guide Only
    const codeBlock = document.getElementById('code-block');
    const scriptSection = document.getElementById('script-section');
    
    const isGuideOnly = ['galaxy-brain', 'starstruck', 'public-sponsor'].includes(badgeKey);
    
    if (isGuideOnly) {
        scriptSection.classList.add('hidden');
    } else {
        scriptSection.classList.remove('hidden');
        codeBlock.textContent = generateScript(badgeKey);
        codeBlock.className = state.shellType === 'bash' ? 'language-bash' : 'language-powershell';
    }
}

// Generate the shell script dynamically based on inputs
function generateScript(badgeKey) {
    const username = state.username;
    const repo = state.repoName;
    const isBash = state.shellType === 'bash';
    
    if (badgeKey === 'yolo') {
        if (isBash) {
            return `# YOLO Badge Farming Script (Bash)
# Prerequisites: GitHub CLI (gh) installed and logged in.

REPO_NAME="${repo}"
USERNAME="${username}"

# 1. Clone your farming repository and navigate inside
git clone "https://github.com/\${USERNAME}/\${REPO_NAME}.git"
cd "\${REPO_NAME}"

# 2. Check out a new branch
git checkout -b yolo-branch

# 3. Create a commit on this branch
echo "YOLO Farming: $(date)" >> README.md
git add README.md
git commit -m "feat: yolo farming commit"

# 4. Push the branch to GitHub
git push origin yolo-branch

# 5. Open and merge the Pull Request immediately without reviews
gh pr create --title "Farming YOLO Badge" --body "Merge without code review" --head yolo-branch --base main
gh pr merge --merge --delete-branch`;
        } else {
            return `# YOLO Badge Farming Script (PowerShell)
# Prerequisites: GitHub CLI (gh) installed and logged in.

$REPO_NAME="${repo}"
$USERNAME="${username}"

# 1. Clone your farming repository and navigate inside
git clone "https://github.com/\${USERNAME}/\${REPO_NAME}.git"
cd $REPO_NAME

# 2. Check out a new branch
git checkout -b yolo-branch

# 3. Create a commit on this branch
Add-Content README.md "\`nYOLO Farming: $(Get-Date)"
git add README.md
git commit -m "feat: yolo farming commit"

# 4. Push the branch to GitHub
git push origin yolo-branch

# 5. Open and merge the Pull Request immediately without reviews
gh pr create --title "Farming YOLO Badge" --body "Merge without code review" --head yolo-branch --base main
gh pr merge --merge --delete-branch`;
        }
    }
    
    if (badgeKey === 'pull-shark') {
        const prCount = state.sharkPrCount;
        if (isBash) {
            return `# Pull Shark Badge Farming Script (Bash)
# Generates and merges ${prCount} pull requests sequentially

REPO_NAME="${repo}"
PR_COUNT=${prCount}

cd "\${REPO_NAME}"

echo "Starting Pull Shark farm loop for \${PR_COUNT} Pull Requests..."

for i in $(seq 1 \${PR_COUNT}); do
    BRANCH="pull-shark-farm-\${i}"
    echo "----------------------------------------"
    echo "Farming Pull Request \${i}/\${PR_COUNT}"
    
    # 1. Create a new branch
    git checkout -b $BRANCH
    
    # 2. Make changes & commit
    echo "Pull Shark Farm commit #\${i}" >> README.md
    git add README.md
    git commit -m "docs: pull shark farm commit #\${i}"
    
    # 3. Push branch
    git push origin $BRANCH
    
    # 4. Open PR and merge it
    gh pr create --title "docs: Pull Shark PR #\${i}" --body "Farming Pull Shark" --head $BRANCH --base main
    gh pr merge --merge --delete-branch
    
    # Sleep 1 second to stay within API rate limits safely
    sleep 1
done

echo "Successfully merged \${PR_COUNT} Pull Requests!"`;
        } else {
            return `# Pull Shark Badge Farming Script (PowerShell)
# Generates and merges ${prCount} pull requests sequentially

$REPO_NAME="${repo}"
$PR_COUNT=${prCount}

cd $REPO_NAME

Write-Host "Starting Pull Shark farm loop for $PR_COUNT Pull Requests..."

for ($i=1; $i -le $PR_COUNT; $i++) {
    $BRANCH = "pull-shark-farm-$i"
    Write-Host "----------------------------------------"
    Write-Host "Farming Pull Request $i/$PR_COUNT"
    
    # 1. Create a new branch
    git checkout -b $BRANCH
    
    # 2. Make changes & commit
    Add-Content README.md "\`nPull Shark Farm commit #$i"
    git add README.md
    git commit -m "docs: pull shark farm commit #$i"
    
    # 3. Push branch
    git push origin $BRANCH
    
    # 4. Open PR and merge it
    gh pr create --title "docs: Pull Shark PR #$i" --body "Farming Pull Shark" --head $BRANCH --base main
    gh pr merge --merge --delete-branch
    
    # Sleep 1 second to stay within API rate limits safely
    Start-Sleep -Seconds 1
}

Write-Host "Successfully merged $PR_COUNT Pull Requests!"`;
        }
    }

    if (badgeKey === 'quickdraw') {
        if (isBash) {
            return `# Quickdraw Badge Farming Script (Bash)
# Opens a test issue and closes it within 10 seconds.

REPO_NAME="${repo}"

cd "\${REPO_NAME}"

# Create a temporary issue and retrieve its URL/number
echo "Opening issue..."
ISSUE_URL=$(gh issue create --title "Quickdraw Farm" --body "Temporary issue to unlock Quickdraw. Will close in seconds." --label "documentation")
echo "Created: \${ISSUE_URL}"

# Extract issue number
ISSUE_NUM=$(echo \${ISSUE_URL} | grep -oE '[0-9]+$')

# Close the issue immediately (within 5 minutes)
echo "Closing issue #\${ISSUE_NUM} immediately..."
gh issue close \${ISSUE_NUM}
echo "Done! Quickdraw badge unlocked."`;
        } else {
            return `# Quickdraw Badge Farming Script (PowerShell)
# Opens a test issue and closes it within 10 seconds.

$REPO_NAME="${repo}"

cd $REPO_NAME

# Create a temporary issue and retrieve its URL/number
Write-Host "Opening issue..."
$ISSUE_URL = gh issue create --title "Quickdraw Farm" --body "Temporary issue to unlock Quickdraw. Will close in seconds." --label "documentation"
Write-Host "Created: $ISSUE_URL"

# Extract issue number
$ISSUE_NUM = ($ISSUE_URL -split '/')[-1]

# Close the issue immediately (within 5 minutes)
Write-Host "Closing issue #$ISSUE_NUM immediately..."
gh issue close $ISSUE_NUM
Write-Host "Done! Quickdraw badge unlocked."`;
        }
    }

    if (badgeKey === 'pair-extraordinaire') {
        const coAuthorName = "GitHub-Achievement-Bot";
        const coAuthorEmail = "bot@achievements.github.com";
        
        if (isBash) {
            return `# Pair Extraordinaire Badge Farming Script (Bash)
# Generates a co-authored commit and merges it via PR.

REPO_NAME="${repo}"

cd "\${REPO_NAME}"
git checkout -b pair-farm-branch

echo "Pair Extraordinaire commit" >> README.md
git add README.md

# IMPORTANT: Commit message must contain the Co-authored-by footer 
# separated from the commit subject/body by a blank line!
git commit -m "feat: pair extraordinaire farm

Co-authored-by: ${coAuthorName} <${coAuthorEmail}>"

# Push and merge
git push origin pair-farm-branch
gh pr create --title "feat: Co-authored PR" --body "Unlocking Pair Extraordinaire" --head pair-farm-branch --base main
gh pr merge --merge --delete-branch`;
        } else {
            return `# Pair Extraordinaire Badge Farming Script (PowerShell)
# Generates a co-authored commit and merges it via PR.

$REPO_NAME="${repo}"

cd $REPO_NAME
git checkout -b pair-farm-branch

Add-Content README.md "\`nPair Extraordinaire commit"
git add README.md

# Commit message with Co-authored-by footer
$commitMessage = @"
feat: pair extraordinaire farm

Co-authored-by: ${coAuthorName} <${coAuthorEmail}>
"@

git commit -m $commitMessage

# Push and merge
git push origin pair-farm-branch
gh pr create --title "feat: Co-authored PR" --body "Unlocking Pair Extraordinaire" --head pair-farm-branch --base main
gh pr merge --merge --delete-branch`;
        }
    }

    return '';
}

// Copy Code to Clipboard with Toast Notification
window.copyCode = function() {
    const codeText = document.getElementById('code-block').textContent;
    const toastMessage = uiTranslations[state.lang].copiedToast;
    
    navigator.clipboard.writeText(codeText).then(() => {
        const toast = document.getElementById('toast');
        toast.textContent = toastMessage;
        toast.classList.add('show');
        
        // Update copy button text visually
        const copyTextEl = document.getElementById('copy-text');
        copyTextEl.textContent = uiTranslations[state.lang].copied;
        
        setTimeout(() => {
            toast.classList.remove('show');
            copyTextEl.textContent = uiTranslations[state.lang].copyScript;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
};
