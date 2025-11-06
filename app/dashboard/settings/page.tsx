'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Settings,
    User,
    Bell,
    Shield,
    Palette,
    Globe,
    Save,
    Camera
} from 'lucide-react';

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile');
    const [notifications, setNotifications] = useState({
        appointments: true,
        patients: true,
        system: false,
        community: true
    });

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'appearance', label: 'Appearance', icon: Palette },
        { id: 'language', label: 'Language', icon: Globe }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Settings Navigation */}
                <Card className="lg:col-span-1">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Settings className="h-5 w-5 mr-2" />
                            Settings
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left ${activeTab === tab.id
                                        ? 'bg-[#9333EA] text-white'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                <tab.icon className="h-4 w-4" />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </CardContent>
                </Card>

                {/* Settings Content */}
                <div className="lg:col-span-3">
                    {activeTab === 'profile' && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Profile Information</CardTitle>
                                <CardDescription>
                                    Update your personal information and profile details
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <Avatar className="h-20 w-20">
                                        <AvatarImage src="/placeholder-avatar.jpg" />
                                        <AvatarFallback className="bg-[#9333EA] text-white text-lg">DU</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <Button variant="outline" size="sm">
                                            <Camera className="h-4 w-4 mr-2" />
                                            Change Photo
                                        </Button>
                                        <p className="text-sm text-gray-500 mt-1">JPG, GIF or PNG. 1MB max.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">First Name</label>
                                        <Input defaultValue="Jean" className="mt-1" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Last Name</label>
                                        <Input defaultValue="Uwimana" className="mt-1" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Email</label>
                                        <Input defaultValue="j.uwimana@mindora.rw" className="mt-1" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Phone</label>
                                        <Input defaultValue="+250788123456" className="mt-1" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Specialization</label>
                                        <Input defaultValue="Cardiologist" className="mt-1" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">License Number</label>
                                        <Input defaultValue="MD-RW-2019-001234" className="mt-1" />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700">Bio</label>
                                    <textarea
                                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9333EA] focus:border-transparent"
                                        rows={3}
                                        defaultValue="Experienced cardiologist with over 10 years of practice in Rwanda's healthcare system."
                                    />
                                </div>

                                <Button className="bg-[#9333EA] hover:bg-purple-700">
                                    <Save className="h-4 w-4 mr-2" />
                                    Save Changes
                                </Button>
                            </CardContent>
                        </Card>
                    )}

                    {activeTab === 'notifications' && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Notification Preferences</CardTitle>
                                <CardDescription>
                                    Choose what notifications you want to receive
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-medium text-gray-900">Appointment Notifications</h3>
                                            <p className="text-sm text-gray-500">Get notified about upcoming appointments</p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={notifications.appointments}
                                            onChange={(e) => setNotifications({ ...notifications, appointments: e.target.checked })}
                                            className="h-4 w-4 text-[#9333EA] focus:ring-[#9333EA] border-gray-300 rounded"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-medium text-gray-900">Patient Updates</h3>
                                            <p className="text-sm text-gray-500">Notifications about patient status changes</p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={notifications.patients}
                                            onChange={(e) => setNotifications({ ...notifications, patients: e.target.checked })}
                                            className="h-4 w-4 text-[#9333EA] focus:ring-[#9333EA] border-gray-300 rounded"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-medium text-gray-900">System Alerts</h3>
                                            <p className="text-sm text-gray-500">Important system maintenance and updates</p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={notifications.system}
                                            onChange={(e) => setNotifications({ ...notifications, system: e.target.checked })}
                                            className="h-4 w-4 text-[#9333EA] focus:ring-[#9333EA] border-gray-300 rounded"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-medium text-gray-900">Community Activity</h3>
                                            <p className="text-sm text-gray-500">Updates from the health community</p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={notifications.community}
                                            onChange={(e) => setNotifications({ ...notifications, community: e.target.checked })}
                                            className="h-4 w-4 text-[#9333EA] focus:ring-[#9333EA] border-gray-300 rounded"
                                        />
                                    </div>
                                </div>

                                <Button className="bg-[#9333EA] hover:bg-purple-700">
                                    <Save className="h-4 w-4 mr-2" />
                                    Save Preferences
                                </Button>
                            </CardContent>
                        </Card>
                    )}

                    {activeTab === 'security' && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Security Settings</CardTitle>
                                <CardDescription>
                                    Manage your account security and privacy
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-4">Change Password</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-sm font-medium text-gray-700">Current Password</label>
                                            <Input type="password" className="mt-1" />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-gray-700">New Password</label>
                                            <Input type="password" className="mt-1" />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
                                            <Input type="password" className="mt-1" />
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t pt-6">
                                    <h3 className="font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                                            <Badge variant="outline" className="mt-2">Not Enabled</Badge>
                                        </div>
                                        <Button variant="outline">Enable 2FA</Button>
                                    </div>
                                </div>

                                <div className="border-t pt-6">
                                    <h3 className="font-medium text-gray-900 mb-4">Active Sessions</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 border rounded-lg">
                                            <div>
                                                <p className="font-medium text-gray-900">Current Session</p>
                                                <p className="text-sm text-gray-500">Windows • Chrome • Kigali, Rwanda</p>
                                            </div>
                                            <Badge className="bg-green-100 text-green-800">Active</Badge>
                                        </div>
                                    </div>
                                </div>

                                <Button className="bg-[#9333EA] hover:bg-purple-700">
                                    <Save className="h-4 w-4 mr-2" />
                                    Update Security
                                </Button>
                            </CardContent>
                        </Card>
                    )}

                    {activeTab === 'appearance' && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Appearance Settings</CardTitle>
                                <CardDescription>
                                    Customize the look and feel of your dashboard
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-4">Theme</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="border rounded-lg p-4 cursor-pointer hover:border-[#9333EA]">
                                            <div className="w-full h-20 bg-white border rounded mb-2"></div>
                                            <p className="text-sm font-medium">Light</p>
                                        </div>
                                        <div className="border rounded-lg p-4 cursor-pointer hover:border-[#9333EA]">
                                            <div className="w-full h-20 bg-gray-900 border rounded mb-2"></div>
                                            <p className="text-sm font-medium">Dark</p>
                                        </div>
                                        <div className="border rounded-lg p-4 cursor-pointer hover:border-[#9333EA]">
                                            <div className="w-full h-20 bg-gradient-to-br from-white to-gray-900 border rounded mb-2"></div>
                                            <p className="text-sm font-medium">Auto</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium text-gray-900 mb-4">Accent Color</h3>
                                    <div className="flex space-x-3">
                                        <div className="w-8 h-8 bg-[#9333EA] rounded-full cursor-pointer border-2 border-gray-300"></div>
                                        <div className="w-8 h-8 bg-blue-600 rounded-full cursor-pointer"></div>
                                        <div className="w-8 h-8 bg-green-600 rounded-full cursor-pointer"></div>
                                        <div className="w-8 h-8 bg-red-600 rounded-full cursor-pointer"></div>
                                        <div className="w-8 h-8 bg-yellow-600 rounded-full cursor-pointer"></div>
                                    </div>
                                </div>

                                <Button className="bg-[#9333EA] hover:bg-purple-700">
                                    <Save className="h-4 w-4 mr-2" />
                                    Save Appearance
                                </Button>
                            </CardContent>
                        </Card>
                    )}

                    {activeTab === 'language' && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Language & Region</CardTitle>
                                <CardDescription>
                                    Set your preferred language and regional settings
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Language</label>
                                    <select className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9333EA] focus:border-transparent">
                                        <option value="en">English</option>
                                        <option value="rw">Kinyarwanda</option>
                                        <option value="fr">Français</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700">Time Zone</label>
                                    <select className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9333EA] focus:border-transparent">
                                        <option value="Africa/Kigali">Africa/Kigali (CAT)</option>
                                        <option value="UTC">UTC</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700">Date Format</label>
                                    <select className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9333EA] focus:border-transparent">
                                        <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                                        <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                                        <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                                    </select>
                                </div>

                                <Button className="bg-[#9333EA] hover:bg-purple-700">
                                    <Save className="h-4 w-4 mr-2" />
                                    Save Settings
                                </Button>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}