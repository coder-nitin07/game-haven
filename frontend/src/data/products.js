const items = [
    { id: 1, name: "Classic Shirt", category: "shirt", price: 29.99, image: "https://cdn.pixabay.com/photo/2023/08/30/14/51/xbox-8223478_1280.jpg" },
    { id: 2, name: "Slim Fit Pant", category: "pant", price: 39.99, image: "https://cdn.pixabay.com/photo/2023/08/30/14/51/xbox-8223478_1280.jpg"  },
    { id: 3, name: "Basic T-shirt", category: "t-shirt", price: 19.99, image: "https://cdn.pixabay.com/photo/2023/08/30/14/51/xbox-8223478_1280.jpg" },
    { id: 4, name: "Casual Shirt", category: "shirt", price: 25.99, image: "https://cdn.pixabay.com/photo/2023/08/30/14/51/xbox-8223478_1280.jpg" },
    { id: 5, name: "Comfortable Pant", category: "pant", price: 34.99, image: "https://cdn.pixabay.com/photo/2023/08/30/14/51/xbox-8223478_1280.jpg" },
    { id: 6, name: "Graphic T-shirt", category: "t-shirt", price: 22.99, image: "https://cdn.pixabay.com/photo/2023/08/30/14/51/xbox-8223478_1280.jpg" },
    { id: 7, name: "Elegant Shirt", category: "shirt", price: 40.99, image: "https://cdn.pixabay.com/photo/2023/08/30/14/51/xbox-8223478_1280.jpg" },
    { id: 8, name: "Cargo Pant", category: "pant", price: 45.99, image: "https://cdn.pixabay.com/photo/2023/08/30/14/51/xbox-8223478_1280.jpg" },
    { id: 9, name: "V-neck T-shirt", category: "t-shirt", price: 18.99, image: "https://cdn.pixabay.com/photo/2023/08/30/14/51/xbox-8223478_1280.jpg" },
    { id: 10, name: "Formal Shirt", category: "shirt", price: 35.99, image: "https://cdn.pixabay.com/photo/2023/08/30/14/51/xbox-8223478_1280.jpg" },
    { id: 11, name: "Chino Pant", category: "pant", price: 42.99, image: "https://cdn.pixabay.com/photo/2023/08/30/14/51/xbox-8223478_1280.jpg" },
    { id: 12, name: "Sport T-shirt", category: "t-shirt", price: 24.99, image: "https://cdn.pixabay.com/photo/2023/08/30/14/51/xbox-8223478_1280.jpg" },
    { id: 13, name: "Sport T-shirt", category: "t-shirt", price: 24.99, image: "https://c1.wallpaperflare.com/preview/196/896/911/control-videogame-game.jpg" },
    { id: 14, name: "Sport T-shirt", category: "t-shirt", price: 21.99, image: "https://c1.wallpaperflare.com/preview/196/896/911/control-videogame-game.jpg" },
    { id: 15, name: "Sport T-shirt", category: "t-shirt", price: 24.99, image: "https://c1.wallpaperflare.com/preview/196/896/911/control-videogame-game.jpg" },
    { id: 16, name: "Sport T-shirt", category: "t-shirt", price: 24.99, image: "https://c1.wallpaperflare.com/preview/196/896/911/control-videogame-game.jpg" },
    { id: 17, name: "Sport Shirt", category: "shirt", price: 41.99, image: "https://cdn.pixabay.com/photo/2023/08/30/14/51/xbox-8223478_1280.jpg" },
];

