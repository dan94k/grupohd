import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  const phoneNumber = '5524974024065'
  const message = 'Olá! Gostaria de saber mais sobre os serviços do Grupo HD.'

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
