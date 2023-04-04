import type { HIPositions } from '../../bosons/HelloInternet/HelloInternetTheme';
import type { AvatarSizes } from './Avatar';

export type AvatarTheme = {
  base: string;
  bordered: string;
  img: {
    off: string;
    on: string;
  };
  rounded: string;
  size: AvatarSizes;
  stacked: string;
  status: {
    away: string;
    base: string;
    busy: string;
    offline: string;
    online: string;
  };
  statusPosition: HIPositions;
  initials: {
    base: string;
    text: string;
  };
};

export const AVATAR_THEME: AvatarTheme = {
  base: 'flex items-center space-x-4',
  bordered: 'p-1 ring-2 ring-gray-300',
  img: {
    off: 'rounded relative overflow-hidden bg-gray-100',
    on: 'rounded'
  },
  rounded: '!rounded-full',
  size: {
    xs: 'h-10',
    sm: 'h-16',
    md: 'h-24',
    lg: 'h-36',
    xl: 'h-40'
  },
  stacked: 'ring-2 ring-gray-300',
  status: {
    away: 'bg-yellow-400',
    base: 'absolute h-3.5 w-3.5 rounded-full border-2 border-white',
    busy: 'bg-red-400',
    offline: 'bg-gray-400',
    online: 'bg-green-400'
  },
  statusPosition: {
    'bottom-left': '-bottom-1 -left-1',
    'bottom-center': '-botton-1 center',
    'bottom-right': '-bottom-1 -right-1',
    'top-left': '-top-1 -left-1',
    'top-center': '-top-1 center',
    'top-right': '-top-1 -right-1',
    'center-right': 'center -right-1',
    center: 'center center',
    'center-left': 'center -left-1'
  },
  initials: {
    text: 'font-medium text-gray-600',
    base: 'inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100'
  }
};