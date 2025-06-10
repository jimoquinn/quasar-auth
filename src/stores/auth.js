// stores/auth.js - Pinia store for authentication
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)

  // Simple hardcoded credentials
  const VALID_USERNAME = 'setmeplease'
  const VALID_PASSWORD = 'needAtLeast8chars'

  const login = (username, password) => {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      isAuthenticated.value = true
      // Store auth state in localStorage for persistence
      localStorage.setItem('isAuthenticated', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    isAuthenticated.value = false
    localStorage.removeItem('isAuthenticated')
  }

  const checkAuth = () => {
    const stored = localStorage.getItem('isAuthenticated')
    isAuthenticated.value = stored === 'true'
  }

  return {
    isAuthenticated,
    login,
    logout,
    checkAuth,
  }
})
