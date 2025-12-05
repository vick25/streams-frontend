'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-gray-50 flex flex-col items-center justify-center p-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-2xl">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">About STREAMS</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        STREAMS is a pioneering initiative dedicated to mapping and monitoring critical water infrastructure across Central Africa.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-bold text-blue-800 mb-2">Our Mission</h3>
                            <p className="text-sm text-gray-700">To provide transparent, real-time data on water access points to improve sustainability and maintenance.</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-bold text-blue-800 mb-2">Our Vision</h3>
                            <p className="text-sm text-gray-700">A world where every community has reliable access to clean water through data-driven management.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}