// Sample student data
const students = [
  {
    id: 1,
    name: "João Silva",
    rank: "S",
    level: 85,
    title: "Full Stack Developer",
    avatar: "/male-developer-avatar.png",
    bio: "Desenvolvedor apaixonado por tecnologia com foco em JavaScript e Python.",
    projects: 23,
    exp: 1250,
    ranking: 5,
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
    social: {
      github: "https://github.com/joaosilva",
      linkedin: "https://linkedin.com/in/joaosilva",
      twitter: "https://twitter.com/joaosilva",
      portfolio: "https://joaosilva.dev",
    },
    recentProjects: [
      { name: "E-commerce Platform", tech: "React, Node.js", status: "Concluído" },
      { name: "Task Manager API", tech: "Python, FastAPI", status: "Em andamento" },
      { name: "Chat Application", tech: "Socket.io, Express", status: "Concluído" },
    ],
    achievements: [
      { name: "First Blood", description: "Primeiro projeto concluído", icon: "🏆" },
      { name: "Code Master", description: "100+ commits em um mês", icon: "💻" },
      { name: "Team Player", description: "Colaborou em 5+ projetos", icon: "🤝" },
    ],
  },
  {
    id: 2,
    name: "Maria Santos",
    rank: "A",
    level: 72,
    title: "Frontend Specialist",
    avatar: "/female-developer-avatar.png",
    bio: "Especialista em UI/UX e desenvolvimento frontend moderno.",
    projects: 18,
    exp: 980,
    ranking: 12,
    skills: [
      { name: "React", level: 92 },
      { name: "CSS", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Figma", level: 90 },
      { name: "Vue.js", level: 70 },
    ],
    social: {
      github: "https://github.com/mariasantos",
      linkedin: "https://linkedin.com/in/mariasantos",
      dribbble: "https://dribbble.com/mariasantos",
      portfolio: "https://mariasantos.design",
    },
    recentProjects: [
      { name: "Design System", tech: "React, Storybook", status: "Concluído" },
      { name: "Landing Page", tech: "Next.js, Tailwind", status: "Concluído" },
      { name: "Mobile App UI", tech: "React Native", status: "Em andamento" },
    ],
    achievements: [
      { name: "Design Guru", description: "Criou 10+ designs incríveis", icon: "🎨" },
      { name: "Pixel Perfect", description: "Zero bugs de UI reportados", icon: "✨" },
      { name: "Speed Demon", description: "Entrega sempre no prazo", icon: "⚡" },
    ],
  },
  {
    id: 3,
    name: "Carlos Mendes",
    rank: "B",
    level: 58,
    title: "Backend Developer",
    avatar: "/male-backend-developer-avatar.jpg",
    bio: "Especialista em arquitetura de sistemas e desenvolvimento de APIs robustas.",
    projects: 15,
    exp: 720,
    ranking: 25,
    skills: [
      { name: "Python", level: 88 },
      { name: "Django", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
    ],
    social: {
      github: "https://github.com/carlosmendes",
      linkedin: "https://linkedin.com/in/carlosmendes",
      medium: "https://medium.com/@carlosmendes",
    },
    recentProjects: [
      { name: "Microservices API", tech: "Python, Docker", status: "Concluído" },
      { name: "Database Migration", tech: "PostgreSQL", status: "Concluído" },
      { name: "CI/CD Pipeline", tech: "GitHub Actions", status: "Em andamento" },
    ],
    achievements: [
      { name: "System Architect", description: "Projetou 3+ sistemas complexos", icon: "🏗️" },
      { name: "Bug Hunter", description: "Encontrou 50+ bugs críticos", icon: "🐛" },
      { name: "Performance King", description: "Otimizou APIs em 300%", icon: "🚀" },
    ],
  },
  {
    id: 4,
    name: "Ana Costa",
    rank: "C",
    level: 45,
    title: "Junior Developer",
    avatar: "/female-junior-developer-avatar.jpg",
    bio: "Desenvolvedora em crescimento com foco em aprendizado contínuo.",
    projects: 8,
    exp: 450,
    ranking: 45,
    skills: [
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 70 },
      { name: "React", level: 60 },
      { name: "Git", level: 75 },
      { name: "Responsive Design", level: 80 },
    ],
    social: {
      github: "https://github.com/anacosta",
      linkedin: "https://linkedin.com/in/anacosta",
    },
    recentProjects: [
      { name: "Portfolio Website", tech: "HTML, CSS, JS", status: "Concluído" },
      { name: "Todo App", tech: "React", status: "Em andamento" },
      { name: "Calculator", tech: "JavaScript", status: "Concluído" },
    ],
    achievements: [
      { name: "Rising Star", description: "Subiu 2 ranks em 3 meses", icon: "⭐" },
      { name: "Quick Learner", description: "Completou 5+ cursos", icon: "📚" },
      { name: "Community Helper", description: "Ajudou 10+ colegas", icon: "🤲" },
    ],
  },
  {
    id: 5,
    name: "Pedro Oliveira",
    rank: "D",
    level: 32,
    title: "Beginner Developer",
    avatar: "/male-beginner-developer-avatar.jpg",
    bio: "Iniciante motivado em busca de conhecimento e experiência prática.",
    projects: 4,
    exp: 180,
    ranking: 78,
    skills: [
      { name: "HTML", level: 75 },
      { name: "CSS", level: 65 },
      { name: "JavaScript", level: 45 },
      { name: "Git", level: 50 },
      { name: "Problem Solving", level: 70 },
    ],
    social: {
      github: "https://github.com/pedrooliveira",
      linkedin: "https://linkedin.com/in/pedrooliveira",
    },
    recentProjects: [
      { name: "Landing Page", tech: "HTML, CSS", status: "Concluído" },
      { name: "Simple Calculator", tech: "JavaScript", status: "Em andamento" },
      { name: "Profile Card", tech: "HTML, CSS", status: "Concluído" },
    ],
    achievements: [
      { name: "First Steps", description: "Primeiro projeto no GitHub", icon: "👶" },
      { name: "Persistent", description: "7 dias consecutivos codando", icon: "💪" },
      { name: "Curious Mind", description: "Fez 20+ perguntas no fórum", icon: "❓" },
    ],
  },
  {
    id: 6,
    name: "Luisa Fernandes",
    rank: "S",
    level: 92,
    title: "Tech Lead",
    avatar: "/female-tech-lead-avatar.jpg",
    bio: "Líder técnica experiente com foco em mentoria e arquitetura de software.",
    projects: 35,
    exp: 1800,
    ranking: 2,
    skills: [
      { name: "Leadership", level: 95 },
      { name: "System Design", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "Cloud Architecture", level: 88 },
      { name: "Mentoring", level: 95 },
    ],
    social: {
      github: "https://github.com/luisafernandes",
      linkedin: "https://linkedin.com/in/luisafernandes",
      twitter: "https://twitter.com/luisafernandes",
      blog: "https://luisafernandes.tech",
    },
    recentProjects: [
      { name: "Platform Migration", tech: "Microservices, K8s", status: "Concluído" },
      { name: "Team Onboarding", tech: "Documentation", status: "Concluído" },
      { name: "Performance Optimization", tech: "Various", status: "Em andamento" },
    ],
    achievements: [
      { name: "Mentor Master", description: "Mentorou 20+ desenvolvedores", icon: "👩‍🏫" },
      { name: "Architecture Guru", description: "Projetou 10+ sistemas", icon: "🏛️" },
      { name: "Team Builder", description: "Formou 3 equipes de sucesso", icon: "👥" },
    ],
  },
]

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

// Function to create student card
function createStudentCard(student) {
  const rankColorClass = getRankColorClass(student.rank)

  return `
        <div class="bg-gray-800/50 rounded-xl border border-gray-700 p-6 card-hover" onclick="viewStudent(${student.id}, event)">
            <div class="relative mb-4">
                <img src="${student.avatar}" alt="${student.name}" class="w-20 h-20 rounded-full mx-auto border-2 border-emerald-600">
                <div class="absolute -bottom-2 -right-2 w-8 h-8 ${rankColorClass} rounded-full flex items-center justify-center font-bold text-white text-sm rank-glow">
                    ${student.rank}
                </div>
            </div>
            
            <div class="text-center">
                <h3 class="heading-font text-xl font-bold text-white mb-1">${student.name}</h3>
                <p class="text-emerald-400 text-sm mb-2">${student.title}</p>
                <p class="text-gray-400 text-sm mb-4 line-clamp-2">${student.bio}</p>
                
                <div class="grid grid-cols-3 gap-2 text-center mb-4">
                    <div>
                        <div class="text-lg font-bold text-emerald-400">${student.level}</div>
                        <div class="text-xs text-gray-400">Nível</div>
                    </div>
                    <div>
                        <div class="text-lg font-bold text-blue-400">${student.projects}</div>
                        <div class="text-xs text-gray-400">Projetos</div>
                    </div>
                    <div>
                        <div class="text-lg font-bold text-purple-400">#${student.ranking}</div>
                        <div class="text-xs text-gray-400">Rank</div>
                    </div>
                </div>
                
                <div class="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div class="skill-bar rounded-full h-2" style="width: ${(student.level / 100) * 100}%"></div>
                </div>
                <div class="text-xs text-gray-400">${student.exp} XP</div>
            </div>
        </div>
    `
}

// Function to load students
function loadStudents() {
  const studentsGrid = document.getElementById("studentsGrid")
  if (studentsGrid) {
    studentsGrid.innerHTML = students.map(createStudentCard).join("")
  }
}

// Function to view student details
function viewStudent(studentId, event) {
  if (event) {
    event.preventDefault()
    event.stopPropagation()
  }

  console.log("[v0] Viewing student with ID:", studentId) // Debug log

  // Store student data in localStorage for the detail page
  const student = students.find((s) => s.id === studentId)
  if (student) {
    console.log("[v0] Student found, storing in localStorage:", student.name) // Debug log
    localStorage.setItem("selectedStudent", JSON.stringify(student))

    setTimeout(() => {
      window.location.href = "student-detail.html"
    }, 100)
  } else {
    console.error("[v0] Student not found with ID:", studentId) // Debug log
  }
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  loadStudents()

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })
})
