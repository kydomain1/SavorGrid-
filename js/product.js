// Product page functionality
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (productId && window.SavorGrid) {
        loadProductContent(productId);
    } else {
        // Load default product if no ID specified
        loadProductContent(1);
    }
});

// Sample product data
const productsData = [
    {
        id: 1,
        name: "Apple AirPods Pro (2nd Generation)",
        category: "health",
        categoryName: "Health & Beauty",
        price: 249,
        originalPrice: 279,
        discount: "11% off",
        rating: 4.8,
        reviewCount: 12847,
        images: [
            "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=600&fit=crop&crop=center"
        ],
        summary: "The new AirPods Pro deliver exceptional sound quality with active noise cancellation, making them perfect for music lovers and professionals alike. With improved battery life and seamless Apple ecosystem integration.",
        description: "Apple's second-generation AirPods Pro represent a significant leap forward in wireless audio technology. These premium earbuds combine cutting-edge features with Apple's signature design philosophy.",
        pros: [
            "Excellent active noise cancellation",
            "Superior sound quality with Adaptive EQ",
            "Seamless integration with Apple devices",
            "Comfortable fit with multiple ear tip sizes",
            "Impressive battery life with MagSafe charging case",
            "Spatial Audio support"
        ],
        cons: [
            "Premium price point",
            "Limited customization options",
            "Best features require Apple ecosystem",
            "Touch controls can be accidentally triggered"
        ],
        specifications: {
            "Driver": "Custom high-excursion Apple driver",
            "Noise Cancellation": "Active Noise Cancellation with Transparency mode",
            "Battery Life": "Up to 6 hours (ANC on), 30 hours with case",
            "Connectivity": "Bluetooth 5.3, Apple H2 chip",
            "Water Resistance": "IPX4 sweat and water resistant",
            "Charging": "Lightning, MagSafe, Qi wireless charging",
            "Weight": "5.3g per earbud, 50.8g case",
            "Compatibility": "iOS 16+, iPadOS 16+, macOS Ventura+"
        },
        verdict: {
            score: 9.2,
            label: "Excellent",
            text: "The AirPods Pro (2nd Gen) set the gold standard for wireless earbuds in the Apple ecosystem. While the premium price may deter some users, the exceptional sound quality, industry-leading noise cancellation, and seamless integration make them a worthwhile investment for Apple users."
        }
    },
    {
        id: 2,
        name: "Dyson V15 Detect Absolute",
        category: "home",
        categoryName: "Home & Garden",
        price: 749,
        originalPrice: 799,
        discount: "6% off",
        rating: 4.6,
        reviewCount: 3421,
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=800&h=600&fit=crop&crop=center"
        ],
        summary: "The Dyson V15 Detect combines powerful suction with intelligent dust detection technology, making it one of the most advanced cordless vacuums available.",
        pros: [
            "Powerful suction with intelligent dust detection",
            "Laser reveals hidden dust particles",
            "Real-time particle count display",
            "Versatile attachments for all surfaces",
            "Long battery life with multiple power modes"
        ],
        cons: [
            "Heavy compared to other cordless models",
            "Expensive initial investment",
            "Small dustbin capacity",
            "Can be loud on maximum power"
        ],
        specifications: {
            "Suction Power": "230 Air Watts",
            "Battery Life": "Up to 60 minutes",
            "Dustbin Capacity": "0.77 liters",
            "Weight": "3.1 kg",
            "Filtration": "Advanced whole-machine filtration",
            "Attachments": "8 versatile tools included"
        },
        verdict: {
            score: 8.8,
            label: "Very Good",
            text: "The Dyson V15 Detect is a premium vacuum that delivers exceptional cleaning performance with innovative features that make dust visible and cleaning more effective."
        }
    },
    {
        id: 3,
        name: "Levi's 511 Slim Jeans",
        category: "fashion",
        categoryName: "Fashion & Accessories",
        price: 79,
        originalPrice: 98,
        discount: "19% off",
        rating: 4.4,
        reviewCount: 8765,
        images: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=600&fit=crop&crop=center"
        ],
        summary: "The classic Levi's 511 Slim jeans offer the perfect balance of comfort and style with a modern slim fit that works for any occasion.",
        pros: [
            "Timeless design and versatile styling",
            "Comfortable slim fit",
            "Durable denim construction",
            "Available in multiple washes",
            "Great value for premium denim"
        ],
        cons: [
            "May shrink slightly after washing",
            "Limited stretch in some washes",
            "Sizing can vary between different washes"
        ],
        specifications: {
            "Fit": "Slim through hip and thigh",
            "Material": "99% Cotton, 1% Elastane",
            "Rise": "Mid-rise",
            "Leg Opening": "14.5 inches",
            "Care": "Machine wash cold, tumble dry low"
        },
        verdict: {
            score: 8.5,
            label: "Very Good",
            text: "Levi's 511 Slim jeans remain a wardrobe staple for good reason. They offer classic styling, reliable quality, and versatile appeal at a reasonable price point."
        }
    },
    {
        id: 4,
        name: "StubHub Insider Access Pass",
        category: "travel",
        categoryName: "Travel & Accommodation",
        price: 49,
        originalPrice: 79,
        discount: "Save up to 38%",
        rating: 4.9,
        reviewCount: 2304,
        images: [
            "https://images.unsplash.com/photo-1462774603919-1d8087e62cad?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&h=600&fit=crop&crop=center"
        ],
        summary: "Annual membership that unlocks FanProtect concierge support, flexible resale windows, and priority alerts for high-demand games, concerts, and theater runs.",
        description: "Designed for frequent event-goers, the StubHub Insider Access Pass combines loyalty perks with real-time support. Members receive dedicated chat agents, early access to premium drops, and the ability to relist tickets fee-free up to three times per season.",
        pros: [
            "Concierge chat resolves delivery or seating issues in minutes",
            "Priority notification tier for newly released inventory",
            "Fee-free relisting credits reduce risk if plans change",
            "Bundled parking and merch upgrades in select markets",
            "FanProtect coverage escalates to live agents automatically"
        ],
        cons: [
            "Best value requires attending multiple events per year",
            "Currently limited to US, UK, and Canada accounts",
            "Parking bundles vary by venue partner",
            "Concierge hours shorten on low-volume days"
        ],
        specifications: {
            "Membership Length": "12 months from activation",
            "Support Channel": "24/7 in-app chat plus priority email",
            "Ticket Relist Credits": "3 fee-free relists per season",
            "Exclusive Drops": "48-hour head start on partner presales",
            "Delivery Coverage": "FanProtect guarantee + instant reissue",
            "Add-On Marketplace": "Parking, lounge, and merch bundles",
            "Regions": "United States, Canada, United Kingdom",
            "Devices": "iOS, Android, desktop web"
        },
        verdict: {
            score: 9.4,
            label: "Editor’s Pick",
            text: "StubHub Insider Access Pass is a cost-effective safety net for fans who travel for marquee events. The concierge support, alert speed, and flexible resale credits justify the membership after just two or three major outings."
        }
    },
    {
        id: 5,
        name: "Viagogo Global Access Toolkit",
        category: "travel",
        categoryName: "Travel & Accommodation",
        price: 59,
        originalPrice: 99,
        discount: "Save 40% this season",
        rating: 4.8,
        reviewCount: 1875,
        images: [
            "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=center"
        ],
        summary: "Annual toolkit built for Viagogo power users, bundling concierge messaging, exchange-rate protection, and emergency ticket replacement protocols.",
        description: "The Viagogo Global Access Toolkit is a membership add-on that centralizes multi-country ticket logistics. Members receive a dedicated support lane, fee-waived relist credits, and proactive delivery monitoring so international trips stay flexible.",
        pros: [
            "24/7 multilingual concierge chat within the Viagogo app",
            "Exchange-rate lock keeps totals predictable for 72 hours",
            "Fee-free relisting up to three times per event",
            "Proactive barcode health checks with instant reissues",
            "Travel bundle recommendations tied to each venue"
        ],
        cons: [
            "Requires Viagogo account in good standing",
            "Limited availability in some APAC markets",
            "Best savings realized by frequent travelers",
            "Concierge queue can lengthen on mega-event days"
        ],
        specifications: {
            "Membership Term": "12 months rolling",
            "Support Coverage": "24/7 chat + priority email",
            "Relist Credits": "Up to 6 per membership year",
            "Currency Protection": "Locks rates for 72 hours",
            "Delivery Monitoring": "Barcode scanning + courier tracking",
            "Regions Supported": "North America, Europe, LATAM, select APAC cities",
            "Device Access": "iOS, Android, desktop web",
            "Add-On Bundles": "Parking, hospitality, merch preorders"
        },
        verdict: {
            score: 9.1,
            label: "Great Value",
            text: "For travelers who lean on Viagogo to stitch multi-city tours together, the Global Access Toolkit pays for itself quickly through exchange-rate locks, relist credits, and white-glove troubleshooting."
        }
    }
];

