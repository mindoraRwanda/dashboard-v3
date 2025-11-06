'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Activity,
    Server,
    Database,
    Wifi,
    AlertTriangle,
    CheckCircle,
    Clock,
    Zap
} from 'lucide-react';

const systemMetrics = [
    {
        name: 'API Response Time',
        value: '120ms',
        status: 'good',
        change: '-5ms',
        icon: Zap
    },
    {
        name: 'Database Performance',
        value: '98.5%',
        status: 'good',
        change: '+0.2%',
        icon: Database
    },
    {
        name: 'Server Uptime',
        value: '99.9%',
        status: 'excellent',
        change: '+0.1%',
        icon: Server
    },
    {
        name: 'Network Latency',
        value: '45ms',
        status: 'good',
        change: '-2ms',
        icon: Wifi
    }
];

const systemServices = [
    {
        name: 'Authentication Service',
        status: 'running',
        uptime: '99.9%',
        lastRestart: '2 days ago'
    },
    {
        name: 'Patient Management API',
        status: 'running',
        uptime: '99.8%',
        lastRestart: '1 day ago'
    },
    {
        name: 'Appointment Scheduler',
        status: 'running',
        uptime: '99.9%',
        lastRestart: '3 days ago'
    },
    {
        name: 'Notification Service',
        status: 'warning',
        uptime: '97.2%',
        lastRestart: '2 hours ago'
    },
    {
        name: 'Analytics Engine',
        status: 'running',
        uptime: '99.7%',
        lastRestart: '1 day ago'
    },
    {
        name: 'File Storage Service',
        status: 'running',
        uptime: '99.9%',
        lastRestart: '4 days ago'
    }
];

const recentAlerts = [
    {
        id: 1,
        type: 'warning',
        message: 'High memory usage on server-02',
        time: '2 hours ago',
        resolved: false
    },
    {
        id: 2,
        type: 'info',
        message: 'Scheduled maintenance completed successfully',
        time: '1 day ago',
        resolved: true
    },
    {
        id: 3,
        type: 'error',
        message: 'Database connection timeout resolved',
        time: '2 days ago',
        resolved: true
    },
    {
        id: 4,
        type: 'info',
        message: 'System backup completed',
        time: '3 days ago',
        resolved: true
    }
];

export default function SystemHealthPage() {
    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'running':
                return <CheckCircle className="h-4 w-4 text-green-600" />;
            case 'warning':
                return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
            case 'error':
                return <AlertTriangle className="h-4 w-4 text-red-600" />;
            default:
                return <Clock className="h-4 w-4 text-gray-600" />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'running':
                return 'bg-green-100 text-green-800';
            case 'warning':
                return 'bg-yellow-100 text-yellow-800';
            case 'error':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getAlertIcon = (type: string) => {
        switch (type) {
            case 'error':
                return <AlertTriangle className="h-4 w-4 text-red-600" />;
            case 'warning':
                return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
            case 'info':
                return <CheckCircle className="h-4 w-4 text-blue-600" />;
            default:
                return <Activity className="h-4 w-4 text-gray-600" />;
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">System Health</h1>
                    <p className="text-gray-600 mt-1">Monitor system performance and health metrics</p>
                </div>
                <div className="flex space-x-2 mt-4 sm:mt-0">
                    <Button variant="outline">
                        <Activity className="h-4 w-4 mr-2" />
                        Run Diagnostics
                    </Button>
                    <Button className="bg-[#9333EA] hover:bg-purple-700">
                        <Server className="h-4 w-4 mr-2" />
                        System Settings
                    </Button>
                </div>
            </div>

            {/* System Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {systemMetrics.map((metric, index) => (
                    <Card key={index}>
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                                    <p className="text-2xl font-bold">{metric.value}</p>
                                    <p className={`text-xs ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                        {metric.change} from last hour
                                    </p>
                                </div>
                                <metric.icon className="h-8 w-8 text-[#9333EA]" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* System Services */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Server className="h-5 w-5 mr-2" />
                            System Services
                        </CardTitle>
                        <CardDescription>
                            Status of all system services and microservices
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {systemServices.map((service, index) => (
                            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex items-center space-x-3">
                                    {getStatusIcon(service.status)}
                                    <div>
                                        <p className="font-medium text-gray-900">{service.name}</p>
                                        <p className="text-sm text-gray-600">Uptime: {service.uptime}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <Badge className={getStatusColor(service.status)}>
                                        {service.status}
                                    </Badge>
                                    <p className="text-xs text-gray-500 mt-1">{service.lastRestart}</p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Recent Alerts */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <AlertTriangle className="h-5 w-5 mr-2" />
                            Recent Alerts
                        </CardTitle>
                        <CardDescription>
                            System alerts and notifications
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {recentAlerts.map((alert) => (
                            <div key={alert.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                                <div className="flex-shrink-0 mt-0.5">
                                    {getAlertIcon(alert.type)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                                    <p className="text-xs text-gray-500">{alert.time}</p>
                                </div>
                                {alert.resolved && (
                                    <Badge variant="outline" className="text-xs">
                                        Resolved
                                    </Badge>
                                )}
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* System Overview */}
            <Card>
                <CardHeader>
                    <CardTitle>System Overview</CardTitle>
                    <CardDescription>
                        Comprehensive system health and performance metrics
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-4">
                            <h3 className="font-medium text-gray-900">Performance</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">CPU Usage</span>
                                    <span className="font-medium">23%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '23%' }}></div>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Memory Usage</span>
                                    <span className="font-medium">67%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Disk Usage</span>
                                    <span className="font-medium">45%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-medium text-gray-900">Network</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Bandwidth Usage</span>
                                    <span className="text-sm font-medium">2.3 GB/hr</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Active Connections</span>
                                    <span className="text-sm font-medium">1,247</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Request Rate</span>
                                    <span className="text-sm font-medium">450/min</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-medium text-gray-900">Security</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Failed Login Attempts</span>
                                    <span className="text-sm font-medium">12</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">SSL Certificate</span>
                                    <Badge className="bg-green-100 text-green-800 text-xs">Valid</Badge>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Last Security Scan</span>
                                    <span className="text-sm font-medium">2 hours ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}