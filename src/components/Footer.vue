<script setup lang="ts">
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-vue-next'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:contact@example.com'
  }
]

const quickLinks = [
  { name: 'Главная', href: '#home' },
  { name: 'Обо мне', href: '#about' },
  { name: 'Навыки', href: '#skills' },
  { name: 'Проекты', href: '#projects' },
  { name: 'Контакты', href: '#contact' }
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-900 text-gray-300 pt-16 pb-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 class="text-2xl font-bold gradient-text mb-4">Portfolio</h3>
          <p class="text-gray-400 mb-6 leading-relaxed">
            Создаю современные веб-приложения с фокусом на качество, 
            производительность и пользовательский опыт.
          </p>
          <div class="flex gap-4">
            <a 
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              :aria-label="social.name"
            >
              <component :is="social.icon" :size="18" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4 text-white">Быстрые ссылки</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a 
                :href="link.href"
                class="hover:text-purple-400 transition-colors inline-flex items-center gap-2 group"
              >
                <span class="w-0 h-px bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4 text-white">Информация</h4>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start gap-2">
              <Mail :size="18" class="mt-1 text-purple-400 flex-shrink-0" />
              <a href="mailto:contact@example.com" class="hover:text-purple-400 transition-colors break-all">
                contact@example.com
              </a>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-1 text-purple-400 flex-shrink-0">📍</span>
              <span>Москва, Россия</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-1 text-purple-400 flex-shrink-0">📱</span>
              <span>+7 (999) 123-45-67</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-400 text-sm text-center md:text-left">
            © {{ currentYear }} Portfolio. Все права защищены.
          </p>
          <p class="text-gray-400 text-sm flex items-center gap-2">
            Сделано с 
            <Heart :size="16" class="text-red-500 fill-current animate-pulse" />
            и Vue.js
          </p>
        </div>
      </div>

      <div class="mt-8 text-center">
        <a 
          href="#home"
          class="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>
