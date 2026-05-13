import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptSync — Version Control for AI Prompt Libraries',
  description: 'Sync AI prompt templates with Git repos, track performance metrics, and manage rollbacks. Built for AI product teams and prompt engineers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="48c13b8a-e590-46da-8626-d2f41bd2d20f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
