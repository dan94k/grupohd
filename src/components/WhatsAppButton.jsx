import { useTranslation } from 'react-i18next'
import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  const { t } = useTranslation()
  const phoneNumber = '5524974024065'
  const message = t('common.whatsappMessage')

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button className="whatsapp-button" onClick={handleClick} aria-label="WhatsApp">
      <FaWhatsapp />
    </button>
  )
}
