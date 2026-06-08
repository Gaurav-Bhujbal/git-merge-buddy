# Rainbow School Website

## React + Vite + Tailwind CSS Project

### Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your Images**

   Place your uploaded images into `public/images/` and rename them as follows:

   | Your Uploaded File | Rename To |
   |---|---|
   | `image.png` | `logo.png` |
   | `WhatsApp Image 2026-06-05 at 1.46.01 PM.jpeg` | `brochure-main.jpg` |
   | `WhatsApp Image 2026-06-08 at 10.16.14 AM.jpeg` | `annual-day-1.jpg` |
   | `WhatsApp Image 2026-06-08 at 10.16.05 AM.jpeg` | `annual-day-2.jpg` |
   | `WhatsApp Image 2026-06-08 at 10.16.06 AM (2).jpeg` | `annual-day-3.jpg` |
   | `WhatsApp Image 2026-06-08 at 10.16.06 AM.jpeg` | `annual-day-4.jpg` |
   | `WhatsApp Image 2026-06-08 at 10.16.07 AM (1).jpeg` | `annual-day-5.jpg` |
   | `WhatsApp Image 2026-06-08 at 10.16.07 AM.jpeg` | `annual-day-6.jpg` |
   | `WhatsApp Image 2026-06-08 at 10.16.08 AM (1).jpeg` | `annual-day-7.jpg` |
   | `WhatsApp Image 2026-06-08 at 10.16.08 AM.jpeg` | `annual-day-8.jpg` |
   | `WhatsApp Image 2026-06-08 at 10.16.09 AM.jpeg` | `annual-day-9.jpg` |
   | `WhatsApp Image 2026-06-08 at 10.16.10 AM (1).jpeg` | `annual-day-10.jpg` |
   | `WhatsApp Image 2026-06-08 at 10.16.10 AM.jpeg` | `annual-day-11.jpg` |
   | `WhatsApp Image 2026-06-08 at 10.16.11 AM (1).jpeg` | `annual-day-12.jpg` |
   | `WhatsApp Image 2026-06-08 at 10.16.06 AM (1).jpeg` | `teachers-group.jpg` |

3. **Add Your Video (Optional)**

   Open `src/components/Hero.jsx` and replace any `<SwiperSlide>` containing an `<img>` with:
   ```jsx
   <video autoPlay muted loop playsInline className="w-full h-full object-cover">
     <source src="/videos/school-video.mp4" type="video/mp4" />
   </video>
   ```
   Place your video in `public/videos/`.

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173`

5. **Build for Production**
   ```bash
   npm run build
   ```
   The `dist/` folder will contain your optimized website.

### Features
- Fully responsive (mobile, tablet, desktop)
- Smooth animations with Framer Motion & AOS
- Swiper.js sliders for hero & events
- Animated counters with CountUp
- Glassmorphism effects
- Masonry gallery with lightbox
- Form validation
- SEO-friendly structure
- Accessibility compliant

### Tech Stack
- React 18
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Swiper.js
- React Icons
- React CountUp
- AOS Animation
