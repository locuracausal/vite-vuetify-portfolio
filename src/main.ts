/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import ButtonIcon from './components/ButtonIcon.vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

app.component('ButtonIcon', ButtonIcon)

registerPlugins(app)

app.mount('#app')
