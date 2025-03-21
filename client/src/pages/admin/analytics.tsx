import { useQuery } from "@tanstack/react-query";
import AdminSidebar from "@/components/layout/admin-sidebar";
import StatsCard from "@/components/admin/stats-card";
import { Loader2 } from "lucide-react";
import { BarChart, ShoppingBag, Users, Box, DollarSign } from "lucide-react";

type AnalyticsData = {
  totalSales: number;
  totalOrders: number;
  totalProducts: number;
  totalCustomers: number;
  salesByCategory: { category: string; sales: number }[];
  salesByMonth: { month: string; sales: number }[];
};

export default function AdminAnalytics() {
  const { 
    data: analytics,
    isLoading
  } = useQuery<AnalyticsData>({
    queryKey: ["/api/admin/analytics"],
  });

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <AdminSidebar />
      
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {isLoading ? (
                <div className="flex justify-center items-center h-96">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                </div>
              ) : analytics ? (
                <>
                  {/* Analytics Stats */}
                  <div className="mt-6">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                      <StatsCard 
                        title="Total Sales" 
                        value={`$${analytics.totalSales.toFixed(2)}`} 
                        icon={<DollarSign className="text-white" />} 
                        linkText="View all sales" 
                        linkUrl="/admin/sales" 
                      />
                      <StatsCard 
                        title="Total Customers" 
                        value={analytics.totalCustomers.toString()} 
                        icon={<Users className="text-white" />} 
                        linkText="View all customers" 
                        linkUrl="/admin/customers" 
                      />
                      <StatsCard 
                        title="Total Orders" 
                        value={analytics.totalOrders.toString()} 
                        icon={<ShoppingBag className="text-white" />} 
                        linkText="View all orders" 
                        linkUrl="/admin/orders" 
                      />
                      <StatsCard 
                        title="Total Products" 
                        value={analytics.totalProducts.toString()} 
                        icon={<Box className="text-white" />} 
                        linkText="View all products" 
                        linkUrl="/admin/products" 
                      />
                    </div>
                  </div>

                  {/* Sales by Category */}
                  <h2 className="mt-8 text-lg font-medium text-gray-900">Sales by Category</h2>
                  <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {analytics.salesByCategory.map((category) => (
                      <StatsCard 
                        key={category.category}
                        title={category.category} 
                        value={`$${category.sales.toFixed(2)}`} 
                        icon={<BarChart className="text-white" />} 
                        linkText="View details" 
                        linkUrl={`/admin/sales/category/${category.category}`} 
                      />
                    ))}
                  </div>

                  {/* Sales by Month */}
                  <h2 className="mt-8 text-lg font-medium text-gray-900">Sales by Month</h2>
                  <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {analytics.salesByMonth.map((month) => (
                      <StatsCard 
                        key={month.month}
                        title={month.month} 
                        value={`$${month.sales.toFixed(2)}`} 
                        icon={<BarChart className="text-white" />} 
                        linkText="View details" 
                        linkUrl={`/admin/sales/month/${month.month}`} 
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Could not load analytics data. Please try again later.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
