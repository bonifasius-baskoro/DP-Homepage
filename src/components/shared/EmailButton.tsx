import React, { FC } from 'react';
import { FaEnvelope } from 'react-icons/fa';

interface EmailButtonProps {
  email: string;
  subject?: string;
  body?: string;
}

const EmailButton: FC<EmailButtonProps> = ({ email, subject = '', body = '' }) => {
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a 
      href={mailtoLink} 
      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-p text-white hover:bg-opacity-80 transition-colors duration-200"
      aria-label="Email Us"
    >
      <FaEnvelope className="w-6 h-6" />
    </a>
  );
};

export default EmailButton;