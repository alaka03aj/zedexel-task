'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const pathname = usePathname()

    //   add actual icons
    const navItems = [
        { name: 'Explore', path: '/explore', icon: '/explore.png' },
        { name: 'Contactors', path: '/contractors', icon: '/contractors.png' },
        { name: 'Projects', path: '/', icon: '/projects.png' },
        { name: 'Users', path: '/users', icon: '/users.png' },
    ]

    return (
        <div className='p-2 h-screen'>
            <div className="w-1//12 bg-navy h-full p-4 rounded-2xl">
                <div className="text-white text-xl font-bold mb-8 text-center">
                    Logo
                </div>
                <nav>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`
              block px-4 py-2 mb-2 rounded
              ${pathname === item.path
                                    ? ' text-white'
                                    : 'text-gray-300 hover:bg-gray-700'}
            `}
                        > 
                            <div className='flex flex-col items-center'>
                                <Image src={item.icon} width="32" height="32" alt='navbar icons'></Image>
                                <p>{item.name}</p>
                            </div>
                        </Link>
                    ))}
                </nav>
            </div> 
        </div>
    )
}

export default Sidebar