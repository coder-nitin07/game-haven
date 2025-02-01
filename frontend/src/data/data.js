const productsData = [
    {
        "id": 1,
        "name": "Stealth-X Gamepad",
        "category": "GamePads",
        "price": 5499,
        "image": "https://cdn.pixabay.com/photo/2023/08/30/14/51/xbox-8223478_1280.jpg"
    },
    {
        "id": 2,
        "name": "ViperFlex Gamepad",
        "category": "GamePads",
        "price": 6499,
        "image": "https://c4.wallpaperflare.com/wallpaper/627/395/613/blue-controller-dualshock-entertainment-wallpaper-preview.jpg"
    },
    {
        "id": 3,
        "name": "BlazeMaster Gamepad",
        "category": "GamePads",
        "price": 7999,
        "image": "https://c0.wallpaperflare.com/preview/32/491/818/4k-wallpaper-buttons-controller-design.jpg"
    },
    {
        "id": 4,
        "name": "Elite Evo Gamepad",
        "category": "GamePads",
        "price": 8999,
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/gamepad/b/9/p/elite-x-wired-evofox-original-imagtmx4hgeg55hc.jpeg?q=70"
    },
    {
        "id": 5,
        "name": "PixelMaster PS4 Gamepad",
        "category": "GamePads",
        "price": 4999,
        "image": "https://c1.wallpaperflare.com/preview/791/870/339/joystick-ps4-game-dark-thumbnail.jpg"
    },
    {
        "id": 6,
        "name": "Vortex-X Gamepad",
        "category": "GamePads",
        "price": 6299,
        "image": "https://c1.wallpaperflare.com/preview/196/896/911/control-videogame-game.jpg"
    },
    {
        "id": 7,
        "name": "Fusion-360 Gamepad",
        "category": "GamePads",
        "price": 7499,
        "image": "https://c4.wallpaperflare.com/wallpaper/252/360/871/ps4-controller-wallpaper-thumb.jpg"
    },
    {
        "id": 8,
        "name": "Titan Flex Gamepad",
        "category": "GamePads",
        "price": 5599,
        "image": "https://c1.wallpaperflare.com/preview/144/1014/561/xbox-console-video-games-controller-button-joystick-thumbnail.jpg"
    },
    {
        "id": 9,
        "name": "HyperDrive Gamepad",
        "category": "GamePads",
        "price": 6999,
        "image": "https://c4.wallpaperflare.com/wallpaper/760/230/357/game-playstation-ps4-sony-wallpaper-thumb.jpg"
    },
    {
        "id": 10,
        "name": "Xtreme Pro Gamepad",
        "category": "GamePads",
        "price": 6599,
        "image": "https://c1.wallpaperflare.com/preview/431/418/383/blur-close-up-controller-dark-thumbnail.jpg"
    },
    {
        "id": 11,
        "name": "ShadowTech Gamepad",
        "category": "GamePads",
        "price": 4999,
        "image": "https://c1.wallpaperflare.com/preview/714/505/300/x-box-console-joypad-activity-thumbnail.jpg"
    },
    {
        "id": 12,
        "name": "Neon Pulse Gamepad",
        "category": "GamePads",
        "price": 5999,
        "image": "https://c0.wallpaperflare.com/preview/178/40/17/game-console-nintendo-controller-thumbnail.jpg"
    },
    {
        "id": 13,
        "name": "RedRush Gamepad",
        "category": "GamePads",
        "price": 5500,
        "image": "https://c1.wallpaperflare.com/preview/697/88/916/controller-games-video-buttons-gaming-playstation.jpg"
    },
    {
        "id": 14,
        "name": "BlazeFusion Gamepad",
        "category": "GamePads",
        "price": 6999,
        "image": "https://c4.wallpaperflare.com/wallpaper/465/296/1004/controller-gamepad-gaming-playstation-wallpaper-preview.jpg"
    },
    {
        "id": 15,
        "name": "PulseTech Gamepad",
        "category": "GamePads",
        "price": 3999,
        "image": "https://c1.wallpaperflare.com/preview/1/736/975/driver-playing-game-controller-gamepad.jpg"
    },
    {
        "id": 16,
        "name": "Echo Pro Gamepad",
        "category": "GamePads",
        "price": 7499,
        "image": "https://c4.wallpaperflare.com/wallpaper/141/966/361/xbox-xbox-one-console-gamepad-joystick-black-xbox-one-controller-wallpaper-preview.jpg"
    },
    {
        "id": 17,
        "name": "Maverick Gamepad",
        "category": "GamePads",
        "price": 6999,
        "image": "https://c1.wallpaperflare.com/preview/144/1014/561/xbox-console-video-games-controller-button-joystick.jpg"
    },
    {
        "id": 18,
        "name": "QuickFire Gamepad",
        "category": "GamePads",
        "price": 5999,
        "image": "https://c4.wallpaperflare.com/wallpaper/346/226/442/gamepad-joypad-nintendo-wii-playstation-wallpaper-preview.jpg"
    },
    {
        "id": 19,
        "name": "RacerX Gamepad",
        "category": "GamePads",
        "price": 7499,
        "image": "https://c0.wallpaperflare.com/preview/336/540/28/connection-device-display-electronics.jpg"
    },
    {
        "id": 20,
        "name": "NeoX Gamepad",
        "category": "GamePads",
        "price": 4999,
        "image": "https://c1.wallpaperflare.com/preview/390/190/355/analogue-buttons-close-up-control.jpg"
    },
    {
        "id": 21,
        "name": "Monster T Red Gaming Chair",
        "category": "Gaming Chairs",
        "price": 19999,
        "image": "https://www.greensoul.online/cdn/shop/files/monster_t_red.png?v=1738087262&width=720"
    },
    {
        "id": 22,
        "name": "Vision Slate Gaming Chair",
        "category": "Gaming Chairs",
        "price": 21999,
        "image": "https://www.greensoul.online/cdn/shop/files/vision_slate.png?v=1738087329&width=720"
    },
    {
        "id": 23,
        "name": "Raptor Red Gaming Chair",
        "category": "Gaming Chairs",
        "price": 24999,
        "image": "https://www.greensoul.online/cdn/shop/files/raptor_red.png?v=1738086694&width=720"
    },
    {
        "id": 24,
        "name": "Beast Blue Gaming Chair",
        "category": "Gaming Chairs",
        "price": 28999,
        "image": "https://www.greensoul.online/cdn/shop/files/beast_blue_dcf759ad-d8dd-4dc5-aca0-c7a1be7d13c5.png?v=1738087245&width=720"
    },
    {
        "id": 25,
        "name": "Vision 3 Gaming Chair",
        "category": "Gaming Chairs",
        "price": 25999,
        "image": "https://www.greensoul.online/cdn/shop/files/Vison_3.png?v=1738086624&width=720"
    },
    {
        "id": 26,
        "name": "Raptor X Gaming Chair",
        "category": "Gaming Chairs",
        "price": 31999,
        "image": "https://www.greensoul.online/cdn/shop/products/37_8d2dd63d-cd5d-4a36-9007-a745287253f5.png?v=1738087268&width=720"
    },
    {
        "id": 27,
        "name": "Ghost 3 Gaming Chair",
        "category": "Gaming Chairs",
        "price": 25999,
        "image": "https://www.greensoul.online/cdn/shop/files/ghost_3.png?v=1738087032&width=720"
    },
    {
        "id": 28,
        "name": "Xtreme Orange Gaming Chair",
        "category": "Gaming Chairs",
        "price": 28999,
        "image": "https://www.greensoul.online/cdn/shop/files/xtreme_orange.png?v=1738087053&width=720"
    },
    {
        "id": 29,
        "name": "Thunder Gaming Chair",
        "category": "Gaming Chairs",
        "price": 21999,
        "image": "https://www.greensoul.online/cdn/shop/files/thunder.png?v=1738087373&width=720"
    },
    {
        "id": 30,
        "name": "Enki Gaming Chair",
        "category": "Gaming Chairs",
        "price": 67999,
        "image": "https://assets2.razerzone.com/images/pnx.assets/89aed41d5b981473c140317e67dbc617/500x500-enki.webp"
    },
    {
        "id": 31,
        "name": "Enki-X Gaming Chair",
        "category": "Gaming Chairs",
        "price": 73999,
        "image": "https://assets2.razerzone.com/images/pnx.assets/89aed41d5b981473c140317e67dbc617/500x500-enki-x.webp"
    },
    {
        "id": 32,
        "name": "Typhon Hybrid Gaming Chair",
        "category": "Gaming Chairs",
        "price": 41999,
        "image": "https://eurekaergonomic.com/cdn/shop/files/Eureka_Ergonomic_Typhon_Hybrid_Ergonomic_Gaming_Chair.jpg?v=1736246373&width=493"
    },
    {
        "id": 33,
        "name": "UltraSharp 4K Monitor",
        "category": "Gaming Monitors",
        "price": 65999,
        "image": "https://m.media-amazon.com/images/I/61daDvE61qL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 34,
        "name": "ASUS ROG Swift Monitor",
        "category": "Gaming Monitors",
        "price": 72999,
        "image": "https://dlcdnwebimgs.asus.com/gain/4F96232E-0E12-4CA3-87ED-AA6F56224EFC/w185/fwebp"
    },
    {
        "id": 35,
        "name": "ASUS TUF Gaming Monitor",
        "category": "Gaming Monitors",
        "price": 58999,
        "image": "https://dlcdnwebimgs.asus.com/gain/765073ef-1d43-4355-92b0-354802836b01/w185/fwebp"
    },
    {
        "id": 36,
        "name": "TUF Gaming VG28 4K Monitor",
        "category": "Gaming Monitors",
        "price": 79999,
        "image": "https://rukminim2.flixcart.com/image/312/312/kybvo280/monitor/q/v/p/tuf-gaming-vg28uql1a-4k-ultra-hd-28-90lm0780-b01110-asus-original-imagahbtnupkgdfz.jpeg?q=70"
    },
    {
        "id": 37,
        "name": "VG278QR G-Sync Monitor",
        "category": "Gaming Monitors",
        "price": 39999,
        "image": "https://rukminim2.flixcart.com/image/312/312/jzhb24w0/monitor/h/k/a/g-sync-compatible-vg278qr-90lm03p3-b01320-asus-original-imafj5gghzxcnh5z.jpeg?q=70"
    },
    {
        "id": 38,
        "name": "ROG Strix XG16 Full HD Monitor",
        "category": "Gaming Monitors",
        "price": 64999,
        "image": "https://rukminim2.flixcart.com/image/312/312/l4vnbm80/monitor/t/d/y/rog-strix-xg16ahp-w-full-hd-15-6-90lm06id-b02110-asus-original-imagfzk3t8xhs4zf.jpeg?q=70"
    },
    {
        "id": 39,
        "name": "PG259QNR Full HD Gaming Monitor",
        "category": "Gaming Monitors",
        "price": 49999,
        "image": "https://rukminim2.flixcart.com/image/312/312/kx7vc7k0/monitor/c/9/2/pg259qnr-full-hd-24-5-90lm05q3-b01310-asus-original-imag9q5g8n4zdf6h.jpeg?q=70"
    }
];

export default productsData