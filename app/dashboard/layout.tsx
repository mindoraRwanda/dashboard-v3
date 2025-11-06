'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
    LayoutDashboard,
    Users,
    Calendar,
    MessageSquare,
    BarChart3,
    Settings,
    Hospital,
    GraduationCap,
    Activity,
    Bell,
    Search,
    Menu,
    X
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarItems = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
        roles: ['doctor', 'admin']
    },
    {
        title: 'Clients',
        href: '/dashboard/patients',
        icon: Users,
        roles: ['doctor']
    },
    {
        title: 'Sessions',
        href: '/dashboard/appointments',
        icon: Calendar,
        roles: ['doctor', 'admin']
    },
    {
        title: 'Community',
        href: '/dashboard/community',
        icon: MessageSquare,
        roles: ['doctor', 'admin']
    },
    {
        title: 'Analytics',
        href: '/dashboard/analytics',
        icon: BarChart3,
        roles: ['admin']
    },
    {
        title: 'Mental Health Centers',
        href: '/dashboard/hospitals',
        icon: Hospital,
        roles: ['admin']
    },
    {
        title: 'Universities',
        href: '/dashboard/universities',
        icon: GraduationCap,
        roles: ['admin']
    },
    {
        title: 'System Health',
        href: '/dashboard/system',
        icon: Activity,
        roles: ['admin']
    },
    {
        title: 'Settings',
        href: '/dashboard/settings',
        icon: Settings,
        roles: ['doctor', 'admin']
    }
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userRole, setUserRole] = useState<'doctor' | 'admin'>('doctor');
    const pathname = usePathname();

    const filteredSidebarItems = sidebarItems.filter(item =>
        item.roles.includes(userRole)
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={cn(
                "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col h-screen",
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                {/* Header */}
                <div className="flex items-center justify-between h-16 px-6 border-b flex-shrink-0">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-[#9333EA] rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">M</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900">Mindora</span>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>

                {/* Role Switcher */}
                <div className="p-4 border-b flex-shrink-0">
                    <div className="flex space-x-2">
                        <Button
                            variant={userRole === 'doctor' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setUserRole('doctor')}
                            className="flex-1"
                        >
                            Doctor
                        </Button>
                        <Button
                            variant={userRole === 'admin' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setUserRole('admin')}
                            className="flex-1"
                        >
                            Admin
                        </Button>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
                    {filteredSidebarItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-[#9333EA] text-white"
                                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                )}
                                onClick={() => setSidebarOpen(false)}
                            >
                                <item.icon className="h-5 w-5 flex-shrink-0" />
                                <span>{item.title}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* User Profile */}
                <div className="p-4 border-t flex-shrink-0">
                    <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder-avatar.jpg" />
                            <AvatarFallback className="bg-[#9333EA] text-white">
                                {userRole === 'doctor' ? 'DU' : 'AU'}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                                {userRole === 'doctor' ? 'Dr. Uwimana Jean' : 'Admin User'}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                                {userRole === 'doctor' ? 'Clinical Psychologist' : 'System Administrator'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="lg:pl-64">
                {/* Top header */}
                <header className="bg-white shadow-sm border-b sticky top-0 z-30">
                    <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center space-x-4">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="lg:hidden"
                                onClick={() => setSidebarOpen(true)}
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                            <div className="hidden md:flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2">
                                <Search className="h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search clients, sessions..."
                                    className="border-0 bg-transparent text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 w-48 lg:w-64"
                                />
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <Badge variant="secondary" className="hidden md:inline-flex text-xs">
                                {userRole === 'doctor' ? '234 Active Clients' : '1,040 Total Users'}
                            </Badge>
                            <Button variant="ghost" size="sm" className="relative">
                                <Bell className="h-5 w-5" />
                                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                                    3
                                </span>
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-4rem)]">
                    {children}
                </main>
            </div>
        </div>
    );
}