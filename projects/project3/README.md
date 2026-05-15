[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Hl2JaK93)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=19230396)

# Oblig 3 – Scrollytelling (Improved Version)

## 🎯 Assignment Description
The assignment was to create a scrollytelling webpage based on one of the UN Sustainable Development Goals. We chose Goal 14: Life Below Water. The task required us to use GSAP, ScrollTrigger, SVG animations, semantic HTML, and structured CSS using Sass and BEM.

## ✨ Improvements Made

### 1. Layout and Background
- Changed the background for each scene to create a **natural visual transition** from sky → beach → ocean → seafloor.
- Used `linear-gradient` and organized SCSS for smooth visual flow.
- Replaced harsh color changes with soft, flowing backgrounds.

### 2. Animations and Interactivity
- Added a **realistic rocking boat** animation using JavaScript with `setInterval` and `transform`.
- Implemented **bubbles** and **wave effects** to enhance the ocean atmosphere.
- Used `GSAP` and `ScrollTrigger` to create dynamic animations.

### 3. User Interaction
- Created an interactive feature where users can **click on plastic** elements to send them to a trash can and make them disappear.
- A button appears when scrolling to the bottom that **restores all plastics** and scrolls back to the top.

### 4. Code and Structure
- Cleaned up SCSS files: each scene has its own partial component.
- Used `@use` to import base and component styles.
- Updated HTML with **semantic tags**, proper heading hierarchy, and meaningful text.

## 📁 Project Structure
The project is organized as follows:
- `index.html` – main HTML file containing all scroll scenes
- `assets/styles/styles.css` – compiled from SCSS partials
- `assets/scripts/script.js` – contains GSAP/ScrollTrigger and custom animations

## 🔗 Link to Original Version
The original version of this assignment can be found here:  
[GitHub – Oblig 3 original](https://github.com/idg1293-2025/oblig3-2)


