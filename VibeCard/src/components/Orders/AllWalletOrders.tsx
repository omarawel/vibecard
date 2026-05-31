import React from 'react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useWallets } from '@/hooks/useWallets';
import { WalletOrder } from '@/lib/types';

const AllWalletOrders: React.FC = () => {
  useDocumentTitle('All Wallet Orders');
  const { walletOrders, getWalletOrderTotal } = useWallets();

  return (
    <div className="w-full h-auto bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-semibold mb-4">All Wallet Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {walletOrders.length > 0 ? (
              walletOrders.map((order: WalletOrder) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${getWalletOrderTotal(order).toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{order.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(order.date).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">No wallet orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllWalletOrders;