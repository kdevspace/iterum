import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
import { normalizePath } from './seo';

export const RoutePathContext = createContext('/');

export function useRoutePath() {
  return useContext(RoutePathContext);
}

export function isActivePath(href: string, current: string) {
  return normalizePath(href) === normalizePath(current);
}
