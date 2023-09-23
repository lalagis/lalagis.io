import { useState } from "react"

export default function Socials() {
  const [list] = useState<SocialItemProps[]>([
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
  ])

  return (
    <div className="mt-2">
      {list.map((item, index) => (
        <SocialItem 
          key={index}
          link={item.link}
          icon={item.icon}
          text={item.text}
          class={item.class}
        />
      ))}
    </div>
  )
}

interface SocialItemProps {
  link: string
  icon: string
  text?: string
  class?: string
}

function SocialItem(props: SocialItemProps) {
  return (
    <a
      className={`inline-flex px-3 py-2 mr-2 rounded-md bg-gray-50 transition-colors decoration-none ${props.class} hover:text-white dark:bg-gray-50/10`}
      href={props.link}
      target="_blank"
    >
      <div className="text-xl">
        <div className={props.icon} />
      </div>
      { !!props.text &&
        <div className="text-sm ml-1">{ props.text }</div>
      }
    </a>
  )
}