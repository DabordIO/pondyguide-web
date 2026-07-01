export interface PracticalGuide {
  id: string;
  title: string;
  teaser: string;
  body: string;
  photo: string; // image filename under /public/guides/
}

export const practicalGuides: PracticalGuide[] = [
  {
    id: "currency-atms",
    title: "Cash & ATMs",
    teaser:
      "Puducherry runs on cash for markets, rickshaws, and smaller restaurants. Withdraw by Friday afternoon: White Town ATMs often run dry by Sunday evening.",
    photo: "MONEY-CASH-ATM.jpeg",
    body: `**A cash-friendly economy**

While upscale French Quarter boutiques and cafés accept digital payments (UPI, credit and debit cards), open-air markets, street vendors, and auto-rickshaws require physical currency. Carry enough rupees to cover a day's activity before heading out.

**Exchanging foreign currency**

For international travellers holding foreign currency (USD, EUR, GBP), use institutional state banks or licensed, authorised money changers to avoid unfavourable conversion rates and counterfeit risk. The State Bank of India NRI and Forex branch on Sufren Street in the White Town is the safest and most official venue for cash foreign exchange. Several government-approved private money changers also operate reliably along Mission Street and Jawaharlal Nehru Street: look for shops displaying the Reserve Bank of India authorised dealer certification. Always request a printed receipt for the transaction.

**ATM safety**

ATMs are plentiful across the city centre. Prefer machines physically attached to major banking branches (HDFC Bank, ICICI Bank, SBI) on prominent streets such as Mission Street or Bussy Street. These machines are regularly monitored, have security guards, and are far less likely to carry card-skimming devices than isolated stand-alone ATMs in quiet alleys.

**The weekend cash problem**

Puducherry draws a large influx of domestic weekend visitors from Chennai. By Sunday evening, the central White Town ATMs frequently run completely dry. Withdraw whatever you need for the weekend by Friday afternoon.

**Card retention**

Indian ATMs hold your card inside the reader until the entire transaction (including the cash dispensing cycle) is fully completed. Do not pull your card prematurely. Press the red Cancel button on the keypad and wait for your card to be returned before stepping away from the machine.`,
  },

  {
    id: "luggage-storage",
    title: "Luggage storage",
    teaser:
      "Checking out at 11am but not leaving until evening? The railway station cloak room is the most secure option. Most hotels store bags after checkout as a matter of course.",
    photo: "Luggage storage.jpg",
    body: `**The gap between checkout and departure**

If you check out of your guesthouse in the morning but your train or bus does not leave until the evening, carrying heavy bags through the White Town in the heat is impractical. Pondicherry does not have self-service luggage locker storefronts, but several reliable options exist.

**Puducherry Railway Station cloak room**

The cloak room is located near the main platform ticketing counter and is the most secure option in the city. Two conditions apply: your luggage must be physically padlocked (a padlock on the zipper closures is required) to be accepted by the baggage master, and you must present a valid train ticket and a government-issued ID. The fee is very low, typically under 50 rupees per bag for 24 hours.

**Puducherry Main Bus Stand**

The central interstate bus terminal has a manned luggage cloakroom. Hours vary, so confirm the closing time with the attendant before leaving your bags.

**Hotel and guesthouse storage**

After a formal checkout, virtually all hotels and boutique guesthouses in the French Quarter will store your bags in a secure holding area or lobby luggage room until your evening departure, free of charge. This is the easiest option if you are already staying somewhere in the White Town.

**Tour operators and cultural centres**

If you are joining a walking tour or attending a workshop, operators such as the Sita Cultural Center at 22 Kandappa Mudaliyar Street will often let you leave bags securely at their desk for the afternoon as a courtesy.`,
  },

  {
    id: "alcohol-transport",
    title: "Alcohol & Borders",
    teaser:
      "Pondicherry's lower alcohol taxes attract visitors from Tamil Nadu, but carrying bottles across the border is a serious offence. The checkpoints are active and the consequences are significant.",
    photo: "Alcohol.jpg.webp",
    body: `**Why this matters**

Because Puducherry is a Union Territory, it applies a completely separate excise duty structure from the surrounding state of Tamil Nadu, making alcohol significantly cheaper here. This price gap has produced strict anti-smuggling enforcement at every territorial border exit, and the checkpoints are not symbolic.

**The legal position**

You are permitted to transport zero bottles of sealed liquor across the Puducherry border into Tamil Nadu, Karnataka, or any other state without a valid export permit. There are no exceptions for personal use.

A common point of confusion arises from a Madras High Court ruling on personal consumption limits. Tamil Nadu police have explicitly clarified that the state's personal possession allowance (up to 4.5 litres) applies exclusively to alcohol legally purchased inside Tamil Nadu through the state-run TASMAC outlets. It does not apply to alcohol sourced from other states or Union Territories. Carrying even a single sealed bottle of Puducherry liquor across the state border constitutes an illegal import offence under the Tamil Nadu Prohibition Act.

**What happens at the checkpoints**

The Cuddalore exit and the East Coast Road tollways have permanent, active police checkpoints run by the Prohibition Enforcement Wing. Every tourist vehicle is subject to inspection. Officers check trunks, glove compartments, under-seat storage, and personal baggage. Out-of-state registered vehicles (TN, KA, MH plates) and tourist buses receive particular attention.

If stopped with sealed bottles, the alcohol is confiscated on the spot. Depending on the volume, penalties include monetary fines, vehicle impoundment, or arrest under non-bailable anti-smuggling statutes.

**The airline exception**

Flying out from Chennai Airport is technically possible with alcohol in your checked baggage, provided you carry the original purchase receipt showing the bottles were bought for personal use. In practice, getting the bottles from Pondicherry to the airport requires crossing the very land border where they would be confiscated. The most straightforward advice: drink what you buy within Pondicherry and leave with an empty bag.`,
  },

  {
    id: "emergency-numbers",
    title: "Emergency Lines",
    teaser:
      "112 is the single unified emergency line for police, fire, and ambulance. Several specialised lines cover traffic accidents, coastal rescue, and cybercrime.",
    photo: "emergency-services.webp",
    body: `**Core emergency lines**

**112**: National Emergency Response System. The unified single number for India, connecting to a control centre that coordinates police, fire, and medical response simultaneously. This is the number to call first in any emergency.

**100**: Police control room. Direct line to local law enforcement dispatch.

**101**: Fire and rescue services. Report active fires, structural collapse, or flood-rescue situations.

**108**: Free emergency ambulance service. Medical transportation and trauma support, dispatched at no cost.

**Specialised lines**

**1073**: Traffic and accident helpline. Use this to report road collisions, major blockages, or aggressive transport behaviour.

**1093**: Coastal police emergency. Puducherry's coastline is monitored by a dedicated unit covering ocean rescue, beach incidents, and maritime emergencies involving fishermen.

**1031**: Anonymous anti-crime and corruption line. Report public scams, illegal sales, or security grievances without identifying yourself.

**1930**: National Cyber Crime Reporting Portal. If you are a victim of online financial fraud, identity theft, or ATM card skimming while travelling, call this number immediately to initiate account freezing on the destination accounts.

**Practical note**

Save 112 and 108 in your phone before you arrive. Both work without a local SIM card on any handset that can connect to an Indian network.`,
  },
];

export function getPracticalGuide(id: string): PracticalGuide | undefined {
  return practicalGuides.find((g) => g.id === id);
}
