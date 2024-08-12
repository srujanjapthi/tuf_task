import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} Flashcard Tool. All rights reserved.</p>
        <div className="mt-2">
          <a
            href="/privacy"
            className="text-white hover:text-gray-200 mx-2 text-sm"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-white hover:text-gray-200 mx-2 text-sm"
          >
            Terms of Service
          </a>
          <a
            href="/contact"
            className="text-white hover:text-gray-200 mx-2 text-sm"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
