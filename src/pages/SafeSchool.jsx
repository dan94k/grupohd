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
import './SafeSchool.css'

export default function SafeSchool() {
  const { t } = useTranslation()

  return (
    <div className="safe-school">
      {/* Hero Section */}
      <section className="safe-hero">
        <div className="container">
          <h1>{t('safeSchool.hero.title')}</h1>
          <p>{t('safeSchool.hero.subtitle')}</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section safe-intro">
        <div className="container">
          <div className="intro-box">
            <div className="intro-image">
              <img src={`${import.meta.env.BASE_URL}images/safe-school-classroom.webp`} alt="Sala de aula Safe School" />
            </div>
            <div className="intro-text">
              <h2>{t('safeSchool.intro.title')}</h2>
              <p>{t('safeSchool.intro.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section safe-about">
        <div className="container">
          <div className="about-content">
            <FaShieldAlt className="about-icon" />
            <h2>{t('safeSchool.about.title')}</h2>
            <p>{t('safeSchool.about.description')}</p>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="section context-section">
        <div className="container">
          <div className="context-header">
            <FaExclamationTriangle />
            <h2>{t('safeSchool.context.title')}</h2>
            <p>{t('safeSchool.context.subtitle')}</p>
          </div>
          
          <div className="context-grid">
            {t('safeSchool.context.items', { returnObjects: true }).map((item, index) => {
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
              <img src={`${import.meta.env.BASE_URL}images/safe-school.webp`} alt="Safe School" />
            </div>
            <div className="mission-text">
              <h2>{t('safeSchool.mission.title')}</h2>
              <p>{t('safeSchool.mission.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section pillars-section">
        <div className="container">
          <h2 className="section-title">{t('safeSchool.pillars.title')}</h2>
          
          <div className="pillars-grid">
            {t('safeSchool.pillars.items', { returnObjects: true }).map((pillar, index) => (
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
            <h2>{t('safeSchool.method.title')}</h2>
            <p>{t('safeSchool.method.subtitle')}</p>
          </div>

          <div className="method-steps">
            {t('safeSchool.method.steps', { returnObjects: true }).map((step, index) => {
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
      <section className="section safe-differentials-section">
        <div className="container">
          <h2 className="section-title">{t('safeSchool.differentials.title')}</h2>
          
          <div className="differentials-grid">
            {t('safeSchool.differentials.items', { returnObjects: true }).map((diff, index) => (
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
      <section className="section safe-cta-section">
        <div className="container">
          <div className="safe-cta-content">
            <FaShieldAlt className="cta-icon" />
            <h2>{t('safeSchool.cta.title')}</h2>
            <p>{t('safeSchool.cta.description')}</p>
            <a 
              href={`https://wa.me/5524974024065?text=${encodeURIComponent(t('common.whatsappMessage'))}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-large"
            >
              {t('safeSchool.cta.button')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
                                                    