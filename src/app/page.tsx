"use client"

import Link from "next/link"
import Image from "next/image"
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
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 leading-tight"
            >
              <span className="block mb-2">
                遊び戯れ
              </span>
              <span className="block mb-2">
                <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-blue-600 bg-clip-text text-transparent">
                  人と人工物と自然
                </span>
                の
              </span>
              <span className="block mb-6">
                共生社会を創造する
              </span>
              <span className="block text-base md:text-lg lg:text-xl text-slate-500 italic tracking-wide font-normal">
                computation for conviviality of all livings
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
            >
              工楽、美楽、科楽、体楽の探究と遊び、美術、物語、ゲームのメディア表現
              <br className="hidden md:block" />
              計算技術との戯れから万物の歓びと価値の循環を描く
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
                世界に融けたテクノロジーが、人の創造をつなぎ、命の美しさを輝かせる世界。
                そこでは、心と体、仕事と遊び、人間と自然の境界が溶け、
                いそぎ争うのでなく、共に生き共に楽しむ社会が実現されています。
              </p>
            </motion.div>

            {/* Future Vision Image Section */}
            <motion.div
              variants={itemVariants}
              className="relative max-w-6xl mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Main Image */}
                <Image
                  src="/future-living.jpg"
                  alt="未来の地域の姿 - 山川と田園に囲まれ、人、ロボット、精霊たちが共に遊び、テクノロジーが美しい光でつながる世界"
                  width={1200}
                  height={500}
                  className="w-full h-96 md:h-[500px] object-cover"
                  priority
                />
                
                {/* Overlay with text content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                    <motion.div
                      variants={itemVariants}
                      className="space-y-4"
                    >
                      <h3 className="text-2xl md:text-3xl font-light text-white leading-relaxed drop-shadow-lg">
                        山川と田園に抱かれて
                      </h3>
                      <p className="text-lg text-white/90 leading-relaxed italic drop-shadow-md max-w-2xl mx-auto">
                        人も、愛らしきロボットも、見えない精霊たちも
                        <br className="hidden md:block" />
                        それぞれの命を輝かせ、共に遊び、共に学ぶ
                      </p>
                      <p className="text-base text-white/80 leading-relaxed drop-shadow-md max-w-2xl mx-auto">
                        テクノロジーは美しい空気のように
                        <br className="hidden md:block" />
                        すべての光を優しくつなぎ、調和を奏でています
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
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
                  <h3 className="font-medium text-slate-800">コンヴィヴィアリティ</h3>
                  <p className="text-sm text-slate-600">
                    人同士が、そしてロボット、自然が、皆で生き生きと生きる世界へ
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-medium text-slate-800">競争から楽しい調和へ</h3>
                  <p className="text-sm text-slate-600">
                    個々が争い孤立するのではなく、共に生き喜びを分かち合える世界へ
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-slate-800">遊びとしての創造</h3>
                  <p className="text-sm text-slate-600">
                    遊ぶように世界を知り、遊ぶように何かを創造する世界へ
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

            {/* Elegant Overlapping Circles Layout */}
            <div className="relative max-w-5xl mx-auto">
              {/* Subtle connecting lines */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 800 600">
                  <path
                    d="M400 120 L200 380 L600 380 Z"
                    stroke="url(#triangleGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                  <defs>
                    <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <motion.div variants={itemVariants} className="relative h-[580px] md:h-[680px]">
                
                {/* Play Circle - Top Center */}
                <motion.div 
                  variants={itemVariants}
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30"
                >
                  <Link href="/play" className="group block">
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 blur-xl group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300"></div>
                      
                      {/* Main circle */}
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white via-blue-50 to-blue-100 border-2 border-blue-200/50 shadow-xl hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 group-hover:scale-105 flex flex-col items-center justify-center text-center p-8">
                        <div className="mb-6 relative">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                            <Lightbulb className="h-10 w-10 text-white" />
                          </div>
                          <div className="absolute -inset-2 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4 group-hover:text-blue-800 transition-colors">未来の遊び事業</h3>
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 max-w-48">
                          リアルとバーチャルが融けた世界で、体、美、知、技と戯れ、遊びの力で世界に壮大な物語を描きます。
                        </p>
                        <div className="bg-blue-500/10 rounded-full px-4 py-2 group-hover:bg-blue-500/20 transition-colors">
                          <span className="text-blue-700 font-medium text-sm flex items-center">
                            詳しく見る
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* Economy Circle - Bottom Left */}
                <motion.div 
                  variants={itemVariants}
                  className="absolute bottom-0 left-8 md:left-16 z-20"
                >
                  <Link href="/economy" className="group block">
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 blur-xl group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all duration-300"></div>
                      
                      {/* Main circle */}
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white via-green-50 to-green-100 border-2 border-green-200/50 shadow-xl hover:shadow-2xl hover:shadow-green-200/50 transition-all duration-500 group-hover:scale-105 flex flex-col items-center justify-center text-center p-8">
                        <div className="mb-6 relative">
                          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                            <Users className="h-10 w-10 text-white" />
                          </div>
                          <div className="absolute -inset-2 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4 group-hover:text-green-800 transition-colors">生命の経済事業</h3>
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 max-w-48">
                          人間同士の競争、孤立、分断を促すシステムから、生命全体の共助、調和、喜びを促すシステムへ。
                        </p>
                        <div className="bg-green-500/10 rounded-full px-4 py-2 group-hover:bg-green-500/20 transition-colors">
                          <span className="text-green-700 font-medium text-sm flex items-center">
                            詳しく見る
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* Computation Circle - Bottom Right */}
                <motion.div 
                  variants={itemVariants}
                  className="absolute bottom-0 right-8 md:right-16 z-10"
                >
                  <Link href="/computation" className="group block">
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 blur-xl group-hover:from-purple-500/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
                      
                      {/* Main circle */}
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white via-purple-50 to-purple-100 border-2 border-purple-200/50 shadow-xl hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 group-hover:scale-105 flex flex-col items-center justify-center text-center p-8">
                        <div className="mb-6 relative">
                          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                            <CircuitBoard className="h-10 w-10 text-white" />
                          </div>
                          <div className="absolute -inset-2 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4 group-hover:text-purple-800 transition-colors">計算探究事業</h3>
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 max-w-48">
                          皆で生き、皆で楽しむための生命と技芸の姿を、計算で探究し、プロダクト、知、アートで表現します。
                        </p>
                        <div className="bg-purple-500/10 rounded-full px-4 py-2 group-hover:bg-purple-500/20 transition-colors">
                          <span className="text-purple-700 font-medium text-sm flex items-center">
                            詳しく見る
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>

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
                  date: "2025.06.10",
                  title: "webページを公開",
                  excerpt: "noaの活動内容を公開しました。",
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
