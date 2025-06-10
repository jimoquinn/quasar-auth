// boot/pinia.js - Boot file for Pinia (if not already created)
import { defineBoot } from '#q-app/wrappers'
import { createPinia } from 'pinia'

export default defineBoot(({ app }) => {
  const pinia = createPinia()
  app.use(pinia)
})

// import { defineBoot } from '#q-app/wrappers'

// // "async" is optional;
// // more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
// export default defineBoot(async (/* { app, router, ... } */) => {
//   // something to do
// })
