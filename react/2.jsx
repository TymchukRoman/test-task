import React, { useState } from 'react';

const CensoredText = ({ badWords, children }) => {
    const [revealedWords, setRevealedWords] = useState(new Set());

    const toggleReveal = (word) => {
        setRevealedWords(prev => {
            const newSet = new Set(prev);
            if (newSet.has(word)) {
                newSet.delete(word);
            } else {
                newSet.add(word);
            }
            return newSet;
        });
    };

    const censorText = (text) => {
        return text.split(/\s+/).map(word => {
            const cleanWord = word.replace(/[^\w]/g, '');
            if (badWords.includes(cleanWord.toLowerCase()) && !revealedWords.has(cleanWord)) {
                const censored = '*'.repeat(cleanWord.length);
                return word.replace(cleanWord, censored);
            }
            return word;
        }).join(' ');
    };

    return <div>
        {censorText(children).split(/\s+/).map((word, index) => (
            <span key={index} onClick={() => toggleReveal(word.replace(/[^\w]/g, ''))} style={{ cursor: 'pointer', marginRight: '5px' }}>
                {word}
            </span>
        ))}
    </div>;
}

export default CensoredText;