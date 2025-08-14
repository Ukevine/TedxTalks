import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image src="/images/tedx-khs-logo.png" alt="TEDx Kigali High School" width={180} height={72} />
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-2">Contact us</p>
            <a href="mailto:uwasek21@gmail.com" className="text-ted-red hover:text-ted-red/80 transition-colors text-sm">
              uwasek21@gmail.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TEDx Kigali High School Youth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
