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
  Zap,
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
    title: "人間-AI協創プラットフォーム",
    description: "人工知能と人間が対等なパートナーとして協力し、創造的な問題解決を行うプラットフォーム。AIの計算能力と人間の創造性・直感を組み合わせた新しい知的作業環境を提供します。",
    status: "開発中",
    category: "AI協創",
    icon: Brain,
    tags: ["人間中心AI", "創造的協力", "知的拡張"],
    gradient: "from-purple-50 to-indigo-50",
    iconColor: "text-purple-600",
    progress: 75
  },
  {
    title: "透明性重視AI システム",
    description: "すべての判断プロセスが説明可能で、人間が理解・検証できるAIシステム。ブラックボックス化を避け、信頼性と透明性を重視した次世代AI技術の開発に取り組んでいます。",
    status: "研究中",
    category: "説明可能AI",
    icon: Eye,
    tags: ["透明性", "説明可能性", "信頼性"],
    gradient: "from-blue-50 to-cyan-50",
    iconColor: "text-blue-600",
    progress: 60
  },
  {
    title: "集合知活用システム",
    description: "世界中の知識と経験を集約し、複雑な社会課題の解決に活用するシステム。多様な視点と専門性を統合し、人類全体の知的資産を効果的に活用します。",
    status: "プロトタイプ",
    category: "集合知",
    icon: Network,
    tags: ["知識統合", "多様性", "社会課題"],
    gradient: "from-green-50 to-emerald-50",
    iconColor: "text-green-600",
    progress: 45
  },
  {
    title: "パーソナライズド学習AI",
    description: "個人の学習スタイル、興味、能力に合わせて最適化された学習体験を提供するAIシステム。生涯学習の支援と人材育成の革新を目指しています。",
    status: "実証実験中",
    category: "教育AI",
    icon: BookOpen,
    tags: ["パーソナライズ", "学習最適化", "能力開発"],
    gradient: "from-yellow-50 to-orange-50",
    iconColor: "text-yellow-600",
    progress: 80
  },
  {
    title: "プライバシー保護計算",
    description: "個人データを保護しながら集合的な分析と学習を可能にする計算技術。プライバシーと社会的価値の両立を実現する革新的なアプローチを開発しています。",
    status: "企画中",
    category: "プライバシー技術",
    icon: Shield,
    tags: ["プライバシー保護", "連合学習", "データ主権"],
    gradient: "from-red-50 to-pink-50",
    iconColor: "text-red-600",
    progress: 30
  },
  {
    title: "持続可能AI インフラ",
    description: "環境負荷を最小化しながら高性能な計算を実現するAIインフラストラクチャ。再生可能エネルギーと効率的なアルゴリズムによる持続可能な技術基盤を構築します。",
    status: "計画中",
    category: "持続可能技術",
    icon: Zap,
    tags: ["環境配慮", "効率化", "再生可能"],
    gradient: "from-green-50 to-lime-50",
    iconColor: "text-green-600",
    progress: 20
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
              知性を
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                拡張
              </span>
              する
              <br />
              計算技術
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            >
              人間とAIが協調し、複雑な社会課題に取り組む計算基盤。
              <br className="hidden md:block" />
              透明性と説明可能性を重視した、信頼できる知的システムを構築します。
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-8"
            >
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-medium text-slate-700">人間中心設計</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium text-slate-700">透明性重視</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-slate-700">倫理的配慮</span>
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
                人間とAIの協調原理
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                AIは人間を置き換えるのではなく、人間の能力を拡張し、
                共に学び成長するパートナーとして位置づけられます。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "協調の設計",
                  description: "AIと人間が対等なパートナーとして協力",
                  icon: "🤝",
                  color: "from-blue-50 to-blue-100"
                },
                {
                  title: "透明の実現",
                  description: "すべての判断プロセスが理解可能",
                  icon: "🔍",
                  color: "from-purple-50 to-purple-100"
                },
                {
                  title: "倫理の重視",
                  description: "人権と尊厳を最優先とした技術開発",
                  icon: "⚖️",
                  color: "from-green-50 to-green-100"
                },
                {
                  title: "持続の配慮",
                  description: "環境負荷を考慮した計算技術",
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
                計算技術プロジェクト
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                人間中心の価値観に基づいた革新的な計算技術の
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
                      
                      {/* Progress Bar */}
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
                      </div>
                      
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