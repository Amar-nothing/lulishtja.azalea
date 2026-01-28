// script.js - Azalea Flowershop

// Translation object with all text content
const translations = {
    sq: {
        // Header & Navigation
        nav_home: "Kryefaqja",
        nav_about: "Rreth nesh",
        nav_care: "Kujdesi i luleve",
        nav_blog: "Blogu",
        nav_gallery: "Galeria",
        nav_community: "Komuniteti",
        nav_contact: "Kontakti",
        
        // Hero Section
        hero_title: "Lule të bukura për çdo moment të veçantë",
        hero_subtitle: "Për 10 vjet kemi sjellë ngjyra dhe lumturi në shtëpitë e Pejës. Çdo buqetë është krijuar me dashuri dhe kujdes të veçantë.",
        hero_btn_instagram: "Na ndiqni në Instagram",
        hero_btn_contact: "Na kontaktoni",
        hero_scroll: "Rrëshqit poshtë për të mësuar më shumë",
        
        // About Section
        about_title: "Historia jonë",
        about_subtitle: "Një dashuri për lule që filloi në Pejë",
        about_image: "Imazhi i dyqanit tonë",
        about_story_title: "Filimi i ëndrrave tona",
        about_story_p1: "Azalea Flowershop u hap në vitin 2019 me një vizion të thjeshtë: të sjellim bukurinë e luleve të gjalla në çdo shtëpi dhe zyrë në Pejë. Filluam si një dyqan i vogël me vetëm dy punonjës, por me kalimin e kohës, dashuria jonë për lule na ka udhëhequr në rritje dhe zhvillim.",
        about_story_p2: "Sot jemi një ekip prej 8 personash të pasionuar, të cilët çdo ditë krijojnë buqeta unike për klientët tanë. Ne besojmë se lulja e duhur mund të transformojë çdo moment të zakonshëm në një të veçantë.",
        value1_title: "Pasion i vërtetë",
        value1_desc: "Çdo lule është përzgjedhur me kujdes dhe rregulluar me dashuri.",
        value2_title: "Kujdes për klientin",
        value2_desc: "Ne dëgjojmë nevojat tuaja dhe krijojmë buqeta të personalizuara.",
        value3_title: "Freskia e garantuar",
        value3_desc: "Lule tona vijnë nga furnitorët më të mirë dhe ruhen në kushte optimale.",
        value4_title: "Rrënjë lokale",
        value4_desc: "Jemi krenar që jemi pjesë e komunitetit të Pejës për një dekadë.",
        
        // Flower Care Section
        care_title: "Kujdesi i Luleve të Brendshme",
        care_subtitle: "Udhëzues i plotë për të mbajtur lule të shëndetshme në shtëpi",
        care_category1: "Lule me gjethe dekorative",
        care_category2: "Orkide dhe lule të bllokuara",
        care_category3: "Bima me erë dhe aromatike",
        care_category4: "Sukulente dhe kaktus",
        care_category5: "Bima me gjethe të medha",
        care_tips_title: "Këshilla të përgjithshme për kujdesin e bimëve",
        tip1_title: "Ujëtimi i duhur",
        tip1_desc: "Testoni lagështinë e tokës me gishtin para ujëtimit. Shumica e bimëve preferojnë që toka të thahet pjesërisht midis ujëtimeve.",
        tip2_title: "Kërkesat për dritë",
        tip2_desc: "Kuptoni nevojat e dritës së bimës suaj. Bimët me gjethe të ngjyra preferojnë më shumë dritë se ato me gjethe të gjelbër.",
        tip3_title: "Ajrimi",
        tip3_desc: "Sigurohuni që bimët tuaja të kenë ajrim të mjaftueshëm. Shmangni vendosjen e tyre afër burimeve të nxehtësisë ose të ftohjes.",
        tip4_title: "Lagështia",
        tip4_desc: "Shumë bimë shtëpiake, veçanërisht ato tropikale, kanë nevojë për lagështi të lartë. Përdorni humidifikator ose vllonë me ujë.",
        
        // Blog Section
        blog_title: "Blogu ynë i Luleve",
        blog_subtitle: "Këshilla, ide dhe frymëzim për dashamirët e luleve",
        blog_category_all: "Të gjitha",
        blog_category_care: "Kujdesi i Luleve",
        blog_category_decoration: "Dekorim Shtëpie",
        blog_category_meaning: "Kuptimi i Luleve",
        blog_category_gifting: "Dhuratat & Rastet",
        blog_image1: "Kujdesi i luleve të brendshme",
        blog_title1: "10 Gabimet më të zakonshme në kujdesin e luleve të brendshme",
        blog_excerpt1: "Shmangni këto gabime të zakonshme për të mbajtur lule tuaja të shëndetshme dhe të lumtura...",
        blog_image2: "Dekorim shtëpie me lule",
        blog_title2: "Si të përdorni lule për të transformuar hapësirat tuaja të brendshme",
        blog_excerpt2: "Zbuloni se si lule të thjeshta mund të ndryshojnë plotësisht atmosferën e shtëpisë tuaj...",
        blog_image3: "Kuptimi i luleve",
        blog_title3: "Gjuha e luleve: Çfarë nënkuptojnë vërtet lule të ndryshme?",
        blog_excerpt3: "Nga trëndafilat deri te lulëkuqet, zbuloni kuptimin e vërtetë pas luleve të preferuara...",
        blog_image4: "Dhuratat me lule",
        blog_title4: "Udhëzuesi përfundimtar për zgjedhjen e luleve të duhura për çdo rast",
        blog_excerpt4: "Nuk jeni të sigurt se cilat lule të zgjidhni për një rast specifik? Ky udhëzues do t'ju ndihmojë...",
        blog_image5: "Riprodhimi i bimëve",
        blog_title5: "Si të riprodhoni bimët e brendshme: Një udhëzues hap pas hapi",
        blog_excerpt5: "Mësoni teknikat më të thjeshta për të riprodhuar bimët tuaja të preferuara dhe për të rritur koleksionin tuaj...",
        blog_image6: "Ngjyrat në dekorim",
        blog_title6: "Përzierja e ngjyrave: Si të krijoni buqeta të harmonishme për shtëpinë tuaj",
        blog_excerpt6: "Zbuloni se si të kombinoni ngjyrat e luleve për të krijuar buqeta që plotësojnë dekorin tuaj të brendshëm...",
        blog_read: "Lexo më shumë",
        blog_load_more: "Shfaq më shumë artikuj",
        
        // Gallery Section
        gallery_title: "Galeria jonë",
        gallery_subtitle: "40+ krijime unike me lule nga dyqani ynë në Pejë",
        gallery_filter_all: "Të gjitha",
        gallery_filter_bouquets: "Buqeta",
        gallery_filter_arrangements: "Aranzhime",
        gallery_filter_indoor: "Bimë të brendshme",
        gallery_filter_special: "Raste të veçanta",
        gallery_image1: "Buqetë me trëndafila të kuq",
        gallery_title1: "Bukuria klasike",
        gallery_desc1: "Një buqetë elegante me trëndafila të kuq të kombinuar me barishte të bardhë dhe gjethe të gjelbër.",
        gallery_image2: "Aranzhim për shtëpi",
        gallery_title2: "Oaza e brendshme",
        gallery_desc2: "Një aranzhim i bukur me bimë të brendshme të përzgjedhura për të sjellë natyrën në shtëpinë tuaj.",
        gallery_image3: "Aranzhim për ditëlindje",
        gallery_title3: "Festë me lule",
        gallery_desc3: "Një buqetë e gëzuar dhe e ndritshme për të festuar ditëlindjen e dikujt të veçantë.",
        gallery_image4: "Buqetë për nënë",
        gallery_title4: "Dashuria për nënën",
        gallery_desc4: "Një buqetë e butë dhe elegante me lule rozë dhe të bardha, krijuar posaçërisht për nënën tuaj.",
        gallery_image5: "Monstera Deliciosa",
        gallery_title5: "Monstera e shëndetshme",
        gallery_desc5: "Një Monstera Deliciosa e bukur dhe e shëndetshme, e përshtatshme për çdo shtëpi moderne.",
        gallery_image6: "Aranzhim për dasmë",
        gallery_title6: "Romanca e bardhë",
        gallery_desc6: "Një aranzhim dasme elegant me trëndafila të bardhë, orkide dhe lule të tjera të bardha.",
        gallery_image7: "Buqetë për diplomim",
        gallery_title7: "Suksesi i lulëzuar",
        gallery_desc7: "Një buqetë e ndritshme dhe e gëzuar për të festuar arritjet akademike.",
        gallery_image8: "Fiddle Leaf Fig",
        gallery_title8: "Fiddle Leaf Fig e madhërishme",
        gallery_desc8: "Një Fiddle Leaf Fig e shëndetshme me gjethe të mëdha, të bukura në formë violine.",
        gallery_image9: "Buqetë verore",
        gallery_title9: "Drita e verës",
        gallery_desc9: "Një buqetë e ndritshme verore me lule të verdha, portokalli dhe të kuqe që sjellin diell në çdo dhomë.",
        gallery_image10: "Aranzhim për zyrë",
        gallery_title10: "Frymëzimi në punë",
        gallery_desc10: "Një aranzhim modern dhe profesional për të sjellë një prekje natyrore në hapësirat tuaja të punës.",
        gallery_image11: "Koleksion sukulentesh",
        gallery_title11: "Oaza e sukulentëve",
        gallery_desc11: "Një koleksion i bukur sukulentesh në një enë moderne, të përshtatshme për fillestarët.",
        gallery_image12: "Buqetë për shëndetësim",
        gallery_title12: "Dëshira për shëndet",
        gallery_desc12: "Një buqetë e butë dhe ngushëlluese për të dërguar dëshira shëndeti dhe shpejtë shërimi.",
        gallery_order: "Porosisni nëpërmjet Instagram",
        gallery_load_more: "Shfaq më shumë produkte",
        
        // Community Section
        community_title: "Komuniteti ynë i Luleve",
        community_subtitle: "Bashkohuni me dashamirët e tjerë të luleve në Pejë",
        community_heading: "Pse të bashkohemi me komunitetin tonë?",
        community_p1: "Në Azalea Flowershop, ne besojmë se dashuria për lule është më e bukur kur ndahet me të tjerët. Komuniteti ynë i luleve është një hapësirë ku dashamirët e luleve në Pejë mund të ndajnë eksperiencat, të mësojnë nga njëri-tjetri dhe të gëzohen së bashku bukurinë e natyrës.",
        community_p2: "Çdo muaj organizojmë takime virtuale dhe ndonjëherë edhe takime personale (kur lejojnë kushtet) ku diskutojmë tema të ndryshme rreth kujdesit të luleve, riprodhimit të bimëve dhe dekorimit të shtëpisë me lule.",
        feature1_title: "Ndarja e njohurive",
        feature1_desc: "Mësoni këshilla dhe truke nga ekspertët tanë dhe nga anëtarët e tjerë të komunitetit.",
        feature2_title: "Shkëmbim bimësh",
        feature2_desc: "Merrni pjesë në aktivitetet tona të shkëmbimit të bimëve dhe zgjerojeni koleksionin tuaj.",
        feature3_title: "Konkurset e fotove",
        feature3_desc: "Pjesëmarrni në konkurset tona mujore të fotove të luleve dhe fitoni çmime të bukura.",
        action_instagram_title: "Na ndiqni në Instagram",
        action_instagram_desc: "Bëhuni pjesë e komunitetit tonë virtual në Instagram ku postojmë përditësisht këshilla, fotot e produkteve tona të reja dhe organizojmë aktivitete të ndryshme.",
        action_follow: "Ndiqni @lulishtja.azalea",
        action_facebook_title: "Grupi ynë në Facebook",
        action_facebook_desc: "Së shpejti do të hapim një grup privat në Facebook ekskluzivisht për dashamirët e luleve në Pejë. Regjistrohuni në newsletter për të marrë njoftim kur të hapet.",
        action_join: "Regjistrohuni për njoftim",
        
        // Newsletter Section
        newsletter_title: "Bashkohuni në Newsletter-in tonë",
        newsletter_subtitle: "Merrni këshilla mujore për kujdesin e luleve, zbritje ekskluzive dhe njoftime për eventet tona në email.",
        newsletter_placeholder: "Email juaj",
        newsletter_subscribe: "Abonohu",
        newsletter_agree: "Pajtohem të marr email-e me këshilla për lule dhe njoftime për evente.",
        newsletter_success: "Faleminderit për abonimin! Së shpejti do të filloni të merrni këshillat tona për lule.",
        newsletter_error: "Ju lutem vendosni një adresë email të vlefshme.",
        newsletter_image: "Newsletter i luleve",
        
        // Contact Section
        contact_title: "Na kontaktoni",
        contact_subtitle: "Ne jemi këtu për t'ju ndihmuar me çdo pyetje që keni për lule",
        contact_info_title: "Informacioni i kontaktit",
        contact_location_title: "Lokacioni ynë",
        contact_delivery: "Dorëzimi lokal në dispozicion vetëm në Pejë",
        contact_phone_title: "Telefononi",
        contact_phone_note: "Na telefononi për porosi ose pyetje. Orari i punës: 9:00-19:00 çdo ditë.",
        contact_email_title: "Email",
        contact_email_note: "Ne përgjigjemi brenda 24 orëve të punës.",
        contact_hours_title: "Orari i punës",
        contact_hours_weekdays: "Hënë-Shtunë",
        contact_hours_saturday: "E Shtunë:",
        contact_hours_sunday: "E Dielë:",
        contact_social_title: "Na ndiqni në rrjetet sociale",
        contact_form_title: "Dërgoni një mesazh",
        contact_form_name: "Emri i plotë *",
        contact_form_email: "Email *",
        contact_form_message: "Mesazhi juaj *",
        contact_form_message_placeholder: "Shkruani mesazhin tuaj këtu...",
        contact_form_submit: "Dërgo mesazhin",
        contact_success: "Faleminderit për mesazhin! Do t'ju përgjigjemi brenda 24 orëve.",
        
        // Footer
        footer_tagline: "Sjellim bukurinë e natyrës në shtëpitë e Pejës që nga viti 2019.",
        footer_links_title: "Lidhje të shpejta",
        footer_contact_title: "Kontakti",
        footer_newsletter_title: "Newsletter",
        footer_newsletter_desc: "Abonohuni për të marrë këshilla mujore për kujdesin e luleve.",
        footer_rights: "Të gjitha të drejtat e rezervuara.",
        footer_created: "Krijuar nga ",
        
        // Modal
        modal_share: "Ndajeni këtë artikull:"
    },
    en: {
        // Header & Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_care: "Flower Care",
        nav_blog: "Blog",
        nav_gallery: "Gallery",
        nav_community: "Community",
        nav_contact: "Contact Us",
        
        // Hero Section
        hero_title: "Beautiful flowers for every special moment",
        hero_subtitle: "For 10 years we've brought colors and happiness to homes in Peja. Every bouquet is created with love and special care.",
        hero_btn_instagram: "Follow us on Instagram",
        hero_btn_contact: "Contact us",
        hero_scroll: "Scroll down to learn more",
        
        // About Section
        about_title: "Our Story",
        about_subtitle: "A love for flowers that started in Peja",
        about_image: "Image of our shop",
        about_story_title: "The beginning of our dreams",
        about_story_p1: "Azalea Flowershop opened in 2019 with a simple vision: to bring the beauty of fresh flowers to every home and office in Peja. We started as a small shop with only two employees, but over time, our love for flowers has guided our growth and development.",
        about_story_p2: "Today we are a team of 8 passionate people who create unique bouquets for our customers every day. We believe the right flower can transform any ordinary moment into a special one.",
        value1_title: "True Passion",
        value1_desc: "Every flower is carefully selected and arranged with love.",
        value2_title: "Customer Care",
        value2_desc: "We listen to your needs and create personalized bouquets.",
        value3_title: "Guaranteed Freshness",
        value3_desc: "Our flowers come from the best suppliers and are stored in optimal conditions.",
        value4_title: "Local Roots",
        value4_desc: "We are proud to be part of the Peja community for a decade.",
        
        // Flower Care Section
        care_title: "Indoor Flower Care",
        care_subtitle: "Complete guide to keeping healthy flowers at home",
        care_category1: "Decorative Leaf Plants",
        care_category2: "Orchids and Flowering Plants",
        care_category3: "Fragrant and Aromatic Plants",
        care_category4: "Succulents and Cactus",
        care_category5: "Large Leaf Plants",
        care_tips_title: "General plant care tips",
        tip1_title: "Proper Watering",
        tip1_desc: "Test soil moisture with your finger before watering. Most plants prefer the soil to partially dry between waterings.",
        tip2_title: "Light Requirements",
        tip2_desc: "Understand your plant's light needs. Plants with colorful leaves prefer more light than those with green leaves.",
        tip3_title: "Ventilation",
        tip3_desc: "Ensure your plants have adequate air circulation. Avoid placing them near heat or cooling sources.",
        tip4_title: "Humidity",
        tip4_desc: "Many houseplants, especially tropical ones, need high humidity. Use a humidifier or water tray.",
        
        // Blog Section
        blog_title: "Our Flower Blog",
        blog_subtitle: "Tips, ideas and inspiration for flower lovers",
        blog_category_all: "All",
        blog_category_care: "Flower Care",
        blog_category_decoration: "Home Decoration",
        blog_category_meaning: "Meaning of Flowers",
        blog_category_gifting: "Gifting & Occasions",
        blog_image1: "Indoor flower care",
        blog_title1: "10 Most Common Mistakes in Indoor Flower Care",
        blog_excerpt1: "Avoid these common mistakes to keep your flowers healthy and happy...",
        blog_image2: "Home decoration with flowers",
        blog_title2: "How to Use Flowers to Transform Your Interior Spaces",
        blog_excerpt2: "Discover how simple flowers can completely change the atmosphere of your home...",
        blog_image3: "Meaning of flowers",
        blog_title3: "Language of Flowers: What Do Different Flowers Really Mean?",
        blog_excerpt3: "From roses to tulips, discover the true meaning behind your favorite flowers...",
        blog_image4: "Flower gifts",
        blog_title4: "The Ultimate Guide to Choosing the Right Flowers for Every Occasion",
        blog_excerpt4: "Not sure which flowers to choose for a specific occasion? This guide will help you...",
        blog_image5: "Plant propagation",
        blog_title5: "How to Propagate Indoor Plants: A Step-by-Step Guide",
        blog_excerpt5: "Learn the simplest techniques to propagate your favorite plants and grow your collection...",
        blog_image6: "Colors in decoration",
        blog_title6: "Color Mixing: How to Create Harmonious Bouquets for Your Home",
        blog_excerpt6: "Discover how to combine flower colors to create bouquets that complement your interior decor...",
        blog_read: "Read more",
        blog_load_more: "Show more articles",
        
        // Gallery Section
        gallery_title: "Our Gallery",
        gallery_subtitle: "40+ unique flower creations from our shop in Peja",
        gallery_filter_all: "All",
        gallery_filter_bouquets: "Bouquets",
        gallery_filter_arrangements: "Arrangements",
        gallery_filter_indoor: "Indoor Plants",
        gallery_filter_special: "Special Occasions",
        gallery_image1: "Red rose bouquet",
        gallery_title1: "Classic Beauty",
        gallery_desc1: "An elegant bouquet with red roses combined with white baby's breath and green leaves.",
        gallery_image2: "Home arrangement",
        gallery_title2: "Indoor Oasis",
        gallery_desc2: "A beautiful arrangement with indoor plants selected to bring nature into your home.",
        gallery_image3: "Birthday arrangement",
        gallery_title3: "Floral Celebration",
        gallery_desc3: "A bright and cheerful bouquet to celebrate someone's special birthday.",
        gallery_image4: "Mother's bouquet",
        gallery_title4: "Love for Mother",
        gallery_desc4: "A soft and elegant bouquet with pink and white flowers, created especially for your mother.",
        gallery_image5: "Monstera Deliciosa",
        gallery_title5: "Healthy Monstera",
        gallery_desc5: "A beautiful and healthy Monstera Deliciosa, suitable for any modern home.",
        gallery_image6: "Wedding arrangement",
        gallery_title6: "White Romance",
        gallery_desc6: "An elegant wedding arrangement with white roses, orchids and other white flowers.",
        gallery_image7: "Graduation bouquet",
        gallery_title7: "Blooming Success",
        gallery_desc7: "A bright and cheerful bouquet to celebrate academic achievements.",
        gallery_image8: "Fiddle Leaf Fig",
        gallery_title8: "Magnificent Fiddle Leaf Fig",
        gallery_desc8: "A healthy Fiddle Leaf Fig with large, beautiful violin-shaped leaves.",
        gallery_image9: "Summer bouquet",
        gallery_title9: "Summer Light",
        gallery_desc9: "A bright summer bouquet with yellow, orange and red flowers that bring sunshine to any room.",
        gallery_image10: "Office arrangement",
        gallery_title10: "Work Inspiration",
        gallery_desc10: "A modern and professional arrangement to bring a natural touch to your workspaces.",
        gallery_image11: "Succulent collection",
        gallery_title11: "Succulent Oasis",
        gallery_desc11: "A beautiful collection of succulents in a modern container, suitable for beginners.",
        gallery_image12: "Get well bouquet",
        gallery_title12: "Wishes for Health",
        gallery_desc12: "A soft and comforting bouquet to send health wishes and speedy recovery.",
        gallery_order: "Order via Instagram",
        gallery_load_more: "Show more products",
        
        // Community Section
        community_title: "Our Flower Community",
        community_subtitle: "Join other flower lovers in Peja",
        community_heading: "Why join our community?",
        community_p1: "At Azalea Flowershop, we believe love for flowers is most beautiful when shared with others. Our flower community is a space where flower lovers in Peja can share experiences, learn from each other, and enjoy nature's beauty together.",
        community_p2: "Every month we organize virtual meetings and sometimes in-person meetings (when conditions allow) where we discuss various topics about flower care, plant propagation, and home decoration with flowers.",
        feature1_title: "Knowledge Sharing",
        feature1_desc: "Learn tips and tricks from our experts and other community members.",
        feature2_title: "Plant Exchange",
        feature2_desc: "Participate in our plant exchange activities and expand your collection.",
        feature3_title: "Photo Contests",
        feature3_desc: "Enter our monthly flower photo contests and win beautiful prizes.",
        action_instagram_title: "Follow us on Instagram",
        action_instagram_desc: "Become part of our virtual community on Instagram where we post daily tips, photos of our new products, and organize various activities.",
        action_follow: "Follow @lulishtja.azalea",
        action_facebook_title: "Our Facebook Group",
        action_facebook_desc: "We will soon open a private Facebook group exclusively for flower lovers in Peja. Subscribe to our newsletter to be notified when it opens.",
        action_join: "Register for notification",
        
        // Newsletter Section
        newsletter_title: "Join Our Newsletter",
        newsletter_subtitle: "Receive monthly flower care tips, exclusive discounts, and event notifications in your email.",
        newsletter_placeholder: "Your email",
        newsletter_subscribe: "Subscribe",
        newsletter_agree: "I agree to receive emails with flower tips and event notifications.",
        newsletter_success: "Thank you for subscribing! You'll soon start receiving our flower tips.",
        newsletter_error: "Please enter a valid email address.",
        newsletter_image: "Flower newsletter",
        
        // Contact Section
        contact_title: "Contact Us",
        contact_subtitle: "We're here to help you with any questions you have about flowers",
        contact_info_title: "Contact Information",
        contact_location_title: "Our Location",
        contact_delivery: "Local delivery available in Peja only",
        contact_phone_title: "Call us",
        contact_phone_note: "Call us for orders or questions. Working hours: 8:00-20:00 every day.",
        contact_email_title: "Email",
        contact_email_note: "We respond within 24 business hours.",
        contact_hours_title: "Working Hours",
        contact_hours_weekdays: "Monday-Saturday:",
        contact_hours_saturday: "Saturday:",
        contact_hours_sunday: "Sunday:",
        contact_social_title: "Follow us on social media",
        contact_form_title: "Send a message",
        contact_form_name: "Full Name *",
        contact_form_email: "Email *",
        contact_form_message: "Your Message *",
        contact_form_message_placeholder: "Write your message here...",
        contact_form_submit: "Send message",
        contact_success: "Thank you for your message! We will respond within 24 hours.",
        
        // Footer
        footer_tagline: "Bringing nature's beauty to homes in Peja since 2019.",
        footer_links_title: "Quick Links",
        footer_contact_title: "Contact",
        footer_newsletter_title: "Newsletter",
        footer_newsletter_desc: "Subscribe to receive monthly flower care tips.",
        footer_rights: "All rights reserved.",
        footer_created: "Created by ",
        
        // Modal
        modal_share: "Share this article:"
    }
};

// Blog articles data
const blogArticles = {
    1: {
        title: "10 Most Common Mistakes in Indoor Flower Care",
        category: "Flower Care",
        date: "May 15, 2024",
        imageText: "Indoor flower care",
        content: `
            <p>Taking care of indoor plants can be incredibly rewarding, but it's easy to make mistakes, especially if you're new to plant parenting. Over the years at Azalea Flowershop, we've noticed patterns in the issues our customers face. Here are the 10 most common mistakes and how to avoid them:</p>
            
            <h3>1. Overwatering</h3>
            <p>This is by far the most common mistake. Many plant owners water their plants on a schedule rather than checking the soil moisture. Different plants have different water needs, and factors like season, humidity, and light affect how quickly soil dries.</p>
            <p><strong>Solution:</strong> Check the soil moisture by inserting your finger about an inch deep. If it feels dry, it's time to water. If it's still moist, wait a few more days.</p>
            
            <h3>2. Insufficient Light</h3>
            <p>Plants need light for photosynthesis, but many people underestimate how much light their plants actually need. Even "low-light" plants need some indirect light to thrive.</p>
            <p><strong>Solution:</strong> Research your plant's specific light requirements. Most houseplants prefer bright, indirect light. Consider using grow lights if natural light is limited.</p>
            
            <h3>3. Wrong Pot Size</h3>
            <p>Planting in a pot that's too large or too small can cause problems. A pot that's too large holds excess moisture, leading to root rot, while a pot that's too small restricts root growth.</p>
            <p><strong>Solution:</strong> Choose a pot that's about 2-4 cm larger in diameter than the plant's root ball. Repot only when the plant has outgrown its current container.</p>
            
            <h3>4. Using the Wrong Soil</h3>
            <p>Not all potting soils are created equal. Different plants have different soil requirements. Using regular garden soil for indoor plants can lead to drainage issues and pest problems.</p>
            <p><strong>Solution:</strong> Use a well-draining potting mix appropriate for your plant type. Cacti and succulents need special cactus mix, while orchids require bark-based medium.</p>
            
            <h3>5. Ignoring Humidity Needs</h3>
            <p>Many tropical plants need higher humidity than what's typically found in homes, especially during winter when heating systems dry the air.</p>
            <p><strong>Solution:</strong> Group plants together to create a microclimate, use a humidifier, or place plants on trays with pebbles and water.</p>
            
            <h3>6. Not Cleaning Leaves</h3>
            <p>Dust accumulates on plant leaves, blocking sunlight and reducing photosynthesis. This can weaken plants over time.</p>
            <p><strong>Solution:</strong> Gently wipe leaves with a damp cloth every few weeks. For plants with fuzzy leaves, use a soft brush.</p>
            
            <h3>7. Over-fertilizing</h3>
            <p>More fertilizer doesn't mean faster growth. In fact, too much fertilizer can burn roots and damage plants.</p>
            <p><strong>Solution:</strong> Fertilize during the growing season (spring and summer) and reduce or stop during fall and winter. Always follow package instructions.</p>
            
            <h3>8. Ignoring Pests</h3>
            <p>Pests like spider mites, mealybugs, and aphids can quickly infest indoor plants if not addressed promptly.</p>
            <p><strong>Solution:</strong> Regularly inspect your plants for signs of pests. Isolate affected plants immediately and treat with appropriate methods.</p>
            
            <h3>9. Not Pruning or Deadheading</h3>
            <p>Many plants benefit from occasional pruning to encourage bushier growth and remove dead or yellowing leaves.</p>
            <p><strong>Solution:</strong> Learn proper pruning techniques for each plant type. Remove spent flowers (deadheading) to encourage more blooms.</p>
            
            <h3>10. Moving Plants Too Often</h3>
            <p>Plants need stability. Frequently moving them to different locations with different light conditions can stress them.</p>
            <p><strong>Solution:</strong> Choose the right spot for each plant and try to keep it there. If you need to move a plant, do it gradually.</p>
            
            <p>Remember, every plant is unique, and learning its specific needs is part of the joy of plant ownership. Don't be discouraged by mistakes—they're opportunities to learn and become a better plant parent!</p>
        `
    },
    2: {
        title: "How to Use Flowers to Transform Your Interior Spaces",
        category: "Home Decoration",
        date: "April 22, 2024",
        imageText: "Home decoration with flowers",
        content: `
            <p>Flowers have an incredible ability to transform spaces, adding color, texture, and life to any room. At Azalea Flowershop, we believe that incorporating flowers into your home decor should be both beautiful and sustainable. Here's our comprehensive guide to using flowers to enhance your interior spaces:</p>
            
            <h3>Understanding Scale and Proportion</h3>
            <p>The size of your floral arrangements should complement the space they inhabit. Large, dramatic arrangements work well in spacious living rooms or entryways, while smaller, delicate arrangements are perfect for bedrooms, bathrooms, or office desks.</p>
            <p><strong>Tip:</strong> For large spaces, consider tall arrangements in floor vases. For small spaces, petite arrangements in bud vases or small containers create impact without overwhelming.</p>
            
            <h3>Choosing Colors That Complement Your Decor</h3>
            <p>Flowers should enhance your existing color scheme rather than clash with it. Consider these approaches:</p>
            <ul>
                <li><strong>Monochromatic:</strong> Use different shades of the same color for a sophisticated, cohesive look.</li>
                <li><strong>Complementary:</strong> Pair colors opposite each other on the color wheel for vibrant contrast.</li>
                <li><strong>Analogous:</strong> Choose colors next to each other on the color wheel for harmony.</li>
                <li><strong>Neutral with Pops of Color:</strong> Use white, cream, or green arrangements with occasional bright accents.</li>
            </ul>
            
            <h3>Selecting the Right Vessels</h3>
            <p>The container is just as important as the flowers themselves. Consider these vessel options:</p>
            <ul>
                <li><strong>Glass vases:</strong> Perfect for showcasing beautiful stems and clean lines.</li>
                <li><strong>Ceramic pots:</strong> Add texture and can complement various decor styles.</li>
                <li><strong>Unconventional containers:</strong> Teapots, mason jars, or vintage tins can add personality.</li>
                <li><strong>Multiple small vessels:</strong> Create a collection of small arrangements for visual interest.</li>
            </ul>
            
            <h3>Strategic Placement for Maximum Impact</h3>
            <p>Where you place flowers in a room can dramatically affect the atmosphere:</p>
            <ul>
                <li><strong>Entryway:</strong> Creates a welcoming first impression.</li>
                <li><strong>Coffee table:</strong> Becomes a focal point in living areas.</li>
                <li><strong>Dining table:</strong> Enhines meals and gatherings.</li>
                <li><strong>Bedside table:</strong> Adds a touch of luxury to your morning routine.</li>
                <li><strong>Bathroom:</strong> Turns a functional space into a spa-like retreat.</li>
                <li><strong>Kitchen windowsill:</strong> Brings life to where you prepare meals.</li>
            </ul>
            
            <h3>Incorporating Foliage and Greenery</h3>
            <p>Don't overlook the power of greenery. Foliage plants and branches can:</p>
            <ul>
                <li>Add volume and texture to arrangements</li>
                <li>Create a lush, garden-like feel</li>
                <li>Last longer than many flowers</li>
                <li>Work beautifully on their own in minimalist arrangements</li>
            </ul>
            <p>Consider eucalyptus, fern, ivy, or olive branches for their beautiful leaves and longevity.</p>
            
            <h3>Seasonal Considerations</h3>
            <p>Working with seasonal flowers ensures freshness, supports local growers, and connects your home to the natural rhythm of the year:</p>
            <ul>
                <li><strong>Spring:</strong> Tulips, daffodils, hyacinths, cherry blossoms</li>
                <li><strong>Summer:</strong> Sunflowers, dahlias, zinnias, garden roses</li>
                <li><strong>Fall:</strong> Chrysanthemums, autumn leaves, berries, dried elements</li>
                <li><strong>Winter:</strong> Amaryllis, paperwhites, evergreens, pine cones</li>
            </ul>
            
            <h3>Creating Focal Points</h3>
            <p>Use flowers to draw attention to specific areas or features:</p>
            <ul>
                <li>Place an arrangement on a mantel to highlight a fireplace</li>
                <li>Use flowers to frame a beautiful window or view</li>
                <li>Create symmetry with matching arrangements on either side of a doorway</li>
                <li>Use a tall arrangement to draw the eye upward in rooms with high ceilings</li>
            </ul>
            
            <h3>Maintaining Your Arrangements</h3>
            <p>To keep your flowers looking their best:</p>
            <ul>
                <li>Change water every 2-3 days</li>
                <li>Recut stems at an angle when changing water</li>
                <li>Remove any leaves that fall below the water line</li>
                <li>Keep arrangements away from direct sunlight, heat sources, and fruit bowls</li>
            </ul>
            
            <h3>Budget-Friendly Tips</h3>
            <p>Beautiful floral decor doesn't have to be expensive:</p>
            <ul>
                <li>Choose longer-lasting flowers like orchids or chrysanthemums</li>
                <li>Use a few statement blooms surrounded by inexpensive filler</li>
                <li>Grow your own flowers or herbs for cutting</li>
                <li>Dry flowers to create arrangements that last for months</li>
            </ul>
            
            <p>Remember, the goal is to create spaces that bring you joy. Don't be afraid to experiment with different flowers, colors, and arrangements until you find what works best for your home and personal style. Flowers should reflect your personality and enhance your daily life.</p>
        `
    },
    3: {
        title: "Language of Flowers: What Do Different Flowers Really Mean?",
        category: "Meaning of Flowers",
        date: "March 8, 2024",
        imageText: "Meaning of flowers",
        content: `
            <p>The language of flowers, also known as floriography, has been used for centuries to convey messages without words. At Azalea Flowershop, we believe understanding these meanings can help you choose the perfect flowers for any occasion. Here's our guide to the symbolism behind popular flowers:</p>
            
            <h3>The History of Floriography</h3>
            <p>Floriography became especially popular during the Victorian era when expressing emotions directly was often considered improper. People used flowers to send coded messages, with different flowers, colors, and even how they were presented carrying specific meanings.</p>
            <p>While some meanings have evolved over time, many traditional associations remain relevant today. Understanding these can add depth and intention to your floral gifts.</p>
            
            <h3>Roses: The Most Expressive Blooms</h3>
            <p>Roses are perhaps the most symbolically rich flowers, with meanings that vary dramatically by color:</p>
            <ul>
                <li><strong>Red Roses:</strong> Love, passion, respect, courage. The classic symbol of romantic love.</li>
                <li><strong>White Roses:</strong> Purity, innocence, sympathy, spirituality. Often used in weddings and memorials.</li>
                <li><strong>Pink Roses:</strong> Gratitude, admiration, joy, gentleness. Perfect for saying "thank you."</li>
                <li><strong>Yellow Roses:</strong> Friendship, joy, gladness. Can also signify jealousy in some contexts.</li>
                <li><strong>Orange Roses:</strong> Desire, enthusiasm, fascination. A vibrant expression of attraction.</li>
                <li><strong>Lavender Roses:</strong> Enchantment, love at first sight. Symbolizes majesty and splendor.</li>
                <li><strong>Peach Roses:</strong> Modesty, gratitude, sincerity. Often used to close business deals.</li>
            </ul>
            
            <h3>Spring Blooms and Their Meanings</h3>
            <p>Spring flowers often symbolize renewal and fresh beginnings:</p>
            <ul>
                <li><strong>Tulips:</strong> Perfect love, rebirth, charity. Different colors have specific meanings: red for true love, yellow for cheerful thoughts, purple for royalty.</li>
                <li><strong>Daffodils:</strong> New beginnings, rebirth, unrequited love. Associated with spring and the Chinese New Year.</li>
                <li><strong>Hyacinths:</strong> Playfulness, sport, rashness. Also symbolizes constancy. Blue hyacinths represent sincerity.</li>
                <li><strong>Lilies of the Valley:</strong> Sweetness, humility, return of happiness. A symbol of purity in Christian art.</li>
                <li><strong>Peonies:</strong> Romance, prosperity, good fortune, happy marriage. In China, they're called the "king of flowers."</li>
            </ul>
            
            <h3>Summer Flowers and Their Symbolism</h3>
            <p>Summer blooms often represent warmth, joy, and abundance:</p>
            <ul>
                <li><strong>Sunflowers:</strong> Adoration, loyalty, longevity. They turn toward the sun, symbolizing positivity and strength.</li>
                <li><strong>Dahlias:</strong> Dignity, elegance, change. In Victorian times, they symbolized a lasting bond.</li>
                <li><strong>Lavender:</strong> Devotion, purity, silence, calmness. Associated with healing and relaxation.</li>
                <li><strong>Zinnias:</strong> Lasting affection, daily remembrance, goodness. Different colors represent different sentiments.</li>
                <li><strong>Hydrangeas:</strong> Gratitude, heartfelt emotion, vanity. In Japan, they represent apology.</li>
            </ul>
            
            <h3>Autumn Flowers and Their Messages</h3>
            <p>Autumn flowers often symbolize transition, preparation, and abundance:</p>
            <ul>
                <li><strong>Chrysanthemums:</strong> Long life, joy, optimism. In Asia, they represent autumn and the scholar.</li>
                <li><strong>Marigolds:</strong> Passion, creativity, warmth. In Mexican culture, they're associated with Day of the Dead.</li>
                <li><strong>Asters:</strong> Love, wisdom, faith. Named after the Greek word for "star."</li>
                <li><strong>Sedum:</strong> Tranquility, peace. Their succulent leaves symbolize resilience.</li>
            </ul>
            
            <h3>Winter Blooms and Their Significance</h3>
            <p>Winter flowers often represent hope, resilience, and celebration during dark times:</p>
            <ul>
                <li><strong>Poinsettias:</strong> Good cheer, success, celebration. Associated with Christmas.</li>
                <li><strong>Amaryllis:</strong> Pride, determination, radiant beauty. The name means "to sparkle" in Greek.</li>
                <li><strong>Paperwhites:</strong> Hope, faithfulness, sweetness. They bloom indoors during winter.</li>
                <li><strong>Christmas Cactus:</strong> Endurance, resilience. Blooms during the holiday season.</li>
            </ul>
            
            <h3>Foliage and Fillers with Meaning</h3>
            <p>Even greenery and filler flowers carry symbolism:</p>
            <ul>
                <li><strong>Eucalyptus:</strong> Protection, healing. Its scent is cleansing and refreshing.</li>
                <li><strong>Fern:</strong> Sincerity, confidence, shelter. In Victorian times, it symbolized magic.</li>
                <li><strong>Baby's Breath:</strong> Innocence, purity, everlasting love. Often used in weddings.</li>
                <li><strong>Ivy:</strong> Fidelity, friendship, affection. Clings to surfaces, symbolizing attachment.</li>
                <li><strong>Olive Branch:</strong> Peace, wisdom, victory. An ancient symbol of reconciliation.</li>
            </ul>
            
            <h3>Cultural Variations in Flower Meanings</h3>
            <p>It's important to note that flower meanings can vary across cultures:</p>
            <ul>
                <li>In China, peonies represent wealth and honor, while chrysanthemums symbolize longevity.</li>
                <li>In Japan, cherry blossoms represent the fleeting nature of life, while lotus flowers symbolize purity.</li>
                <li>In Hindu tradition, marigolds are sacred and used in religious ceremonies.</li>
                <li>In ancient Greece, roses were associated with Aphrodite, the goddess of love.</li>
            </ul>
            <p>When choosing flowers for someone from a different culture, it's worth researching any specific meanings or taboos.</p>
            
            <h3>Modern Interpretations and Personal Meaning</h3>
            <p>While traditional meanings provide guidance, personal associations often matter more. A flower that reminds someone of a happy childhood memory or a special occasion carries its own significance.</p>
            <p>At Azalea Flowershop, we encourage you to combine traditional meanings with personal significance when choosing flowers. Tell us about the recipient and the occasion, and we'll help you create a meaningful arrangement that conveys exactly what you want to express.</p>
            
            <p>Remember, the most important thing is the thought and intention behind the gift. Whether you're following traditional symbolism or creating your own meaning, flowers have a unique ability to communicate what words sometimes cannot.</p>
        `
    },
    4: {
        title: "The Ultimate Guide to Choosing the Right Flowers for Every Occasion",
        category: "Gifting & Occasions",
        date: "February 14, 2024",
        imageText: "Flower gifts",
        content: `
            <p>Choosing the right flowers for an occasion can feel overwhelming with so many options available. At Azalea Flowershop, we've helped thousands of customers select perfect floral gifts. This comprehensive guide will help you make the right choice for any event or recipient.</p>
            
            <h3>Understanding the Recipient</h3>
            <p>Before considering specific flowers, think about the person who will receive them:</p>
            <ul>
                <li><strong>Preferences:</strong> Do they have favorite flowers or colors?</li>
                <li><strong>Personality:</strong> Are they traditional or modern? Extroverted or introverted?</li>
                <li><strong>Lifestyle:</strong> Do they travel often? How much time do they have for flower care?</li>
                <li><strong>Allergies:</strong> Are they sensitive to strong scents or pollen?</li>
                <li><strong>Home decor:</strong> What colors and styles dominate their home?</li>
            </ul>
            
            <h3>Birthdays: Celebrating Individuality</h3>
            <p>Birthday flowers should reflect the recipient's personality:</p>
            <ul>
                <li><strong>Traditional:</strong> Roses, lilies, or mixed bouquets in their favorite colors</li>
                <li><strong>Modern:</strong> Tropical flowers like orchids or anthuriums in sleek arrangements</li>
                <li><strong>Fun-loving:</strong> Bright, cheerful mixes with sunflowers, gerbera daisies, or tulips</li>
                <li><strong>Elegant:</strong> White flowers like calla lilies or hydrangeas in sophisticated arrangements</li>
                <li><strong>Birth Month Flowers:</strong> Consider their birth month flower for a personal touch:
                    <ul>
                        <li>January: Carnation or Snowdrop</li>
                        <li>February: Violet or Primrose</li>
                        <li>March: Daffodil or Jonquil</li>
                        <li>April: Daisy or Sweet Pea</li>
                        <li>May: Lily of the Valley or Hawthorn</li>
                        <li>June: Rose or Honeysuckle</li>
                        <li>July: Larkspur or Water Lily</li>
                        <li>August: Gladiolus or Poppy</li>
                        <li>September: Aster or Morning Glory</li>
                        <li>October: Marigold or Cosmos</li>
                        <li>November: Chrysanthemum</li>
                        <li>December: Narcissus or Holly</li>
                    </ul>
                </li>
            </ul>
            
            <h3>Anniversaries: Marking Milestones</h3>
            <p>Anniversary flowers traditionally vary by year:</p>
            <ul>
                <li><strong>1st (Paper):</strong> Carnations or pansies</li>
                <li><strong>5th (Wood):</strong> Daisies or bluebells</li>
                <li><strong>10th (Tin):</strong> Daffodils or yellow roses</li>
                <li><strong>15th (Crystal):</strong> Roses or orchids</li>
                <li><strong>20th (China):</strong> Asters or lilies</li>
                <li><strong>25th (Silver):</strong> Irises or silver-themed arrangements</li>
                <li><strong>30th (Pearl):</strong> Lilies or pearls incorporated in arrangements</li>
                <li><strong>40th (Ruby):</strong> Gladioli or red flowers</li>
                <li><strong>50th (Gold):</strong> Yellow roses or gold-accented arrangements</li>
                <li><strong>60th (Diamond):</strong> White flowers or diamond-like arrangements</li>
            </ul>
            <p>Modern couples often prefer flowers that have personal significance rather than following traditional lists.</p>
            
            <h3>Romantic Occasions: Expressing Love</h3>
            <p>For Valentine's Day, proposals, or "just because":</p>
            <ul>
                <li><strong>Classic Romance:</strong> Red roses, the universal symbol of love</li>
                <li><strong>Unique Romance:</strong> Orchids, tulips, or lilies in romantic colors</li>
                <li><strong>First Date/New Relationship:</strong> Pink or peach roses (less intense than red)</li>
                <li><strong>Long-term Relationship:</strong> Their favorite flowers, showing you know them well</li>
                <li><strong>Apology:</strong> White flowers symbolizing sincerity, or their favorites</li>
                <li><strong>Proposal:</strong> A stunning arrangement that matches the ring or setting</li>
            </ul>
            
            <h3>Congratulations: Celebrating Achievements</h3>
            <p>For graduations, promotions, new homes, or other achievements:</p>
            <ul>
                <li><strong>Graduation:</strong> Bright, cheerful mixes in school colors</li>
                <li><strong>Promotion/New Job:</strong> Sophisticated arrangements suitable for an office</li>
                <li><strong>New Home:</strong> Houseplants or long-lasting arrangements</li>
                <li><strong>Retirement:</strong> Flowers representing their hobbies or travel plans</li>
                <li><strong>Baby Shower:</strong> Soft pastels or arrangements in blue/pink if gender is known</li>
            </ul>
            
            <h3>Sympathy and Condolences: Offering Comfort</h3>
            <p>Flowers for sympathy should be comforting and respectful:</p>
            <ul>
                <li><strong>Funerals:</strong> White lilies, chrysanthemums, carnations, or roses</li>
                <li><strong>Home Delivery:</strong> Living plants that last longer than cut flowers</li>
                <li><strong>Immediate Family:</strong> Standing sprays or wreaths</li>
                <li><strong>Friends/Colleagues:</strong> Smaller arrangements or potted plants</li>
                <li><strong>Memorial Services:</strong> Flowers in their favorite colors or types</li>
                <li><strong>What to Avoid:</strong> Overly bright or festive colors, unless specifically requested</li>
            </ul>
            <p>Always check with the family or funeral home for any specific preferences or restrictions.</p>
            
            <h3>Get Well Soon: Wishing Recovery</h3>
            <p>Flowers to cheer someone who's ill:</p>
            <ul>
                <li><strong>Hospital:</strong> Compact arrangements that fit on bedside tables</li>
                <li><strong>Home Recovery:</strong> Cheerful, bright flowers to lift spirits</li>
                <li><strong>Long-term Illness:</strong> Low-maintenance plants that last</li>
                <li><strong>What to Avoid:</strong> Strongly scented flowers that might cause discomfort</li>
            </ul>
            
            <h3>Thank You: Expressing Gratitude</h3>
            <p>Flowers to say thank you:</p>
            <ul>
                <li><strong>Formal Thanks:</strong> Elegant arrangements in refined colors</li>
                <li><strong>Friendly Thanks:</strong> Bright, cheerful mixes</li>
                <li><strong>Business Thanks:</strong> Professional-looking plants or arrangements</li>
                <li><strong>Host/Hostess Gift:</strong> Arrangements that complement their home</li>
            </ul>
            
            <h3>Seasonal Considerations</h3>
            <p>Seasonal flowers are often fresher, more affordable, and environmentally friendly:</p>
            <ul>
                <li><strong>Spring:</strong> Tulips, daffodils, hyacinths, peonies</li>
                <li><strong>Summer:</strong> Sunflowers, dahlias, zinnias, roses</li>
                <li><strong>Fall:</strong> Chrysanthemums, marigolds, asters, autumn leaves</li>
                <li><strong>Winter:</strong> Amaryllis, paperwhites, evergreens, holiday arrangements</li>
            </ul>
            
            <h3>Practical Considerations</h3>
            <p>Keep these practical factors in mind:</p>
            <ul>
                <li><strong>Longevity:</strong> Carnations, chrysanthemums, and orchids last longer than delicate flowers</li>
                <li><strong>Maintenance:</strong> Some recipients prefer low-maintenance plants</li>
                <li><strong>Delivery:</strong> Consider delivery timing and recipient availability</li>
                <li><strong>Budget:</strong> Beautiful arrangements are available at various price points</li>
            </ul>
            
            <h3>When in Doubt: Ask the Experts</h3>
            <p>At Azalea Flowershop, we're always happy to help you choose the perfect flowers. Tell us about the occasion, the recipient, and any preferences or restrictions, and we'll create something beautiful and appropriate.</p>
            
            <p>Remember, the thought and care you put into choosing flowers matter more than following any specific rules. Your consideration shows the recipient that you care, which is the most important gift of all.</p>
        `
    },
    5: {
        title: "How to Propagate Indoor Plants: A Step-by-Step Guide",
        category: "Flower Care",
        date: "January 20, 2024",
        imageText: "Plant propagation",
        content: `
            <p>Plant propagation is one of the most rewarding aspects of indoor gardening. Not only is it cost-effective, but it also allows you to share plants with friends and family. At Azalea Flowershop, we often get questions about how to propagate different plants. Here's our comprehensive guide to indoor plant propagation.</p>
            
            <h3>Understanding Plant Propagation</h3>
            <p>Propagation is the process of creating new plants from existing ones. There are two main types:</p>
            <ul>
                <li><strong>Asexual Propagation:</strong> Creating genetically identical clones of the parent plant. This includes methods like cuttings, division, and layering.</li>
                <li><strong>Sexual Propagation:</strong> Growing plants from seeds, resulting in genetic variation.</li>
            </ul>
            <p>For indoor plants, asexual methods are more common and often more successful.</p>
            
            <h3>Essential Propagation Tools and Supplies</h3>
            <p>Before you begin, gather these supplies:</p>
            <ul>
                <li><strong>Sharp, clean scissors or pruning shears:</strong> Prevents damage and disease transmission</li>
                <li><strong>Containers:</strong> Small pots, jars, or propagation stations</li>
                <li><strong>Potting mix:</strong> Well-draining soil for soil propagation</li>
                <li><strong>Water:</strong> Filtered or tap water left to sit for 24 hours to dissipate chlorine</li>
                <li><strong>Rooting hormone (optional):</strong> Can speed up root development</li>
                <li><strong>Clear plastic bags or propagation domes:</strong> Creates humidity for certain plants</li>
            </ul>
            
            <h3>Water Propagation: The Easiest Method</h3>
            <p>Water propagation involves rooting cuttings in water before transferring to soil. This method works well for many common houseplants:</p>
            
            <h4>Plants that Propagate Well in Water:</h4>
            <ul>
                <li>Pothos (Epipremnum aureum)</li>
                <li>Philodendron</li>
                <li>Monstera</li>
                <li>Spider Plant (Chlorophytum comosum)</li>
                <li>Coleus</li>
                <li>Swedish Ivy (Plectranthus verticillatus)</li>
                <li>Begonia</li>
                <li>African Violet (leaf propagation)</li>
                <li>English Ivy</li>
                <li>Mint and other herbs</li>
            </ul>
            
            <h4>Step-by-Step Water Propagation:</h4>
            <ol>
                <li><strong>Take a Cutting:</strong> Using clean scissors, cut a 10-15 cm section of stem just below a node (where leaves emerge). The cutting should have at least 2-3 leaves.</li>
                <li><strong>Prepare the Cutting:</strong> Remove any leaves that would be submerged in water.</li>
                <li><strong>Place in Water:</strong> Put the cutting in a container with enough water to cover the nodes but not the leaves.</li>
                <li><strong>Provide Proper Conditions:</strong> Place in bright, indirect light. Change the water every 5-7 days to prevent bacterial growth.</li>
                <li><strong>Wait for Roots:</strong> Roots should appear in 2-6 weeks, depending on the plant and conditions.</li>
                <li><strong>Transfer to Soil:</strong> When roots are 5-7 cm long, carefully plant in well-draining soil.</li>
            </ol>
            
            <h3>Soil Propagation: Direct to Dirt</h3>
            <p>Some plants root better directly in soil:</p>
            
            <h4>Plants that Prefer Soil Propagation:</h4>
            <ul>
                <li>Succulents and Cacti</li>
                <li>ZZ Plant (Zamioculcas zamiifolia)</li>
                <li>Snake Plant (Sansevieria)</li>
                <li>Rubber Plant (Ficus elastica)</li>
                <li>Fiddle Leaf Fig (Ficus lyrata)</li>
                <li>Jade Plant (Crassula ovata)</li>
            </ul>
            
            <h4>Step-by-Step Soil Propagation:</h4>
            <ol>
                <li><strong>Take a Cutting:</strong> Similar to water propagation, take a cutting with several nodes.</li>
                <li><strong>Let it Callus:</strong> For succulents and some other plants, let the cut end dry for 1-3 days to form a callus.</li>
                <li><strong>Apply Rooting Hormone (optional):</strong> Dip the cut end in rooting hormone powder to encourage faster rooting.</li>
                <li><strong>Plant in Soil:</strong> Place the cutting in a small pot with well-draining soil.</li>
                <li><strong>Water Gently:</strong> Water lightly to settle the soil around the cutting.</li>
                <li><strong>Create Humidity:</strong> Cover with a clear plastic bag or propagation dome to maintain humidity.</li>
                <li><strong>Provide Proper Conditions:</strong> Place in bright, indirect light and keep soil slightly moist but not wet.</li>
                <li><strong>Check for Roots:</strong> After 4-8 weeks, gently tug on the cutting. Resistance means roots have formed.</li>
            </ol>
            
            <h3>Division: Multiplying Mature Plants</h3>
            <p>Division works well for plants that naturally form clumps or multiple stems:</p>
            
            <h4>Plants Suitable for Division:</h4>
            <ul>
                <li>Peace Lily (Spathiphyllum)</li>
                <li>Snake Plant (Sansevieria)</li>
                <li>ZZ Plant (Zamioculcas zamiifolia)</li>
                <li>Spider Plant (Chlorophytum comosum)</li>
                <li>Boston Fern (Nephrolepis exaltata)</li>
                <li>Calathea</li>
                <li>Chinese Evergreen (Aglaonema)</li>
            </ul>
            
            <h4>Step-by-Step Division:</h4>
            <ol>
                <li><strong>Remove Plant from Pot:</strong> Gently remove the entire plant from its pot.</li>
                <li><strong>Separate Roots:</strong> Carefully tease apart the roots to separate natural divisions. For tough roots, you may need to use a clean, sharp knife.</li>
                <li><strong>Ensure Each Division Has Roots:</strong> Each new plant should have a good root system and several leaves/stems.</li>
                <li><strong>Pot Up Divisions:</strong> Plant each division in its own pot with fresh potting mix.</li>
                <li><strong>Water and Care:</strong> Water thoroughly and care as usual, keeping slightly shaded until established.</li>
            </ol>
            
            <h3>Leaf Propagation: From Single Leaf to New Plant</h3>
            <p>Some plants can grow from individual leaves:</p>
            
            <h4>Plants that Propagate from Leaves:</h4>
            <ul>
                <li>African Violet (Saintpaulia)</li>
                <li>Snake Plant (Sansevieria)</li>
                <li>Jade Plant (Crassula ovata)</li>
                <li>Begonia rex</li>
                <li>Peperomia</li>
                <li>Succulents like Echeveria</li>
            </ul>
            
            <h4>Step-by-Step Leaf Propagation:</h4>
            <ol>
                <li><strong>Select Healthy Leaves:</strong> Choose mature, healthy leaves without damage.</li>
                <li><strong>Remove Leaves Properly:</strong> Gently twist leaves from the stem or use a clean knife. For some plants, include a bit of stem tissue.</li>
                <li><strong>Let Cuttings Callus:</strong> Allow cut ends to dry for 1-3 days to prevent rot.</li>
                <li><strong>Place on Soil:</strong> Lay leaves on top of moist, well-draining soil. For some plants, insert the cut end slightly into the soil.</li>
                <li><strong>Provide Proper Conditions:</strong> Place in bright, indirect light. Mist occasionally to maintain humidity.</li>
                <li><strong>Wait for New Growth:</strong> Small plantlets will form at the base of the leaf in several weeks to months.</li>
                <li><strong>Separate and Pot:</strong> Once plantlets have developed roots and several leaves, carefully separate them from the parent leaf and pot individually.</li>
            </ol>
            
            <h3>Air Layering: Advanced Propagation</h3>
            <p>Air layering is useful for plants with thick stems that are difficult to propagate by other methods:</p>
            
            <h4>Plants Suitable for Air Layering:</h4>
            <ul>
                <li>Rubber Plant (Ficus elastica)</li>
                <li>Fiddle Leaf Fig (Ficus lyrata)</li>
                <li>Dracaena</li>
                <li>Dieffenbachia</li>
                <li>Monstera</li>
            </ul>
            
            <h4>Step-by-Step Air Layering:</h4>
            <ol>
                <li><strong>Select a Stem:</strong> Choose a healthy stem and make an upward slanting cut about one-third through the stem.</li>
                <li><strong>Insert a Wedge:</strong> Place a small pebble or toothpick in the cut to keep it open.</li>
                <li><strong>Apply Rooting Hormone:</strong> Dust the cut with rooting hormone.</li>
                <li><strong>Wrap with Moss:</strong> Surround the area with moist sphagnum moss.</li>
                <li><strong>Cover with Plastic:</strong> Wrap the moss in clear plastic and secure both ends with tape or twist ties.</li>
                <li><strong>Wait for Roots:</strong> Roots should form inside the plastic in 4-12 weeks.</li>
                <li><strong>Cut and Pot:</strong> Once roots are visible through the plastic, cut below the rooted area and pot as a new plant.</li>
            </ol>
            
            <h3>Troubleshooting Common Propagation Problems</h3>
            <ul>
                <li><strong>Rotting Cuttings:</strong> Usually caused by overwatering or poor drainage. Use well-draining soil and water less frequently.</li>
                <li><strong>No Root Development:</strong> Ensure cuttings have nodes (for stem cuttings) and provide adequate warmth and light.</li>
                <li><strong>Yellowing Leaves:</strong> Could be too much direct sun, overwatering, or nutrient deficiency.</li>
                <li><strong>Mold or Fungus:</strong> Improve air circulation and reduce humidity if using a propagation dome.</li>
                <li><strong>Wilting Cuttings:</strong> Maintain higher humidity by misting or using a plastic cover.</li>
            </ul>
            
            <h3>Tips for Propagation Success</h3>
            <ul>
                <li><strong>Timing:</strong> Spring and early summer are generally the best times to propagate.</li>
                <li><strong>Patience:</strong> Some plants root quickly (pothos in 1-2 weeks), while others take months.</li>
                <li><strong>Clean Tools:</strong> Always use clean tools to prevent disease transmission.</li>
                <li><strong>Observation:</strong> Check cuttings regularly but avoid disturbing them unnecessarily.</li>
                <li><strong>Experimentation:</strong> Don't be afraid to try different methods. If one fails, try another.</li>
            </ul>
            
            <p>Propagation is both a science and an art. While these guidelines provide a solid foundation, every plant and situation is unique. Don't be discouraged by failures—they're learning opportunities. At Azalea Flowershop, we're always here to help with your propagation questions and challenges.</p>
            
            <p>Remember, the joy of watching a new plant grow from a cutting you took yourself is one of the most rewarding experiences in indoor gardening. Happy propagating!</p>
        `
    },
    6: {
        title: "Color Mixing: How to Create Harmonious Bouquets for Your Home",
        category: "Home Decoration",
        date: "December 5, 2023",
        imageText: "Colors in decoration",
        content: `
            <p>Creating beautiful floral arrangements is as much about color as it is about flower selection. At Azalea Flowershop, we believe that understanding color theory can help anyone create stunning bouquets. This guide will teach you how to mix colors like a professional florist.</p>
            
            <h3>The Basics of Color Theory</h3>
            <p>Color theory provides a framework for combining colors in pleasing ways. The color wheel is the foundation:</p>
            <ul>
                <li><strong>Primary Colors:</strong> Red, yellow, blue. These cannot be created by mixing other colors.</li>
                <li><strong>Secondary Colors:</strong> Orange, green, violet. Created by mixing two primary colors.</li>
                <li><strong>Tertiary Colors:</strong> Red-orange, yellow-orange, yellow-green, blue-green, blue-violet, red-violet. Created by mixing a primary and a secondary color.</li>
            </ul>
            <p>Understanding these relationships helps you create harmonious color combinations.</p>
            
            <h3>Color Harmony Schemes</h3>
            <p>Professional florists use specific color schemes to create different effects:</p>
            
            <h4>1. Monochromatic Schemes</h4>
            <p>Using different shades, tones, and tints of a single color creates elegant, sophisticated arrangements:</p>
            <ul>
                <li><strong>Example:</strong> Light pink, medium pink, and dark pink roses with white and cream accents.</li>
                <li><strong>Best for:</strong> Formal occasions, minimalist decor, creating a calm atmosphere.</li>
                <li><strong>Tips:</strong> Vary texture and flower shape to add interest since color variation is limited.</li>
            </ul>
            
            <h4>2. Analogous Schemes</h4>
            <p>Using colors that are next to each other on the color wheel creates harmonious, relaxing arrangements:</p>
            <ul>
                <li><strong>Example:</strong> Yellow, yellow-green, and green flowers (daffodils, green trick dianthus, bells of Ireland).</li>
                <li><strong>Best for:</strong> Natural-looking arrangements, creating a soothing atmosphere.</li>
                <li><strong>Tips:</strong> Choose one dominant color, use the others as accents.</li>
            </ul>
            
            <h4>3. Complementary Schemes</h4>
            <p>Using colors opposite each other on the color wheel creates vibrant, high-contrast arrangements:</p>
            <ul>
                <li><strong>Example:</strong> Purple and yellow (irises and sunflowers), red and green (poinsettias and holly).</li>
                <li><strong>Best for:</strong> Making a bold statement, festive occasions, drawing attention.</li>
                <li><strong>Tips:</strong> Use one color as dominant and the other as accent to avoid visual chaos.</li>
            </ul>
            
            <h4>4. Split-Complementary Schemes</h4>
            <p>Using a base color and the two colors adjacent to its complement creates vibrant yet balanced arrangements:</p>
            <ul>
                <li><strong>Example:</strong> Blue with yellow-orange and red-orange (blue delphiniums with orange roses and red carnations).</li>
                <li><strong>Best for:</strong> Beginners who want contrast without the intensity of direct complements.</li>
                <li><strong>Tips:</strong> Works well with one warm color and two cool colors or vice versa.</li>
            </ul>
            
            <h4>5. Triadic Schemes</h4>
            <p>Using three colors equally spaced around the color wheel creates vibrant, balanced arrangements:</p>
            <ul>
                <li><strong>Example:</strong> Red, yellow, and blue (primary colors) or orange, green, and violet (secondary colors).</li>
                <li><strong>Best for:</strong> Playful, cheerful arrangements, children's events.</li>
                <li><strong>Tips:</strong> Balance by letting one color dominate and using the others as accents.</li>
            </ul>
            
            <h4>6. Tetradic (Double Complementary) Schemes</h4>
            <p>Using two complementary pairs creates rich, complex arrangements:</p>
            <ul>
                <li><strong>Example:</strong> Red and green with blue and orange.</li>
                <li><strong>Best for:</strong> Experienced arrangers, maximalist decor, festive celebrations.</li>
                <li><strong>Tips:</strong> Can be challenging to balance. Consider using one color as clearly dominant.</li>
            </ul>
            
            <h3>Working with Neutrals</h3>
            <p>Neutrals (white, cream, gray, green) play crucial roles in floral design:</p>
            <ul>
                <li><strong>White and Cream:</strong> Provide visual relief, highlight other colors, create elegance.</li>
                <li><strong>Green:</strong> The most important neutral in floristry. Foliage provides structure, texture, and enhances other colors.</li>
                <li><strong>Gray/Silver:</strong> Dusty miller, eucalyptus, and silver foliage add sophistication and cool down warm arrangements.</li>
            </ul>
            
            <h3>Considering Color Psychology</h3>
            <p>Colors evoke emotions and can set the mood of a space:</p>
            <ul>
                <li><strong>Red:</strong> Passion, energy, excitement. Can be overwhelming in large amounts.</li>
                <li><strong>Orange:</strong> Enthusiasm, creativity, warmth. Great for social spaces.</li>
                <li><strong>Yellow:</strong> Happiness, optimism, warmth. Brightens dark spaces.</li>
                <li><strong>Green:</strong> Balance, harmony, renewal. Creates a calming atmosphere.</li>
                <li><strong>Blue:</strong> Calm, serenity, stability. Rare in flowers, often achieved with tinting or specific varieties like delphinium.</li>
                <li><strong>Purple:</strong> Luxury, spirituality, creativity. Dark purples feel regal, light purples feel romantic.</li>
                <li><strong>Pink:</strong> Love, gentleness, femininity. Soft pinks are calming, hot pinks are energizing.</li>
                <li><strong>White:</strong> Purity, simplicity, peace. Creates a sense of space and light.</li>
            </ul>
            
            <h3>Seasonal Color Palettes</h3>
            <p>Nature provides guidance through seasonal color changes:</p>
            <ul>
                <li><strong>Spring:</strong> Pastels (soft pinks, yellows, lavenders), fresh greens, white. Represents renewal.</li>
                <li><strong>Summer:</strong> Bright, saturated colors (hot pinks, oranges, reds, yellows). Represents energy and abundance.</li>
                <li><strong>Autumn:</strong> Warm, earthy tones (burgundy, burnt orange, gold, deep yellow, brown). Represents harvest and transition.</li>
                <li><strong>Winter:</strong> Cool tones (white, silver, blue, deep green), with pops of red for holidays. Represents calm and celebration.</li>
            </ul>
            
            <h3>Practical Tips for Color Mixing</h3>
            
            <h4>1. Start with a Focal Flower</h4>
            <p>Choose one standout flower in your dominant color, then build around it:</p>
            <ul>
                <li>Large blooms like peonies, dahlias, or sunflowers make excellent focal points.</li>
                <li>Let this flower determine your color scheme.</li>
            </ul>
            
            <h4>2. Use the 60-30-10 Rule</h4>
            <p>A classic design principle for balanced color distribution:</p>
            <ul>
                <li><strong>60% Dominant Color:</strong> The main color of your arrangement.</li>
                <li><strong>30% Secondary Color:</strong> Complements and enhances the dominant color.</li>
                <li><strong>10% Accent Color:</strong> Small pops of contrast for visual interest.</li>
            </ul>
            
            <h4>3. Consider Texture and Form</h4>
            <p>Color isn't just about hue. Consider these elements:</p>
            <ul>
                <li><strong>Value:</strong> Lightness or darkness of a color. Mix light, medium, and dark values.</li>
                <li><strong>Saturation:</strong> Intensity of a color. Mix saturated and desaturated flowers.</li>
                <li><strong>Texture:</strong> Smooth petals vs. fuzzy foliage. Texture affects how color is perceived.</li>
            </ul>
            
            <h4>4. Test Combinations</h4>
            <p>Before arranging, lay flowers out to see how colors work together:</p>
            <ul>
                <li>Natural light shows true colors best.</li>
                <li>Step back to view from a distance.</li>
                <li>Take a photo—the camera often reveals color relationships you might miss.</li>
            </ul>
            
            <h4>5. Don't Forget about the Vessel</h4>
            <p>The container color affects the overall arrangement:</p>
            <ul>
                <li>Neutral containers (white, clear glass, natural materials) let flowers shine.</li>
                <li>Colored containers should complement, not compete with, the flowers.</li>
                <li>Consider if the vessel will be visible or hidden by foliage.</li>
            </ul>
            
            <h3>Common Color Mixing Mistakes to Avoid</h3>
            <ul>
                <li><strong>Too Many Colors:</strong> Limiting your palette usually creates more sophisticated arrangements.</li>
                <li><strong>Ignoring Foliage:</strong> Green isn't just filler—it's an essential color component.</li>
                <li><strong>Forgetting About the Setting:</strong> Consider where the arrangement will be displayed.</li>
                <li><strong>Muddy Colors:</strong> Certain color combinations (like red and purple) can look muddy if not balanced with neutrals.</li>
                <li><strong>Seasonal Inconsistency:</strong> Bright summer colors might look odd in a winter setting.</li>
            </ul>
            
            <h3>Color and Room Placement</h3>
            <p>Consider where your arrangement will live:</p>
            <ul>
                <li><strong>North-facing rooms:</strong> Often have cool light. Warm colors (yellow, orange, red) add warmth.</li>
                <li><strong>South-facing rooms:</strong> Have warm light. Cool colors (blue, purple, green) provide balance.</li>
                <li><strong>Small rooms:</strong> Light colors make spaces feel larger.</li>
                <li><strong>Large rooms:</strong> Can handle bolder, darker colors.</li>
                <li><strong>Rooms with competing patterns:</strong> Simpler color schemes work best.</li>
            </ul>
            
            <h3>Developing Your Color Sense</h3>
            <p>Color mastery comes with practice and observation:</p>
            <ul>
                <li><strong>Study Nature:</strong> Notice how colors combine in gardens, forests, and landscapes.</li>
                <li><strong>Create a Color Inspiration Board:</strong> Collect images of color combinations you love.</li>
                <li><strong>Experiment Freely:</strong> Try unexpected combinations—you might discover something wonderful.</li>
                <li><strong>Keep Notes:</strong> Document what works and what doesn't.</li>
            </ul>
            
            <p>At Azalea Flowershop, we're always happy to help you select flowers that work well together. Bring us photos of your space or describe the feeling you want to create, and we'll suggest perfect color combinations.</p>
            
            <p>Remember, while these guidelines are helpful, the most important thing is that you love the colors in your arrangement. Trust your instincts—if a combination brings you joy, it's the right one for your home.</p>
        `
    }
};

// Current language
let currentLang = 'sq';

// DOM elements
const elements = {
    // Language
    langToggle: document.getElementById('langToggle'),
    langOverlay: document.getElementById('languageOverlay'),
    langBtns: document.querySelectorAll('.lang-btn'),
    
    // Navigation
    hamburger: document.getElementById('hamburger'),
    navContainer: document.querySelector('.nav-container'),
    navLinks: document.querySelectorAll('.nav-link'),
    
    // Forms
    newsletterForm: document.getElementById('newsletterForm'),
    newsletterEmail: document.getElementById('newsletterEmail'),
    newsletterMessage: document.getElementById('newsletterMessage'),
    contactForm: document.getElementById('contactForm'),
    contactMessageSuccess: document.getElementById('contactMessageSuccess'),
    
    // Blog
    blogCategoryBtns: document.querySelectorAll('.blog-category-btn'),
    blogReadBtns: document.querySelectorAll('.blog-read-btn'),
    blogModalOverlay: document.getElementById('blogModalOverlay'),
    blogModal: document.getElementById('blogModal'),
    blogModalClose: document.getElementById('blogModalClose'),
    modalTitle: document.getElementById('modalTitle'),
    modalCategory: document.getElementById('modalCategory'),
    modalDate: document.getElementById('modalDate'),
    modalBody: document.getElementById('modalBody'),
    modalImageText: document.getElementById('modalImageText'),
    
    // Gallery
    galleryFilters: document.querySelectorAll('.gallery-filter'),
    loadMoreGallery: document.getElementById('loadMoreGallery'),
    
    // Community
    joinCommunityBtn: document.getElementById('joinCommunityBtn'),
    
    // Footer
    currentYear: document.getElementById('currentYear'),
    footerNewsletterForm: document.getElementById('footerNewsletterForm')
};

// Initialize the website
function init() {
    // Set current year
    elements.currentYear.textContent = new Date().getFullYear();
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('azalea-lang');
    if (savedLang && (savedLang === 'sq' || savedLang === 'en')) {
        currentLang = savedLang;
        updateLanguageDisplay();
        translatePage();
    } else {
        // Show language overlay on first visit
        setTimeout(() => {
            elements.langOverlay.style.display = 'flex';
        }, 500);
    }
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Initialize blog filtering
    initBlogFiltering();
    
    // Initialize gallery filtering
    initGalleryFiltering();
}

// Setup all event listeners
function setupEventListeners() {
    // Language toggle
    elements.langToggle.addEventListener('click', toggleLanguage);
    
    // Language selection buttons
    elements.langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            setLanguage(lang);
            elements.langOverlay.style.display = 'none';
        });
    });
    
    // Mobile hamburger menu
    elements.hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking a link
    elements.navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                elements.navContainer.classList.remove('active');
                elements.hamburger.classList.remove('active');
            }
        });
    });
    
    // Newsletter form
    elements.newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    
    // Contact form
    elements.contactForm.addEventListener('submit', handleContactSubmit);
    
    // Blog modal
    elements.blogReadBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const articleId = btn.dataset.article;
            openBlogModal(articleId);
        });
    });
    
    elements.blogModalClose.addEventListener('click', closeBlogModal);
    elements.blogModalOverlay.addEventListener('click', (e) => {
        if (e.target === elements.blogModalOverlay) {
            closeBlogModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeBlogModal();
        }
    });
    
    // Load more gallery items
    if (elements.loadMoreGallery) {
        elements.loadMoreGallery.addEventListener('click', loadMoreGalleryItems);
    }
    
    // Join community button
    if (elements.joinCommunityBtn) {
        elements.joinCommunityBtn.addEventListener('click', () => {
            elements.newsletterEmail.scrollIntoView({ behavior: 'smooth' });
            elements.newsletterEmail.focus();
        });
    }
    
    // Footer newsletter form
    if (elements.footerNewsletterForm) {
        elements.footerNewsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            if (validateEmail(email)) {
                showFormMessage(elements.footerNewsletterForm, translations[currentLang].newsletter_success, 'success');
                e.target.reset();
            } else {
                showFormMessage(elements.footerNewsletterForm, translations[currentLang].newsletter_error, 'error');
            }
        });
    }
    
    // Close language overlay when clicking outside
    elements.langOverlay.addEventListener('click', (e) => {
        if (e.target === elements.langOverlay) {
            elements.langOverlay.style.display = 'none';
        }
    });
}

