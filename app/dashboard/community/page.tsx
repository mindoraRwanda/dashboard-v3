'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import {
    MessageSquare,
    Heart,
    Share,
    Plus,
    Search,
    TrendingUp,
    Users,
    Eye
} from 'lucide-react';
import { communityPosts, meditationSessions, statistics } from '../../data/dummyData';

const extendedPosts = [
    ...communityPosts,
    {
        id: 4,
        author: 'Dr. Mukamana Sarah',
        title: 'Mental Health Awareness in Rwanda',
        content: 'Breaking the stigma around mental health discussions in our communities. Let\'s create safe spaces for healing...',
        likes: 67,
        comments: 23,
        date: '2024-10-31'
    },
    {
        id: 5,
        author: 'Patient Support Group',
        title: 'Diabetes Management Workshop',
        content: 'Join us for a comprehensive workshop on managing diabetes with traditional and modern approaches...',
        likes: 54,
        comments: 18,
        date: '2024-10-30'
    },
    {
        id: 6,
        author: 'Dr. Nkurunziza Paul',
        title: 'Preventive Care in Rural Areas',
        content: 'Strategies for improving healthcare access and preventive care in rural Rwanda communities...',
        likes: 41,
        comments: 14,
        date: '2024-10-29'
    }
];

export default function CommunityPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState<'posts' | 'meditation'>('posts');

    const filteredPosts = extendedPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Community</h1>
                    <p className="text-gray-600 mt-1">Connect with patients and healthcare professionals</p>
                </div>
                <Button className="mt-4 sm:mt-0 bg-[#9333EA] hover:bg-purple-700">
                    <Plus className="h-4 w-4 mr-2" />
                    New Post
                </Button>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Community Members</p>
                                <p className="text-2xl font-bold">{statistics.communityMembers}</p>
                            </div>
                            <Users className="h-8 w-8 text-[#9333EA]" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Active Posts</p>
                                <p className="text-2xl font-bold">{extendedPosts.length}</p>
                            </div>
                            <MessageSquare className="h-8 w-8 text-blue-600" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Meditation Sessions</p>
                                <p className="text-2xl font-bold">{meditationSessions.length}</p>
                            </div>
                            <Heart className="h-8 w-8 text-green-600" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Engagement Rate</p>
                                <p className="text-2xl font-bold">85.7%</p>
                            </div>
                            <TrendingUp className="h-8 w-8 text-orange-600" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Search */}
            <Card>
                <CardContent className="pt-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                            placeholder="Search posts, authors, or topics..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
                <Button
                    variant={activeTab === 'posts' ? 'default' : 'ghost'}
                    onClick={() => setActiveTab('posts')}
                    size="sm"
                >
                    Community Posts
                </Button>
                <Button
                    variant={activeTab === 'meditation' ? 'default' : 'ghost'}
                    onClick={() => setActiveTab('meditation')}
                    size="sm"
                >
                    Meditation Sessions
                </Button>
            </div>

            {activeTab === 'posts' ? (
                /* Community Posts */
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        {filteredPosts.map((post) => (
                            <Card key={post.id} className="hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center space-x-3">
                                        <Avatar>
                                            <AvatarFallback>
                                                {post.author.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{post.author}</h3>
                                            <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
                                    <p className="text-gray-700 mb-4">{post.content}</p>

                                    <div className="flex items-center justify-between pt-4 border-t">
                                        <div className="flex items-center space-x-6">
                                            <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                                                <Heart className="h-4 w-4" />
                                                <span className="text-sm">{post.likes}</span>
                                            </button>
                                            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                                                <MessageSquare className="h-4 w-4" />
                                                <span className="text-sm">{post.comments}</span>
                                            </button>
                                            <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                                                <Share className="h-4 w-4" />
                                                <span className="text-sm">Share</span>
                                            </button>
                                        </div>
                                        <Badge variant="secondary">Health</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Trending Topics</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-700">#MentalHealthAwareness</span>
                                    <Badge variant="outline">24 posts</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-700">#DiabetesManagement</span>
                                    <Badge variant="outline">18 posts</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-700">#PreventiveCare</span>
                                    <Badge variant="outline">15 posts</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-700">#HealthyLiving</span>
                                    <Badge variant="outline">12 posts</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Active Contributors</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Avatar>
                                        <AvatarFallback>DU</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium text-gray-900">Dr. Uwimana Jean</p>
                                        <p className="text-sm text-gray-500">45 posts this month</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Avatar>
                                        <AvatarFallback>MS</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium text-gray-900">Dr. Mukamana Sarah</p>
                                        <p className="text-sm text-gray-500">32 posts this month</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Avatar>
                                        <AvatarFallback>NP</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium text-gray-900">Dr. Nkurunziza Paul</p>
                                        <p className="text-sm text-gray-500">28 posts this month</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ) : (
                /* Meditation Sessions */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {meditationSessions.map((session) => (
                        <Card key={session.id} className="hover:shadow-md transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    {session.title}
                                    <Badge variant="secondary">{session.duration}</Badge>
                                </CardTitle>
                                <CardDescription>{session.category}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-2">
                                        <Users className="h-4 w-4 text-gray-500" />
                                        <span className="text-sm text-gray-600">{session.participants} participants</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Eye className="h-4 w-4 text-gray-500" />
                                        <span className="text-sm text-gray-600">Live</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-[#9333EA] h-2 rounded-full"
                                            style={{ width: `${Math.min((session.participants / 200) * 100, 100)}%` }}
                                        ></div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <Button variant="outline" size="sm">
                                            <Heart className="h-4 w-4 mr-2" />
                                            Join Session
                                        </Button>
                                        <Button size="sm" className="bg-[#9333EA] hover:bg-purple-700">
                                            Start Now
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}