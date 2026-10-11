import React from 'react';

// Turns phone numbers, emails and web addresses inside plain text into tappable links.
const PATTERN = /(https?:\/\/[^\s,]+|www\.[^\s,]+|[a-z0-9-]+\.(?:org|com|gov|net)(?:\/[^\s,]*)?|[\w.+-]+@[\w-]+\.[\w.]+|(?:1-)?(?:\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]\d{4}|\b988\b)/gi;

const trimEnd = (text) => text.replace(/[.)]+$/, '');

function toLink(match, key) {
  const text = trimEnd(match);
  const rest = match.slice(text.length);
  let href;
  if (text.includes('@')) href = `mailto:${text}`;
  else if (/^[\d(]/.test(text)) href = `tel:${text.replace(/[^\d]/g, '')}`;
  else href = /^https?:/i.test(text) ? text : `https://${text}`;

  const external = href.startsWith('http');
  return (
    <React.Fragment key={key}>
      <a href={href} className="inline-link"
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {text}
      </a>
      {rest}
    </React.Fragment>
  );
}

export default function Linkify({ text }) {
  if (!text) return null;
  return text.split(PATTERN).map((part, i) => (i % 2 === 1 ? toLink(part, i) : part));
}
