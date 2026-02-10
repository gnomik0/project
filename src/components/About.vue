<script setup lang="ts">
import { Code2, Palette, Rocket, Users } from 'lucide-vue-next'

const features = [
  {
    icon: Code2,
    title: 'Чистый код',
    description: 'Пишу читаемый и поддерживаемый код следуя best practices'
  },
  {
    icon: Palette,
    title: 'Современный дизайн',
    description: 'Создаю интуитивные интерфейсы с фокусом на UX'
  },
  {
    icon: Rocket,
    title: 'Быстрая разработка',
    description: 'Эффективно решаю задачи используя современные инструменты'
  },
  {
    icon: Users,
    title: 'Командная работа',
    description: 'Отличные навыки коммуникации и работы в команде'
  }
]
</script>

<template>
  <section id="about" class="py-16 sm:py-20 md:py-32 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-float"></div>
    <div class="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-float" style="animation-delay: 2s;"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-12 sm:mb-16 scroll-reveal">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Обо <span class="gradient-text">мне</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
        <div class="scroll-reveal animate-slideInLeft">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl transform rotate-3"></div>
            <div class="relative glass rounded-3xl p-8 sm:p-12 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div class="aspect-square bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center text-white">
                <div class="text-center">
                  <div class="text-6xl sm:text-8xl mb-4">👨‍💻</div>
                  <p class="text-xl sm:text-2xl font-bold">Разработчик</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="scroll-reveal animate-slideInRight">
          <h3 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Привет! Я увлечённый разработчик
          </h3>
          <p class="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
            С более чем 5 годами опыта в веб-разработке, я специализируюсь на создании 
            современных, отзывчивых и высокопроизводительных приложений.
          </p>
          <p class="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
            Моя страсть - превращать сложные проблемы в простые, красивые и интуитивные 
            решения. Когда я не пишу код, я изучаю новые технологии и делюсь знаниями 
            с сообществом.
          </p>
          <a 
            href="#contact"
            class="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Давайте работать вместе
          </a>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div 
          v-for="(feature, index) in features"
          :key="feature.title"
          class="scroll-reveal glass rounded-2xl p-6 sm:p-8 hover-lift"
          :style="`animation-delay: ${index * 0.1}s`"
        >
          <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
            <component :is="feature.icon" :size="24" class="text-white" />
          </div>
          <h4 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{{ feature.title }}</h4>
          <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
