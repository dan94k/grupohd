import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa'
import { BR } from 'country-flag-icons/react/3x2'
import { US } from 'country-flag-icons/react/3x2'
import { ES } from 'country-flag-icons/react/3x2'
import './Header.css'

export default function Header() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setShowLangMenu(false)
  }

  const getLanguageFlag = (lang) => {
    const flagStyle = { width: '24px', height: '16px' }
    const flags = {
      pt: <BR style={flagStyle} />,
      en: <US style={flagStyle} />,
      es: <ES style={flagStyle} />
    }
    return flags[lang] || <BR style={flagStyle} />
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={`${import.meta.env.BASE_URL}images/logo.svg`} alt="Grupo HD Logo" className="logo-image" />
            <div className="logo-text">
              <span className="logo-name">GRUPO HD</span>
              <span className="logo-tagline">{t('footer.tagline')}</span>
            </div>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>
              {t('nav.home')}
            </Link>
            <Link to="/safe-school" className={`nav-link ${isActive('/safe-school')} highlight`} onClick={closeMenu}>
              {t('nav.safeSchool')}
            </Link>
            <Link to="/servicos" className={`nav-link ${isActive('/servicos')}`} onClick={closeMenu}>
              {t('nav.services')}
            </Link>
            <Link to="/sobre" className={`nav-link ${isActive('/sobre')}`} onClick={closeMenu}>
              {t('nav.about')}
            </Link>
            <Link to="/contato" className={`nav-link ${isActive('/contato')}`} onClick={closeMenu}>
              {t('nav.contact')}
            </Link>

            <div className="language-selector mobile">
              <button onClick={() => setShowLangMenu(!showLangMenu)} className="lang-button">
                {getLanguageFlag(i18n.language)}
              </button>
              {showLangMenu && (
                <div className="lang-menu">
                  <button onClick={() => changeLanguage('pt')} className={i18n.language === 'pt' ? 'active' : ''}>
                    <BR style={{ width: '28px', height: '20px' }} />
                  </button>
                  <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>
                    <US style={{ width: '28px', height: '20px' }} />
                  </button>
                  <button onClick={() => changeLanguage('es')} className={i18n.language === 'es' ? 'active' : ''}>
                    <ES style={{ width: '28px', height: '20px' }} />
                  </button>
                </div>
              )}
            </div>
          </nav>

          <div className="header-actions">
            <div className="language-selector desktop">
              <button onClick={() => setShowLangMenu(!showLangMenu)} className="lang-button">
                {getLanguageFlag(i18n.language)}
              </button>
              {showLangMenu && (
                <div className="lang-menu">
                  <button onClick={() => changeLanguage('pt')} className={i18n.language === 'pt' ? 'active' : ''}>
                    <BR style={{ width: '32px', height: '24px' }} />
                  </button>
                  <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>
                    <US style={{ width: '32px', height: '24px' }} />
                  </button>
                  <button onClick={() => changeLanguage('es')} className={i18n.language === 'es' ? 'active' : ''}>
                    <ES style={{ width: '32px', height: '24px' }} />
                  </button>
                </div>
              )}
            </div>

            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
