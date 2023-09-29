import type { SocialItemProps } from "../components/Socials";

export const socials: SocialItemProps[] = [
  {
    text: 'GitHub',
    link: 'https://github.com/lalagis',
    icon: 'i-akar-icons:github-fill',
    class: 'hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900'
  },
  {
    text: 'Docs&Blogs(暂不部署)',
    link: '',
    icon: 'i-simple-icons:obsidian',
    class: 'hover:bg-[#5D32B5] dark:hover:bg-purple dark:hover:text-gray-900'
  },
  {
    text: '',
    link: 'https://dribbble.com/Cirno339',
    icon: 'i-akar-icons:dribbble-fill',
    class: 'hover:bg-[#ea4c89]'
  },
  {
    link: 'https://www.figma.com/@cirno339',
    icon: 'i-akar-icons:figma-fill',
    class: 'hover:bg-[#f7c104]'
  },
  {
    text: '',
    link: 'https://space.bilibili.com/11636897',
    icon: 'i-simple-icons:bilibili',
    class: 'hover:bg-[#fb7299]'
  },
  {
    text: '',
    link: 'https://steamcommunity.com/id/WWWW1123',
    icon: 'i-simple-icons:steam',
    class: 'hover:bg-[#1b2838]'
  },
  // need simple icons add hugging face
  // { ... }
]