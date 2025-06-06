"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-t from-celestial-light to-white border-t border-border/30"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-800">noa</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              人間・テクノロジー・自然の共生を目指し、
              <br />
              未来の調和した社会を創造します。
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-slate-800">事業領域</h4>
            <div className="space-y-2">
              <Link
                href="/play"
                className="block text-sm text-muted-foreground hover:text-slate-700 transition-colors"
              >
                遊び事業
              </Link>
              <Link
                href="/economy"
                className="block text-sm text-muted-foreground hover:text-slate-700 transition-colors"
              >
                経済事業
              </Link>
              <Link
                href="/computation"
                className="block text-sm text-muted-foreground hover:text-slate-700 transition-colors"
              >
                計算技術事業
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-slate-800">つながる</h4>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-sm text-muted-foreground hover:text-slate-700 transition-colors"
              >
                私たちについて
              </Link>
              <Link
                href="/recruit"
                className="block text-sm text-muted-foreground hover:text-slate-700 transition-colors"
              >
                共創パートナー募集
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-slate-700 transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 noa. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}