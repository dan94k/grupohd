import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa'
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

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <div className="logo-text">
              <span className="logo-name">GRUPO HD</span>
              <span className="logo-tagline">{t('footer.tagline')}</span>
            </div>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>
              {t('nav.home')}
            </Link>
            <Link to="/sobre" className={`nav-link ${isActive('/sobre')}`} onClick={closeMenu}>
              {t('nav.about')}
            </Link>
            <Link to="/servicos" className={`nav-link ${isActive('/servicos')}`} onClick={closeMenu}>
              {t('nav.services')}
            </Link>
            <Link to="/safety-school" className={`nav-link ${isActive('/safety-school')} highlight`} onClick={closeMenu}>
              {t('nav.safetySchool')}
            </Link>
            <Link to="/contato" className={`nav-link ${isActive('/contato')}`} onClick={closeMenu}>
              {t('nav.contact')}
            </Link>

            <div className="language-selector mobile">
              <button onClick={() => setShowLangMenu(!showLangMenu)} className="lang-button">
                <FaGlobe /> {i18n.language.toUpperCase()}
              </button>
              {showLangMenu && (
                <div className="lang-menu">
                  <button onClick={() => changeLanguage('pt')} className={i18n.language === 'pt' ? 'active' : ''}>
                    🇧🇷 PT
                  </button>
                  <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>
                    🇺🇸 EN
                  </button>
                  <button onClick={() => changeLanguage('es')} className={i18n.language === 'es' ? 'active' : ''}>
                    🇪🇸 ES
                  </button>
                </div>
              )}
            </div>
          </nav>

          <div className="header-actions">
            <div className="language-selector desktop">
              <button onClick={() => setShowLangMenu(!showLangMenu)} className="lang-button">
                <FaGlobe /> {i18n.language.toUpperCase()}
              </button>
              {showLangMenu && (
                <div className="lang-menu">
                  <button onClick={() => changeLanguage('pt')} className={i18n.language === 'pt' ? 'active' : ''}>
                    🇧🇷 PT
                  </button>
                  <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>
                    🇺🇸 EN
                  </button>
                  <button onClick={() => changeLanguage('es')} className={i18n.language === 'es' ? 'active' : ''}>
                    🇪🇸 ES
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
