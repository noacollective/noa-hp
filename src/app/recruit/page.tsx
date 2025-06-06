"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Heart, 
  Lightbulb, 
  Globe,
  Puzzle,
  Star,
  ArrowRight,
  Check,
  MessageCircle
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

const faqData = [
  {
    question: "どのような働き方ができますか？",
    answer: "フルタイム、パートタイム、プロジェクトベース、リモートワークなど、あなたのライフスタイルに合わせた柔軟な働き方を提供しています。"
  },
  {
    question: "未経験でも参加できますか？",
    answer: "もちろんです。情熱と学習意欲があれば、経験は問いません。メンタリング制度とトレーニングプログラムで成長をサポートします。"
  },
  {
    question: "報酬体系について教えてください",
    answer: "金銭的報酬に加え、学習機会、経験価値、社会貢献の実感など、多様な形での報酬を提供しています。"
  },
  {
    question: "チームでの協力はどのように行われますか？",
    answer: "オープンで対話的な環境で、異なる専門性を持つメンバーが協力し合います。定期的な交流イベントも開催しています。"
  }
]

export default function Recruit() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-24 lg:py-32">
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
              共創
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                パートナー
              </span>
              <br />
              募集
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            >
              未来の調和した社会を共に創造するメンバーを募集しています。
              <br className="hidden md:block" />
              あなたの情熱と専門性で、新しい可能性を切り拓きませんか？
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
                求める価値観
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                私たちは技術的スキル以上に、共通の価値観と志を大切にしています。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "共感と思いやり",
                  description: "他者の立場に立って考え、多様性を尊重する心",
                  color: "text-red-500",
                  bgColor: "from-red-50 to-pink-50"
                },
                {
                  icon: Lightbulb,
                  title: "創造的好奇心",
                  description: "新しいアイデアを探求し、学び続ける姿勢",
                  color: "text-yellow-500",
                  bgColor: "from-yellow-50 to-orange-50"
                },
                {
                  icon: Globe,
                  title: "社会への貢献意識",
                  description: "より良い社会の実現に向けた使命感",
                  color: "text-blue-500",
                  bgColor: "from-blue-50 to-cyan-50"
                },
              ].map((value, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={`h-full text-center border-0 bg-gradient-to-br ${value.bgColor} hover:shadow-lg transition-all duration-300`}>
                    <CardHeader className="space-y-4">
                      <value.icon className={`h-12 w-12 ${value.color} mx-auto`} />
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roles Section */}
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
                募集ポジション
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                多様な専門性と役割で、プロジェクトに貢献いただけます。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "プロダクトデザイナー",
                  department: "遊び事業",
                  type: "フルタイム",
                  location: "リモート可",
                  description: "人間中心の体験設計と創造的なインターフェース開発",
                  requirements: ["UX/UIデザイン経験", "人間工学への理解", "協創への情熱"]
                },
                {
                  title: "経済システム研究者",
                  department: "経済事業",
                  type: "研究職",
                  location: "東京/リモート",
                  description: "新しい経済モデルの理論構築と実証実験の設計",
                  requirements: ["経済学または関連分野の知識", "データ分析スキル", "社会課題への関心"]
                },
                {
                  title: "AIエンジニア",
                  department: "計算技術事業",
                  type: "フルタイム",
                  location: "東京",
                  description: "説明可能AIと人間-AI協創システムの開発",
                  requirements: ["機械学習の実装経験", "倫理的AI開発への理解", "チームワーク重視"]
                },
                {
                  title: "コミュニティマネージャー",
                  department: "全事業",
                  type: "パートタイム可",
                  location: "リモート可",
                  description: "参加者との関係構築と共創活動の促進",
                  requirements: ["コミュニケーション能力", "イベント企画経験", "共感力"]
                },
              ].map((role, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">{role.title}</CardTitle>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-blue-100 text-blue-700">{role.department}</Badge>
                            <Badge className="bg-green-100 text-green-700">{role.type}</Badge>
                            <Badge className="bg-purple-100 text-purple-700">{role.location}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base leading-relaxed">
                        {role.description}
                      </CardDescription>
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2">求める経験・スキル</h4>
                        <ul className="space-y-1">
                          {role.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-center gap-2 text-sm text-slate-600">
                              <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full group-hover:bg-blue-600">
                        詳細を見る
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-green-50">
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
                共創の価値
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                金銭的報酬を超えた、多様な価値を提供します。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Users,
                  title: "多様なコミュニティ",
                  description: "異分野の専門家との刺激的な交流"
                },
                {
                  icon: Star,
                  title: "成長機会",
                  description: "新しいスキルと視点の獲得"
                },
                {
                  icon: Puzzle,
                  title: "創造的挑戦",
                  description: "従来にない革新的なプロジェクト"
                },
                {
                  icon: Heart,
                  title: "社会貢献実感",
                  description: "より良い未来への直接的な貢献"
                },
              ].map((benefit, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="text-center p-6 border-0 bg-white/80 hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <benefit.icon className="h-8 w-8 text-blue-600 mx-auto" />
                      <div className="font-medium text-slate-800">
                        {benefit.title}
                      </div>
                      <div className="text-sm text-slate-600">
                        {benefit.description}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
                よくある質問
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqData.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-3">
                        <MessageCircle className="h-5 w-5 text-blue-500" />
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed text-slate-700">
                        {faq.answer}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-100 via-white to-green-100">
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
                一緒に未来を創造しませんか？
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                あなたの情熱と専門性で、より良い社会の実現に貢献してください。
                まずはお気軽にお話しましょう。
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="text-base px-8 py-6">
                応募する
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-6">
                説明会に参加する
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}