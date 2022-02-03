import type { PluginOptions } from 'vue-toastification'
import Toast, { POSITION } from 'vue-toastification'
import type { UserModule } from '~/types'
import 'vue-toastification/dist/index.css'

export const install: UserModule = ({ app, isClient }) => {
  if (!isClient) return
  const options: PluginOptions = {
    position: POSITION.BOTTOM_RIGHT,
    timeout: false,
  }
  app.use(Toast, options)
}