const gamePads = [
  "https://cdn.pixabay.com/photo/2023/08/30/14/51/xbox-8223478_1280.jpg",
  "https://c4.wallpaperflare.com/wallpaper/627/395/613/blue-controller-dualshock-entertainment-wallpaper-preview.jpg",
  "https://c0.wallpaperflare.com/preview/32/491/818/4k-wallpaper-buttons-controller-design.jpg",
  "https://rukminim2.flixcart.com/image/612/612/xif0q/gamepad/b/9/p/elite-x-wired-evofox-original-imagtmx4hgeg55hc.jpeg?q=70",
  "https://c1.wallpaperflare.com/preview/791/870/339/joystick-ps4-game-dark-thumbnail.jpg",
  "https://c1.wallpaperflare.com/preview/196/896/911/control-videogame-game.jpg",
  "https://c4.wallpaperflare.com/wallpaper/252/360/871/ps4-controller-wallpaper-thumb.jpg",
  "https://c1.wallpaperflare.com/preview/144/1014/561/xbox-console-video-games-controller-button-joystick-thumbnail.jpg",
  "https://c4.wallpaperflare.com/wallpaper/760/230/357/game-playstation-ps4-sony-wallpaper-thumb.jpg",
  "https://c1.wallpaperflare.com/preview/431/418/383/blur-close-up-controller-dark-thumbnail.jpg",
  "https://c1.wallpaperflare.com/preview/714/505/300/x-box-console-joypad-activity-thumbnail.jpg",
  "https://c0.wallpaperflare.com/preview/178/40/17/game-console-nintendo-controller-thumbnail.jpg",
  "https://c1.wallpaperflare.com/preview/697/88/916/controller-games-video-buttons-gaming-playstation.jpg",
  "https://c4.wallpaperflare.com/wallpaper/465/296/1004/controller-gamepad-gaming-playstation-wallpaper-preview.jpg",
  "https://c1.wallpaperflare.com/preview/1/736/975/driver-playing-game-controller-gamepad.jpg",
  "https://c4.wallpaperflare.com/wallpaper/141/966/361/xbox-xbox-one-console-gamepad-joystick-black-xbox-one-controller-wallpaper-preview.jpg",
  "https://c1.wallpaperflare.com/preview/144/1014/561/xbox-console-video-games-controller-button-joystick.jpg",
  "https://c4.wallpaperflare.com/wallpaper/346/226/442/gamepad-joypad-nintendo-wii-playstation-wallpaper-preview.jpg",
  "https://c0.wallpaperflare.com/preview/336/540/28/connection-device-display-electronics.jpg",
  "https://c1.wallpaperflare.com/preview/390/190/355/analogue-buttons-close-up-control.jpg"
];

const gamingchairs = [
  "https://www.greensoul.online/cdn/shop/files/monster_t_red.png?v=1738087262&width=720",
  "https://www.greensoul.online/cdn/shop/files/vision_slate.png?v=1738087329&width=720",
  "https://www.greensoul.online/cdn/shop/files/raptor_red.png?v=1738086694&width=720",
  "https://www.greensoul.online/cdn/shop/files/beast_blue_dcf759ad-d8dd-4dc5-aca0-c7a1be7d13c5.png?v=1738087245&width=720",
  "https://www.greensoul.online/cdn/shop/files/Vison_3.png?v=1738086624&width=720",
  "https://www.greensoul.online/cdn/shop/products/37_8d2dd63d-cd5d-4a36-9007-a745287253f5.png?v=1738087268&width=720",
  "https://www.greensoul.online/cdn/shop/files/ghost_3.png?v=1738087032&width=720",
  "https://www.greensoul.online/cdn/shop/files/xtreme_orange.png?v=1738087053&width=720",
  "https://www.greensoul.online/cdn/shop/files/thunder.png?v=1738087373&width=720",
  "https://assets2.razerzone.com/images/pnx.assets/89aed41d5b981473c140317e67dbc617/500x500-enki.webp",
  "https://assets2.razerzone.com/images/pnx.assets/89aed41d5b981473c140317e67dbc617/500x500-enki-x.webp",
  "https://eurekaergonomic.com/cdn/shop/files/Eureka_Ergonomic_Typhon_Hybrid_Ergonomic_Gaming_Chair.jpg?v=1736246373&width=493"
];

const gamingMonitors = [
  "https://m.media-amazon.com/images/I/61daDvE61qL._AC_UF1000,1000_QL80_.jpg",
  "https://dlcdnwebimgs.asus.com/gain/4F96232E-0E12-4CA3-87ED-AA6F56224EFC/w185/fwebp",
  "https://dlcdnwebimgs.asus.com/gain/765073ef-1d43-4355-92b0-354802836b01/w185/fwebp",
  "https://rukminim2.flixcart.com/image/312/312/kybvo280/monitor/q/v/p/tuf-gaming-vg28uql1a-4k-ultra-hd-28-90lm0780-b01110-asus-original-imagahbtnupkgdfz.jpeg?q=70",
  "https://rukminim2.flixcart.com/image/312/312/jzhb24w0/monitor/h/k/a/g-sync-compatible-vg278qr-90lm03p3-b01320-asus-original-imafj5gghzxcnh5z.jpeg?q=70",
  "https://rukminim2.flixcart.com/image/312/312/l4vnbm80/monitor/t/d/y/rog-strix-xg16ahp-w-full-hd-15-6-90lm06id-b02110-asus-original-imagfzk3t8xhs4zf.jpeg?q=70",
  "https://rukminim2.flixcart.com/image/312/312/kx7vc7k0/monitor/c/9/2/pg259qnr-full-hd-24-5-90lm05q3-b01310-asus-original-imag9q5g8n4zdf6h.jpeg?q=70"
];

