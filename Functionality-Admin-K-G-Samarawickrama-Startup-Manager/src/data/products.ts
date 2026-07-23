export type Category = 'Sarees' | 'Tops' | 'Frocks' | 'Lehengas' | 'Kurti';
export type StockStatus = 'In Stock' | 'Low Stock' | 'Out of Stock';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  stock: number;
  status: StockStatus;
  sizes: string[];
  colours: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: 'P001',
    name: 'Kanjivaram Silk Saree',
    category: 'Sarees',
    description: 'Handwoven Kanjivaram pure silk saree with traditional zari border and rich pallu. Perfect for weddings and festive occasions.',
    price: 24500,
    stock: 8,
    status: 'In Stock',
    sizes: ['Free Size'],
    colours: ['Deep Red', 'Gold', 'Peacock Green'],
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=120&h=120&fit=crop&auto=format',
  },
  {
    id: 'P002',
    name: 'Embroidered Anarkali Kurti',
    category: 'Kurti',
    description: 'Floor-length Anarkali kurti with intricate thread embroidery on the yoke and sleeves. Comes with matching dupatta.',
    price: 6500,
    stock: 14,
    status: 'In Stock',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colours: ['Ivory', 'Powder Blue', 'Dusty Rose'],
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=120&h=120&fit=crop&auto=format',
  },
  {
    id: 'P003',
    name: 'Bridal Lehenga Set',
    category: 'Lehengas',
    description: 'Heavy-work bridal lehenga with zardozi embroidery, raw silk blouse, and sheer dupatta. Ideal for brides and bridesmaids.',
    price: 38000,
    stock: 3,
    status: 'Low Stock',
    sizes: ['XS', 'S', 'M', 'L'],
    colours: ['Crimson', 'Blush Pink', 'Royal Blue'],
    image: 'https://images.unsplash.com/photo-1583391733981-8498408ee4b6?w=120&h=120&fit=crop&auto=format',
  },
  {
    id: 'P004',
    name: 'Cotton Printed Frock',
    category: 'Frocks',
    description: 'Lightweight cotton frock with floral block-print and elasticated waist. Casual summer wear with a festive feel.',
    price: 3200,
    stock: 22,
    status: 'In Stock',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colours: ['Yellow', 'Mint Green', 'Coral'],
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=120&h=120&fit=crop&auto=format',
  },
  {
    id: 'P005',
    name: 'Chanderi Silk Top',
    category: 'Tops',
    description: 'Chanderi silk crop top with mirror-work detailing. Pairs beautifully with palazzo trousers or wide-leg pants.',
    price: 4800,
    stock: 0,
    status: 'Out of Stock',
    sizes: ['XS', 'S', 'M'],
    colours: ['Turquoise', 'Champagne'],
    image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=120&h=120&fit=crop&auto=format',
  },
  {
    id: 'P006',
    name: 'Banarasi Georgette Saree',
    category: 'Sarees',
    description: 'Georgette Banarasi saree with woven motifs and contrast border. Lightweight and drapes elegantly for all occasions.',
    price: 12500,
    stock: 6,
    status: 'In Stock',
    sizes: ['Free Size'],
    colours: ['Magenta', 'Teal', 'Burgundy'],
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=120&h=120&fit=crop&auto=format',
  },
  {
    id: 'P007',
    name: 'Straight-Cut Kurti',
    category: 'Kurti',
    description: 'Cotton-blend straight-cut kurti with mandarin collar and side slits. Versatile office and casual wear.',
    price: 2800,
    stock: 2,
    status: 'Low Stock',
    sizes: ['S', 'M', 'L', 'XL'],
    colours: ['Navy', 'Olive', 'Maroon'],
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=120&h=120&fit=crop&auto=format',
  },
  {
    id: 'P008',
    name: 'Flared Festive Frock',
    category: 'Frocks',
    description: 'Net-and-satin flared frock with embellished bodice. A popular choice for girls\' parties and celebrations.',
    price: 5500,
    stock: 9,
    status: 'In Stock',
    sizes: ['XS', 'S', 'M', 'L'],
    colours: ['Gold', 'Silver', 'Red'],
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=120&h=120&fit=crop&auto=format',
  },
  {
    id: 'P009',
    name: 'Designer Lehenga Choli',
    category: 'Lehengas',
    description: 'Semi-stitched lehenga choli with digital-print flare skirt and embroidered blouse piece.',
    price: 15800,
    stock: 1,
    status: 'Low Stock',
    sizes: ['Free Size'],
    colours: ['Orange', 'Green'],
    image: 'https://images.unsplash.com/photo-1583391733981-8498408ee4b6?w=120&h=120&fit=crop&auto=format',
  },
  {
    id: 'P010',
    name: 'Organza Puff-Sleeve Top',
    category: 'Tops',
    description: 'Sheer organza top with statement puff sleeves and pearl-button back. Modern and elegant for evening events.',
    price: 3600,
    stock: 11,
    status: 'In Stock',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colours: ['White', 'Blush', 'Lilac'],
    image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=120&h=120&fit=crop&auto=format',
  },
];
