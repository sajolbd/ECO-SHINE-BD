export interface SubService {
  slug: string;
  title: string;
  image: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  process: string[];
}

export interface ServiceCategory {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  featuredImage: string;
  bgImage: string;
  services: SubService[];
}

export const servicesData: ServiceCategory[] = [
  {
    "slug": "renovation-upgrading",
    "title": "Renovation & Upgrading",
    "shortDescription": "We help homeowners and property owners achieve beautiful, practical spaces through professional renovation solutions built on trust, precision, and proven expertise.",
    "description": "We help homeowners and property owners achieve beautiful, practical spaces through professional renovation solutions built on trust, precision, and proven expertise.",
    "featuredImage": "/images/services/renovation.png",
    "bgImage": "/images/layout/services-bg.png",
    "services": [
      {
        "slug": "home-renovation",
        "title": "Home Renovation",
        "image": "/images/services/sub_home_reno.png",
        "description": "Create a home that reflects your lifestyle with UA Engineering's professional Home Renovation Services in Singapore. We specialise in renovating HDB flats, condominiums, and landed homes by improving layouts, maximising usable space, and upgrading interiors for better comfort and functionality.",
        "longDescription": "Create a home that reflects your lifestyle with UA Engineering's professional Home Renovation Services in Singapore. We specialise in renovating HDB flats, condominiums, and landed homes by improving layouts, maximising usable space, and upgrading interiors for better comfort and functionality. Whether you're renovating an ageing property or preparing a newly purchased home, our experienced team delivers practical renovation solutions with quality workmanship, efficient project coordination, and compliance with Singapore renovation guidelines.",
        "features": [
          "Complete Home Renovation Planning",
          "Space Reconfiguration",
          "Wall Hacking & Masonry Works",
          "Room Reconfiguration",
          "Demolition Works",
          "Built-in Carpentry Installation"
        ],
        "benefits": [
          "Complete renovation solutions managed under one experienced project team.",
          "Quality workmanship using durable materials and proven installation methods.",
          "Transparent project planning with clear timelines and regular progress updates.",
          "Professional renovations completed in accordance with Singapore renovation requirements."
        ],
        "process": [
          "Consultation: Discuss renovation goals, budget, and project requirements.",
          "Site Survey: Measure the property and assess existing conditions.",
          "Planning: Prepare layouts, material selections, and project schedule.",
          "Renovation Works: Carry out demolition, installation, and finishing works.",
          "Quality Inspection: Inspect workmanship and complete all necessary touch-ups.",
          "Project Handover: Final walkthrough, site cleaning, and customer handover."
        ]
      },
      {
        "slug": "kitchen-renovation",
        "title": "Kitchen Renovation",
        "image": "/images/services/sub_kitchen_reno.png",
        "description": "Transform your cooking space with UA Engineering's professional Kitchen Renovation Services in Singapore. We design and renovate functional kitchens for HDB flats, condominiums, and landed homes, combining smart layouts with quality materials and efficient storage solutions.",
        "longDescription": "Transform your cooking space with UA Engineering's professional Kitchen Renovation Services in Singapore. We design and renovate functional kitchens for HDB flats, condominiums, and landed homes, combining smart layouts with quality materials and efficient storage solutions. From cabinet replacement and countertop installation to tiling and plumbing coordination, we deliver practical kitchen renovations that improve workflow, maximise space, and enhance everyday living.",
        "features": [
          "Kitchen Layout Planning",
          "Custom Kitchen Cabinet Installation",
          "Quartz & Solid Surface Countertops",
          "Kitchen Wall & Floor Tiling",
          "Sink & Plumbing Coordination",
          "Storage Optimisation Solutions"
        ],
        "benefits": [
          "Practical kitchen layouts designed for everyday cooking and storage.",
          "Quality cabinetry with durable hardware and premium finishes.",
          "Experienced project coordination for smooth renovation progress.",
          "Tailored solutions for HDB, condo, and landed properties."
        ],
        "process": [
          "Consultation: Discuss kitchen layout, storage, and lifestyle requirements.",
          "Site Measurement: Measure the kitchen and assess renovation requirements.",
          "Design Planning: Confirm cabinet layout, materials, and countertop selection.",
          "Renovation Works: Install cabinets, countertops, tiling, and plumbing fixtures.",
          "Finishing: Complete adjustments, detailing, and final fittings.",
          "Handover: Inspect completed work and hand over your new kitchen."
        ]
      },
      {
        "slug": "room-beautification",
        "title": "Room Beautification",
        "image": "/images/services/sub_room_beautification.png",
        "description": "Enhance the comfort and appearance of your home with UA Engineering's Room Beautification Services in Singapore. We upgrade bedrooms, living rooms, and study spaces through customised interior enhancements, decorative finishes, space optimisation, and quality built-in features.",
        "longDescription": "Enhance the comfort and appearance of your home with UA Engineering's Room Beautification Services in Singapore. We upgrade bedrooms, living rooms, and study spaces through customised interior enhancements, decorative finishes, space optimisation, and quality built-in features. Every project is designed to create a welcoming environment that reflects your lifestyle while improving functionality and visual appeal.",
        "features": [
          "Interior Space Enhancement",
          "Decorative Feature Walls",
          "Built-in Wardrobes & Storage",
          "Ceiling Design Improvements",
          "Decorative Wall Panel Installation",
          "Interior Finishing Coordination"
        ],
        "benefits": [
          "Personalised room designs tailored to your lifestyle.",
          "Modern finishes that enhance comfort and aesthetics.",
          "Quality craftsmanship with attention to every detail.",
          "Efficient renovation with minimal disruption."
        ],
        "process": [
          "Consultation: Understand your design preferences and room requirements.",
          "Site Assessment: Evaluate room dimensions and existing conditions.",
          "Design Selection: Confirm finishes, materials, and renovation scope.",
          "Installation: Carry out enhancement works with precision.",
          "Final Detailing: Complete finishing touches and quality checks.",
          "Project Completion: Clean the area and hand over the completed space."
        ]
      },
      {
        "slug": "open-plan-spaces",
        "title": "Create Open Plan Spaces (C&R Works)",
        "image": "/images/services/sub_open_plan.png",
        "description": "Create brighter and more spacious interiors with UA Engineering's C&R (Construction & Reconstruction) Services in Singapore. We perform professional wall removal, structural modifications, and space reconfiguration to improve flow and maximise usable living areas.",
        "longDescription": "Create brighter and more spacious interiors with UA Engineering's C&R (Construction & Reconstruction) Services in Singapore. We perform professional wall removal, structural modifications, and space reconfiguration to improve flow and maximise usable living areas. Every project is carefully planned and executed in compliance with HDB and Singapore building regulations.",
        "features": [
          "Site Assessment & Structural Review",
          "Non-Load Bearing Wall Removal",
          "Masonry & Reconstruction Works",
          "Space Reconfiguration",
          "HDB/BCA Compliance Coordination",
          "Site Restoration & Finishing"
        ],
        "benefits": [
          "Safe structural modifications following Singapore regulations.",
          "Professional planning before any alteration begins.",
          "Experienced masonry and reconstruction specialists.",
          "Neat execution with careful quality supervision."
        ],
        "process": [
          "Site Inspection: Assess structural conditions and project feasibility.",
          "Planning: Prepare renovation scope and compliance requirements.",
          "Approval: Coordinate necessary renovation approvals where required.",
          "Construction Works: Carry out demolition and reconstruction safely.",
          "Site Restoration: Complete masonry finishing and clean the work area.",
          "Final Inspection: Inspect completed works before project handover."
        ]
      },
      {
        "slug": "floor-renovation",
        "title": "Floor Renovation & Polishing",
        "image": "/images/services/sub_floor_reno.png",
        "description": "Restore the beauty and durability of your floors with UA Engineering's professional Floor Renovation & Polishing Services in Singapore. We repair, replace, and polish a wide range of flooring materials to improve appearance, safety, and long-term performance.",
        "longDescription": "Restore the beauty and durability of your floors with UA Engineering's professional Floor Renovation & Polishing Services in Singapore. We repair, replace, and polish a wide range of flooring materials to improve appearance, safety, and long-term performance for residential and commercial properties.",
        "features": [
          "Floor Surface Assessment",
          "Tile Replacement & Repairs",
          "Vinyl Flooring Installation",
          "Marble & Homogeneous Tile Polishing",
          "Floor Levelling",
          "Protective Surface Finishing"
        ],
        "benefits": [
          "Professional flooring solutions for lasting durability.",
          "Smooth, level finishes with quality workmanship.",
          "Suitable for residential and commercial properties.",
          "Reliable project scheduling and clean execution."
        ],
        "process": [
          "Inspection: Assess floor condition and identify repair requirements.",
          "Surface Preparation: Remove damaged flooring and prepare the substrate.",
          "Material Selection: Confirm flooring materials and finish options.",
          "Installation: Install or restore flooring with precision.",
          "Polishing: Polish and protect completed floor surfaces.",
          "Handover: Perform final inspection and site cleaning."
        ]
      },
      {
        "slug": "decking-work",
        "title": "Decking Work",
        "image": "/images/services/sub_decking.png",
        "description": "Upgrade your outdoor living areas with UA Engineering's professional Decking Installation Services in Singapore. We design and install durable timber and composite decking for balconies, patios, gardens, and outdoor spaces.",
        "longDescription": "Upgrade your outdoor living areas with UA Engineering's professional Decking Installation Services in Singapore. We design and install durable timber and composite decking for balconies, patios, gardens, and outdoor spaces that combine functionality, safety, and long-lasting performance in Singapore's tropical climate.",
        "features": [
          "Timber Deck Installation",
          "Composite Decking Systems",
          "Balcony & Patio Decking",
          "Outdoor Flooring Solutions",
          "Anti-Slip Deck Finishes",
          "Deck Repair & Replacement"
        ],
        "benefits": [
          "Weather-resistant decking designed for Singapore conditions.",
          "Quality materials with durable construction.",
          "Custom decking layouts to suit your outdoor space.",
          "Professional installation with precise workmanship."
        ],
        "process": [
          "Consultation: Review outdoor space and decking requirements.",
          "Site Measurement: Measure the installation area accurately.",
          "Material Selection: Choose decking materials and finishing options.",
          "Installation: Install decking framework and deck boards.",
          "Finishing: Complete trimming and final detailing.",
          "Project Handover: Inspect the completed deck and hand over the project."
        ]
      },
      {
        "slug": "decorative-wall-panels",
        "title": "Decorative Wall Panels",
        "image": "/images/services/sub_room_beautification.png",
        "description": "Enhance your interiors with UA Engineering's Decorative Wall Panel Installation Services in Singapore. We install stylish wall panel systems that add texture, depth, and character to living rooms, bedrooms, offices, and commercial interiors.",
        "longDescription": "Enhance your interiors with UA Engineering's Decorative Wall Panel Installation Services in Singapore. We install stylish wall panel systems that add texture, depth, and character to living rooms, bedrooms, offices, and commercial interiors. Our solutions combine modern design with quality workmanship to create elegant feature walls that are durable and easy to maintain.",
        "features": [
          "PVC Wall Panel Installation",
          "Fluted Wall Panels",
          "WPC Decorative Panels",
          "Feature Wall Design",
          "Custom Panel Layouts",
          "Finishing & Edge Trimming"
        ],
        "benefits": [
          "Wide selection of modern decorative panel designs.",
          "Precise installation with seamless finishing.",
          "Durable materials that require minimal maintenance.",
          "Professional workmanship for premium interior aesthetics."
        ],
        "process": [
          "Consultation: Discuss design preferences and installation locations.",
          "Site Measurement: Measure wall dimensions and assess surface conditions.",
          "Design Confirmation: Select panel type, layout, and finishing details.",
          "Installation: Install decorative panels accurately and securely.",
          "Finishing: Complete edge trimming and final detailing.",
          "Handover: Inspect completed work and hand over the finished feature wall."
        ]
      }
    ]
  },
  {
    "slug": "structural-exterior-works",
    "title": "Complete Structural & Exterior Works Singapore",
    "shortDescription": "UA ENGINEERING provides professional structural and exterior works for homes and businesses in Singapore. Our skilled team delivers steel fabrication, roof extensions, gates, grills, balcony shelters, and awnings built for durability.",
    "description": "UA ENGINEERING provides professional structural and exterior works for homes and businesses in Singapore. Our skilled team delivers steel fabrication, roof extensions, gates, grills, balcony shelters, and awnings built for durability.",
    "featuredImage": "/images/services/structural.png",
    "bgImage": "/images/layout/projects-bg.png",
    "services": [
      {
        "slug": "steel-work",
        "title": "All Kinds of Steel Work",
        "image": "/images/services/sub_steel_work.png",
        "description": "UA ENGINEERING provides custom steel fabrication and installation services for HDB flats, condominiums, landed homes, and commercial properties across Singapore. We fabricate and install steel support structures, custom frames, platforms, brackets, railings, and other metal components tailored to your property's requirements. Our team combines precise fabrication, quality materials, and professional installation to deliver durable steel solutions built for safety, functionality, and long-term performance.",
        "longDescription": "UA ENGINEERING provides custom steel fabrication and installation services for HDB flats, condominiums, landed homes, and commercial properties across Singapore. We fabricate and install steel support structures, custom frames, platforms, brackets, railings, and other metal components tailored to your property's requirements. Our team combines precise fabrication, quality materials, and professional installation to deliver durable steel solutions built for safety, functionality, and long-term performance.",
        "features": [
          "Custom Steel Fabrication",
          "Structural Steel Support Frames",
          "Steel Platforms & Access Structures",
          "Mild Steel & Stainless Steel Works",
          "Metal Brackets & Base Plates",
          "Custom Steel Railings",
          "Precision Cutting & Welding",
          "On-Site Steel Installation",
          "Protective Anti-Rust Finishes",
          "Steel Repair & Modification Works"
        ],
        "benefits": [
          "Made-to-Measure Steel Fabrication: Every steel component is fabricated according to actual site measurements for accurate fitting and a professional finish.",
          "Built for Singapore's Environment: We recommend suitable materials and protective coatings to improve durability in Singapore's humid and rainy conditions.",
          "Experienced Fabrication Team: Our skilled team performs fabrication and installation with attention to structural stability, workmanship, and safety.",
          "Reliable Project Coordination: From site assessment to final installation, we maintain clear communication and organised project management."
        ],
        "process": [
          "Site Assessment: We inspect the installation area, take measurements, and understand your project's structural and functional requirements.",
          "Planning & Quotation: We propose suitable steel solutions, material specifications, and provide a clear project quotation.",
          "Steel Fabrication: Steel components are cut, welded, assembled, and prepared according to the approved design requirements.",
          "Surface Finishing: Protective coatings and finishing treatments are applied where required to enhance durability and appearance.",
          "Installation: Our team installs and secures all steel components with careful alignment and professional workmanship.",
          "Inspection & Handover: Completed works are checked for quality, finishing, and functionality before final project handover."
        ]
      },
      {
        "slug": "gate-grill-work",
        "title": "Main Gate & Grill Work",
        "image": "/images/services/sub_gate_grill.png",
        "description": "UA ENGINEERING provides custom main gate and grill fabrication services for HDB flats, condominiums, landed homes, and commercial properties across Singapore. Whether you're replacing an existing gate, installing a new entrance gate, or upgrading window and door grills, we fabricate each product to suit your property's dimensions and design preferences. Our team focuses on quality workmanship, secure installation, and durable materials to improve property security while complementing the overall appearance of your home or business.",
        "longDescription": "UA ENGINEERING provides custom main gate and grill fabrication services for HDB flats, condominiums, landed homes, and commercial properties across Singapore. Whether you're replacing an existing gate, installing a new entrance gate, or upgrading window and door grills, we fabricate each product to suit your property's dimensions and design preferences. Our team focuses on quality workmanship, secure installation, and durable materials to improve property security while complementing the overall appearance of your home or business.",
        "features": [
          "Mild Steel Main Gates",
          "Stainless Steel Gates",
          "Decorative Metal Grills",
          "Window & Door Grill Installation",
          "Side Gate Fabrication",
          "Laser-Cut Gate Designs",
          "Sliding & Swing Gates",
          "Custom Metal Fencing",
          "Rust-Resistant Protective Finishes",
          "Gate Repair & Replacement"
        ],
        "benefits": [
          "Custom-Made for Your Property: Every gate and grill is fabricated based on actual site measurements for a precise fit and professional appearance.",
          "Built for Daily Security: We fabricate strong steel gates and grills that provide reliable protection without compromising accessibility or aesthetics.",
          "Quality Finishing: Protective coatings and neat finishing help improve durability while maintaining a clean and modern appearance.",
          "Professional Installation: Our installers ensure gates and grills are properly aligned, securely fixed, and operate smoothly after installation."
        ],
        "process": [
          "Site Measurement: We inspect the installation area, discuss your design preferences, and take accurate measurements.",
          "Design & Quotation: We recommend suitable materials, gate styles, and provide a transparent quotation.",
          "Fabrication: Your gate or grill is fabricated using quality steel according to the approved specifications.",
          "Surface Finishing: Protective finishes and coatings are applied to improve durability and appearance.",
          "Installation: Our team installs and aligns the gate or grill securely while ensuring smooth operation.",
          "Final Inspection: We check alignment, locking mechanisms, finishing quality, and complete the project handover."
        ]
      },
      {
        "slug": "balcony-shelter",
        "title": "Balcony Shelter Work",
        "image": "/images/services/sub_balcony_shelter.png",
        "description": "UA ENGINEERING designs and installs balcony shelters that provide practical weather protection while enhancing the comfort and usability of outdoor living spaces. Our balcony shelter solutions are suitable for HDB executive apartments (where permitted), condominiums, landed homes, and commercial premises. We use quality structural materials and roofing systems to create shelters that blend with your property's exterior while helping protect against Singapore's sun and frequent rainfall.",
        "longDescription": "UA ENGINEERING designs and installs balcony shelters that provide practical weather protection while enhancing the comfort and usability of outdoor living spaces. Our balcony shelter solutions are suitable for HDB executive apartments (where permitted), condominiums, landed homes, and commercial premises. We use quality structural materials and roofing systems to create shelters that blend with your property's exterior while helping protect against Singapore's sun and frequent rainfall.",
        "features": [
          "Polycarbonate Balcony Shelters",
          "Aluminium Support Structures",
          "Metal Frame Fabrication",
          "Balcony Canopy Installation",
          "UV-Resistant Roofing Panels",
          "Rain Protection Systems",
          "Custom Shelter Designs",
          "Shelter Replacement Works",
          "Waterproof Flashing Installation",
          "Structural Support Installation"
        ],
        "benefits": [
          "Customised Shelter Design: Each balcony shelter is designed to complement your property's layout and functional requirements.",
          "Durable Roofing Materials: We recommend suitable roofing materials that provide reliable weather protection and long-term durability.",
          "Professional Workmanship: Our installation team ensures proper structural support, secure fixing, and neat finishing.",
          "Practical Outdoor Solutions: Our balcony shelters help create more comfortable outdoor spaces for everyday use."
        ],
        "process": [
          "Site Assessment: We inspect the balcony area and assess suitable shelter options.",
          "Design Consultation: Material options, colours, and structural requirements are discussed.",
          "Fabrication: Support frames and shelter components are fabricated according to site measurements.",
          "Material Preparation: Roofing panels and structural components are prepared before installation.",
          "Installation: The shelter is securely installed with careful alignment and finishing.",
          "Inspection & Handover: Completed works are checked before final project completion."
        ]
      },
      {
        "slug": "roof-extension",
        "title": "Roof Extension & Solutions",
        "image": "/images/services/sub_roof_extension.png",
        "description": "UA ENGINEERING provides customised roof extension solutions for landed homes and commercial properties across Singapore. Whether you need additional covered space for a car porch, outdoor seating area, side walkway, or backyard, our team fabricates and installs durable roof structures designed to suit your property's layout. We focus on practical designs, quality materials, and professional installation to improve protection from Singapore's weather while maintaining a clean and well-integrated appearance.",
        "longDescription": "UA ENGINEERING provides customised roof extension solutions for landed homes and commercial properties across Singapore. Whether you need additional covered space for a car porch, outdoor seating area, side walkway, or backyard, our team fabricates and installs durable roof structures designed to suit your property's layout. We focus on practical designs, quality materials, and professional installation to improve protection from Singapore's weather while maintaining a clean and well-integrated appearance.",
        "features": [
          "Car Porch Roof Extensions",
          "Side Walkway Roof Covers",
          "Backyard Roof Extensions",
          "Metal Roof Structures",
          "Polycarbonate Roofing",
          "Aluminium Roofing Systems",
          "Steel Roof Support Frames",
          "Roof Replacement Works",
          "Roof Structure Repairs",
          "Custom Roof Fabrication"
        ],
        "benefits": [
          "Tailored Roof Designs: Every roof extension is designed to maximise usable covered space while complementing your property's architecture.",
          "Quality Structural Materials: We use suitable roofing systems and structural supports for reliable long-term performance.",
          "Built for Singapore's Climate: Our roof solutions are selected to provide effective protection from sun and heavy rainfall.",
          "Professional Project Execution: We maintain organised installation practices with attention to workmanship and finishing."
        ],
        "process": [
          "Site Visit: We assess your existing roof and discuss extension requirements.",
          "Design Proposal: Roof layout, materials, and structural details are finalised.",
          "Fabrication: Roof support structures are fabricated according to approved dimensions.",
          "Material Preparation: Roofing sheets, flashings, and accessories are prepared.",
          "Installation: Structural frames and roofing materials are professionally installed.",
          "Quality Inspection: The completed roof extension is inspected before handover."
        ]
      },
      {
        "slug": "awning-shelter",
        "title": "Awning Shelter Fabrication & Installation",
        "image": "/images/services/sub_awning.png",
        "description": "UA ENGINEERING fabricates and installs customised awning shelters for residential and commercial properties throughout Singapore. Our awnings provide practical shade and weather protection for entrances, windows, patios, shopfronts, and outdoor areas. Every awning is manufactured according to your property's dimensions and installed with careful attention to structural stability, functionality, and overall appearance.",
        "longDescription": "UA ENGINEERING fabricates and installs customised awning shelters for residential and commercial properties throughout Singapore. Our awnings provide practical shade and weather protection for entrances, windows, patios, shopfronts, and outdoor areas. Every awning is manufactured according to your property's dimensions and installed with careful attention to structural stability, functionality, and overall appearance.",
        "features": [
          "Residential Awning Installation",
          "Commercial Shopfront Awnings",
          "Entrance Shelter Systems",
          "Window Awnings",
          "Patio & Outdoor Shelters",
          "Polycarbonate Awnings",
          "Aluminium Awning Frames",
          "Steel Awning Fabrication",
          "Awning Replacement Works",
          "Custom Shelter Installation"
        ],
        "benefits": [
          "Made-to-Measure Awnings: Every awning is fabricated to suit your property's size, usage, and exterior design.",
          "Reliable Weather Protection: Our awning systems help reduce direct sunlight and provide shelter during rainy weather.",
          "Strong Supporting Structures: Quality framing and secure installation contribute to the stability and durability of every awning.",
          "Clean Installation & Finishing: We complete installations with careful alignment, neat workmanship, and attention to detail."
        ],
        "process": [
          "Site Consultation: We assess the installation area and discuss your shelter requirements.",
          "Material Selection: Suitable awning materials, frame types, and colours are recommended.",
          "Custom Fabrication: The awning frame and roofing components are fabricated to the required dimensions.",
          "Pre-Installation Preparation: Materials and fittings are prepared for efficient on-site installation.",
          "Installation: Our team securely installs the awning and checks alignment, fixing points, and structural stability.",
          "Final Inspection & Handover: We complete a final quality inspection and ensure the awning is ready for everyday use."
        ]
      }
    ]
  },
  {
    "slug": "painting-waterproofing",
    "title": "Professional Painting & Waterproofing",
    "shortDescription": "UA ENGINEERING provides expert painting and waterproofing solutions in Singapore, delivering durable finishes, leak protection, and reliable solutions for homes, offices, and commercial properties.",
    "description": "UA ENGINEERING provides expert painting and waterproofing solutions in Singapore, delivering durable finishes, leak protection, and reliable solutions for homes, offices, and commercial properties.",
    "featuredImage": "/images/services/painting.png",
    "bgImage": "/images/layout/breadcrumb-bg.png",
    "services": [
      {
        "slug": "painting-services",
        "title": "Painting Services",
        "image": "/images/services/sub_painting.jpg",
        "description": "Refresh and protect your property with UA Engineering's professional Painting Services in Singapore. We provide interior and exterior painting for HDB flats, condominiums, landed houses, offices, and commercial properties. Our process includes thorough surface preparation, crack repairs, priming, and premium paint application to achieve smooth, durable, and long-lasting finishes that withstand Singapore's humid climate.",
        "longDescription": "Refresh and protect your property with UA Engineering's professional Painting Services in Singapore. We provide interior and exterior painting for HDB flats, condominiums, landed houses, offices, and commercial properties. Our process includes thorough surface preparation, crack repairs, priming, and premium paint application to achieve smooth, durable, and long-lasting finishes that withstand Singapore's humid climate.",
        "features": [
          "Interior Wall & Ceiling Painting",
          "Exterior Wall & Facade Painting",
          "Repainting for Homes & Commercial Properties",
          "Skim Coating, Wall Crack Repair & Surface Patching",
          "Low-VOC & Odour-Less Paint Systems",
          "Door, Metal Gate & Railing Painting",
          "Protective Primers & Premium Top Coats",
          "Final Touch-Up & Site Cleaning"
        ],
        "benefits": [
          "Comprehensive surface preparation for smoother, longer-lasting paint finishes.",
          "Premium quality paints from trusted brands for excellent durability and colour retention.",
          "Clean, efficient workmanship with minimal disruption to your home or business.",
          "Experienced painters delivering reliable results with attention to every detail."
        ],
        "process": [
          "Site Inspection: Assess wall condition, cracks, moisture, and painting requirements.",
          "Surface Preparation: Protect surrounding areas, repair cracks, sand surfaces, and apply primer.",
          "Colour Confirmation: Confirm paint colours, finishes, and project scope before application.",
          "Paint Application: Apply premium paint systems using professional techniques for even coverage.",
          "Final Touch-Up: Inspect painted surfaces, complete touch-ups, and remove protective coverings.",
          "Quality Handover: Conduct final inspection, site cleaning, and customer handover."
        ]
      },
      {
        "slug": "waterproofing-solutions",
        "title": "Waterproofing Solutions",
        "image": "/images/services/sub_waterproofing.png",
        "description": "Protect your property from water seepage, roof leaks, ceiling leaks, and damp walls with UA Engineering's professional Waterproofing Solutions in Singapore. We provide effective waterproofing for roofs, bathrooms, balconies, external walls, and concrete surfaces using proven waterproofing systems that deliver long-term protection against Singapore's heavy rainfall and humidity.",
        "longDescription": "Protect your property from water seepage, roof leaks, ceiling leaks, and damp walls with UA Engineering's professional Waterproofing Solutions in Singapore. We provide effective waterproofing for roofs, bathrooms, balconies, external walls, and concrete surfaces using proven waterproofing systems that deliver long-term protection against Singapore's heavy rainfall and humidity.",
        "features": [
          "Roof Waterproofing Systems",
          "Bathroom & Toilet Waterproofing",
          "Balcony & Terrace Waterproofing",
          "External Wall Waterproof Coating",
          "Ceiling Leak & Water Seepage Repair",
          "PU Injection for Crack Sealing",
          "Waterproof Membrane & Protective Coatings",
          "Leak Testing & Final Quality Inspection"
        ],
        "benefits": [
          "Accurate leak detection to identify the root cause before repairs begin.",
          "High-performance waterproofing systems designed for Singapore's tropical climate.",
          "Durable solutions that help prevent recurring leaks and costly repairs.",
          "Skilled waterproofing specialists delivering dependable workmanship and lasting protection."
        ],
        "process": [
          "Site Assessment: Inspect leak sources, moisture levels, cracks, and affected surfaces.",
          "Surface Preparation: Clean the area, remove damaged materials, and prepare surfaces for treatment.",
          "System Selection: Recommend the most suitable waterproofing method based on site conditions.",
          "Waterproofing Application: Apply membranes, PU injection, sealants, or waterproof coatings professionally.",
          "Testing & Inspection: Carry out water testing and verify complete waterproof protection.",
          "Project Handover: Perform final quality checks, clean the site, and provide maintenance guidance."
        ]
      }
    ]
  },
  {
    "slug": "aluminium-glazing-works",
    "title": "Professional Aluminium & Glazing Works",
    "shortDescription": "UA Engineering provides professional aluminium and glass solutions designed to enhance durability, natural lighting, security, and architectural appeal with expert craftsmanship and reliable installation services throughout Singapore.",
    "description": "UA Engineering provides professional aluminium and glass solutions designed to enhance durability, natural lighting, security, and architectural appeal with expert craftsmanship and reliable installation services throughout Singapore.",
    "featuredImage": "/images/services/aluminium.png",
    "bgImage": "/images/layout/about-bg.png",
    "services": [
      {
        "slug": "aluminium-glass",
        "title": "Aluminium & Glass Installation & Repair",
        "image": "/images/services/sub_aluminium_glass.png",
        "description": "UA Engineering provides professional aluminium and glass installation and repair services for residential, commercial, and industrial properties throughout Singapore. We install aluminium windows, sliding and swing doors, glass partitions, shopfront glazing, shower screens, and customised glazing systems using premium aluminium profiles and high-quality tempered or laminated safety glass. Our repair services address damaged glass panels, worn hardware, faulty rollers, misaligned frames, and deteriorated sealants, restoring both safety and smooth operation while maintaining a clean, modern appearance.",
        "longDescription": "UA Engineering provides professional aluminium and glass installation and repair services for residential, commercial, and industrial properties throughout Singapore. We install aluminium windows, sliding and swing doors, glass partitions, shopfront glazing, shower screens, and customised glazing systems using premium aluminium profiles and high-quality tempered or laminated safety glass. Our repair services address damaged glass panels, worn hardware, faulty rollers, misaligned frames, and deteriorated sealants, restoring both safety and smooth operation while maintaining a clean, modern appearance.",
        "features": [
          "Aluminium Windows & Doors",
          "Sliding & Folding Door Systems",
          "Glass Partitions & Shopfronts",
          "Tempered & Laminated Glass Installation",
          "Glass Replacement & Repairs",
          "Aluminium Frame Repairs",
          "Door Roller & Hinge Replacement",
          "Silicone Sealing & Waterproofing"
        ],
        "benefits": [
          "Precision measurements for accurate fitting.",
          "Premium aluminium and safety glass solutions.",
          "Skilled installation with quality workmanship.",
          "Reliable repair and replacement services."
        ],
        "process": [
          "Site Inspection: Assess existing conditions and take detailed measurements.",
          "Material Preparation: Fabricate aluminium frames and prepare glass components.",
          "Surface Preparation: Remove existing components and prepare installation areas.",
          "Installation: Install frames, glazing systems, and essential hardware.",
          "Sealing & Adjustment: Apply sealants and adjust moving components.",
          "Final Inspection: Conduct operational testing and quality assurance checks."
        ]
      },
      {
        "slug": "skylight-installation",
        "title": "Skylight Installation",
        "image": "/images/services/sub_skylight.png",
        "description": "Bring more natural daylight into your property with professionally installed skylight systems from UA Engineering. We install fixed and ventilated skylights for residential, commercial, and industrial buildings, helping improve interior brightness, ventilation, and overall architectural appeal. Every installation includes careful structural assessment, weatherproof flashing, and precision sealing to deliver reliable long-term performance in Singapore's climate.",
        "longDescription": "Bring more natural daylight into your property with professionally installed skylight systems from UA Engineering. We install fixed and ventilated skylights for residential, commercial, and industrial buildings, helping improve interior brightness, ventilation, and overall architectural appeal. Every installation includes careful structural assessment, weatherproof flashing, and precision sealing to deliver reliable long-term performance in Singapore's climate.",
        "features": [
          "Fixed Skylight Installation",
          "Ventilated Skylight Systems",
          "Glass Skylights",
          "Polycarbonate Skylights",
          "Roof Opening Preparation",
          "Waterproof Flashing Installation",
          "Skylight Replacement",
          "Leak Repair & Resealing"
        ],
        "benefits": [
          "Professional waterproof installation techniques.",
          "Durable weather-resistant skylight systems.",
          "Quality sealing for long-term protection.",
          "Clean and precise installation workmanship."
        ],
        "process": [
          "Roof Assessment: Inspect roof structure and determine installation location.",
          "Design & Planning: Confirm skylight dimensions and material specifications.",
          "Opening Preparation: Prepare roof opening and supporting framework.",
          "Skylight Installation: Install skylight with secure structural fixing.",
          "Waterproof Sealing: Apply flashing and weather-resistant sealants.",
          "Quality Inspection: Verify waterproofing, alignment, and overall finish."
        ]
      },
      {
        "slug": "mosquito-net",
        "title": "Mosquito Net Installation",
        "image": "/images/services/sub_mosquito_net.png",
        "description": "UA Engineering supplies and installs custom-fit mosquito net systems that provide effective insect protection without restricting natural airflow or outdoor views. Our solutions are suitable for windows, doors, balconies, and ventilation openings, with options including sliding, magnetic, retractable, and fixed-frame systems. Every installation is accurately measured to ensure a secure fit, smooth operation, and long-lasting performance.",
        "longDescription": "UA Engineering supplies and installs custom-fit mosquito net systems that provide effective insect protection without restricting natural airflow or outdoor views. Our solutions are suitable for windows, doors, balconies, and ventilation openings, with options including sliding, magnetic, retractable, and fixed-frame systems. Every installation is accurately measured to ensure a secure fit, smooth operation, and long-lasting performance.",
        "features": [
          "Window Mosquito Nets",
          "Door Mosquito Screens",
          "Sliding Mesh Systems",
          "Retractable Mosquito Nets",
          "Magnetic Screen Installation",
          "Fixed Frame Mesh Systems",
          "Custom Mesh Fabrication",
          "Replacement & Repair Services"
        ],
        "benefits": [
          "Custom-made solutions for every opening.",
          "Durable mesh with smooth operation.",
          "Neat installation with precise fitting.",
          "Low-maintenance insect protection systems."
        ],
        "process": [
          "Site Measurement: Measure windows and doors for accurate fabrication.",
          "Custom Fabrication: Manufacture frames and mesh to required dimensions.",
          "Installation Preparation: Prepare fixing points and installation surfaces.",
          "System Installation: Install mesh systems with secure fittings.",
          "Functional Adjustment: Check sliding, magnetic, or retractable operation.",
          "Final Inspection: Verify fitting quality and smooth daily use."
        ]
      },
      {
        "slug": "glass-films",
        "title": "Glass Protection Films",
        "image": "/images/services/sub_glass_films.png",
        "description": "UA Engineering provides professional glass protection film installation services for residential and commercial properties across Singapore. We install high-performance solar control films, safety films, privacy films, decorative films, and UV protection films for windows, glass doors, office partitions, and shopfront glazing. Our quality window films help reduce solar heat, minimise UV exposure, improve indoor privacy, and protect glass surfaces from scratches and accidental impacts. Every installation is completed with precise application techniques and premium-grade film materials to achieve a smooth, bubble-free finish and long-lasting performance.",
        "longDescription": "UA Engineering provides professional glass protection film installation services for residential and commercial properties across Singapore. We install high-performance solar control films, safety films, privacy films, decorative films, and UV protection films for windows, glass doors, office partitions, and shopfront glazing. Our quality window films help reduce solar heat, minimise UV exposure, improve indoor privacy, and protect glass surfaces from scratches and accidental impacts. Every installation is completed with precise application techniques and premium-grade film materials to achieve a smooth, bubble-free finish and long-lasting performance.",
        "features": [
          "Solar Control Film Installation",
          "UV Protection Window Films",
          "Privacy & Frosted Films",
          "Safety & Security Films",
          "Decorative Glass Films",
          "Office Glass Film Application",
          "Shopfront Window Films",
          "Bubble-Free Film Installation"
        ],
        "benefits": [
          "Professional surface preparation for a clean, seamless, and bubble-free film application.",
          "Premium-quality window films designed for lasting durability and reliable performance.",
          "Precise installation that enhances privacy, comfort, and the appearance of glass surfaces.",
          "Careful workmanship with thorough quality checks for a flawless finished result."
        ],
        "process": [
          "Site Assessment: Inspect glass surfaces, discuss requirements, and recommend the most suitable film solution.",
          "Surface Preparation: Clean and prepare the glass thoroughly to ensure maximum film adhesion.",
          "Film Measurement: Measure and precision-cut the film to suit each glass panel accurately.",
          "Film Installation: Apply the selected film using professional techniques for a smooth, bubble-free finish.",
          "Finishing: Trim edges, remove excess moisture, and ensure proper alignment across all panels.",
          "Final Inspection: Inspect the completed installation and verify overall finish, adhesion, and appearance."
        ]
      },
      {
        "slug": "zip-blinds",
        "title": "Zip Blind & All Types of Blind Fabrication & Installation",
        "image": "/images/services/sub_zip_blinds.png",
        "description": "UA Engineering designs, fabricates, and installs customised blind systems for indoor and outdoor applications across Singapore. Our solutions include zip blinds, roller blinds, Venetian blinds, Roman blinds, vertical blinds, zebra blinds, blackout blinds, and motorised systems. Designed to improve privacy, reduce glare, and enhance thermal comfort, every blind is manufactured to suit the dimensions and functional requirements of your property while delivering a clean, contemporary finish.",
        "longDescription": "UA Engineering designs, fabricates, and installs customised blind systems for indoor and outdoor applications across Singapore. Our solutions include zip blinds, roller blinds, Venetian blinds, Roman blinds, vertical blinds, zebra blinds, blackout blinds, and motorised systems. Designed to improve privacy, reduce glare, and enhance thermal comfort, every blind is manufactured to suit the dimensions and functional requirements of your property while delivering a clean, contemporary finish.",
        "features": [
          "Zip Blind Systems",
          "Roller Blind Installation",
          "Venetian Blinds",
          "Roman Blinds",
          "Zebra Blinds",
          "Vertical Blind Systems",
          "Motorised Blind Installation",
          "Blind Repair & Replacement"
        ],
        "benefits": [
          "Custom fabrication for precise installation.",
          "Wide range of blind system options.",
          "Professional installation with quality finishes.",
          "Durable solutions for indoor and outdoor spaces."
        ],
        "process": [
          "Consultation: Assess space, dimensions, and shading requirements.",
          "Material Selection: Select suitable blind fabric, hardware, and operating system.",
          "Custom Fabrication: Manufacture blinds according to approved specifications.",
          "Professional Installation: Install brackets, tracks, and blind systems securely.",
          "System Adjustment: Fine-tune alignment and operating mechanisms.",
          "Final Handover: Inspect operation, demonstrate usage, and complete project handover."
        ]
      }
    ]
  },
  {
    "slug": "electrical-plumbing-aircon",
    "title": "Professional Electrical Plumbing & Aircon Solutions",
    "shortDescription": "Expert electrical, plumbing, and aircon services ensuring safe, efficient, reliable building systems across Singapore properties.",
    "description": "Expert electrical, plumbing, and aircon services ensuring safe, efficient, reliable building systems across Singapore properties.",
    "featuredImage": "/images/services/mep.png",
    "bgImage": "/images/layout/blog-bg.png",
    "services": [
      {
        "slug": "electrical-lighting",
        "title": "Electrical & Lighting Work",
        "image": "/images/services/sub_electrical.png",
        "description": "UA Engineering provides professional electrical and lighting solutions for residential and commercial properties across Singapore. Our services include electrical wiring, lighting installations, power point additions, distribution board upgrades, ceiling fan installations, and electrical fault troubleshooting. Every project is completed with careful planning, quality materials, and thorough testing to ensure reliable performance, operational safety, and long-term dependability.",
        "longDescription": "UA Engineering provides professional electrical and lighting solutions for residential and commercial properties across Singapore. Our services include electrical wiring, lighting installations, power point additions, distribution board upgrades, ceiling fan installations, and electrical fault troubleshooting. Every project is completed with careful planning, quality materials, and thorough testing to ensure reliable performance, operational safety, and long-term dependability.",
        "features": [
          "Electrical Wiring & Rewiring",
          "Distribution Board (DB) Upgrades",
          "Power Socket Installation",
          "Indoor & Outdoor Lighting Installation",
          "Ceiling Fan Installation",
          "Circuit Fault Diagnosis & Repairs",
          "Switch & Socket Replacement",
          "Electrical Maintenance Services"
        ],
        "benefits": [
          "Safe electrical installations with careful cable routing and quality workmanship.",
          "Reliable electrical solutions for residential and commercial properties.",
          "Professional fault diagnosis to restore electrical systems efficiently.",
          "Thorough testing to verify safe operation before project completion."
        ],
        "process": [
          "Site Assessment: Inspect electrical systems, identify requirements, and determine installation or repair scope.",
          "Planning: Prepare wiring routes, electrical points, and equipment layout for efficient installation.",
          "Installation: Install wiring, switches, sockets, lighting fixtures, and electrical components.",
          "System Integration: Connect circuits, distribution boards, and protective electrical devices.",
          "Testing: Perform electrical testing, circuit verification, and functional inspections.",
          "Project Handover: Confirm system performance and complete final inspection with the client."
        ]
      },
      {
        "slug": "plumbing-services",
        "title": "Plumbing Services",
        "image": "/images/services/sub_plumbing.png",
        "description": "UA Engineering delivers dependable plumbing solutions for residential and commercial properties, covering water supply systems, sanitary fittings, drainage repairs, and pipe installations. Whether repairing leaks, replacing damaged pipes, or installing new plumbing fixtures, our team focuses on efficient water flow, reliable performance, and quality workmanship to keep your plumbing system operating smoothly.",
        "longDescription": "UA Engineering delivers dependable plumbing solutions for residential and commercial properties, covering water supply systems, sanitary fittings, drainage repairs, and pipe installations. Whether repairing leaks, replacing damaged pipes, or installing new plumbing fixtures, our team focuses on efficient water flow, reliable performance, and quality workmanship to keep your plumbing system operating smoothly.",
        "features": [
          "Water Pipe Installation",
          "Leak Detection & Repairs",
          "Toilet & Basin Installation",
          "Tap & Mixer Replacement",
          "Drainage Pipe Repairs",
          "Floor Trap Installation",
          "Water Heater Connections",
          "Plumbing Maintenance Services"
        ],
        "benefits": [
          "Accurate leak detection to minimise water loss and prevent property damage.",
          "Quality plumbing installations using durable fittings and pipe materials.",
          "Reliable repairs that restore efficient water supply and drainage performance.",
          "Careful workmanship with thorough testing before project completion."
        ],
        "process": [
          "Site Inspection: Assess plumbing conditions and identify faults or installation requirements.",
          "Planning: Determine pipe routing, fixture locations, and material requirements.",
          "Installation: Install water pipes, sanitary fixtures, valves, and plumbing accessories.",
          "Connection: Complete water supply, drainage, and fixture connections securely.",
          "Pressure Testing: Inspect joints, connections, and water flow for reliable performance.",
          "Final Handover: Verify proper operation and ensure the work area is clean before completion."
        ]
      },
      {
        "slug": "aircon-repair",
        "title": "Aircon Repair",
        "image": "/images/services/sub_aircon.jpg",
        "description": "UA Engineering provides professional air conditioning repair services to restore cooling performance, improve energy efficiency, and extend system lifespan. Our technicians diagnose faults accurately, repair malfunctioning components, resolve water leakage issues, and optimise overall system operation, helping maintain a comfortable indoor environment throughout the year.",
        "longDescription": "UA Engineering provides professional air conditioning repair services to restore cooling performance, improve energy efficiency, and extend system lifespan. Our technicians diagnose faults accurately, repair malfunctioning components, resolve water leakage issues, and optimise overall system operation, helping maintain a comfortable indoor environment throughout the year.",
        "features": [
          "Aircon Fault Diagnosis",
          "Cooling Performance Repairs",
          "Refrigerant Gas Top-Up",
          "Water Leakage Repairs",
          "Air Filter Cleaning",
          "Drain Pipe Cleaning",
          "Component Replacement",
          "Aircon Performance Testing"
        ],
        "benefits": [
          "Accurate fault diagnosis for faster and more effective repair solutions.",
          "Restore cooling efficiency with professional repair and system optimisation.",
          "Careful inspection of critical components to improve operational reliability.",
          "Performance testing to ensure stable cooling before service completion."
        ],
        "process": [
          "System Inspection: Examine indoor and outdoor units to identify operational faults.",
          "Fault Diagnosis: Assess cooling performance, electrical components, and refrigerant condition.",
          "Repair Works: Repair or replace faulty components and restore system functionality.",
          "System Servicing: Clean filters, drainage lines, and essential air conditioning components.",
          "Performance Testing: Verify cooling capacity, airflow, and overall system operation.",
          "Final Verification: Complete functional checks and confirm satisfactory system performance before handover."
        ]
      }
    ]
  },
  {
    "slug": "solar-panel-installation",
    "title": "Professional Solar Panel Installation",
    "shortDescription": "Professional solar panel installation service delivering clean, efficient renewable energy solutions for residential and commercial properties across Singapore.",
    "description": "Professional solar panel installation service delivering clean, efficient renewable energy solutions for residential and commercial properties across Singapore.",
    "featuredImage": "/images/services/solar.png",
    "bgImage": "/images/layout/contact-bg.png",
    "services": [
      {
        "slug": "solar-panel",
        "title": "Solar Panel Installation",
        "image": "/images/services/sub_solar.png",
        "description": "UA Engineering provides professional solar panel installation services for residential and commercial properties across Singapore. We deliver customised rooftop solar solutions designed to maximise available roof space and support efficient renewable energy generation. Our experienced team manages every stage of the installation process, including site assessment, roof suitability evaluation, solar panel layout planning, mounting structure installation, inverter installation, electrical cabling, and final system commissioning. Using quality solar components and proven installation practices, we ensure every system is installed with precision, safety, and long-term reliability in mind.",
        "longDescription": "UA Engineering provides professional solar panel installation services for residential and commercial properties across Singapore. We deliver customised rooftop solar solutions designed to maximise available roof space and support efficient renewable energy generation. Our experienced team manages every stage of the installation process, including site assessment, roof suitability evaluation, solar panel layout planning, mounting structure installation, inverter installation, electrical cabling, and final system commissioning. Using quality solar components and proven installation practices, we ensure every system is installed with precision, safety, and long-term reliability in mind.",
        "features": [
          "Rooftop Solar Assessment",
          "Custom Panel Layout Design",
          "Solar Panel Installation",
          "Inverter System Installation",
          "Mounting Structure Assembly",
          "Electrical System Integration",
          "Safety & Performance Testing",
          "Final System Commissioning"
        ],
        "benefits": [
          "Comprehensive Site Assessment: Every project begins with a detailed evaluation of roof condition, structural suitability, installation space, and sunlight exposure to achieve the most effective panel placement.",
          "Quality Components & Installation: We install reliable solar panels, durable mounting structures, and trusted electrical components using professional workmanship for dependable long-term performance.",
          "Precision Engineering: Every mounting system, cable route, and electrical connection is carefully planned and installed to promote system stability, weather resistance, and operational safety.",
          "End-to-End Project Management: From consultation and planning to installation, testing, and project handover, we coordinate every stage to deliver a smooth and efficient installation experience."
        ],
        "process": [
          "Site Assessment: Inspect roof condition, available installation area, structural suitability, and sunlight exposure to determine the optimal solar installation approach.",
          "System Planning: Prepare a customised solar panel layout, equipment selection, and installation plan based on your property's energy requirements.",
          "Installation Preparation: Arrange mounting structures, electrical materials, safety equipment, and installation logistics before on-site work begins.",
          "Solar Panel Installation: Install mounting rails, solar panels, inverters, and electrical cabling using professional installation methods and quality workmanship.",
          "System Integration: Complete electrical connections, configure the inverter, and integrate all system components for reliable operation.",
          "Testing & Handover: Conduct comprehensive system testing, verify operational performance, perform safety inspections, and complete the final client handover."
        ]
      }
    ]
  }
];
