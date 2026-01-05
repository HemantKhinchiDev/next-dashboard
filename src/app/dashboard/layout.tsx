'use client'
import SideNav from '@/app/ui/sidenav';
import { usePathname } from 'next/navigation';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}<p>Current pathname: {pathname}</p></div>
    </div>
  );
}