'use client';

import { SiGithub, SiInstagram, SiLinkedin } from '@icons-pack/react-simple-icons';

import { track } from '@vercel/analytics';

export default function Footer() {
  return (
    <div className="flex h-[5%] items-center justify-center gap-2 bg-background p-2">
      <span className="text-center text-xs font-bold text-foreground">
        Desenvolvido por Lucas Guidi
      </span>
      <div className="flex items-center gap-2 text-foreground">
        <a
          href="https://www.instagram.com/lucasrguidi/"
          target="_blank"
          onClick={() => {
            track('click-instagram');
          }}
        >
          <SiInstagram size={16} className="cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/lucasrguidi/"
          target="_blank"
          onClick={() => {
            track('click-linkedin');
          }}
        >
          <SiLinkedin size={16} className="cursor-pointer" />
        </a>
        <a
          href="https://github.com/lucasrguidi"
          target="_blank"
          onClick={() => {
            track('click-github');
          }}
        >
          <SiGithub size={16} className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
}
