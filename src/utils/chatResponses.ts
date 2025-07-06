export interface ChatResponse {
  keywords: string[]
  response: string
}

export const chatResponses: ChatResponse[] = [
  {
    keywords: ['education', 'university', 'study', 'degree', 'school', 'nus'],
    response: "I'm currently pursuing a Bachelor of Computing in Computer Science (Honours) with Distinction at the National University of Singapore, from August 2024 to May 2028. It's an exciting journey where I'm deepening my understanding of computer science fundamentals and exploring cutting-edge technologies!"
  },
  {
    keywords: ['skills', 'technical', 'programming', 'languages', 'technologies'],
    response: "I have expertise in multiple programming languages including Java, JavaScript, TypeScript, Python, and MySQL. I'm proficient with frameworks like React, React Native, Next.js, Node.js, and Express.js. I also work with tools like Git/GitHub, Expo Go, Supabase, and Google Cloud Vision. I'm passionate about both frontend and backend development!"
  },
  {
    keywords: ['projects', 'work', 'portfolio', 'codeonthego', 'savespot', 'movie'],
    response: "I've worked on several exciting projects! CodeOnTheGo is a mobile coding application with LeetCode-style challenges, featuring real-time WebSocket duels and AI analysis. SaveSpot is an AI-powered location saving and trip planning app. I've also built a responsive movie database website with RESTful APIs. Each project taught me valuable lessons in full-stack development!"
  },
  {
    keywords: ['contact', 'reach', 'email', 'phone', 'connect'],
    response: "You can reach me at soongshaozhi@gmail.com or call me at (+65) 8616 8813. I'm also active on LinkedIn and GitHub. I'm always open to discussing new opportunities, collaborations, or just chatting about technology!"
  },
  {
    keywords: ['goals', 'future', 'career', 'aspirations', 'plans'],
    response: "I'm passionate about creating innovative solutions that make a real impact. My goal is to work on cutting-edge projects that combine my technical skills with creative problem-solving. I'm particularly interested in AI/ML applications, mobile development, and building scalable web applications. I also love participating in hackathons and contributing to open-source projects!"
  },
  {
    keywords: ['hackathons', 'competitions', 'awards', 'achievements'],
    response: "I'm an active hackathon participant with 7+ events under my belt! I won 1st Runner Up at the Asian Business Plan Competition 2025 and received the Dare To Try Award at DSTA BrainHack 2025. I've also participated in HackoMania, Hack4Good, and many other exciting competitions. These experiences have taught me rapid prototyping, teamwork, and creative problem-solving!"
  },
  {
    keywords: ['about', 'who', 'yourself', 'background', 'story'],
    response: "I'm Soong Shao Zhi, a passionate Full Stack Developer, App Developer, and Innovator. I'm currently studying Computer Science at NUS and love building applications that solve real-world problems. When I'm not coding, you'll find me exploring new technologies, participating in hackathons, or working on personal projects. I believe in continuous learning and pushing the boundaries of what's possible with technology!"
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    response: "Hello! 👋 I'm Soong Shao Zhi, nice to meet you! I'm a Full Stack Developer who loves building innovative applications. Feel free to ask me about my projects, skills, education, or anything else you'd like to know!"
  }
]

export function findBestResponse(query: string): string {
  const normalizedQuery = query.toLowerCase()
  
  for (const response of chatResponses) {
    if (response.keywords.some(keyword => normalizedQuery.includes(keyword))) {
      return response.response
    }
  }
  
  return "Thanks for your question! I'd be happy to tell you more about my education at NUS, my technical skills, my projects like CodeOnTheGo and SaveSpot, or anything else you'd like to know. You can also reach me directly at soongshaozhi@gmail.com for more detailed discussions!"
} 