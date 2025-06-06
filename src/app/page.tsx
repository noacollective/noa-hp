"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Lightbulb, TreePine, Users, Sparkles, CircuitBoard } from "lucide-react"

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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-celestial-light to-celestial-blue/20 py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
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
              未来への
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-blue-600 bg-clip-text text-transparent">
                調和
              </span>
              を
              <br />
              共に創造する
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
            >
              人間・テクノロジー・自然が共生する社会を目指し、
              <br className="hidden md:block" />
              遊び・経済・計算技術の領域で新しい可能性を探求します
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/about">
                <Button size="lg" className="text-base px-8 py-6 group">
                  私たちについて
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-base px-8 py-6">
                  共創に参加する
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Future Living Section */}
      <section className="py-20 bg-gradient-to-b from-celestial-blue/10 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900">
                想像してみてください
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                テクノロジーが人間の創造性を拡張し、自然との調和を深める世界。
                そこでは、仕事と遊びの境界が溶け、
                誰もが自分らしく生きられる社会が実現されています。
              </p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="relative p-8 rounded-2xl bg-gradient-to-r from-harmony-mist via-white to-celestial-blue/30 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-3">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <TreePine className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-medium text-slate-800">自然との共生</h3>
                  <p className="text-sm text-slate-600">
                    テクノロジーが自然を守り、豊かな生態系の中で暮らす
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-medium text-slate-800">人間中心の設計</h3>
                  <p className="text-sm text-slate-600">
                    すべての人が尊重され、個性を活かせる社会の実現
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-slate-800">創造的な暮らし</h3>
                  <p className="text-sm text-slate-600">
                    遊びと学びが融合した、喜びに満ちた日常
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Three Business Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900">
                3つの創造領域
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                未来社会の基盤となる3つの軸で、革新的なプロジェクトを推進しています
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={itemVariants}>
                <Link href="/play" className="group">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-1 border-0 bg-gradient-to-br from-blue-50 to-white">
                    <CardHeader className="text-center space-y-4">
                      <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Lightbulb className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">遊び事業</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <CardDescription className="text-base leading-relaxed">
                        創造性と喜びを中心とした新しい体験の設計。
                        遊びの力で社会の課題を解決し、
                        人々の可能性を拡張します。
                      </CardDescription>
                      <Button variant="ghost" className="group-hover:bg-blue-100">
                        詳しく見る
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link href="/economy" className="group">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-green-100 hover:-translate-y-1 border-0 bg-gradient-to-br from-green-50 to-white">
                    <CardHeader className="text-center space-y-4">
                      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Users className="h-8 w-8 text-green-600" />
                      </div>
                      <CardTitle className="text-xl">経済事業</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <CardDescription className="text-base leading-relaxed">
                        持続可能で包括的な経済システムの構築。
                        共創と相互支援を基盤とした、
                        新しい価値交換の仕組みを創造します。
                      </CardDescription>
                      <Button variant="ghost" className="group-hover:bg-green-100">
                        詳しく見る
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link href="/computation" className="group">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-100 hover:-translate-y-1 border-0 bg-gradient-to-br from-purple-50 to-white">
                    <CardHeader className="text-center space-y-4">
                      <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CircuitBoard className="h-8 w-8 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl">計算技術事業</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <CardDescription className="text-base leading-relaxed">
                        人間の知性を拡張する計算技術の開発。
                        AIと人間が協調し、
                        複雑な社会課題に取り組む基盤を構築します。
                      </CardDescription>
                      <Button variant="ghost" className="group-hover:bg-purple-100">
                        詳しく見る
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gradient-to-b from-harmony-mist to-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900">
                最新のお知らせ
              </h2>
              <p className="text-lg text-slate-600">
                私たちの活動や取り組みをお伝えします
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  date: "2024.12.15",
                  title: "新しい共創プラットフォームがスタート",
                  excerpt: "技術者と市民が協力して社会課題に取り組む新しい仕組みを開始しました。",
                },
                {
                  date: "2024.11.28",
                  title: "持続可能な経済モデルの実証実験を開始",
                  excerpt: "地域コミュニティと連携した新しい価値交換システムのテストを開始。",
                },
                {
                  date: "2024.11.10",
                  title: "AIと人間の協創ワークショップを開催",
                  excerpt: "創造的な問題解決における人工知能と人間の協力について探求しました。",
                },
              ].map((news, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="text-sm text-slate-500">{news.date}</div>
                      <CardTitle className="text-lg leading-snug">
                        {news.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">
                        {news.excerpt}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
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
                一緒に未来を創りませんか？
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                あなたの専門性、経験、そして情熱を活かして、
                より良い社会の実現に向けて共に歩みましょう。
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/recruit">
                <Button size="lg" className="text-base px-8 py-6">
                  共創パートナーになる
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-base px-8 py-6">
                  お問い合わせ
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
