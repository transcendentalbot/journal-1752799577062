// components/Navigation.tsx
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-gray-800 hover:text-gray-600 font-bold">
              Journal
            </Link>
          </div>
          <div>
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                href="/about"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-gray-600"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-gray-600"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation