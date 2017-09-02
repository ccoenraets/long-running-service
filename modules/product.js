let products = [
    {
        id: 0,
        name: "BOREALIS BACKPACK",
        description: "Free of embellishment, this sleek, 29-liter daypack boasts two large zip pockets so you can stash gear quickly and hit the road. The main compartment features a padded laptop sleeve (fits most 15\" laptops), and an almost equally large secondary zip pocket with built-in organizational sleeves. Bungee cord on face of pack lets you store additional gear, or cinch down contents inside. Updated shoulder straps and back panel.",
        msrp: 89,
        category: "Gear",
        picture: "https://s3-us-west-2.amazonaws.com/nto-products/products1110/4004100.jpg"
    },
    {
        id: 1,
        name: "WOMEN'S LEONIDAS JACKET",
        description: "Persevere through wet conditions in remote locations with the help of our alpine workhorse, a waterproof soft shell with leakproof fully-taped seams. Four-way stretch HyVent 2L technology provides durable, multi-layer waterproofing that remains breathable during stages of intense climbing. Fully adjustable hood with laminated brim is helmet compatible for extra coverage. Cuffs adjust with non-abrasive molded tabs.",
        msrp: 230,
        category: "Womens",
        picture: "https://s3-us-west-2.amazonaws.com/nto-products/products370/2011100.jpg"
    },
    {
        id: 2,
        name: "MEN'S QUANTUM JACKET",
        description: "Reach new heights during aerobic assaults on the summit wearing this lightweight Polartec Thermal Pro gridded fleece mid-layer with an exceptional warmth-to-weight ratio. Hybrid construction strategically places Polartec Power Dry under the arms, on the upper back, and down the forearms for improved moisture management. Zippered handwarmer pockets are designed to remain accessible while you're wearing a climbing harness or a pack.",
        msrp: 160,
        category: "Mens",
        picture: "https://s3-us-west-2.amazonaws.com/nto-products/products1110/1002100.jpg"
    },
    {
        id: 3,
        name: "WOMEN'S ARCTIC PARKA",
        description: "Even if you don't live in the Arctic, it probably feels like you do on some winter days. This trench coat combines waterproof, breathable, seam sealed protection via HyVent nylon fabric at exterior with thermal 550 fill down insulation to create a resilient barrier during winter weather. Attached, adjustable hood features two cinch-cords to secure a close fit (removable faux fur trim), and five pockets throughout creates plenty of space to stash essentials.",
        msrp: 330,
        category: "Womens",
        picture: "https://s3-us-west-2.amazonaws.com/nto-products/products1110/2007100.jpg"
    },
    {
        id: 4,
        name: "BOYS' PRINTED RESOLVE JACKET",
        description: "He'll splish-splash his way through the worst weather, yet remain bone dry, while wearing this waterproof boys' hooded jacket. Durable HyVent 2L technology features multi-layer waterproofing that's also highly breathable for improved temperature regulation. A mesh lining improves the overall breathability of this seam-sealed rain jacket. The full-length front zipper is protected by a Velcro stormflap to shut out wind and rain. Finished with a brushed collar lining that's soft against the skin when the jacket is fully zipped. Hood stows away in the collar when not in use.",
        msrp: 75,
        category: "Kids",
        picture: "https://s3-us-west-2.amazonaws.com/nto-products/products1110/3006100.jpg"
    },
    {
        id: 5,
        name: "2-METER DOME",
        description: "If you are planning on spending long periods of time in the mountains, this is the dream base camp tent. This 2-Meter Dome was my living room, bed room, kitchen, and art studio for two months in the Himalayas. It was so cozy I almost didn't want to leave.\" - Cedar Wright, The North Face Athlete, Rock ClimberThe ultimate eight-person expedition base camp tent, the 2-Meter Dome is extremely durable and efficient in merciless environs such as the Himalayas and Antarctica. Setting the standard for unrivaled performance in major expeditions, this is the tent top mountaineers trust in critical conditions.",
        msrp: 5000,
        category: "Gear",
        picture: "https://s3-us-west-2.amazonaws.com/nto-products/products1110/4437100.jpg"
    },
    {
        id: 6,
        name: "JESTER BACKPACK",
        description: "No one will call you a fool with the Jester on your back. Designed with two large zip compartments, this versatile 27-liter pack features a front accessory zip pocket with an internal organization sleeve to stash smaller items. Bungee cords crisscross across this pack's face to provide a stellar spot to loop in a rain jacket, or wiffle ball bat.",
        msrp: 65,
        category: "Gear",
        picture: "https://s3-us-west-2.amazonaws.com/nto-products/products1110/4003100.jpg"
    },
    {
        id: 7,
        name: "MINIBUS 3",
        description: "Cutting-edge tent design for backpackers features spacious internal volume through tall vertical side walls on the interior and tons of usable vestibule space. Leading the industry in terms of interior volume, this three-person tent also features comprehensive color coded poles for easy setup, refined venting options, and a large front window to watch passing raccoons.",
        msrp: 399,
        category: "Gear",
        picture: "https://s3-us-west-2.amazonaws.com/nto-products/products1110/4412100.jpg"
    },
    {
        id: 8,
        name: "MEN'S LEONIDAS JACKET",
        description: "Persevere through wet conditions in remote locations with the help of our alpine workhorse, a waterproof soft shell with leak-proof fully taped seams. Four-way stretch HyVent 2L technology provides durable, multi-layer waterproofing that remains breathable during stages of intense climbing. Fully adjustable hood with laminated brim is helmet compatible for extra coverage. Cuffs adjust with non-abrasive molded tabs.",
        msrp: 230,
        category: "Mens",
        picture: "https://s3-us-west-2.amazonaws.com/nto-products/products1110/4412100.jpg"
    },
    {
        id: 9,
        name: "GIRLS' MOUNTAIN VIEW TRICLIMATE JACKET",
        description: "It's all about the power of three: this versatile jacket combines a waterproof, breathable, fully seam sealed HyVent shell with a removable, insulated interior jacket for adaptable protection in any condition. Adjustable drawcord lock system accessible through interior pockets. Traditional color blocking underneath arms creates classic alpine style.",
        msrp: 140,
        category: "Kids",
        picture: "https://s3-us-west-2.amazonaws.com/nto-products/products1110/4412100.jpg"
    },
];

exports.getProducts = (req, res, next) => {

    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 8,
        page = req.query.page ? parseInt(req.query.page) : 1,
        search = req.query.search,
        min = req.query.min,
        max = req.query.max,
        duration = req.query.duration;

    let matchingProducts = products.filter((product) => {
        if (search && !product.name.match(new RegExp(search, 'i'))) {
            return false;
        }
        if (min && product.price < min) {
            return false;
        }
        if (max && product.price > max) {
            return false;
        }
        return true;
    });

    const beginIndex = (page - 1) * pageSize;

    setTimeout(() => {
        res.send({
            page: page,
            pageSize: pageSize,
            total: matchingProducts.length,
            products: matchingProducts.slice(beginIndex, beginIndex + pageSize)
        });
    }, duration);

};

exports.getProductById = (req, res, next) => {
    const duration = req.query.duration;
    const id = req.params.productId;
    setTimeout(() => {
        res.json(products[id]);
    }, duration);
}