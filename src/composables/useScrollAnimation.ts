import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollAnimation() {
  const observer = ref<IntersectionObserver | null>(null)

  const initScrollAnimation = () => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const elements = document.querySelectorAll('.scroll-reveal')
    elements.forEach((el) => observer.value?.observe(el))
  }

  onMounted(() => {
    initScrollAnimation()
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  return {
    initScrollAnimation
  }
}
