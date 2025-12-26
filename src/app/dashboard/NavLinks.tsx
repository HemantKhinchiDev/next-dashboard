'use client'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import {HomeIcon, UserGroupIcon,FolderIcon,CalendarIcon,DocumentDuplicateIcon,ChartPieIcon,} from '@heroicons/react/24/outline';
import clsx from 'clsx';
const link =[
    { 
    name: 'Dashboard', 
    href: '/dashboard', 
    icon: HomeIcon 
  },
  { 
    name: 'Customers', 
    href: '/dashboard/Customers', 
    icon: UserGroupIcon 
  },
  { 
    name: 'Projects', 
    href: '/dashboard/projects', // Ya '#' agar link ready nahi hai
    icon: FolderIcon 
  },
  { 
    name: 'Calendar', 
    href: '/dashboard/calendar', 
    icon: CalendarIcon 
  },
  { 
    name: 'Documents', 
    href: '/dashboard/invoices', 
    icon: DocumentDuplicateIcon 
  },
  { 
    name: 'Reports', 
    href: '/dashboard/reports', 
    icon: ChartPieIcon 
  },
]
export default function NavLinks() {
  const pathname = usePathname();
  return (
        <ul className="space-y-1">
            {link.map((item) => (
                <li key={item.name}>
                    <Link href={item.href} className={clsx('flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white', {
                'bg-white/5 text-white': pathname === item.href,
              },)}>
                        <item.icon className="h-5 w-5" />
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>   
    )
}