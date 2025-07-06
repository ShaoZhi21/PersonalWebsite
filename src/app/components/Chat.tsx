'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MessageCircle, User, Bot, Search } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Soong Shao Zhi's AI assistant powered by Gemini. Ask me anything about his education, skills, projects, or experience! 🚀",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [mounted, setMounted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isNearBottom = () => {
    const container = chatContainerRef.current
    if (!container) return false
    
    const threshold = 100 // pixels from bottom
    return container.scrollHeight - container.scrollTop - container.clientHeight < threshold
  }

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const formatTime = (date: Date) => {
    if (!mounted) return '--:--'
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const currentMessage = inputMessage
    setInputMessage('')
    setIsTyping(true)

    try {
      // Call the Gemini API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentMessage }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
        text: data.response,
      sender: 'bot',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact Shao Zhi directly at soongshaozhi@gmail.com.",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
    setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    "Tell me about your education",
    "What are your technical skills?",
    "What projects have you worked on?",
    "How can I contact you?",
    "What are your career goals?",
    "Tell me about your hackathon experience"
  ]

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question)
    setTimeout(() => {
      handleSendMessage()
    }, 100)
  }

  return (
    <section id="chat" className="section-padding bg-[#1C1C1E]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Ask Me Anything</span>
            </h2>
            <p className="text-[#E5E5E7] text-lg max-w-2xl mx-auto">
              Have questions about my experience, skills, or projects? 
              Chat with my AI assistant powered by Google Gemini to get instant answers!
            </p>
          </div>

          {/* Chat Container */}
          <div className="glass-card rounded-3xl p-8 max-w-5xl mx-auto">
            {/* Messages Area */}
            <div 
              ref={chatContainerRef}
              className="h-[32rem] overflow-y-auto mb-6 space-y-4 pr-2 scrollbar-thin scrollbar-thumb-[#666666] scrollbar-track-transparent"
            >
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-sm md:max-w-lg lg:max-w-xl ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user' 
                          ? 'bg-[#0A84FF] text-white' 
                          : 'bg-gradient-to-br from-[#0A84FF] to-[#5E9EFF] text-white'
                      }`}>
                        {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                      </div>

                      {/* Message Bubble */}
                      <div className={`p-4 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-[#0A84FF] text-white rounded-tr-md'
                          : 'bg-[#2C2C2E] border border-[#666666] text-[#E5E5E7] rounded-tl-md'
                      }`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                        <div className={`text-xs mt-2 ${
                          message.sender === 'user' 
                            ? 'text-white/70' 
                            : 'text-[#A1A1A6]'
                        }`}>
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#0A84FF] to-[#5E9EFF] rounded-full flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-[#2C2C2E] border border-[#666666] p-4 rounded-2xl rounded-tl-md">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-[#A1A1A6] rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-[#A1A1A6] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-[#A1A1A6] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-[#A1A1A6] mb-3">Quick Questions:</h4>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => handleQuickQuestion(question)}
                    className="px-3 py-2 bg-[#2C2C2E] hover:bg-[#0A84FF] text-[#E5E5E7] hover:text-white text-sm rounded-full transition-colors duration-200 border border-[#666666] hover:border-[#0A84FF]"
                  >
                    {question}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Shao Zhi..."
                  className="w-full bg-[#2C2C2E] border border-[#666666] rounded-2xl px-4 py-3 text-[#E5E5E7] placeholder-[#A1A1A6] focus:outline-none focus:border-[#0A84FF] transition-colors duration-200"
                  disabled={isTyping}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-[#0A84FF] hover:bg-[#0A84FF]/90 disabled:bg-[#666666] disabled:cursor-not-allowed text-white p-3 rounded-2xl transition-colors duration-200"
              >
                <Send size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Chat 