import { getServerSession } from 'next-auth';
import Link from 'next/link';
import authOptions from './auth/authOptions';
import NavLink from './components/Navigation/NavLink';

const Navbar = () => {
  const navLinks: { label: string; href: string; }[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Explore', href: '/explore' },
    { label: 'Categories', href: '/categories' },
  ];

  return (
    <nav className="flex gap-4 items-center p-6">
      <Link href="/" className="font-extrabold text-4xl">Travlr</Link>
      <div className="flex gap-4 flex-1 justify-center">
        {navLinks.map(link => (
          <NavLink href={link.href} label={link.label} />
        ))}
      </div>
      <div className="flex">
        <AuthLinks />
      </div>
    </nav>
  );
};
export default Navbar;

const AuthLinks = async () => {
  const session = await getServerSession(authOptions);

  if (session)
    return <Link href="/api/auth/signout" className="nav-btn">Log Out</Link>;

  return <Link href="/api/auth/signin" className="nav-btn">Log In</Link>;
};