// pages/LoginPage.vue - Login page
<template>
  <q-layout>
    <div class="absolute-full text-subtitle2 flex flex-center">
      <q-page-container>
        <q-page class="flex flex-center">
          <LoginForm />
        </q-page>
      </q-page-container>
    </div>
  </q-layout>
</template>

<script setup>
import LoginForm from 'components/LoginForm.vue'
</script>
