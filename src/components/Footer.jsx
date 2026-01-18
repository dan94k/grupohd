import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-text">
                <span className="logo-name">GRUPO HD</span>
                <span className="logo-tagline">{t('footer.tagline')}</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>{t('footer.company')}</h4>
            <ul>
              <li><Link to="/sobre">{t('footer.links.about')}</Link></li>
              <li><Link to="/sobre">{t('footer.links.history')}</Link></li>
              <li><Link to="/sobre">{t('footer.links.values')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.services')}</h4>
            <ul>
              <li><Link to="/safety-school">{t('nav.safetySchool')}</Link></li>
              <li><Link to="/servicos">{t('nav.services')}</Link></li>
              <li><Link to="/contato">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.contact')}</h4>
            <ul className="footer-contact">
              <li>
                <FaPhone />
                <a href="tel:+5524974024065">+55 24 97402-4065</a>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:anacleto@grupohdservicos.com">anacleto@grupohdservicos.com</a>
              </li>
            </ul>
            <div className="footer-social">
              <a href="https://instagram.com/grupohdsecurity" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
