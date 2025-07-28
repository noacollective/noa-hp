"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Bot, 
  Network,
  Eye,
  Shield,
  Cpu,
  Database,
  Search,
  BookOpen,
  ChevronRight
} from "lucide-react"

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
    title: "chatAI-interface for plurality",
    description: "chatAIが個人の世界を閉じるのではなく、共にいるためのメディアとなるための技術を創造します。",
    status: "開発中",
    category: "chatAI",
    icon: Brain,
    tags: ["AI", "共生", "plurality"],
    gradient: "from-purple-50 to-indigo-50",
    iconColor: "text-purple-600",
    progress: 75
  },
  {
    title: "地域の護り神AI",
    description: "地域/場所とは何かを問いかけながら、様々な生命の交わりと繁栄をAIを通じて促進します。",
    status: "活動中",
    category: "toposAI",
    icon: Eye,
    tags: ["地域/場所", "AI", "regenerative"],
    gradient: "from-blue-50 to-cyan-50",
    iconColor: "text-blue-600",
    progress: 60
  },
  {
    title: "共生のためのヴァーチャリティー/メディアの探究",
    description: "現実とは何か、私は誰と同じ世界を構成しているのか。揺らぐ現実感にメディアを提示し、共生へのアクションを呼びかけます。",
    status: "実証実験中",
    category: "リアリティーメディア",
    icon: Network,
    tags: ["ヴァーチャリティー", "メディア", "共生の倫理"],
    gradient: "from-green-50 to-emerald-50",
    iconColor: "text-green-600",
    progress: 45
  },
  {
    title: "計算探究プロジェクト",
    description: "計算と物質、計算と生命、計算と宇宙。”計算”から見える世界の姿を探究し表現します。",
    status: "研究中",
    category: "計算学",
    icon: BookOpen,
    tags: ["計算", "物質", "生命"],
    gradient: "from-yellow-50 to-orange-50",
    iconColor: "text-yellow-600",
    progress: 0
  },
]

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "開発中":
        return "bg-blue-100 text-blue-700"
      case "研究中":
        return "bg-purple-100 text-purple-700"
      case "プロトタイプ":
        return "bg-green-100 text-green-700"
      case "実証実験中":
        return "bg-orange-100 text-orange-700"
      case "企画中":
        return "bg-yellow-100 text-yellow-700"
      case "計画中":
        return "bg-gray-100 text-gray-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <Badge className={getStatusColor(status)}>
      {status}
    </Badge>
  )
}

export default function Computation() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none" />
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
              
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                計算
              </span>
              で世界を捉え
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                計算
              </span>
              で繁栄を促す
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            >
              世界に根付く計算から、知性・コミュニケーション・身体へ介入し、
              <br className="hidden md:block" />
              人間・技術・自然が共に豊かに生きる世界を創造する。
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-8"
            >
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-medium text-slate-700">対立から調和へ</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium text-slate-700">論理から全体性へ</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-slate-700">生命と美の計算</span>
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
                計算技術と生態系の協調原理
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                孤立から共在へ、競争から調和へ、拡張から繁栄へ
                <br />
                生成変化する世界、その原理となる計算への技術と倫理
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "物質性への意識",
                  description: "情報は、あるいは情報メディアは、共生のための形を持っているだろうか",
                  icon: "🤝",
                  color: "from-blue-50 to-blue-100"
                },
                {
                  title: "境界を超える異種混交",
                  description: "有機物/無機物、生命と機械、異なるものが分断対立するのでなく混ざるデザイン",
                  icon: "🔍",
                  color: "from-purple-50 to-purple-100"
                },
                {
                  title: "美と情動のコンピュテーション",
                  description: "人権と尊厳を最優先とした技術開発",
                  icon: "⚖️",
                  color: "from-green-50 to-green-100"
                },
                {
                  title: "計算のpluralism",
                  description: "ノイマン型計算機に収まらない計算の探究",
                  icon: "🌱",
                  color: "from-yellow-50 to-yellow-100"
                },
              ].map((principle, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={`h-full text-center border-0 bg-gradient-to-br ${principle.color} hover:shadow-lg transition-all duration-300`}>
                    <CardHeader className="space-y-4">
                      <div className="text-4xl">{principle.icon}</div>
                      <CardTitle className="text-lg">{principle.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {principle.description}
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
                Computation for Convivialityプロジェクト
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                人・人工物・自然の共生のための革新的な計算技術の
                研究開発プロジェクトを推進しています。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                        <CardTitle className="text-xl leading-snug">
                          {project.title}
                        </CardTitle>
                        <Badge className="bg-white/60 text-slate-600">
                          {project.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                      
                      {/* Progress Bar }
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">進捗状況</span>
                          <span className="font-medium text-slate-800">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-white/50 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-slate-400 to-slate-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div> */}
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            className="bg-white/60 text-slate-600 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="w-full mt-4 group-hover:bg-white/60">
                        詳細を見る
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-r from-purple-50 via-white to-blue-50">
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
                技術基盤
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                最先端の技術を組み合わせながら、
                人間の価値観と倫理を最優先とした計算システムを構築しています。
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  icon: Cpu,
                  label: "量子コンピューティング",
                  description: "複雑な最適化問題の解決"
                },
                {
                  icon: Database,
                  label: "分散データベース",
                  description: "プライバシー保護データ管理"
                },
                {
                  icon: Bot,
                  label: "説明可能AI",
                  description: "透明性のある機械学習"
                },
                {
                  icon: Search,
                  label: "知識グラフ",
                  description: "構造化された知識表現"
                },
              ].map((tech, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="text-center p-6 border-0 bg-white/80 hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <tech.icon className="h-8 w-8 text-purple-600 mx-auto" />
                      <div className="font-medium text-slate-800 text-sm">
                        {tech.label}
                      </div>
                      <div className="text-xs text-slate-600">
                        {tech.description}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-100 via-white to-purple-100">
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
                知的協創への参加
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                人間とAIが共に学び、成長する未来の計算技術の開発に、
                あなたの専門性と創造性で参加しませんか？
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="text-base px-8 py-6">
                研究開発に参加する
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-6">
                技術提案をする
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}