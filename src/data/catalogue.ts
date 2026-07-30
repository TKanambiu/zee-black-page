export type Product = {
  name: string;
  /** Retail price in KES */
  price: number;
  /** Reseller / trade price in KES */
  reseller?: number;
  /** Optional product photo (place file in /public and set path here) */
  image?: string;
};

export type Subcategory = { name: string; products: Product[] };

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
};

const IMG: Record<string, string> = {
  "ppe-protective-wear": "/cat-ppe.jpg",
  "wound-care-dressings": "/cat-wound.jpg",
  "laboratory-diagnostics": "/cat-lab.jpg",
  "monitoring-homecare": "/cat-monitor.jpg",
  "respiratory-oxygen": "/cat-oxygen.jpg",
  "neonatal-maternity": "/cat-neonatal.jpg",
  "hospital-furniture": "/cat-furniture.jpg",
  "theater-emergency": "/cat-theater.jpg",
  "imaging-radiology": "/cat-imaging.jpg",
};

import conc10 from "@/assets/products/10L_Bedside_Oxygen_Concentrator.png.asset.json";
import spirometer from "@/assets/products/3_Ball_Incentive_Spirometer.png.asset.json";
import conc5 from "@/assets/products/5L_Portable_Oxygen_Concentrator.png.asset.json";
import conc7 from "@/assets/products/7L_Portable_Oxygen_Concentrator.png.asset.json";
import ambuBag from "@/assets/products/Ambu_Bag.png.asset.json";
import humidifier from "@/assets/products/Humidifier_Bottle.png.asset.json";
import nebulizer from "@/assets/products/Nebulizer_Compressor.png.asset.json";
import oxygenMask from "@/assets/products/Oxygen_Mask.png.asset.json";
import oxygenRegulator from "@/assets/products/Oxygen_Regulator.png.asset.json";
import fetalDoppler from "@/assets/products/Fetal_Doppler.png.asset.json";
import babyIncubator from "@/assets/products/Baby_Incubator.png.asset.json";
import babyWarmer from "@/assets/products/Baby_Warmer_with_Phototherapy.png.asset.json";
import babyScale from "@/assets/products/Digital_Baby_Scale.png.asset.json";
import foggingMachine from "@/assets/products/Fogging_Machine.png.asset.json";
import bodyBag from "@/assets/products/White_Body_Bag_220x90.png.asset.json";
import diathermy from "@/assets/products/Diathermy_Machine_400W.png.asset.json";
import firstAidBox from "@/assets/products/First_Aid_Box.png.asset.json";
import spillKit from "@/assets/products/Multi_use_Biohazard_Spill_Kit.png.asset.json";

/** Product photos keyed by exact product name */
const PRODUCT_IMG: Record<string, string> = {
  "10L Bedside Oxygen Concentrator": conc10.url,
  "3 Ball Incentive Spirometer": spirometer.url,
  "5L Portable Oxygen Concentrator": conc5.url,
  "7L Portable Oxygen Concentrator": conc7.url,
  "Ambu Bag": ambuBag.url,
  "Humidifier Bottle": humidifier.url,
  "Nebulizer Compressor": nebulizer.url,
  "Oxygen Mask": oxygenMask.url,
  "Oxygen Regulator": oxygenRegulator.url,
  "Fetal Doppler": fetalDoppler.url,
  "Baby Incubator": babyIncubator.url,
  "Baby Warmer with Phototherapy": babyWarmer.url,
  "Digital Baby Scale": babyScale.url,
  "Fogging Machine": foggingMachine.url,
  "White Body Bag 220x90": bodyBag.url,
  "Diathermy Machine 400W": diathermy.url,
  "First Aid Box": firstAidBox.url,
  "Multi-use Biohazard Spill Kit": spillKit.url,
};

const p = (name: string, reseller: number, price: number): Product => ({
  name,
  reseller,
  price,
  image: PRODUCT_IMG[name],
});

