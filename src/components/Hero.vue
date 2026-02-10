<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-vue-next'

const displayedText = ref('')
const texts = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Creative Thinker']
const currentIndex = ref(0)
const isDeleting = ref(false)

const typeWriter = () => {
  const currentText = texts[currentIndex.value]
  const speed = isDeleting.value ? 50 : 100

  if (!isDeleting.value && displayedText.value === currentText) {
    setTimeout(() => {
      isDeleting.value = true
    }, 2000)
  } else if (isDeleting.value && displayedText.value === '') {
    isDeleting.value = false
    currentIndex.value = (currentIndex.value + 1) % texts.length
  } else {
    if (isDeleting.value) {
      displayedText.value = currentText.substring(0, displayedText.value.length - 1)
    } else {
      displayedText.value = currentText.substring(0, displayedText.value.length + 1)
    }
  }

  setTimeout(typeWriter, speed)
}

onMounted(() => {
  typeWriter()
})
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <div class="absolute inset-0 animate-gradient bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 opacity-10"></div>
    
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style="animation-delay: 4s;"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center">
        <div class="animate-fadeInDown">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Привет, я <span class="gradient-text">Разработчик</span>
          </h1>
        </div>
        
        <div class="animate-fadeInUp" style="animation-delay: 0.2s; opacity: 0;">
          <div class="h-16 sm:h-20 flex items-center justify-center">
            <p class="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium">
              <span class="gradient-text">{{ displayedText }}</span>
              <span class="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <div class="animate-fadeInUp mt-8 sm:mt-12" style="animation-delay: 0.4s; opacity: 0;">
          <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
            Создаю красивые, современные и функциональные веб-приложения 
            с использованием передовых технологий
          </p>
        </div>

        <div class="animate-fadeInUp flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16" style="animation-delay: 0.6s; opacity: 0;">
          <a 
            href="#projects"
            class="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Посмотреть работы
          </a>
          <a 
            href="#contact"
            class="px-8 py-4 glass text-gray-900 dark:text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Связаться
          </a>
        </div>

        <div class="animate-fadeIn flex items-center justify-center gap-6" style="animation-delay: 0.8s; opacity: 0;">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 glass rounded-full hover:scale-110 hover:shadow-xl transition-all duration-300"
            aria-label="GitHub"
          >
            <Github :size="24" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 glass rounded-full hover:scale-110 hover:shadow-xl transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin :size="24" />
          </a>
          <a 
            href="mailto:contact@example.com"
            class="p-3 glass rounded-full hover:scale-110 hover:shadow-xl transition-all duration-300"
            aria-label="Email"
          >
            <Mail :size="24" />
          </a>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown :size="32" class="text-gray-600 dark:text-gray-400" />
        </a>
      </div>
    </div>
  </section>
</template>
