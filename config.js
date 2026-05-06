/**
 * ============================================================
 * WINTERFELL TECHNOLOGIES - CONTENT CONFIGURATION
 * ============================================================
 * 
 * This file contains ALL the content for your website.
 * The client can edit this file to:
 * - Add/remove/update products
 * - Change hero slider images
 * - Update collection banners
 * - Modify prices, descriptions, and specifications
 * 
 * NO CODE CHANGES NEEDED — Just update the values below!
 * ============================================================
 */

const CONFIG = {
  // ============================================================
  // BUSINESS INFO
  // ============================================================
  business: {
    name: "Winterfell Technologies",
    tagline: "Premium Electronics — Juja Town",
    description: "Juja's premier electronics store — genuine products, competitive prices, and fast service.",
    address: "Friends Corner Building, Juja Town, Along Thika Super Highway, Near Juja Posta",
    phone: "+254 795 323 615",
    whatsapp: "+254795323615",
    email: "technologieswinterfell@gmail.com",
    hours: {
      weekday: "Monday – Saturday: 8:00 AM – 8:00 PM",
      weekend: "Sunday: Closed"
    }
  },

  // ============================================================
  // HERO SLIDER IMAGES
  // ============================================================
  // Replace these URLs with your own images
  heroSlides: [
    {
      title: "New Arrivals",
      subtitle: "Phones & Laptops",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80",
      cta: "Browse Collections"
    },
    {
      title: "Premium Quality",
      subtitle: "100% Genuine Products",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80",
      cta: "Shop Now"
    },
    {
      title: "Fast Delivery",
      subtitle: "Free delivery above KES 5,000",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&q=80",
      cta: "View Offers"
    },
    {
      title: "24/7 Support",
      subtitle: "WhatsApp us anytime",
      image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=1200&q=80",
      cta: "Contact Us"
    }
  ],

  // ============================================================
  // COLLECTIONS (Categories)
  // ============================================================
  collections: [
    {
      id: "PHONES",
      name: "PHONES",
      icon: "fas fa-mobile-alt",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80",
      hasBrands: true,
      brands: ["Apple", "Samsung", "Xiaomi", "Infinix", "Tecno", "Itel"]
    },
    {
      id: "LAPTOP",
      name: "LAPTOP",
      icon: "fas fa-laptop",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80",
      hasBrands: true,
      brands: ["HP", "Dell", "Lenovo", "Apple"]
    },
    {
      id: "Powerbank",
      name: "Powerbank",
      icon: "fas fa-battery-full",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80",
      hasBrands: false
    },
    {
      id: "Chargers",
      name: "Chargers",
      icon: "fas fa-plug",
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=600&q=80",
      hasBrands: false
    },
    {
      id: "headphones",
      name: "Headphones",
      icon: "fas fa-headphones",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80",
      hasBrands: false
    },
    {
      id: "ACCESSORIES",
      name: "ACCESSORIES",
      icon: "fas fa-microchip",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80",
      hasBrands: false
    },
    {
      id: "Monitors",
      name: "Monitors",
      icon: "fas fa-desktop",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80",
      hasBrands: false
    },
    {
      id: "Home Appliances",
      name: "Home Appliances",
      icon: "fas fa-blender",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
      hasBrands: false
    }
  ],

  // ============================================================
  // PRODUCTS
  // ============================================================
  // Format: { id, name, price, category, brand, description, image, colors, specs }
  products: [
    // ── PHONES: APPLE ──
    {
      id: "iphone-15-pro-max",
      name: "iPhone 15 Pro Max 256GB",
      price: 125000,
      category: "PHONES",
      brand: "Apple",
      description: "6.7\" Super Retina XDR display, A17 Pro chip, advanced camera system with 48MP main camera, 5G, titanium design.",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80",
      colors: ["Space Black", "Silver", "Gold", "Deep Purple"],
      specs: {
        display: "6.7\" Super Retina XDR",
        processor: "A17 Pro",
        camera: "48MP + 12MP + 12MP",
        battery: "4,685 mAh",
        storage: "256GB"
      }
    },
    {
      id: "iphone-15-pro",
      name: "iPhone 15 Pro 256GB",
      price: 115000,
      category: "PHONES",
      brand: "Apple",
      description: "6.1\" Super Retina XDR, A17 Pro, 48MP triple camera, 5G, titanium design.",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80",
      colors: ["Space Black", "Silver", "Gold", "Deep Purple"],
      specs: {
        display: "6.1\" Super Retina XDR",
        processor: "A17 Pro",
        camera: "48MP + 12MP + 12MP",
        battery: "3,274 mAh",
        storage: "256GB"
      }
    },
    {
      id: "iphone-15",
      name: "iPhone 15 128GB",
      price: 85000,
      category: "PHONES",
      brand: "Apple",
      description: "6.1\" Liquid Retina display, A16 Bionic, dual camera, 5G, all-day battery.",
      image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&q=80",
      colors: ["Black", "White", "Blue", "Pink", "Yellow"],
      specs: {
        display: "6.1\" Liquid Retina",
        processor: "A16 Bionic",
        camera: "12MP + 12MP",
        battery: "3,349 mAh",
        storage: "128GB"
      }
    },

    // ── PHONES: SAMSUNG ──
    {
      id: "samsung-s24-ultra",
      name: "Samsung Galaxy S24 Ultra 256GB",
      price: 120000,
      category: "PHONES",
      brand: "Samsung",
      description: "6.8\" Dynamic AMOLED 2X, Snapdragon 8 Gen 3, 200MP camera, S Pen, 5G.",
      image: "https://images.unsplash.com/photo-1706439136009-7e3d6d5d6f9b?w=600&q=80",
      colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow"],
      specs: {
        display: "6.8\" Dynamic AMOLED 2X",
        processor: "Snapdragon 8 Gen 3",
        camera: "200MP + 50MP + 12MP",
        battery: "5,000 mAh",
        storage: "256GB"
      }
    },
    {
      id: "samsung-s24",
      name: "Samsung Galaxy S24 256GB",
      price: 98000,
      category: "PHONES",
      brand: "Samsung",
      description: "6.2\" Dynamic AMOLED 2X, Snapdragon 8 Gen 3, 50MP triple camera, 5G.",
      image: "banner_phones.png",
      colors: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow"],
      specs: {
        display: "6.2\" Dynamic AMOLED 2X",
        processor: "Snapdragon 8 Gen 3",
        camera: "50MP + 10MP + 10MP",
        battery: "4,000 mAh",
        storage: "256GB"
      }
    },
    {
      id: "samsung-a55",
      name: "Samsung Galaxy A55 5G 256GB",
      price: 52000,
      category: "PHONES",
      brand: "Samsung",
      description: "6.6\" Super AMOLED 120Hz, 50MP triple camera, 5000mAh, IP67 water resistance.",
      image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=600&q=80",
      colors: ["Awesome Iceblue", "Awesome Lilac", "Awesome Navy"],
      specs: {
        display: "6.6\" Super AMOLED 120Hz",
        processor: "Exynos 1380",
        camera: "50MP + 12MP + 5MP",
        battery: "5,000 mAh",
        storage: "256GB"
      }
    },

    // ── PHONES: XIAOMI ──
    {
      id: "xiaomi-14t",
      name: "Xiaomi 14T 256GB",
      price: 72000,
      category: "PHONES",
      brand: "Xiaomi",
      description: "Leica 50MP triple camera, 144Hz AMOLED, Dimensity 8300-Ultra, 5G.",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80",
      colors: ["Titan Black", "Titan Blue", "Titan Gray"],
      specs: {
        display: "6.67\" AMOLED 144Hz",
        processor: "Dimensity 8300-Ultra",
        camera: "50MP Leica + 50MP + 12MP",
        battery: "5,110 mAh",
        storage: "256GB"
      }
    },
    {
      id: "xiaomi-redmi-note-13-pro",
      name: "Xiaomi Redmi Note 13 Pro 256GB",
      price: 38000,
      category: "PHONES",
      brand: "Xiaomi",
      description: "200MP camera, 120Hz AMOLED, 5100mAh, 67W turbo charge.",
      image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=600&q=80",
      colors: ["Midnight Black", "Aurora Purple", "Ocean Teal"],
      specs: {
        display: "6.67\" AMOLED 120Hz",
        processor: "Snapdragon 7 Gen 1",
        camera: "200MP + 8MP + 2MP",
        battery: "5,100 mAh",
        storage: "256GB"
      }
    },

    // ── PHONES: INFINIX ──
    {
      id: "infinix-note-40-pro",
      name: "Infinix Note 40 Pro 256GB",
      price: 32000,
      category: "PHONES",
      brand: "Infinix",
      description: "6.78\" AMOLED 120Hz, 108MP camera, 5000mAh, 45W fast charge.",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80",
      colors: ["Titan Gold", "Vintage Green", "Race Black"],
      specs: {
        display: "6.78\" AMOLED 120Hz",
        processor: "MediaTek Helio G99",
        camera: "108MP + 13MP + 2MP",
        battery: "5,000 mAh",
        storage: "256GB"
      }
    },

    // ── PHONES: TECNO ──
    {
      id: "tecno-camon-30-pro",
      name: "Tecno Camon 30 Pro 256GB",
      price: 36000,
      category: "PHONES",
      brand: "Tecno",
      description: "6.67\" AMOLED 144Hz, 50MP RGBW camera, 5000mAh, 45W charging.",
      image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80",
      colors: ["Midnight Shadow", "Serenity Blue", "Ivory White"],
      specs: {
        display: "6.67\" AMOLED 144Hz",
        processor: "MediaTek Dimensity 7050",
        camera: "50MP RGBW + 50MP + 13MP",
        battery: "5,000 mAh",
        storage: "256GB"
      }
    },

    // ── PHONES: ITEL ──
    {
      id: "itel-a70",
      name: "Itel A70 128GB",
      price: 14000,
      category: "PHONES",
      brand: "Itel",
      description: "6.6\" HD+ display, 50MP AI camera, 5000mAh, Android 13.",
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&q=80",
      colors: ["Midnight Black", "Dreamy Blue", "Champagne Gold"],
      specs: {
        display: "6.6\" HD+",
        processor: "MediaTek Helio G37",
        camera: "50MP AI + 5MP",
        battery: "5,000 mAh",
        storage: "128GB"
      }
    },

    // ── LAPTOPS: HP ──
    {
      id: "hp-pavilion-15-i5",
      name: "HP Pavilion 15 Core i5 12th Gen",
      price: 65000,
      category: "LAPTOP",
      brand: "HP",
      description: "15.6\" FHD IPS, Intel Core i5-1235U, 8GB RAM, 512GB SSD, Windows 11.",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80",
      colors: ["Silver", "Black"],
      specs: {
        display: "15.6\" FHD IPS",
        processor: "Intel Core i5-1235U",
        ram: "8GB DDR4",
        storage: "512GB SSD",
        os: "Windows 11"
      }
    },
    {
      id: "hp-pavilion-14-ryzen",
      name: "HP Pavilion 14 Ryzen 5 5500U",
      price: 58000,
      category: "LAPTOP",
      brand: "HP",
      description: "14\" FHD IPS, AMD Ryzen 5 5500U, 8GB RAM, 512GB SSD, Windows 11.",
      image: "https://images.unsplash.com/photo-1588872657840-790ff3bde08c?w=600&q=80",
      colors: ["Silver", "Black"],
      specs: {
        display: "14\" FHD IPS",
        processor: "AMD Ryzen 5 5500U",
        ram: "8GB DDR4",
        storage: "512GB SSD",
        os: "Windows 11"
      }
    },

    // ── LAPTOPS: DELL ──
    {
      id: "dell-inspiron-15-i5",
      name: "Dell Inspiron 15 Core i5 12th Gen",
      price: 62000,
      category: "LAPTOP",
      brand: "Dell",
      description: "15.6\" FHD, Intel Core i5-1235U, 8GB RAM, 512GB SSD, Windows 11.",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80",
      colors: ["Silver", "Black"],
      specs: {
        display: "15.6\" FHD",
        processor: "Intel Core i5-1235U",
        ram: "8GB DDR4",
        storage: "512GB SSD",
        os: "Windows 11"
      }
    },

    // ── LAPTOPS: LENOVO ──
    {
      id: "lenovo-thinkbook-14",
      name: "Lenovo ThinkBook 14 Core i5",
      price: 60000,
      category: "LAPTOP",
      brand: "Lenovo",
      description: "14\" FHD IPS, Intel Core i5-1235U, 8GB RAM, 512GB SSD, Windows 11.",
      image: "https://images.unsplash.com/photo-1588872657840-790ff3bde08c?w=600&q=80",
      colors: ["Gray", "Black"],
      specs: {
        display: "14\" FHD IPS",
        processor: "Intel Core i5-1235U",
        ram: "8GB DDR4",
        storage: "512GB SSD",
        os: "Windows 11"
      }
    },

    // ── POWERBANKS ──
    {
      id: "powerbank-20000mah",
      name: "20000mAh Fast Charge Powerbank",
      price: 3500,
      category: "Powerbank",
      brand: "Generic",
      description: "20000mAh capacity, dual USB output, LED display, compact design.",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80",
      colors: ["Black", "White", "Blue"],
      specs: {
        capacity: "20000mAh",
        output: "Dual USB",
        fastCharge: "Yes",
        weight: "350g"
      }
    },

    // ── CHARGERS ──
    {
      id: "charger-65w-usbc",
      name: "65W USB-C Fast Charger",
      price: 2800,
      category: "Chargers",
      brand: "Generic",
      description: "65W USB-C PD charger, compatible with laptops and phones, compact design.",
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=600&q=80",
      colors: ["Black", "White"],
      specs: {
        power: "65W",
        connector: "USB-C",
        compatibility: "Universal",
        weight: "150g"
      }
    },

    // ── HEADPHONES ──
    {
      id: "headphones-wireless-bt",
      name: "Wireless Bluetooth Headphones",
      price: 4500,
      category: "headphones",
      brand: "Generic",
      description: "Wireless Bluetooth 5.0, 30-hour battery, noise cancellation, foldable design.",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80",
      colors: ["Black", "White", "Blue"],
      specs: {
        bluetooth: "5.0",
        battery: "30 hours",
        noiseCancellation: "Yes",
        weight: "250g"
      }
    },

    // ── ACCESSORIES ──
    {
      id: "screen-protector-glass",
      name: "Tempered Glass Screen Protector",
      price: 800,
      category: "ACCESSORIES",
      brand: "Generic",
      description: "9H hardness tempered glass, anti-fingerprint, easy installation.",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80",
      colors: ["Clear"],
      specs: {
        hardness: "9H",
        thickness: "0.3mm",
        coverage: "Full screen"
      }
    },

    // ── MONITORS ──
    {
      id: "monitor-24-fhd",
      name: "24\" FHD Monitor",
      price: 12000,
      category: "Monitors",
      brand: "Generic",
      description: "24\" FHD (1920x1080), 60Hz, IPS panel, HDMI/VGA inputs.",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80",
      colors: ["Black"],
      specs: {
        size: "24 inches",
        resolution: "1920x1080 FHD",
        refreshRate: "60Hz",
        panelType: "IPS"
      }
    },

    // ── HOME APPLIANCES ──
    {
      id: "blender-1000w",
      name: "1000W Electric Blender",
      price: 5500,
      category: "Home Appliances",
      brand: "Generic",
      description: "1000W motor, 2L capacity, multiple speed settings, stainless steel blades.",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
      colors: ["Black", "White"],
      specs: {
        power: "1000W",
        capacity: "2L",
        speeds: "3",
        material: "Stainless Steel"
      }
    }
  ]
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
