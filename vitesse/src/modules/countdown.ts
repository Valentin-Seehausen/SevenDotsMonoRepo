import VueCountdown from '@chenfengyuan/vue-countdown'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.component(VueCountdown.name as string, VueCountdown)
}
