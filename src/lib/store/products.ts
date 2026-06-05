import classic from "@/assets/products/classic.jpg";
import lotus from "@/assets/products/lotus.jpg";
import pistachio from "@/assets/products/pistachio.jpg";
import kinder from "@/assets/products/kinder.jpg";
import redvelvet from "@/assets/products/redvelvet.jpg";
import saucePistachio from "@/assets/products/sauce-pistachio.jpg";
import sauceCaramel from "@/assets/products/sauce-caramel.jpg";
import sauceDarkChoc from "@/assets/products/sauce-darkchoc.jpg";
import sauceChoc from "@/assets/products/sauce-choc.jpg";
import sauceWhite from "@/assets/products/sauce-white.jpg";
import boxClassic from "@/assets/products/box-classic.jpg";
import boxStuffed from "@/assets/products/box-stuffed.jpg";
import boxMystery from "@/assets/products/box-mystery.jpg";
import miniSmall from "@/assets/products/mini-small.jpg";
import miniMedium from "@/assets/products/mini-medium.jpg";
import miniLarge from "@/assets/products/mini-large.jpg";

export type Category = "cookies" | "miniature" | "boxes" | "sauces";

export type Product = {
  id: string;
  name: string;
  nameAr: string;
  desc: string;
  price: number;
  image: string;
  category: Category;
};

export const PRODUCTS: Product[] = [
  // Cookies
  { id: "classic", name: "Classic", nameAr: "كلاسيك", desc: "Gooey chocolate chip — our signature.", price: 0.75, image: classic, category: "cookies" },
  { id: "lotus", name: "Lotus Biscoff", nameAr: "لوتس", desc: "Caramelised biscoff swirl on a soft cookie.", price: 0.90, image: lotus, category: "cookies" },
  { id: "pistachio", name: "Pistachio", nameAr: "فستق", desc: "Buttery cookie with crushed pistachios.", price: 0.90, image: pistachio, category: "cookies" },
  { id: "kinder", name: "Kinder Bueno", nameAr: "كيندر بوينو", desc: "Loaded with chunks of Kinder Bueno.", price: 0.90, image: kinder, category: "cookies" },
  { id: "redvelvet", name: "Red Velvet Cream Cheese", nameAr: "ريد فلفت", desc: "Red velvet with cream cheese drizzle.", price: 0.90, image: redvelvet, category: "cookies" },

  // Miniature
  { id: "mini-small", name: "Mini Box — Small", nameAr: "بوكس صغير", desc: "15 mini cookies + small sauce.", price: 3.50, image: miniSmall, category: "miniature" },
  { id: "mini-medium", name: "Mini Box — Medium", nameAr: "بوكس ميني وسط", desc: "30 mini cookies + small sauce.", price: 6.50, image: miniMedium, category: "miniature" },
  { id: "mini-large", name: "Mini Box — Large", nameAr: "بوكس ميني كبير", desc: "60 mini cookies + two small sauces.", price: 10.00, image: miniLarge, category: "miniature" },

  // Boxes
  { id: "box-classic", name: "6-Piece Classic Box", nameAr: "بوكس 6 قطع كلاسيك", desc: "Six of our signature classic cookies.", price: 4.00, image: boxClassic, category: "boxes" },
  { id: "box-stuffed", name: "Stuffed Mix Box", nameAr: "بوكس منوعة 6 قطع", desc: "Six stuffed cookies, mixed flavors.", price: 5.00, image: boxStuffed, category: "boxes" },
  { id: "box-mystery", name: "Mystery Lab Box", nameAr: "بوكس مختبر المفاجآت", desc: "6 random lab favorites — and maybe an unreleased flavor.", price: 5.50, image: boxMystery, category: "boxes" },

  // Sauces
  { id: "sauce-pistachio", name: "Pistachio Sauce", nameAr: "صوص فستق", desc: "Creamy pistachio dip.", price: 0.30, image: saucePistachio, category: "sauces" },
  { id: "sauce-caramel", name: "Caramel Sauce", nameAr: "صوص كراميل", desc: "Buttery golden caramel.", price: 0.30, image: sauceCaramel, category: "sauces" },
  { id: "sauce-darkchoc", name: "Dark Chocolate Sauce", nameAr: "صوص شوكولاتة داكنة", desc: "Rich dark chocolate.", price: 0.30, image: sauceDarkChoc, category: "sauces" },
  { id: "sauce-choc", name: "Chocolate Sauce", nameAr: "صوص شوكولاتة", desc: "Smooth milk chocolate.", price: 0.30, image: sauceChoc, category: "sauces" },
  { id: "sauce-white", name: "White Chocolate Sauce", nameAr: "صوص شوكولاتة بيضاء", desc: "Creamy white chocolate.", price: 0.30, image: sauceWhite, category: "sauces" },
];

export const CATEGORIES: { id: Category; label: string; labelAr: string }[] = [
  { id: "cookies", label: "Cookies", labelAr: "كوكيز" },
  { id: "miniature", label: "Miniature Collection", labelAr: "المجموعة المصغرة" },
  { id: "boxes", label: "Box Sets", labelAr: "البوكسات" },
  { id: "sauces", label: "Extra Dips", labelAr: "الصوصات" },
];

export const WHATSAPP_NUMBER = "962796032909";
export const DISPLAY_PHONE = "0796032909";
export const DELIVERY_FEE = 2.0;
export const INSTAGRAM_URL = "https://www.instagram.com/cooki.elogy";
