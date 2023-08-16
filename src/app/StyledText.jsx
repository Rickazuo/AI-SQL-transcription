import React from 'react';

const StyledText = ({ text }) => {
  const tokenize = (text) => {
    const tokens = text.split(/("[^"]*")|([\+\-\*\/=])|([A-Z]+)|\bCOUNT\b/g);
    return tokens.filter(token => token); // Remove empty strings from the array
  };

  const formatToken = (token) => {
    if (/^"[^"]*"$/.test(token)) {
      return `<span class="neonGreen">${token}</span>`;
    }
    if (/^[\+\-\*\/=]$/.test(token)) {
      return `<span class="pistachio">${token}</span>`;
    }
    if (/^[A-Z]+$/.test(token) && token !== 'COUNT') {
      return `<span class="cottonCandy">${token}</span>`;
    }
    if (token === 'COUNT') {
      return `<span class="gum">${token}</span>`;
    }
    return token;
  };

  const tokens = tokenize(text);
  const formattedTokens = tokens.map(formatToken);

  return <div className="styled-text" dangerouslySetInnerHTML={{ __html: formattedTokens.join('') }} />;
};

export default StyledText;
