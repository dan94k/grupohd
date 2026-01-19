import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  FaShieldAlt, 
  FaUserTie, 
  FaTruck, 
  FaCar, 
  FaTools,
  FaRoute,
  FaCheckCircle
} from 'react-icons/fa'
import './Services.css'

export default function Services() {
  const { t } = useTranslation()

  const services = [
    {
      id: 'accessControl',
      icon: <FaShieldAlt />,
    },
    {
      id: 'reception',
      icon: <FaUserTie />,
    },
    {
      id: 'safetyTour',
      icon: <FaRoute />,
    },
    {
      id: 'facilities',
      icon: <FaTools />,
    },
    {
      id: 'escort',
      icon: <FaTruck />,
    },
    {
      id: 'armored',
      icon: <FaCar />,
    }
  ]

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>{t('services.hero.title')}</h1>
          <p>{t('services.hero.subtitle')}</p>
        </div>
      </section>

      {/* Services List */}
      <section className="section services-list-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-detail">
                <div className="service-detail-icon">
                  {service.icon}
                </div>
                <div className="service-detail-content">
                  <h2>{t(`services.list.${service.id}.title`)}</h2>
                  <p className="service-description">
                    {t(`services.list.${service.id}.description`)}
                  </p>
                  {t(`services.list.${service.id}.benefits`, { returnObjects: true }).length > 0 && (
                    <div className="service-benefits">
                      <h4>{t('services.benefits')}</h4>
                      <ul>
                        {t(`services.list.${service.id}.benefits`, { returnObjects: true }).map((benefit, idx) => (
                          <li key={idx}>
                            <FaCheckCircle />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section services-cta-section">
        <div className="container">
          <div className="services-cta-content">
            <h2>{t('services.cta.title')}</h2>
            <p>{t('services.cta.description')}</p>
            <Link to="/contato" className="btn btn-primary">
              {t('services.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
