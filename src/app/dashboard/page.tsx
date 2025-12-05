'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function DashboardPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-gray-50 flex flex-col items-center justify-center p-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-lg">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
                    <p className="text-gray-600">
                        Welcome to the internal dashboard. Here users can manage features, view detailed analytics, and export reports.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">
                        Access Tools
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}