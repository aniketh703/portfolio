import React, { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    document.title = 'Blog | Aniketh Vustepalle';
    window.location.href = 'https://aniketh-blog.appwrite.network/';
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-[#111] flex items-center justify-center">
      <p className="font-sans text-sm text-stone-400 dark:text-[#555] tracking-tight">
        Redirecting to blog…
      </p>
    </div>
  );
};

export default Blog;
