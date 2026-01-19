import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  FaShieldAlt,
  FaUserTie, 
  FaTruck, 
  FaCar, 
  FaTools, 
  FaUserShield,
  FaCheckCircle,
  FaMedal,
  FaBook,
  FaHandshake
} from 'react-icons/fa'
import './Home.css'

export default function Home() {
  const { t } = useTranslation()

  const services = [
    { icon: <FaShieldAlt />, key: 'accessControl' },
    { icon: <FaUserTie />, key: 'reception' },
    { icon: <FaUserShield />, key: 'vip' },
    { icon: <FaTruck />, key: 'escort' },
    { icon: <FaCar />, key: 'armored' },
    { icon: <FaTools />, key: 'facilities' }
  ]

  const differentials = [
    { icon: <FaCheckCircle />, key: 'trained' },
    { icon: <FaMedal />, key: 'experience' },
    { icon: <FaBook />, key: 'protocols' },
    { icon: <FaHandshake />, key: 'personalized' }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{t('home.hero.title')}</h1>
            <p className="hero-subtitle">{t('home.hero.subtitle')}</p>
            <div className="hero-buttons">
              <Link to="/contato" className="btn btn-primary">
                {t('home.hero.ctaPrimary')}
              </Link>
              <Link to="/safety-school" className="btn btn-secondary">
                {t('home.hero.ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <div className="section-content">
            <div className="about-text">
              <h2>{t('home.about.title')}</h2>
              <p>{t('home.about.description')}</p>
              <Link to="/sobre" className="btn btn-outline">
                {t('home.about.cta')}
              </Link>
            </div>
            <div className="about-image">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo-wall.webp`}
                alt="Grupo HD" 
                className="about-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety School Highlight */}
      <section className="section safety-school-highlight">
        <div className="container">
          <div className="highlight-content">
            <div className="highlight-image">
              <img src={`${import.meta.env.BASE_URL}images/safety-school-home.webp`} alt="Safety School - Segurança Escolar" />
            </div>
            <div className="highlight-text">
              <h2>{t('home.safetySchool.title')}</h2>
              <h3>{t('home.safetySchool.subtitle')}</h3>
              <p>{t('home.safetySchool.description')}</p>
              <Link to="/safety-school" className="btn btn-primary">
                {t('home.safetySchool.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('home.services.title')}</h2>
            <p>{t('home.services.subtitle')}</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.key} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{t(`home.services.items.${service.key}.title`)}</h3>
                <p>{t(`home.services.items.${service.key}.description`)}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/servicos" className="btn btn-outline">
              {t('home.services.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="section differentials-section">
        <div className="container">
          <h2>{t('home.differentials.title')}</h2>
          <div className="differentials-grid">
            {differentials.map((diff) => (
              <div key={diff.key} className="differential-card">
                <div className="differential-icon">{diff.icon}</div>
                <h3>{t(`home.differentials.items.${diff.key}.title`)}</h3>
                <p>{t(`home.differentials.items.${diff.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t('home.cta.title')}</h2>
            <p>{t('home.cta.subtitle')}</p>
            <a 
              href={`https://wa.me/5524974024065?text=${encodeURIComponent(t('common.whatsappMessage'))}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              {t('home.cta.button')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
