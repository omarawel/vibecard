import React from 'react';
import { useWallets } from '@/hooks/useWallets';
import { Wallet } from '@/lib/types';
import WalletCard from './WalletCard'; // Assuming WalletCard component exists

interface WalletsProps {
  wallets: Wallet[];
}

const Wallets: React.FC<WalletsProps> = ({ wallets }) => {
  const { getTotalWalletBalance } = useWallets();

  return (
    <div className="w-full h-auto bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Your Wallets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wallets.length > 0 ? (
          wallets.map((wal: Wallet) => (
            <WalletCard
              key={wal.id}
              wallet={wal}
            />
          ))
        ) : (
          <p>No wallets found.</p>
        )}
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <p className="text-lg font-semibold">Total Balance:</p>
        <p className="text-2xl font-bold">${getTotalWalletBalance(wallets).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Wallets;