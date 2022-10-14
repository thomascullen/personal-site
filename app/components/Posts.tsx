function Post({ children }) {
  return (
    <div className="post">
      <h5 className="mb-2 text-gray-500 uppercase text-sm font-bold">
        4 October 2020
      </h5>
      <h3 className="text-[26px] tracking-tight leading-tight font-bold font-serif mb-4">
        {children}
      </h3>
      <p className="text-lg text-slate-300">
        A deep dive into how CSS-in-JS libraries are made.
      </p>
    </div>
  );
}

export function Posts() {
  return (
    <div className="container mx-auto py-8">
      <h3 className="text-white text-2xl font-bold mb-6">Latest Posts</h3>
      <div className="grid grid-cols-3 gap-8">
        <Post>Building a CSS-in-JS library from scratch</Post>
        <Post>Build a react-router clone from scratch</Post>
        <Post>Export your styled components</Post>
        <Post>Building a stack component with styled-components</Post>
        <Post>Everything you need to know about React.memo</Post>
      </div>
    </div>
  );
}
