'use client';

import Link from 'next/link';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

interface Props {
  label: string;
  href: string;
}

const NavLink = ({ label, href }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={classNames({
        "active": href === pathname
      }, "navlink")}
    >
      {label}
    </Link>
  );
};
export default NavLink;