export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string[];
  link: string;
  category: string;
  like: number;
}

export const products = [
  {
    id: 1,
    name: 'Smartphone Samsung Galaxy Z Flip4 8GB/128GB Gray',
    price: 530000,
    description:
      'NFC technology: Yes, color: gray, screen type: AMOLED, touch, diagonal: 6.7 inch, RAM size: 8 GB, Processor: 8-core Qualcomm Snapdragon 8 Gen 1, built-in memory: 128 GB, battery capacity: 3700 mAh',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1d/h52/62178742337566/samsung-galaxy-z-flip4-8-gb-128-gb-seryj-smart-casy-samsung-galaxy-watch-4-106305928-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h8f/62178742796318/samsung-galaxy-z-flip4-8-gb-128-gb-seryj-smart-casy-samsung-galaxy-watch-4-106305928-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/h19/62178743713822/samsung-galaxy-z-flip4-8-gb-128-gb-seryj-smart-casy-samsung-galaxy-watch-4-106305928-4.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-flip4-8-gb-128-gb-seryi-106305928/?c=750000000#!/item',
    category: 'Telephone and gadgets',
    like: 0, 
  },
  {
    id: 2,
    name: 'Smart-watch Samsung Galaxy Watch 4 Classic 46 mm black',
    price: 95830,
    description:
      'platform support: Android, body material: aluminum, body color: black, interfaces: Bluetooth, ,NFC',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h31/h9b/62047597559838/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/h2d/62047597789214/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/h68/62047598018590/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-3-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000#!/item',
    category: 'Telephone and gadgets',
    like: 0,
  },
  {
    id: 3,
    name: 'Amazon Kindle Paperwhite 2021 e-reader black',
    price: 98495,
    description:
      'built-in backlight: yes',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6a/ha1/47093254455326/amazon-kindle-paper-2021-chernyi-102838488-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h33/h20/47093257994270/amazon-kindle-paper-2021-chernyi-102838488-2.jpg'],
    link: 'https://kaspi.kz/shop/p/amazon-kindle-paperwhite-2021-chernyi-102838488/?c=750000000#!/item',
    category: 'Telephone and gadgets',
    like: 0,
  },
  {
    id: 4,
    name: 'Smartphone Apple iPhone 14 Pro Max 256Gb purple',
    price: 683375,
    description:
      'NFC technology: Yes, color: purple, screen type: OLED, Super Retina XDR display with continuous operation, diagonal: 6.7 inch, RAM size: 6 GB, Processor: 6-core Apple A16 Bionic, built-in memory: 256 GB, battery capacity: 3095 mAh',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h61/62948780736542/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h83/h6d/63073993261086/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-3.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h52/63073993490462/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-4.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    category: 'Telephone and gadgets',
    like: 0,
  },
  {
    id: 5,
    name: 'Apple Watch Series 8 45 mm Aluminum gold',
    price: 229755,
    description:
      'platform support: iOS, body material: aluminum, body color: starlight, screen technology: OLED, built-in memory: 32 GB, interfaces: Bluetooth, ,Wi-Fi, ,NFC, operating time: normal, mode: 18 hours, power saving mode: 36 hours',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h50/h39/63158668460062/apple-watch-series-8-45-mm-aluminum-zolotistyj-106585021-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/hbd/63158668918814/apple-watch-series-8-45-mm-aluminum-zolotistyj-106585021-2.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-zolotistyi-106585021/?c=750000000#!/item',
    category: 'Telephone and gadgets',
    like: 0,
  },
  {
    id: 6,
    name: 'Earrings Silk Way gold, cubic zirconia',
    price: 148195,
    description:
      'type: earrings, note: the weight of the shade in the photo and the characteristics are approximate averages and may differ from the actual, for whom: for women, sample: 585, material: gold, insert: cubic zirconia, country of origin: Russia, item weight: 5.22g',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h42/hf6/33048782602270/selkovyj-put-sps5-22-zoloto-fianit-100531053-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9b/hd2/51503564292126/selkovyj-put-sps5-22-zoloto-fianit-100531053-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7f/h76/33048817958942/selkovyj-put-sps5-22-zoloto-fianit-100531053-3-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/shelkovyi-put-schps5-22-5-22-g-zoloto-fianit-100531053/?c=750000000#!/item',
    category: 'Jewelries',
    like: 0,
  },
  {
    id: 7,
    name: 'Ring Gold Standard 6041789',
    price: 66698,
    description:
      'product type: wedding, ringsize: 18, note: the weight of the shade in the photo and the characteristics are approximate averages and may differ from the actual, for whom: for women, for men, sample: 585, material: gold, insert: without inserts, country of origin: Russia, item weight: 2.25g',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he2/h39/32648140587038/zolotoj-standart-6041789-18-zoloto-100345162-1-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/zolotoi-standart-6041789-18-2-25-g-zoloto-bez-vstavok-100345162/?c=750000000#!/item',
    category: 'Jewelries',
    like: 0,
  },
  {
    id: 8,
    name: 'Briolette pendant - gold, diamond, topaz',
    price: 422000,
    description:
      'item type: pendant, theme: universal, note: the weight of the shade in the photo and the characteristics are approximate averages and may differ from the actual, for whom: for women,sample: 585, material: gold, insert: diamond, topaz, country of origin: Armenia, product weight: 2.57g',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hed/hd0/68051291209758/briolette-podveska-hb187pk-2-57-g-zoloto-brilliant-topaz-108513196-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h34/h18/68051295010846/briolette-podveska-hb187pk-2-57-g-zoloto-brilliant-topaz-108513196-2.jpg'],
    link: 'https://kaspi.kz/shop/p/briolette-podveska---hb187pk-2-57-g-zoloto-brilliant-topaz-108513196/?c=750000000#!/item',
    category: 'Jewelries',
    like: 0,
  },
  {
    id: 9,
    name: 'Crystal gold, cubic zirconia',
    price: 68476,
    description:
      'item type: pendant, theme: universal, note: the weight of the shade in the photo and the characteristics are approximate averages and may differ from the actual, for whom: for women, sample: 585, material: gold, insert: cubic zirconia, item weight: 2.36g',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/hb0/32981674950686/crystal-113-1-001-04-zoloto-fianit-100705858-1-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/crystal-113-1-001-04-2-36-g-zoloto-fianit-100705858/?c=750000000#!/item',
    category: 'Jewelries',
    like: 0
  },
  {
    id: 10,
    name: 'SOKOLOV Rybka gold, cubic zirconia, topaz',
    price: 71258,
    description:
      'item type: pendant, theme: universal, note: the weight of the shade in the photo and the characteristics are approximate averages and may differ from the actual, for whom: for women, sample: 585, material: gold, insert: cubic zirconia, topaz, country of origin: Russia, product weight: 1.23g',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h90/33077033566238/sokolov-731290-zoloto-topaz-fianit-100525778-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/ha1/33077044150302/sokolov-731290-zoloto-topaz-fianit-100525778-3-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h05/h63/33077037400094/sokolov-731290-zoloto-topaz-fianit-100525778-2-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/sokolov-rybka-731290-1-23-g-zoloto-fianit-topaz-100525778/?c=750000000#!/item',
    category: 'Jewelries',
    like: 0
  },
  {
    id: 11,
    name: 'Mango shopping bag black',
    price: 54990,
    description:
      'bag type: shopper bag, upper material: genuine leather, clasp: magnet, color: black, for whom: for women',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb1/h7b/67393101135902/mango-sumka-shopper-470212519999-chernyi-108259733-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/h70/67393102315550/mango-sumka-shopper-470212519999-chernyi-108259733-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h73/hbd/67393106771998/mango-sumka-shopper-470212519999-chernyi-108259733-4.jpg'],
    link: 'https://kaspi.kz/shop/p/mango-sumka-shopper-470212519999-chernyi-108259733/?c=750000000#!/item',
    category: 'Accessories',
    like: 0,
  },
  {
    id: 12,
    name: 'Watch JACQUES LEMANS 1-2001C silver',
    price: 50500,
    description:
      'type: quartz, time display method: analog (hands), body material: steel, shockproof: no, color: silver, for whom: for women',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h85/hd6/31950422605854/jacques-lemans-1-2001c-silver-21404598-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/h83/31950428340254/jacques-lemans-1-2001c-silver-21404598-2.jpg'],
    link: 'https://kaspi.kz/shop/p/jacques-lemans-1-2001c-serebristyi-21404598/?c=750000000#!/item',
    category: 'Accessories',
    like: 0,
  },
  {
    id: 13,
    name: 'Suitcase L case green',
    price: 50000,
    description:
      'type: suitcase, suitcase volume: 52 l, material: ABS plastic, code lock: yes, depth: 21 cm, Green colour, for whom: for women, for men',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcc/h75/32849120526366/lcase-600-31-52-l-zelenyj-100868042-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6d/ha3/50277964808222/lcase-600-31-52-l-zelenyj-100868042-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/h72/32849133699102/lcase-600-31-52-l-zelenyj-100868042-3-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/l-case-l-case-600-31-52-l-zelenyi-100868042/?c=750000000#!/item',
    category: 'Accessories',
    like: 0,
  },
  {
    id: 14,
    name: 'KARLOS MARCONI backpack black',
    price: 14377,
    description:
      'bag type: backpack, way of wearing: on the shoulder, in the hand, upper material: textile, ,nylon, closure: zipper, black color, for whom: for women, for men, for children',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h84/h87/68509169385502/karlos-marconi-ryukzak-km08897-chernyi-108699536-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcf/he7/68509169909790/karlos-marconi-ryukzak-km08897-chernyi-108699536-3.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h68/68509170171934/karlos-marconi-ryukzak-km08897-chernyi-108699536-4.jpg'],
    link: 'https://kaspi.kz/shop/p/karlos-marconi-rjukzak-km08897-chernyi-108699536/?c=750000000#!/item',
    category: 'Accessories',
    like: 0,
  },
  {
    id: 15,
    name: 'West Polo wallet brown',
    price: 9900,
    description:
      'type: purse, material: genuine leather, clasp: button, coin compartment: yes, dimensions: 9x11.5x2 cm, Brown color, for whom: for men',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5d/h67/47302807322654/west-polo-bumaznik-61p-koricnevyj-102941635-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h55/hb7/47302807781406/west-polo-bumaznik-61p-koricnevyj-102941635-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h61/h75/47302809157662/west-polo-bumaznik-61p-koricnevyj-102941635-5.jpg'],
    link: 'https://kaspi.kz/shop/p/west-polo-bumazhnik-61p-korichnevyi-102941635/?c=750000000#!/item',
    category: 'Accessories',
    like: 0,
  },
  {
    id: 16,
    name: 'The Ordinary Niacinamide 10%+Zinc 1% serum',
    price: 4750,
    description:
      'type: serum, action: matting, ,anti-inflammatory, ,alignment, ,regeneration, application area: face, skin type: problematic, country of origin: Canada',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hce/h49/33287282556958/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hec/h15/33287286980638/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/h83/33287305265182/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687-5.jpg'],
    link: 'https://kaspi.kz/shop/p/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687/?c=750000000#!/item',
    category: 'Beauty And Health',
    like: 0,
  },
  {
    id: 17,
    name: 'Dior Addict Lip Glow Pink',
    price: 24899,
    description:
      'type: lip gloss, effect: shining, UV Protection: No, color: pink, country of origin: France',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h64/h93/63277329612830/dior-addict-lip-glow-oil-001-pink-106896838-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcf/h87/63277330071582/dior-addict-lip-glow-oil-001-pink-106896838-2.jpg'],
    link: 'https://kaspi.kz/shop/p/dior-addict-lip-glow-oil-blesk-dlja-gub-rozovyi-001-pink-106896838/?c=750000000#!/item',
    category: 'Beauty And Health',
    like: 0,
  },
  {
    id: 18,
    name: 'Dior Forever Skin Correct Concealer 0N',
    price: 21899,
    description:
      'type: concealer, purpose: to mask skin imperfections, for the area around the eyes, texture: liquid, skin type: for all types, country of origin: France',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb2/h1a/52765979869214/diorskin-forever-skin-correct-uvlazhnyayushchii-kremovyi-konsiler-ottenok-0n-105968979-1.jpg'],
    link: 'https://kaspi.kz/shop/p/dior-forever-skin-correct-konsiler-0n-105968979/?c=750000000#!/item',
    category: 'Beauty And Health',
    like: 0,
  },
  {
    id: 19,
    name: 'CHANEL Chance Eau Fraiche EDT',
    price: 68990 ,
    description:
      'type: edt eau de toilette, volume: 100 ml, gender: women, family: floral, brand country: France',
    rating: 5,
    image:
      ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h92/h58/31627949113374/chanel-chance-eau-fraiche-edt-100-ml-17301049-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h24/h9b/31627952390174/chanel-chance-eau-fraiche-edt-100-ml-17301049-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h83/h79/31627958190110/chanel-chance-eau-fraiche-edt-100-ml-17301049-3.jpg'],
    link: 'https://kaspi.kz/shop/p/chanel-chance-eau-fraiche-tualetnaja-voda-edt-100-ml-17301049/?c=750000000#!/item',
    category: 'Beauty And Health',
    like: 0,
  },
  {
    id: 20,
    name: 'GIVENCHY Prisme Libre Pressed Powder loose 1 Pastel muslin transparent',
    price: 33989,
    description: 'texture: crumbly, skin type: combination, normal, for all types, shade: transparent, effect: leveling, UV protection: none, country of origin: France',
    rating: 5, 
    image: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/h66/61985150861342/givenchy-matiruusaa-kompaktnaa-pudra-dla-lica-prisme-libre-pressed-powder-106194432-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/hcf/61985151385630/givenchy-matiruusaa-kompaktnaa-pudra-dla-lica-prisme-libre-pressed-powder-106194432-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/h43/61985151844382/givenchy-matiruusaa-kompaktnaa-pudra-dla-lica-prisme-libre-pressed-powder-106194432-3.jpg'],
    link: 'https://kaspi.kz/shop/p/givenchy-prisme-libre-pressed-powder-rassypchataja-1-pastel-nyi-muslin-prozrachnyi-106194432/?c=750000000#!/item',
    category: 'Beauty And Health',
    like: 0,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
