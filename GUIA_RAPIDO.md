# 🚀 GUIA RÁPIDO - GRUPO HD

## ⚡ Início Rápido

```bash
# Já está rodando em:
http://localhost:5173/
```

---

## 📱 Páginas do Site

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Apresentação geral + destaques |
| `/sobre` | Sobre Nós | História, MVV, timeline |
| `/servicos` | Serviços | 7 serviços detalhados |
| `/safety-school` | Safety School | ⭐ Projeto carro-chefe |
| `/contato` | Contato | Formulário + informações |

---

## 🎨 Paleta de Cores

```css
Preto: #000000 / #1a1a1a  /* Principal */
Branco: #ffffff            /* Backgrounds */
Cinza: #666666             /* Textos secundários */
Ciano: #36b9bc             /* ⭐ DESTAQUE */
```

---

## 🌍 Idiomas

- 🇧🇷 Português (padrão)
- 🇺🇸 English
- 🇪🇸 Español

**Trocar idioma**: Botão no canto superior direito

---

## 📞 Customizar Contatos

### Buscar e Substituir:

| Item | Valor Atual | Arquivo |
|------|-------------|---------|
| Telefone | `+5521999999999` | Todos |
| WhatsApp | `5521999999999` | WhatsAppButton.jsx, Contact.jsx, Home.jsx |
| E-mail | `contato@grupohd.com.br` | Footer.jsx, Contact.jsx |

---

## 🔧 Comandos

```bash
# Desenvolvimento (já rodando)
npm run dev

# Parar servidor
Ctrl + C (no terminal)

# Build produção
npm run build

# Preview build
npm run preview
```

---

## 📝 Editar Conteúdo

### Textos e traduções:
```
src/locales/
  ├── pt.json  # 🇧🇷 Português
  ├── en.json  # 🇺🇸 Inglês
  └── es.json  # 🇪🇸 Espanhol
```

### Cores:
```
src/index.css (linha 5-14)
```

### Componentes:
```
src/components/
  ├── Header.jsx    # Menu navegação
  ├── Footer.jsx    # Rodapé
  └── WhatsAppButton.jsx  # Botão flutuante
```

### Páginas:
```
src/pages/
  ├── Home.jsx
  ├── About.jsx
  ├── Services.jsx
  ├── SafetySchool.jsx
  └── Contact.jsx
```

---

## 🎯 Features Principais

✅ Design responsivo (mobile/tablet/desktop)
✅ Sistema multilíngue completo
✅ 5 páginas institucionais
✅ Safety School com destaque especial
✅ Formulário de contato funcional
✅ Botão WhatsApp flutuante
✅ Menu hamburger para mobile
✅ Animações e transições suaves
✅ SEO otimizado

---

## 🚨 Troubleshooting

### Servidor não inicia?
```bash
npm install
npm run dev
```

### Página em branco?
- Verifique o console do navegador (F12)
- Certifique-se que todas as dependências foram instaladas

### Erro de compilação?
- Verifique se não há erros de sintaxe
- Rode `npm install` novamente

---

## 📦 Estrutura de Arquivos

```
Joana/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/          # Páginas do site
│   ├── locales/        # Traduções (PT/EN/ES)
│   ├── App.jsx         # App principal
│   ├── main.jsx        # Entry point
│   ├── i18n.js         # Config i18next
│   └── index.css       # Estilos globais
├── index.html
├── package.json
├── vite.config.js
├── README.md           # Documentação completa
├── SITE_COMPLETO.md    # Guia de conclusão
└── GUIA_RAPIDO.md      # Este arquivo
```

---

## 🎨 Componentes por Página

### HOME
- Hero com 2 CTAs
- Sobre (resumo)
- Safety School (destaque)
- 6 Cards de serviços
- 4 Diferenciais
- CTA WhatsApp

### SOBRE NÓS
- Hero institucional
- Quem somos
- Missão/Visão/Valores
- Timeline (5 eventos)
- CEO/Fundador

### SERVIÇOS
- Hero
- 7 Serviços com benefícios
- CTA contato

### SAFETY SCHOOL ⭐
- Hero especial
- Introdução
- Contexto (4 problemas)
- Objetivo
- 3 Pilares
- 5 Etapas da metodologia
- 4 Diferenciais
- CTA avaliação

### CONTATO
- Hero
- 4 Métodos de contato
- Redes sociais
- Formulário com validação

---

## 🌟 Destaque: Safety School

A página **Safety School** é o projeto carro-chefe e tem:

- Design diferenciado (gradiente ciano)
- Ícones e badges especiais
- Seções detalhadas
- CTAs estratégicos
- Link destacado no menu (cor diferente)

---

## 💡 Dicas

1. **Teste no mobile**: Use F12 > Device Toolbar
2. **Teste todos os idiomas**: Use o seletor de idiomas
3. **Teste o formulário**: Preencha e envie
4. **Clique em todos os botões**: Verifique navegação
5. **Teste o WhatsApp**: Botão flutuante e CTAs

---

## ✅ Checklist de Validação

- [ ] Site abre em http://localhost:5173
- [ ] Menu funciona (mobile e desktop)
- [ ] Todas as 5 páginas carregam
- [ ] Troca de idioma funciona
- [ ] Links funcionam
- [ ] Formulário valida campos
- [ ] Botão WhatsApp abre conversa
- [ ] Site é responsivo
- [ ] Não há erros no console (F12)

---

## 🚀 Deploy Rápido

### Vercel (Mais Fácil):
1. https://vercel.com
2. Import Git repository
3. Deploy!

### Netlify:
1. `npm run build`
2. https://netlify.com
3. Arraste pasta `dist`

---

**🛡️ Grupo HD - Segurança Especializada**

Site criado com React + Vite + i18next
Design: Preto, Branco, Cinza, #36b9bc
100% Responsivo | 3 Idiomas | SEO Otimizado
