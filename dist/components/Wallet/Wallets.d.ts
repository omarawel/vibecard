import React from 'react';
import { Wallet } from '@/lib/types';
interface WalletsProps {
    wallets: Wallet[];
}
declare const Wallets: React.FC<WalletsProps>;
export default Wallets;
