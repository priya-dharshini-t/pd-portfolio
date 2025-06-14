// src/components/StarryBackground.js
import React from 'react';

const stars = Array.from({ length: 200 });
const codeSnippets = [
  'class', 'object', '[]', '!', '%', '*', '#', '$', '^', '&', '<>',
  'for i in range():', 'def', 'c=a*b', 'x++', 'a>>', 'const', 'let', '{}',
  '=>', 'function', '</>', '() => {}', 'if', 'else', 'return', 'import',
  'console.log()', 'try', 'catch', 'await', 'async', 'new', 'lambda',
  'public', 'static', 'main()', 'None', 'true', 'false', '==', '===',
  '!=', '<=', '>=', 'map()', 'switch'
];

export default function StarryBackground() {
  const isDarkMode = document.documentElement.classList.contains('dark');

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Stars */}
      {stars.map((_, i) => {
        const style = {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${5 + Math.random() * 5}s`,
        };
        return (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-white opacity-70 animate-twinkle"
            style={style}
          />
        );
      })}

      {/* Code Snippets */}
      {Array.from({ length: 50 }).map((_, i) => {
        const style = {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          fontSize: `${Math.random() * 16 + 12}px`,
          color: isDarkMode ? 'black' : 'white',
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${6 + Math.random() * 6}s`,
          position: 'absolute',
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          fontFamily: 'monospace',
          filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.3))',
        };
        const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        return (
          <span key={`code-${i}`} style={style} className="animate-float">
            {text}
          </span>
        );
      })}
    </div>
  );
}
