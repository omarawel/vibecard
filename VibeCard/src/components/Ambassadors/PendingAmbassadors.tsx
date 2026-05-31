import React from 'react';
import { useAmbassadors } from '@/hooks/useAmbassadors';
import { Ambassador } from '@/lib/types';
import Avatar from '@/assets/icons/avatar.png';

interface PendingAmbassadorsProps {
  pending: Ambassador[];
}

const PendingAmbassadors: React.FC<PendingAmbassadorsProps> = ({ pending }) => {
  const { getAmbassadorName } = useAmbassadors();

  return (
    <div className="w-full h-auto bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Pending Ambassadors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pending.length > 0 ? (
          pending.map((ambassador) => (
            <div key={ambassador.id} className="flex items-center space-x-3 p-2 border rounded-md">
              <img src={Avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium">{getAmbassadorName(ambassador)}</p>
                <p className="text-sm text-gray-500">{ambassador.email}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No pending ambassadors found.</p>
        )}
      </div>
    </div>
  );
};

export default PendingAmbassadors;