import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFeaturedBlogPosts } from '../hooks/useQueries';

function Home() {
  const { t } = useTranslation();
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
          <h1 className="text-6xl font-bold mb-6">{t('home.hero.title')}</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('home.hero.description')}
          </p>
          <div className="space-x-4">
            <Link
              to="/about"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              {t('home.hero.learnAboutUs')}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              {t('home.hero.visitUs')}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            {t('home.featured.title')}
          </h2>

          {loading && (
            <div className="text-center py-8">
              <p className="text-gray-600">{t('home.featured.loading')}</p>
            </div>
          )}

          {error && (
            <div className="text-center py-8">
              <p className="text-gray-600">
                {t('home.featured.cmsNotConnected')}
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
                      {t('home.featured.readMore')}
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
                      {t('home.featured.placeholderTitle')} {i}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t('home.featured.placeholderDescription')}
                    </p>
                    <Link
                      to="/blog"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {t('home.featured.viewAllPosts')}
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
            {t('home.cta.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('home.cta.description')}
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            {t('home.cta.getInTouch')}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
