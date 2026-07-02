import Link from "next/link";

export default function Navbar() {
  return (
<nav className="relative w-full px-6 py-4 border-b flex items-center">
  {/* Logo */}
  <Link href="/" className="text-xl font-bold">
    Marany<span className="text-blue-500">.dev</span>
  </Link>

  {/* Center Menu */}
  <div className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-sm text-gray-600">
    <Link href="#about" className="hover:text-black transition">
      About
    </Link>

    <Link href="#projects" className="hover:text-black transition">
      Projects
    </Link>

    <Link href="#contact" className="hover:text-black transition">
      Contact
    </Link>
  </div>
</nav>
  );
}