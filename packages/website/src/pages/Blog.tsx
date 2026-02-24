function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
          Temple Blog
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder blog posts */}
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Blog Post {i}
              </h3>
              <p className="text-gray-600 mb-4">
                This is a placeholder for blog content that will come from our
                Strapi CMS. Each post will contain teachings, announcements, and
                community updates.
              </p>
              <button className="text-blue-500 hover:text-blue-700 font-medium">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
