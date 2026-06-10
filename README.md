# Parvin V Ramroop - Personal Portfolio Website

## Project Overview

I built this portfolio to represent myself professionally as I approach graduation from Queens College (CUNY) with a degree in Computer Science. The goal was to create something that feels like me -- not just a list of skills, but a real picture of who I am, what I have built, and where I am headed. I want employers in defense and aerospace to be able to land on this site and immediately understand my background, my work, and how to reach me.

The site has five pages, a dark purple theme, responsive design for mobile and desktop, and interactive features built with vanilla JavaScript. It is hosted on GitHub Pages.

**Live Site:** https://ParvinR.github.io/portfolio  
**Repository:** https://github.com/ParvinR/portfolio

---

## Part 1: Content

### Q&A

1. **What is your full name as you want it displayed professionally?**  
   Parvin V Ramroop

2. **What is the purpose of your portfolio website?**  
   To give potential employers and collaborators a clear picture of who I am and what I can do. I want someone at a company like Lockheed Martin to be able to visit this site, look at my projects and resume, and feel confident reaching out.

3. **Who is the target audience?**  
   Mostly defense and aerospace recruiters, but also general tech employers. Professors and research collaborators are a secondary audience.

4. **What skills do you want to highlight?**  
   My strongest languages are C++, Java, and Python. I also work with JavaScript, React, SQL, and HTML/CSS. On the research side I have experience with Bayesian Optimization, Gaussian Processes, and machine learning tools like scikit-optimize, GPyOpt, NumPy, Pandas, and Matplotlib. For tools and environment I use Git, VS Code, Eclipse, PowerShell, AWS, and MySQL.

5. **What projects or work will you showcase?**  
   Three projects: my Bayesian Optimization research from Queens College, a Java-based Diabetes Predictor I helped build with a team, and a React tool I built for structured multi-AI collaboration between Claude and ChatGPT.

6. **How will you describe yourself in a short professional bio?**  
   I am a Computer Science senior at Queens College with hands-on research experience, a background in embedded systems and machine learning, and a long-term career path toward defense and aerospace engineering. After graduation I plan to join the Air National Guard and eventually pursue an embedded systems role at Lockheed Martin, while working toward an online MS in Electrical Engineering at the University of Colorado.

7. **What pages will your site include?**  
   Home, About, Projects, Resume, and Contact.

8. **What is your career goal or desired role?**  
   Embedded Systems Engineer in the defense and aerospace industry. My path includes the Air National Guard and an MS in Electrical Engineering at the University of Colorado.

9. **What technologies or tools do you have experience with?**  
   C++, Java, Python, JavaScript, React, HTML, CSS, SQL, Git, VS Code, Eclipse, PowerShell, AWS, MySQL, NumPy, Pandas, Matplotlib, scikit-optimize, GPyOpt.

10. **What achievements or experiences are worth highlighting?**  
    Undergraduate research in Bayesian Optimization under Prof. Bon Sy at Queens College. A custom Random Forest classifier built from scratch in Java that achieved 94% accuracy on diabetes prediction data. A React-based multi-AI collaboration tool. A remote MySQL database deployed on AWS RDS for a structured query system. I also hold a Purple Dragon Black Belt and have been a martial arts instructor since 2019. I am a Red Cross Certified Lifeguard and CPR certified. I have worked as a private tutor in math, science, and programming.

11. **What call-to-action should visitors take?**  
    I want visitors to view my projects, check my resume, and reach out through the contact form or directly by email.

12. **Will you include a resume?**  
    Yes. It is embedded as a PDF on the Resume page with a download button so visitors can save it easily.

13. **What social or professional links will you include?**  
    GitHub, LinkedIn, and email.

---

## Part 2: Design

### Q&A

1. **What overall style will best represent you?**  
   Bold and technical with a dark theme. I wanted something that feels like it belongs in the engineering and defense world, not a generic light-mode portfolio.

