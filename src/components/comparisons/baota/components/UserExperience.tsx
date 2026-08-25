import { Palette, Zap, BookOpen, Smile, Clock, MousePointer } from 'lucide-react'

const UserExperience = () => {
  const uxMetrics = [
    {
      icon: Palette,
      title: '界面设计',
      onepanel: '现代化 Ant Design 风格',
      pagoda: '传统界面，信息密度高',
      score1: 95,
      score2: 70,
      description: '简洁优雅的设计语言，视觉层次清晰'
    },
    {
      icon: MousePointer,
      title: '交互体验',
      onepanel: '流畅直观，响应迅速',
      pagoda: '操作明确，但略显生硬',
      score1: 90,
      score2: 75,
      description: '每个操作都有即时反馈，学习曲线平缓'
    },
    {
      icon: Zap,
      title: '操作效率',
      onepanel: '核心操作一键完成',
      pagoda: '功能繁多，需要多步操作',
      score1: 92,
      score2: 68,
      description: '常用功能快速访问，减少重复操作'
    },
    {
      icon: BookOpen,
      title: '学习成本',
      onepanel: '低，对新手友好',
      pagoda: '需要时间熟悉大量功能',
      score1: 88,
      score2: 60,
      description: '引导清晰，文档完善，上手即用'
    }
  ]

  const userJourney = [
    {
      step: 1,
      title: '安装部署',
      onepanel: {
        time: '2分钟',
        description: '一条命令完成安装',
        experience: '简单快速',
        rating: 5
      },
      pagoda: {
        time: '10-15分钟',
        description: '复杂安装脚本',
        experience: '需要等待',
        rating: 3
      }
    },
    {
      step: 2,
      title: '首次使用',
      onepanel: {
        time: '5分钟',
        description: '界面直观，快速上手',
        experience: '愉悦流畅',
        rating: 5
      },
      pagoda: {
        time: '20-30分钟',
        description: '功能复杂，需要探索',
        experience: '略显困惑',
        rating: 3
      }
    },
    {
      step: 3,
      title: '应用部署',
      onepanel: {
        time: '1-2分钟',
        description: '应用商店一键部署',
        experience: '极其便捷',
        rating: 5
      },
      pagoda: {
        time: '5-10分钟',
        description: '手动配置多个步骤',
        experience: '相对复杂',
        rating: 3
      }
    },
    {
      step: 4,
      title: '日常维护',
      onepanel: {
        time: '定期',
        description: '自动化程度高',
        experience: '省心省力',
        rating: 5
      },
      pagoda: {
        time: '频繁',
        description: '需要手动干预',
        experience: '工作量大',
        rating: 3
      }
    }
  ]

  const testimonials = [
    {
      avatar: '👨‍💻',
      name: '张XX',
      role: '全栈工程师',
      content: '1Panel 的容器化部署太方便了，再也不用担心环境配置问题。界面设计也很现代化，使用起来很舒服。',
      rating: 5
    },
    {
      avatar: '👩‍💼',
      name: '李XX',
      role: '系统管理员',
      content: '从传统面板迁移到 1Panel 后，服务器资源占用明显降低，而且开源透明让我更放心。',
      rating: 5
    },
    {
      avatar: '👨‍🎓',
      name: '王XX',
      role: '计算机专业学生',
      content: '作为新手，1Panel 的学习成本真的很低，文档清晰，社区也很活跃，有问题很快就能解决。',
      rating: 5
    }
  ]

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ))
  }

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            用户体验全面领先
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            从界面设计到操作流程，1Panel 在用户体验的每个环节都精心打磨，
            让服务器管理变得更加轻松愉悦
          </p>
        </div>

        {/* UX指标对比 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {uxMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className="text-blue-600" size={32} />
                <div className="text-right text-sm text-gray-500">
                  评分对比
                </div>
              </div>

              <h3 className="font-bold text-gray-900 mb-3">{metric.title}</h3>

              {/* 评分条 */}
              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-blue-600 font-medium">1Panel</span>
                    <span className="text-blue-600 font-bold">{metric.score1}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${metric.score1}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-orange-600 font-medium">传统面板</span>
                    <span className="text-orange-600 font-bold">{metric.score2}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${metric.score2}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* 用户旅程对比 */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">用户旅程对比</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {userJourney.map((journey) => (
              <div key={journey.step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                    {journey.step}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{journey.title}</h4>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-bold text-blue-700">1Panel</span>
                      <div className="flex">{getRatingStars(journey.onepanel.rating)}</div>
                    </div>
                    <div className="text-lg font-bold text-gray-900">{journey.onepanel.time}</div>
                    <p className="mt-2 text-sm text-gray-600">{journey.onepanel.description}</p>
                    <p className="mt-3 text-sm font-medium text-blue-700">{journey.onepanel.experience}</p>
                  </div>
                  <div className="rounded-xl border border-orange-100 bg-orange-50/70 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-bold text-orange-700">传统面板</span>
                      <div className="flex">{getRatingStars(journey.pagoda.rating)}</div>
                    </div>
                    <div className="text-lg font-bold text-gray-900">{journey.pagoda.time}</div>
                    <p className="mt-2 text-sm text-gray-600">{journey.pagoda.description}</p>
                    <p className="mt-3 text-sm font-medium text-orange-700">{journey.pagoda.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 用户评价 */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            用户反馈
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>

                <div className="flex mb-3">
                  {getRatingStars(testimonial.rating)}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 体验优势总结 */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">1Panel 用户体验核心优势</h3>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white/10 rounded-lg p-4">
                <Smile className="mx-auto mb-2" size={32} />
                <div className="font-semibold mb-1">愉悦感</div>
                <div className="text-sm text-purple-100">现代化设计带来愉悦体验</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Clock className="mx-auto mb-2" size={32} />
                <div className="font-semibold mb-1">高效率</div>
                <div className="text-sm text-purple-100">减少操作步骤，提升效率</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <BookOpen className="mx-auto mb-2" size={32} />
                <div className="font-semibold mb-1">易学习</div>
                <div className="text-sm text-purple-100">低学习成本，快速上手</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Zap className="mx-auto mb-2" size={32} />
                <div className="font-semibold mb-1">高性能</div>
                <div className="text-sm text-purple-100">响应迅速，体验流畅</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserExperience
