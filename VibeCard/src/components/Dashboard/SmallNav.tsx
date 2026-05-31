import React from 'react';
import { useMessages } from '@/hooks/useMessages';
import UserAvatar from '@/assets/icons/user.png';

const SmallNav: React.FC = () => {
  const { unseenMessagesCount } = useMessages();

  return (
    <nav className="w-full h-16 bg-white shadow-md flex items-center justify-between px-4 md:hidden">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.5-1.5a2 2 0 01-.5-1.5v-4.5a4.5 4.5 0 00-4.5-4.5h-2.5a2.5 2.5 0 01-5 0h-2.5a4.5 4.5 0 00-4.5 4.5v4.5a2.5 2.5 0 01-.5 1.5L3 17h5"
            />
          </svg>
          {unseenMessagesCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
              {unseenMessagesCount}
            </span>
          )}
        </div>
        <img src={UserAvatar} alt="User Avatar" className="w-10 h-10 rounded-full cursor-pointer" />
      </div>
    </nav>
  );
};

export default SmallNav;