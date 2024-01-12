import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/api/auth/signin">Sign In</Link>
      <Link href="/api/auth/signout">Sign Out</Link>
    </nav>
  );
};
export default Navbar;