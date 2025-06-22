import React, { useState } from 'react';
import { Calendar, Download, TrendingUp, DollarSign, Package, Users } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const salesReportData = [
  { month: 'Jan', sales: 45000, profit: 18000, orders: 120 },
  { month: 'Feb', sales: 52000, profit: 21000, orders: 145 },
  { month: 'Mar', sales: 48000, profit: 19200, orders: 135 },
  { month: 'Apr', sales: 61000, profit: 24400, orders: 168 },
  { month: 'May', sales: 55000, profit: 22000, orders: 152 },
  { month: 'Jun', sales: 67000, profit: 26800, orders: 184 },
];

const categoryData = [
  { name: 'Pain Relief', value: 35, sales: 24500 },
  { name: 'Antibiotics', value: 25, sales: 17500 },
  { name: 'Vitamins', value: 20, sales: 14000 },
  { name: 'Medical Devices', value: 12, sales: 8400 },
  { name: 'Other', value: 8, sales: 5600 },
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

const topProducts = [
  { name: 'Paracetamol 500mg', sales: 1250, revenue: 15625 },
  { name: 'Amoxicillin 250mg', sales: 980, revenue: 24500 },
  { name: 'Ibuprofen 400mg', sales: 875, revenue: 13781 },
  { name: 'Vitamin C', sales: 750, revenue: 16500 },
  { name: 'Omeprazole 20mg', sales: 650, revenue: 19500 },
];

export default function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [reportType, setReportType] = useState('sales');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
        <div className="flex space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Report Type Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'sales', name: 'Sales Report', icon: DollarSign },
            { id: 'inventory', name: 'Inventory Report', icon: Package },
            { id: 'customers', name: 'Customer Report', icon: Users },
            { id: 'profit', name: 'Profit Analysis', icon: TrendingUp },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setReportType(tab.id)}
              className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                reportType === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {reportType === 'sales' && (
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Sales</p>
                  <p className="text-2xl font-bold text-gray-900">$328,000</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +15.3% vs last period
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-900">904</p>
                  <p className="text-sm text-blue-600 mt-1">+8.2% vs last period</p>
                </div>
                <Package className="h-8 w-8 text-blue-600" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
                  <p className="text-2xl font-bold text-gray-900">$362.83</p>
                  <p className="text-sm text-purple-600 mt-1">+6.5% vs last period</p>
                </div>
                <div className="text-purple-600 text-2xl font-bold">$</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Gross Profit</p>
                  <p className="text-2xl font-bold text-gray-900">$131,200</p>
                  <p className="text-sm text-orange-600 mt-1">40.0% margin</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </div>

          {/* Sales Trend Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Sales Trend</h3>
              <div className="flex space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
                  <span>Sales</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                  <span>Profit</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={salesReportData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="profit" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Category Breakdown */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales by Category</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Top Products */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Selling Products</h3>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <span className="text-sm font-bold text-gray-600">#{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-500">{product.sales} units sold</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">${product.revenue.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {reportType === 'inventory' && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Inventory Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2,847</div>
              <div className="text-sm text-gray-600">Total Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">23</div>
              <div className="text-sm text-gray-600">Low Stock Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">$284,500</div>
              <div className="text-sm text-gray-600">Total Inventory Value</div>
            </div>
          </div>
        </div>
      )}

      {reportType === 'customers' && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Analytics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">1,428</div>
              <div className="text-sm text-gray-600">Active Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">89</div>
              <div className="text-sm text-gray-600">New This Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">$229.50</div>
              <div className="text-sm text-gray-600">Avg Customer Value</div>
            </div>
          </div>
        </div>
      )}

      {reportType === 'profit' && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Profit Analysis</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={salesReportData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="profit" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}