import Link from 'next/link'
import MobileMenu from './mobile-menu'
import  '../../public/images/logo2.png'
export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
        <img src='/images/logo2.png' alt="logo" className="w-10 h-10" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

   {/* home ,about and projects navigation */}


   <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-yellow-400 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
               Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-yellow-400 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
               About
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-yellow-400 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                Projects
                </Link>
              </li>
            
            </ul>

            {/* Desktop sign in links */}
            

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
