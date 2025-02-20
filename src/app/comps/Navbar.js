import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">🍽️ My Restaurant</h1>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link href="/menu" className="hover:text-yellow-400">Menu</Link></li>
          <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}