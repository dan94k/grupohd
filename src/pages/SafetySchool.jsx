import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  FaShieldAlt, 
  FaUsers, 
  FaEye, 
  FaHandHoldingHeart,
  FaExclamationTriangle,
  FaBullhorn,
  FaBan,
  FaBookOpen,
  FaCheckCircle,
  FaClipboardList,
  FaChalkboardTeacher,
  FaFire
} from 'react-icons/fa'
import './SafetySchool.css'

export default function SafetySchool() {
  const { t } = useTranslation()

  return (
    <div className="safety-school">
      {/* Hero Section */}
      <section className="safety-hero">
        <div className="container">
          <h1>{t('safetySchool.hero.title')}</h1>
          <p>{t('safetySchool.hero.subtitle')}</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section safety-intro">
        <div className="container">
          <div className="intro-box">
            <div className="intro-image">
              <img src={`${import.meta.env.BASE_URL}images/safety-school-classroom.webp`} alt="Sala de aula Safety School" />
            </div>
            <div className="intro-text">
              <h2>{t('safetySchool.intro.title')}</h2>
              <p>{t('safetySchool.intro.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section safety-about">
        <div className="container">
          <div className="about-content">
            <FaShieldAlt className="about-icon" />
            <h2>{t('safetySchool.about.title')}</h2>
            <p>{t('safetySchool.about.description')}</p>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="section context-section">
        <div className="container">
          <div className="context-header">
            <FaExclamationTriangle />
            <h2>{t('safetySchool.context.title')}</h2>
            <p>{t('safetySchool.context.subtitle')}</p>
          </div>
          
          <div className="context-grid">
            {t('safetySchool.context.items', { returnObjects: true }).map((item, index) => {
              const icons = [<FaUsers />, <FaBullhorn />, <FaBan />, <FaExclamationTriangle />]
              return (
                <div key={index} className="context-card">
                  <div className="context-icon">{icons[index]}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-image">
              <img src={`${import.meta.env.BASE_URL}images/safety-school.webp`} alt="Safety School" />
            </div>
            <div className="mission-text">
              <h2>{t('safetySchool.mission.title')}</h2>
              <p>{t('safetySchool.mission.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section pillars-section">
        <div className="container">
          <h2 className="section-title">{t('safetySchool.pillars.title')}</h2>
          
          <div className="pillars-grid">
            {t('safetySchool.pillars.items', { returnObjects: true }).map((pillar, index) => (
              <div key={index} className="pillar-card">
                <div className="pillar-number">{pillar.number}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="section method-section">
        <div className="container">
          <div className="method-header">
            <h2>{t('safetySchool.method.title')}</h2>
            <p>{t('safetySchool.method.subtitle')}</p>
          </div>

          <div className="method-steps">
            {t('safetySchool.method.steps', { returnObjects: true }).map((step, index) => {
              const icons = [
                <FaClipboardList />,
                <FaBookOpen />,
                <FaChalkboardTeacher />,
                <FaFire />,
                <FaEye />
              ]
              return (
                <div key={index} className="method-step">
                  <div className="step-icon">{icons[index]}</div>
                  <div className="step-content">
                    <div className="step-number">0{index + 1}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="section safety-differentials-section">
        <div className="container">
          <h2 className="section-title">{t('safetySchool.differentials.title')}</h2>
          
          <div className="differentials-grid">
            {t('safetySchool.differentials.items', { returnObjects: true }).map((diff, index) => (
              <div key={index} className="differential-box">
                <FaCheckCircle className="diff-check" />
                <h3>{diff.title}</h3>
                <p>{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section safety-cta-section">
        <div className="container">
          <div className="safety-cta-content">
            <FaShieldAlt className="cta-icon" />
            <h2>{t('safetySchool.cta.title')}</h2>
            <p>{t('safetySchool.cta.description')}</p>
            <a 
              href={`https://wa.me/5524974024065?text=${encodeURIComponent(t('common.whatsappMessage'))}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-large"
            >
              {t('safetySchool.cta.button')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
                                                    