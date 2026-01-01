import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [greeting, setGreeting] = useState('Hello')
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleGreetingChange = () => {
    const greetings = ['Hello', 'Hola', 'Bonjour', 'こんにちは', '안녕하세요', 'Ciao']
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
    setGreeting(randomGreeting)
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Hello World</h1>
        <p className="subtitle">Welcome to our beautiful web application</p>
      </header>
      
      <main className="main-content">
        <div className={`greeting-container ${isVisible ? 'visible' : ''}`}>
          <h2 
            className={`greeting ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleGreetingChange}
          >
            {greeting} World!
          </h2>
          <p className="description">
            This is a modern, interactive "Hello World" application built with React and Vite.
          </p>
        </div>
        
        <div className="features">
          <div className="feature-card">
            <h3>Modern Design</h3>
            <p>Beautiful UI with smooth animations and transitions</p>
          </div>
          <div className="feature-card">
            <h3>Interactive Elements</h3>
            <p>Hover effects, click interactions, and dynamic content</p>
          </div>
          <div className="feature-card">
            <h3>Responsive Layout</h3>
            <p>Works perfectly on all device sizes</p>
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <p>Created with React, Vite, and modern web technologies</p>
      </footer>
    </div>
  )
}

export default App
