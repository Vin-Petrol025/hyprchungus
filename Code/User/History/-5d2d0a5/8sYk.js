const products = [
  {
    id: 1,
    name: "Solid Maroon",
    price: "PKR 14,200/-",
    originalPrice: "PKR 16,000/-",
    image: "content/IMG-20251024-WA0018 (1).jpg",
    images: [
      "content/IMG-20251024-WA0019 (1).jpg",
      "content/IMG-20251024-WA0020 (1).jpg",
      "content/IMG-20251024-WA0018 (1).jpg",
    ],
    shortDescription:
      "korean silk shirt, trousers and dupatta with hand work of stones and sequence on shirt. Organza lace on dupatta.",
    description:
      "Korean raw silk for shirt and trousers, silk dupatta, hand work of stones and sequence on shirt. Organza lace on dupatta. Stitched 3-piece. Availabke in any customizable size.",
    inStock: 1,
    sizeChartImage: "content/sz-chart.jpg",
    allowCustomSize: true,
  },

  {
    id: 5,
    name: "Lailac chicken Kari",
    price: "PKR 9,450/-",
    originalPrice: "PKR 9,800/-",
    image: "content/IMG-20260413-WA0053.jpg",

    images: [
      "content/IMG-20260413-WA0052.jpg",
      "content/IMG-20260413-WA0053.jpg",
      "content/IMG-20260413-WA0054.jpg",
      "content/VID-20260413-WA0047.webm",
      "content/VID-20260413-WA0044.webm",
      "content/VID-20260413-WA0042.webm",
      "content/VID-20260413-WA0041.webm",

    ],
    shortDescription:
      "Chicken kari summer collection",
    description:
      "chicken kari shirt summer cotton trousers(breathable fabric) Lawn embroidred dupatta with organza border embroided patch work on sleeves and backside of shirt. tassels also attached, u can add on a silk or chifoon gupattra. Available in all sizes.",
    inStock: 1,
    sizeChartImage: "content/sz-chart.jpg",
    allowCustomSize: true,
  },
  {
    id: 6,
    name: "White Rose",
    price: "PKR 35,000/-",
    // originalPrice: "PKR 40,000/-",
    image: "content/9AI.jpg",

    images: [
      "content/IMG-20260413-WA0040.jpg",
      "content/IMG-20260413-WA0037.jpg",
      "content/IMG-20260413-WA0043.jpg",
      "content/VID-20260413-WA0032.webm",
      "content/VID-20260413-WA0031.webm",
      "content/VID-20260413-WA0031.webm",
      "content/VID-20260413-WA0039.webm",
      "content/VID-20260413-WA0038.webm",
      "content/VID-20260413-WA0036.webm",
      "content/VID-20260413-WA0035.webm",
      "content/VID-20260413-WA0034.webm",
      "content/IMG-20260413-WA0082.jpg",
    ],
    shortDescription:
      "Peach colored shirt with matching shalwar.",
    description:
      "Fabric Korean raw silk frock and trousers Medium silk dupatta 5 yards گھیر of frock Beautiful premium quality laces on frock and dupatta can be customised in any colour and size",
    inStock: 1,
    sizeChartImage: "Custom Size",
    allowCustomSize: true,
  },
  {
    id: 7,
    name: "Solid Navy Blue",
    price: "PKR 6,300/-",
    originalPrice: "PKR 6,850/-",
    image: "content/IMG-20260413-WA0080.jpg",
    images: [
      "content/IMG-20260413-WA0080.jpg",
      "content/IMG-20260413-WA0079.jpg",
      "content/IMG-20260413-WA0078.jpg",
      "content/IMG-20260413-WA0063.jpg",
      "content/IMG-20260413-WA0064.jpg",
      "content/VID-20260413-WA0048.webm",
      "content/VID-20260413-WA0067.webm",
    ],
    shortDescription:
      "Solid navy blue shirt with matching shalwar and dupatta.",
    description:
      "Tailor stitched 3 piece Summer Cotton navy blue shirt with matching shalwar and Shifoon Printed dupatta. Available in all sizes.",
    inStock: 1,
    sizeChartImage: "content/ddfdfdfdf.jpeg",
    allowCustomSize: false,

  },
  {
    id: 8,
    name: "Peach Pink Chicken Kari",
    price: "PKR 9,350/-",
    originalPrice: "PKR 9,800/-",
    image: "content/3AI.jpg",
    images: [
      "content/IMG-20260413-WA0069.jpg",
      "content/IMG-20260413-WA0068.jpg",
      "content/IMG-20260413-WA0066.jpg",
      "content/IMG-20260413-WA0077.jpg",
      "content/IMG-20260413-WA0076.jpg",
      "content/VID-20260413-WA0090.webm",
      "content/VID-20260413-WA0089.webm",
      "content/VID-20260413-WA0065.webm",
      "content/VID-20260413-WA0062.webm",
      "content/VID-20260413-WA0062.webm",

    ],
    shortDescription:
      "Peach colored shirt with matching shalwar.",
    description:
      "Tailor stitched 3 piece outfit. Premium Chicken Kari shirt, Summer cotton trousers, Milky laces on shirt, trousers and dupatta. Organza border on dupatta, Pearl tessels on sleves. Available in all sizes.",
    inStock: 1,
    sizeChartImage: "content/sz-chart.jpg",
    allowCustomSize: false,

  },
  {
    id: 9,
    name: "Off white chicken kari",
    price: "PKR 9,350/-",
    originalPrice: "PKR 9,800/-",
    image: "content/IMG-20260413-WA0061.jpg",
    images: [
      "content/IMG-20260413-WA0061.jpg",
      "content/IMG-20260413-WA0056.jpg",
      "content/VID-20260413-WA0070.webm",
      "content/VID-20260413-WA0050.webm",
      "content/VID-20260413-WA0049.webm",
    ],
    shortDescription:
      "Off white Shirt with dupatta and trousers",
    description:
      "Off white printed chicken kari shirt. Summer cotton trousers. Milky laces on shirt and trousers. Inner attached. Double shade medium silk dupatta. Light suit for comfortable summer wear. You can also add a shifoon dupatta. 3 piece Tailor stitched Suit",
    inStock: 1,
    sizeChartImage: "content/sz-chart.jpg",
    allowCustomSize: false,
  },
  // {
  //   id: 10,
  //   name: "Sage Green",
  //   price: "PKR 6,950/-",
  //   originalPrice: "PKR 7,850/-",
  //   image: "content/IMG-20260413-WA0071.jpg",
  //   images: [
  //     "content/IMG-20260413-WA0071.jpg",
  //     "content/IMG-20260413-WA0073.jpg",
  //     "content/IMG-20260413-WA0074.jpg",
  //     "content/VID-20260413-WA0085.webm",
  //     "content/VID-20260413-WA0084.webm",
  //     "content/VID-20260413-WA0083.webm",
  //     "content/VID-20260413-WA0072.webm",
  //     "content/VID-20260413-WA0051.webm",
  //   ],
  //   shortDescription:
  //     "Sage green shirt with matching shalwar and dupatta.",
  //   description:
  //     "Summer friedly Cotton Shirt and trousers. Double shaded Shifon dupatta. Organza embroided patch on shirt and trousers. Tailor Stitched 3 piece outfit. Available in all sizes.",
  //   inStock: 0,
  // },
  {
    id: 2,
    name: "Mustard Shirt with Shalwar.",
    price: "PKR 3,250/-",
    originalPrice: "PKR 3,900/-",
    image: "content/IMG-20251024-WA0040 (1).jpg",
    images: [
      "content/IMG-20251024-WA0040 (1).jpg",
      "content/IMG-20251024-WA0041 (1).jpg",
      "content/IMG-20251024-WA0043 (1).jpg",
      "content/IMG-20251024-WA0044 (1).jpg",
    ],
    shortDescription:
      "Mustard colored shirt with matching shalwar and dupatta.",
    description:
      "Tailor Stitched 2 piece outfit, Premium Lawn for shirt and self print cotton for shalwar. Sequence on necklace. Available in all size.",
    inStock: 1,
    sizeChartImage: "content/mustrard.jpg",
    allowCustomSize: false,
  },
  {
    id: 3,
    name: "Garden Green",
    price: "PKR 3,950/-",
    originalPrice: "PKR 4,600/-",
    image: "content/IMG-20251024-WA0031 (1).jpg",
    images: [
      "content/IMG-20251024-WA0024 (1).jpg",
      "content/IMG-20251024-WA0027 (1).jpg",
      "content/IMG-20251024-WA0025 (1).jpg",
    ],
    shortDescription:
      " Lawn Shirt with trouser and dupatta.",
    description:
      "Tailor stitched 3 piece outfit. Premium lawn shirt and trousers. Milky lace on hem and sleeves. Dyed shifoon dupatta. Size customization available. Available in all sizes.",
    inStock: 1,
    sizeChartImage: "content/sz-chart.jpg",
    allowCustomSize: true,

  },

  {
    id: 4,
    name: "Beige shirt with shalwar",
    price: "PKR 3,500/-",
    originalPrice: "PKR 3,900/-",
    image: "content/IMG-20251024-WA0038 (1).jpg",
    images: [
      "content/IMG-20251024-WA0038 (1).jpg",
      "content/IMG-20251024-WA0039 (1).jpg",

    ],
    shortDescription:
      "Beige colored shirt with matching shalwar.",
    description:
      "Tailor stitched 2 piece outfir. Premium lawn for shirt, Summer cotton for farshi shalwar, milky lace and pearl tassels. Available in all sizes.",
    inStock: 1,
    sizeChartImage: "content/IMG-20260629-WA0025.jpg",
    allowCustomSize: false,
  },
  {
    id: 11,
    name: "Chandani",
    price: "PKR 10,500/-",
    originalPrice: "PKR 12,000/-",
    image: "content/6AI.jpg",
    images: [
      "content/28NEW.jpeg",
      "content/29NEW.jpeg",
      "content/30NEW.jpeg",
      "content/38NEW.jpeg",
    ],
    shortDescription:
      "Chandani shirt with matching shalwar and dupatta.",
    description:
      "Fabric: Raw Silk, Medium Silk Dupatta. Stone work on neckline, hem and sleeves. 4 side lace on dupatta. Can be customised in any colour and size.",
    inStock: 1,
    sizeChartImage: "content/chandani-sz.jpg",
    allowCustomSize: true,
  },
  {
    id: 12,
    name: "Bottle Green Silk",
    price: "PKR 12,500/-",
    originalPrice: "PKR 13,0000/-",
    image: "content/2NEW.jpeg",
    images: [
      "content/2NEW.jpeg",
      "content/1NEW.jpeg",
      "content/3NEW.jpeg",
      "content/22NEW.mp4",



    ],
    shortDescription:
      "fabric sheesha silk medium silk dupatta with organza border Available in all sizes",
    description:
      "fabric sheesha silk for shirt,silk trouser. Laces and stones on neckline and sleeves. Pearls and stones on dupatta border, Silk dupatta with organza border. Also available with a chifoon dupatta. Available in all sizes",
    inStock: 1,
    sizeChartImage: "content/IMG-20251024-WA0018 (1).jpg",
    allowCustomSize: true,
  },
  {
    id: 13,
    name: "Red Rose Anarkali Frock",
    price: "PKR 9,500/-",
    originalPrice: "PKR 9,800/-",
    image: "content/8AI.jpg",
    images: [
      "content/34NEW.jpeg",
      "content/1NEW0.mp4",
      "content/32NEW.jpeg",
      "content/33NEW.jpeg",
      "content/34NEW.jpeg",
      "content/2NEW0.jpeg",
      "content/4NEWT.mp4",
      "content/5NEW0.mp4",

    ],
    shortDescription:
      "Red Rose Anarkali Frock with matching dupatta.",
    description:
      "Stitched 2 piece Lawn Anarkali Frock with dyed shifoon dupatta long length frock. Also available in a lawn dupatta. Available in all sizes. Can be customised in any size.",
    inStock: 1,
    sizeChartImage: "content/zszz.jpg",
    allowCustomSize: true,
  },
  {
    id: 14,
    name: "Pink Anarkali Frock",
    price: "PKR 9,500/-",
    originalPrice: "PKR 9,800/-",
    image: "content/2AI.jpg",
    images: [
      "content/35NEW.jpeg",
      "content/36NEW.jpeg",
      "content/20NEW.mp4",
      "content/21NEW.mp4",

    ],
    shortDescription:
      "Anarkali Frock with matching dupatta.",
    description:
      "Stitched 2 piece Lawn Anarkali Frock with dyed shifoon dupatta long length frock. Also available in a lawn dupatta. Available in all sizes. Can be customised in any size.",
    inStock: 1,
    sizeChartImage: "content/zszz.jpg",
    allowCustomSize: true,
  },
  {
    id: 15,
    name: "Gul Bahar",
    price: "PKR 6,350/-",
    originalPrice: "PKR 6,850/-",
    image: "content/7AI.jpg",
    images: [
      "content/27NEW.png",
      "content/26NEW.jpeg",
      "content/25NEW.jpeg",
      "content/12NEW.mp4",
      "content/13NEW.mp4",
      "content/14NEW.mp4",
      "content/15NEW.mp4",

    ],
    shortDescription:
      "3 piece stitched outfit Farshi shalwar with short shirt and double shade duppata ",
    description:
      "3 piece stitched outfit Lawn Farshi shalwar with short shirt and double shade duppata. Shirt with back-fitting loops. Available in all sizes. Size cuatomization available.Lawn dupatta can also be added",
    inStock: 1,
    sizeChartImage: "content/ddfdfdfdf.jpeg",
    allowCustomSize: true,
  },
  {
    id: 16,
    name: "Red Formal",
    price: "PKR 6,850/-",
    originalPrice: "PKR 7,250/-",
    image: "content/5AI.jpg",
    images: [
      "content/10NEW.jpeg",
      "content/9NEW.jpeg",
      "content/19NEW.mp4",
      "content/16NEW.mp4",
      "content/17NEW.mp4",
    ],
    shortDescription:
      "Summer shirt with matching shalwar and dupatta.",
    description:
      "Fabric summer cotton lawn. With organza dupatta. Premium quality laces on neckline, sleeves and dupatta. Also available in shifoon dupatta. Block printed farshi shalwaar. Available in all sizes ",
    inStock: 1,
    sizeChartImage: "content/ddfdfdfdf.jpeg",
    allowCustomSize: false,
  },
  {
    id: 17,
    name: "Block Printed Black",
    price: "PKR 5,950/-",
    originalPrice: "PKR 6,300/-",
    image: "content/7NEW.jpeg",
    images: [
      "content/7NEW.jpeg",
      "content/8NEW.jpeg",
      "content/4NEW.mp4",
      "content/5NEW.mp4",
      "content/6NEW.mp4",

    ],
    shortDescription:
      "Sage green shirt with matching shalwar and dupatta.",
    description:
      "Summer friedly Cotton Shirt and trousers. Black Shifon dupatta with laces. Block printing on shirt and dupatta. Milky laces on sleeves, trousers and dupatta. Tailor Stitched 3 piece outfit. Available in all sizes. Size customization available.",
    inStock: 1,
    sizeChartImage: "content/sz-chart.jpg",
    allowCustomSize: true,
  },
  {
    id: 18,
    name: "Printed Sharara",
    price: "PKR 6,150/-",
    originalPrice: "PKR 7,250/-",
    image: "content/4AI.jpg",
    images: [
      "content/54N.jpeg",
      "content/50N.mp4",
      "content/51N.jpeg",
      "content/52N.jpeg",

    ],
    shortDescription:
      "Lawn 3 piece stitched Dupatta shirt.",
    description:
      "Lawn 3 piece stitched sirt with sharara. Fabric lawn for shirt and sharara. Organza dupatta. Organza embroided lace on shirt, dupatta and sharara. Available in all sizes. Size customization available.",
    inStock: 1,
    sizeChartImage: "content/chandani-sz.jpg",
    allowCustomSize: true,
  },

  {
    id: 19,
    name: "Hand painted dupatta With suit",
    price: "PKR 12,500/-",
    originalPrice: "PKR 13,500/-",
    image: "content/77.jpg",
    images: [
      "content/76.jpg",
      "content/77.jpg",
      "content/78.jpg",
      "content/76.mp4",
      "content/77.mp4",
      "content/78.mp4",

    ],
    shortDescription:
      "Hand painted dupatta With suit.",
    description:
      "Hand painted organza dupatta with raw silk suit. Can be customized in any fabric. Sequence work on dupatta. Available in all sizes. Can be customized in any color, fabric and size.",
    inStock: 1,
    sizeChartImage: "content/ddfdfdfdf.jpeg",
    allowCustomSize: true,

  },
  {
    id: 20,
    name: "Lawn 3 Piece stitched",
    price: "PKR 6,150/-",
    originalPrice: "PKR 7,250/-",
    image: "content/91.jpeg",
    images: [
      "content/91.jpeg",
      "content/92.jpeg",
      "content/72.mp4",
      "content/71.mp4",

    ],
    shortDescription:
      "Lawn 3 piece stitched Dupatta shirt.",
    description:
      "Lawn 3 piece stitched. Fabric lawn for shirt dupatta and trousers. Premium lawn With milky laces Stitched 3 piece. Available in all sizes. Size customization available.",
    inStock: 1,
    sizeChartImage: "content/sz-chart.jpg",
    allowCustomSize: true,
  },

  {
    id: 21,
    name: "Red Printed",
    price: "PKR 5,950/-",
    originalPrice: "PKR 7,250/-",
    image: "content/7B.jpg",
    images: [
      "content/7B.jpg",
      "content/6B.jpg",
      "content/4B.jpg",
      "content/3B.mp4",
      "content/2B.mp4",
      "content/1B.mp4",
      "content/8B.jpg",



    ],
    shortDescription:
      "Printed Lawn 3Piece",
    description:
      "Beautiful red outfit Tailor stitched 3 piece outfit Premium lawn for shirt and trousers Bamber shifoon dupatta with lace. Organza and milky laces on shirt. Stones on neckline. Lawn dupatta can also be added. Available in all sizes.",
    inStock: 1,
    sizeChartImage: "content/mr-solid.jpeg",
  },
];
