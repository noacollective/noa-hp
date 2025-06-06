"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Coins, 
  Recycle, 
  Users, 
  Handshake, 
  TreePine, 
  Network,
  TrendingUp,
  Heart,
  Globe,
  Leaf
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
    title: "相互支援経済プラットフォーム",
    description: "地域コミュニティ内でスキル、時間、物品を交換する新しい経済システム。お金だけでない価値の循環により、誰もが貢献し、恩恵を受けられる持続可能な経済を実現します。",
    status: "運用中",
    category: "地域経済",
    icon: Handshake,
    tags: ["スキル交換", "時間銀行", "コミュニティ"],
    gradient: "from-green-50 to-emerald-50",
    iconColor: "text-green-600",
    metrics: { users: "2,400+", exchanges: "8,500+", communities: "15" }
  },
  {
    title: "循環型価値創造システム",
    description: "廃棄物を資源として再活用し、環境負荷を削減しながら新しい価値を創造するシステム。地域の循環経済を促進し、持続可能な生産・消費モデルを構築します。",
    status: "実証実験中",
    category: "循環経済",
    icon: Recycle,
    tags: ["アップサイクル", "ゼロウェイスト", "リソース最適化"],
    gradient: "from-blue-50 to-cyan-50",
    iconColor: "text-blue-600",
    metrics: { reduction: "65%", jobs: "120+", partners: "45" }
  },
  {
    title: "協同組合型デジタル経済",
    description: "参加者全員が所有者となるデジタル協同組合プラットフォーム。利益を公平に分配し、意思決定に全員が参加できる民主的な経済システムを提供します。",
    status: "開発中",
    category: "協同経済",
    icon: Users,
    tags: ["民主的運営", "利益分配", "集合所有"],
    gradient: "from-purple-50 to-indigo-50",
    iconColor: "text-purple-600",
    metrics: { members: "850+", revenue: "分散", decisions: "投票制" }
  },
  {
    title: "感謝経済ネットワーク",
    description: "感謝の気持ちを可視化し、善意の行動を社会全体で評価・循環させる経済システム。金銭的価値だけでない、人間関係と幸福度を重視した新しい価値観を醸成します。",
    status: "パイロット",
    category: "感謝経済",
    icon: Heart,
    tags: ["感謝可視化", "善意循環", "幸福度"],
    gradient: "from-pink-50 to-rose-50",
    iconColor: "text-pink-600",
    metrics: { gratitude: "25,000+", happiness: "+32%", connections: "強化" }
  },
  {
    title: "知識共有経済プラットフォーム",
    description: "知識とスキルを共有し、集合知を活用した問題解決を促進するプラットフォーム。教育、研究、イノベーションの新しい形を創造し、知的資本の民主化を図ります。",
    status: "企画中",
    category: "知識経済",
    icon: Network,
    tags: ["集合知", "知識共有", "教育革新"],
    gradient: "from-yellow-50 to-amber-50",
    iconColor: "text-yellow-600",
    metrics: { knowledge: "共有", access: "平等", innovation: "加速" }
  },
  {
    title: "再生可能エネルギー経済",
    description: "地域の再生可能エネルギーを住民が共同所有し、エネルギーの地産地消と利益の地域還元を実現するシステム。エネルギー民主主義の実践モデルを構築します。",
    status: "計画中",
    category: "エネルギー経済",
    icon: Leaf,
    tags: ["再生可能", "共同所有", "地産地消"],
    gradient: "from-green-50 to-lime-50",
    iconColor: "text-green-600",
    metrics: { renewable: "100%", ownership: "共同", benefits: "地域還元" }
  },
]

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "運用中":
        return "bg-green-100 text-green-700"
      case "実証実験中":
        return "bg-blue-100 text-blue-700"
      case "開発中":
        return "bg-orange-100 text-orange-700"
      case "パイロット":
        return "bg-purple-100 text-purple-700"
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

export default function Economy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(34,197,94,0.1),transparent_50%)] pointer-events-none" />
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
              共創する
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                経済
              </span>
              <br />
              の実現
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            >
              競争ではなく協力を基盤とした持続可能な経済システム。
              <br className="hidden md:block" />
              すべての人が価値を創造し、恩恵を受けられる新しい経済の形を築きます。
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-8"
            >
              <div className="flex items-center gap-2">
                <Coins className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-slate-700">価値の再定義</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium text-slate-700">共同所有</span>
              </div>
              <div className="flex items-center gap-2">
                <TreePine className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-slate-700">持続可能性</span>
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
                新しい経済パラダイム
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                従来の市場経済の限界を超え、人間と自然の幸福を最優先とする
                新しい経済システムの構築を目指しています。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "協力の原理",
                  description: "競争ではなく協力を基本とした価値創造",
                  icon: "🤝",
                  color: "from-blue-50 to-blue-100"
                },
                {
                  title: "循環の設計",
                  description: "資源と価値の持続可能な循環システム",
                  icon: "♻️",
                  color: "from-green-50 to-green-100"
                },
                {
                  title: "包括の実現",
                  description: "すべての人が参加し恩恵を受ける経済",
                  icon: "🌍",
                  color: "from-purple-50 to-purple-100"
                },
                {
                  title: "透明の維持",
                  description: "公正で透明性の高い意思決定プロセス",
                  icon: "🔍",
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
                経済革新プロジェクト
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                持続可能で包括的な経済システムの実現に向けた
                革新的なプロジェクトを展開しています。
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
                      
                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 p-4 bg-white/50 rounded-lg">
                        {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                          <div key={metricIndex} className="text-center">
                            <div className="font-semibold text-slate-800 text-sm">
                              {value}
                            </div>
                            <div className="text-xs text-slate-600 capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
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
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 via-white to-blue-50">
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
                社会への影響
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                新しい経済システムは、個人の生活から地域社会、
                そして地球環境まで、広範囲にわたる好影響を生み出しています。
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: TrendingUp,
                  number: "68%",
                  label: "所得格差の縮小",
                  description: "参加コミュニティでの改善",
                  color: "text-green-600"
                },
                {
                  icon: Globe,
                  number: "1,500+",
                  label: "雇用創出",
                  description: "新しい形の働く機会",
                  color: "text-blue-600"
                },
                {
                  icon: Heart,
                  number: "92%",
                  label: "生活満足度",
                  description: "参加者の向上率",
                  color: "text-pink-600"
                },
                {
                  icon: Leaf,
                  number: "45%",
                  label: "環境負荷削減",
                  description: "循環経済効果",
                  color: "text-green-600"
                },
              ].map((impact, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="text-center p-6 border-0 bg-white/80 hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <impact.icon className={`h-8 w-8 ${impact.color} mx-auto`} />
                      <div className={`text-3xl font-light ${impact.color}`}>
                        {impact.number}
                      </div>
                      <div className="font-medium text-slate-800">
                        {impact.label}
                      </div>
                      <div className="text-sm text-slate-600">
                        {impact.description}
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
      <section className="py-20 bg-gradient-to-r from-emerald-100 via-white to-blue-100">
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
                新しい経済への参加
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                持続可能で公正な経済システムの構築に、
                あなたのアイデアと情熱で参加しませんか？
                共に、すべての人が豊かになれる社会を創造しましょう。
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="text-base px-8 py-6">
                経済システムに参加する
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-6">
                プロジェクトを提案する
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}