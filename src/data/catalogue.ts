import ppeImg from "@/assets/cat-ppe.jpg";
import woundImg from "@/assets/cat-wound.jpg";
import labImg from "@/assets/cat-lab.jpg";
import monitorImg from "@/assets/cat-monitor.jpg";
import oxygenImg from "@/assets/cat-oxygen.jpg";
import neonatalImg from "@/assets/cat-neonatal.jpg";
import furnitureImg from "@/assets/cat-furniture.jpg";
import theaterImg from "@/assets/cat-theater.jpg";
import imagingImg from "@/assets/cat-imaging.jpg";

export type Product = {
  name: string;
  category: string;
  subcategory?: string;
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  subcategories: { name: string; products: string[] }[];
};

const IMG: Record<string, string> = {
  "ppe-protective-wear": ppeImg,
  "wound-care-dressings": woundImg,
  "laboratory-diagnostics": labImg,
  "monitoring-homecare": monitorImg,
  "respiratory-oxygen": oxygenImg,
  "neonatal-maternity": neonatalImg,
  "hospital-furniture": furnitureImg,
  "theater-emergency": theaterImg,
  "imaging-radiology": imagingImg,
};

const RAW_CATEGORIES: Omit<Category, "image">[] = [
  {
    slug: "ppe-protective-wear",
    name: "PPE & Protective Wear",
    tagline: "Certified protection for every clinical setting.",
    description:
      "Complete personal protective equipment for hospitals, laboratories and field response teams.",
    subcategories: [
      {
        name: "PPE",
        products: [
          "Coverall with Shoe Cover",
          "Disposable Apron",
          "Beard Cover",
          "Hairnet / Head Cap",
          "Face Shield",
          "Safety Goggles",
          "Sterile Surgical Gown",
        ],
      },
      {
        name: "Gloves & Footwear",
        products: [
          "Latex Powdered Gloves",
          "Latex Powder Free Gloves",
          "Nitrile Gloves",
          "Sterile Gloves",
          "Medical Gumboots",
          "Safety Boots",
          "Medical Crocs / Clogs",
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
      { name: "Dressings", products: ["Gauze Roll 1500gms"] },
      {
        name: "Gypsona S POP Bandages",
        products: ['Gypsona S POP 4"', 'Gypsona S POP 6"', 'Gypsona S POP 8"'],
      },
      {
        name: "Orthopedic Padding",
        products: [
          'Orthopedic Padding 6"',
          'Orthopedic Padding 8"',
          "Plaster Cutter (Drill Type)",
          "Tourniquet",
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
          "Olympus Microscope CX21",
          "Lab Incubator",
          "Electronic Lab Centrifuge 4000RPM",
          "Hematology Analyzer DH31",
        ],
      },
      {
        name: "Diagnostics & Screening",
        products: [
          "HemoCue Hb 301 Microcuvettes",
          "HemoCue Hb 301 Analyzer",
          "Diagnostic Kit (ENT Set)",
          "Vein Finder (Infrared)",
          "MUAC Tapes",
        ],
      },
      {
        name: "Monitoring & Calibration",
        products: [
          "pH Meter (Drill Type)",
          "Fridge / Freezer Thermometer",
          "Temperature Hygrometer",
          "Vacutainer Tubes",
          "Urine Container",
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
          "Generic BP Machine",
          "Omron M1 BP Machine",
          "Omron M2 BP Machine",
          "Yuwell Rechargeable BP Machine",
          "Cordless Tunnel BP Machine",
          "Extra Large BP Cuff",
        ],
      },
      {
        name: "Vitals & Screening",
        products: [
          "Infrared Thermometer",
          "Digital Thermometer",
          "Handheld Pulse Oximeter",
          "Baby Finger Oximeter",
          "On Call Glucometer",
          "On Call Strips",
        ],
      },
      {
        name: "Continuous Care",
        products: [
          "Freestyle Libre 2 CGM",
          "Sibionic Continuous Glucose Monitor",
          "Adult Diapers",
          "Pill Organizer",
          "Digital Height & Weight Scale",
        ],
      },
    ],
  },
  {
    slug: "respiratory-oxygen",
    name: "Respiratory & Oxygen Therapy",
    tagline: "Breathe easy with complete oxygen solutions.",
    description:
      "From portable concentrators to full central oxygen manifolds for hospitals and clinics.",
    subcategories: [
      {
        name: "Respiratory Care",
        products: [
          "Nebulizer Compressor",
          "Oxygen Mask",
          "Humidifier Bottle",
          "Oxygen Regulator",
          "3 Ball Incentive Spirometer",
          "Ambu Bag",
          "5L Portable Oxygen Concentrator",
        ],
      },
      {
        name: "Oxygen Cylinders",
        products: ["1.36m³ Cylinder", "3.4m³ Cylinder", "7.0m³ Cylinder", "8.5m³ Cylinder"],
      },
      {
        name: "Oxygen & Gas Systems",
        products: [
          "Oxygen Flow Meter",
          "Medical Air Compressor",
          "Central Oxygen Manifold System",
          "Oxygen Analyzer",
          "Suction Machine",
          "Vacuum Regulator",
        ],
      },
    ],
  },
  {
    slug: "neonatal-maternity",
    name: "Neonatal & Maternity",
    tagline: "Advanced care for every new beginning.",
    description:
      "Equipment and consumables for labour wards, neonatal units and maternity clinics.",
    subcategories: [
      {
        name: "Neonatal Equipment",
        products: [
          "Infant Radiant Warmer",
          "Infant Incubator",
          "Phototherapy Unit",
          "Fetal Doppler",
          "Suction Machine",
          "Baby Scale",
        ],
      },
      {
        name: "Maternity Equipment",
        products: [
          "Delivery Bed",
          "Gynecology Couch",
          "Examination Couch",
          "Fetal Monitor",
        ],
      },
      {
        name: "Neonatal Consumables",
        products: [
          "Mucus Extractor",
          "Umbilical Cord Clamp",
          "Feeding Tubes",
          "Suction Catheter",
          "Baby Oxygen Mask",
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
        name: "Hospital Beds",
        products: ["Manual Hospital Bed", "Electric Hospital Bed", "Pediatric Bed"],
      },
      {
        name: "Bedside & Storage",
        products: [
          "Delivery Bed",
          "Bedside Locker",
          "Overbed Table",
          "Instrument Trolley",
          "Mayo Trolley",
          "Dressing Trolley",
        ],
      },
      {
        name: "Patient Movement",
        products: [
          "Wheelchair",
          "Stretcher",
          "Emergency Trolley / Crash Cart",
          "Transfer Chair",
        ],
      },
      {
        name: "Ward Support",
        products: ["Ward Screens", "IV Stand", "Drip Stand", "Linen Hamper", "Waste Bins"],
      },
    ],
  },
  {
    slug: "theater-emergency",
    name: "Theater & Emergency",
    tagline: "Equipment for critical care and surgical excellence.",
    description:
      "Operating theatre lights, anesthesia machines, defibrillators and complete emergency response kits.",
    subcategories: [
      {
        name: "Emergency Response",
        products: [
          "Emergency Trolley (Crash Cart)",
          "Body Bags",
          "First Aid Box",
          "Spill Kit",
        ],
      },
      {
        name: "Surgical Theater",
        products: [
          "LED Operating Theatre Light",
          "Anesthesia Machine",
          "Diathermy Machine",
          "Defibrillator",
          "Patient Monitor",
          "Infusion Pump",
        ],
      },
      {
        name: "Patient Transport",
        products: ["Emergency Stretcher", "Folding Stretcher"],
      },
    ],
  },
  {
    slug: "imaging-radiology",
    name: "Imaging & Radiology",
    tagline: "Accurate imaging for better diagnosis.",
    description:
      "Mindray ultrasound systems, probes, printers and radiology accessories.",
    subcategories: [
      {
        name: "Ultrasound Systems",
        products: [
          "Mindray DP-20 Ultrasound System",
          "Mindray DP-30 Ultrasound System",
          "Mindray Venno 5 Ultrasound System",
          "Mindray Venno 6 Ultrasound System",
        ],
      },
      {
        name: "Ultrasound Probes",
        products: [
          "Convex Probe",
          "Linear Probe",
          "Transvaginal Probe",
          "Phased Array Probe",
        ],
      },
      {
        name: "Imaging Accessories",
        products: [
          "Sony UP-D898MD Printer",
          "Sony UP-X898MD Printer",
          "Ultrasound Gel",
          "Thermal Print Paper",
        ],
      },
      {
        name: "Radiology Support",
        products: ["Lead Apron", "Film Viewer", "X-Ray Cassette", "Collimator"],
      },
    ],
  },
];

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

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function allProducts() {
  return CATEGORIES.flatMap((c) =>
    c.subcategories.flatMap((s) =>
      s.products.map((p) => ({ name: p, category: c.name, categorySlug: c.slug, subcategory: s.name })),
    ),
  );
}
