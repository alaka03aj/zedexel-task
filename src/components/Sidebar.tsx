'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const pathname = usePathname()

    //   add actual icons
    const navItems = [
        { name: 'Dashboard', path: '/', icon: '📊' },
        { name: 'Projects', path: '/projects', icon: '📁' },
        { name: 'Venues', path: '/venues', icon: '🏢' },
        { name: 'Clients', path: '/clients', icon: '👥' },
    ]

    return (
        <div className='p-2 h-screen'>
            <div className="w-1//12 bg-navy h-full p-4 rounded-2xl">
                <div className="text-white text-xl font-bold mb-8">
                    Exhibition Manager
                </div>
                <nav>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`
              block px-4 py-2 mb-2 rounded
              ${pathname === item.path
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-300 hover:bg-gray-700'}
            `}
                        > 
                            <div className='flex flex-col items-center'>
                                <p>{item.icon}</p>
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