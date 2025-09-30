
import React, { useState } from 'react';
import { MOCK_CATTLE_DATA } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type DashboardTab = 'listings' | 'analytics' | 'add';

const FarmerDashboard: React.FC = () => {
    const mySalesData = [
        { name: 'Jan', sales: 4, revenue: 800000 },
        { name: 'Feb', sales: 2, revenue: 450000 },
        { name: 'Mar', sales: 5, revenue: 1100000 },
        { name: 'Apr', sales: 3, revenue: 700000 },
    ];
    
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                    <h3 className="text-gray-400 text-sm font-medium">Total Listings</h3>
                    <p className="text-3xl font-bold text-white">12</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                    <h3 className="text-gray-400 text-sm font-medium">Total Sales</h3>
                    <p className="text-3xl font-bold text-teal-400">PKR 3.2M</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                    <h3 className="text-gray-400 text-sm font-medium">Profile Verification</h3>
                    <p className="text-2xl font-bold text-green-400 flex items-center gap-2">Verified <i className="fas fa-check-circle"></i></p>
                </div>
            </div>
            
            <div>
                <h3 className="text-xl font-bold text-white mb-4">Sales Analytics</h3>
                 <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 h-96">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={mySalesData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                            <XAxis dataKey="name" stroke="#A0AEC0"/>
                            <YAxis stroke="#A0AEC0"/>
                            <Tooltip contentStyle={{ backgroundColor: '#1A202C', border: '1px solid #4A5568' }}/>
                            <Legend />
                            <Bar dataKey="sales" fill="#38B2AC" name="Units Sold" />
                            <Bar dataKey="revenue" fill="#4299E1" name="Revenue (PKR)" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div>
                 <h3 className="text-xl font-bold text-white mb-4">My Listings</h3>
                 <div className="overflow-x-auto bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                     <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-700">
                                <th className="p-3">Breed</th>
                                <th className="p-3">Price (PKR)</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_CATTLE_DATA.slice(0, 3).map(c => (
                                <tr key={c.id} className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                                    <td className="p-3">{c.breed}</td>
                                    <td className="p-3">{c.price.toLocaleString()}</td>
                                    <td className="p-3"><span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">Active</span></td>
                                    <td className="p-3">
                                        <button className="text-teal-400 hover:text-teal-300 mr-2"><i className="fas fa-edit"></i></button>
                                        <button className="text-red-500 hover:text-red-400"><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                     </table>
                 </div>
            </div>
        </div>
    );
}

const DashboardPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<DashboardTab>('listings');

    // Simulating a Farmer role
    const userRole = 'Farmer'; 

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-white mb-8">My Dashboard</h1>
            <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2 border-b border-gray-700">
                    <button 
                        className={`px-4 py-2 font-medium ${activeTab === 'listings' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-gray-400'}`}
                        onClick={() => setActiveTab('listings')}>
                        Overview
                    </button>
                    <button 
                         className={`px-4 py-2 font-medium ${activeTab === 'analytics' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-gray-400'}`}
                         onClick={() => setActiveTab('analytics')}>
                        My Listings
                    </button>
                </div>
                 <button className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-500 transition-colors duration-300 flex items-center gap-2">
                    <i className="fas fa-plus-circle"></i> Add New Cattle
                </button>
            </div>
            
            <div className="bg-gray-800/30 p-8 rounded-2xl shadow-lg border border-gray-700/30">
                {userRole === 'Farmer' && <FarmerDashboard />}
                {/* Add other role dashboards here */}
            </div>
        </div>
    );
};

export default DashboardPage;
