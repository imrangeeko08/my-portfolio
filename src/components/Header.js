import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: 'Home', href: '/', scrollTo: 'hero' },
    { name: 'About', href: '/', scrollTo: 'about' },
    { name: 'Skills', href: '/', scrollTo: 'skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/', scrollTo: 'contact' },
  ];

  const handleScroll = (id) => {
    // If already on homepage, scroll directly
    if (router.pathname === '/') {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on another page (e.g., /projects), redirect to homepage and scroll
      router.push('/').then(() => {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure page loads
      });
    }
    setIsOpen(false); // Close mobile menu
  };

  // Ensure scroll works after page navigation (for initial load with hash)
  useEffect(() => {
    if (router.pathname === '/' && router.asPath.includes('#')) {
      const id = router.asPath.split('#')[1];
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [router]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#1D2F6F] to-[#3A0CA3] z-20 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-extrabold text-[#00F5D4] cursor-pointer tracking-tight">
            Imran
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            item.scrollTo ? (
              <button
                key={item.name}
                onClick={() => handleScroll(item.scrollTo)}
                className="text-gray-200 hover:text-[#F72585] transition font-semibold"
              >
                {item.name}
              </button>
            ) : (
              <Link key={item.name} href={item.href}>
                <span className="text-gray-200 hover:text-[#F72585] transition font-semibold cursor-pointer">
                  {item.name}
                </span>
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#00F5D4] text-2xl focus:outline-none"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#1D2F6F] p-4"
        >
          {navItems.map((item) => (
            item.scrollTo ? (
              <button
                key={item.name}
                onClick={() => handleScroll(item.scrollTo)}
                className="block py-2 text-gray-200 hover:text-[#F72585] transition font-semibold"
              >
                {item.name}
              </button>
            ) : (
              <Link key={item.name} href={item.href}>
                <span className="block py-2 text-gray-200 hover:text-[#F72585] transition font-semibold">
                  {item.name}
                </span>
              </Link>
            )
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}