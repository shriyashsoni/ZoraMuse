import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Sparkles, BarChart3, Bot, Coins, Zap, ArrowRight, Play, Check } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="ZoraMuse Logo" width={40} height={40} className="w-auto h-8" />
              <span className="text-xl font-semibold text-white">ZoraMuse</span>
            </Link>
            <div className="hidden md:flex gap-8 items-center">
              <Link href="/features" className="text-amber-500 hover:text-amber-400 transition">
                Features
              </Link>
              <Link href="/for-creators" className="text-gray-300 hover:text-white transition">
                For Creators
              </Link>
              <Link href="/for-collectors" className="text-gray-300 hover:text-white transition">
                For Collectors
              </Link>
              <Link href="/marketplace" className="text-gray-300 hover:text-white transition">
                Marketplace
              </Link>
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black">
                Join Waitlist
              </Button>
            </div>
            <Button className="md:hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black">
              Menu
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powered by <span className="text-amber-500">AI</span>, Built for{" "}
              <span className="text-amber-500">Web3</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ZoraMuse combines cutting-edge AI with Zora's Coins protocol to revolutionize how creators and collectors
              interact in the decentralized art economy.
            </p>
          </div>

          {/* Feature Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="#smart-minting"
              className="px-5 py-3 bg-gray-800 rounded-full text-gray-300 hover:bg-amber-500 hover:text-black transition"
            >
              Smart Minting
            </a>
            <a
              href="#tradegpt"
              className="px-5 py-3 bg-gray-800 rounded-full text-gray-300 hover:bg-amber-500 hover:text-black transition"
            >
              TradeGPT
            </a>
            <a
              href="#ai-curator"
              className="px-5 py-3 bg-gray-800 rounded-full text-gray-300 hover:bg-amber-500 hover:text-black transition"
            >
              AI Curator
            </a>
            <a
              href="#coins"
              className="px-5 py-3 bg-gray-800 rounded-full text-gray-300 hover:bg-amber-500 hover:text-black transition"
            >
              Creator & Collector Coins
            </a>
            <a
              href="#marketing"
              className="px-5 py-3 bg-gray-800 rounded-full text-gray-300 hover:bg-amber-500 hover:text-black transition"
            >
              Marketing Copilot
            </a>
          </div>
        </div>
      </section>

      {/* Smart Minting */}
      <section id="smart-minting" className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-amber-500" />
                <h2 className="text-2xl font-semibold text-amber-500">AI-Powered Smart Minting</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">From Concept to Mint in Seconds</h3>
              <p className="text-gray-300 mb-6">
                ZoraMuse's Smart Minting technology transforms the way creators launch on Zora. Upload your concept or
                idea, and our AI handles the rest - generating metadata, optimizing titles and tags, suggesting pricing,
                and even enhancing visuals.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Metadata Generation</h4>
                    <p className="text-gray-400">
                      AI analyzes your content and generates optimized titles, descriptions, and tags that increase
                      discoverability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Dynamic Pricing</h4>
                    <p className="text-gray-400">
                      Our AI suggests optimal pricing based on market trends, similar drops, and your creator history.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Visual Enhancement</h4>
                    <p className="text-gray-400">
                      Upload sketches or concepts and let our AI transform them into polished, mint-ready artwork.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Zero Technical Knowledge</h4>
                    <p className="text-gray-400">
                      Mint directly to Zora's Coins protocol with no coding or technical setup required.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black">
                Try Smart Minting <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="md:w-1/2">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500 text-black px-3 py-1 text-sm font-medium">
                  AI Demo
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-black" />
                    </div>
                    <h4 className="font-semibold">Smart Minting Process</h4>
                  </div>

                  <Tabs defaultValue="input" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="input">Input</TabsTrigger>
                      <TabsTrigger value="processing">Processing</TabsTrigger>
                      <TabsTrigger value="output">Output</TabsTrigger>
                    </TabsList>
                    <TabsContent value="input" className="space-y-4">
                      <div className="bg-gray-900 rounded-lg p-4">
                        <h5 className="text-sm text-gray-400 mb-2">Creator Input</h5>
                        <p className="text-white">
                          "A surreal landscape where digital and physical worlds merge, with floating islands and data
                          streams."
                        </p>
                      </div>
                      <div className="bg-gray-700 h-48 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="mb-2">
                            <Play className="h-10 w-10 text-amber-500 mx-auto" />
                          </div>
                          <p className="text-sm text-gray-300">Upload concept or sketch (optional)</p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="processing" className="space-y-4">
                      <div className="bg-gray-900 rounded-lg p-4">
                        <h5 className="text-sm text-gray-400 mb-2">AI Processing</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Analyzing concept</span>
                            <span className="text-amber-500">✓ Complete</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Generating metadata</span>
                            <span className="text-amber-500">✓ Complete</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Creating visuals</span>
                            <span className="text-amber-500">✓ Complete</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Optimizing pricing</span>
                            <span className="text-amber-500">✓ Complete</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-700 h-48 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="mb-2">
                            <div className="h-10 w-10 rounded-full border-2 border-amber-500 border-t-transparent animate-spin mx-auto"></div>
                          </div>
                          <p className="text-sm text-gray-300">Processing your creation...</p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="output" className="space-y-4">
                      <div className="bg-gray-900 rounded-lg p-4">
                        <h5 className="text-sm text-gray-400 mb-2">AI Generated Results</h5>
                        <div className="space-y-2">
                          <div>
                            <span className="text-gray-400">Title:</span>{" "}
                            <span className="text-white">Convergence: Digital Archipelago</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Tags:</span>{" "}
                            <span className="text-white">
                              #surrealism #digitalart #metaverse #datascape #floatingworlds
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-400">Suggested Price:</span>{" "}
                            <span className="text-white">0.15 ETH (based on market analysis)</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-900 to-amber-900 h-48 rounded-lg flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                          <Button className="bg-amber-500 hover:bg-amber-600 text-black">
                            Mint on Zora <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TradeGPT */}
      <section id="tradegpt" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-amber-500" />
                <h2 className="text-2xl font-semibold text-amber-500">TradeGPT</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Your AI Trading Assistant</h3>
              <p className="text-gray-300 mb-6">
                TradeGPT is your personal trading co-pilot for the Zora ecosystem. Get real-time analysis, price
                predictions, and market insights to make smarter collecting decisions and optimize your trading
                strategy.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Real-time Market Analysis</h4>
                    <p className="text-gray-400">
                      TradeGPT monitors on-chain activity and social signals to identify trending drops before they go
                      viral.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Price Predictions</h4>
                    <p className="text-gray-400">
                      Get AI-powered price forecasts based on historical data, creator momentum, and market sentiment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Personalized Alerts</h4>
                    <p className="text-gray-400">
                      Set custom alerts for price movements, new drops from favorite creators, or market opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Portfolio Optimization</h4>
                    <p className="text-gray-400">
                      Get recommendations to balance your collection and maximize potential returns.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black">
                Explore TradeGPT <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="md:w-1/2">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                      <BarChart3 className="h-4 w-4 text-black" />
                    </div>
                    <h4 className="font-semibold">TradeGPT Console</h4>
                  </div>
                  <div className="text-xs px-2 py-1 bg-amber-500 text-black rounded-full">LIVE</div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">You</div>
                    <p className="text-gray-300">Show me trending drops with high potential</p>
                  </div>

                  <div className="flex items-start gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-xs text-black mt-1">
                      AI
                    </div>
                    <div>
                      <p className="text-white mb-2">
                        I've analyzed the latest drops on Zora and found these high-potential collections:
                      </p>
                      <div className="space-y-3">
                        <div className="bg-gray-800 p-3 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Neon Dreams by @artist404</span>
                            <span className="text-amber-500">94% Score</span>
                          </div>
                          <p className="text-sm text-gray-400 mb-1">Launched 6h ago • 43% minted • 12 collectors</p>
                          <div className="flex justify-between text-sm">
                            <span>Current: 0.08 ETH</span>
                            <span className="text-green-400">Forecast: +125% in 48h</span>
                          </div>
                        </div>

                        <div className="bg-gray-800 p-3 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Quantum Artifacts by @metasmith</span>
                            <span className="text-amber-500">87% Score</span>
                          </div>
                          <p className="text-sm text-gray-400 mb-1">Launched 12h ago • 78% minted • 36 collectors</p>
                          <div className="flex justify-between text-sm">
                            <span>Current: 0.15 ETH</span>
                            <span className="text-green-400">Forecast: +65% in 72h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">You</div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Ask TradeGPT anything..."
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:border-amber-500 hover:text-amber-500"
                  >
                    Price Alerts
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:border-amber-500 hover:text-amber-500"
                  >
                    Portfolio Analysis
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:border-amber-500 hover:text-amber-500"
                  >
                    Market Overview
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:border-amber-500 hover:text-amber-500"
                  >
                    Creator Insights
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Curator */}
      <section id="ai-curator" className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="h-6 w-6 text-amber-500" />
                <h2 className="text-2xl font-semibold text-amber-500">AI Curator</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Discover Art That Speaks to You</h3>
              <p className="text-gray-300 mb-6">
                ZoraMuse's AI Curator automatically organizes drops into creative themes and collections, helping you
                discover art that resonates with your taste. Our neural network is trained on top-performing Zora
                projects to identify emerging trends and hidden gems.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Personalized Recommendations</h4>
                    <p className="text-gray-400">
                      AI learns your preferences and suggests drops that match your taste and collection history.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Thematic Collections</h4>
                    <p className="text-gray-400">
                      Discover curated galleries organized by style, theme, or artistic movement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Auto-Curation</h4>
                    <p className="text-gray-400">
                      Set preferences and let AI automatically curate and collect drops that match your criteria.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Trend Identification</h4>
                    <p className="text-gray-400">
                      Spot emerging artistic trends and movements before they go mainstream.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black">
                Try AI Curator <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="md:w-1/2">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Curated Collections</h4>
                    <p className="text-sm text-gray-400">Personalized for your taste profile</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="h-32 bg-gradient-to-br from-purple-900 to-amber-900"></div>
                    <div className="p-3">
                      <h5 className="font-medium mb-1">Afrofuturism Rising</h5>
                      <p className="text-xs text-gray-400 mb-2">12 artists • 28 drops • Updated daily</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs bg-amber-500/20 text-amber-500 px-2 py-1 rounded-full">98% Match</span>
                        <Button variant="ghost" size="sm" className="h-8 text-amber-500 hover:text-amber-400 p-0">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="h-32 bg-gradient-to-br from-blue-900 to-green-900"></div>
                    <div className="p-3">
                      <h5 className="font-medium mb-1">Digital Surrealism</h5>
                      <p className="text-xs text-gray-400 mb-2">8 artists • 19 drops • Updated daily</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs bg-amber-500/20 text-amber-500 px-2 py-1 rounded-full">92% Match</span>
                        <Button variant="ghost" size="sm" className="h-8 text-amber-500 hover:text-amber-400 p-0">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <h5 className="font-medium mb-3">Your Taste Profile</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Abstract</span>
                        <span>78%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Generative</span>
                        <span>65%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Surrealism</span>
                        <span>92%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Refine Your Taste Profile</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator & Collector Coins */}
      <section id="coins" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <Coins className="h-6 w-6 text-amber-500" />
                <h2 className="text-2xl font-semibold text-amber-500">Creator & Collector Coins</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Rewarding Participation & Creativity</h3>
              <p className="text-gray-300 mb-6">
                ZoraMuse leverages Zora's Coins Protocol to create a dynamic reward system for both creators and
                collectors. Earn coins based on your engagement, originality, and trading activity, unlocking exclusive
                benefits and opportunities.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Creator Coins</h4>
                    <p className="text-gray-400">
                      Earn coins when your drops gain traction, get collected, or receive high AI scores for
                      originality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Collector Coins</h4>
                    <p className="text-gray-400">
                      Accumulate coins by discovering early drops, building diverse collections, and participating in
                      the ecosystem.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Exclusive Benefits</h4>
                    <p className="text-gray-400">
                      Redeem coins for early access to drops, premium AI features, and special platform privileges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">DAO Governance</h4>
                    <p className="text-gray-400">
                      Use your coins to vote on platform features, curation decisions, and ecosystem development.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black">
                Learn About Coins <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="md:w-1/2">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                    <Coins className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Coin System Overview</h4>
                    <p className="text-sm text-gray-400">Powered by Zora's Coins Protocol</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-amber-900 to-amber-700 rounded-lg p-4">
                    <h5 className="font-medium mb-3 flex items-center gap-2">
                      <Sparkles className="h-4 w-4" /> Creator Coins
                    </h5>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Mint Quality Score</span>
                        <span>+5-20 coins</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Collection Growth</span>
                        <span>+2 per collector</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Originality Bonus</span>
                        <span>+10-50 coins</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Community Engagement</span>
                        <span>+1-5 per action</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg p-4">
                    <h5 className="font-medium mb-3 flex items-center gap-2">
                      <BarChart3 className="h-4 w-4" /> Collector Coins
                    </h5>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Early Collection</span>
                        <span>+3-15 coins</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Curation Quality</span>
                        <span>+5-25 coins</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Trading Activity</span>
                        <span>+1-10 per trade</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Loyalty Bonus</span>
                        <span>+5% per month</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <h5 className="font-medium mb-3">Coin Utility</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <Check className="h-4 w-4 text-amber-500" />
                      </div>
                      <div>
                        <p className="text-sm">Early Access to Premium Drops</p>
                        <p className="text-xs text-gray-400">100 coins</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <Check className="h-4 w-4 text-amber-500" />
                      </div>
                      <div>
                        <p className="text-sm">Advanced AI Features</p>
                        <p className="text-xs text-gray-400">50 coins/month</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <Check className="h-4 w-4 text-amber-500" />
                      </div>
                      <div>
                        <p className="text-sm">DAO Voting Rights</p>
                        <p className="text-xs text-gray-400">500+ coins</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black">View Your Coin Balance</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Copilot */}
      <section id="marketing" className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-amber-500" />
                <h2 className="text-2xl font-semibold text-amber-500">Marketing Copilot</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Amplify Your Creative Voice</h3>
              <p className="text-gray-300 mb-6">
                ZoraMuse's Marketing Copilot automatically generates promotional content for your drops, helping you
                reach wider audiences with minimal effort. From social media posts to promo videos and memes, our AI
                handles the marketing so you can focus on creating.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Social Media Content</h4>
                    <p className="text-gray-400">
                      Generate platform-optimized posts for Twitter, Farcaster, and Instagram with a single click.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Promo Videos & Trailers</h4>
                    <p className="text-gray-400">
                      Create eye-catching animated previews and drop announcements automatically.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Meme Generator</h4>
                    <p className="text-gray-400">Turn your art into viral memes that resonate with Web3 communities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Scheduling & Analytics</h4>
                    <p className="text-gray-400">
                      Plan your marketing campaign and track performance across platforms.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black">
                Try Marketing Copilot <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="md:w-1/2">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Marketing Copilot</h4>
                    <p className="text-sm text-gray-400">Generate content for your latest drop</p>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <h5 className="font-medium mb-3">Drop Details</h5>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="h-32 bg-gradient-to-br from-purple-900 to-amber-900 rounded-lg"></div>
                    <div>
                      <h6 className="font-medium">Ethereal Horizons #42</h6>
                      <p className="text-sm text-gray-400 mb-2">
                        Digital landscape exploring the boundaries of reality
                      </p>
                      <div className="text-xs text-gray-400">
                        <div>Price: 0.15 ETH</div>
                        <div>Collection: Ethereal Horizons</div>
                        <div>Artist: @digital_dreamer</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h6 className="text-sm font-medium mb-2">Twitter Post</h6>
                      <div className="bg-gray-800 p-3 rounded-lg text-sm">
                        <p>
                          🌌 JUST DROPPED: "Ethereal Horizons #42" 🌌
                          <br />
                          <br />
                          Where digital dreams meet reality. My latest exploration of surreal landscapes is now live on
                          @zora!
                          <br />
                          <br />
                          Only 0.15 ETH • Limited edition
                          <br />
                          <br />
                          #NFTart #DigitalArt #Zora
                        </p>
                      </div>
                    </div>

                    <div>
                      <h6 className="text-sm font-medium mb-2">Farcaster Thread</h6>
                      <div className="bg-gray-800 p-3 rounded-lg text-sm">
                        <p>
                          1/ I'm excited to share my latest creation: "Ethereal Horizons #42" - a journey through
                          digital dreamscapes where reality bends and imagination takes flight.
                          <br />
                          <br />
                          2/ This piece represents months of exploring new techniques and pushing the boundaries of my
                          style. Each element symbolizes the thin veil between our world and the digital realm.
                          <br />
                          <br />
                          3/ Minting now on @zora - link in bio!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:border-amber-500 hover:text-amber-500"
                  >
                    Generate Video
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:border-amber-500 hover:text-amber-500"
                  >
                    Create Meme
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:border-amber-500 hover:text-amber-500"
                  >
                    Instagram Post
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:border-amber-500 hover:text-amber-500"
                  >
                    Schedule All
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Web3 Experience?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join the ZoraMuse waitlist to get early access to our AI-powered platform and start creating, trading, and
            curating like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black text-lg py-6 px-8">
              Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-950 text-lg py-6 px-8">
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
