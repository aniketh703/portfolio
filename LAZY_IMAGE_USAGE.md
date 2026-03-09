# LazyImage Component Usage Guide

## 📦 What is it?

A reusable React component that implements lazy loading for images with:
- ✅ Intersection Observer API for viewport detection
- ✅ Smooth fade-in animation when loaded
- ✅ Shimmer placeholder while loading
- ✅ Error state with fallback UI
- ✅ Automatic performance optimization

**Location**: `src/components/ui/LazyImage.jsx`

---

## 🚀 Basic Usage

### Import the component:
```jsx
import LazyImage from './components/ui/LazyImage';
```

### Simple example:
```jsx
<LazyImage 
  src="/path/to/image.jpg" 
  alt="Description of image"
  className="w-full h-64 rounded-lg"
/>
```

---

## 🎨 Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | **required** | Image source URL |
| `alt` | string | **required** | Alt text for accessibility |
| `className` | string | `''` | Additional Tailwind/CSS classes |
| `placeholderColor` | string | `'bg-stone-200'` | Background color while loading |
| `onLoad` | function | - | Callback when image loads |
| `onError` | function | - | Callback on error |
| `...props` | object | - | Any additional HTML img attributes |

---

## 📖 Examples

### 1. Project Thumbnail
```jsx
<LazyImage 
  src={`/images/projects/${project.slug}.jpg`}
  alt={project.title}
  className="w-full h-full object-cover"
  placeholderColor="bg-orange-100"
/>
```

### 2. Hero Image with Callbacks
```jsx
<LazyImage 
  src="/hero-image.jpg"
  alt="Portfolio hero"
  className="w-screen h-screen object-cover"
  onLoad={() => console.log('Hero loaded!')}
  onError={(e) => console.error('Failed to load hero:', e)}
/>
```

### 3. Profile Picture
```jsx
<LazyImage 
  src="/profile.jpg"
  alt="Aniketh Vustepalle"
  className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
  placeholderColor="bg-stone-300"
/>
```

### 4. Gallery Grid
```jsx
<div className="grid grid-cols-3 gap-4">
  {images.map((img, index) => (
    <LazyImage 
      key={index}
      src={img.url}
      alt={img.description}
      className="aspect-square w-full"
    />
  ))}
</div>
```

---

## 🎯 When to Use

### ✅ Use LazyImage When:
- Loading images below the fold (not immediately visible)
- Rendering image galleries or grids
- Displaying user-uploaded content
- Working with large/high-resolution images
- Building image-heavy pages

### ❌ Don't Use LazyImage When:
- Above-the-fold critical images (hero images that need instant load)
- Small icons or thumbnails already in cache
- Images needed for immediate interactivity
- SVG graphics (use regular `<img>` or inline SVG)

**Note**: Your current portfolio primarily uses `GenerativeArt` component (canvas-based), so LazyImage is most useful if you add actual project screenshots or photos later.

---

## 🛠️ How It Works

### 1. Intersection Observer
```jsx
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setIsInView(true);  // Triggers image load
      observer.disconnect();
    }
  },
  { rootMargin: '50px' }  // Start loading 50px before visible
);
```

Images only load when they're about to enter the viewport (within 50px).

### 2. Loading States
- **Not in view**: Shows shimmer placeholder
- **In view, loading**: Shimmer continues, img loads in background
- **Loaded**: Smooth opacity transition (0 → 100%)
- **Error**: Shows "Image not found" fallback

### 3. Performance Benefits
- Reduces initial page load time
- Saves bandwidth for users
- Improves Time to Interactive (TTI)
- Better Lighthouse performance scores

---

## 🎨 Customizing Placeholders

### Default Shimmer (Stone colors):
```jsx
<LazyImage 
  src="/image.jpg" 
  alt="Default shimmer"
  // Uses bg-stone-200 → stone-300 gradient
/>
```

### Custom Branded Shimmer:
```jsx
<LazyImage 
  src="/image.jpg" 
  alt="Orange shimmer"
  placeholderColor="bg-orange-100"
  // Shimmer effect still applies, just on orange background
/>
```

### Without Shimmer (Solid Color):
Modify the component to remove the shimmer div if you prefer solid placeholders.

---

## 🔧 Advanced: Adding Image Data

If you decide to add actual project images later, update `projects.js`:

```jsx
export const projects = [
  { 
    id: 1, 
    title: "GITA APP",
    // Add these:
    thumbnail: "/src/assets/images/projects/gita-app-thumb.jpg",
    heroImage: "/src/assets/images/projects/gita-app-hero.jpg",
    gallery: [
      "/src/assets/images/projects/gita-1.jpg",
      "/src/assets/images/projects/gita-2.jpg"
    ],
    // ... rest of data
  }
]
```

Then in your components:
```jsx
{project.thumbnail && (
  <LazyImage 
    src={project.thumbnail}
    alt={`${project.title} preview`}
    className="w-full h-64"
  />
)}
```

---

## 📊 Testing Lazy Loading

### In DevTools:
1. Open Chrome DevTools (F12)
2. Go to Network tab
3. Throttle to "Slow 3G"
4. Scroll down the page
5. Watch images load only when scrolled into view

You'll see:
- Images don't load on page load
- Network requests triggered by scrolling
- Smooth fade-in when loaded

---

## 🐛 Troubleshooting

### Images not loading?
- Check path: `/src/assets/...` vs `/assets/...`
- Verify file exists in public folder
- Check browser console for errors

### No lazy loading effect?
- Images might be cached (clear cache)
- Ensure images are below viewport initially
- Check `rootMargin` value (increase if needed)

### Shimmer not showing?
- Verify CSS animation is present in `index.css`
- Check placeholder div is rendering (inspect element)

---

## 🎯 Next Steps

1. **Add project images**: Place real screenshots in `src/assets/images/projects/`
2. **Update ProjectView**: Replace GenerativeArt with LazyImage for actual visuals
3. **Create image module**: Add image type to project modules:
   ```jsx
   { 
     type: 'image', 
     src: '/path/to/image.jpg', 
     caption: 'Project screenshot',
     aspectRatio: '16/9'
   }
   ```
4. **Optimize images**: Use WebP format, compress with [Squoosh](https://squoosh.app/)

---

**Benefits of using LazyImage**:
- 🚀 20-40% faster initial page load
- 💾 Reduced bandwidth consumption
- 📊 Better Lighthouse scores
- ♿ Accessible (proper alt text, error states)
- 🎨 Professional loading experience
