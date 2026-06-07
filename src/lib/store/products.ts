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
  { id: "classic", name: "Classic", nameAr: "كلاسيك", desc: "كوكيز كلاسيكي مع قطع شوكولاتة ذائبة .", price: 0.75, image: classic, category: "cookies" },
  { id: "lotus", name: "Lotus Biscoff", nameAr: "لوتس بيسكوف", desc: "كوكيز طري مع كريمة لوتس بيسكوف الكراميلية.", price: 0.90, image: lotus, category: "cookies" },
  { id: "pistachio", name: "Pistachio", nameAr: "فستق حلبي", desc: "كوكيز بزبدة مع فستق حلبي مجروش.", price: 0.90, image: pistachio, category: "cookies" },
  { id: "kinder", name: "Kinder Bueno", nameAr: "كيندر بوينو", desc: "محشو ومحمّل بقطع كيندر بوينو.", price: 0.90, image: kinder, category: "cookies" },
  { id: "redvelvet", name: "Red Velvet Cream Cheese", nameAr: "ريد فلفت بكريمة الجبنة", desc: "ريد فلفت غني مع تزيين كريمة الجبنة البيضاء.", price: 0.90, image: redvelvet, category: "cookies" },

  // Miniature
  { id: "mini-small", name: "Mini Box — Small", nameAr: "بوكس ميني (صغير)", desc: "15 قطعة ميني + صوص صغير.", price: 3.50, image: miniSmall, category: "miniature" },
  { id: "mini-medium", name: "Mini Box — Medium", nameAr: "بوكس ميني (وسط)", desc: "30 قطعة ميني + صوص صغير.", price: 6.50, image: miniMedium, category: "miniature" },
  { id: "mini-large", name: "Mini Box — Large", nameAr: "بوكس ميني (كبير)", desc: "60 قطعة ميني + علبتين صوص صغير.", price: 10.00, image: miniLarge, category: "miniature" },

  // Boxes
  { id: "box-classic", name: "6-Piece Classic Box", nameAr: "بوكس 6 قطع كلاسيك", desc: "ستة من كوكيز الكلاسيك المميز.", price: 4.00, image: boxClassic, category: "boxes" },
  { id: "box-stuffed", name: "Stuffed Mix Box", nameAr: "بوكس 6 قطع منوعة", desc: "ستة كوكيز محشوة بنكهات متنوعة.", price: 5.00, image: boxStuffed, category: "boxes" },
  { id: "box-mystery", name: "Mystery Lab Box", nameAr: "بوكس مختبر المفاجآت", desc: "6 نكهات عشوائية من مفضّلات المختبر — وربما نكهة لم تُطرح بعد!", price: 5.50, image: boxMystery, category: "boxes" },

  // Sauces
  { id: "sauce-pistachio", name: "Pistachio Sauce", nameAr: "صوص الفستق", desc: "صوص فستق كريمي غني.", price: 0.30, image: saucePistachio, category: "sauces" },
  { id: "sauce-caramel", name: "Caramel Sauce", nameAr: "صوص الكراميل", desc: "كراميل ذهبي بطعم الزبدة.", price: 0.30, image: sauceCaramel, category: "sauces" },
  { id: "sauce-darkchoc", name: "Dark Chocolate Sauce", nameAr: "صوص الشوكولاتة الداكنة", desc: "شوكولاتة داكنة غنية.", price: 0.30, image: sauceDarkChoc, category: "sauces" },
  { id: "sauce-choc", name: "Chocolate Sauce", nameAr: "صوص الشوكولاتة", desc: "شوكولاتة بالحليب ناعمة.", price: 0.30, image: sauceChoc, category: "sauces" },
  { id: "sauce-white", name: "White Chocolate Sauce", nameAr: "صوص الشوكولاتة البيضاء", desc: "شوكولاتة بيضاء كريمية.", price: 0.30, image: sauceWhite, category: "sauces" },
];

export const CATEGORIES: { id: Category; label: string; labelAr: string }[] = [
  { id: "cookies", label: "Cookies", labelAr: "الكوكيز" },
  { id: "miniature", label: "Miniature Collection", labelAr: "المجموعة المصغّرة" },
  { id: "boxes", label: "Box Sets", labelAr: "البوكسات" },
  { id: "sauces", label: "Extra Dips", labelAr: "الصوصات الإضافية" },
];

export const WHATSAPP_NUMBER = "962796032909";
export const DISPLAY_PHONE = "0796032909";
export const DELIVERY_FEE = 2.0;
export const INSTAGRAM_URL = "https://www.instagram.com/cooki.elogy";
