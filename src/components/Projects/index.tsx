import { useState } from "react"
import { projects } from "../../constants/projects"

export interface ProjectItemProps {
  name: string
  desc: string
  icon: string
  techs?: TechItem[]
}

interface TechItem {
  name: string
  icon: string
  url: string
}

export default function Projects() {
  const [list] = useState<ProjectItemProps[]>(projects)

  return (
    <div className="mt-15">
      <p className="flex items-center mb-4 font-semibold text-3xl text-emerald">项目 Projects</p>

      <div>
        <div className="flex flex-col gap-4">
          { list.map((item, index) => <ProjectItem key={index} {...item} /> )}
        </div>
      </div>
    </div>
  )
}

export function ProjectItem(props: ProjectItemProps) {
  return (
    <div className="px-4 py-3 rounded-md bg-gray-50 transition-colors decoration-none hover:bg-gray-100 dark:bg-gray-50/10 dark:hover:bg-gray-50/20">
      <div className="flex h-full items-center sm:justify-center flex-row">
        <div className="mr-4 text-4xl">
          <div className={props.icon} />
        </div>
        <div className="ml-1">
          <div className="font-medium leading-relaxed">{props.name}</div>
          <div className="op-50 font-normal text-sm">{props.desc}</div>
        </div>
        <div className="sm:flex flex-1 flex-row justify-end gap-x-3 hidden">
          { !!props.techs?.length && (props.techs.map((item, index) => (
            <a 
              key={index} 
              className="flex flex-col rounded-md p-2 transition-colors decoration-none bg-white hover:bg-gray-200 dark:bg-gray-50/20 dark:hover:bg-gray-50/30"
              href={item.url}
              title={item.name}
              target="_blank"
            >
              <div className={`${item.icon} text-3xl`} />
            </a>
          ))) }
        </div>
      </div>
    </div>
  )
}