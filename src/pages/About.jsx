import { useTranslation } from 'react-i18next'
import { FaBullseye, FaEye, FaStar } from 'react-icons/fa'
import './About.css'

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>{t('about.hero.title')}</h1>
          <p>{t('about.hero.subtitle')}</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>{t('about.intro.title')}</h2>
              <p>{t('about.intro.text')}</p>
            </div>
            <div className="intro-image">
              <img src="/images/back-shirt.webp" alt="Grupo HD - Segurança Especializada" />
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section history-section">
        <div className="container">
          <h2>{t('about.history.title')}</h2>
          <div className="timeline">
            {t('about.history.timeline', { returnObjects: true }).map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <div className="timeline-content-inner">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="section ceo-section">
        <div className="container">
          <div className="ceo-content">
            <div className="ceo-image">
              <img src="/images/david.webp" alt="David Anacleto - CEO Grupo HD" />
            </div>
            <div className="ceo-text">
              <h2>{t('about.ceo.name')}</h2>
              <h3>{t('about.ceo.role')}</h3>
              <p>{t('about.ceo.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values - Institucional */}
      <section className="section mvv-section">
        <div className="container">
          <h2 className="section-title">{t('about.institutional.title')}</h2>
          <div className="mvv-grid">
            <div className="mvv-card">
              <div className="mvv-icon">
                <FaBullseye />
              </div>
              <h3>{t('about.mission.title')}</h3>
              <p>{t('about.mission.text')}</p>
            </div>

            <div className="mvv-card">
              <div className="mvv-icon">
                <FaEye />
              </div>
              <h3>{t('about.vision.title')}</h3>
              <p>{t('about.vision.text')}</p>
            </div>

            <div className="mvv-card values-card">
              <div className="mvv-icon">
                <FaStar />
              </div>
              <h3>{t('about.values.title')}</h3>
              <ul className="values-list">
                {t('about.values.items', { returnObjects: true }).map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