// Toggle mobile menu
function toggleMobileMenu() {
    elements.navContainer.classList.toggle('active');
    elements.hamburger.classList.toggle('active');
}

// Initialize smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                elements.navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

// Initialize blog filtering
function initBlogFiltering() {
    elements.blogCategoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            elements.blogCategoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            filterBlogCards(category);
        });
    });
}

// Filter blog cards by category
function filterBlogCards(category) {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Initialize gallery filtering
function initGalleryFiltering() {
    elements.galleryFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Update active filter
            elements.galleryFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            const category = filter.dataset.filter;
            filterGalleryItems(category);
        });
    });
}

// Filter gallery items by category
function filterGalleryItems(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Load more gallery items
function loadMoreGalleryItems() {
    // In a real application, this would load more items from a server
    // For this demo, we'll simulate loading more items
    const galleryGrid = document.querySelector('.gallery-grid');
    const loadMoreBtn = elements.loadMoreGallery;
    
    // Show loading state
    const originalText = loadMoreBtn.textContent;
    loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    loadMoreBtn.disabled = true;
    
    // Simulate API delay
    setTimeout(() => {
        // Create new gallery items
        const newItems = [
            {
                category: 'bouquets',
                title: 'Spring Symphony',
                desc: 'A fresh spring bouquet with tulips, daffodils, and hyacinths in soft pastel colors.',
                imageText: 'Spring bouquet'
            },
            {
                category: 'arrangements',
                title: 'Modern Minimalist',
                desc: 'A clean, minimalist arrangement with a single type of flower in a geometric vase.',
                imageText: 'Minimalist arrangement'
            },
            {
                category: 'indoor',
                title: 'Calathea Collection',
                desc: 'A selection of beautiful Calathea plants with their stunning patterned leaves.',
                imageText: 'Calathea plants'
            },
            {
                category: 'special',
                title: 'Thank You Bouquet',
                desc: 'A bright and cheerful bouquet to express gratitude and appreciation.',
                imageText: 'Thank you bouquet'
            }
        ];
        
        // Add new items to the gallery
        newItems.forEach((item, index) => {
            const newItem = document.createElement('div');
            newItem.className = 'gallery-item';
            newItem.dataset.category = item.category;
            newItem.style.opacity = '0';
            newItem.style.transform = 'translateY(20px)';
            
            newItem.innerHTML = `
                <div class="gallery-image">
                    <div class="image-placeholder">
                        <i class="fas fa-spa"></i>
                        <span>${item.imageText}</span>
                    </div>
                </div>
                <div class="gallery-content">
                    <h3 class="gallery-item-title">${item.title}</h3>
                    <p class="gallery-item-desc">${item.desc}</p>
                    <a href="https://instagram.com/lulishtja.azalea" target="_blank" class="btn btn-instagram">
                        <i class="fab fa-instagram"></i> ${translations[currentLang].gallery_order}
                    </a>
                </div>
            `;
            
            galleryGrid.appendChild(newItem);
            
            // Animate in
            setTimeout(() => {
                newItem.style.opacity = '1';
                newItem.style.transform = 'translateY(0)';
            }, 100 * index);
        });
        
        // Update button text
        loadMoreBtn.innerHTML = '<i class="fas fa-check"></i> Loaded!';
        
        // Hide button after successful load
        setTimeout(() => {
            loadMoreBtn.style.opacity = '0';
            setTimeout(() => {
                loadMoreBtn.style.display = 'none';
            }, 300);
        }, 1000);
        
    }, 1500);
}

// Toggle language
function toggleLanguage() {
    const newLang = currentLang === 'sq' ? 'en' : 'sq';
    setLanguage(newLang);
}

// Set language
function setLanguage(lang) {
    if (lang === currentLang) return;
    
    currentLang = lang;
    localStorage.setItem('azalea-lang', lang);
    updateLanguageDisplay();
    translatePage();
}

// Update language display in toggle
function updateLanguageDisplay() {
    const langCodes = document.querySelectorAll('.lang-code');
    langCodes.forEach(code => {
        if (code.dataset.lang === currentLang) {
            code.classList.add('active');
        } else {
            code.classList.remove('active');
        }
    });
}

// Translate the entire page
function translatePage() {
    // Get all elements with data-key attribute
    const translatableElements = document.querySelectorAll('[data-key]');
    
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            if (element.tagName === 'INPUT' && element.type !== 'submit') {
                element.placeholder = translations[currentLang][key];
            } else if (element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
}

// Open blog modal
function openBlogModal(articleId) {
    const article = blogArticles[articleId];
    if (!article) return;
    
    // Populate modal with article data
    elements.modalTitle.textContent = article.title;
    elements.modalCategory.textContent = translations[currentLang][`blog_category_${article.category.toLowerCase().replace(' ', '_')}`] || article.category;
    elements.modalDate.textContent = article.date;
    elements.modalBody.innerHTML = article.content;
    elements.modalImageText.textContent = article.imageText;
    
    // Show modal
    elements.blogModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close blog modal
function closeBlogModal() {
    elements.blogModalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Handle newsletter form submission
function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const email = elements.newsletterEmail.value;
    const agreeCheckbox = document.getElementById('newsletterAgree');
    
    if (!agreeCheckbox.checked) {
        showFormMessage(elements.newsletterMessage, 'Please agree to receive emails.', 'error');
        return;
    }
    
    if (validateEmail(email)) {
        showFormMessage(elements.newsletterMessage, translations[currentLang].newsletter_success, 'success');
        elements.newsletterForm.reset();
        
        // Reset message after 5 seconds
        setTimeout(() => {
            elements.newsletterMessage.textContent = '';
            elements.newsletterMessage.className = 'form-message';
        }, 5000);
    } else {
        showFormMessage(elements.newsletterMessage, translations[currentLang].newsletter_error, 'error');
    }
}

// Handle contact form submission
function handleContactSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    
    // Validate form
    let isValid = true;
    
    // Name validation
    const nameError = document.getElementById('nameError');
    if (!name.trim()) {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }
    
    // Email validation
    const emailError = document.getElementById('emailError');
    if (!email.trim()) {
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }
    
    // Message validation
    const messageError = document.getElementById('messageError');
    if (!message.trim()) {
        messageError.textContent = 'Message is required';
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }
    
    if (isValid) {
        // Show success message
        showFormMessage(elements.contactMessageSuccess, translations[currentLang].contact_success, 'success');
        elements.contactForm.reset();
        
        // Reset message after 5 seconds
        setTimeout(() => {
            elements.contactMessageSuccess.textContent = '';
            elements.contactMessageSuccess.className = 'form-message';
        }, 5000);
    }
}

// Validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show form message
function showFormMessage(element, message, type) {
    element.textContent = message;
    element.className = `form-message ${type}`;
    element.style.display = 'block';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav ul");

menuToggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.alignItems = "center";
});
// Kur klikon në hamburger
hamburger.addEventListener('click', () => {
    // Këto dy rreshta aktivizojnë menunë mobile
    mainNav.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Krijo overlay për mbylljen e menusë
    let overlay = document.querySelector('.nav-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }
    overlay.classList.toggle('active');
    
    // Mbylle menunë kur klikon overlay
    overlay.addEventListener('click', () => {
        mainNav.classList.remove('active');
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
    });
});
// Shto këtë në JavaScript për efekte shtesë
document.addEventListener('DOMContentLoaded', function() {
    // Logo animation on scroll
    const logoLink = document.querySelector('.logo-link');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            logoLink.style.transform = 'scale(0.95)';
        } else {
            logoLink.style.transform = 'scale(1)';
        }
    });
    
    // Click effect on logo
    logoLink.addEventListener('click', function(e) {
        // Krijo një efekt valë
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(90, 140, 90, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            top: ${y}px;
            left: ${x}px;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const staticNav = document.getElementById('staticNav');
const navOverlay = document.getElementById('navOverlay');

if (hamburger && staticNav) {
    hamburger.addEventListener('click', () => {
        staticNav.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        if (navOverlay) {
            navOverlay.classList.toggle('active');
            
            // Mbylle menu kur klikohet overlay
            navOverlay.addEventListener('click', () => {
                staticNav.classList.remove('active');
                hamburger.classList.remove('active');
                navOverlay.classList.remove('active');
            });
        }
    });
    
    // Mbylle menu kur klikon një link
    document.querySelectorAll('.static-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                staticNav.classList.remove('active');
                hamburger.classList.remove('active');
                if (navOverlay) navOverlay.classList.remove('active');
            }
        });
    });
    
    // Mbylle menu kur ndryshon madhësia e dritares
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            staticNav.classList.remove('active');
            hamburger.classList.remove('active');
            if (navOverlay) navOverlay.classList.remove('active');
        }
    });
}
// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = contactForm.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Reset errors
        clearErrors();
        hideStatus();
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        // Show loading state
        setLoadingState(true);
        
        try {
            // Prepare form data
            const formData = new FormData(this);
            
            // Send to Formspree
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Success
                showSuccess('✅ Mesazhi u dërgua me sukses! Do t\'ju përgjigjemi brenda 24 orëve.');
                contactForm.reset();
            } else {
                // Formspree error
                showError('❌ Gabim gjatë dërgimit. Ju lutem provoni përsëri.');
            }
        } catch (error) {
            // Network error
            showError('❌ Problem me lidhjen. Ju lutem kontrolloni internetin.');
        } finally {
            // Reset loading state
            setLoadingState(false);
        }
    });
    
    // Validation function
    function validateForm() {
        let isValid = true;
        
        // Name validation
        const name = document.getElementById('name').value.trim();
        if (!name) {
            showErrorField('nameError', 'Emri është i detyrueshëm');
            isValid = false;
        } else if (name.length < 2) {
            showErrorField('nameError', 'Emri duhet të ketë të paktën 2 shkronja');
            isValid = false;
        }
        
        // Email validation
        const email = document.getElementById('email').value.trim();
        if (!email) {
            showErrorField('emailError', 'Email-i është i detyrueshëm');
            isValid = false;
        } else if (!validateEmail(email)) {
            showErrorField('emailError', 'Email-i nuk është valid');
            isValid = false;
        }
        
        // Subject validation
        const subject = document.getElementById('subject').value.trim();
        if (!subject) {
            showErrorField('subjectError', 'Subjekti është i detyrueshëm');
            isValid = false;
        }
        
        // Message validation
        const message = document.getElementById('message').value.trim();
        if (!message) {
            showErrorField('messageError', 'Mesazhi është i detyrueshëm');
            isValid = false;
        } else if (message.length < 10) {
            showErrorField('messageError', 'Mesazhi duhet të ketë të paktën 10 karaktere');
            isValid = false;
        }
        
        // Privacy checkbox validation
        const privacy = document.getElementById('privacy');
        if (!privacy.checked) {
            showErrorField('privacyError', 'Ju duhet të pranoni politikën e privatësisë');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Helper functions
    function showErrorField(elementId, message) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = message;
            element.style.display = 'block';
        }
    }
    
    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
            el.style.display = 'none';
        });
    }
    
    function setLoadingState(isLoading) {
        if (isLoading) {
            submitBtn.disabled = true;
            btnText.textContent = 'Po dërgohet...';
            submitBtn.querySelector('i').className = 'fas fa-spinner fa-spin';
            showStatus('loading', '⏳ Po dërgohet mesazhi...');
        } else {
            submitBtn.disabled = false;
            btnText.textContent = 'Dërgo mesazhin';
            submitBtn.querySelector('i').className = 'fas fa-paper-plane';
        }
    }
    
    document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    const heroPicture = document.querySelector('picture');
    const heroImageSrc = document.getElementById('heroImageSrc');
    
    // Shto klasën loading fillimisht
    heroSection.classList.add('loading');
    
    if (heroPicture && heroImageSrc) {
        // Gjej source-in e duhur bazuar në viewport
        let sourceUrl = 'foto_homepage_website.jpg'; // Default
        
        // Kontrollo për mobile
        if (window.innerWidth <= 768) {
            const mobileSource = heroPicture.querySelector('source[media*="max-width"]');
            if (mobileSource && mobileSource.getAttribute('srcset')) {
                sourceUrl = mobileSource.getAttribute('srcset');
            }
        }
        
        // Kontrollo për retina display
        if (window.devicePixelRatio >= 2) {
            const retinaSource = heroPicture.querySelector('source[media*="resolution"]');
            if (retinaSource && retinaSource.getAttribute('srcset')) {
                sourceUrl = retinaSource.getAttribute('srcset');
            }
        }
        
        // Krijo një objekt Image për të parë-loaduar foton
        const heroImage = new Image();
        heroImage.src = sourceUrl;
        
        // Kur foto ngarkohet
        heroImage.onload = function() {
            // Fshi klasën loading dhe shto loaded
            heroSection.classList.remove('loading');
            heroSection.classList.add('loaded');
            
            // Shto background image në CSS
            heroSection.style.backgroundImage = `linear-gradient(
                rgba(44, 85, 48, 0.2),
                rgba(255, 255, 255, 0.1)
            ), url('${sourceUrl}')`;
            
            console.log('Hero image loaded successfully:', sourceUrl);
        };
        
        // Nëse ka gabim
        heroImage.onerror = function() {
            console.warn('Failed to load hero image, using fallback gradient');
            heroSection.classList.remove('loading');
            heroSection.classList.add('loaded');
            
            // Përdor gradient fallback
            heroSection.style.backgroundImage = 'linear-gradient(135deg, #F7EFE5, #E1F0DA, #C8DFC8)';
            heroSection.style.backgroundAttachment = 'scroll';
        };
    } else {
        // Fallback nëse nuk ka <picture> element
        console.warn('No picture element found, using default image loading');
        const heroImage = new Image();
        heroImage.src = 'foto_homepage_website.jpg';
        
        heroImage.onload = function() {
            heroSection.classList.remove('loading');
            heroSection.classList.add('loaded');
            heroSection.style.backgroundImage = `linear-gradient(
                rgba(44, 85, 48, 0.2),
                rgba(255, 255, 255, 0.1)
            ), url('foto_homepage_website.jpg')`;
        };
        
        heroImage.onerror = function() {
            heroSection.classList.remove('loading');
            heroSection.classList.add('loaded');
            heroSection.style.backgroundImage = 'linear-gradient(135deg, #F7EFE5, #E1F0DA, #C8DFC8)';
        };
    }
    
    // Smooth scroll për butonat dhe anchor links
    document.querySelectorAll('a[href^="#"], .hero-scroll').forEach(element => {
        if (element.classList.contains('hero-scroll')) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                const aboutSection = document.querySelector('#about');
                if (aboutSection) {
                    window.scrollTo({
                        top: aboutSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        } else {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#' || !targetId) return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.querySelector('header')?.offsetHeight || 80;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = targetPosition - headerHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL hash
                    history.pushState(null, null, targetId);
                }
            });
        }
    });
});
const mainNav = document.getElementById('mainNav');
    // Toggle menu mobile - KORRIGJUAR
    const hamburger = document.getElementById('hamburger');
    const staticNav = document.getElementById('staticNav');
    const navLinks = document.querySelectorAll('.static-nav-link');
    const navOverlay = document.getElementById('navOverlay');
    
    hamburger.addEventListener('click', () => {
        staticNav.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Aktivizo/Deaktivizo overlay
        if (navOverlay) {
            navOverlay.classList.toggle('active');
        }
        
        // Parandalo scroll kur menu është hapur
        if (staticNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Mbylle menunë kur klikohet overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', () => {
            staticNav.classList.remove('active');
            hamburger.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Mbylle menunë kur klikohet një link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                staticNav.classList.remove('active');
                hamburger.classList.remove('active');
                
                if (navOverlay) {
                    navOverlay.classList.remove('active');
                }
                
                document.body.style.overflow = '';
            }
            
            // Active state për link-et
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Logo click kthen në home
    document.querySelector('.logo-link').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = '#home';
        
        // Scroll në fillim nëse je në home
        if (window.location.hash === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Seto home si active
        navLinks.forEach(item => item.classList.remove('active'));
        document.querySelector('a[href="#home"]').classList.add('active');
        
        // Mbylle menunë mobile nëse është hapur
        if (window.innerWidth <= 768) {
            staticNav.classList.remove('active');
            hamburger.classList.remove('active');
            if (navOverlay) navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Rregullim për resize të window
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            staticNav.classList.remove('active');
            hamburger.classList.remove('active');
            if (navOverlay) navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    // ===== LANGUAGE SWITCHER - WORKING VERSION =====

// Current language
let currentLang = 'sq';

// Initialize language on page load
function initLanguage() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('azalea-lang');
    if (savedLang && (savedLang === 'sq' || savedLang === 'en')) {
        currentLang = savedLang;
    }
    
    updateLanguageDisplay();
    translatePage();
    
    // Set up click events for language toggle
    const langToggle = document.getElementById('langToggle');
    const langCodes = document.querySelectorAll('.lang-code');
    
    if (langToggle) {
        langToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleLanguage();
        });
    }
    
    // Also add click event to individual language codes
    langCodes.forEach(code => {
        code.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            if (lang && (lang === 'sq' || lang === 'en')) {
                setLanguage(lang);
            }
        });
    });
}