const imageGame = [
   { img: '/src/assets/psp-game1.webp', name: 'ASTRO BOT', category: 'upcoming' },
   { img: '/src/assets/psp-game2.webp', name: 'Call of Duty®: Black Ops 6', category: 'upcoming' },
   { img: '/src/assets/psp-game3.webp', name: 'Black Myth: Wukong', category: 'upcoming' },
   { img: '/src/assets/psp-game4.webp', name: 'Sonic X Shadow Generations', category: 'upcoming' },
   { img: '/src/assets/psp-game5.webp', name: 'Silent Hill 2', category: 'upcoming' },
   { img: '/src/assets/psp-game6.webp', name: 'Dragon Age: The Veilguard', category: 'upcoming' },
   { img: '/src/assets/psp-game7.webp', name: 'Metaphor: ReFantazio', category: 'new-release' },
   { img: '/src/assets/psp-game8.webp', name: 'Dragon Ball: Sparking Zero', category: 'new-release' },
   { img: '/src/assets/psp-game8.webp', name: 'Dragon Ball: Sparking Zero', category: 'new-release' },
   { img: '/src/assets/psp-game9.webp', name: 'Warhammer 40,000: Space Marine 2', category: 'new-release' },
   { img: '/src/assets/psp-game10.webp', name: 'Star Wars™ Outlaws', category: 'new-release' },
   { img: '/src/assets/psp-game11.webp', name: 'Helldivers™ 2', category: 'new-release' },
   { img: '/src/assets/psp-game12.webp', name: 'LEGO® Horizon Adventures™', category: 'new-release' },
   { img: '/src/assets/upcoming-game.webp', name: 'MAFIA', category: 'upcoming' },
];

const gallerySlider = [
  {
      bannerImage: '/src/assets/Gallery-section images/slider1.webp',
      headingImage: '/src/assets/Gallery-section images/banner-logo-1.webp',
      subImage: '/src/assets/Gallery-section images/semi-slider-image.webp',
      heading: 'The award-winning strategy game returns',
      description: "Build the greatest empire the world has even known with Sid Meier's Civilisation VII, available now on PS5 & PS4.",
      button: 'uy now'
  },
  {
    bannerImage: '/src/assets/Gallery-section images/slider2.webp',
    headingImage: '/src/assets/Gallery-section images/banner-logo-2.webp',
    subImage: '/src/assets/Gallery-section images/semi-slider-image-2.webp',
    heading: 'The award-winning strategy game returns',
    description: "Build the greatest empire the world has even known with Sid Meier's Civilisation VII, available now on PS5 & PS4.",
    button: 'Buy now'
  },
  {
    bannerImage: '/src/assets/Gallery-section images/slider3.webp',
    headingImage: '/src/assets/Gallery-section images/banner-logo-3.webp',
    subImage: '/src/assets/Gallery-section images/semi-slider-image-3.webp',
    heading: 'The award-winning strategy game returns',
    description: "Build the greatest empire the world has even known with Sid Meier's Civilisation VII, available now on PS5 & PS4.",
    button: 'Buy now'
  },
  {
    bannerImage: '/src/assets/Gallery-section images/slider4.webp',
    headingImage: '/src/assets/Gallery-section images/banner-logo-4.webp',
    subImage: '/src/assets/Gallery-section images/semi-slider-image-4.webp',
    heading: 'The award-winning strategy game returns',
    description: "Build the greatest empire the world has even known with Sid Meier's Civilisation VII, available now on PS5 & PS4.",
    button: 'Buy now'
  }
];

export  { items, gamePads, imageGame, gallerySlider }