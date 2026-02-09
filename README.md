# Grupo HD - Segurança Especializada

Site institucional desenvolvido em React para o Grupo HD, empresa especializada em segurança privada.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server ultrarrápido
- **React Router DOM** - Navegação entre páginas
- **React i18next** - Sistema de internacionalização (PT/EN/ES)
- **React Icons** - Biblioteca de ícones

## 🎨 Design

O site utiliza uma paleta de cores profissional e séria:

- **Preto** (#000000) e **Cinza Escuro** (#1a1a1a) - Cor principal
- **Branco** (#ffffff) - Cor de fundo
- **Cinza** - Variações para textos e backgrounds
- **Ciano** (#36b9bc) - Cor de destaque para títulos, ícones e elementos interativos

## 📱 Funcionalidades

### Páginas

1. **Home** - Apresentação geral da empresa com destaques
2. **Sobre Nós** - História, missão, visão, valores e timeline
3. **Serviços** - Lista completa de serviços oferecidos
4. **Safe School** - Página dedicada ao projeto carro-chefe (⭐ Destaque)
5. **Contato** - Formulário e informações de contato

### Recursos

- ✅ Design 100% responsivo (mobile-first)
- ✅ Sistema multilíngue (Português, Inglês, Espanhol)
- ✅ Botão flutuante do WhatsApp
- ✅ Menu hambúrguer para mobile
- ✅ Animações e transições suaves
- ✅ Formulário de contato funcional
- ✅ SEO otimizado

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

### Acesso

Após iniciar o servidor de desenvolvimento, acesse:
```
http://localhost:5173
```

## 📂 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx      # Cabeçalho e navegação
│   ├── Footer.jsx      # Rodapé
│   ├── WhatsAppButton.jsx  # Botão flutuante WhatsApp
│   └── ScrollToTop.jsx # Scroll automático ao mudar página
├── pages/              # Páginas da aplicação
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── SafeSchool.jsx
│   └── Contact.jsx
├── locales/            # Arquivos de tradução
│   ├── pt.json         # Português
│   ├── en.json         # Inglês
│   └── es.json         # Espanhol
├── App.jsx             # Componente principal
├── i18n.js             # Configuração i18next
├── main.jsx            # Entry point
└── index.css           # Estilos globais
```

## 🌐 Internacionalização

O site está disponível em 3 idiomas:

- 🇧🇷 **Português** (padrão)
- 🇺🇸 **Inglês**
- 🇪🇸 **Espanhol**

A troca de idioma é feita pelo seletor no cabeçalho.

## 📞 Contato

### Informações de Contato

Para personalizar as informações de contato, edite:

- **Telefone/WhatsApp**: Procure por `5524974024065` nos arquivos
- **E-mail**: `anacleto@grupohdservicos.com`
- **Redes sociais**: Links no Footer.jsx

### Formulário de Contato

O formulário de contato utiliza **mailto:** que abre o cliente de email do usuário com os dados pré-preenchidos.

**Campos do formulário:**
- Nome completo (obrigatório)
- Empresa/Escola (opcional)
- Telefone de contato (obrigatório)
- Serviço de interesse (obrigatório)
- Mensagem (obrigatória)

**✅ Vantagens:**
- Zero configuração necessária
- 100% gratuito e sem limites
- Funciona offline
- Não depende de serviços externos

**Email de destino:** Todas as mensagens são enviadas para `anacleto@grupohdservicos.com`

**Alternativas:** Para envio automático de emails, veja opções em **`CONFIGURACAO_EMAIL.md`**

## 🎯 Destaques

### Safe School

A página **Safe School** é o projeto carro-chefe, destacando:

- 3 Pilares fundamentais
- Metodologia sistemática
- Contexto de insegurança nas escolas
- Diferenciais competitivos
- CTA para solicitação de avaliação

### Design Profissional

- Gradientes sutis em preto/cinza
- Destaque em ciano (#36b9bc)
- Cards com hover effects
- Sombras e elevações
- Ícones profissionais

## 🚀 Deploy

Para fazer deploy, você pode usar:

- **Vercel** (recomendado para React/Vite)
- **Netlify**
- **GitHub Pages**
- **Railway**
- Qualquer host que suporte sites estáticos

```bash
# Build do projeto
npm run build

# A pasta 'dist' contém os arquivos otimizados
```

## 📝 Customização

### Cores

Edite as variáveis CSS em `src/index.css`:

```css
:root {
  --color-primary: #36b9bc;  /* Cor de destaque */
  --color-black: #000000;
  --color-dark: #1a1a1a;
  /* ... outras cores */
}
```

### Conteúdo

Todo o conteúdo está nos arquivos de tradução em `src/locales/`. Edite conforme necessário:

- `pt.json` - Conteúdo em português
- `en.json` - Conteúdo em inglês
- `es.json` - Conteúdo em espanhol

## 📄 Licença

Este projeto foi desenvolvido para o Grupo HD - Segurança Especializada.

---

Desenvolvido com profissionalismo e segurança 🛡️
