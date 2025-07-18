// app/page.tsx
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
      </main>
    </div>
  )
}