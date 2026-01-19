# Configuração do Formulário de Contato

## 📧 Solução Atual: mailto:

O formulário de contato utiliza a funcionalidade **mailto:** do navegador, que abre o cliente de email do usuário com os dados pré-preenchidos.

### ✅ Vantagens

- **Zero configuração necessária** - Funciona imediatamente
- **Totalmente gratuito** - Sem custos ou limites
- **Sem dependências** - Não requer bibliotecas externas
- **Privacidade total** - Dados não passam por terceiros
- **Funciona offline** - Não depende de conexão com internet

### ⚠️ Considerações

- Requer que o usuário tenha um cliente de email configurado
- Usuário precisa clicar em "Enviar" no seu cliente de email
- Pode não funcionar em alguns dispositivos móveis sem app de email

---

## 🔄 Alternativa: EmailJS (Envio Automático)

Se você preferir que o email seja enviado **automaticamente** sem abrir o cliente de email do usuário, pode usar o **EmailJS**.

### Passos para Configurar EmailJS

#### 1. Criar conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Faça login no dashboard

#### 2. Criar um Serviço de Email

1. No dashboard, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. Copie o **Service ID** (ex: `service_grupohd`)

#### 3. Criar um Template de Email

1. No dashboard, vá em **Email Templates**
2. Clique em **Create New Template**
3. Configure o template com os seguintes campos:

**Assunto do Email:**
```
Nova mensagem de contato - {{from_name}}
```

**Conteúdo do Email:**
```
Você recebeu uma nova mensagem através do formulário de contato do site Grupo HD:

Nome: {{from_name}}
Empresa/Escola: {{company}}
Telefone: {{contact}}
Serviço de Interesse: {{service}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada através do formulário de contato do site.
```

**Configurações importantes:**
- **To Email:** `anacleto@grupohdservicos.com`
- **From Name:** `{{from_name}}`
- **Reply To:** `{{contact}}`

4. Salve o template e copie o **Template ID** (ex: `template_contact`)

#### 4. Obter a Public Key

1. No dashboard, vá em **Account** > **General**
2. Encontre a seção **API Keys**
3. Copie a **Public Key**

#### 5. Instalar EmailJS

```bash
npm install @emailjs/browser
```

#### 6. Modificar o Código

Abra `src/pages/Contact.jsx` e faça as seguintes alterações:

**Importar o EmailJS:**
```javascript
import emailjs from '@emailjs/browser'
```

**Substituir a função handleSubmit:**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')
  
  try {
    const serviceId = 'SEU_SERVICE_ID'
    const templateId = 'SEU_TEMPLATE_ID'
    const publicKey = 'SUA_PUBLIC_KEY'
    
    const templateParams = {
      to_email: 'anacleto@grupohdservicos.com',
      from_name: formData.name,
      company: formData.company || 'Não informado',
      contact: formData.contact,
      service: formData.service,
      message: formData.message,
      reply_to: formData.contact
    }
    
    await emailjs.send(serviceId, templateId, templateParams, publicKey)
    
    setStatus('success')
    
    setTimeout(() => {
      setFormData({
        name: '',
        company: '',
        contact: '',
        service: '',
        message: ''
      })
      setStatus('')
    }, 3000)
    
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    setStatus('error')
    
    setTimeout(() => {
      setStatus('')
    }, 5000)
  }
}
```

### Comparação: mailto vs EmailJS

| Característica | mailto: | EmailJS |
|----------------|---------|---------|
| Configuração | ✅ Zero | ⚠️ Requer setup |
| Custo | ✅ Grátis ilimitado | ⚠️ 200/mês grátis |
| Dependências | ✅ Nenhuma | ❌ Biblioteca externa |
| Envio | ⚠️ Manual pelo usuário | ✅ Automático |
| Funcionamento | ✅ Sempre | ⚠️ Requer internet |
| Privacidade | ✅ Total | ⚠️ Passa por terceiro |
| Cliente email | ❌ Necessário | ✅ Não necessário |

---

## 🔧 Outras Alternativas

### 1. Backend Próprio (Node.js + Nodemailer)

**Prós:**
- Controle total sobre o envio
- Sem limites de emails
- Processamento adicional possível

**Contras:**
- Requer criar e hospedar backend
- Mais complexo de implementar
- Custo de hospedagem

### 2. Serverless Functions

**Prós:**
- Sem servidor para gerenciar
- Integra com deploy do frontend
- Gratuito em tier básico

**Contras:**
- Requer configuração SMTP
- Mais complexo que mailto/EmailJS

### 3. Serviços de Formulário

**Exemplos:** FormSubmit, Formspree, Getform

**Prós:**
- Simples de implementar
- Alguns gratuitos

**Contras:**
- Ainda são serviços externos
- Menos personalização

---

## 💡 Recomendação

**Para site institucional simples:**
- ✅ Use **mailto:** (solução atual)

**Para site com tráfego moderado:**
- ✅ Use **EmailJS**

**Para aplicação corporativa:**
- ✅ Implemente **backend próprio**

---

## 📞 Suporte

Para dúvidas sobre:
- **mailto:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href
- **EmailJS:** https://www.emailjs.com/docs/
- **Nodemailer:** https://nodemailer.com/
