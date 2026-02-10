<script setup lang="ts">
import { ref } from 'vue'
import { Mail, MapPin, Phone, Send } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = 'idle'

  await new Promise(resolve => setTimeout(resolve, 1500))

  submitStatus.value = 'success'
  isSubmitting.value = false

  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  setTimeout(() => {
    submitStatus.value = 'idle'
  }, 5000)
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@example.com',
    link: 'mailto:contact@example.com'
  },
  {
    icon: Phone,
    title: 'Телефон',
    value: '+7 (999) 123-45-67',
    link: 'tel:+79991234567'
  },
  {
    icon: MapPin,
    title: 'Локация',
    value: 'Москва, Россия',
    link: null
  }
]
</script>

<template>
  <section id="contact" class="py-16 sm:py-20 md:py-32 bg-gray-100 dark:bg-gray-800/50 relative overflow-hidden">
    <div class="absolute top-1/4 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-float"></div>
    <div class="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-float" style="animation-delay: 2s;"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-12 sm:mb-16 scroll-reveal">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Свяжитесь со <span class="gradient-text">мной</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        <p class="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
          Есть вопрос или хотите сотрудничать? Буду рад услышать от вас!
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="lg:col-span-1 space-y-6">
          <div 
            v-for="(info, index) in contactInfo"
            :key="info.title"
            class="scroll-reveal glass rounded-2xl p-6 hover-lift"
            :style="`animation-delay: ${index * 0.1}s`"
          >
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <component :is="info.icon" :size="20" class="text-white" />
              </div>
              <div class="flex-grow">
                <h3 class="font-semibold text-lg mb-1">{{ info.title }}</h3>
                <a 
                  v-if="info.link"
                  :href="info.link"
                  class="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm sm:text-base break-all"
                >
                  {{ info.value }}
                </a>
                <p 
                  v-else
                  class="text-gray-600 dark:text-gray-400 text-sm sm:text-base"
                >
                  {{ info.value }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 scroll-reveal" style="animation-delay: 0.3s">
          <form @submit.prevent="handleSubmit" class="glass rounded-3xl p-6 sm:p-8 md:p-10">
            <div class="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="name" class="block text-sm font-semibold mb-2">
                  Ваше имя
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:border-purple-600 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600/20 transition-all"
                  placeholder="Иван Иванов"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:border-purple-600 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600/20 transition-all"
                  placeholder="ivan@example.com"
                />
              </div>
            </div>

            <div class="mb-6">
              <label for="subject" class="block text-sm font-semibold mb-2">
                Тема
              </label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                class="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:border-purple-600 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600/20 transition-all"
                placeholder="Предложение о сотрудничестве"
              />
            </div>

            <div class="mb-6">
              <label for="message" class="block text-sm font-semibold mb-2">
                Сообщение
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                class="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:border-purple-600 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600/20 transition-all resize-none"
                placeholder="Расскажите о вашем проекте..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send :size="20" />
              <span>{{ isSubmitting ? 'Отправка...' : 'Отправить сообщение' }}</span>
            </button>

            <div 
              v-if="submitStatus === 'success'"
              class="mt-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-xl text-center font-medium"
            >
              ✅ Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.
            </div>

            <div 
              v-if="submitStatus === 'error'"
              class="mt-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-xl text-center font-medium"
            >
              ❌ Произошла ошибка. Пожалуйста, попробуйте позже.
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
