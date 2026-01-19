import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import './Contact.css'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
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
    
    // Construir corpo do email
    const emailBody = `
Você recebeu uma nova mensagem através do formulário de contato do site Grupo HD:

Nome: ${formData.name}
Empresa/Escola: ${formData.company || 'Não informado'}
Telefone: ${formData.contact}
Serviço de Interesse: ${formData.service}

Mensagem:
${formData.message}

---
Esta mensagem foi enviada através do formulário de contato do site.
    `.trim()
    
    // Construir assunto do email
    const emailSubject = `Nova mensagem de contato - ${formData.name}`
    
    // Criar link mailto com todos os parâmetros
    const mailtoLink = `mailto:anacleto@grupohdservicos.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    
    // Criar elemento <a> temporário e clicar nele
    const link = document.createElement('a')
    link.href = mailtoLink
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Mostrar mensagem informativa (formulário permanece preenchido)
    setStatus('opened')
  }

  const handleClearForm = () => {
    setFormData({
      name: '',
      company: '',
      contact: '',
      service: '',
      message: ''
    })
    setStatus('')
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
                    <a href="tel:+5524974024065">+55 24 97402-4065</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-content">
                    <h3>{t('contact.info.email')}</h3>
                    <a href="mailto:anacleto@grupohdservicos.com">anacleto@grupohdservicos.com</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon whatsapp">
                    <FaWhatsapp />
                  </div>
                  <div className="method-content">
                    <h3>{t('contact.info.whatsapp')}</h3>
                    <a 
                      href={`https://wa.me/5524974024065?text=${encodeURIComponent(t('common.whatsappMessage'))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +55 24 97402-4065
                    </a>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>{t('contact.info.social')}</h3>
                <div className="social-buttons">
                  <a href="https://instagram.com/grupohdsecurity" target="_blank" rel="noopener noreferrer" className="social-btn">
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
                  <label htmlFor="contact">{t('contact.form.contact')} *</label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="+55 24 97402-4065"
                    required
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
                  disabled={status === 'opened'}
                >
                  {status === 'opened' ? t('contact.form.emailOpened') : t('contact.form.send')}
                </button>

                {status === 'opened' && (
                  <div className="form-message success">
                    <strong>{t('contact.form.emailOpenedTitle')}</strong>
                    <p style={{ margin: '0.5rem 0 0 0' }}>{t('contact.form.emailOpenedMessage')}</p>
                    <button 
                      type="button"
                      onClick={handleClearForm}
                      style={{
                        marginTop: '1rem',
                        padding: '0.5rem 1rem',
                        background: 'transparent',
                        border: '1px solid currentColor',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.9rem'
                      }}
                    >
                      {t('contact.form.clearForm')}
                    </button>
                  </div>
                )}

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
