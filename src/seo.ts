export const SITE_URL = 'https://codexdigitalis.com';

export const PRERENDER_ROUTES = [
  '/',
  '/codex',
  '/principles',
  '/practices',
  '/community',
  '/about',
] as const;

export type PageMeta = {
  title: string;
  description: string;
};

const pages: Record<string, PageMeta> = {
  '/': {
    title: 'Iterum — Codex Digitalis',
    description:
      'Iterum — религия непрерывного обновления для людей информационной эпохи. Codex Digitalis — наш священный текст.',
  },
  '/codex': {
    title: 'Codex Digitalis — Iterum',
    description:
      'Священный текст Iterum — религии непрерывного обновления. Преамбула, принципы, заповеди и практики.',
  },
  '/principles': {
    title: 'Основные Принципы — Iterum',
    description:
      'Девять аксиом Iterum — не законы, а ориентиры. Каждый принцип содержит практику, ритуал и медитацию.',
  },
  '/practices': {
    title: 'Практики и Ритуалы — Iterum',
    description:
      'Ежедневные и недельные практики Codex Digitalis. Утренний Commit, вечерний постмортем, цифровой саббат.',
  },
  '/community': {
    title: 'Сообщество итерантов — Iterum',
    description:
      'Федерация автономных нод, объединённых общим протоколом. Как присоединиться к сообществу Iterum.',
  },
  '/about': {
    title: 'Об Iterum — Codex Digitalis',
    description:
      'Iterum (лат. «снова») — религия непрерывного обновления. Codex Digitalis — язык осмысления для тех, кто строит цифровой мир.',
  },
};

export function normalizePath(url = '/'): string {
  const path = url.split('?')[0].split('#')[0];
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path || '/';
}

export function getPageMeta(url = '/'): PageMeta {
  return pages[normalizePath(url)] ?? pages['/'];
}

export function absoluteUrl(url = '/'): string {
  const path = normalizePath(url);
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`;
}
