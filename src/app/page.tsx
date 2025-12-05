'use client';

import { FilterCard } from '@/components/FilterCard';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { StatsSection } from '@/components/StatsSection';
import { MOCK_FEATURES } from '@/lib/constants';
import { MapFeature } from '@/lib/types';
import dynamic from 'next/dynamic';
import { useState } from 'react';

// Dynamic import for Leaflet map to avoid SSR issues
const LeafletMap = dynamic(() => import('@/components/LeafletMap'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-100">Loading Map...</div>
});

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<MapFeature | null>(null);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [mapStyle, setMapStyle] = useState<'standard' | 'satellite'>('standard');

  const handleFeatureClick = (feature: MapFeature) => {
    setSelectedFeature(feature);
    // On mobile, ensure filter card opens when a feature is clicked
    if (window.innerWidth < 768) {
      setIsFilterVisible(true);
    }
  };

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  // Filter logic
  const filteredFeatures = selectedCategory === 'All Categories'
    ? MOCK_FEATURES
    : MOCK_FEATURES.filter(f => f.type === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col">
        {/* Hero / Map Section */}
        <section className="relative w-full h-[600px] md:h-[700px] bg-gray-200 overflow-hidden">

          <LeafletMap
            features={filteredFeatures}
            onFeatureClick={handleFeatureClick}
            selectedFeatureId={selectedFeature?.id}
            mapStyle={mapStyle}
          />

          {/* Mobile Toggle Button for Filter Card */}
          <button
            onClick={toggleFilter}
            className="md:hidden absolute top-4 left-4 z-[500] bg-white p-2 rounded-md shadow-lg text-blue-600 font-bold text-sm"
          >
            {isFilterVisible ? 'Hide Info' : 'Show Info'}
          </button>

          {/* Right Side Overlay Container */}
          <div className="absolute top-0 right-0 h-full w-full pointer-events-none flex flex-col items-end justify-start z-[1000] md:p-6">

            {/* Base Layer Control (Map | Satellite) - Visible always */}
            <div className="pointer-events-auto bg-white rounded-lg shadow-lg border border-gray-100 p-1 flex mb-4 mr-4 md:mr-0 mt-4 md:mt-0">
              <button
                onClick={() => setMapStyle('standard')}
                className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-all ${mapStyle === 'standard' ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-800'}`}
              >
                Map
              </button>
              <div className="w-px bg-gray-200 my-1 mx-1"></div>
              <button
                onClick={() => setMapStyle('satellite')}
                className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-all ${mapStyle === 'satellite' ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-800'}`}
              >
                Satellite
              </button>
            </div>

            {/* Filter Card Container - Stacked below the toggle */}
            <div className={`
              w-full md:w-[380px]
              bg-white/95 backdrop-blur-sm shadow-2xl
              overflow-y-auto pointer-events-auto flex flex-col
              transition-transform duration-300 ease-in-out
              ${isFilterVisible ? 'translate-x-0' : 'translate-x-full md:translate-x-0 hidden md:flex'}
              h-full md:h-auto md:max-h-[calc(100%-4rem)] md:rounded-xl
              border-t md:border border-gray-100
            `}>
              <FilterCard
                selectedFeature={selectedFeature}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                onClose={() => setIsFilterVisible(false)}
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />
      </main>

      <Footer />
    </div>
  );
}