
import React, { useState } from 'react';
import CattleCard from './CattleCard';
import { MOCK_CATTLE_DATA } from '../constants';
import { Cattle } from '../types';

const MarketplacePage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCattle, setFilteredCattle] = useState<Cattle[]>(MOCK_CATTLE_DATA);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = MOCK_CATTLE_DATA.filter(cattle => 
            cattle.breed.toLowerCase().includes(term) ||
            cattle.location.toLowerCase().includes(term)
        );
        setFilteredCattle(filtered);
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-700/50 mb-12">
                <h1 className="text-3xl font-bold text-white mb-4">Marketplace</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input
                        type="text"
                        placeholder="Search by breed, location..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="md:col-span-2 bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <select className="bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500">
                        <option>Any Breed</option>
                        <option>Sahiwal</option>
                        <option>Cholistani</option>
                        <option>Red Sindhi</option>
                    </select>
                     <select className="bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500">
                        <option>Sort by Price</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredCattle.map(cattle => (
                    <CattleCard key={cattle.id} cattle={cattle} />
                ))}
            </div>
        </div>
    );
};

export default MarketplacePage;
