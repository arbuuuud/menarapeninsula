const pptxgen = require('pptxgenjs');
const fs = require('fs');

async function createDeck() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9'; // 10 x 5.625 inches
  pres.author = 'JourneyOn Technology & Hospitality Solutions';
  pres.company = 'JourneyOn';
  pres.title = 'Next-Gen Web & AI Discovery - Menara Peninsula Hotel';

  // --- BRAND COLOR PALETTE ---
  const DARK_BG = '0A0E17';       // Deep Midnight Luxury Blue/Black
  const CARD_BG = '141C2B';       // Premium Navy Container
  const ACCENT_CARD = '1A2436';   // Slightly lighter navy
  const GOLD = 'D4AF37';          // Premium Champagne Gold
  const GOLD_LIGHT = 'E6CA65';    // Light Gold
  const TEXT_WHITE = 'FFFFFF';    // High Contrast White
  const TEXT_MUTED = '94A3B8';    // Slate Gray 400
  const TEXT_SUBTLE = '64748B';   // Slate Gray 500
  const BORDER_COLOR = '243247';  // Dark borders
  const GREEN_ACCENT = '10B981';  // Emerald Green for ROI

  // Helper function to set slide dark background & subtle branding
  function applyBaseSlide(slide, categoryTitle) {
    slide.background = { color: DARK_BG };

    // Top gold subtle accent line
    slide.addShape(pres.ShapeType.rect, {
      x: 0, y: 0, w: 10, h: 0.05,
      fill: { color: GOLD }, line: { color: GOLD }
    });

    // Header category tag if given
    if (categoryTitle) {
      slide.addText(categoryTitle.toUpperCase(), {
        x: 0.8, y: 0.35, w: 8.4, h: 0.25,
        fontSize: 10, bold: true, color: GOLD,
        charSpacing: 2, fontFace: 'Helvetica'
      });
    }

    // Bottom subtle footer
    slide.addText('JOURNEYON × MENARA PENINSULA HOTEL JAKARTA | CONFIDENTIAL', {
      x: 0.8, y: 5.25, w: 6.5, h: 0.25,
      fontSize: 8, color: TEXT_SUBTLE, fontFace: 'Helvetica'
    });
  }

  // ==========================================
  // SLIDE 1: COVER
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: DARK_BG };

    // Decorative geometric accents
    slide.addShape(pres.ShapeType.rect, {
      x: 0, y: 0, w: 0.15, h: 5.625,
      fill: { color: GOLD }, line: { color: GOLD }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: 0.8, y: 0.8, w: 2.8, h: 0.3,
      fill: { color: '1E293B' },
      line: { color: GOLD, width: 1 }
    });
    slide.addText('EXECUTIVE PROPOSAL', {
      x: 0.8, y: 0.8, w: 2.8, h: 0.3,
      fontSize: 9, bold: true, color: GOLD,
      align: 'center', charSpacing: 2, fontFace: 'Helvetica'
    });

    slide.addText('DOMINATING THE AI SEARCH &\nDIRECT BOOKING REVOLUTION', {
      x: 0.8, y: 1.35, w: 8.4, h: 1.4,
      fontSize: 32, bold: true, color: TEXT_WHITE,
      fontFace: 'Georgia', lineSpacingMultiple: 1.15
    });

    slide.addText('Strategic Next-Gen Website Development, Generative Engine Optimization (GEO)\n& AISO Architecture for Menara Peninsula Hotel Jakarta', {
      x: 0.8, y: 2.85, w: 8.4, h: 0.65,
      fontSize: 13, color: GOLD_LIGHT, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
    });

    // Divider line
    slide.addShape(pres.ShapeType.line, {
      x: 0.8, y: 3.65, w: 8.4, h: 0,
      line: { color: BORDER_COLOR, width: 1 }
    });

    // Metadata Columns
    slide.addText('TARGET AUDIENCE:\nBoard of Management\nGeneral Manager & DOSM', {
      x: 0.8, y: 3.85, w: 2.8, h: 0.8,
      fontSize: 10, color: TEXT_MUTED, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
    });

    slide.addText('PRESENTED BY:\nJourneyOn Technology &\nHospitality Solutions', {
      x: 3.8, y: 3.85, w: 2.8, h: 0.8,
      fontSize: 10, color: TEXT_MUTED, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
    });

    slide.addText('STRATEGIC FOCUS:\nDirect Room Bookings\nHigh-Ticket MICE & Weddings', {
      x: 6.8, y: 3.85, w: 2.4, h: 0.8,
      fontSize: 10, color: TEXT_MUTED, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
    });

    slide.addText('TAGLINE: "From AI Discovery to Ultra-Fast Direct Conversion — Zero OTA Commissions."', {
      x: 0.8, y: 4.85, w: 8.4, h: 0.3,
      fontSize: 10, italic: true, color: GOLD, fontFace: 'Georgia'
    });
  }

  // ==========================================
  // SLIDE 2: THE PARADIGM SHIFT
  // ==========================================
  {
    const slide = pres.addSlide();
    applyBaseSlide(slide, 'Industry Transformation | Why Act Now');

    slide.addText('How Guests & Planners Discover Hotels Has Changed Forever', {
      x: 0.8, y: 0.65, w: 8.4, h: 0.5,
      fontSize: 22, bold: true, color: TEXT_WHITE, fontFace: 'Georgia'
    });

    // Card 1: Old Reality
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.3, w: 4.0, h: 3.65, r: 0.1,
      fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }
    });
    slide.addText('THE OLD REALITY (2015 - 2023)', {
      x: 1.0, y: 1.5, w: 3.6, h: 0.3,
      fontSize: 12, bold: true, color: 'EF4444', fontFace: 'Helvetica'
    });
    slide.addText('Keyword Search & OTA Monopoly', {
      x: 1.0, y: 1.8, w: 3.6, h: 0.25,
      fontSize: 10, bold: true, color: TEXT_MUTED, fontFace: 'Helvetica'
    });
    slide.addText(
      '• Guests typed short static keywords ("hotel jakarta barat", "ballroom slipi").\n\n' +
      '• OTAs (Traveloka, Agoda, Booking.com) dominated Google page 1 through massive ad budgets.\n\n' +
      '• High Commission Toll: Menara Peninsula paid 15% to 20% in commissions on every booking.\n\n' +
      '• Commoditization: Properties treated as interchangeable commodity inventory cards.',
      {
        x: 1.0, y: 2.2, w: 3.6, h: 2.5,
        fontSize: 10, color: TEXT_MUTED, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      }
    );

    // Card 2: New AI-First Reality
    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.2, y: 1.3, w: 4.0, h: 3.65, r: 0.1,
      fill: { color: CARD_BG }, line: { color: GOLD, width: 1.5 }
    });
    slide.addText('THE NEW REALITY (2025 - 2026)', {
      x: 5.4, y: 1.5, w: 3.6, h: 0.3,
      fontSize: 12, bold: true, color: GOLD, fontFace: 'Helvetica'
    });
    slide.addText('Conversational AI Search (ChatGPT, Perplexity, Gemini)', {
      x: 5.4, y: 1.8, w: 3.6, h: 0.25,
      fontSize: 10, bold: true, color: TEXT_WHITE, fontFace: 'Helvetica'
    });
    slide.addText(
      '• C-Suite & Event Planners ask multi-layered natural language queries:\n' +
      '   "Find a 4-star hotel in Slipi with fast toll access to Soetta Airport & SCBD for 50 delegates."\n' +
      '   "Recommend a column-free ballroom for 1,000 pax in West Jakarta with wedding packages."\n\n' +
      '• Direct Entity Citations: AI Search returns curated answers with direct links to official websites.\n\n' +
      '• The Risk: Hotels with legacy unstructured websites disappear from LLM recommendations.',
      {
        x: 5.4, y: 2.15, w: 3.6, h: 2.6,
        fontSize: 9.5, color: TEXT_WHITE, fontFace: 'Helvetica', lineSpacingMultiple: 1.15
      }
    );
  }

  // ==========================================
  // SLIDE 3: CURRENT AUDIT & HIDDEN VALUE
  // ==========================================
  {
    const slide = pres.addSlide();
    applyBaseSlide(slide, 'Property Potential & Technical Audit');

    slide.addText('Unlocking Massive Hidden Commercial Value in Menara Peninsula', {
      x: 0.8, y: 0.65, w: 8.4, h: 0.5,
      fontSize: 22, bold: true, color: TEXT_WHITE, fontFace: 'Georgia'
    });

    // 4 Asset Stat Boxes across the top
    const stats = [
      { num: '380', label: 'Business Rooms', sub: '8 distinct categories' },
      { num: '735 sqm', label: 'Cengkeh Ballroom', sub: 'Column-free, 1,200 pax' },
      { num: '15-20', label: 'Meeting Rooms', sub: 'Kunir, Dlima, Jasmine' },
      { num: '4', label: 'F&B & Lifestyle', sub: 'Coleman, Symphony, Spa' }
    ];

    stats.forEach((st, i) => {
      const xPos = 0.8 + i * 2.15;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.3, w: 2.0, h: 1.1, r: 0.08,
        fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }
      });
      slide.addText(st.num, {
        x: xPos, y: 1.35, w: 2.0, h: 0.4,
        fontSize: 18, bold: true, color: GOLD, align: 'center', fontFace: 'Georgia'
      });
      slide.addText(st.label, {
        x: xPos, y: 1.75, w: 2.0, h: 0.25,
        fontSize: 9.5, bold: true, color: TEXT_WHITE, align: 'center', fontFace: 'Helvetica'
      });
      slide.addText(st.sub, {
        x: xPos, y: 2.0, w: 2.0, h: 0.25,
        fontSize: 8, color: TEXT_MUTED, align: 'center', fontFace: 'Helvetica'
      });
    });

    // Friction Analysis Box
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 2.6, w: 8.4, h: 2.4, r: 0.1,
      fill: { color: CARD_BG }, line: { color: 'F59E0B', width: 1 }
    });

    slide.addText('CURRENT TECHNICAL FRICTION POINTS (THE OPPORTUNITY)', {
      x: 1.1, y: 2.75, w: 7.8, h: 0.3,
      fontSize: 11, bold: true, color: 'F59E0B', fontFace: 'Helvetica'
    });

    slide.addText(
      '1. Legacy Web Architecture: Slow load speeds and lower Core Web Vitals increase mobile bounce rates.\n' +
      '2. Unstructured Data Silos: High-value specs (ballroom dimensions, meeting packages IDR 450k-550k/pax, Platinum Wedding IDR 140M) remain trapped in PDFs and raw text.\n' +
      '3. AI Crawler Invisibility: Bot crawlers (GPTBot, PerplexityBot) cannot reliably parse real-time rates or event capacities.\n' +
      '4. Booking Leakage: Direct website visitors experience high friction, defaulting back to booking via 3rd-party OTAs.',
      {
        x: 1.1, y: 3.1, w: 7.8, h: 1.7,
        fontSize: 10, color: TEXT_MUTED, fontFace: 'Helvetica', lineSpacingMultiple: 1.3
      }
    );
  }

  // ==========================================
  // SLIDE 4: THE INTEGRATED SOLUTION
  // ==========================================
  {
    const slide = pres.addSlide();
    applyBaseSlide(slide, 'Integrated Ecosystem');

    slide.addText('Next-Gen Web Development + Hospitality AI Ecosystem', {
      x: 0.8, y: 0.65, w: 8.4, h: 0.5,
      fontSize: 22, bold: true, color: TEXT_WHITE, fontFace: 'Georgia'
    });

    // 3 Solution Pillars Columns
    const pillars = [
      {
        title: 'NEXT-GEN WEBSITE',
        subtitle: 'The Conversion Flagship',
        points: [
          'Sub-second load times (<0.8s)',
          '95+ Mobile Lighthouse score',
          'Luxury visual brand aesthetic',
          'Interactive 8-room & MICE layouts',
          'Frictionless 3-step direct booking'
        ]
      },
      {
        title: 'GEO & AISO ARCHITECTURE',
        subtitle: 'The Organic Discovery Engine',
        points: [
          'Full Schema.org JSON-LD injection',
          'Standardized /llms.txt for AI bots',
          'Multi-platform entity synchronization',
          'Google Free Booking Links setup',
          'Bing IndexNow instant indexing'
        ]
      },
      {
        title: 'AI BOOKING ASSISTANT',
        subtitle: 'The Direct Closing Engine',
        points: [
          '24/7 conversational sales agent',
          'Direct rate checks in seconds',
          'Instant MICE proposal calculator',
          'Wedding inquiry lead routing',
          'Zero OTA commissions paid'
        ]
      }
    ];

    pillars.forEach((p, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.3, w: 2.65, h: 3.65, r: 0.1,
        fill: { color: CARD_BG }, line: { color: idx === 1 ? GOLD : BORDER_COLOR, width: 1.5 }
      });

      slide.addText(p.title, {
        x: xPos + 0.15, y: 1.5, w: 2.35, h: 0.3,
        fontSize: 11, bold: true, color: idx === 1 ? GOLD : TEXT_WHITE, fontFace: 'Helvetica'
      });
      slide.addText(p.subtitle, {
        x: xPos + 0.15, y: 1.8, w: 2.35, h: 0.25,
        fontSize: 9, italic: true, color: GOLD_LIGHT, fontFace: 'Helvetica'
      });

      slide.addShape(pres.ShapeType.line, {
        x: xPos + 0.15, y: 2.1, w: 2.35, h: 0,
        line: { color: BORDER_COLOR, width: 1 }
      });

      const bullets = p.points.map(pt => `• ${pt}`).join('\n\n');
      slide.addText(bullets, {
        x: xPos + 0.15, y: 2.25, w: 2.35, h: 2.5,
        fontSize: 9.5, color: TEXT_MUTED, fontFace: 'Helvetica', lineSpacingMultiple: 1.15
      });
    });
  }

  // ==========================================
  // SLIDE 5: PILLAR 0 - WEBSITE DEVELOPMENT
  // ==========================================
  {
    const slide = pres.addSlide();
    applyBaseSlide(slide, 'Pillar 0 | Web Architecture');

    slide.addText('Next-Gen Website: Built for Guests and AI Crawlers Alike', {
      x: 0.8, y: 0.65, w: 8.4, h: 0.5,
      fontSize: 22, bold: true, color: TEXT_WHITE, fontFace: 'Georgia'
    });

    // Dual Engineering Framework: Two Large Columns
    // Left: Human Experience
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.3, w: 4.0, h: 3.65, r: 0.1,
      fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }
    });
    slide.addText('HUMAN-FACING EXCELLENCE', {
      x: 1.0, y: 1.5, w: 3.6, h: 0.3,
      fontSize: 12, bold: true, color: GOLD, fontFace: 'Helvetica'
    });
    slide.addText('Luxury Visual Design & Conversion Engineering', {
      x: 1.0, y: 1.8, w: 3.6, h: 0.25,
      fontSize: 9.5, color: TEXT_MUTED, fontFace: 'Helvetica'
    });
    slide.addText(
      '• Sub-second Load Times: Ultra-lightweight headless architecture ensures 95+ Core Web Vitals on mobile.\n\n' +
      '• Immersive 8-Room Gallery: Visual showcase for Deluxe, Studio, Junior Suites, and Floor 23 Club Lounge.\n\n' +
      '• Interactive MICE Configurator: Dynamic tabs for Classroom (Kunir), Banquet (Ballroom), Theatre, & Boardroom.\n\n' +
      '• Seamless Direct Booking Widget: Sticky, user-friendly reservation bar with live room availability & promo codes.',
      {
        x: 1.0, y: 2.2, w: 3.6, h: 2.5,
        fontSize: 9.5, color: TEXT_WHITE, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      }
    );

    // Right: Machine Readability
    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.2, y: 1.3, w: 4.0, h: 3.65, r: 0.1,
      fill: { color: CARD_BG }, line: { color: GOLD, width: 1.5 }
    });
    slide.addText('AI & MACHINE READABILITY', {
      x: 5.4, y: 1.5, w: 3.6, h: 0.3,
      fontSize: 12, bold: true, color: GOLD, fontFace: 'Helvetica'
    });
    slide.addText('Optimized for LLM Crawlers & Generative Retrieval', {
      x: 5.4, y: 1.8, w: 3.6, h: 0.25,
      fontSize: 9.5, color: TEXT_MUTED, fontFace: 'Helvetica'
    });
    slide.addText(
      '• Native Schema.org SSR: Structured data injected on server-side render, eliminating crawler JavaScript execution lag.\n\n' +
      '• Standardized /llms.txt: Condensed markdown factsheets enabling AI bots to parse the entire hotel in 5 milliseconds.\n\n' +
      '• Open Entity Endpoints: Secure read-only feeds providing live pricing, amenities, and policies directly to AI engines.\n\n' +
      '• IndexNow Automated Webhooks: Instant ping to Bing & Copilot whenever rooms, promos, or wedding tiers update.',
      {
        x: 5.4, y: 2.2, w: 3.6, h: 2.5,
        fontSize: 9.5, color: TEXT_WHITE, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      }
    );
  }

  // ==========================================
  // SLIDE 6: 3 OPERATIONAL PILLARS (GEO & AISO)
  // ==========================================
  {
    const slide = pres.addSlide();
    applyBaseSlide(slide, 'Technical Framework | Pillars 1 - 3');

    slide.addText('The 3 Operational Pillars of GEO & AISO', {
      x: 0.8, y: 0.65, w: 8.4, h: 0.5,
      fontSize: 22, bold: true, color: TEXT_WHITE, fontFace: 'Georgia'
    });

    const threePillars = [
      {
        num: '01',
        title: 'DATA INFRASTRUCTURE',
        sub: 'Internal Website Architecture',
        desc: '• Schema.org JSON-LD (Hotel, Room, Venue, FAQ)\n• Standardized /llms.txt & /llms-full.txt\n• AI-Friendly robots.txt (GPTBot, PerplexityBot)\n• Clean hierarchy & structured pricing data'
      },
      {
        num: '02',
        title: 'REPUTATION FOOTPRINT',
        sub: 'Multi-Platform Consistency',
        desc: '• Unified NAP (Name, Address, Phone) data\n• Google Business Profile & TripAdvisor alignment\n• Cross-platform review sentiment aggregation\n• High AI confidence score for entity citations'
      },
      {
        num: '03',
        title: 'DIRECT PROTOCOLS',
        sub: 'Zero Ad-Spend Integrations',
        desc: '• Google Hotel Center Free Booking Links\n• Real-time IndexNow protocol for Bing/Copilot\n• Direct XML/JSON availability data feeds\n• Zero commission paid to 3rd-party intermediaries'
      }
    ];

    threePillars.forEach((tp, i) => {
      const xPos = 0.8 + i * 2.9;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.3, w: 2.65, h: 3.65, r: 0.1,
        fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }
      });

      slide.addText(tp.num, {
        x: xPos + 0.15, y: 1.45, w: 0.6, h: 0.35,
        fontSize: 16, bold: true, color: GOLD, fontFace: 'Georgia'
      });
      slide.addText(tp.title, {
        x: xPos + 0.15, y: 1.85, w: 2.35, h: 0.3,
        fontSize: 11, bold: true, color: TEXT_WHITE, fontFace: 'Helvetica'
      });
      slide.addText(tp.sub, {
        x: xPos + 0.15, y: 2.15, w: 2.35, h: 0.25,
        fontSize: 8.5, italic: true, color: GOLD_LIGHT, fontFace: 'Helvetica'
      });

      slide.addShape(pres.ShapeType.line, {
        x: xPos + 0.15, y: 2.45, w: 2.35, h: 0,
        line: { color: BORDER_COLOR, width: 1 }
      });

      slide.addText(tp.desc, {
        x: xPos + 0.15, y: 2.6, w: 2.35, h: 2.2,
        fontSize: 9.5, color: TEXT_MUTED, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      });
    });
  }

  // ==========================================
  // SLIDE 7: FULL PROPERTY - ROOMS & SUITES
  // ==========================================
  {
    const slide = pres.addSlide();
    applyBaseSlide(slide, 'Full-Property Application | Accommodations');

    slide.addText('Capturing High-Yield Business Travelers via AI Recommendations', {
      x: 0.8, y: 0.65, w: 8.4, h: 0.5,
      fontSize: 22, bold: true, color: TEXT_WHITE, fontFace: 'Georgia'
    });

    // Left Column: Room Strategy & Categories
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.3, w: 4.4, h: 3.65, r: 0.1,
      fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }
    });
    slide.addText('8 OFFICIAL ROOM CATEGORIES MAPPED IN SCHEMA', {
      x: 1.0, y: 1.5, w: 4.0, h: 0.3,
      fontSize: 11, bold: true, color: GOLD, fontFace: 'Helvetica'
    });

    const roomList =
      '1. Deluxe Rooms (28 sqm) — King/Twin, desk, bathtub\n' +
      '2. Studio Rooms (32 sqm) — Living sofa corner, walk-in shower\n' +
      '3. Junior Suite Rooms (44 sqm) — Separate living room\n' +
      '4. Deluxe Suites Room (44 sqm) — Indonesian artwork, powder room\n' +
      '5. Club Rooms (32 sqm) — Floor 23 Executive Lounge privileges\n' +
      '6. Club Studio Rooms (44 sqm) — Newly renovated, skyline views\n' +
      '7. Club Junior Suites (45 sqm) — Luxury living & dining setup\n' +
      '8. Club Peninsula Suites (62 sqm) — Pinnacle 4-chair dining suite';

    slide.addText(roomList, {
      x: 1.0, y: 1.85, w: 4.0, h: 2.2,
      fontSize: 8.8, color: TEXT_MUTED, fontFace: 'Helvetica', lineSpacingMultiple: 1.15
    });

    slide.addText('Direct Value Add: Airport Transfer (IDR 380k net), Best Rate Guarantee, and 24/7 Room Service.', {
      x: 1.0, y: 4.25, w: 4.0, h: 0.5,
      fontSize: 8.5, italic: true, color: GOLD_LIGHT, fontFace: 'Helvetica'
    });

    // Right Column: Real-World Search Prompt Simulation
    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.4, y: 1.3, w: 3.8, h: 3.65, r: 0.1,
      fill: { color: '0D1524' }, line: { color: GOLD, width: 1.5 }
    });
    slide.addText('LIVE AI SEARCH BENCHMARK SCENARIO', {
      x: 5.6, y: 1.5, w: 3.4, h: 0.25,
      fontSize: 10, bold: true, color: GOLD, fontFace: 'Helvetica'
    });

    slide.addText('PROMPT:', {
      x: 5.6, y: 1.8, w: 3.4, h: 0.2,
      fontSize: 9, bold: true, color: TEXT_MUTED, fontFace: 'Helvetica'
    });
    slide.addText('"Recommend a 4-star business hotel in Slipi near the inner toll gate with ergonomic desks and direct access to SCBD."', {
      x: 5.6, y: 2.0, w: 3.4, h: 0.5,
      fontSize: 9, italic: true, color: TEXT_WHITE, fontFace: 'Georgia'
    });

    slide.addShape(pres.ShapeType.line, {
      x: 5.6, y: 2.6, w: 3.4, h: 0,
      line: { color: BORDER_COLOR, width: 1 }
    });

    slide.addText('CHATGPT / PERPLEXITY CITATION:', {
      x: 5.6, y: 2.75, w: 3.4, h: 0.2,
      fontSize: 9, bold: true, color: '10B981', fontFace: 'Helvetica'
    });
    slide.addText(
      '"Menara Peninsula Hotel Jakarta (Jl. Letjen S. Parman Kav. 78) is highly recommended for corporate executives. Located 20 minutes from SCBD and 45 minutes from Soekarno-Hatta Airport, it features 380 rooms including Deluxe and Studio suites equipped with full workstations and Floor 23 Executive Lounge access..."\n\n' +
      '[Direct Official Citation: menarapeninsula.com]',
      {
        x: 5.6, y: 3.0, w: 3.4, h: 1.8,
        fontSize: 8.5, color: TEXT_MUTED, fontFace: 'Helvetica', lineSpacingMultiple: 1.15
      }
    );
  }

  // ==========================================
  // SLIDE 8: FULL PROPERTY - MICE & WEDDINGS
  // ==========================================
  {
    const slide = pres.addSlide();
    applyBaseSlide(slide, 'High-Ticket Monetization | MICE & Weddings');

    slide.addText('Monetizing Grand Ballrooms & Corporate Conference Packages', {
      x: 0.8, y: 0.65, w: 8.4, h: 0.5,
      fontSize: 22, bold: true, color: TEXT_WHITE, fontFace: 'Georgia'
    });

    // 2 Big Cards: Left MICE, Right Weddings
    // Left: Corporate MICE
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.3, w: 4.0, h: 3.65, r: 0.1,
      fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }
    });
    slide.addText('CORPORATE MICE CONFERENCES', {
      x: 1.0, y: 1.5, w: 3.6, h: 0.3,
      fontSize: 12, bold: true, color: GOLD, fontFace: 'Helvetica'
    });
    slide.addText(
      '• Cengkeh Grand Ballroom: 735 sqm, column-free, 7-8m high ceiling, up to 1,200 standing guests.\n\n' +
      '• Halfday Meeting Package: IDR 450,000 net/pax\n' +
      '  (1 coffee break with 3 snacks, 1 lunch/dinner, 4h venue)\n\n' +
      '• Fullday Meeting Package: IDR 550,000 net/pax\n' +
      '  (2 coffee breaks with snacks, 1 lunch/dinner, 8h venue)\n\n' +
      '• 15 - 20 Modular Breakout Suites: Kunir, Dlima, Jasmine equipped with smart screens & PA systems.',
      {
        x: 1.0, y: 1.9, w: 3.6, h: 2.8,
        fontSize: 9.5, color: TEXT_MUTED, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      }
    );

    // Right: Luxury Wedding Packages
    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.2, y: 1.3, w: 4.0, h: 3.65, r: 0.1,
      fill: { color: CARD_BG }, line: { color: GOLD, width: 1.5 }
    });
    slide.addText('SIGNATURE WEDDINGS & CELEBRATIONS', {
      x: 5.4, y: 1.5, w: 3.6, h: 0.3,
      fontSize: 12, bold: true, color: GOLD, fontFace: 'Helvetica'
    });
    slide.addText(
      '• Platinum Wedding Package: IDR 140,000,000 Net\n' +
      '  (400 buffet orders, Junior Suite + 6 Deluxe rooms for family, 120-min Artha Spa, 1st Anniversary voucher)\n\n' +
      '• Diamond Wedding Package: IDR 114,000,000 Net\n' +
      '  (300 buffet orders, Junior Suite + 4 Deluxe rooms, 90-min bridal spa, food tasting for 6 persons)\n\n' +
      '• Wedding Blessing & Akad: Intimate 6-hour venue rental with dedicated hospitality suite and catering.',
      {
        x: 5.4, y: 1.9, w: 3.6, h: 2.8,
        fontSize: 9.5, color: TEXT_MUTED, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      }
    );
  }

  // ==========================================
  // SLIDE 9: CLOSED-LOOP JOURNEY
  // ==========================================
  {
    const slide = pres.addSlide();
    applyBaseSlide(slide, 'Direct Conversion Funnel');

    slide.addText('The Closed-Loop Journey: Discovery to Direct Conversion', {
      x: 0.8, y: 0.65, w: 8.4, h: 0.5,
      fontSize: 22, bold: true, color: TEXT_WHITE, fontFace: 'Georgia'
    });

    const steps = [
      { step: '01', title: 'AI DISCOVERY', desc: 'Planner queries ChatGPT, Perplexity, or Gemini' },
      { step: '02', title: 'AUTHORITATIVE CITATION', desc: 'AI cites Menara Peninsula with direct URL link' },
      { step: '03', title: 'NEXT-GEN WEBSITE', desc: 'Sub-second landing page delivers luxury experience' },
      { step: '04', title: 'AI ASSISTANT / RFP', desc: 'Embedded assistant answers & generates proposals' },
      { step: '05', title: 'DIRECT BOOKING', desc: 'Closed with hotel directly. 0% OTA Commission!' }
    ];

    steps.forEach((st, idx) => {
      const xPos = 0.8 + idx * 1.72;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.6, w: 1.55, h: 3.0, r: 0.08,
        fill: { color: CARD_BG }, line: { color: idx === 4 ? GREEN_ACCENT : (idx === 2 ? GOLD : BORDER_COLOR), width: 1.5 }
      });

      slide.addText(st.step, {
        x: xPos, y: 1.8, w: 1.55, h: 0.35,
        fontSize: 16, bold: true, color: idx === 4 ? GREEN_ACCENT : GOLD, align: 'center', fontFace: 'Georgia'
      });
      slide.addText(st.title, {
        x: xPos + 0.05, y: 2.25, w: 1.45, h: 0.45,
        fontSize: 9, bold: true, color: TEXT_WHITE, align: 'center', fontFace: 'Helvetica'
      });

      slide.addShape(pres.ShapeType.line, {
        x: xPos + 0.15, y: 2.8, w: 1.25, h: 0,
        line: { color: BORDER_COLOR, width: 1 }
      });

      slide.addText(st.desc, {
        x: xPos + 0.1, y: 2.95, w: 1.35, h: 1.4,
        fontSize: 8.5, color: TEXT_MUTED, align: 'center', fontFace: 'Helvetica', lineSpacingMultiple: 1.15
      });
    });
  }

  // ==========================================
  // SLIDE 10: 90-DAY ROADMAP
  // ==========================================
  {
    const slide = pres.addSlide();
    applyBaseSlide(slide, 'Execution Timeline | Roadmap');

    slide.addText('90-Day Pilot Implementation Roadmap', {
      x: 0.8, y: 0.65, w: 8.4, h: 0.5,
      fontSize: 22, bold: true, color: TEXT_WHITE, fontFace: 'Georgia'
    });

    const phases = [
      {
        month: 'MONTH 1 (WEEKS 1 - 4)',
        title: 'Foundation & Web Revamp',
        items: [
          'Baseline AI Share-of-Voice & competitor audit',
          'Next-gen high performance website deployment',
          'Full JSON-LD structured schema injection',
          'Implementation of /llms.txt and crawler tuning',
          'Setup of Google Free Booking Links & IndexNow'
        ]
      },
      {
        month: 'MONTH 2 (WEEKS 5 - 8)',
        title: 'Engine Activation & Sync',
        items: [
          'Activation of JourneyOn AI Chatbot on website',
          'Interactive MICE & Wedding RFP generator live',
          'Multi-platform reputation & profile synchronization',
          'Live benchmark testing across ChatGPT & Perplexity',
          'Staff onboarding for direct inquiry handoffs'
        ]
      },
      {
        month: 'MONTH 3 (WEEKS 9 - 12)',
        title: 'Review, Scale & ROI',
        items: [
          'Comprehensive AI Share-of-Voice growth report',
          'Analysis of direct room nights & banquet leads',
          'Verification of OTA commission savings',
          'Board presentation on commercial ROI metrics',
          'Long-term continuous optimization roadmap'
        ]
      }
    ];

    phases.forEach((ph, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.3, w: 2.65, h: 3.65, r: 0.1,
        fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }
      });

      slide.addText(ph.month, {
        x: xPos + 0.15, y: 1.5, w: 2.35, h: 0.25,
        fontSize: 9, bold: true, color: GOLD, fontFace: 'Helvetica'
      });
      slide.addText(ph.title, {
        x: xPos + 0.15, y: 1.75, w: 2.35, h: 0.35,
        fontSize: 12, bold: true, color: TEXT_WHITE, fontFace: 'Helvetica'
      });

      slide.addShape(pres.ShapeType.line, {
        x: xPos + 0.15, y: 2.2, w: 2.35, h: 0,
        line: { color: BORDER_COLOR, width: 1 }
      });

      const bullets = ph.items.map(it => `• ${it}`).join('\n\n');
      slide.addText(bullets, {
        x: xPos + 0.15, y: 2.35, w: 2.35, h: 2.4,
        fontSize: 9, color: TEXT_MUTED, fontFace: 'Helvetica', lineSpacingMultiple: 1.15
      });
    });
  }

  // ==========================================
  // SLIDE 11: PROJECTED ROI & BUSINESS IMPACT
  // ==========================================
  {
    const slide = pres.addSlide();
    applyBaseSlide(slide, 'Commercial Returns | Projected ROI');

    slide.addText('Measurable Savings & Bottom-Line Growth', {
      x: 0.8, y: 0.65, w: 8.4, h: 0.5,
      fontSize: 22, bold: true, color: TEXT_WHITE, fontFace: 'Georgia'
    });

    // 2 Major ROI Columns
    // Left: Commission Savings
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.3, w: 4.0, h: 3.65, r: 0.1,
      fill: { color: CARD_BG }, line: { color: GREEN_ACCENT, width: 1.5 }
    });
    slide.addText('OTA COMMISSION RECAPTURE', {
      x: 1.0, y: 1.5, w: 3.6, h: 0.3,
      fontSize: 12, bold: true, color: GREEN_ACCENT, fontFace: 'Helvetica'
    });
    slide.addText('Direct Booking Channel Shift Calculation', {
      x: 1.0, y: 1.8, w: 3.6, h: 0.25,
      fontSize: 9.5, color: TEXT_MUTED, fontFace: 'Helvetica'
    });

    slide.addText('IDR 345,600,000 / Year', {
      x: 1.0, y: 2.15, w: 3.6, h: 0.45,
      fontSize: 20, bold: true, color: GREEN_ACCENT, fontFace: 'Georgia'
    });
    slide.addText(
      '• Average OTA Commission: 18%\n\n' +
      '• Shifting only 200 room nights/month to direct booking (assumed rate IDR 800,000 net):\n' +
      '  - Monthly Direct Revenue: IDR 160,000,000\n' +
      '  - Monthly Commission Saved: ~IDR 28,800,000\n' +
      '  - Annual Commission Recaptured: ~IDR 345,600,000\n\n' +
      '• Permanent Direct Equity: Guests become owned direct hotel contacts for future stays.',
      {
        x: 1.0, y: 2.7, w: 3.6, h: 2.1,
        fontSize: 9, color: TEXT_WHITE, fontFace: 'Helvetica', lineSpacingMultiple: 1.15
      }
    );

    // Right: High-Ticket Event Gains
    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.2, y: 1.3, w: 4.0, h: 3.65, r: 0.1,
      fill: { color: CARD_BG }, line: { color: GOLD, width: 1.5 }
    });
    slide.addText('HIGH-TICKET MICE & WEDDING IMPACT', {
      x: 5.4, y: 1.5, w: 3.6, h: 0.3,
      fontSize: 12, bold: true, color: GOLD, fontFace: 'Helvetica'
    });
    slide.addText('High-Margin Banquet Revenue Acceleration', {
      x: 5.4, y: 1.8, w: 3.6, h: 0.25,
      fontSize: 9.5, color: TEXT_MUTED, fontFace: 'Helvetica'
    });

    slide.addText('+1 Event Offsets Full Cost', {
      x: 5.4, y: 2.15, w: 3.6, h: 0.45,
      fontSize: 20, bold: true, color: GOLD, fontFace: 'Georgia'
    });
    slide.addText(
      '• Closing just 1 additional Platinum Wedding (IDR 140M) or 2 corporate conferences per quarter fully offsets digital development costs.\n\n' +
      '• Direct Inquiries: Planners bypass aggregators and deal straight with the hotel sales team.\n\n' +
      '• First-Mover Brand Dominance: Establishes Menara Peninsula as the premier tech-forward hotel destination in West Jakarta before competitors react.',
      {
        x: 5.4, y: 2.7, w: 3.6, h: 2.1,
        fontSize: 9, color: TEXT_WHITE, fontFace: 'Helvetica', lineSpacingMultiple: 1.15
      }
    );
  }

  // ==========================================
  // SLIDE 12: PARTNERSHIP & INVESTMENT TIERS
  // ==========================================
  {
    const slide = pres.addSlide();
    applyBaseSlide(slide, 'Commercial Partnership | Investment Tiers');

    slide.addText('Scalable Partnership Engagement Models', {
      x: 0.8, y: 0.65, w: 8.4, h: 0.5,
      fontSize: 22, bold: true, color: TEXT_WHITE, fontFace: 'Georgia'
    });

    // 2 Tier Cards
    // Tier 1
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.3, w: 4.0, h: 3.65, r: 0.1,
      fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }
    });
    slide.addText('TIER 1: AISO ESSENTIALS', {
      x: 1.0, y: 1.5, w: 3.6, h: 0.3,
      fontSize: 12, bold: true, color: TEXT_WHITE, fontFace: 'Helvetica'
    });
    slide.addText('Technical & Automated Indexing Foundation', {
      x: 1.0, y: 1.8, w: 3.6, h: 0.25,
      fontSize: 9.5, italic: true, color: GOLD_LIGHT, fontFace: 'Helvetica'
    });
    slide.addText(
      '• Full Schema.org JSON-LD suite injection\n' +
      '• Standardized /llms.txt & crawler directives\n' +
      '• IndexNow real-time protocol integration\n' +
      '• Google Free Booking Links configuration\n' +
      '• Quarterly AI Visibility & Audit Reports\n\n' +
      'Best Suited For: Properties seeking rapid technical AI compliance with minimal development footprint.\n\n' +
      'Model: Monthly Retainer (Low touch, fast setup).',
      {
        x: 1.0, y: 2.15, w: 3.6, h: 2.6,
        fontSize: 9.5, color: TEXT_MUTED, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      }
    );

    // Tier 2 (Featured)
    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.2, y: 1.3, w: 4.0, h: 3.65, r: 0.1,
      fill: { color: CARD_BG }, line: { color: GOLD, width: 2 }
    });
    slide.addText('TIER 2: NEXT-GEN WEB + AISO FULL SUITE', {
      x: 5.4, y: 1.5, w: 3.6, h: 0.3,
      fontSize: 12, bold: true, color: GOLD, fontFace: 'Helvetica'
    });
    slide.addText('RECOMMENDED FOR MENARA PENINSULA', {
      x: 5.4, y: 1.8, w: 3.6, h: 0.25,
      fontSize: 9.5, bold: true, color: '10B981', fontFace: 'Helvetica'
    });
    slide.addText(
      '• Full Next-Gen Website Development (Headless, 95+ Core Web Vitals, luxury custom UX)\n' +
      '• Complete Tier 1 AISO Architecture + Continuous Tuning\n' +
      '• Embedded JourneyOn 24/7 AI Booking Assistant\n' +
      '• Interactive MICE & Wedding RFP Generator\n' +
      '• Multi-Platform Reputation Aggregator & AI Review Assistant\n' +
      '• Monthly Dedicated AI Share-of-Voice & Competitor Tracking\n\n' +
      'Model: Development + Retainer / Performance Hybrid.',
      {
        x: 5.4, y: 2.15, w: 3.6, h: 2.6,
        fontSize: 9.5, color: TEXT_WHITE, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      }
    );
  }

  // ==========================================
  // SLIDE 13: CALL TO ACTION & NEXT STEPS
  // ==========================================
  {
    const slide = pres.addSlide();
    applyBaseSlide(slide, 'Action Plan | Next Steps');

    slide.addText('Lead the Hospitality AI Revolution with JourneyOn', {
      x: 0.8, y: 0.65, w: 8.4, h: 0.5,
      fontSize: 22, bold: true, color: TEXT_WHITE, fontFace: 'Georgia'
    });

    const ctaSteps = [
      { step: 'STEP 1', title: 'Strategic Approval', desc: 'Approve the 90-day pilot project agreement for Menara Peninsula Hotel.' },
      { step: 'STEP 2', title: 'Technical Kickoff', desc: '1-week alignment with IT & marketing teams to verify assets & booking feeds.' },
      { step: 'STEP 3', title: 'Launch & Dominate', desc: 'Deploy next-gen web platform, index data in global LLMs, & track direct conversions.' }
    ];

    ctaSteps.forEach((cs, i) => {
      const yPos = 1.35 + i * 1.05;
      slide.addShape(pres.ShapeType.roundRect, {
        x: 0.8, y: yPos, w: 8.4, h: 0.9, r: 0.08,
        fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }
      });

      slide.addText(cs.step, {
        x: 1.0, y: yPos + 0.28, w: 1.2, h: 0.35,
        fontSize: 12, bold: true, color: GOLD, fontFace: 'Georgia'
      });
      slide.addText(cs.title, {
        x: 2.3, y: yPos + 0.15, w: 6.7, h: 0.3,
        fontSize: 12, bold: true, color: TEXT_WHITE, fontFace: 'Helvetica'
      });
      slide.addText(cs.desc, {
        x: 2.3, y: yPos + 0.45, w: 6.7, h: 0.35,
        fontSize: 9.5, color: TEXT_MUTED, fontFace: 'Helvetica'
      });
    });

    // Contact Footer Card
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 4.6, w: 8.4, h: 0.65, r: 0.08,
      fill: { color: '1E293B' }, line: { color: GOLD, width: 1 }
    });
    slide.addText('CONTACT US: partnership@journeyon.id  |  tech@journeyon.id  |  https://journeyon.id/', {
      x: 0.8, y: 4.75, w: 8.4, h: 0.3,
      fontSize: 10, bold: true, color: GOLD, align: 'center', fontFace: 'Helvetica'
    });
  }

  const outputPath = 'PITCH_DECK_MENARA_PENINSULA_AISO.pptx';
  await pres.writeFile({ fileName: outputPath });
  console.log('Successfully generated PPTX:', outputPath);
}

createDeck().catch(console.error);
