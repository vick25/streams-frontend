import { STATS } from '@/lib/constants';
import React from 'react';

export const StatsSection: React.FC = () => {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Success Stories & Testimonials
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Données en temps réel sur l’état et l’impact des infrastructures de distribution d’eau.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {STATS.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-blue-50/50 hover:bg-white border border-transparent hover:border-gray-200 rounded-2xl p-8 text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
                        >
                            <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </div>
                            <div className="text-gray-700 font-medium text-lg">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};