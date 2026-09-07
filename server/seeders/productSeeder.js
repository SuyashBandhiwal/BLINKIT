// backend/seeders/productSeeder.js
// Seed data ka matlab: MongoDB me starting products insert karne ke liye ready-made data

const mongoose = require('mongoose')
// .env file padhne ke liye
const dotenv = require('dotenv')
const Product = require('../models/Product')

// Ye .env file load karta hai taki hum MONGO_URI ko use kar sake database se connect hone ke liye
dotenv.config()

const products = [
  // ─── Dairy, Bread & Eggs ───────────────────────────────────────
  { name: 'Amul Taaza Toned Milk', price: 28, category: 'dairy-bread-eggs', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/308_a.jpg', stock: 100, description: '500ml pouch', unit: '500 ml' },
  { name: 'Harvest Gold Sandwich Bread', price: 45, category: 'dairy-bread-eggs', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/510_a.jpg', stock: 50, description: '400g loaf', unit: '400 g' },
  { name: 'Farm Fresh Eggs', price: 84, category: 'dairy-bread-eggs', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/egg.jpg', stock: 80, description: 'Pack of 6', unit: '6 pcs' },
  { name: 'Amul Butter', price: 55, category: 'dairy-bread-eggs', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/220_a.jpg', stock: 60, description: '100g pack', unit: '100 g' },
  { name: 'Mother Dairy Curd', price: 42, category: 'dairy-bread-eggs', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/curd.jpg', stock: 70, description: '400g tub', unit: '400 g' },

  // ─── Fruits & Vegetables ──────────────────────────────────────
  { name: 'Banana', price: 40, category: 'fruits-vegetables', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/banana.jpg', stock: 100, description: '6 pcs approx 500g', unit: '500 g' },
  { name: 'Fresh Spinach', price: 20, category: 'fruits-vegetables', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/spinach.jpg', stock: 60, description: '250g bunch', unit: '250 g' },
  { name: 'Tomato', price: 30, category: 'fruits-vegetables', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/tomato.jpg', stock: 90, description: '500g pack', unit: '500 g' },
  { name: 'Onion', price: 35, category: 'fruits-vegetables', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/onion.jpg', stock: 120, description: '1kg bag', unit: '1 kg' },
  { name: 'Apple Shimla', price: 120, category: 'fruits-vegetables', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/apple.jpg', stock: 50, description: '4 pcs approx 600g', unit: '600 g' },

  // ─── Cold Drinks & Juices ─────────────────────────────────────
  { name: 'Pepsi', price: 40, category: 'cold-drinks-juices', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/pepsi.jpg', stock: 150, description: '750ml bottle', unit: '750 ml' },
  { name: 'Real Alphonso Mango Juice', price: 99, category: 'cold-drinks-juices', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/real.jpg', stock: 80, description: '1 litre pack', unit: '1 L' },
  { name: 'Sprite', price: 40, category: 'cold-drinks-juices', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/sprite.jpg', stock: 100, description: '750ml bottle', unit: '750 ml' },
  { name: 'Coca Cola', price: 40, category: 'cold-drinks-juices', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/coke.jpg', stock: 100, description: '750ml bottle', unit: '750 ml' },

  // ─── Snacks & Munchies ────────────────────────────────────────
  { name: "Lay's Classic Salted", price: 20, category: 'snacks-munchies', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/lays.jpg', stock: 200, description: '26g pack', unit: '26 g' },
  { name: 'Kurkure Masala Munch', price: 20, category: 'snacks-munchies', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/kurkure.jpg', stock: 150, description: '40g pack', unit: '40 g' },
  { name: 'Haldirams Bhujia', price: 30, category: 'snacks-munchies', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/bhujia.jpg', stock: 100, description: '150g pack', unit: '150 g' },

  // ─── Cleaning Essentials ──────────────────────────────────────
  { name: 'Surf Excel Matic', price: 220, category: 'cleaning-essentials', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/surfexcel.jpg', stock: 60, description: '1kg box', unit: '1 kg' },
  { name: 'Vim Dishwash Bar', price: 35, category: 'cleaning-essentials', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/vim.jpg', stock: 80, description: '200g bar', unit: '200 g' },
  { name: 'Harpic Toilet Cleaner', price: 89, category: 'cleaning-essentials', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/harpic.jpg', stock: 70, description: '500ml bottle', unit: '500 ml' },

  // ─── Personal Care ────────────────────────────────────────────
  { name: 'Dove Soap', price: 48, category: 'personal-care', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/dove.jpg', stock: 90, description: '100g bar', unit: '100 g' },
  { name: 'Colgate MaxFresh Toothpaste', price: 89, category: 'personal-care', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/colgate.jpg', stock: 100, description: '150g tube', unit: '150 g' },
  { name: 'Head & Shoulders Shampoo', price: 175, category: 'personal-care', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/headshoulders.jpg', stock: 60, description: '340ml bottle', unit: '340 ml' },

  // ─── Pharma & Wellness ────────────────────────────────────────
  { name: 'Dettol Hand Sanitizer', price: 65, category: 'pharma-wellness', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/dettol.jpg', stock: 120, description: '50ml bottle', unit: '50 ml' },
  { name: 'Moov Pain Relief Spray', price: 130, category: 'pharma-wellness', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/moov.jpg', stock: 50, description: '80g spray', unit: '80 g' },

  // ─── Baby Care ────────────────────────────────────────────────
  { name: 'Pampers Pants XL', price: 699, category: 'baby-care', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/pampers.jpg', stock: 40, description: 'Pack of 24', unit: '24 pcs' },
  { name: 'Johnson Baby Powder', price: 149, category: 'baby-care', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/johnson.jpg', stock: 60, description: '200g bottle', unit: '200 g' },

  // ─── Pet Care ─────────────────────────────────────────────────
  { name: 'Pedigree Adult Dog Food', price: 380, category: 'pet-care', image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_img/pedigree.jpg', stock: 30, description: '1.2kg pack', unit: '1.2 kg' },

  // ─── Paan Corner ──────────────────────────────────────────────
  { name: 'Rajnigandha Pan Masala', price: 10, category: 'paan-corner', image: 'https://placehold.co/300x300?text=Rajnigandha', stock: 100, description: 'Pack of 1', unit: '1 pc' },
  { name: 'Vimal Elaichi Pan Masala', price: 10, category: 'paan-corner', image: 'https://placehold.co/300x300?text=Vimal+Elaichi', stock: 100, description: 'Pack of 1', unit: '1 pc' },

  // ─── Bakery & Biscuits ────────────────────────────────────────
  { name: 'Britannia Good Day Cookies', price: 30, category: 'bakery-biscuits', image: 'https://placehold.co/300x300?text=Good+Day', stock: 80, description: '200g pack', unit: '200 g' },
  { name: 'Parle-G Biscuits', price: 10, category: 'bakery-biscuits', image: 'https://placehold.co/300x300?text=Parle-G', stock: 150, description: '100g pack', unit: '100 g' },

  // ─── Sweet Tooth ──────────────────────────────────────────────
  { name: 'Cadbury Dairy Milk', price: 40, category: 'sweet-tooth', image: 'https://placehold.co/300x300?text=Dairy+Milk', stock: 100, description: '50g bar', unit: '50 g' },
  { name: 'Haldiram Soan Papdi', price: 90, category: 'sweet-tooth', image: 'https://placehold.co/300x300?text=Soan+Papdi', stock: 40, description: '250g box', unit: '250 g' },

  // ─── Atta, Rice & Dal ─────────────────────────────────────────
  { name: 'Aashirvaad Atta', price: 260, category: 'atta-rice-dal', image: 'https://placehold.co/300x300?text=Aashirvaad+Atta', stock: 60, description: '5kg bag', unit: '5 kg' },
  { name: 'India Gate Basmati Rice', price: 320, category: 'atta-rice-dal', image: 'https://placehold.co/300x300?text=Basmati+Rice', stock: 50, description: '5kg bag', unit: '5 kg' },

  // ─── Masala & Dry Fruits ──────────────────────────────────────
  { name: 'MDH Garam Masala', price: 65, category: 'masala-dry-fruits', image: 'https://placehold.co/300x300?text=Garam+Masala', stock: 70, description: '100g pack', unit: '100 g' },
  { name: 'Premium Almonds', price: 210, category: 'masala-dry-fruits', image: 'https://placehold.co/300x300?text=Almonds', stock: 40, description: '250g pack', unit: '250 g' },

  // ─── Tea, Coffee & Health Drink ───────────────────────────────
  { name: 'Tata Tea Gold', price: 140, category: 'tea-coffee', image: 'https://placehold.co/300x300?text=Tata+Tea', stock: 90, description: '250g pack', unit: '250 g' },
  { name: 'Nescafe Classic Coffee', price: 130, category: 'tea-coffee', image: 'https://placehold.co/300x300?text=Nescafe', stock: 60, description: '50g jar', unit: '50 g' },

  // ─── Instant Food ─────────────────────────────────────────────
  { name: "Maggi 2-Minute Noodles", price: 14, category: 'instant-food', image: 'https://placehold.co/300x300?text=Maggi', stock: 200, description: '70g pack', unit: '70 g' },
  { name: 'Yippee Noodles', price: 15, category: 'instant-food', image: 'https://placehold.co/300x300?text=Yippee', stock: 150, description: '70g pack', unit: '70 g' },

  // ─── Sauces & Spreads ─────────────────────────────────────────
  { name: 'Kissan Tomato Ketchup', price: 105, category: 'sauces-spreads', image: 'https://placehold.co/300x300?text=Kissan+Ketchup', stock: 80, description: '500g bottle', unit: '500 g' },
  { name: 'Nutella Chocolate Spread', price: 195, category: 'sauces-spreads', image: 'https://placehold.co/300x300?text=Nutella', stock: 40, description: '200g jar', unit: '200 g' },

  // ─── Chicken, Meat & Fish ─────────────────────────────────────
  { name: 'Fresh Chicken Breast', price: 220, category: 'meat-fish', image: 'https://placehold.co/300x300?text=Chicken+Breast', stock: 30, description: '500g pack', unit: '500 g' },
  { name: 'Fresh Rohu Fish', price: 260, category: 'meat-fish', image: 'https://placehold.co/300x300?text=Rohu+Fish', stock: 25, description: '500g pack', unit: '500 g' },

  // ─── Organic & Premium ────────────────────────────────────────
  { name: 'Organic Tattva Quinoa', price: 280, category: 'organic-premium', image: 'https://placehold.co/300x300?text=Quinoa', stock: 35, description: '500g pack', unit: '500 g' },
  { name: '24 Mantra Organic Turmeric', price: 95, category: 'organic-premium', image: 'https://placehold.co/300x300?text=Organic+Turmeric', stock: 45, description: '200g pack', unit: '200 g' },

  // ─── Home & Office ────────────────────────────────────────────
  { name: 'Kangaro Stapler', price: 75, category: 'home-office', image: 'https://placehold.co/300x300?text=Stapler', stock: 50, description: '1 unit', unit: '1 pc' },
  { name: 'A4 Paper Ream', price: 260, category: 'home-office', image: 'https://placehold.co/300x300?text=A4+Paper', stock: 60, description: '500 sheets', unit: '1 ream' },
]

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected')
    
    // {} - "sab products delete kar do"
    await Product.deleteMany({})
    console.log('Old products deleted')

    await Product.insertMany(products)
    console.log(` ${products.length} products inserted successfully!`)

    process.exit(0)
  } catch (error) {
    console.error('Seed failed:', error)
    // Program ko band kar deta hai
    process.exit(1)
  }
}

seedDB()