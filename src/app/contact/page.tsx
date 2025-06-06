"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, 
  MessageCircle, 
  Users, 
  Lightbulb,
  Heart,
  Send,
  MapPin,
  Clock,
  Phone
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

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 lg:py-32">
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
              お
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                つながり
              </span>
              <br />
              ください
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            >
              ご質問、ご相談、共創のアイデアなど、
              <br className="hidden md:block" />
              どんなことでもお気軽にお声かけください。
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
                つながり方
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                さまざまな方法でコミュニケーションを取ることができます。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: MessageCircle,
                  title: "プロジェクト相談",
                  description: "新しいアイデアやプロジェクトについて",
                  color: "text-blue-500",
                  bgColor: "from-blue-50 to-cyan-50"
                },
                {
                  icon: Users,
                  title: "共創パートナーシップ",
                  description: "組織や団体との協力について",
                  color: "text-green-500",
                  bgColor: "from-green-50 to-emerald-50"
                },
                {
                  icon: Lightbulb,
                  title: "技術・研究協力",
                  description: "技術的な協力や研究連携について",
                  color: "text-purple-500",
                  bgColor: "from-purple-50 to-indigo-50"
                },
                {
                  icon: Heart,
                  title: "一般的なお問い合わせ",
                  description: "その他のご質問やご相談",
                  color: "text-pink-500",
                  bgColor: "from-pink-50 to-rose-50"
                },
              ].map((method, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={`h-full text-center border-0 bg-gradient-to-br ${method.bgColor} hover:shadow-lg transition-all duration-300`}>
                    <CardHeader className="space-y-4">
                      <method.icon className={`h-10 w-10 ${method.color} mx-auto`} />
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {method.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900">
                メッセージを送る
              </h2>
              <p className="text-lg text-slate-600">
                以下のフォームからお気軽にお問い合わせください
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <Card className="border-0 bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">お問い合わせフォーム</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                          お名前 *
                        </label>
                        <Input placeholder="山田 太郎" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                          メールアドレス *
                        </label>
                        <Input type="email" placeholder="example@email.com" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        組織・所属（任意）
                      </label>
                      <Input placeholder="株式会社〇〇" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        お問い合わせの種類
                      </label>
                      <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm">
                        <option>プロジェクト相談</option>
                        <option>共創パートナーシップ</option>
                        <option>技術・研究協力</option>
                        <option>一般的なお問い合わせ</option>
                        <option>その他</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        メッセージ *
                      </label>
                      <Textarea 
                        placeholder="お問い合わせ内容を具体的にご記入ください..." 
                        rows={6}
                      />
                    </div>

                    <Button className="w-full" size="lg">
                      <Send className="mr-2 h-4 w-4" />
                      メッセージを送信
                    </Button>

                    <p className="text-xs text-slate-500">
                      * 必須項目です。通常2-3営業日以内にご返信いたします。
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div variants={itemVariants} className="space-y-8">
                <Card className="border-0 bg-gradient-to-br from-blue-50 to-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Mail className="h-5 w-5 text-blue-500" />
                      直接連絡
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-600">contact@noah-p.org</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-600">03-XXXX-XXXX</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-600">平日 10:00-18:00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-green-50 to-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-green-500" />
                      所在地
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-slate-600">
                        〒100-0001<br />
                        東京都千代田区千代田1-1<br />
                        ○○ビル 5F
                      </p>
                      <p className="text-xs text-slate-500">
                        ※ 訪問前にはお電話またはメールでご連絡ください
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-purple-50 to-white">
                  <CardHeader>
                    <CardTitle className="text-xl">ソーシャルメディア</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <a href="#" className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        Twitter: @noa_official
                      </a>
                      <a href="#" className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors">
                        <div className="w-4 h-4 bg-blue-700 rounded"></div>
                        LinkedIn: noa
                      </a>
                      <a href="#" className="flex items-center gap-2 text-sm text-slate-600 hover:text-black transition-colors">
                        <div className="w-4 h-4 bg-black rounded"></div>
                        GitHub: noa
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-100 via-white to-purple-100">
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
                対話から始める未来
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                小さな会話から大きな変革が始まります。
                あなたのアイデアや想いを聞かせてください。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}