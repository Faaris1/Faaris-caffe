import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: 'Soo Dhawow! Welcome to Faaris Café. How can I help you today? I can recommend drinks, answer menu questions, or provide directions.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Build context from previous messages
      const chatHistory = messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n');
      const prompt = `
        You are a friendly, helpful AI assistant for Faaris Café in Mogadishu, Somalia.
        Tone: Warm, modern, inviting. Mix English with simple Somali phrases occasionally (like "Soo Dhawow" for welcome, "Mahadsanid" for thank you).
        Context: Faaris Café is a premium coffee shop on Maka Al Mukarama Road. Open Sat-Thu 7am-11pm, Fri 4pm-11pm.
        Menu highlights: Somali Spiced Latte, Classic Macchiato, Mocha Dark, Iced Caramel Macchiato, Cold Brew, Pistachio Croissant, Date & Walnut Cake.
        
        Chat History:
        ${chatHistory}
        User: ${userMsg.content}
        Assistant:
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.text || 'Sorry, I am having trouble connecting right now. Please try again later.'
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'assistant', content: 'Oops! Something went wrong. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-gold text-coffee rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-coffee/10"
          >
            {/* Header */}
            <div className="bg-coffee text-cream p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-gold" />
                <span className="font-semibold">Caawiyaha FAARIS</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cream/30">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-gold text-coffee' : 'bg-coffee text-cream'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div
                    className={`p-3 rounded-2xl max-w-[75%] text-sm ${
                      msg.role === 'user'
                        ? 'bg-gold text-coffee rounded-tr-none'
                        : 'bg-white text-coffee border border-coffee/10 shadow-sm rounded-tl-none'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-coffee text-cream flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="p-3 rounded-2xl bg-white text-coffee border border-coffee/10 shadow-sm rounded-tl-none flex gap-1 items-center">
                    <div className="w-2 h-2 bg-coffee/40 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-coffee/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-coffee/40 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-coffee/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our menu..."
                  className="flex-1 px-4 py-2 bg-cream/50 border border-coffee/20 rounded-full text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 bg-coffee text-cream rounded-full flex items-center justify-center hover:bg-gold hover:text-coffee transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
