# 📧 GUIA: Integrar Formulário de Contato

O formulário está pronto visualmente, mas precisa ser integrado com um serviço de email.

---

## 🎯 Opções de Integração

### 1. EmailJS (Recomendado - Grátis)

**Vantagens**:
- ✅ Grátis até 200 emails/mês
- ✅ Não precisa de backend
- ✅ Fácil de configurar
- ✅ Funciona direto do React

**Passo a passo**:

#### 1. Criar conta
- Acesse: https://www.emailjs.com
- Crie uma conta gratuita

#### 2. Configurar serviço de email
- Dashboard > Email Services
- Adicione seu Gmail, Outlook, etc.

#### 3. Criar template
- Dashboard > Email Templates
- Crie um template com:
  ```
  Nome: {{name}}
  Empresa: {{company}}
  Cidade: {{city}}
  Serviço: {{service}}
  Mensagem: {{message}}
  ```

#### 4. Instalar biblioteca
```bash
npm install @emailjs/browser
```

#### 5. Atualizar Contact.jsx

```jsx
import emailjs from '@emailjs/browser'

// No início do componente:
const SERVICE_ID = 'seu_service_id'
const TEMPLATE_ID = 'seu_template_id'
const PUBLIC_KEY = 'sua_public_key'

// Substituir handleSubmit por:
const handleSubmit = (e) => {
  e.preventDefault()
  setStatus('sending')
  
  emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
    .then(() => {
      setStatus('success')
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
    })
    .catch((error) => {
      console.error('Erro:', error)
      setStatus('error')
    })
}
```

---

### 2. Formspree (Alternativa Grátis)

**Vantagens**:
- ✅ Grátis até 50 envios/mês
- ✅ Muito simples
- ✅ Não precisa instalar nada

**Passo a passo**:

#### 1. Criar conta
- Acesse: https://formspree.io
- Crie uma conta gratuita

#### 2. Criar formulário
- Dashboard > New Form
- Copie o endpoint (ex: https://formspree.io/f/xyzabc123)

#### 3. Atualizar Contact.jsx

```jsx
// Substituir handleSubmit por:
const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')
  
  try {
    const response = await fetch('https://formspree.io/f/SEU_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      setStatus('success')
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
    } else {
      setStatus('error')
    }
  } catch (error) {
    console.error('Erro:', error)
    setStatus('error')
  }
}
```

---

### 3. Web3Forms (Outra Opção Grátis)

**Vantagens**:
- ✅ Totalmente grátis (ilimitado)
- ✅ Muito simples
- ✅ Sem captcha obrigatório

**Passo a passo**:

#### 1. Criar conta
- Acesse: https://web3forms.com
- Crie uma conta e obtenha sua Access Key

#### 2. Atualizar Contact.jsx

```jsx
// Substituir handleSubmit por:
const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')
  
  const formDataToSend = {
    access_key: 'SUA_ACCESS_KEY_AQUI',
    subject: 'Novo contato - Grupo HD',
    ...formData
  }
  
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataToSend)
    })
    
    const data = await response.json()
    
    if (data.success) {
      setStatus('success')
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
    } else {
      setStatus('error')
    }
  } catch (error) {
    console.error('Erro:', error)
    setStatus('error')
  }
}
```

---

### 4. Backend Próprio (PHP)

Se você tem hospedagem PHP, crie `api/send-email.php`:

```php
<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $to = 'contato@grupohd.com.br';
    $subject = 'Novo contato - Grupo HD';
    $message = "
        Nome: {$data['name']}
        Empresa: {$data['company']}
        Cidade: {$data['city']}
        Serviço: {$data['service']}
        Mensagem: {$data['message']}
    ";
    $headers = "From: noreply@grupohd.com.br";
    
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>
```

**No React** (Contact.jsx):
```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')
  
  try {
    const response = await fetch('https://seudominio.com/api/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    
    const data = await response.json()
    
    if (data.success) {
      setStatus('success')
      // ... resto do código
    }
  } catch (error) {
    setStatus('error')
  }
}
```

---

## 🔐 Adicionar reCAPTCHA (Opcional)

Previne spam no formulário.

### Com Google reCAPTCHA v3:

#### 1. Obter chaves
- Acesse: https://www.google.com/recaptcha/admin
- Registre seu site
- Copie Site Key e Secret Key

#### 2. Instalar biblioteca
```bash
npm install react-google-recaptcha-v3
```

#### 3. Configurar no App.jsx
```jsx
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="SUA_SITE_KEY">
      {/* ... resto do app ... */}
    </GoogleReCaptchaProvider>
  )
}
```

#### 4. Usar no Contact.jsx
```jsx
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

export default function Contact() {
  const { executeRecaptcha } = useGoogleReCaptcha()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!executeRecaptcha) return
    
    const token = await executeRecaptcha('contact_form')
    
    // Incluir token no envio
    const dataWithToken = { ...formData, recaptcha_token: token }
    
    // ... resto do código de envio
  }
}
```

---

## 📊 Comparação de Serviços

| Serviço | Grátis | Limite | Facilidade | Recomendado |
|---------|--------|--------|------------|-------------|
| EmailJS | ✅ | 200/mês | ⭐⭐⭐⭐ | ✅ Sim |
| Formspree | ✅ | 50/mês | ⭐⭐⭐⭐⭐ | ✅ Sim |
| Web3Forms | ✅ | Ilimitado | ⭐⭐⭐⭐⭐ | ✅ Sim |
| Backend PHP | ✅ | Ilimitado | ⭐⭐⭐ | Se tiver servidor |

---

## 🎯 Minha Recomendação

Para começar rápido:
1. **Web3Forms** - Grátis ilimitado, muito fácil
2. Se preferir mais controle: **EmailJS**

---

## ✅ Checklist de Integração

- [ ] Escolher serviço de email
- [ ] Criar conta no serviço
- [ ] Obter credenciais/chaves
- [ ] Instalar biblioteca (se necessário)
- [ ] Atualizar Contact.jsx
- [ ] Testar envio do formulário
- [ ] Verificar recebimento do email
- [ ] Testar validação de campos
- [ ] Adicionar reCAPTCHA (opcional)
- [ ] Testar em produção

---

## 🧪 Como Testar

1. Preencha todos os campos
2. Clique em "Enviar mensagem"
3. Deve aparecer "Enviando..."
4. Depois "Mensagem enviada com sucesso!"
5. Verifique sua caixa de entrada
6. Teste campos vazios (validação)

---

## 🚨 Troubleshooting

### Formulário não envia?
- Verifique as credenciais
- Veja o console do navegador (F12)
- Teste a conexão de internet
- Verifique limites do plano gratuito

### Email não chega?
- Verifique spam/lixo eletrônico
- Confirme email configurado no serviço
- Aguarde alguns minutos (pode demorar)

### Erro de CORS?
- Configure CORS no backend
- Use proxy do Vite
- Verifique configurações do serviço

---

## 📧 Exemplo de Email Recebido

```
Assunto: Novo contato - Grupo HD

Nome: João Silva
Empresa: Escola ABC
Cidade: Rio de Janeiro
Serviço: Safety School
Mensagem: Gostaria de conhecer o projeto Safety School 
para implementar em nossa escola.
```

---

## 🎉 Pronto!

Após integrar, seu formulário estará **100% funcional** e você receberá todos os contatos diretamente no email!

---

**📧 Boa sorte com a integração!**

Escolha o serviço que preferir e siga o passo a passo acima.
