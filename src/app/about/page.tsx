"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Target, Zap, Globe, Heart, Lightbulb, TreePine, Users, CircuitBoard } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-celestial-light to-harmony-mist py-24 lg:py-32">
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
              私たちの
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ビジョン
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            >
              人間・テクノロジー・自然が調和する未来社会を実現するため、
              <br className="hidden md:block" />
              根本的な変革と新しい可能性の探求に取り組んでいます
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
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
                コンヴィヴィアリティの実現
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                イヴァン・イリイチが提唱した「コンヴィヴィアリティ」— 
                人間が技術を使いこなし、技術によって人間らしさが拡張される関係性。
                私たちは、この理想を現代に蘇らせ、
                真に人間中心の社会を創造することを目指しています。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={itemVariants}>
                <Card className="h-full text-center border-0 bg-gradient-to-br from-blue-50 to-white">
                  <CardHeader className="space-y-4">
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Eye className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">透明性と理解</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      技術の仕組みが理解可能で、
                      誰もがその恩恵を受けながら
                      主体的に関わることができる社会
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full text-center border-0 bg-gradient-to-br from-green-50 to-white">
                  <CardHeader className="space-y-4">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Target className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">自律と創造性</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      個人が自分の可能性を最大限に発揮し、
                      創造的な活動を通じて
                      社会に貢献できる環境の構築
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full text-center border-0 bg-gradient-to-br from-purple-50 to-white">
                  <CardHeader className="space-y-4">
                    <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <Zap className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">持続可能な発展</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      自然環境と調和し、
                      将来世代にとってより良い世界を
                      残すための循環型社会の実現
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Analysis Section */}
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
                現代社会の課題構造
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                技術の急速な発展は多くの恩恵をもたらした一方で、
                人間の尊厳や自然環境、社会の結束を脅かす要因ともなっています。
                私たちは、この構造的な問題に向き合い、新しい道筋を示します。
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  title: "テクノロジーの非人間化",
                  description: "技術が人間を支配し、個人の創造性や判断力を奪う構造が拡大している",
                  color: "red",
                },
                {
                  title: "経済格差の拡大",
                  description: "資本と技術の集中により、社会の分裂と不平等が深刻化している",
                  color: "orange",
                },
                {
                  title: "環境破壊の加速",
                  description: "短期的な経済効率を優先し、地球環境の持続可能性が脅かされている",
                  color: "yellow",
                },
                {
                  title: "コミュニティの解体",
                  description: "デジタル化と都市化により、人と人のつながりや地域共同体が失われている",
                  color: "blue",
                },
              ].map((issue, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-l-4 border-l-slate-300 hover:border-l-slate-400 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full bg-${issue.color}-400`} />
                        {issue.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {issue.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Domains Section */}
      <section className="py-20 bg-gradient-to-b from-white to-celestial-blue/10">
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
                3つの変革領域
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                社会の根本的な変革を実現するため、
                3つの重要な領域で統合的なアプローチを取っています。
                それぞれが相互に連携し、持続可能な未来社会の基盤を形成します。
              </p>
            </motion.div>

            <div className="space-y-12">
              {[
                {
                  icon: Lightbulb,
                  title: "遊び事業",
                  subtitle: "創造性の解放",
                  description: [
                    "人間の本質的な創造性と好奇心を呼び覚ます体験の設計",
                    "ゲーミフィケーションを超えた、真の遊びの力の活用",
                    "学習・労働・娯楽の境界を溶かす新しい活動形態の創造",
                    "多様性を尊重し、個人の才能を開花させるプラットフォーム構築",
                  ],
                  color: "blue",
                },
                {
                  icon: Users,
                  title: "経済事業",
                  subtitle: "共創価値の循環",
                  description: [
                    "従来の市場経済を補完する協力・共有型経済システムの開発",
                    "地域資源と人的資本を活かしたコミュニティ経済の構築",
                    "労働の価値を再定義し、すべての人の貢献を評価する仕組み",
                    "環境負荷を最小化しながら豊かさを実現する循環型モデル",
                  ],
                  color: "green",
                },
                {
                  icon: CircuitBoard,
                  title: "計算技術事業",
                  subtitle: "知性の協調拡張",
                  description: [
                    "人間とAIが協力し合う新しい知的作業環境の構築",
                    "複雑な社会課題を解決するための高度な分析・予測システム",
                    "個人の学習と成長を支援するパーソナライズド教育技術",
                    "透明性と説明可能性を重視したAI技術の社会実装",
                  ],
                  color: "purple",
                },
              ].map((domain, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={`border-0 bg-gradient-to-r from-${domain.color}-50 via-white to-${domain.color}-50/30`}>
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="text-center lg:text-left space-y-4">
                          <div className={`inline-flex w-20 h-20 bg-${domain.color}-100 rounded-full items-center justify-center`}>
                            <domain.icon className={`h-10 w-10 text-${domain.color}-600`} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-slate-900">
                              {domain.title}
                            </h3>
                            <p className={`text-${domain.color}-600 font-medium`}>
                              {domain.subtitle}
                            </p>
                          </div>
                        </div>
                        <div className="lg:col-span-2 space-y-3">
                          {domain.description.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-3">
                              <div className={`w-2 h-2 rounded-full bg-${domain.color}-400 mt-2 flex-shrink-0`} />
                              <p className="text-slate-600 leading-relaxed">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-celestial-blue via-white to-celestial-gold/20">
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
                変革への参加
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                この壮大なビジョンの実現には、多様な専門性と情熱を持つ人々の参加が不可欠です。
                あなたの知識・経験・アイデアを活かし、共に新しい世界を創造しませんか？
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-6 border-0 bg-white/80">
                <Heart className="h-8 w-8 text-red-500 mx-auto mb-3" />
                <h3 className="font-medium text-slate-800 mb-2">情熱と信念</h3>
                <p className="text-sm text-slate-600">
                  より良い未来への強い意志
                </p>
              </Card>
              <Card className="text-center p-6 border-0 bg-white/80">
                <Globe className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-medium text-slate-800 mb-2">専門性と経験</h3>
                <p className="text-sm text-slate-600">
                  多様な分野の知識と技能
                </p>
              </Card>
              <Card className="text-center p-6 border-0 bg-white/80">
                <TreePine className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-medium text-slate-800 mb-2">持続的な関与</h3>
                <p className="text-sm text-slate-600">
                  長期的視野での継続的な取り組み
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}