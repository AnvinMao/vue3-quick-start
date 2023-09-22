import { createI18n } from "vue-i18n";
import messages, { type MessageSchema } from './translations';

type Locales = keyof typeof messages;

export interface Language {
  locale: string;
  name: string;
  value: string;
}

export const Langs: Language[] = [
  { locale: 'en-US', name: 'English', value: 'ENGLISH' },
  { locale: 'zh-CN', name: '简体中文', value: 'SIMPLIFIED_CHINESE' }
]

const i18n = createI18n<MessageSchema, Locales>({
  legacy: false,
  locale: localStorage.getItem('locale') || 'en-US',
  messages
})

export const currentLanguage = (): Language => {
  // @ts-ignore
  const lang: Language | undefined = Langs.find(x => x.locale === i18n.global.locale.value);
  return lang || Langs[0];
}

export default i18n;