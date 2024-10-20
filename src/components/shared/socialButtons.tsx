import React from "react";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import EmailButton from "./EmailButton";

interface SocialButtonProps {
  href: string;
  ariaLabel: string;
  icon: React.ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  href,
  ariaLabel,
  icon,
}) => (
  <Link
    href={href}
    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-p text-white hover:bg-opacity-80 transition-colors duration-200 mr-4"
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </Link>
);

export const LinkedInButton: React.FC = () => (
  <SocialButton
    href="https://www.linkedin.com/company/drovide-pivide/"
    ariaLabel="Visit our LinkedIn"
    icon={<FaLinkedin className="w-6 h-6" />}
  />
);

export const InstagramButton: React.FC = () => (
  <SocialButton
    href="https://www.instagram.com/drovide.pivide/" 
    ariaLabel="Visit our Instagram"
    icon={<FaInstagram className="w-6 h-6" />}
  />
);

const SocialButtons: React.FC = () => (
  <div className="flex justify-between gap-4  ">
    <EmailButton
      email="drovidepivide@gmail.com"
      subject="Hi I would like to know more about Drovide Pivide Service"
      body="hi..."
    />
    <LinkedInButton />
    <InstagramButton />
  </div>
);

export default SocialButtons;
