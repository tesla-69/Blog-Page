interface HeroContentProps {
  onScrollClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const HeroContent = ({ onScrollClick }: HeroContentProps) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
        <span className="block">Welcome to Our Blog</span>
        <span className="block text-indigo-400 mt-3">Discover Amazing Stories</span>
      </h1>
      <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl">
        Explore the latest insights, tutorials, and stories from our team of writers and contributors.
      </p>
      <div className="mt-10">
        <button
          onClick={onScrollClick}
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
        >
          Read Latest Posts
        </button>
      </div>
    </div>
  );
}; 