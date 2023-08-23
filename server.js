import express from 'express';
import cors from 'cors'

const app = express();

const data =  [
    {
      "name": "Tomate",
      "typ": "veg",
      "preis": 1.20,
      "beschreibung": "Eine reife rote Tomate. Perfekt für Salate oder Saucen. Reich an Vitamin C. Aus biologischem Anbau."
    },
    {
      "name": "Gurke",
      "typ": "veg",
      "preis": 0.80,
      "beschreibung": "Eine grüne, knackige Gurke. Ideal für Erfrischungssalate. Gut für die Haut. Null Kalorien."
    },
    {
      "name": "Karotte",
      "typ": "veg",
      "preis": 1.10,
      "beschreibung": "Knackige orange Karotte. Perfekt für Snacks oder Kochen. Reich an Beta-Carotin. Unterstützt das Sehvermögen."
    },
    {
      "name": "Brokkoli",
      "typ": "veg",
      "preis": 1.50,
      "beschreibung": "Frischer Brokkoli. Ideal für Suppen oder Dampfgaren. Reich an Vitaminen und Mineralien. Guter Eisenlieferant."
    },
    {
      "name": "Paprika",
      "typ": "veg",
      "preis": 1.30,
      "beschreibung": "Eine süße rote Paprika. Gut roh oder gekocht. Voll von Antioxidantien. Farbenfrohes Gemüse."
    },
    {
      "name": "Spinat",
      "typ": "veg",
      "preis": 1.00,
      "beschreibung": "Blättriger frischer Spinat. Gut für Salate oder Smoothies. Eisengehalt hoch. Unterstützt starke Knochen."
    },
    {
      "name": "Radieschen",
      "typ": "veg",
      "preis": 0.90,
      "beschreibung": "Knackige rote Radieschen. Perfekt für Brotbelag. Scharfer, erfrischender Geschmack. Guter Vitamin-C-Lieferant."
    },
    {
      "name": "Erbsen",
      "typ": "veg",
      "preis": 1.10,
      "beschreibung": "Frische grüne Erbsen. Gut für Suppen oder pur. Hoher Proteingehalt. Einfach zuzubereiten."
    },
    {
      "name": "Apfel",
      "typ": "fruit",
      "preis": 0.60,
      "beschreibung": "Saftiger roter Apfel. Perfekt zum Snacken. Reich an Ballaststoffen. Unterstützt die Verdauung."
    },
    {
      "name": "Birne",
      "typ": "fruit",
      "preis": 0.70,
      "beschreibung": "Süße reife Birne. Saftige Textur. Ideal zum Backen oder Frischessen. Reich an Vitaminen."
    },
    {
      "name": "Banane",
      "typ": "fruit",
      "preis": 0.40,
      "beschreibung": "Gelbe reife Banane. Energiebooster. Gut für den Start in den Tag. Reich an Kalium."
    },
    {
      "name": "Kirsche",
      "typ": "fruit",
      "preis": 2.00,
      "beschreibung": "Süße rote Kirschen. Perfekt für Desserts. Reich an Antioxidantien. Sommerobst."
    },
    {
      "name": "Trauben",
      "typ": "fruit",
      "preis": 1.80,
      "beschreibung": "Süße grüne Trauben. Gut zum Naschen. Reich an Vitaminen. Perfekt für unterwegs."
    },
    {
      "name": "Orange",
      "typ": "fruit",
      "preis": 0.80,
      "beschreibung": "Saftige Orange. Reich an Vitamin C. Gut zum Pressen oder Essen. Unterstützt das Immunsystem."
    },
    {
      "name": "Erdbeere",
      "typ": "fruit",
      "preis": 2.50,
      "beschreibung": "Süße rote Erdbeeren. Perfekt für Desserts. Vitamin C hoch. Sommerlicher Geschmack."
    },
    {
      "name": "Kiwi",
      "typ": "fruit",
      "preis": 0.70,
      "beschreibung": "Säuerliche grüne Kiwi. Gut für Smoothies. Reich an Vitaminen und Mineralien. Exotische Frucht."
    },
    {
      "name": "Messer",
      "typ": "misc",
      "preis": 10.00,
      "beschreibung": "Scharfes Küchenmesser. Für präzise Schnitte. Rostfreier Stahl. Ergonomischer Griff."
    },
    {
      "name": "Schneidebrett",
      "typ": "misc",
      "preis": 15.00,
      "beschreibung": "Robustes Schneidebrett. Hygienisches Material. Gut für alle Lebensmittel. Einfach zu reinigen."
    },
    {
      "name": "Salatschleuder",
      "typ": "misc",
      "preis": 20.00,
      "beschreibung": "Effiziente Salatschleuder. Für trockenen Salat. Einfache Handhabung. Spart Zeit und Mühe."
    },
    {
      "name": "Küchenwaage",
      "typ": "misc",
      "preis": 25.00,
      "beschreibung": "Präzise Küchenwaage. Misst in Gramm und Unzen. Einfach zu bedienen. Für perfekte Rezeptergebnisse."
    }
  ]


app.use(express.json());
app.use(cors())
app.get('/', (req, res) => {
    res.send(data)
    });

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Now listening on port`, PORT);
});



