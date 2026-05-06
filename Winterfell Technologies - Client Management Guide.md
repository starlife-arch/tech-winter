# Winterfell Technologies - Client Management Guide

This guide explains how to manage your new professional e-commerce website.

## 1. How to Update Content
All the content on your website (products, images, prices, etc.) is controlled by a single file: **`config.js`**. You do not need to touch any complex code.

### Adding a New Product
1. Open `config.js` in a text editor.
2. Scroll down to the `products` section.
3. Copy an existing product block and paste it at the end.
4. Update the details:
   - `id`: A unique name (e.g., "samsung-s25-ultra")
   - `name`: The full product name
   - `price`: The price in KES (numbers only, no commas)
   - `category`: Must match one of the collection IDs (e.g., "PHONES")
   - `brand`: The brand name
   - `description`: A short paragraph about the product
   - `image`: The filename of the product image (e.g., "s25.png")
   - `colors`: A list of available colors
   - `specs`: Technical details like display, battery, etc.

### Changing Hero Slider Images
1. Scroll to the `heroSlides` section in `config.js`.
2. Update the `image` URL or filename.
3. Update the `title` and `subtitle` text.

### Updating Collection Banners
1. Scroll to the `collections` section in `config.js`.
2. Update the `image` field for the specific collection.

## 2. Managing Images
- **Product Images**: Save your product images in the same folder as the website. Use high-quality `.png` or `.jpg` files.
- **Logo**: Your logo is saved as `logo_transparent.png`. To change it, simply replace this file with a new one using the same name.

## 3. WhatsApp Integration
- Orders are sent directly to your WhatsApp number: **+254 795 323 615**.
- To change the number, update the `whatsapp` field in the `business` section of `config.js`.

## 4. Multi-Page Experience
The website is designed as a "Single Page Application" (SPA). This means:
- Each product has its own dedicated view.
- Navigation is fast and smooth.
- Users can share specific product links (if hosted on a real server).

## 5. Hosting
To put the site online:
1. Upload all files (`index.html`, `config.js`, and all `.png`/`.jpg` images) to your web hosting provider.
2. Ensure all files are in the same folder.