// Toggle between AL and EN
function toggleLanguage() {
    const newLang = currentLang === 'sq' ? 'en' : 'sq';
    setLanguage(newLang);
}

// Set specific language
function setLanguage(lang) {
    if (lang === currentLang) return;
    
    currentLang = lang;
    localStorage.setItem('azalea-lang', lang);
    updateLanguageDisplay();
    translatePage();
    
    console.log('Language changed to:', lang);
}

// Update active state in language toggle
function updateLanguageDisplay() {
    const langCodes = document.querySelectorAll('.lang-code');
    langCodes.forEach(code => {
        code.classList.remove('active');
        if (code.getAttribute('data-lang') === currentLang) {
            code.classList.add('active');
        }
    });
}

// Translate all elements with data-key attribute
function translatePage() {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        
        // Check if translation exists
        if (translations[currentLang] && translations[currentLang][key]) {
            const translation = translations[currentLang][key];
            
            // Handle different element types
            if (element.tagName === 'INPUT') {
                if (element.type !== 'submit' && element.type !== 'button') {
                    element.placeholder = translation;
                }
            } else if (element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.tagName === 'BUTTON' || element.classList.contains('btn')) {
                // Handle buttons
                if (element.querySelector('.btn-text')) {
                    element.querySelector('.btn-text').textContent = translation;
                } else {
                    element.textContent = translation;
                }
            } else {
                // Regular text elements
                element.textContent = translation;
            }
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initLanguage);
// ===== HAMBURGER MENU - WORKING VERSION =====

function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const staticNav = document.getElementById('staticNav');
    const navOverlay = document.getElementById('navOverlay');
    const navLinks = document.querySelectorAll('.static-nav-link');
    
    if (!hamburger || !staticNav) {
        console.error('Hamburger or nav elements not found');
        return;
    }
    
    console.log('Hamburger menu initialized');
    
    // Toggle menu function
    function toggleMenu() {
        const isActive = staticNav.classList.contains('active');
        
        if (isActive) {
            // Close menu
            staticNav.classList.remove('active');
            hamburger.classList.remove('active');
            if (navOverlay) navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            // Open menu
            staticNav.classList.add('active');
            hamburger.classList.add('active');
            if (navOverlay) navOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Close menu function
    function closeMenu() {
        staticNav.classList.remove('active');
        hamburger.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Hamburger click event - FIXED
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });
    
    // Close menu when clicking overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', function(e) {
            e.preventDefault();
            closeMenu();
        });
    }
    
    // Close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
            
            // Update active state
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && staticNav.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Close menu when resizing to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && staticNav.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Close menu when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            staticNav.classList.contains('active') &&
            !staticNav.contains(e.target) && 
            !hamburger.contains(e.target) &&
            (!navOverlay || !navOverlay.contains(e.target))) {
            closeMenu();
        }
    });
}

// Initialize hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    initHamburgerMenu();
});
