export type HealthcareCategory = "emergency" | "private" | "pharmacy";

export interface HealthcareArticle {
  id: string;
  title: string;
  category: HealthcareCategory;
  teaser: string;
  body: string;
  photo: string; // image filename under /public/healthcare/
}

export const healthcareArticles: HealthcareArticle[] = [
  {
    id: "public-hospitals",
    title: "Public Hospitals",
    category: "emergency",
    teaser:
      "JIPMER is one of India's premier medical institutes and provides free emergency care around the clock. The General Hospital in the centre of town is the fastest option from the White Town.",
    photo: "public-hospital.jpg",
    body: `**Emergency numbers**

Ambulance: 108 (free, 24/7, dispatched city-wide)
Police: 100
General emergency: 112
Fire: 101

Call 108 for any life-threatening situation. The service dispatches ambulances across Puducherry at no cost.

**JIPMER**

Jawaharlal Institute of Postgraduate Medical Education and Research is one of India's premier autonomous medical institutions and the highest-level facility in Pondicherry. It functions as a full medical township, handling everything from routine consultations to complex surgery. The 24/7 Emergency Medical Services Block has point-of-care laboratories, CT scanning, and dedicated trauma teams.

Address: JIPMER Campus Road, Gorimedu, Dhanvantari Nagar, Puducherry 605006.
24/7 emergency and casualty: +91 83000 83933 / +91 413 2296568.
Main hospital exchange: +91 413 2296000 / +91 413 2296500.

Treatment and consultations in the general sections are completely free or heavily subsidised by the central government. Because of this, general out-patient departments face large daily crowds. For non-emergencies, expect significant waiting times. For genuine emergencies, go directly to the casualty block.

**Indira Gandhi Government General Hospital**

Known locally as the GH, this is the historic state hospital at the edge of the Heritage Town, highly accessible for anyone staying in the White Town or central Pondicherry. It handles general medicine, orthopaedics, emergency trauma, and basic diagnostics.

Address: No. 1 Rue Victor Simonel Street, Puducherry 605001, near the Legislative Assembly.
Contact: +91 413 2337070 / +91 413 2229350.

Consultations and basic emergency medications are free for all walk-ins. For straightforward non-emergency situations when you are based in the White Town, this is the most accessible option.

**Rajiv Gandhi Government Women and Children Hospital**

The primary state facility for maternal and paediatric care, equipped with neonatal intensive care units and specialist paediatric wards. Relevant for travellers with infants or young children, or for pregnancy-related medical situations.

Address: Ellaipillaichavady Main Road, Puducherry 605005, opposite the multi-sports complex.
Contact: +91 413 2201341.
Care is free under the state system.`,
  },

  {
    id: "private-hospitals",
    title: "Private Clinics",
    category: "private",
    teaser:
      "PIMS on the ECR is the preferred choice for expats and Auroville residents needing private-standard care. Cluny Hospital in the White Town is excellent for mid-level illness and consultations.",
    photo: "medical-clinic.jpg",
    body: `**PIMS (Pondicherry Institute of Medical Sciences)**

Located on the northern coastal border toward the East Coast Road, PIMS is a premium private hospital managed by the Madras Medical Mission. It offers clean private facilities, international patient standards, and a dedicated 24/7 casualty wing. It is the preferred choice for expatriates and long-stay Auroville residents who require private-sector care.

Address: Kalathumettupathai, Ganapathichettikulam Village, Kalapet, Puducherry 605014, on the ECR highway.
Hospital reception: +91 413 2651111 / +91 413 2656271.
24/7 casualty and emergency: +91 413 2651482.
Toll-free helpline: 1800 425 9009.

Private out-patient consultation fees typically range from 250 to 500 rupees per visit, excluding diagnostics, private room tariffs, and pharmacy charges. Travel insurance is advisable if you anticipate needing PIMS-level care.

**Cluny Hospital (St. Joseph's Cluny Hospital)**

A beautifully maintained charitable hospital run by the Sisters of St. Joseph of Cluny, centrally located in the White Town. Cluny is particularly well regarded for its compassionate nursing staff, clean environment, and ease of access from anywhere in the French Quarter. It is an excellent option for mid-level illness, minor sutures, general physician consultations, and laboratory testing.

Address: 4 Romain Rolland Street, White Town, Puducherry 605001.
Contact: +91 413 2334057.

Consultation fees are affordable by any standard, typically ranging from 150 to 300 rupees.

**Dental clinics**

For dental emergencies or routine issues during your stay, independent private dental clinics are available across White Town and Heritage Town. The Mahatma Gandhi Post Graduate Institute of Dental Sciences is the main institutional option. Private dental spaces such as Deen Dental also operate in the city centre.

Typical dental consultation: 250 to 500 rupees. Standard fillings: 800 to 1,500 rupees. Emergency root canal treatment at an upscale private clinic: 3,500 to 6,000 rupees.

**Private general clinics**

For minor ailments (fever, stomach upset, skin reactions), independent private clinics in the White Town and Heritage Town offer walk-in consultations without appointment. Expect to pay between 200 and 400 rupees for a straightforward diagnostic consultation. Your hotel or guesthouse can recommend the nearest clinic.`,
  },

  {
    id: "pharmacies",
    title: "Pharmacies",
    category: "pharmacy",
    teaser:
      "Pharmacies are plentiful and open late. Basic medications are available over the counter without a prescription. Antibiotics and scheduled drugs require a valid prescription signed by a registered doctor.",
    photo: "pharmacy-new.jpg",
    body: `**Finding a pharmacy**

Pharmacies are easy to find across Puducherry, identified by illuminated green or red medical cross signs. Major corporate chains including Apollo Pharmacy and MedPlus operate multiple outlets across the city, several of which run 24 hours. Independent medical shops are also widespread in the White Town and Heritage Town. Nehru Street has a good concentration of pharmacies for day-to-day supplies.

**What you can buy without a prescription**

For common travel health needs, a wide range of medications is available over the counter without documentation: paracetamol, antacids, antihistamines, oral rehydration salts (ORS), basic painkillers, antiseptic creams, sunscreen, and insect repellent. Carrying ORS sachets as a precaution is worthwhile: they are inexpensive and useful for rehydrating after a hot day or a bout of stomach trouble.

**Prescription requirements**

Modern pharmaceutical regulation in India is strictly enforced. Scheduled drugs, antibiotics, sleep aids, and psychiatric medications will not be dispensed without a physical prescription signed by a registered medical practitioner bearing their official medical council registration stamp. This applies uniformly across Apollo, MedPlus, and independent pharmacies.

If you have a chronic condition or take regular medications, carry your home country's original prescription alongside the exact generic (chemical) name of each drug, not just the brand name. Brand names vary considerably across international borders, and a pharmacist working from the generic name can identify the correct equivalent far more reliably.

**Emergency medication access**

If you need a prescription for something urgent and cannot visit a hospital, private clinic consultations in the White Town can issue a valid prescription the same day for a fee of 200 to 400 rupees. This is faster than waiting in a public hospital out-patient queue for a non-emergency situation.`,
  },
];

export function getHealthcareArticle(id: string): HealthcareArticle | undefined {
  return healthcareArticles.find((a) => a.id === id);
}

export function getHealthcareByCategory(
  category: HealthcareCategory
): HealthcareArticle[] {
  return healthcareArticles.filter((a) => a.category === category);
}
