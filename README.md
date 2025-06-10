This is a simple authentication system for Quasar Framework with
Vue 3 and Composition API.

The system is intentionally simple - no password hashing, no API calls,
no password reset, no account creation, no account removal -- just
a straightforward solution to protect a single page. You can
easily customize the credentials by changing the constants in
stores/auth.js, and add more protected routes by applying the same
route guard pattern in router/routes.js. Feel free to use this as
a starting point to build out a more robust and secure system.

If you need a robust industrial scale authentication system, DO NOT
use this.

I use this to protect prototypes sites that are on the web, but do
not want them easily accessable to everyone. I'm sure a determined
individual could bypass this.

Here's what it includes:

Key Features:

- Single hardcoded user
- Persistent login state using localStorage
- Route guards to protect pages
- Clean login/logout flow with Quasar notifications
- Responsive design using Quasar components

How it works:

- stores/auth.js - Pinia Store - Manages authentication state, logic, and
  the hardcoded user id and password.
- router/routes.js - Router Guards - Automatically redirects users
  based on auth state stored in Pinia.
- components/LoginForm.vue - Login Form Component - Handles user input
  with validation. This component is intended to be included in another
  page, in this example, that page is pages/LoginPage.vue.
- pages/LoginPage.vue - Login Page - The homepage of sorts, displays the user
  id and password &lt;q-input&gt; forms from the components/LoginForm.vue
  component.
- pages/ProtectedPage.vue - Protected Page - Your protected content with
  logout button. If you are using a layout, just inclulde the &lt;script&gt;
  section in your layout .vue file. Also, include the logout &lt;q-btn&gt;
  if you'd like.

Setup:

- git clone https://github.com/jimoquinn/quasar-auth.git
- cd quasar-auth
- yarn
- yarn quasar dev

File structure:

```
src/
├── boot/
│ └── pinia.js (optional - only if Pinia not already configured)
├── stores/
│ └── auth.js
├── components/
│ └── LoginForm.vue
├── pages/
│ ├── LoginPage.vue
│ └── ProtectedPage.vue
└── router/
| └── routes.js
```

Other information:

- Pinia, Notify and Cookies were added to quasar.config.js

```
   framework: {
     plugins: [
       'Notify', 'Cookies'  // Required for $q.notify
     ]
   }
```

- Pinia was added to the boot section of quasar.config.js

```
boot: [
  'pinia' // Remove this if Pinia is already configured elsewhere
],
```
