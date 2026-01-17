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
          <div className="safety-hero-badge">
            <FaShieldAlt />
          </div>
          <h1>{t('safetySchool.hero.title')}</h1>
          <p>{t('safetySchool.hero.subtitle')}</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section safety-intro">
        <div className="container">
          <div className="intro-box">
            <h2>{t('safetySchool.intro.title')}</h2>
            <p>{t('safetySchool.intro.description')}</p>
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

      {/* Objective Section */}
      <section className="section objective-section">
        <div className="container">
          <div className="objective-content">
            <FaCheckCircle className="objective-icon" />
            <h2>{t('safetySchool.objective.title')}</h2>
            <p>{t('safetySchool.objective.description')}</p>
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
            <Link to="/contato" className="btn btn-large">
              {t('safetySchool.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
