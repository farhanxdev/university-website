import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  ArrowRight, 
  Minimize2 
} from 'lucide-react'
import { getAIResponse } from '../../services/aiChatService'

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Hello! I am Lincoln AI Assistant 🎓. How can I help you with courses, admissions, or fees today?',
      quickReplies: ['What IT courses are available?', 'How to apply?', 'Tuition fees & costs', 'Scholarships']
    }
  ])

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen, isTyping])

  const handleSend = (userText) => {
    const textToSend = typeof userText === 'string' ? userText : inputMessage
    if (!textToSend.trim()) return

    // Add user message
    const userMsg = { sender: 'user', text: textToSend }
    setMessages((prev) => [...prev, userMsg])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI thinking delay for realistic UX
    setTimeout(() => {
      const aiReplyData = getAIResponse(textToSend)
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: aiReplyData.text,
          courses: aiReplyData.courses,
          steps: aiReplyData.steps,
          suggestion: aiReplyData.suggestion,
          link: aiReplyData.link,
          linkText: aiReplyData.linkText,
        }
      ])
      setIsTyping(false)
    }, 600)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2 bg-lincoln hover:bg-lincoln-dark text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-red-500/40 hover:scale-105 transition-all duration-200"
          aria-label="Open AI Chatbot"
        >
          <div className="relative">
            <Bot className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-white rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>
          <span className="hidden sm:inline-block font-semibold text-sm">Chat with AI</span>
        </button>
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="w-[90vw] sm:w-96 max-h-[580px] h-[540px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-lincoln rounded-xl flex items-center justify-center text-white shadow">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm text-white">Lincoln AI Assistant</h3>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  <span>Online • Admissions Help</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50 text-xs sm:text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-lg bg-lincoln text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[80%] space-y-2`}>
                  <div
                    className={`p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-lincoln text-white rounded-br-none shadow-sm'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="leading-relaxed">{msg.text}</p>
                  </div>

                  {/* Course links if returned */}
                  {msg.courses && msg.courses.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      {msg.courses.map((c) => (
                        <Link
                          key={c.id}
                          to={`/programs/${c.id}`}
                          onClick={() => setIsOpen(false)}
                          className="block bg-white p-2.5 rounded-xl border border-red-100 hover:border-red-300 hover:shadow-sm transition-all"
                        >
                          <div className="font-semibold text-xs text-slate-900 line-clamp-1">{c.title}</div>
                          <div className="text-[11px] text-lincoln font-medium mt-0.5 flex justify-between items-center">
                            <span>{c.fee}</span>
                            <span className="flex items-center gap-0.5 underline">View Details <ArrowRight className="w-3 h-3" /></span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Steps bullet points if returned */}
                  {msg.steps && (
                    <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1 text-slate-600">
                      {msg.steps.map((st, i) => (
                        <div key={i} className="text-xs">{st}</div>
                      ))}
                    </div>
                  )}

                  {/* Direct page link button */}
                  {msg.link && (
                    <Link
                      to={msg.link}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-lincoln font-semibold text-xs px-3 py-1.5 rounded-lg border border-red-200 transition-colors"
                    >
                      <span>{msg.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}

                  {/* Suggestion text */}
                  {msg.suggestion && (
                    <p className="text-[11px] text-slate-500 italic bg-white/70 p-2 rounded-lg border border-slate-100">
                      💡 {msg.suggestion}
                    </p>
                  )}

                  {/* Quick Replies chips */}
                  {msg.quickReplies && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.quickReplies.map((chip, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(chip)}
                          className="bg-white hover:bg-red-50 hover:text-lincoln text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-full border border-slate-200 transition-colors"
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-center text-slate-400 text-xs">
                <div className="w-7 h-7 rounded-lg bg-lincoln text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white p-2.5 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="p-3 bg-white border-t border-slate-200 flex gap-2 items-center"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about courses, fees, admission..."
              className="flex-1 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="bg-lincoln hover:bg-lincoln-dark disabled:opacity-40 text-white p-2 rounded-xl shadow transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  )
}
