'use client'
 
import { usePathname } from 'next/navigation'
import Link from "next/link";

// List of links to other pages
const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/repos", label: "Repos" },
    { href: "/about", label: "About" },
];

// The NavBar component
const NavBar = () => {
    // Get the current pathname
    const pathname = usePathname();

    return (
        <nav className='flex-1'>
            {links.map(({ href, label }) => (
                <Link key={`${href}${label}`} href={href}>
                    <div
                        className={`btn btn-ghost rounded-md ${
                            href === pathname ? "bg-secondary" 
                            : ""
                        }`}
                    >
                        {label}
                    </div>
                </Link>
            ))}
        </nav>
    );
};

export default NavBar;
