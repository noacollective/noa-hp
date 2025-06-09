"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gamepad, Palette, Sparkles, Heart, Star, Wand2 } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const projectData = [
  {
    title: "空神楽プロジェクト",
    description: "夜空に踊る光の舞いを、多様な人の交錯から生み出し、過去と未来、人・技術・自然の交わる新たな花火文化を創造します。",
    status: "活動中",
    category: "祭り",
    icon: Palette,
    tags: ["ロボットの舞い", "祭り", "スペクタクル"],
    gradient: "from-pink-50 to-purple-50",
    iconColor: "text-pink-600",
    badgeColor: "bg-pink-100 text-pink-700",
  },
  {
    title: "神話ARG",
    description: "退屈で味気ない現実を壮大な神話とゲーミフィケーションで楽しく美しい自分たちの世界へ変容させます。",
    status: "開発中",
    category: "ゲーム",
    icon: Gamepad,
    tags: ["現実代替", "神話", "創造"],
    gradient: "from-green-50 to-teal-50",
    iconColor: "text-green-600",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    title: "神楽塾",
    description: "教育と娯楽の境界を取り払い、学習そのものが遊びとなる革新的な教育。科学ではなく科楽で、美術ではなく美楽で自分と世界の関わりを豊かにします。",
    status: "企画中",
    category: "教育",
    icon: Star,
    tags: ["学習", "パーソナライズ", "興味"],
    gradient: "from-yellow-50 to-orange-50",
    iconColor: "text-yellow-600",
    badgeColor: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "未来の運動会・学園祭・展覧会",
    description: "一人一人の創造力が生まれ、皆の創造が交わる、地域の新たなお祭りを生み出します。",
    status: "企画中",
    category: "運動会",
    icon: Gamepad,
    tags: ["協力", "共感", "成長"],
    gradient: "from-blue-50 to-cyan-50",
    iconColor: "text-blue-600",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    title: "創造に満ちたまちづくりコレクティブ",
    description: "AR/デジファブ/音楽などを通じ、自然・技術と交わりながら、私たちで私たちの暮らし・街を創造で彩ります。",
    status: "コンセプト",
    category: "社会システム",
    icon: Heart,
    tags: ["感謝", "善意", "幸福"],
    gradient: "from-purple-50 to-indigo-50",
    iconColor: "text-purple-600",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    title: "旅・多拠点居住・AIR",
    description: "日本各地にある創造拠点を巡り、滞在し、様々な人、文化、創造と出会い、暮らしを楽しみます",
    status: "コンセプト",
    category: "社会システム",
    icon: Heart,
    tags: ["感謝", "善意", "幸福"],
    gradient: "from-purple-50 to-indigo-50",
    iconColor: "text-purple-600",
    badgeColor: "bg-purple-100 text-purple-700",
  },
]

// Badge component if it doesn't exist
const BadgeComponent = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${className}`}
    {...props}
  >
    {children}
  </span>
)

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "開発中":
        return "bg-blue-100 text-blue-700"
      case "プロトタイプ":
        return "bg-green-100 text-green-700"
      case "企画中":
        return "bg-yellow-100 text-yellow-700"
      case "研究中":
        return "bg-purple-100 text-purple-700"
      case "実証実験中":
        return "bg-orange-100 text-orange-700"
      case "コンセプト":
        return "bg-gray-100 text-gray-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <BadgeComponent className={getStatusColor(status)}>
      {status}
    </BadgeComponent>
  )
}

export default function Play() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-slate-900"
            >
              遊びで
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                世界
              </span>
              を
              <br />
              生み出す
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            >
              創造性と喜びを原動力とした世界の創造。
              <br className="hidden md:block" />
              遊びの力で人々の可能性を解放し、より豊かな社会を共に創造します。
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-8"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium text-slate-700">創造性の拡張</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-500" />
                <span className="text-sm font-medium text-slate-700">共感と協力</span>
              </div>
              <div className="flex items-center gap-2">
                <Wand2 className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-medium text-slate-700">魔法的体験</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            <motion.div variants={itemVariants} className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900">
                遊びの新しい定義
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                私たちが考える「遊び」は、単なる娯楽ではありません。
                それは人間の創造性、学習能力、社会性を最大限に引き出す
                根源的な活動です。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "創造的探求",
                  description: "既存の枠を超えて新しい可能性を発見する",
                  icon: "🎨",
                },
                {
                  title: "協力的学習",
                  description: "他者と共に成長し、知識を共有する",
                  icon: "🤝",
                },
                {
                  title: "感情的共鳴",
                  description: "深い感動と共感を通じて心を豊かにする",
                  icon: "💫",
                },
                {
                  title: "持続的楽しさ",
                  description: "長期的な充実感と生きがいを育む",
                  icon: "🌱",
                },
              ].map((concept, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full text-center border-0 bg-gradient-to-br from-slate-50 to-white hover:shadow-lg transition-all duration-300">
                    <CardHeader className="space-y-4">
                      <div className="text-4xl">{concept.icon}</div>
                      <CardTitle className="text-lg">{concept.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {concept.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            <motion.div variants={itemVariants} className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900">
                進行中のプロジェクト
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                創造性と遊びの力を活用した革新的なプロジェクトを展開しています。
                それぞれが社会課題の解決と人々の幸福向上に貢献します。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectData.map((project, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={`h-full border-0 bg-gradient-to-br ${project.gradient} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}>
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 bg-white/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <project.icon className={`h-6 w-6 ${project.iconColor}`} />
                        </div>
                        <StatusBadge status={project.status} />
                      </div>
                      <div className="space-y-2">
                        <CardTitle className="text-lg leading-snug">
                          {project.title}
                        </CardTitle>
                        <BadgeComponent className={project.badgeColor}>
                          {project.category}
                        </BadgeComponent>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <BadgeComponent
                            key={tagIndex}
                            className="bg-white/60 text-slate-600 text-xs"
                          >
                            {tag}
                          </BadgeComponent>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="w-full mt-4 group-hover:bg-white/60">
                        詳細を見る
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-16"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900">
                遊びがもたらす変革
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                私たちのプロジェクトは、個人の創造性開発から社会システムの変革まで、
                多層的なインパクトを創出しています。
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  number: "1,200+",
                  label: "創造体験参加者",
                  description: "新しい表現に挑戦した人の数",
                },
                {
                  number: "85%",
                  label: "協力行動の増加",
                  description: "ゲーム体験後の相互支援行動",
                },
                {
                  number: "94%",
                  label: "学習意欲の向上",
                  description: "遊び型学習システムでの改善率",
                },
              ].map((stat, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="text-center p-6 border-0 bg-white/80">
                    <div className="space-y-2">
                      <div className="text-3xl font-light text-blue-600">
                        {stat.number}
                      </div>
                      <div className="font-medium text-slate-800">
                        {stat.label}
                      </div>
                      <div className="text-sm text-slate-600">
                        {stat.description}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-100 via-white to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-8 max-w-3xl mx-auto"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900">
                共に遊び、共に創造する
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                あなたの創造性と情熱で、新しい遊びの可能性を探求しませんか？
                一緒に、もっと楽しく、もっと創造的な世界を築いていきましょう。
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="text-base px-8 py-6">
                プロジェクトに参加する
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-6">
                アイデアを提案する
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}