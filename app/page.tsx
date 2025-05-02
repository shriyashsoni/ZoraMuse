import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Sparkles, Palette, BarChart3, Bot, Zap } from "lucide-react"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8 md:py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="ZoraMuse Logo" width={50} height={50} className="w-auto h-10 md:h-12" />
            <span className="text-xl md:text-2xl font-semibold text-white">ZoraMuse</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-gray-300 hover:text-white transition">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition">
              How It Works
            </a>
            <a href="#roadmap" className="text-gray-300 hover:text-white transition">
              Roadmap
            </a>
            <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black">
              Join Waitlist
            </Button>
          </div>
          <Button className="md:hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black">
            Menu
          </Button>
        </nav>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your AI Muse for <span className="text-amber-500">Web3 Creation</span> and{" "}
              <span className="text-amber-500">Curation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              ZoraMuse enhances the creator and trader experience on Zora's Coins Protocol — from intelligent minting to
              smart trading insights and personalized AI curation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black text-lg py-6 px-8">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-950 text-lg py-6 px-8"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <Image src="/logo.png" alt="ZoraMuse" width={400} height={400} className="relative z-10 w-full h-auto" />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Powered by AI, Built for Creators</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ZoraMuse combines cutting-edge AI with Zora's Coins protocol to revolutionize how creators and collectors
              interact in Web3.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="h-8 w-8 text-amber-500" />}
              title="AI-Powered Smart Minting"
              description="Upload a concept and let AI generate metadata, artwork suggestions, and optimized pricing based on market dynamics."
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-amber-500" />}
              title="Dynamic Collector Scoring"
              description="Real-time scores for traders based on loyalty, community engagement, and market performance."
            />
            <FeatureCard
              icon={<Bot className="h-8 w-8 text-amber-500" />}
              title="TradeGPT Assistant"
              description="Your personal trading assistant that analyzes artist momentum, predicts trends, and suggests optimal entry points."
            />
            <FeatureCard
              icon={<Palette className="h-8 w-8 text-amber-500" />}
              title="Auto-Curator Bots"
              description="AI curators generate theme-based galleries that evolve with your taste and collector history."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-amber-500" />}
              title="Community Growth Tools"
              description="Auto-generate marketing copy, memes, videos, and social media content to grow your collector base."
            />
            <FeatureCard
              icon={<ArrowRight className="h-8 w-8 text-amber-500" />}
              title="Zora Coins Integration"
              description="Seamlessly integrated with Zora's Coins protocol for minting, trading, and community building."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How ZoraMuse Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A seamless experience for creators and collectors in the Web3 ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            <div className="bg-gray-800 rounded-xl p-8 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold text-xl">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-4">For Creators</h3>
              <p className="text-gray-300 mb-4">Upload your concept or idea to ZoraMuse's AI engine.</p>
              <p className="text-gray-300 mb-4">Our AI generates artwork, metadata, and optimal pricing strategies.</p>
              <p className="text-gray-300">Mint your creation on Zora's Coins protocol with one click.</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold text-xl">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-4">For Collectors</h3>
              <p className="text-gray-300 mb-4">Discover AI-curated collections based on your preferences.</p>
              <p className="text-gray-300 mb-4">Get personalized trading insights from TradeGPT.</p>
              <p className="text-gray-300">Earn collector scores that unlock exclusive benefits and early access.</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold text-xl">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-4">For Communities</h3>
              <p className="text-gray-300 mb-4">AI-powered tools to grow and engage your community.</p>
              <p className="text-gray-300 mb-4">Automated marketing and content generation.</p>
              <p className="text-gray-300">Participate in the ZoraMuse DAO to shape the platform's future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Roadmap</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our journey to revolutionize Web3 creation and curation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-500/30"></div>

            <div className="grid grid-cols-1 gap-16">
              <RoadmapItem
                month="Month 1"
                title="UI/UX Design & Smart Mint AI Integration"
                description="Design the platform interface and integrate the core AI minting functionality."
              />

              <RoadmapItem
                month="Month 2"
                title="TradeGPT MVP & Collector Scoring System"
                description="Launch the first version of our trading assistant and implement the collector scoring algorithm."
              />

              <RoadmapItem
                month="Month 3"
                title="Creator Copilot & Marketing AI Tools"
                description="Release AI-powered marketing tools to help creators promote their work effectively."
              />

              <RoadmapItem
                month="Month 4"
                title="AI Curation Engine & Theme Libraries"
                description="Deploy our AI curation system with customizable theme libraries for collectors."
              />

              <RoadmapItem
                month="Month 5"
                title="Zora Protocol Integration & Mint Testing"
                description="Complete integration with Zora's Coins protocol and begin testing the minting process."
              />

              <RoadmapItem
                month="Month 6"
                title="Beta Launch & Feedback Collection"
                description="Launch the beta version to early adopters and begin collecting user feedback."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the ZoraMuse Revolution</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Be among the first to experience the future of AI-powered Web3 creation and curation.
          </p>
          <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black text-lg py-6 px-12">
            Join Waitlist
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-gray-800 border-gray-700 p-6 hover:border-amber-500 transition duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </Card>
  )
}

function RoadmapItem({ month, title, description }) {
  return (
    <div className="relative pl-8 md:pl-0">
      <div className="md:flex items-center">
        <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
          <h3 className="text-amber-500 font-bold text-xl mb-2">{month}</h3>
          <h4 className="text-2xl font-bold mb-2">{title}</h4>
          <p className="text-gray-300">{description}</p>
        </div>

        <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 mt-1 md:mt-0">
          <div className="w-6 h-6 rounded-full bg-amber-500 border-4 border-black"></div>
        </div>

        <div className="md:w-1/2 md:pl-12 block md:hidden">
          <h3 className="text-amber-500 font-bold text-xl mb-2">{month}</h3>
          <h4 className="text-2xl font-bold mb-2">{title}</h4>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  )
}