function loadProductContent(productId) {
    const product = productsData.find(p => p.id === productId);
    
    if (!product) {
        showProductNotFound();
        return;
    }
    
    // Update page title and breadcrumb
    updateProductPageInfo(product);
    
    // Display product content
    displayProductContent(product);
    
    // Initialize product features
    initializeProductFeatures(product);
    
    // Load related products
    loadRelatedProducts(product);
}

function updateProductPageInfo(product) {
    // Update page title
    document.title = `${product.name} - SavorGrid`;
    document.getElementById('productTitle').textContent = `${product.name} - SavorGrid`;
    
    // Update breadcrumb
    document.getElementById('breadcrumbCategory').textContent = product.categoryName;
    document.getElementById('breadcrumbTitle').textContent = product.name;
}

function displayProductContent(product) {
    const productContent = document.getElementById('productContent');
    
    productContent.innerHTML = `
        <div class="product-header">
            <div class="product-images">
                <img src="${product.images[0]}" alt="${product.name}" class="product-main-image" id="mainImage">
                <div class="product-thumbnail-grid">
                    ${product.images.map((img, index) => `
                        <img src="${img}" alt="${product.name}" class="product-thumbnail ${index === 0 ? 'active' : ''}" 
                             onclick="changeMainImage('${img}', this)">
                    `).join('')}
                </div>
            </div>
            
            <div class="product-info">
                <div class="product-meta">
                    <a href="category.html?cat=${product.category}" class="product-category">${product.categoryName}</a>
                    <span class="review-date">Reviewed in ${new Date().getFullYear()}</span>
                </div>
                
                <h1 class="product-name">${product.name}</h1>
                
                <div class="product-rating-section">
                    <div class="product-stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-score">${product.rating}</span>
                    <span class="rating-count">(${product.reviewCount.toLocaleString()} reviews)</span>
                </div>
                
                <div class="product-price-section">
                    <div class="product-price">$${product.price}</div>
                    ${product.originalPrice ? `
                        <div class="price-comparison">
                            <span class="price-original">$${product.originalPrice}</span>
                            <span class="price-discount">${product.discount}</span>
                        </div>
                    ` : ''}
                    <div class="price-note">Price may vary by retailer</div>
                </div>
                
                <p class="product-summary">${product.summary}</p>
                
                <div class="product-actions">
                    <a href="#" class="btn-buy" onclick="trackPurchaseClick('${product.name}')">
                        <i class="fas fa-shopping-cart"></i>
                        Shop Now
                    </a>
                    <button class="btn-wishlist" onclick="toggleWishlist(${product.id})">
                        <i class="fas fa-heart"></i>
                        Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
        
        <div class="product-tabs">
            <div class="tab-navigation">
                <button class="tab-button active" onclick="showTab('review')">Review</button>
                <button class="tab-button" onclick="showTab('specs')">Specifications</button>
                <button class="tab-button" onclick="showTab('pros-cons')">Pros & Cons</button>
                <button class="tab-button" onclick="showTab('verdict')">Our Verdict</button>
            </div>
            
            <div class="tab-content active" id="review-tab">
                <div class="review-content">
                    <h3>Our Comprehensive Review</h3>
                    <p>${product.description}</p>
                    ${getDetailedReview(product)}
                </div>
            </div>
            
            <div class="tab-content" id="specs-tab">
                <h3>Technical Specifications</h3>
                <table class="specs-table">
                    ${Object.entries(product.specifications).map(([key, value]) => `
                        <tr>
                            <th>${key}</th>
                            <td>${value}</td>
                        </tr>
                    `).join('')}
                </table>
            </div>
            
            <div class="tab-content" id="pros-cons-tab">
                <div class="pros-cons-section">
                    <div class="pros-section">
                        <h4><i class="fas fa-check-circle"></i> Pros</h4>
                        <ul>
                            ${product.pros.map(pro => `<li>${pro}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="cons-section">
                        <h4><i class="fas fa-times-circle"></i> Cons</h4>
                        <ul>
                            ${product.cons.map(con => `<li>${con}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="tab-content" id="verdict-tab">
                <div class="verdict-section">
                    <div class="verdict-score">${product.verdict.score}/10</div>
                    <div class="verdict-label">${product.verdict.label}</div>
                    <p class="verdict-text">${product.verdict.text}</p>
                </div>
            </div>
        </div>
    `;
    
    // Add fade-in animation
    setTimeout(() => {
        productContent.classList.add('fade-in');
    }, 100);
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star star"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt star"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star star empty"></i>';
    }
    
    return starsHTML;
}

function getDetailedReview(product) {
    // Generate detailed review content based on product category
    const reviewContent = {
        1: `
            <h4>Design and Build Quality</h4>
            <p>Apple has refined the design of the AirPods Pro with subtle but meaningful improvements. The charging case feels more premium with its precise magnetic closure, and the earbuds themselves maintain the iconic AirPods aesthetic while offering better ergonomics.</p>
            
            <h4>Sound Quality and Performance</h4>
            <p>The custom-designed drivers deliver remarkably clear audio across all frequencies. The Adaptive EQ automatically tunes the music to your ear shape, creating a personalized listening experience that rivals much more expensive audiophile headphones.</p>
            
            <h4>Active Noise Cancellation</h4>
            <p>The ANC performance is truly industry-leading. Whether you're on a noisy commute or trying to focus in a busy office, the AirPods Pro effectively eliminate ambient noise while maintaining audio clarity. The Transparency mode is equally impressive, allowing natural sound to pass through when needed.</p>
            
            <h4>Battery Life and Charging</h4>
            <p>With up to 6 hours of listening time with ANC enabled and 30 hours total with the charging case, the AirPods Pro offer excellent battery performance. The MagSafe charging case adds convenience, and the quick charge feature provides hours of use with just minutes of charging.</p>
        `,
        2: `
            <h4>Cleaning Performance</h4>
            <p>The Dyson V15 Detect's powerful digital motor V11 generates impressive suction that effectively removes dirt, dust, and debris from various surfaces. The laser dust detection feature is genuinely useful, revealing particles that would otherwise go unnoticed.</p>
            
            <h4>Innovative Features</h4>
            <p>The piezo sensor automatically detects and counts dust particles, displaying the information on the LCD screen. This real-time feedback makes cleaning more engaging and ensures thorough results. The automatic power adjustment based on debris levels optimizes battery life.</p>
            
            <h4>Versatility and Attachments</h4>
            <p>The comprehensive set of attachments makes the V15 suitable for every cleaning task. From the soft roller cleaner head for hard floors to the high torque cleaner head for carpets, each tool is engineered for specific purposes and delivers excellent results.</p>
            
            <h4>Usability</h4>
            <p>Despite its advanced features, the V15 remains user-friendly. The point-and-shoot hygienic bin emptying system is particularly appreciated, allowing you to dispose of collected debris without touching it.</p>
        `,
        3: `
            <h4>Fit and Comfort</h4>
            <p>The 511 Slim offers a modern fit that's neither too tight nor too loose. The slim cut through the hip and thigh creates a contemporary silhouette that works well for various body types. The mid-rise design provides comfortable coverage without being restrictive.</p>
            
            <h4>Quality and Construction</h4>
            <p>Levi's legendary craftsmanship is evident in every detail. The reinforced stress points, quality stitching, and durable denim ensure these jeans will withstand regular wear and maintain their shape over time. The classic five-pocket design remains both functional and stylish.</p>
            
            <h4>Versatility</h4>
            <p>These jeans transition seamlessly from casual to semi-formal settings. Pair them with sneakers and a t-shirt for a relaxed look, or dress them up with a button-down shirt and boots for a more polished appearance.</p>
            
            <h4>Value Proposition</h4>
            <p>At this price point, the 511 Slim jeans offer excellent value. You're getting authentic Levi's quality and style at a reasonable cost, making them accessible to a wide range of consumers who appreciate classic American denim.</p>
        `,
        4: `
            <h4>Onboarding and Interface</h4>
            <p>Activating the Insider Access Pass takes less than two minutes in the StubHub app. Once live, a dedicated dashboard tracks upcoming events, delivery statuses, and concierge conversations. The interface also highlights limited-time drops so you can jump into a queue without refreshing multiple tabs.</p>
            
            <h4>Concierge Support</h4>
            <p>Members gain 24/7 chat support with agents who can reroute mobile tickets, swap delivery methods, or reissue QR codes if travel plans change. During sellout nights, the concierge team prioritizes Insider Access Pass holders, shaving crucial minutes off the time it takes to salvage a disrupted entry.</p>
            
            <h4>Flexible Resale Credits</h4>
            <p>The biggest perk is the trio of fee-free relist credits. If friends bail or weather shifts, you can repost seats at market price without absorbing additional seller fees. The platform highlights optimal pricing bands and alerts you when similar listings move, keeping your resale competitive.</p>
            
            <h4>Value for Frequent Fans</h4>
            <p>After two premium events, the membership pays for itself through waived fees and bundled add-ons like lounge access or parking vouchers. Travelers who hop between cities appreciate the proactive notifications that flag venue policy changes before boarding a flight.</p>
        `,
        5: `
            <h4>International Setup</h4>
            <p>Enrollment happens inside the Viagogo account dashboard, where the Global Access Toolkit layers a planning pane onto your existing orders. The onboarding wizard prompts you to store traveler IDs, preferred currencies, and delivery preferences so support agents can intervene without repeat questions.</p>
            
            <h4>Concierge & Monitoring</h4>
            <p>Toolkit members gain a dedicated chat lane staffed by multilingual agents who can coordinate courier pickups, update venue will-call lists, or resend QR codes moments after a disruption. Behind the scenes, Viagogo scans barcodes every few hours and flags anomalies before you reach an arena.</p>
            
            <h4>Financial Safeguards</h4>
            <p>The exchange-rate lock is the sleeper feature: you can shop across three currencies while Viagogo holds the best available rate for 72 hours, making it easier to assemble multi-leg trips. Fee-free relist credits help you offload seats when plans pivot, and the toolkit suggests market-aligned pricing bands to accelerate sales.</p>
            
            <h4>Travel Bundles</h4>
            <p>Because the add-on syncs with Viagogo’s travel partners, you receive curated parking, hospitality, and merch bundles that match each venue’s policies. The recommendations update dynamically as more data flows in, ensuring you only see options that fit your ticket tier.</p>
        `
    };
    
    return reviewContent[product.id] || `
        <h4>Performance</h4>
        <p>This product delivers solid performance across all key metrics, meeting and often exceeding expectations in its category.</p>
        
        <h4>Value</h4>
        <p>Considering the features, quality, and price point, this product offers good value for consumers looking for reliable performance.</p>
    `;
}

function changeMainImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.product-thumbnail');
    
    // Update main image
    mainImage.src = imageSrc;
    
    // Update active thumbnail
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

function showTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

function trackPurchaseClick(productName) {
    // Track purchase intent (analytics)
    console.log(`Purchase click tracked for: ${productName}`);
    
    // In a real implementation, this would redirect to retailer or affiliate link
    alert('This would redirect to the retailer website in a real implementation.');
}

function toggleWishlist(productId) {
    const btn = event.target.closest('.btn-wishlist');
    const icon = btn.querySelector('i');
    
    // Toggle wishlist state
    if (icon.classList.contains('fas')) {
        icon.classList.remove('fas');
        icon.classList.add('far');
        btn.innerHTML = '<i class="far fa-heart"></i> Add to Wishlist';
        console.log(`Removed product ${productId} from wishlist`);
    } else {
        icon.classList.remove('far');
        icon.classList.add('fas');
        btn.innerHTML = '<i class="fas fa-heart"></i> In Wishlist';
        console.log(`Added product ${productId} to wishlist`);
    }
}

function loadRelatedProducts(currentProduct) {
    const relatedContainer = document.getElementById('relatedProducts');
    
    // Find related products (same category, excluding current product)
    const relatedProducts = productsData
        .filter(product => 
            product.category === currentProduct.category && 
            product.id !== currentProduct.id
        )
        .slice(0, 3); // Limit to 3 related products
    
    if (relatedProducts.length > 0) {
        relatedContainer.innerHTML = relatedProducts.map(product => `
            <a href="product.html?id=${product.id}" class="related-product-card fade-in">
                <img src="${product.images[0]}" alt="${product.name}" class="related-product-image" loading="lazy">
                <div class="related-product-info">
                    <h4 class="related-product-name">${product.name}</h4>
                    <div class="related-product-price">$${product.price}</div>
                    <div class="related-product-rating">
                        ${generateStars(product.rating)}
                        <span>${product.rating} (${product.reviewCount.toLocaleString()})</span>
                    </div>
                </div>
            </a>
        `).join('');
        
        // Add fade-in animation
        setTimeout(() => {
            relatedContainer.querySelectorAll('.related-product-card').forEach(card => {
                card.classList.add('fade-in');
            });
        }, 100);
    } else {
        relatedContainer.innerHTML = '<p>No related products found.</p>';
    }
}

function initializeProductFeatures(product) {
    // Initialize image gallery
    const thumbnails = document.querySelectorAll('.product-thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', function() {
            changeMainImage(product.images[index], this);
        });
    });
    
    // Initialize smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function showProductNotFound() {
    const productContent = document.getElementById('productContent');
    productContent.innerHTML = `
        <div class="product-not-found">
            <h2>Product Not Found</h2>
            <p>Sorry, the product you're looking for doesn't exist or may have been removed.</p>
            <a href="index.html" class="cta-button">Return to Home</a>
        </div>
    `;
}

// Make functions available globally
window.changeMainImage = changeMainImage;
window.showTab = showTab;
window.trackPurchaseClick = trackPurchaseClick;
window.toggleWishlist = toggleWishlist;
