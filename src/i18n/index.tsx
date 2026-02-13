import { createContext } from 'preact';
import { useContext, useState, useCallback, useEffect } from 'preact/hooks';
import { ComponentChildren } from 'preact';
import { ru } from './translations/ru';
import { en } from './translations/en';
import { de } from './translations/de';
import { fr } from './translations/fr';
import { zh } from './translations/zh';
import { ar } from './translations/ar';

export type Lang = 'ru' | 'en' | 'de' | 'fr' | 'zh' | 'ar';

export const languages: { code: Lang; name: string; nativeName: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'ru', name: 'Russian', nativeName: 'Русский', dir: 'ltr' },
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
];

const allTranslations: Record<Lang, any> = { ru, en, de, fr, zh, ar };

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dir: 'ltr' | 'rtl';
}

const I18nContext = createContext<I18nContextType>({
  lang: 'ru',
  setLang: () => {},
  dir: 'ltr',
});

export function I18nProvider({ children }: { children: ComponentChildren }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem('iterum-lang') as Lang;
      if (saved && allTranslations[saved]) return saved;
    } catch {}
    return 'ru';
  });

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    try { localStorage.setItem('iterum-lang', newLang); } catch {}
  }, []);

  const dir = languages.find(l => l.code === lang)?.dir || 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang, dir]);

  return (
    <I18nContext.Provider value={{ lang, setLang, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  const translations = allTranslations[ctx.lang] || allTranslations.ru;
  return { ...ctx, t: translations };
}
