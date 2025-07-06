'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MessageCircle, User, Bot, Search } from 'lucide-react'
import Image from 'next/image'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  isTyping?: boolean
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isTypingAnimation, setIsTypingAnimation] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const animatedMessages = useRef(new Set<string>())
  const hasInitialMessage = useRef(false)

  const scrollToBottom = useCallback(() => {
    if (chatContainerRef.current) {
      const container = chatContainerRef.current
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [])

  // Add initial welcome message with animation
  useEffect(() => {
    if (!hasInitialMessage.current) {
      hasInitialMessage.current = true
      const welcomeMessage: Message = {
        id: 'welcome-1',
        text: "Hi! I'm Soong Shao Zhi's AI assistant powered by Gemini. Ask me anything about my education, skills, projects, or experience! 🚀",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [])

  // Scroll to bottom whenever messages change
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToBottom()
    }, 100)
    return () => clearTimeout(timer)
  }, [messages.length, scrollToBottom])

  const handleSendMessage = useCallback(async (forcedMessage?: string) => {
    const currentMessage = forcedMessage || inputMessage
    if (!currentMessage.trim()) return
    
    setInputMessage('')
    setIsLoading(true)

    try {
      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        text: currentMessage,
        sender: 'user',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, userMessage])

      // Get AI response
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: currentMessage })
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()

      // Add AI message
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm not working at the moment. Please connect with Shao Zhi directly on LinkedIn: https://www.linkedin.com/in/soong-shao-zhi/",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }, [inputMessage])

  const handleQuickQuestion = useCallback((question: string) => {
    if (!isLoading && !isTypingAnimation) {
      handleSendMessage(question)
    }
  }, [isLoading, isTypingAnimation, handleSendMessage])

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }, [handleSendMessage])

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
              className="h-[32rem] overflow-y-auto mb-6 space-y-4 pr-2 scrollbar-thin scrollbar-thumb-[#666666] scrollbar-track-transparent scroll-smooth"
            >
              <AnimatePresence mode="popLayout">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <MessageComponent 
                      message={message} 
                      scrollToBottom={scrollToBottom}
                      animatedMessages={animatedMessages}
                      setIsTypingAnimation={setIsTypingAnimation}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loading Bubble */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 bg-[#0D9488]">
                      <Image
                        src="/images/profilephoto.jpeg"
                        alt="Shao Zhi AI"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-[#0D9488] text-white p-4 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask me anything about Shao Zhi..."
                disabled={isLoading || isTypingAnimation}
                className="w-full bg-[#2C2C2E] border border-[#666666] rounded-2xl px-4 py-3 pr-14 text-[#E5E5E7] placeholder-[#A1A1A6] focus:outline-none focus:border-[#0A84FF] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isLoading || isTypingAnimation}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#0A84FF] hover:bg-[#0A84FF]/90 disabled:bg-[#666666] disabled:cursor-not-allowed text-white p-2.5 rounded-lg transition-colors duration-200"
              >
                <Send size={16} className="text-white" />
              </motion.button>
            </div>

            {/* Quick Questions */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "Tell me about yourself",
                  "Tell me about your education",
                  "What projects have you worked on?",
                  "What are your technical skills?",
                  "Tell me about your hackathon experience"
                ].map((question) => (
                  <button
                    key={question}
                    onClick={() => handleQuickQuestion(question)}
                    disabled={isLoading || isTypingAnimation}
                    className="bg-[#2C2C2E] hover:bg-[#3A3A3C] disabled:bg-[#666666] disabled:cursor-not-allowed text-[#E5E5E7] px-4 py-2 rounded-full text-sm transition-colors duration-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Separate MessageComponent to avoid hook issues
const MessageComponent = ({ 
  message, 
  scrollToBottom, 
  animatedMessages, 
  setIsTypingAnimation 
}: { 
  message: Message
  scrollToBottom: () => void
  animatedMessages: React.MutableRefObject<Set<string>>
  setIsTypingAnimation: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const animationRef = useRef<NodeJS.Timeout | null>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    // Only animate if it's a bot message, hasn't been animated before, and this component hasn't animated
    if (message.sender === 'bot' && !animatedMessages.current.has(message.id) && !hasAnimated.current) {
      hasAnimated.current = true
      animatedMessages.current.add(message.id)
      setIsTyping(true)
      setIsTypingAnimation(true)
      
      let currentIndex = 0
      const text = message.text

      const typeNextCharacter = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
          scrollToBottom()
          animationRef.current = setTimeout(typeNextCharacter, 30) // Slightly slower for better reading
        } else {
          setIsTyping(false)
          setIsTypingAnimation(false)
          scrollToBottom()
        }
      }

      // Start typing after a small delay to ensure smooth transition from loading
      const startDelay = setTimeout(() => {
        typeNextCharacter()
      }, 100)

      return () => {
        if (animationRef.current) {
          clearTimeout(animationRef.current)
        }
        clearTimeout(startDelay)
        setDisplayedText(text)
        setIsTyping(false)
        setIsTypingAnimation(false)
      }
    } else {
      // For messages that have been animated or user messages, show full text immediately
      setDisplayedText(message.text)
    }
  }, [message.id]) // Only depend on message.id to prevent re-running

  const messageStyles = message.sender === 'user' 
    ? {
        container: 'flex-row-reverse space-x-reverse ml-auto',
        avatar: 'bg-[#0A84FF]',
        bubble: 'bg-[#0A84FF] text-white'
      }
    : {
        container: '',
        avatar: 'bg-[#0D9488]',
        bubble: 'bg-[#0D9488] text-white'
      }

  return (
    <div className="flex items-start space-x-3 w-full">
      <div className={`flex items-start space-x-3 max-w-sm md:max-w-lg lg:max-w-xl ${messageStyles.container}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 ${messageStyles.avatar}`}>
          {message.sender === 'user' ? (
            <User size={16} className="text-white" />
          ) : (
            <Image
              src="/images/profilephoto.jpeg"
              alt="Shao Zhi AI"
              width={32}
              height={32}
              className="object-cover"
            />
          )}
        </div>
        <div className={`rounded-2xl p-4 ${messageStyles.bubble}`}>
          <p className="whitespace-pre-wrap">
            {displayedText}
            {isTyping && (
              <span className="inline-block w-1 h-4 ml-1 bg-white animate-pulse" />
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Chat 