'use client';

import { TNavLink } from '@/app/lib/definitions';
import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { CgMenuLeftAlt, CgClose } from 'react-icons/cg';
import NavLink from './NavLink';

const NavDrawer = ({ navlinks }: { navlinks: TNavLink[]; }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex lg:hidden">
      <button onClick={() => setOpen(!open)} className="text-2xl">
        {!open && <CgMenuLeftAlt />}
        {open && <CgClose />}
      </button>
      <ul
        className={classNames({
          "open": open
        }, "navpanel")}
      >
        {navlinks.map(link => (
          <li key={link.href} className="p-4">
            <NavLink href={link.href} label={link.label} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavDrawer;