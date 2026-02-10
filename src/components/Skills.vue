<script setup lang="ts">
const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-purple-600 to-pink-600',
    skills: [
      { name: 'Vue.js', level: 95, icon: '⚡' },
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'TypeScript', level: 92, icon: '📘' },
      { name: 'Tailwind CSS', level: 95, icon: '🎨' }
    ]
  },
  {
    title: 'Backend',
    color: 'from-blue-600 to-cyan-600',
    skills: [
      { name: 'Node.js', level: 88, icon: '🟢' },
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'PostgreSQL', level: 82, icon: '🐘' },
      { name: 'MongoDB', level: 80, icon: '🍃' }
    ]
  },
  {
    title: 'Tools & Others',
    color: 'from-pink-600 to-orange-600',
    skills: [
      { name: 'Git', level: 90, icon: '📦' },
      { name: 'Docker', level: 85, icon: '🐳' },
      { name: 'AWS', level: 78, icon: '☁️' },
      { name: 'Figma', level: 88, icon: '🎯' }
    ]
  }
]
</script>

<template>
  <section id="skills" class="py-16 sm:py-20 md:py-32 bg-gray-100 dark:bg-gray-800/50 relative overflow-hidden">
    <div class="absolute top-1/4 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-12 sm:mb-16 scroll-reveal">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Мои <span class="gradient-text">навыки</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        <p class="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
          Технологии и инструменты, которыми я владею для создания выдающихся проектов
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div 
          v-for="(category, catIndex) in skillCategories"
          :key="category.title"
          class="scroll-reveal glass rounded-3xl p-6 sm:p-8 hover-lift"
          :style="`animation-delay: ${catIndex * 0.1}s`"
        >
          <div class="flex items-center mb-6 sm:mb-8">
            <div :class="`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full mr-4`"></div>
            <h3 class="text-xl sm:text-2xl font-bold">{{ category.title }}</h3>
          </div>

          <div class="space-y-5 sm:space-y-6">
            <div 
              v-for="(skill, skillIndex) in category.skills"
              :key="skill.name"
              class="group"
            >
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-2">
                  <span class="text-xl sm:text-2xl">{{ skill.icon }}</span>
                  <span class="font-semibold text-sm sm:text-base">{{ skill.name }}</span>
                </div>
                <span class="text-xs sm:text-sm font-bold text-gray-600 dark:text-gray-400">
                  {{ skill.level }}%
                </span>
              </div>
              
              <div class="h-2 sm:h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  :class="`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`"
                  :style="`width: ${skill.level}%; animation-delay: ${(catIndex * 0.2) + (skillIndex * 0.1)}s`"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 sm:mt-16 text-center scroll-reveal">
        <p class="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 px-4">
          Постоянно учусь и развиваюсь, изучая новые технологии и подходы
        </p>
        <div class="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
          <span class="px-4 sm:px-6 py-2 sm:py-3 glass rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform">
            Vite
          </span>
          <span class="px-4 sm:px-6 py-2 sm:py-3 glass rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform">
            GraphQL
          </span>
          <span class="px-4 sm:px-6 py-2 sm:py-3 glass rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform">
            Prisma
          </span>
          <span class="px-4 sm:px-6 py-2 sm:py-3 glass rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform">
            Next.js
          </span>
          <span class="px-4 sm:px-6 py-2 sm:py-3 glass rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform">
            Redis
          </span>
          <span class="px-4 sm:px-6 py-2 sm:py-3 glass rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform">
            CI/CD
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
