import React from 'react';
import { useMessages } from '@/hooks/useMessages';
import { Message } from '@/lib/types';

interface MessageProps {
  m: Message;
}

const MessageComponent: React.FC<MessageProps> = ({ m }) => {
  const { formatMessage } = useMessages();

  return (
    <div className="flex flex-col p-3 border-b">
      <p className="text-sm text-gray-600">{formatMessage(m)}</p>
      <span className="text-xs text-gray-400 self-end mt-1">{new Date(m.timestamp).toLocaleString()}</span>
    </div>
  );
};

export default MessageComponent;