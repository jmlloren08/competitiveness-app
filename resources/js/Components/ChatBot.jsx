import React, { useState } from 'react';
import axios from 'axios';

export default function ChatBot() {

    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userMessage, setUserMessage] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    }

    const sendMessage = async () => {
        if (userMessage.trim() === '') return;
        // show user message
        const newMessages = [...messages, { text: userMessage, sender: 'user' }];
        setMessages(newMessages);
        setUserMessage('');
        // send message to chatgpt-like api
        try {
            const response = await axios.post('/chat', { message: userMessage });
            const botResponse = response.data.response;

            // add bot's response to the chat
            setMessages((prevMessage) => [...prevMessage, { text: botResponse, sender: 'bot' }]);
        } catch (error) {
            console.error('Error sending message: ', error);
            const errorMsg = error.response?.data?.error || "Failed to get response from OpenAI.";
            setMessages((prevMessage) => [...prevMessage, { text: errorMsg, sender: 'bot' }]);
        }
    }

    return (
        <div className="fixed bottom-20 right-8">
            {isOpen ? (
                <div className="bg-white shadow-lg rounded-lg p-4 w-72">
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold">Chat with Us</h4>
                        <button onClick={toggleChat}>&#x2715;</button>
                    </div>
                    <div className="chat-window h-48 overflow-y-scroll mb-2">
                        {messages.map((message, index) => (
                            <div key={index} className={`mb-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                <p className={`${message.sender === 'user' ? 'bg-blue-200' : 'bg-gray-200'} p-2 rounded`}>
                                    {message.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex">
                        <input
                            type='text'
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            className='border p-2 rounded flex-grow mr-2'
                            placeholder='Type a message...'
                        />
                        <button onClick={sendMessage} className='bg-blue-500 text-white p-2 rounded'>Send</button>
                    </div>
                </div>
            ) : (
                <button onClick={toggleChat} className='bg-blue-500 text-white p-2 rounded-full shadow-lg'>
                    💬
                </button>
            )}
        </div>
    );
}