import { Link } from 'react-router-dom';
import { useFeaturedBlogPosts } from '../hooks/useQueries';

function Home() {
  // Fetch featured blog posts (this will show loading state until CMS is set up)
  const {
    data: featuredPosts,
    isLoading: loading,
    error,
  } = useFeaturedBlogPosts(3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">
            Welcome to Our Buddhist Temple
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            A peaceful sanctuary for meditation, learning, and spiritual growth.
            Join our community on the path to wisdom and enlightenment.
          </p>
          <div className="space-x-4">
            <Link
              to="/about"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Learn About Us
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Latest Teachings & Updates
          </h2>

          {loading && (
            <div className="text-center py-8">
              <p className="text-gray-600">Loading latest posts from CMS...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-8">
              <p className="text-gray-600">
                CMS not yet connected. Content will appear here once Strapi
                content models are created.
              </p>
            </div>
          )}

          {!loading && !error && featuredPosts && featuredPosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map(post => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  {post.featuredImage && (
                    <img
                      src={`${import.meta.env.VITE_API_URL?.replace('/api', '') || 'http://localhost:1337'}${post.featuredImage.url}`}
                      alt={post.featuredImage.alternativeText || post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            !loading &&
            !error && (
              <div className="grid md:grid-cols-3 gap-8">
                {/* Placeholder content until CMS is set up */}
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Weekly Dharma Talk {i}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Join us for inspiring teachings and discussions on
                      Buddhist philosophy and practice. Content will be managed
                      through our CMS once content models are created.
                    </p>
                    <Link
                      to="/blog"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View All Posts →
                    </Link>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover peace, wisdom, and compassion through meditation and
            Buddhist teachings. Everyone is welcome to participate in our
            programs and events.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
