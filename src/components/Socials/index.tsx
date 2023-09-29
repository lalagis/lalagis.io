import { useState } from "react"
import { socials } from "../../constants/socials"

export default function Socials() {
  const [list] = useState<SocialItemProps[]>(socials)

  return (
    <div className="mt-2 flex flex-row flex-wrap gap-y-1">
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

export interface SocialItemProps {
  link: string
  icon: string
  text?: string
  class?: string
}

export function SocialItem(props: SocialItemProps) {
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