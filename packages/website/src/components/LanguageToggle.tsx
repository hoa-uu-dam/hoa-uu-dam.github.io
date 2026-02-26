import { useTranslation } from 'react-i18next';

function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'vi' ? 'en' : 'vi';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors border border-gray-300 hover:border-blue-600"
      title={
        i18n.language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'
      }
    >
      <span className="text-lg">{i18n.language === 'vi' ? '🇻🇳' : '🇺🇸'}</span>
      <span className="uppercase font-semibold">
        {i18n.language === 'vi' ? 'VI' : 'EN'}
      </span>
    </button>
  );
}

export default LanguageToggle;
