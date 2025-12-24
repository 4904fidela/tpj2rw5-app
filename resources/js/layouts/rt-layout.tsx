import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    rt: {
        id: number;
        number: string;
        name: string;
    };
}

interface Props {
    title: string;
    auth: {
        user: User;
    };
    url?: string;
}

export default function RtLayout({
    title,
    auth,
    children,
}: PropsWithChildren<Props>) {
    const { url } = usePage();

    const navigation = [
        {
            name: 'Dashboard',
            href: '/rt/dashboard',
            icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h6m2-2h6m-6 0V9m6 4v6m-6-6h6',
        },
        {
            name: 'Kependudukan',
            href: '/rt/residents',
            icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        },
        {
            name: 'Struktur Organisasi',
            href: '/rt/organization',
            icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
        },
        {
            name: 'PKK RT',
            href: '/rt/pkk',
            icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z',
        },
        {
            name: 'Karang Taruna',
            href: '/rt/kartar',
            icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        },
        {
            name: 'Surat',
            href: '/rt/letters',
            icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
        },
        {
            name: 'Pengaduan',
            href: '/rt/complaints',
            icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z',
        },
        {
            name: 'Kegiatan',
            href: '/rt/activities',
            icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        },
        {
            name: 'Keuangan',
            href: '/rt/finance',
            icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
        },
    ];
    // const menus = [
    //     {
    //         name: 'Organisasi',
    //         icon: Network,
    //         subMenus: [
    //             {
    //                 name: 'Struktur',
    //                 href: '/organization/structure',
    //                 icon: LayoutPanelTop,
    //             },
    //             {
    //                 name: 'Tugas Pokok Fungsi',
    //                 href: '/organization/jobdesc',
    //                 icon: BriefcaseBusiness,
    //             },
    //         ],
    //     },
    //     {
    //         name: 'Kependudukan',
    //         href: '/residents',
    //         icon: Users,
    //     },
    // ];

    return (
        // <SidebarProvider>
        //     <Sidebar>
        //         <SidebarHeader className="border-b pt-4">
        //             <div className="flex justify-center">
        //                 <span className="text-center text-xl font-semibold">
        //                     SMART <br />
        //                     TPJ 2 RW 5
        //                 </span>
        //             </div>
        //         </SidebarHeader>
        //         <SidebarHeader className="border-b">
        //             <SidebarMenu>
        //                 <SidebarMenuItem>
        //                     <SidebarMenuButton>
        //                         <House />
        //                         <span>RT 25</span>
        //                         <ChevronsUpDown className="ml-auto" />
        //                     </SidebarMenuButton>
        //                 </SidebarMenuItem>
        //             </SidebarMenu>
        //         </SidebarHeader>
        //         <SidebarContent>
        //             <SidebarGroup>
        //                 <SidebarGroupContent>
        //                     <SidebarMenu>
        //                         {menus.map((menu) =>
        //                             'subMenus' in menu ? (
        //                                 <Collapsible
        //                                     defaultOpen
        //                                     className="group/collapsible"
        //                                 >
        //                                     <SidebarMenuItem>
        //                                         <CollapsibleTrigger asChild>
        //                                             <SidebarMenuButton>
        //                                                 <menu.icon />
        //                                                 <span>{menu.name}</span>
        //                                                 <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
        //                                             </SidebarMenuButton>
        //                                         </CollapsibleTrigger>
        //                                         <CollapsibleContent>
        //                                             <SidebarMenuSub>
        //                                                 {menu.subMenus?.map(
        //                                                     (subMenu) => (
        //                                                         <SidebarMenu>
        //                                                             <SidebarMenuItem>
        //                                                                 <SidebarMenuButton
        //                                                                     asChild
        //                                                                 >
        //                                                                     <Link
        //                                                                         href={
        //                                                                             subMenu.href
        //                                                                         }
        //                                                                     >
        //                                                                         <subMenu.icon />
        //                                                                         <span>
        //                                                                             {
        //                                                                                 subMenu.name
        //                                                                             }
        //                                                                         </span>
        //                                                                     </Link>
        //                                                                 </SidebarMenuButton>
        //                                                             </SidebarMenuItem>
        //                                                         </SidebarMenu>
        //                                                     ),
        //                                                 )}
        //                                             </SidebarMenuSub>
        //                                         </CollapsibleContent>
        //                                     </SidebarMenuItem>
        //                                 </Collapsible>
        //                             ) : (
        //                                 <SidebarMenuItem>
        //                                     <SidebarMenuButton asChild>
        //                                         <Link href={menu.href}>
        //                                             <menu.icon />
        //                                             <span>{menu.name}</span>
        //                                         </Link>
        //                                     </SidebarMenuButton>
        //                                 </SidebarMenuItem>
        //                             ),
        //                         )}
        //                     </SidebarMenu>
        //                 </SidebarGroupContent>
        //             </SidebarGroup>
        //         </SidebarContent>
        //     </Sidebar>
        //     <main>{children}</main>
        // </SidebarProvider>
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="fixed z-10 h-full w-64 border-r bg-white shadow-sm">
                <div className="border-b p-6">
                    <div className="flex items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                            <span className="text-lg font-bold text-white">
                                RT
                            </span>
                        </div>
                        <div className="ml-3">
                            <h1 className="text-lg font-semibold text-gray-900">
                                {auth.user.rt.name}
                            </h1>
                            <p className="text-sm text-gray-500">Dashboard</p>
                        </div>
                    </div>
                </div>

                <nav className="mt-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                                url === item.href
                                    ? 'border-r-2 border-blue-600 bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                        >
                            <svg
                                className="mr-3 h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={item.icon}
                                />
                            </svg>
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="absolute bottom-0 w-64 border-t p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-900">
                                {auth.user.name}
                            </p>
                            <p className="text-xs text-gray-500">
                                {auth.user.email}
                            </p>
                        </div>
                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="text-sm text-red-600 hover:text-red-800"
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="ml-64 flex flex-1 flex-col">
                {/* Header */}
                <header
                    className="fixed z-5 w-full border-b bg-white px-6 py-4 shadow-sm"
                    style={{ left: '16rem' }}
                >
                    <h1 className="text-2xl font-semibold text-gray-900">
                        {title}
                    </h1>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-y-auto p-6 pt-20">
                    {children}
                </main>
            </div>
        </div>
    );
}
