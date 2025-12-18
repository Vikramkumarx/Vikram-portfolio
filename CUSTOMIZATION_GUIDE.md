# 🎨 Portfolio Customization Guide

## Quick Start Checklist ✅

### 1. Replace Images
- [ ] Add your profile photo as `assets/profile.png`
- [ ] Add about section image as `assets/about.png`
- [ ] Replace project screenshots (`project1.jpg` to `project6.jpg`)
- [ ] Upload your resume as `assets/Vikram_Kumar_Resume.pdf`

### 2. Update Personal Info in `index.html`

**Hero Section (Lines 36-43)**
```html
<h1 class="hero-name">Your Name</h1>
<p class="hero-description">Your tagline here</p>
```

**About Section (Lines 142-152)**
- Update your bio and description
- Modify education details
- Change focus areas

**Projects Section (Lines 186-433)**
- Update project titles
- Change descriptions
- Update GitHub links
- Modify technology tags

**Contact Section (Lines 456-487)**
- Update email address
- Change social media links
- Modify location

### 3. Customize Colors in `style.css`

**Change Color Scheme (Lines 2-15)**
```css
:root {
    --primary-color: #6366f1;      /* Main color */
    --secondary-color: #ec4899;     /* Accent color */
    --accent-color: #14b8a6;        /* Highlight color */
}
```

**Popular Color Schemes:**

**Blue & Purple (Current)**
```css
--primary-color: #6366f1;
--secondary-color: #ec4899;
```

**Green & Teal**
```css
--primary-color: #10b981;
--secondary-color: #14b8a6;
```

**Orange & Red**
```css
--primary-color: #f97316;
--secondary-color: #ef4444;
```

**Purple & Pink**
```css
--primary-color: #a855f7;
--secondary-color: #ec4899;
```

### 4. Update Typing Effect in `script.js`

**Change Typing Texts (Lines 63-69)**
```javascript
const texts = [
    'Your Title 1',
    'Your Title 2',
    'Your Title 3',
    'Your Title 4',
    'Your Title 5'
];
```

### 5. Add More Skills

**In `index.html` (Skills Section)**
```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fab fa-your-icon"></i>
    </div>
    <h4>Skill Name</h4>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

### 6. Add More Projects

**Copy this template in Projects Section:**
```html
<div class="project-card" data-aos="fade-up">
    <div class="project-image">
        <img src="assets/your-project.jpg" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <a href="your-github-link" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
                <a href="your-live-link" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description here</p>
        <div class="project-tags">
            <span class="tag">Tech 1</span>
            <span class="tag">Tech 2</span>
            <span class="tag">Tech 3</span>
        </div>
    </div>
</div>
```

### 7. Setup Contact Form

**Option 1: EmailJS (Recommended)**
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create email service
3. Get your Service ID, Template ID, and Public Key
4. Update `script.js` (Line 120-140)

**Option 2: Formspree**
1. Sign up at [Formspree](https://formspree.io/)
2. Create a form
3. Get your form endpoint
4. Update form action in `index.html`

**Option 3: Custom Backend**
- Create your own API endpoint
- Update fetch URL in `script.js`

### 8. Add Google Analytics

**In `index.html` before `</head>`:**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### 9. SEO Optimization

**Update Meta Tags in `index.html`:**
```html
<meta name="description" content="Your description">
<meta name="keywords" content="your, keywords, here">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="link-to-preview-image">
```

### 10. Performance Tips

**Optimize Images:**
- Use WebP format for better compression
- Compress images using [TinyPNG](https://tinypng.com/)
- Recommended sizes:
  - Profile: 500x500px
  - About: 800x600px
  - Projects: 800x600px

**Enable Lazy Loading:**
```html
<img src="image.jpg" loading="lazy" alt="Description">
```

## 🚀 Deployment Guide

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Production deploy
netlify deploy --prod
```

### Deploy to GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch (main/master)
4. Select folder (root)
5. Save

## 📱 Testing Checklist

- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge
- [ ] Test on mobile devices
- [ ] Test all links
- [ ] Test contact form
- [ ] Test resume download
- [ ] Check loading speed
- [ ] Verify SEO tags

## 🎯 Next Steps

1. **Add Blog Section** (Optional)
2. **Add Testimonials** (Optional)
3. **Add Certifications** (Optional)
4. **Add Experience Timeline** (Optional)
5. **Add Dark/Light Mode Toggle** (Optional)

## 💡 Pro Tips

1. **Keep it Simple**: Don't overcomplicate the design
2. **Update Regularly**: Keep projects and skills current
3. **Mobile First**: Test on mobile devices first
4. **Fast Loading**: Optimize images and code
5. **Unique Content**: Make it personal and authentic
6. **Call to Action**: Make it easy for people to contact you
7. **Proofread**: Check for typos and errors
8. **Get Feedback**: Ask friends to review

## 🆘 Need Help?

- Check `README.md` for basic setup
- Review code comments for explanations
- Contact: Vikram10072003@gmail.com

---

**Happy Customizing! 🎨**
