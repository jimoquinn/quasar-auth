// components/LoginForm.vue - Login component
<template>
  <q-card class="login-card q-pa-md" style="min-width: 300px">
    <q-card-section>
      <div class="text-h6 text-center q-mb-md">Login</div>

      <q-form @submit="onSubmit">
        <q-input
          color="white"
          v-model="username"
          label="Username"
          :rules="[(val) => !!val || 'Username is required']"
        />
        <q-input
          color="white"
          v-model="password"
          label="Password"
          :rules="[(val) => !!val || 'Password is required']"
        />

        <q-btn type="submit" color="primary" label="Login" class="full-width" :loading="loading" />
      </q-form>

      <div v-if="error" class="text-negative q-mt-sm text-center">
        {{ error }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from 'stores/auth'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const $q = useQuasar()
const router = useRouter()

const username = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const onSubmit = async () => {
  loading.value = true
  error.value = ''

  // Simulate a brief loading state
  await new Promise((resolve) => setTimeout(resolve, 500))

  const success = authStore.login(username.value, password.value)

  if (success) {
    $q.notify({
      type: 'positive',
      message: 'Login successful!',
    })
    router.push('/protected')
  } else {
    error.value = 'Invalid username or password'
  }

  loading.value = false
}
</script>

<style scoped>
.login-card {
  max-width: 400px;
  margin: 0 auto;
}
</style>
