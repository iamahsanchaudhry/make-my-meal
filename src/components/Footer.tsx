import { Link } from "@tanstack/react-router";
import { Separator } from "../components/ui/separator";

export default function Footer() {
    return(
        <footer className="bg-gray-200 dark:bg-gray-900 text-neutral-700 dark:text-neutral-300 py-6 mt-10">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
    
    {/* Left Side - Branding */}
    <div className="mb-4 sm:mb-0 text-center sm:text-left">
      <h2 className="text-lg font-semibold">🍽️ Make My Meal</h2>
      <p className="text-sm">Made with love for food lovers around the world.</p>
    </div>
    <Separator orientation="vertical" />
    {/* Center - Links */}
    <div className="flex space-x-4 mb-4 sm:mb-0">
      <Link to='/about' className="hover:text-blue-500 transition">About</Link>
      <Link to="/" className="hover:text-blue-500 transition">Contact</Link>
      <Link to="/" className="hover:text-blue-500 transition">Home</Link>
    </div>
    <Separator orientation="vertical"/>
    {/* Right Side - Copyright */}
    <div className="text-sm text-center sm:text-right">
      &copy; {new Date().getFullYear()} Make My Meal. All rights reserved.
    </div>
  </div>
</footer>

    )
}