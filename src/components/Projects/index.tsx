import { useState } from "react"

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
  const [list] = useState<ProjectItemProps[]>([
    {
      name: '导流地图',
      desc: '地理运动的可视化',
      icon: 'i-fluent-emoji-flat:worm',
      techs: [ 
        {
          name: 'astro+react+typescript',
          icon: 'i-simple-icons:astro',
          url: 'https://docs.astro.build/en/getting-started/'
        },
        {
          name: 'unocss+iconify',
          icon: 'i-simple-icons:unocss',
          url: 'https://unocss.dev/'
        },
        // {
        //   name: 'bun',
        //   icon: 'i-simple-icons:bun',
        //   url: 'https://bun.sh/docs'
        // },
        {
          name: 'deck.gl+flowmap.gl',
          icon: 'i-simple-icons:webgl',
          url: 'https://deck.gl/docs'
        },
        {
          name: 'tauri',
          icon: 'i-simple-icons:tauri',
          url: 'https://beta.tauri.app/2/reference/config/'
        },
        {
          name: 'vitest',
          icon: 'i-simple-icons:vitest',
          url: 'https://vitest.dev/'
        }
      ]
    },
    {
      name: '个人站 2.0',
      desc: '简历与项目经历',
      icon: 'i-fluent-emoji-flat:card-index',
      techs: [ 
        {
          name: 'astro',
          icon: 'i-simple-icons:astro',
          url: 'https://docs.astro.build/en/getting-started/'
        },
        {
          name: 'typescript',
          icon: 'i-simple-icons:typescript',
          url: 'https://www.typescriptlang.org/docs/'
        },
        {
          name: 'unocss',
          icon: 'i-simple-icons:unocss',
          url: 'https://unocss.dev/'
        },
        {
          name: 'iconify',
          icon: 'i-simple-icons:iconify',
          url: 'https://iconify.design/docs/'
        },
        {
          name: 'vitest',
          icon: 'i-simple-icons:vitest',
          url: 'https://vitest.dev/'
        }
      ]
    },
    {
      name: '校园荔枝地图',
      desc: 'webgis空间数据可视化与增删改查',
      icon: 'i-fluent-emoji-flat:cherries',
      techs: [ 
        {
          name: 'nuxt 3+vue 3+typescript',
          icon: 'i-simple-icons:nuxtdotjs',
          url: 'https://nuxt.com/docs'
        },
        {
          name: 'mapbox',
          icon: 'i-simple-icons:mapbox',
          url: 'https://docs.mapbox.com/'
        },
        {
          name: 'python3+robyn',
          icon: 'i-akar-icons:python-fill',
          url: 'https://robyn.tech/'
        },
        {
          name: 'postgres',
          icon: 'i-akar-icons:postgresql-fill',
          url: 'https://www.postgresql.org/docs/current/index.html'
        },
        {
          name: 'postgis',
          icon: 'i-akar-icons:postgresql-fill',
          url: 'https://postgis.net/'
        },
      ]
    },
    {
      name: '深圳大学“五四评优”评审',
      desc: '后端开发 大文件静态资源流动',
      icon: 'i-fluent-emoji-flat:pushpin',
      techs: [ 
        {
          name: 'strapi 4',
          icon: 'i-simple-icons:strapi',
          url: 'https://docs.strapi.io/dev-docs/intro'
        },
        {
          name: 'typescript',
          icon: 'i-simple-icons:typescript',
          url: 'https://www.typescriptlang.org/docs/'
        },
        {
          name: 'graphql',
          icon: 'i-simple-icons:graphql',
          url: 'https://graphql.org/'
        },
        {
          name: 'nginx',
          icon: 'i-simple-icons:nginx',
          url: 'http://nginx.org/en/docs/'
        },
        {
          name: 'cdn+对象存储',
          icon: 'i-akar-icons:cloud',
          url: 'https://cloud.tencent.com/document/product/228'
        },
      ]
    },
    {
      name: '你来花开',
      desc: '婚恋见面web平台 微信公众号与微信支付能力',
      icon: 'i-fluent-emoji-flat:cherry-blossom',
      techs: [ 
        {
          name: 'nextjs+react+typescript',
          icon: 'i-akar-icons:nextjs-fill',
          url: 'https://nextjs.org/docs'
        },
        {
          name: 'graphql',
          icon: 'i-simple-icons:graphql',
          url: 'https://graphql.org/'
        },
        {
          name: 'nestjs',
          icon: 'i-simple-icons:nestjs',
          url: 'https://docs.nestjs.com/'
        },
        {
          name: 'prisma',
          icon: 'i-simple-icons:prisma',
          url: 'https://www.prisma.io/'
        },
        {
          name: 'postgres',
          icon: 'i-akar-icons:postgresql-fill',
          url: 'https://www.postgresql.org/docs/current/index.html'
        },
      ]
    },
    {
      name: '深圳大学管院通讯录',
      desc: '小程序便利师生校友会交流联系 发布活动',
      icon: 'i-fluent-emoji-flat:telephone',
      techs: [ 
        {
          name: 'uniapp+vue 3',
          icon: 'i-akar-icons:shipping-box-02',
          url: 'https://zh.uniapp.dcloud.io/'
        },
        {
          name: 'typescript',
          icon: 'i-simple-icons:typescript',
          url: 'https://www.typescriptlang.org/docs/'
        },
        {
          name: 'graphql',
          icon: 'i-simple-icons:graphql',
          url: 'https://graphql.org/'
        },
        {
          name: 'tailwindcss',
          icon: 'i-simple-icons:tailwindcss',
          url: 'https://tailwindcss.com/docs/installation'
        },
        {
          name: 'strapi 4',
          icon: 'i-simple-icons:strapi',
          url: 'https://docs.strapi.io/dev-docs/intro'
        },
      ]
    },
    {
      name: '白板管理后台',
      desc: '管理员相关社区操作web面板',
      icon: 'i-fluent-emoji-flat:water-pistol',
      techs: [ 
        {
          name: 'nuxt 3+vue 3',
          icon: 'i-simple-icons:nuxtdotjs',
          url: 'https://nuxt.com/docs'
        },
        {
          name: 'typescript',
          icon: 'i-simple-icons:typescript',
          url: 'https://www.typescriptlang.org/docs/'
        },
        {
          name: 'graphql',
          icon: 'i-simple-icons:graphql',
          url: 'https://graphql.org/'
        },
        {
          name: 'tailwindcss',
          icon: 'i-simple-icons:tailwindcss',
          url: 'https://tailwindcss.com/docs/installation'
        }
      ]
    },
    {
      name: '白板BlankSpaces 2.0',
      desc: '现运行版本社区 前端协作',
      icon: 'i-fluent-emoji-flat:television',
      techs: [ 
        {
          name: 'uniapp+vue 3',
          icon: 'i-akar-icons:shipping-box-02',
          url: 'https://zh.uniapp.dcloud.io/'
        },
        {
          name: 'typescript',
          icon: 'i-simple-icons:typescript',
          url: 'https://www.typescriptlang.org/docs/'
        },
        {
          name: 'graphql',
          icon: 'i-simple-icons:graphql',
          url: 'https://graphql.org/'
        },
        {
          name: 'tailwindcss',
          icon: 'i-simple-icons:tailwindcss',
          url: 'https://tailwindcss.com/docs/installation'
        }
      ]
    },
    {
      name: '深圳大学丽湖校区活动室预约系统 2.0',
      desc: '新架构重构预约小程序系统',
      icon: 'i-fluent-emoji-flat:open-mailbox-with-raised-flag',
      techs: [ 
        {
          name: 'vue 3',
          icon: 'i-akar-icons:vue-fill',
          url: 'https://cn.vuejs.org/guide/introduction.html'
        },
        {
          name: 'typescript',
          icon: 'i-simple-icons:typescript',
          url: 'https://www.typescriptlang.org/docs/'
        },
        {
          name: 'graphql',
          icon: 'i-simple-icons:graphql',
          url: 'https://graphql.org/'
        },
        {
          name: 'uniapp',
          icon: 'i-akar-icons:shipping-box-02',
          url: 'https://zh.uniapp.dcloud.io/'
        },
        {
          name: 'strapi 4',
          icon: 'i-simple-icons:strapi',
          url: 'https://docs.strapi.io/dev-docs/intro'
        },
      ]
    },
    {
      name: '白板地图微服务',
      desc: '校园兴趣点标识共建',
      icon: 'i-fluent-emoji-flat:bullseye',
      techs: [
        {
          name: 'strapi 3.0',
          icon: 'i-simple-icons:strapi',
          url: 'https://docs-v3.strapi.io/developer-docs/latest/getting-started/introduction.html'
        },
        {
          name: 'typescript',
          icon: 'i-simple-icons:typescript',
          url: 'https://www.typescriptlang.org/docs/'
        },
        {
          name: '腾讯云轻量服务器',
          icon: 'i-akar-icons:cloud',
          url: 'https://cloud.tencent.com/document/product/1207'
        },
        {
          name: 'docker',
          icon: 'i-simple-icons:docker',
          url: 'https://docs.docker.com/'
        }
      ]
    },
    {
      name: '白板BlankSpace 1.0',
      desc: '万级校园社区 前端协作',
      icon: 'i-fluent-emoji-flat:megaphone',
      techs: [ 
        {
          name: 'react',
          icon: 'i-akar-icons:react-fill',
          url: 'https://react.dev/'
        },
        {
          name: 'typescript',
          icon: 'i-simple-icons:typescript',
          url: 'https://www.typescriptlang.org/docs/'
        },
        {
          name: 'taro',
          icon: 'i-akar-icons:shipping-box-02',
          url: 'https://docs.taro.zone/docs/'
        },
        {
          name: 'graphql',
          icon: 'i-simple-icons:graphql',
          url: 'https://graphql.org/'
        },
        {
          name: 'dgraph',
          icon: 'i-simple-icons:dgraph',
          url: 'https://dgraph.io/'
        }
      ]
    },
    {
      name: '深圳大学丽湖校区活动室预约系统 1.0',
      desc: '无纸化办公 师生物业三方协同',
      icon: 'i-fluent-emoji-flat:closed-mailbox-with-raised-flag',
      techs: [ 
        {
          name: 'react',
          icon: 'i-akar-icons:react-fill',
          url: 'https://react.dev/'
        },
        {
          name: 'taro',
          icon: 'i-akar-icons:shipping-box-02',
          url: 'https://docs.taro.zone/docs/'
        },
        {
          name: 'typescript',
          icon: 'i-simple-icons:typescript',
          url: 'https://www.typescriptlang.org/docs/'
        },
        {
          name: '腾讯云短信',
          icon: 'i-akar-icons:cloud',
          url: 'https://cloud.tencent.com/document/product/382'
        },
        {
          name: '微信云开发',
          icon: 'i-simple-icons:wechat',
          url: 'https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/quickstart.html'
        }
      ]
    },
    {
      name: '丰鑫同城',
      desc: '同城交流发帖定位',
      icon: 'i-fluent-emoji-flat:shallow-pan-of-food',
      techs: [ 
        {
          name: 'WXML',
          icon: 'i-akar-icons:html-fill',
          url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/code.html#WXML-%E6%A8%A1%E6%9D%BF'
        },
        {
          name: 'WXSS',
          icon: 'i-akar-icons:css-fill',
          url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/code.html#WXSS-%E6%A0%B7%E5%BC%8F'
        },
        {
          name: 'JavaScript',
          icon: 'i-akar-icons:javascript-fill',
          url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/code.html#JS-%E9%80%BB%E8%BE%91%E4%BA%A4%E4%BA%92'
        },
        {
          name: '微信云开发',
          icon: 'i-simple-icons:wechat',
          url: 'https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/quickstart.html'
        },
        {
          name: 'git',
          icon: 'i-simple-icons:git',
          url: 'https://git-scm.com/doc'
        }
      ]
    },
    {
      name: '个人博客 1.0',
      desc: '三剑客入门之作',
      icon: 'i-fluent-emoji-flat:bird',
      techs: [ 
        {
          name: 'HTML 5',
          icon: 'i-akar-icons:html-fill',
          url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML'
        },
        {
          name: 'CSS 3',
          icon: 'i-akar-icons:css-fill',
          url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS'
        },
        {
          name: 'JavaScript',
          icon: 'i-akar-icons:javascript-fill',
          url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript'
        }
      ]
    }
  ])

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