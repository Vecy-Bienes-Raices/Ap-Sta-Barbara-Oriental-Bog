# 📱 Mobile Design System: "Warm Faux Glass"
**Purpose:** Use this specification to instruct an AI to replicate the exact visual style of the "Edificio Teusaquillo" mobile property listing.

## 1. Design Philosophy
**Style Name:** "Warm Faux Glass" (Vidrio Cálido de Alto Rendimiento).
**Concept:** Replicates the premium look of frosted glass without using the computationally expensive `backdrop-filter: blur`.
**Technique:** Uses semi-transparent solid gradients layered over a warm, dark background to create depth and texture.
**Key Trait:** High local contrast (Dark Text) for readability, unlike the desktop version which uses light text.

---

## 2. Core Color Palette
| Element | Hex / RGBA | Description |
| :--- | :--- | :--- |
| **Page Background** | `radial-gradient(#c19a6b, #3e2723)` | Luxury coffee/gold gradient. |
| **Glass Card Base** | `rgba(255, 255, 255, 0.45)` | Semi-transparent warm white. |
| **Primary Text** | `#1a1a1a` | Rich Black (for Values/Body). |
| **Secondary Text** | `#3e2723` | Dark Coffee (for Labels). |
| **Accent / CTA** | `#d4af37` | Metallic Gold. |
| **Success Green** | `#10b981` | Emerald Green (for ROI/Price). |

---

## 3. Typography
- **Font Family:** `Outfit`, sans-serif (Google Fonts).
- **Weights:**
  - **400:** Body text.
  - **600:** Labels and Subtitles.
  - **700/800:** Headings, Price, and Buttons.
- **Alignment:** Always **LEFT** aligned (never justified) to avoid spacing issues on small screens.

---

## 4. CSS Component Specifications (Copy-Paste)

### A. The "Faux Glass" Card (Mobile Container)
Simulates depth using a specific multi-layer shadow and a subtle gradient that fades from 45% to 35% opacity.

```css
.glass-card {
  /* Gradient simulates light reflection and allows background color to bleed through */
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.35) 100%);
  
  /* Top border is lighter to simulate a light source edge */
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  
  /* Dual shadows: One deep for 3D float, one inner white for glass thickness */
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.6) !important;
    
  padding: 20px;
  margin-bottom: 15px;
}
```

### B. Inner Data Items (Specs & Amenities)
Slightly more opaque to ensure text legibility while maintaining the glassy feel.

```css
.spec-item, .amenity-item {
  background: rgba(255, 255, 255, 0.4); /* 40% White */
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  
  /* Delicate shadow for button-like feel */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05) !important;
}

/* Typography Rules for this Context */
.spec-item .label {
  color: #3e2723 !important; /* Capuccino Dark */
  font-weight: 700;
  text-shadow: 0 1px 1px rgba(255,255,255,0.5); /* Glow for contrast */
}

.spec-item .value {
  color: #1a1a1a;
  font-weight: 800;
}
```

### C. Highlight / Callout Box
Uses a gold tint to draw attention.

```css
.highlight-box {
  background: rgba(255, 215, 0, 0.15); /* Warm Gold Tint */
  border-left: 4px solid #d4af37; /* Solid gold accent bar */
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 15px;
  border-radius: 12px;
}
```

### D. Primary CTA Button (Share)
Distinctive gradient button with 3D press effect.

```css
#shareBtn {
  background: linear-gradient(180deg, #FFD700 0%, #FDB931 50%, #DAA520 100%);
  color: #3E2723;
  font-weight: 900;
  border-radius: 50px;
  box-shadow: 
    0 6px 0 #B8860B, /* Solid "3D side" of the button */
    0 12px 20px rgba(0, 0, 0, 0.3);
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
}
```

---

## 5. Structural Layout (Mobile)
- **Grid System:** Reset to `grid-template-columns: repeat(2, 1fr)` for simple data (Specs) and `1fr` (Single Column) for longer lists.
- **Header:** Simplified with larger font size (26px) for titles.
- **Spacing:** Reduced padding (10px container) to maximize screen real estate.
- **Scroll:** `background-attachment: scroll` on body to prevent jitter on iOS/Android.
