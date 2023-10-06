import { useState } from "react"
import Socials from "./Socials"

export default function Hero() {
  const [avatarUrl] = useState('https://github.com/lalagis.png')

  return (
    <header className="mt-12 md:mt-18 flex flex-row items-center justify-between">
      <img src={avatarUrl} className="w-72 h-72 rounded-full border-solid border border-gray-200 drop-shadow-md mr-1 flex-none sm:block hidden" />

      <div className="flex flex-col gap-y-3 mx-auto">
        <p className="font-semibold text-emerald text-4xl mb-2">嗨👋，欢迎来到Lulala的个人站</p>
        <div className="grid grid-cols-2 divide-x text-center">
          <p className="font-bold my-2">全栈&GIS开发</p>
          <p className="font-bold my-2">时空数据分析</p>
        </div>
        <p className="text-center font-light mt-2 mb-1">2021-2025 深圳大学 地理空间信息工程本</p>
        <p className="text-center font-light mb-2 mt-1">2021-2023 深圳科荔软件有限公司 开发</p>

        <Socials />
      </div>
    </header>
  )
}