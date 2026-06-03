import React from 'react'

function HomePageFooter() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-5 py-12">
        <img
          src="/bizsphere_icon.png"
          alt="BizSphere"
          className="h-20 object-contain"
        />

        <p className="mt-4 text-text-secondary max-w-md">
          BizSphere connects customers with trusted service providers and helps
          businesses grow through a modern digital marketplace.
        </p>

        <div className="mt-8 text-sm text-text-secondary">
          © {new Date().getFullYear()} BizSphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default HomePageFooter