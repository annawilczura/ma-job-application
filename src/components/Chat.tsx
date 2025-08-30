'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
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
    <Card
      className='flex flex-col grow md:h-[calc(100vh-400px)] w-full max-w-4xl mx-auto'
      pt={{
        body: { className: 'flex flex-col flex-1 p-0 h-full' },
        content: { className: 'flex flex-col flex-1 p-0 max-h-full' },
      }}
    >
      <div className='flex-1 p-6 min-h-0 overflow-y-auto'>
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
                    ? 'bg-primary text-primary-color-text'
                    : 'bg-surface-200 text-text-color'
                }`}
              >
                <p className='whitespace-pre-wrap'>{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className='flex justify-start'>
              <div className='bg-surface-200 text-text-color px-4 py-2 rounded-lg'>
                <p>...</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className='p-4 border-t border-surface-border'>
        <form onSubmit={handleSubmit} className='flex gap-4'>
          <InputText
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type your message...'
            className='flex-1'
            disabled={isLoading}
          />
          <Button
            type='submit'
            icon='pi pi-send'
            disabled={isLoading || !input.trim()}
          />
        </form>
      </div>
    </Card>
  );
}