const RAW_CATEGORIES: Omit<Category, "image">[] = [
  {
    slug: "ppe-protective-wear",
    name: "PPE & Protective Wear",
    tagline: "Certified protection for every clinical setting.",
    description:
      "Complete personal protective equipment for hospitals, laboratories and field response teams.",
    subcategories: [
      {
        name: "Masks & Respirators",
        products: [
          p("3 Ply Surgical Face Masks (Box of 50)", 180, 220),
          p("KN95 Mask With Valve", 28, 35),
          p("KN95 Mask Without Valve", 15, 20),
          p("3M N95 8210", 110, 120),
          p("3M N95 1860", 110, 120),
        ],
      },
      {
        name: "Protective Wear",
        products: [
          p("Coverall with Shoe Cover", 400, 600),
          p("Disposable Apron", 1100, 1350),
          p("Beard Cover (Pack of 100)", 800, 1000),
          p("Hairnet / Head Cap", 350, 350),
          p("Face Shield", 100, 150),
          p("Safety Goggles", 200, 200),
        ],
      },
      {
        name: "Gloves & Footwear",
        products: [
          p("Latex Powdered Gloves", 320, 350),
          p("Latex Powder Free Gloves", 400, 450),
          p("Nitrile Gloves", 350, 380),
          p("Sterile Gloves", 950, 1050),
          p("Medical Gumboots", 700, 850),
          p("Safety Boots", 2400, 2800),
          p("Medical Crocs / Clogs", 1500, 1800),
          p("Nurse Watch", 500, 500),
        ],
      },
    ],
  },
  {
    slug: "wound-care-dressings",
    name: "Wound Care & Dressings",
    tagline: "Dressings, casting and orthopedic support supplies.",
    description:
      "Trusted wound-care consumables and orthopedic casting materials for hospitals and clinics.",
    subcategories: [
      { name: "Dressings", products: [p("Gauze Roll 1500gms", 1200, 1200)] },
      {
        name: "Gypsona POP Bandages",
        products: [
          p('Gypsona POP 4"', 350, 350),
          p('Gypsona POP 6"', 380, 380),
          p('Gypsona POP 8"', 450, 450),
        ],
      },
      {
        name: "Orthopedic Support",
        products: [
          p('Orthopedic Padding 6"', 55, 55),
          p('Orthopedic Padding 8"', 75, 75),
          p("Plaster Cutter", 28000, 28000),
          p("Tourniquet", 200, 250),
        ],
      },
    ],
  },
  {
    slug: "laboratory-diagnostics",
    name: "Laboratory & Diagnostics",
    tagline: "Precision instruments for accurate results.",
    description:
      "Core laboratory equipment, screening and calibration tools for reliable diagnostics.",
    subcategories: [
      {
        name: "Core Lab Equipment",
        products: [
          p("Microscope X701", 22500, 22500),
          p("Olympus Microscope CX23", 165000, 165000),
          p("Lab Incubator", 32000, 32000),
          p("Electronic Lab Centrifuge 4000RPM", 7500, 7500),
          p("Hematology Analyzer DH31 with Reagents", 365000, 365000),
        ],
      },
      {
        name: "Diagnostics & Screening",
        products: [
          p("Hemocue 301 Machine", 75000, 75000),
          p("Hemocue Microcuvettes", 3500, 3500),
          p("Diagnostic Kit", 8500, 9500),
          p("Vein Finder", 6000, 7500),
          p("MUAC Tape", 150, 150),
        ],
      },
      {
        name: "Monitoring & Consumables",
        products: [
          p("pH Meter (Pen Type)", 2500, 3500),
          p("Fridge Thermometer", 650, 650),
          p("Temperature Hygrometer", 1000, 1000),
          p("Vacutainer Tubes (Red / Yellow / Purple)", 550, 550),
          p("Stool Container", 13, 13),
        ],
      },
    ],
  },
  {
    slug: "monitoring-homecare",
    name: "Monitoring & Homecare",
    tagline: "Reliable monitoring for home and clinic.",
    description:
      "Blood-pressure monitors, glucometers, thermometers and daily-living aids for patient care at home.",
    subcategories: [
      {
        name: "Blood Pressure",
        products: [
          p("Generic BP Machine", 850, 1300),
          p("Omron M1 BP Machine", 4500, 4500),
          p("Omron M2 BP Machine", 6500, 6500),
          p("Yuwell Rechargeable BP Machine", 2500, 3000),
          p("Cordless Tunnel BP Machine", 8500, 10500),
          p("Extra Large BP Cuff", 1000, 1200),
        ],
      },
      {
        name: "Vitals & Screening",
        products: [
          p("Infrared Thermometer", 800, 1000),
          p("Digital Thermometer", 150, 150),
          p("Handheld Oximeter", 8500, 10000),
          p("Baby Finger Oximeter", 600, 900),
          p("On Call Glucometer", 1000, 1300),
          p("On Call Strips", 650, 700),
        ],
      },
      {
        name: "Continuous Care",
        products: [
          p("Freestyle Libre 2 CGM", 20000, 20000),
          p("Sibionic Continuous Glucose Monitor", 9999, 9999),
          p("Adult Diapers", 580, 580),
          p("Pill Organizer", 500, 500),
          p("Digital Height & Weight Scale", 13000, 14500),
        ],
      },
    ],
  },
  {
    slug: "respiratory-oxygen",
    name: "Respiratory & Oxygen Therapy",
    tagline: "Breathe easy with complete oxygen solutions.",
    description:
      "From portable concentrators to oxygen cylinders and gas systems for hospitals and clinics.",
    subcategories: [
      {
        name: "Respiratory Care",
        products: [
          p("Nebulizer Compressor", 2500, 3000),
          p("Oxygen Mask", 85, 85),
          p("Humidifier Bottle", 1000, 1200),
          p("Oxygen Regulator", 2500, 3000),
          p("3 Ball Incentive Spirometer", 800, 1200),
          p("Ambu Bag", 4500, 4500),
        ],
      },
      {
        name: "Oxygen Concentrators",
        products: [
          p("5L Portable Oxygen Concentrator", 92000, 98000),
          p("7L Portable Oxygen Concentrator", 78000, 85000),
          p("10L Bedside Oxygen Concentrator", 65000, 65000),
        ],
      },
      {
        name: "Oxygen Cylinders",
        products: [
          p("Oxygen Cylinder 1.36m³", 12500, 12500),
          p("Oxygen Cylinder 3.4m³", 19500, 19500),
          p("Oxygen Cylinder 7.0m³", 25000, 25000),
          p("Oxygen Cylinder 8.5m³", 28000, 28000),
        ],
      },
    ],
  },
  {
    slug: "neonatal-maternity",
    name: "Neonatal & Maternity",
    tagline: "Advanced care for every new beginning.",
    description:
      "Equipment for labour wards, neonatal units and maternity clinics.",
    subcategories: [
      {
        name: "Neonatal Equipment",
        products: [
          p("Fetal Doppler", 2500, 3500),
          p("Digital Baby Scale", 3500, 4000),
          p("Baby Warmer with Phototherapy", 185000, 185000),
          p("Baby Incubator", 180000, 180000),
        ],
      },
    ],
  },
  {
    slug: "hospital-furniture",
    name: "Hospital Furniture & Ward Equipment",
    tagline: "Built for comfort, durability and efficient care.",
    description:
      "Beds, trolleys and ward furniture designed for busy hospital environments.",
    subcategories: [
      {
        name: "Beds & Bedside",
        products: [
          p("2 Crank ABS Hospital Bed", 25000, 25000),
          p("Bedside Cabinet", 8500, 8500),
          p("Ripple Mattress", 4999, 4999),
        ],
      },
      {
        name: "Trolleys",
        products: [
          p("Emergency Trolley / Crash Cart", 55000, 55000),
          p("Medicine Trolley", 8000, 8000),
          p("3 Shelf Medicine Trolley", 13000, 13000),
        ],
      },
      {
        name: "Ward Support",
        products: [
          p("3 Fold Ward Screen", 7500, 7500),
          p("4 Fold Ward Screen", 9000, 9000),
          p("LED Adjustable Examination Lamp", 12500, 12500),
          p("Sanitary Bin", 3500, 3500),
        ],
      },
    ],
  },
  {
    slug: "theater-emergency",
    name: "Theatre & Emergency",
    tagline: "Equipment for critical care and surgical excellence.",
    description:
      "Surgical theatre equipment, biohazard control and emergency response supplies.",
    subcategories: [
      {
        name: "Surgical Theatre",
        products: [p("Diathermy Machine 400W", 170000, 170000)],
      },
      {
        name: "Emergency & Biohazard",
        products: [
          p("Multi-use Biohazard Spill Kit", 19500, 19500),
          p("First Aid Box", 2500, 3000),
          p("White Body Bag 220x90", 1500, 1800),
          p("Fogging Machine", 30000, 30000),
        ],
      },
    ],
  },
  {
    slug: "imaging-radiology",
    name: "Imaging & Radiology",
    tagline: "Accurate imaging for better diagnosis.",
    description: "Ultrasound systems, viewers, contrast media and imaging consumables.",
    subcategories: [
      {
        name: "Ultrasound Systems",
        products: [
          p("DP-20 Mindray Ultrasound", 680000, 680000),
          p("VINNO A3 Color Doppler Ultrasound", 1100000, 1100000),
        ],
      },
      {
        name: "Imaging Accessories",
        products: [
          p("Ultrasound Gel", 1500, 1500),
          p("Single X-Ray Viewer", 7500, 7500),
          p("UPP-110HG X-Ray Thermal Paper", 950, 1200),
          p("Omnipaque Contrast Medium", 2500, 2500),
        ],
      },
    ],
  },
];

export const CATEGORIES: Category[] = RAW_CATEGORIES.map((c) => ({ ...c, image: IMG[c.slug] }));

export const COMPANY = {
  name: "Zentramed Health",
  tagline: "Advancing Healthcare and Humanitarian Solutions",
  address: "Bazaar Plaza, Nairobi, Kenya",
  phones: ["+254 722 708 420", "+254 759 228 552"],
  email: "info@zentramedhealth.co.ke",
  website: "www.zentramedhealth.co.ke",
  social: "@zentramedhealth",
  whatsapp: "254722708420",
};

export function formatKES(n: number) {
  return `KES ${n.toLocaleString("en-KE")}`;
}

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function allProducts() {
  return CATEGORIES.flatMap((c) =>
    c.subcategories.flatMap((s) =>
      s.products.map((prod) => ({
        ...prod,
        category: c.name,
        categorySlug: c.slug,
        subcategory: s.name,
        categoryImage: c.image,
      })),
    ),
  );
}
