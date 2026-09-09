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
  RotateCcw,
  ExternalLink
} from 'lucide-react'
import { getAIResponse } from '../../services/aiChatService'

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Hello! I am your Lincoln Admissions AI Assistant 🎓. Ask me anything about degrees, tuition fees, scholarships, or how to apply!',
      quickReplies: ['What IT courses do you have?', 'How to apply online?', 'Tuition fees & costs', 'Scholarships info']
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

  const handleReset = () => {
    setMessages([
      {
        sender: 'ai',
        text: 'Chat history cleared. How can I help you today?',
        quickReplies: ['What IT courses do you have?', 'How to apply online?', 'Tuition fees & costs', 'Scholarships info']
      }
    ])
  }

  const handleSend = (userText) => {
    const textToSend = typeof userText === 'string' ? userText : inputMessage
    if (!textToSend.trim()) return

    const userMsg = { sender: 'user', text: textToSend }
    setMessages((prev) => [...prev, userMsg])
    setInputMessage('')
    setIsTyping(true)

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
      {/* Floating Trigger Button with Ping Indicator */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 bg-gradient-to-r from-lincoln to-red-700 hover:from-red-700 hover:to-red-800 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-red-600/40 hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Open Lincoln AI Chatbot"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>
          <span className="hidden sm:inline-block font-bold text-sm tracking-wide">
            Chat with AI
          </span>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[400px] max-h-[620px] h-[580px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="bg-slate-950 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-lincoln to-red-800 rounded-2xl flex items-center justify-center text-white shadow-md">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-slate-950 rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm text-white">Lincoln Admissions AI</h3>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <p className="text-[11px] text-emerald-400 font-medium">Instant Automated Guidance</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
                title="Reset conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
                title="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 text-xs sm:text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-xl bg-lincoln text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className="max-w-[82%] space-y-2">
                  <div
                    className={`p-3.5 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-lincoln to-red-700 text-white rounded-br-none shadow-sm'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                  </div>

                  {/* Course links if returned */}
                  {msg.courses && msg.courses.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      {msg.courses.map((c) => (
                        <Link
                          key={c.id}
                          to={`/programs/${c.id}`}
                          onClick={() => setIsOpen(false)}
                          className="block bg-white p-3 rounded-2xl border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group"
                        >
                          <div className="font-bold text-xs text-slate-900 group-hover:text-lincoln transition-colors line-clamp-1">
                            {c.title}
                          </div>
                          <div className="text-[11px] text-slate-500 font-medium mt-1 flex justify-between items-center">
                            <span className="font-bold text-lincoln">{c.fee}</span>
                            <span className="flex items-center gap-1 text-slate-400 group-hover:text-lincoln">
                              View Syllabus <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Steps bullet points if returned */}
                  {msg.steps && (
                    <div className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-1.5 text-slate-700 shadow-xs">
                      {msg.steps.map((st, i) => (
                        <div key={i} className="text-xs leading-relaxed">{st}</div>
                      ))}
                    </div>
                  )}

                  {/* Direct link CTA */}
                  {msg.link && (
                    <Link
                      to={msg.link}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-lincoln font-bold text-xs px-4 py-2 rounded-xl border border-red-200 transition-colors shadow-xs"
                    >
                      <span>{msg.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}

                  {/* Suggestions note */}
                  {msg.suggestion && (
                    <p className="text-[11px] text-slate-500 italic bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
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
                          className="bg-white hover:bg-red-50 hover:text-lincoln hover:border-red-300 text-slate-700 text-[11px] font-semibold px-3 py-1.5 rounded-full border border-slate-200 transition-all shadow-xs"
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Simulated Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-center text-slate-400 text-xs">
                <div className="w-7 h-7 rounded-xl bg-lincoln text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-200 shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-lincoln rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-lincoln rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-lincoln rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Bar */}
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
              placeholder="Ask about degrees, fees, intakes..."
              className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all shadow-xs"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="bg-gradient-to-r from-lincoln to-red-700 hover:from-red-700 hover:to-red-800 disabled:opacity-30 text-white p-2.5 rounded-2xl shadow-md transition-all"
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
