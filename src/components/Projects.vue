<script setup lang="ts">
import { ExternalLink, Github } from 'lucide-vue-next'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  gradient: string
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'Полнофункциональная платформа электронной коммерции с корзиной, платежами и панелью администратора',
    image: '🛍️',
    tags: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Task Management App',
    description: 'Приложение для управления задачами с drag-and-drop, коллаборацией в реальном времени',
    image: '📋',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'AI Chat Assistant',
    description: 'Чат-бот с искусственным интеллектом для поддержки клиентов и автоматизации ответов',
    image: '🤖',
    tags: ['Python', 'OpenAI', 'FastAPI', 'WebSocket'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-green-600 to-teal-600'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Аналитическая панель для мониторинга и анализа метрик социальных сетей',
    image: '📊',
    tags: ['Vue.js', 'Chart.js', 'REST API', 'MongoDB'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-orange-600 to-red-600'
  },
  {
    title: 'Video Streaming Platform',
    description: 'Платформа для стриминга видео с плейлистами, рекомендациями и системой подписок',
    image: '🎬',
    tags: ['Next.js', 'AWS S3', 'GraphQL', 'Redis'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-pink-600 to-purple-600'
  },
  {
    title: 'Fitness Tracker',
    description: 'Мобильное приложение для отслеживания тренировок, питания и прогресса',
    image: '💪',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Charts'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-cyan-600 to-blue-600'
  }
]
</script>

<template>
  <section id="projects" class="py-16 sm:py-20 md:py-32 relative overflow-hidden">
    <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-float"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-12 sm:mb-16 scroll-reveal">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Мои <span class="gradient-text">проекты</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        <p class="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
          Избранные работы, которые я создал с любовью и вниманием к деталям
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div 
          v-for="(project, index) in projects"
          :key="project.title"
          class="scroll-reveal group"
          :style="`animation-delay: ${index * 0.1}s`"
        >
          <div class="glass rounded-3xl overflow-hidden hover-lift h-full flex flex-col">
            <div :class="`relative aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`">
              <div class="text-6xl sm:text-7xl md:text-8xl transform group-hover:scale-110 transition-transform duration-500">
                {{ project.image }}
              </div>
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>

            <div class="p-6 sm:p-8 flex flex-col flex-grow">
              <h3 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:gradient-text transition-all duration-300">
                {{ project.title }}
              </h3>
              
              <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 flex-grow">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2 mb-4 sm:mb-6">
                <span 
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-3 py-1 text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 rounded-full font-medium"
                >
                  {{ tag }}
                </span>
              </div>

              <div class="flex gap-3 sm:gap-4">
                <a 
                  :href="project.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 px-4 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <ExternalLink :size="16" />
                  <span>Demo</span>
                </a>
                <a 
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 sm:py-3 glass rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  aria-label="View on GitHub"
                >
                  <Github :size="20" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 sm:mt-16 scroll-reveal">
        <p class="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 px-4">
          Хотите увидеть больше? Посетите мой GitHub!
        </p>
        <a 
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 glass rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <Github :size="20" />
          <span>Посмотреть на GitHub</span>
        </a>
      </div>
    </div>
  </section>
</template>
