import { footerConfig } from '@/config/Footer';
import React from 'react';

import Container from './Container';

export default function Footer() {
  return (
    <Container className="py-8">
      <div className="flex flex-col items-center justify-center">
        <p className="text-secondary max-w-l text-center text-sm">
          <b> {footerConfig.text1} </b> <br />
          <b> {footerConfig.text2} </b> <br />
          <b>
            {' '}
            <a
              href="https://www.instagram.com/bhavesh.de5ign/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
            >
              let’s connect ↗
            </a>{' '}
          </b>
        </p>
      </div>
    </Container>
  );
}
