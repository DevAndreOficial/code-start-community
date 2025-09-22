// Function to get rank color class
function getRankColorClass(rank) {
  const rankColors = {
    E: "rank-e bg-amber-900",
    D: "rank-d bg-gray-600",
    C: "rank-c bg-emerald-600",
    B: "rank-b bg-blue-600",
    A: "rank-a bg-purple-600",
    S: "rank-s bg-red-600",
  }
  return rankColors[rank] || "rank-e bg-gray-600"
}

// Function to create social link
function createSocialLink(platform, url) {
  const icons = {
    github: "🐙",
    linkedin: "💼",
    twitter: "🐦",
    portfolio: "🌐",
    dribbble: "🏀",
    medium: "📝",
    blog: "📖",
  }

  return `
        <a href="${url}" target="_blank" class="bg-gray-700 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
            <span>${icons[platform] || "🔗"}</span>
            <span class="capitalize">${platform}</span>
        </a>
    `
}

// Function to create skill item
function createSkillItem(skill) {
  return `
        <div class="mb-4">
            <div class="flex justify-between mb-2">
                <span class="text-white font-medium">${skill.name}</span>
                <span class="text-emerald-400">${skill.level}%</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="skill-bar rounded-full h-2" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `
}

// Function to create project item
function createProjectItem(project) {
  const statusColor = project.status === "Concluído" ? "text-emerald-400" : "text-yellow-400"

  return `
        <div class="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <h4 class="text-white font-semibold mb-2">${project.name}</h4>
            <p class="text-gray-400 text-sm mb-2">${project.tech}</p>
            <span class="text-xs ${statusColor} bg-gray-800 px-2 py-1 rounded">${project.status}</span>
        </div>
    `
}

// Function to create achievement item
function createAchievementItem(achievement) {
  return `
        <div class="bg-gray-900/50 p-4 rounded-lg border border-gray-700 text-center">
            <div class="text-3xl mb-2">${achievement.icon}</div>
            <h4 class="text-white font-semibold mb-1">${achievement.name}</h4>
            <p class="text-gray-400 text-sm">${achievement.description}</p>
        </div>
    `
}

// Function to load student data
function loadStudentData() {
  const studentData = localStorage.getItem("selectedStudent")
  if (!studentData) {
    // Redirect back to main page if no student data
    window.location.href = "index.html"
    return
  }

  const student = JSON.parse(studentData)
  const rankColorClass = getRankColorClass(student.rank)

  // Update basic info
  document.getElementById("studentAvatar").src = student.avatar
  document.getElementById("studentAvatar").alt = student.name
  document.getElementById("studentName").textContent = student.name
  document.getElementById("studentTitle").textContent = student.title
  document.getElementById("studentBio").textContent = student.bio

  // Update rank badge
  const rankBadge = document.getElementById("rankBadge")
  rankBadge.textContent = student.rank
  rankBadge.className = `absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg rank-glow ${rankColorClass}`

  // Update stats
  document.getElementById("studentLevel").textContent = student.level
  document.getElementById("studentProjects").textContent = student.projects
  document.getElementById("studentExp").textContent = student.exp
  document.getElementById("studentRanking").textContent = `#${student.ranking}`

  // Update social links
  const socialLinksContainer = document.getElementById("socialLinks")
  socialLinksContainer.innerHTML = Object.entries(student.social)
    .map(([platform, url]) => createSocialLink(platform, url))
    .join("")

  // Update skills
  const skillsList = document.getElementById("skillsList")
  skillsList.innerHTML = student.skills.map(createSkillItem).join("")

  // Update projects
  const projectsList = document.getElementById("projectsList")
  projectsList.innerHTML = student.recentProjects.map(createProjectItem).join("")

  // Update achievements
  const achievementsList = document.getElementById("achievementsList")
  achievementsList.innerHTML = student.achievements.map(createAchievementItem).join("")

  // Animate skill bars
  setTimeout(() => {
    const skillBars = document.querySelectorAll(".skill-bar")
    skillBars.forEach((bar) => {
      const width = bar.style.width
      bar.style.width = "0%"
      setTimeout(() => {
        bar.style.width = width
      }, 100)
    })
  }, 500)
}

// Function to go back
function goBack() {
  window.location.href = "index.html"
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  loadStudentData()
})
