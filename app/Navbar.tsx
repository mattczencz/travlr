import { getServerSession } from 'next-auth';
import Link from 'next/link';
import authOptions from './auth/authOptions';
import NavLink from './components/Navigation/NavLink';
import NavDrawer from './components/Navigation/NavDrawer';
import { TNavLink } from './lib/definitions';

const Navbar = () => {
  const navLinks: TNavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Explore', href: '/explore' },
    { label: 'Categories', href: '/categories' },
  ];

  return (
    <nav className="flex gap-4 items-center p-4 lg:p-6 justify-between lg:justify-start relative">
      <div className="flex gap-4 items-center">
        <NavDrawer navlinks={navLinks} />
        <Link href="/" className="font-extrabold text-2xl lg:text-4xl">Travlr</Link>
      </div>
      <ul className="hidden lg:flex gap-4 flex-1 justify-center">
        {navLinks.map(link => (
          <li key={link.href}>
            <NavLink href={link.href} label={link.label} />
          </li>
        ))}
      </ul>
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