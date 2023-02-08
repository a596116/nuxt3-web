import { useI18n } from 'vue-i18n'

export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
  }
}

export const availableLocales: ILocales = {
  en: {
    name: 'English',
    iso: 'en',
    flag: '🇺🇸',
  },
  zh: {
    name: '簡體中文',
    iso: 'zh',
    flag: '🇹🇼',
  },
}

export function LanguageManager() {
  // composable
  const locale = useI18n().locale
  const localeUserSetting = useCookie('locale')


  // methods
  const getSystemLocale = (): string => {
    try {
      const foundLang = window
        ? window.navigator.language.substring(0, 2)
        : 'zh'
      return availableLocales[foundLang] ? foundLang : 'zh'
    } catch (error) {
      return 'zh'
    }
  }
  const getUserLocale = (): string =>
    localeUserSetting.value || getSystemLocale()

  // state
  const localeSetting = useState<string>('locale.setting', () =>
    getUserLocale()
  )

  // watchers
  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting
    locale.value = localeSetting
  })

  // init locale
  const init = () => {
    localeSetting.value = getUserLocale()
  }
  locale.value = localeSetting.value

  // lifecycle
  onBeforeMount(() => init())

  return {
    localeSetting,
    init,
  }
}
