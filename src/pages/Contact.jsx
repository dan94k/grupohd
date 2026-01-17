import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    city: '',
    service: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simular envio do formulário
    setStatus('sending')
    
    setTimeout(() => {
      // Aqui você integraria com um backend real ou serviço de email
      console.log('Form data:', formData)
      setStatus('success')
      
      // Resetar formulário após 3 segundos
      setTimeout(() => {
        setFormData({
          name: '',
          company: '',
          city: '',
          service: '',
          message: ''
        })
        setStatus('')
      }, 3000)
    }, 1500)
  }

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>{t('contact.hero.title')}</h1>
          <p>{t('contact.hero.subtitle')}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>{t('contact.info.title')}</h2>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <FaPhone />
                  </div>
                  <div className="method-content">
                    <h3>{t('contact.info.phone')}</h3>
                    <a href="tel:+5521999999999">+55 21 99999-9999</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-content">
                    <h3>{t('contact.info.email')}</h3>
                    <a href="mailto:contato@grupohd.com.br">contato@grupohd.com.br</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon whatsapp">
                    <FaWhatsapp />
                  </div>
                  <div className="method-content">
                    <h3>{t('contact.info.whatsapp')}</h3>
                    <a 
                      href="https://wa.me/5521999999999?text=Olá! Gostaria de saber mais sobre os serviços do Grupo HD."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +55 21 99999-9999
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="method-content">
                    <h3>Localização</h3>
                    <p>Rio de Janeiro, RJ - Brasil</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>{t('contact.info.social')}</h3>
                <div className="social-buttons">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <FaInstagram />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>{t('contact.form.title')}</h2>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">{t('contact.form.company')}</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="city">{t('contact.form.city')}</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">{t('contact.form.service')} *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t('contact.form.selectService')}</option>
                    <option value="safetySchool">{t('contact.form.services.safetySchool')}</option>
                    <option value="accessControl">{t('contact.form.services.accessControl')}</option>
                    <option value="reception">{t('contact.form.services.reception')}</option>
                    <option value="vip">{t('contact.form.services.vip')}</option>
                    <option value="escort">{t('contact.form.services.escort')}</option>
                    <option value="armored">{t('contact.form.services.armored')}</option>
                    <option value="facilities">{t('contact.form.services.facilities')}</option>
                    <option value="other">{t('contact.form.services.other')}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contact.form.message')} *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Enviando...' : t('contact.form.send')}
                </button>

                {status === 'success' && (
                  <div className="form-message success">
                    {t('contact.form.success')}
                  </div>
                )}

                {status === 'error' && (
                  <div className="form-message error">
                    {t('contact.form.error')}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
