// pages/ProtectedPage.vue - Your protected content
<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-pa-md">
        <div class="row justify-between items-center q-mb-md">
          <h6 class="q-my-none">Protected Content</h6>
          <q-btn color="negative" label="Logout" @click="handleLogout" icon="logout" />
        </div>

        <q-card class="q-pa-md">
          <q-card-section>
            <p>
              This is your protected content, pages/ProtectedPage.vue, that only authenticated users
              can see.
            </p>
            <p>You can put any content here that needs to be protected.</p>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useAuthStore } from 'stores/auth'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

const authStore = useAuthStore()
const router = useRouter()
const $q = useQuasar()

const handleLogout = () => {
  authStore.logout()
  $q.notify({
    type: 'info',
    message: 'Logged out successfully',
  })
  router.push('/login')
}
</script>
