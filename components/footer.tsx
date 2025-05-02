import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Twitter, Instagram, FileText, Users, BookOpen, MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="ZoraMuse Logo" width={40} height={40} className="w-auto h-8" />
              <span className="text-xl font-semibold text-white">ZoraMuse</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your AI Muse for Web3 Creation and Curation. Empowering creators and traders on Zora's Coins Protocol with
              intelligent minting, trading insights, and personalized AI curation.
            </p>
            <div className="flex space-x-4 mt-4">
              <SocialIcon href="https://twitter.com/ZoraMuseAI" icon={<Twitter size={18} />} label="Twitter" />
              <SocialIcon
                href="https://warpcast.com/ZoraMuse"
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-400"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                label="Farcaster"
              />
              <SocialIcon href="https://discord.gg/zoramuse" icon={<MessageSquare size={18} />} label="Discord" />
              <SocialIcon href="https://instagram.com/ZoraMuse.ai" icon={<Instagram size={18} />} label="Instagram" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/features" label="Features" />
              <FooterLink href="/for-creators" label="For Creators" />
              <FooterLink href="/for-collectors" label="For Collectors" />
              <FooterLink href="/marketplace" label="Marketplace" />
              <FooterLink href="/labs" label="AI Labs" />
              <FooterLink href="/learn" label="Learn" />
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="/about-zoramuse" label="About ZoraMuse" />
              <FooterLink href="/careers" label="Careers" />
              <FooterLink href="/press-kit" label="Press Kit" />
              <FooterLink href="/dao" label="DAO / Governance" />
              <FooterLink href="/contact" label="Contact" />
              <FooterLink href="/blog" label="Blog" />
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="/privacy-policy" label="Privacy Policy" />
              <FooterLink href="/terms-of-use" label="Terms of Use" />
              <FooterLink href="/cookies" label="Cookie Policy" />
              <FooterLink href="/disclaimer" label="Disclaimer" />
            </ul>
            <div className="mt-6">
              <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <FooterLink href="/docs" label="Developer Docs" />
                <FooterLink href="/help" label="Help Center" />
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 border-t border-gray-800 pt-8">
          {/* About ZoraMuse */}
          <div className="mb-8">
            <h4 className="text-amber-500 font-semibold mb-2 flex items-center">
              <FileText size={16} className="mr-2" /> About ZoraMuse
            </h4>
            <p className="text-gray-400 text-sm">
              ZoraMuse is an AI-powered platform built on Zora's Coins Protocol, empowering creators and traders to
              launch smarter, curated, and viral digital drops using intelligent minting and trading tools. We're here
              to supercharge Web3 creation with the power of AI.
            </p>
            <Link
              href="/about-zoramuse"
              className="text-amber-500 text-sm mt-2 inline-block hover:text-amber-400 transition"
            >
              Learn more →
            </Link>
          </div>

          {/* Careers */}
          <div className="mb-8">
            <h4 className="text-amber-500 font-semibold mb-2 flex items-center">
              <Users size={16} className="mr-2" /> Careers
            </h4>
            <p className="text-gray-400 text-sm">
              Join the frontier of AI + Web3. We're hiring engineers, designers, community builders, and crypto-native
              creatives who want to shape the future of creator economies.
            </p>
            <Link href="/careers" className="text-amber-500 text-sm mt-2 inline-block hover:text-amber-400 transition">
              View open positions →
            </Link>
          </div>

          {/* Press Kit */}
          <div className="mb-8">
            <h4 className="text-amber-500 font-semibold mb-2 flex items-center">
              <BookOpen size={16} className="mr-2" /> Press Kit
            </h4>
            <p className="text-gray-400 text-sm">
              Download logos, brand assets, screenshots, and the official ZoraMuse media kit for coverage or
              partnerships. Includes logo files (SVG, PNG), product screenshots, founders bios, and pitch deck.
            </p>
            <Link
              href="/press-kit"
              className="text-amber-500 text-sm mt-2 inline-block hover:text-amber-400 transition"
            >
              Download press kit →
            </Link>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-8">
            <h4 className="text-amber-500 font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-3">
              Subscribe to our newsletter for the latest updates on ZoraMuse features, drops, and community events.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-900 text-white px-4 py-2 rounded-l-md border border-gray-700 focus:outline-none focus:border-amber-500 w-full"
              />
              <button className="bg-amber-500 text-black px-4 py-2 rounded-r-md hover:bg-amber-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ZoraMuse. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-500 text-sm hover:text-amber-500 transition">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-gray-500 text-sm hover:text-amber-500 transition">
              Terms of Use
            </Link>
            <Link href="/cookies" className="text-gray-500 text-sm hover:text-amber-500 transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-amber-500 transition">
        {label}
      </Link>
    </li>
  )
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="text-gray-400 hover:text-amber-500 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  )
}
