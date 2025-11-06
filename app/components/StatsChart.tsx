'use client';

interface StatsChartProps {
    title: string;
    data: { label: string; value: number; color: string }[];
}

export default function StatsChart({ title, data }: StatsChartProps) {
    const maxValue = Math.max(...data.map(item => item.value));

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
            <div className="space-y-4">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: item.color }}
                            ></div>
                            <span className="text-sm font-medium text-gray-700">{item.label}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div
                                    className="h-2 rounded-full transition-all duration-300"
                                    style={{
                                        width: `${(item.value / maxValue) * 100}%`,
                                        backgroundColor: item.color
                                    }}
                                ></div>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 w-8 text-right">
                                {item.value}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}