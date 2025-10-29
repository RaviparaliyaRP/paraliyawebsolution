# Lottie Animation Files

This folder contains Lottie animation JSON files for the website.

## How to Add a Lottie Animation

### Option 1: Using LottieFiles URL (Recommended)

1. Go to https://lottiefiles.com/free
2. Search for animations:
   - "web development"
   - "coding"
   - "website builder"
   - "developer workspace"
   - "digital agency"
3. Filter by: Free animations only
4. Choose an animation that matches your brand colors (blue/purple)
5. Click on the animation → Copy the URL
6. Update `src/components/sections/Hero.tsx`:
   ```jsx
   const lottieUrl = 'https://assets2.lottiefiles.com/packages/lf20_tfb3estd.json';
   ```

### Option 2: Using Local JSON File

1. Go to https://lottiefiles.com/free
2. Find your animation
3. Click "Download" → "Lottie JSON"
4. Save the file as `hero-animation.json` in this folder
5. Update `src/components/sections/Hero.tsx` to use local file:
   ```jsx
   import animationData from '@/public/lottie/hero-animation.json';
   
   // Then use animationData directly instead of fetching from URL
   ```

## Recommended Free Animations

- **Web Development**: Search "web development isometric"
- **Coding**: Search "coding animation blue"
- **Website Builder**: Search "website construction"
- **Developer**: Search "developer workspace"

## File Size Recommendations

- Keep animations under 200KB for best performance
- Simple animations (50-100KB) load faster
- Complex animations (100-200KB) are acceptable but slower

## Current Animation

Currently using a placeholder URL. Replace with your chosen animation!
