'use client';

import { useState, useRef, useEffect } from 'react';
import { submitMessage } from '@/app/actions';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const result = await submitMessage(currentInput);

      if (result.error) {
        throw new Error(result.error);
      }

      const botMessage: Message = {
        sender: 'bot',
        text:
          result.text || "Sorry, I couldn't get a response. Please try again.",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Failed to get chat response:', error);
      const errorMessage: Message = {
        sender: 'bot',
        text: "Sorry, I'm having trouble connecting. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex flex-col h-[calc(100vh-400px)] w-full max-w-4xl mx-auto bg-white/10 rounded-xl shadow-lg'>
      <div className='flex-1 p-6 overflow-y-auto'>
        <div className='flex flex-col gap-4'>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${
                  msg.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-700 text-gray-200'
                }`}
              >
                <p className='whitespace-pre-wrap'>{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className='flex justify-start'>
              <div className='bg-gray-700 text-gray-200 px-4 py-2 rounded-lg'>
                <p>...</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className='p-4 border-t border-white/20'>
        <form onSubmit={handleSubmit} className='flex gap-4'>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type your message...'
            className='flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            disabled={isLoading}
          />
          <button
            type='submit'
            className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed'
            disabled={isLoading || !input.trim()}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
