'use client'
import Link from "next/link"
import NavLinks from "../dashboard/NavLinks"
import Image from "next/image"

export default function SideNav() {

    return  (
        <div className="flex h-screen bg-gray-900 text-white">
          <aside className="w-64 flex flex-col border-r border-white/10">
            
            <div className="h-16 flex items-center px-6">
              <Image
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </div>

            
            <nav className="flex-1 px-4 py-6 overflow-y-auto">
              <NavLinks/>
              <ul className="space-y-1 hidden">
                <li>
                <Link href="/dashboard/" className="flex items-center gap-3 rounded-md bg-white/5 px-3 py-2 text-sm font-medium text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="h-5 w-5">
                      <path 
                          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                      ></path>
                  </svg>
                    Dashboard
                </Link>
                </li>

                <li>
                <Link href="/dashboard/Customers/" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="h-5 w-5">
                      <path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    Customers
                </Link>
                </li>

                <li>
                <Link href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="h-5 w-5">
                      <path d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    Projects
                </Link>
                </li>

                <li>
                <Link href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="h-5 w-5">
                      <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    Calendar
                </Link>
                </li>

                <li>
                <Link href="/dashboard/invoices/" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="h-5 w-5">
                      <path d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    Documents
                </Link>
                </li>

                <li>
                <Link href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="h-5 w-5">
                      <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    Reports
                </Link>
                </li>

              
                <li className="pt-6">
                  <div className="px-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Your teams
                  </div>

                  <ul className="mt-2 space-y-1">
                    <li>
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                      >
                        <span
                          className="flex h-6 w-6 items-center justify-center rounded bg-indigo-500 text-xs font-bold text-white"
                        >
                          H
                        </span>
                        Heroicons
                    </Link>
                    </li>

                    <li>
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                      >
                        <span
                          className="flex h-6 w-6 items-center justify-center rounded bg-indigo-500 text-xs font-bold text-white"
                        >
                          T
                        </span>
                        Tailwind Labs
                    </Link>
                    </li>

                    <li>
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                      >
                        <span
                          className="flex h-6 w-6 items-center justify-center rounded bg-indigo-500 text-xs font-bold text-white"
                        >
                          W
                        </span>
                        Workcation
                    </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            
            <div className="px-4 py-4 border-t border-white/10">
            <Link href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="h-5 w-5">
                  <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                Settings
            </Link>
            </div>
          </aside>
        </div>

    )
}