# 📸 GUIA: Adicionar Imagens ao Site

## 🎯 Onde adicionar imagens

### Estrutura recomendada:

```
public/
├── images/
│   ├── logo/
│   │   ├── logo-completo.png
│   │   ├── logo-simbolo.png
│   │   └── logo-branco.png
│   ├── hero/
│   │   ├── hero-home.jpg
│   │   ├── hero-about.jpg
│   │   └── hero-safety-school.jpg
│   ├── services/
│   │   ├── controle-acesso.jpg
│   │   ├── recepcao.jpg
│   │   ├── seguranca-vip.jpg
│   │   └── ...
│   ├── team/
│   │   └── david-anacleto.jpg
│   └── gallery/
│       └── ...
```

---

## 🔧 Como Usar as Imagens

### 1. Logo no Header

**Arquivo**: `src/components/Header.jsx`

```jsx
// Substituir a div logo-text por:
<Link to="/" className="logo" onClick={closeMenu}>
  <img 
    src="/images/logo/logo-completo.png" 
    alt="Grupo HD - Segurança Especializada"
    className="logo-image"
  />
</Link>
```

**CSS adicional** em `Header.css`:
```css
.logo-image {
  height: 50px;
  width: auto;
}
```

---

### 2. Hero Section com Imagem de Fundo

**Arquivo**: `src/pages/Home.jsx`

```jsx
<section className="hero" style={{
  backgroundImage: 'url(/images/hero/hero-home.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
```

**Ou no CSS** `Home.css`:
```css
.hero {
  background-image: url('/images/hero/hero-home.jpg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
}
```

---

### 3. Placeholder de "Quem Somos"

**Arquivo**: `src/pages/Home.jsx`

Substituir:
```jsx
<div className="image-placeholder">
  <FaShieldAlt />
</div>
```

Por:
```jsx
<img 
  src="/images/team/equipe-grupo-hd.jpg" 
  alt="Equipe Grupo HD"
  className="about-image-photo"
/>
```

**CSS adicional**:
```css
.about-image-photo {
  width: 100%;
  border-radius: 8px;
  box-shadow: var(--shadow-lg);
}
```

---

### 4. Foto do CEO

**Arquivo**: `src/pages/About.jsx`

Substituir:
```jsx
<div className="image-placeholder">
  <FaUserTie />
</div>
```

Por:
```jsx
<img 
  src="/images/team/david-anacleto.jpg" 
  alt="David Anacleto - CEO Grupo HD"
  className="ceo-photo"
/>
```

**CSS adicional** em `About.css`:
```css
.ceo-photo {
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
  box-shadow: var(--shadow-lg);
}
```

---

### 5. Galeria de Serviços

**Arquivo**: `src/pages/Services.jsx`

Adicionar imagens aos cards de serviço:

```jsx
<div className="service-detail">
  <div className="service-detail-image">
    <img 
      src="/images/services/controle-acesso.jpg" 
      alt="Controle de Acesso"
    />
  </div>
  <div className="service-detail-content">
    {/* ... conteúdo ... */}
  </div>
</div>
```

---

## 📦 Formatos e Tamanhos Recomendados

| Tipo | Formato | Dimensões | Tamanho |
|------|---------|-----------|---------|
| Logo | PNG (transparente) | 400x100px | < 50KB |
| Hero | JPG | 1920x1080px | < 500KB |
| Serviços | JPG | 800x600px | < 200KB |
| Fotos Equipe | JPG | 500x500px | < 150KB |
| Ícones | SVG ou PNG | 64x64px | < 20KB |

---

## 🎨 Otimização de Imagens

### Antes de adicionar:

1. **Redimensione** para o tamanho correto
2. **Comprima** usando:
   - TinyPNG: https://tinypng.com
   - Squoosh: https://squoosh.app
3. **Converta** para WebP (opcional, melhor performance):
   ```bash
   npm install -D vite-plugin-webp
   ```

---

## 🔍 SEO: Sempre use alt text

✅ **BOM**:
```jsx
<img src="/images/logo.png" alt="Grupo HD - Segurança Especializada" />
```

❌ **RUIM**:
```jsx
<img src="/images/logo.png" />
```

---

## 💡 Dica: Lazy Loading

Para imagens abaixo da dobra:

```jsx
<img 
  src="/images/gallery/foto.jpg" 
  alt="Descrição"
  loading="lazy"
/>
```

---

## 🎯 Exemplo Completo: Hero com Overlay

```jsx
// JSX
<section className="hero-with-image">
  <div className="hero-overlay"></div>
  <div className="container hero-content">
    <h1>Título</h1>
    <p>Subtítulo</p>
  </div>
</section>
```

```css
/* CSS */
.hero-with-image {
  position: relative;
  min-height: 600px;
  background-image: url('/images/hero/background.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6); /* Escurece a imagem */
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  color: white;
}
```

---

## 📸 Onde conseguir imagens

### Fotos profissionais:

1. **Contrate um fotógrafo** (recomendado para empresa séria)
2. **Banco de imagens gratuito**:
   - Unsplash: https://unsplash.com
   - Pexels: https://pexels.com
   - Pixabay: https://pixabay.com

### Busque por:
- "security guard"
- "professional security"
- "corporate security"
- "building security"
- "school security"
- "professional team"

---

## 🎨 Filtros e Efeitos com CSS

### Escala de Cinza (mais sério):
```css
img {
  filter: grayscale(30%);
}
```

### Hover Zoom:
```css
.service-card img {
  transition: transform 0.3s ease;
}

.service-card:hover img {
  transform: scale(1.05);
}
```

### Overlay colorido:
```css
.image-container {
  position: relative;
}

.image-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(54, 185, 188, 0.2); /* Ciano com opacidade */
  mix-blend-mode: multiply;
}
```

---

## 🚀 Performance: Usar srcset

Para diferentes resoluções:

```jsx
<img 
  srcSet="
    /images/hero-small.jpg 800w,
    /images/hero-medium.jpg 1200w,
    /images/hero-large.jpg 1920w
  "
  sizes="100vw"
  src="/images/hero-medium.jpg"
  alt="Grupo HD"
/>
```

---

## ✅ Checklist de Imagens

- [ ] Criar pasta `public/images/`
- [ ] Adicionar logo da empresa
- [ ] Adicionar imagens hero para cada página
- [ ] Adicionar fotos dos serviços
- [ ] Adicionar foto do CEO/Fundador
- [ ] Adicionar fotos da equipe (opcional)
- [ ] Otimizar todas as imagens
- [ ] Adicionar alt text em todas
- [ ] Testar em mobile e desktop
- [ ] Verificar tempo de carregamento

---

## 🎯 Resultado Final

Com imagens reais, o site ficará:

✅ Mais profissional
✅ Mais confiável
✅ Melhor para SEO
✅ Mais atrativo visualmente
✅ Com melhor conversão

---

**📸 Boa sorte adicionando as imagens!**

Lembre-se: Qualidade > Quantidade

Poucas imagens profissionais > Muitas imagens genéricas
