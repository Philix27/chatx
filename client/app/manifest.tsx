'use client';
import type { MetadataRoute } from 'next';
import { useTheme } from 'next-themes';

export default function manifest(): MetadataRoute.Manifest {
  const { setTheme, theme } = useTheme();
  return {
    name: 'Mobarter',
    short_name: 'Mobarter',
    icons: [
      {
        src: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        // purpose: 'any maskable',
      },
      {
        src: '/icons/android-chrome-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: theme === 'dark' ? '#19232f' : '#e6e6e6',
    background_color: theme === 'dark' ? '#19232f' : '#e6e6e6',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
  };
}