2. **What color scheme will you use and why?**  
   Deep charcoal background (#0d0d14) with purple accents (#7c3aed and #a78bfa). I chose purple partly because it matches my martial arts background (Purple Dragon) and partly because it stands out from the sea of blue tech portfolios.

3. **What fonts will you use for headings and body text?**  
   Playfair Display for headings because it is elegant and serious. DM Sans for body text because it is clean and easy to read. JetBrains Mono for code snippets and tech tags.

4. **How will your design reflect your personality or field?**  
   The dark theme and technical feel match the embedded systems and defense engineering world I am trying to enter. The serif headings add a layer of professionalism. The personal photos and Beyond the Code section show that there is a real person behind the resume.

5. **What layout will your homepage follow?**  
   A hero section at the top with my name and a typing animation, followed by a short about section with a skills grid, then featured project cards, then a contact form at the bottom.

6. **How will you organize project sections visually?**  
   Cards with a title, short description, technology tags, and a GitHub link. Three cards across on desktop, stacked vertically on mobile.

7. **Will the site be mobile-friendly?**  
   Yes. I used CSS Flexbox and Grid throughout with media queries at 900px and 640px. On mobile the full navbar collapses into a hamburger menu.

8. **What visual hierarchy will guide visitors?**  
   My name and role are the first thing you see. From there the page guides you through about, projects, resume, and contact in a natural reading order. Font size, weight, and color contrast all reinforce that hierarchy.

9. **How will consistency be maintained across pages?**  
   One shared CSS file with custom properties handles all colors, fonts, and spacing. Every page uses the same navbar and footer so the experience feels connected.

10. **How will accessibility be considered?**  
    I used semantic HTML elements throughout, added aria-label attributes on buttons and images, included alt text on every image, and made sure form fields are properly labeled. Body text meets WCAG AA contrast requirements against the dark background. Font size is at least 16px everywhere.

11. **Will you use icons, images, or illustrations?**  
    Yes. Font Awesome for UI icons, Devicons for the tech stack grid, and two personal photos on the About page in an auto-rotating carousel. One is a headshot and the other is a photo with my martial arts team.

12. **What portfolio websites inspired your design?**  
    Dark-themed developer portfolios that feel technical but not cluttered. I wanted something clean and purposeful rather than flashy.

---

## Part 3: Interactivity

### Q&A

1. **What interactive elements will your site include?**  
   A sticky navbar that highlights the active page, a hamburger menu on mobile, hover effects on cards and buttons, scroll-triggered fade-in animations, a contact form with field validation, a resume PDF embed with a download button, and an auto-rotating photo carousel on the About page.

2. **Will your site include a contact form? How will it work?**  
   Yes. The form has Name, Email, Subject, and Message fields. When the user submits, JavaScript checks every field and shows an error message inline if something is missing or invalid. Once everything passes validation a success banner fades in. Messages get delivered to my email through Formspree.

3. **What JavaScript features will you implement?**  
   A typewriter animation that cycles through my different roles in the hero section. Scroll-triggered fade-ins using getBoundingClientRect() so sections animate in as you scroll down. Smooth scrolling on anchor links. Active nav link highlighting that updates as you scroll. Contact form validation. A hamburger menu toggle. An auto-rotating image carousel with a smooth fade transition between photos.

4. **How will users receive feedback from interactions?**  
   Cards lift slightly with a glow on hover. Buttons shift color when you hover over them. The form shows specific error messages next to each invalid field, and after a successful submit the whole form is replaced by an animated success message. The active nav link changes to show which page you are currently on.

5. **How does interactivity improve the user experience?**  
   The animations and transitions make the site feel polished rather than static. The typewriter effect communicates multiple roles without cluttering the hero. Clear form feedback means visitors do not have to guess what went wrong. And the active nav highlighting helps people keep their bearings across a five-page site.

---

## Target Audience

Primary: defense and aerospace employers and tech recruiters.  
Secondary: professors, academic peers, and research collaborators.

---

## Content Strategy

The site leads with a strong hero section and immediately points visitors toward my projects and contact info. The About page goes deeper on skills and education and includes a personal Beyond the Code section that shows some of my background outside of academics. The Projects page has enough technical detail for an engineer or recruiter to understand the scope and complexity of each project. The Resume page makes it easy to view or download my resume. The Contact page removes every barrier to getting in touch.

---

## Information Organization

| Page | Purpose |
|------|---------|
| Home | First impression, about snapshot, project previews, contact form |
| About | Full bio, skills by category, career goals, personal background |
| Projects | Detailed project cards with descriptions and GitHub links |
| Resume | Embedded PDF with download and open in new tab buttons |
| Contact | Contact form plus GitHub, LinkedIn, and email links |

---

## Visual Design

### Color Palette

| Role | Value |
|------|-------|
| Background | #0d0d14 |
| Surface / Card | #13131f |
| Accent primary | #7c3aed |
| Accent light | #a78bfa |
| Text primary | #f1f0f5 |
| Text muted | #9592a8 |
| Border | #2a2a3d |

### Typography

| Role | Font | Weight |
|------|------|--------|
| Display / H1 | Playfair Display | 700 |
| Headings H2 and H3 | Playfair Display | 600 |
| Body | DM Sans | 400 |
| Labels and Captions | DM Sans | 500 |
| Code and Tags | JetBrains Mono | 400 |

### Wireframe

```
+--------------------------------------------------+
| NAVBAR: [PVR.]  [Home] [About] [Projects] [Resume] [Contact] |
+--------------------------------------------------+
|                                                  |
|   HERO SECTION                                   |
|   // Hello, world                                |
|   Parvin V Ramroop                               |
|   [Typing animation: Researcher / Engineer ...]  |
|   [View Projects]   [Contact Me]                 |
|                                                  |
+--------------------------------------------------+
|   ABOUT PREVIEW                                  |
|   [Bio paragraph]      [Skills icon grid]        |
+--------------------------------------------------+
|   FEATURED PROJECTS                              |
|   [Card 1]    [Card 2]    [Card 3]               |
|   Title       Title       Title                  |
|   Description Description Description            |
|   Tags        Tags        Tags                   |
+--------------------------------------------------+
|   CONTACT                                        |
|   [Links]     [Name field]                       |
|               [Email field]                      |
|               [Message field]                    |
|               [Send Button]                      |
+--------------------------------------------------+
|   FOOTER: 2026 Parvin V Ramroop                  |
+--------------------------------------------------+
```

---

## Technical Overview

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 with semantic elements |
| Styling | CSS3 with custom properties, Flexbox, Grid, and media queries |
| Scripting | Vanilla JavaScript ES6 |
| Icons | Font Awesome and Devicons via CDN |
| Fonts | Google Fonts |
| Form backend | Formspree |
| Hosting | GitHub Pages |
| Version control | Git and GitHub |

### File Structure

```
portfolio/
├── index.html
├── about.html
├── projects.html
├── resume.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── headshot.jpg
│   ├── dojo.jpg
│   └── resume.pdf
└── README.md
```

---

## Accessibility (Extra Credit)

I put real thought into accessibility throughout this project. Every page uses semantic HTML5 elements so screen readers and assistive tools can understand the structure. All interactive elements and images have aria-label attributes. Every image has descriptive alt text. Form error messages use role="alert" so they get announced automatically. The success banner uses role="status". Body text passes WCAG AA contrast requirements against the dark background. All navigation and form elements work with keyboard only. Body font size stays at 16px or larger everywhere.

## Responsive Design (Extra Credit)

The site works on any screen size. I used CSS Flexbox and Grid throughout so layouts adjust naturally. Media queries at 900px and 640px handle the main breakpoints. On small screens the navbar collapses into a hamburger menu, and the project cards, skills grid, about layout, and contact form all stack cleanly. I tested it on a real mobile device and it looks correct.

---

## Timeline / Project Milestones

| Milestone | Task |
|-----------|------|
| Week 1 | Plan content, write README, set up GitHub repo |
| Week 2 | Build HTML structure for all five pages |
| Week 3 | Write CSS for layout, colors, typography, and responsiveness |
| Week 4 | Add JavaScript for animations, form validation, and scroll behavior |
| Week 5 | Test on different browsers and screen sizes, fix issues |
| Week 6 | Deploy to GitHub Pages, final review, submit |

---

## External Resources

- [Google Fonts Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- [Google Fonts DM Sans](https://fonts.google.com/specimen/DM+Sans)
- [Google Fonts JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- [Font Awesome Icons](https://fontawesome.com/)
- [Devicons](https://devicons.dev/)
- [Formspree contact form backend](https://formspree.io/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [MDN getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
