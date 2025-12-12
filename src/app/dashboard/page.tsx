'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { LOCATION_DATA } from '@/lib/constants';
import React, { useState } from 'react';

export default function DashboardPage() {
    const [locParams, setLocParams] = useState({
        avenue: '',
        quartier: '',
        commune: ''
    });

    const [dateParams, setDateParams] = useState({
        year: '',
        semester: '',
        trimester: '',
        month: '',
        date_from: '',
        date_to: ''
    });

    const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);

    const handleLocSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (locParams.avenue) params.append('avenue', locParams.avenue);
        if (locParams.quartier) params.append('quartier', locParams.quartier);
        if (locParams.commune) params.append('commune', locParams.commune);
        setGeneratedUrl(`/api/infras/volume?${params.toString()}`);
    };

    const handleDateSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (dateParams.year) params.append('year', dateParams.year);
        if (dateParams.semester) params.append('semester', dateParams.semester);
        if (dateParams.trimester) params.append('trimester', dateParams.trimester);
        if (dateParams.month) params.append('month', dateParams.month);
        if (dateParams.date_from) params.append('date_from', dateParams.date_from);
        if (dateParams.date_to) params.append('date_to', dateParams.date_to);
        setGeneratedUrl(`/api/infras/volume_by_date?${params.toString()}`);
    };

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="grow bg-gray-50 px-4 py-8 md:p-12">
                <div className="max-w-6xl mx-auto">

                    <div className="mb-10 text-center md:text-left">
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-600 mt-2">Manage infrastructure data and generate volume reports.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Location Search */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-50">
                                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">Search by Location</h2>
                                    <p className="text-xs text-gray-500">Filter volumes by administrative area</p>
                                </div>
                            </div>

                            <form onSubmit={handleLocSearch} className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Commune</label>
                                    <select
                                        value={locParams.commune}
                                        onChange={(e) => setLocParams({ ...locParams, commune: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-white text-gray-900"
                                    >
                                        <option value="">Any Commune</option>
                                        {LOCATION_DATA.communes.map((c) => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Quartier</label>
                                    <select
                                        value={locParams.quartier}
                                        onChange={(e) => setLocParams({ ...locParams, quartier: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-white text-gray-900"
                                    >
                                        <option value="">Any Quartier</option>
                                        {LOCATION_DATA.quartiers.map((q) => (
                                            <option key={q} value={q}>{q}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Avenue</label>
                                    <select
                                        value={locParams.avenue}
                                        onChange={(e) => setLocParams({ ...locParams, avenue: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-white text-gray-900"
                                    >
                                        <option value="">Any Avenue</option>
                                        {LOCATION_DATA.avenues.map((a) => (
                                            <option key={a} value={a}>{a}</option>
                                        ))}
                                    </select>
                                </div>
                                <button type="submit" className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors flex justify-center items-center gap-2">
                                    <span>Generate Location Report</span>
                                </button>
                            </form>
                        </div>

                        {/* Date Search */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-50">
                                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">Search by Date</h2>
                                    <p className="text-xs text-gray-500">Filter by construction date</p>
                                </div>
                            </div>

                            <form onSubmit={handleDateSearch} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Year</label>
                                        <input
                                            type="number"
                                            value={dateParams.year}
                                            onChange={(e) => setDateParams({ ...dateParams, year: e.target.value })}
                                            placeholder="e.g. 2023"
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-sm text-gray-900"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Semester</label>
                                        <select
                                            value={dateParams.semester}
                                            onChange={(e) => setDateParams({ ...dateParams, semester: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-sm bg-white text-gray-900"
                                        >
                                            <option value="">Any</option>
                                            <option value="1">S1</option>
                                            <option value="2">S2</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Trimester</label>
                                        <select
                                            value={dateParams.trimester}
                                            onChange={(e) => setDateParams({ ...dateParams, trimester: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-sm bg-white text-gray-900"
                                        >
                                            <option value="">Any</option>
                                            <option value="1">Q1</option>
                                            <option value="2">Q2</option>
                                            <option value="3">Q3</option>
                                            <option value="4">Q4</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Month</label>
                                        <select
                                            value={dateParams.month}
                                            onChange={(e) => setDateParams({ ...dateParams, month: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-sm bg-white text-gray-900"
                                        >
                                            <option value="">Any</option>
                                            {Array.from({ length: 12 }, (_, i) => (
                                                <option key={i} value={i + 1}>{new Date(2000, i, 1).toLocaleString('default', { month: 'short' })}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-gray-100">
                                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Specific Date Range</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="date"
                                                value={dateParams.date_from}
                                                onChange={(e) => setDateParams({ ...dateParams, date_from: e.target.value })}
                                                className="w-full px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-gray-600"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="date"
                                                value={dateParams.date_to}
                                                onChange={(e) => setDateParams({ ...dateParams, date_to: e.target.value })}
                                                className="w-full px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-gray-600"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-colors flex justify-center items-center gap-2">
                                    <span>Generate Date Report</span>
                                </button>
                            </form>
                        </div>

                    </div>

                    {generatedUrl && (
                        <div className="mt-8 p-6 bg-gray-900 rounded-xl text-white shadow-xl">
                            <h3 className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-2">Simulated API Call</h3>
                            <div className="font-mono text-sm bg-black/50 p-4 rounded-lg border border-gray-700 break-all text-green-400">
                                GET {generatedUrl}
                            </div>
                        </div>
                    )}

                </div>
            </main>
            <Footer />
        </div>
    );
}