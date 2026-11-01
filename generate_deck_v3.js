const pptxgen = require('pptxgenjs');

async function createJourneyOnDeckV3() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9'; // 10 x 5.625 inches
  pres.author = 'Journey On AI';
  pres.company = 'Journey On AI';
  pres.title = 'Next-Gen Website & AI Search Visibility (GEO & AISO) - Menara Peninsula Hotel Jakarta';

  // --- OFFICIAL JOURNEYON AI BRAND DESIGN SYSTEM ---
  const BG_PALE = 'F4F6F2';          // Off-white / light cream sage
  const BG_WHITE = 'FFFFFF';         // Card pure white
  const BRAND_DARK = '1A3A38';       // Forest Deep Teal (Primary brand color)
  const BRAND_CIRCLE = '234B49';     // Geometric overlay circle in dark slides

  // Text & Accents
  const COLOR_KICKER = '9E8A55';     // Ochre / Gold kicker uppercase tag
  const COLOR_TEXT_HEAD = '1A3A38';  // Forest dark teal for headlines
  const COLOR_TEXT_BODY = '475569';  // Slate grey for body text
  const COLOR_TEXT_MUTED = '64748B'; // Muted grey for metadata & notes
  const COLOR_HIGHLIGHT = 'E5B044';  // Warm yellow/gold for callout highlights
  const CARD_BORDER = 'E2E8F0';      // Very soft border for cards
  const COLOR_CRITICAL = 'DC2626';   // Red for audit deficits
  const COLOR_OPTIMAL = '059669';    // Green for targets & direct answers

  function applyContentSlide(slide, kickerText, headlineText) {
    slide.background = { color: BG_PALE };

    if (kickerText) {
      slide.addText(kickerText.toUpperCase(), {
        x: 0.8, y: 0.42, w: 8.4, h: 0.22,
        fontSize: 9, bold: true, color: COLOR_KICKER,
        charSpacing: 2, fontFace: 'Helvetica'
      });
    }

    if (headlineText) {
      slide.addText(headlineText, {
        x: 0.8, y: 0.68, w: 8.4, h: 0.55,
        fontSize: 19, bold: true, color: COLOR_TEXT_HEAD,
        fontFace: 'Georgia'
      });
    }

    slide.addText('Journey On AI · Web & AI Search Proposal for Menara Peninsula Hotel Jakarta', {
      x: 0.8, y: 5.18, w: 8.4, h: 0.22,
      fontSize: 8.5, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica'
    });
  }

  // ==========================================================
  // SLIDE 1: COVER
  // ==========================================================
  {
    const slide = pres.addSlide();
    slide.background = { color: BRAND_DARK };

    slide.addShape(pres.ShapeType.ellipse, {
      x: 6.4, y: 0.4, w: 3.2, h: 3.2,
      fill: { color: BRAND_CIRCLE }, line: { color: BRAND_CIRCLE }
    });
    slide.addShape(pres.ShapeType.ellipse, {
      x: 7.7, y: 3.0, w: 1.8, h: 1.8,
      fill: { color: BRAND_CIRCLE }, line: { color: BRAND_CIRCLE }
    });

    slide.addText('JOURNEY ON AI · STRATEGIC PROPOSAL', {
      x: 0.8, y: 0.7, w: 6.0, h: 0.3,
      fontSize: 9.5, bold: true, color: COLOR_KICKER,
      charSpacing: 2.5, fontFace: 'Helvetica'
    });

    slide.addText('Dominating AI Search\n(AISO & GEO) & Direct Bookings', {
      x: 0.8, y: 1.4, w: 6.8, h: 1.8,
      fontSize: 32, bold: true, color: 'FFFFFF',
      fontFace: 'Georgia', lineSpacingMultiple: 1.15
    });

    slide.addText('Next-Generation Website Revamp & Generative Engine Optimization for Menara Peninsula Hotel Jakarta', {
      x: 0.8, y: 3.5, w: 6.8, h: 0.55,
      fontSize: 12, color: 'E2E8F0', fontFace: 'Helvetica', lineSpacingMultiple: 1.2
    });

    slide.addText('Prepared for General Manager & Director of Sales · November 2026', {
      x: 0.8, y: 4.75, w: 7.0, h: 0.3,
      fontSize: 9.5, color: '94A3B8', fontFace: 'Helvetica'
    });
  }

  // ==========================================================
  // SLIDE 2: THE REALITY TODAY
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'THE PARADIGM SHIFT',
      'How corporate guests & event planners choose hotels in 2025–2026'
    );

    const cards = [
      {
        title: 'High OTA Commissions (18% - 20%)',
        desc: 'When corporate guests search on Google, OTAs (Traveloka, Agoda, Booking.com) capture them first. The hotel pays 18% to 20% in commission on business travelers who already know Menara Peninsula.'
      },
      {
        title: 'Bookers Move to AI Search',
        desc: 'Company secretaries, corporate HR, and wedding planners now ask conversational AI tools (ChatGPT, Perplexity, Google Gemini):\n\n"Find a 4-star hotel in Slipi with fast toll access and meeting rooms for 50 people."'
      },
      {
        title: 'Legacy Sites Stay Invisible',
        desc: 'Traditional websites cannot be read by generative AI crawlers. Without modern AISO optimization, AI models cannot verify room dimensions or ballroom capacities — citing competitor hotels instead.'
      }
    ];

    cards.forEach((c, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.45, w: 2.65, h: 2.45, r: 0.08,
        fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
      });

      slide.addText(c.title, {
        x: xPos + 0.15, y: 1.65, w: 2.35, h: 0.45,
        fontSize: 11, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
      });
      slide.addText(c.desc, {
        x: xPos + 0.15, y: 2.2, w: 2.35, h: 1.55,
        fontSize: 9, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      });
    });

    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 4.15, w: 8.4, h: 0.65, r: 0.08,
      fill: { color: BRAND_DARK }, line: { color: BRAND_DARK }
    });
    slide.addText([
      { text: 'In our live partner hotels, ', options: { color: 'FFFFFF' } },
      { text: 'over 35% of high-intent corporate discovery ', options: { color: COLOR_HIGHLIGHT, bold: true } },
      { text: 'now begins with conversational search tools and AI assistants.', options: { color: 'FFFFFF' } }
    ], {
      x: 1.0, y: 4.3, w: 8.0, h: 0.35,
      fontSize: 10, fontFace: 'Helvetica'
    });
  }

  // ==========================================================
  // SLIDE 3: CURRENT TECHNICAL AUDIT FINDINGS
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'TECHNICAL AUDIT · MENARAPENINSULA.COM',
      'Live diagnostic results: Why the current site is losing guests & AI citations'
    );

    // Left Card: Zero AI readiness
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.45, w: 4.0, h: 2.5, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('ZERO AI READINESS & CRAWLER 404', {
      x: 1.0, y: 1.6, w: 3.6, h: 0.22,
      fontSize: 8, bold: true, color: COLOR_CRITICAL, fontFace: 'Helvetica'
    });
    slide.addText('0 Schema.org Entities & /llms.txt 404', {
      x: 1.0, y: 1.85, w: 3.6, h: 0.35,
      fontSize: 12, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    slide.addText(
      'Our live technical inspection of menarapeninsula.com revealed zero Schema.org structured data across room and MICE pages. Bot crawlers cannot parse room sqm, bed types, or Cengkeh Ballroom capacity.\n\nFurthermore, requesting /llms.txt returns HTTP 404 Not Found, blocking AI models from reading the hotel\'s factsheet.',
      {
        x: 1.0, y: 2.25, w: 3.6, h: 1.5,
        fontSize: 8.8, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      }
    );

    // Right Card: Asset Bloat & D+
    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.2, y: 1.45, w: 4.0, h: 2.5, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('HEAVY ASSET BLOAT (GRADE: D+)', {
      x: 5.4, y: 1.6, w: 3.6, h: 0.22,
      fontSize: 8, bold: true, color: COLOR_CRITICAL, fontFace: 'Helvetica'
    });
    slide.addText('42 External Scripts & 24 Stylesheets', {
      x: 5.4, y: 1.85, w: 3.6, h: 0.35,
      fontSize: 12, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    slide.addText(
      'The homepage forces mobile browsers to download 42 JavaScript files, including obsolete Internet Explorer 8 libraries (html5shim from 2011) and jquery-migrate.\n\nThis creates severe render-blocking lag and an estimated 35%–45% mobile bounce rate. Crucial meta descriptions are also missing from the homepage.',
      {
        x: 5.4, y: 2.25, w: 3.6, h: 1.5,
        fontSize: 8.8, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      }
    );

    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 4.15, w: 8.4, h: 0.65, r: 0.08,
      fill: { color: BRAND_DARK }, line: { color: BRAND_DARK }
    });
    slide.addText([
      { text: 'Overall Technical Health Grade: ', options: { color: 'FFFFFF' } },
      { text: 'D+ (Critical Deficits) ', options: { color: '#F87171', bold: true } },
      { text: '— Full findings documented in Technical Audit Report AUD-MPH-2026-001.', options: { color: 'FFFFFF' } }
    ], {
      x: 1.0, y: 4.3, w: 8.0, h: 0.35,
      fontSize: 9.5, fontFace: 'Helvetica'
    });
  }

  // ==========================================================
  // SLIDE 4: AUDIT BENCHMARK SCORECARD
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'BENCHMARK SCORECARD',
      'How Menara Peninsula compares against modern hospitality benchmarks'
    );

    const rows = [
      ['Generative AI Readiness (AISO/GEO)', '0 / 100 (Critical)', '65 / 100', '98 / 100'],
      ['Schema.org Machine Structured Data', '0 / 100 (Missing)', '70 / 100', '100 / 100'],
      ['Page Speed & Core Web Vitals', '42 / 100 (Severe Lag)', '80 / 100', '95+ / 100'],
      ['Technical On-Page SEO & Metadata', '38 / 100 (Unoptimized)', '85 / 100', '98 / 100'],
      ['Direct Booking Funnel & Mobile UX', '52 / 100 (Friction)', '85 / 100', '96 / 100']
    ];

    const tableData = [
      [
        { text: 'Technical Audit Category', options: { bold: true, color: 'FFFFFF', fill: { color: BRAND_DARK } } },
        { text: 'Current Peninsula Score', options: { bold: true, color: 'FFFFFF', fill: { color: BRAND_DARK } } },
        { text: '4-Star Industry Standard', options: { bold: true, color: 'FFFFFF', fill: { color: BRAND_DARK } } },
        { text: 'JourneyOn Modern Target', options: { bold: true, color: 'FFFFFF', fill: { color: BRAND_DARK } } }
      ]
    ];

    rows.forEach(r => {
      tableData.push([
        { text: r[0], options: { bold: true, color: COLOR_TEXT_HEAD } },
        { text: r[1], options: { bold: true, color: COLOR_CRITICAL } },
        { text: r[2], options: { color: COLOR_TEXT_BODY } },
        { text: r[3], options: { bold: true, color: COLOR_OPTIMAL } }
      ]);
    });

    slide.addTable(tableData, {
      x: 0.8, y: 1.45, w: 8.4,
      colW: [3.0, 1.8, 1.8, 1.8],
      fontSize: 8.5,
      fontFace: 'Helvetica',
      border: { pt: 0.5, color: CARD_BORDER }
    });

    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 4.15, w: 8.4, h: 0.65, r: 0.08,
      fill: { color: BRAND_DARK }, line: { color: BRAND_DARK }
    });
    slide.addText('The current website costs the hotel hundreds of millions of Rupiah annually in leaked direct revenue and lost corporate inquiries.', {
      x: 1.0, y: 4.3, w: 8.0, h: 0.35,
      fontSize: 9.5, bold: true, color: COLOR_HIGHLIGHT, fontFace: 'Helvetica'
    });
  }

  // ==========================================================
  // SLIDE 5: WHAT ARE GEO & AISO?
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'THE CORE FRAMEWORK',
      'Understanding Generative Engine (GEO) & AI Search Optimization (AISO)'
    );

    const pillars = [
      {
        tag: 'GEO FRAMEWORK',
        title: 'Generative Engine Optimization',
        desc: 'Semantic and technical structuring that trains generative AI models (ChatGPT, Perplexity, Gemini, Copilot) to cite Menara Peninsula as their #1 recommended hotel.'
      },
      {
        tag: 'AISO FRAMEWORK',
        title: 'AI Search Optimization',
        desc: 'Real-time machine feeds ensuring hotel rooms, ballroom specs, and direct pricing surface instantly in conversational answers with direct verified links.'
      },
      {
        tag: 'ZERO AD SPEND',
        title: 'Permanent Search Equity',
        desc: 'Unlike Google Ads (PPC) which stops the moment your daily ad budget runs out, GEO and AISO build permanent owned search equity operating 24/7/365.'
      }
    ];

    pillars.forEach((p, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.45, w: 2.65, h: 2.45, r: 0.08,
        fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
      });

      slide.addText(p.tag, {
        x: xPos + 0.15, y: 1.65, w: 2.35, h: 0.2,
        fontSize: 7.5, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica'
      });
      slide.addText(p.title, {
        x: xPos + 0.15, y: 1.88, w: 2.35, h: 0.45,
        fontSize: 11, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
      });
      slide.addText(p.desc, {
        x: xPos + 0.15, y: 2.4, w: 2.35, h: 1.35,
        fontSize: 9, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      });
    });

    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 4.15, w: 8.4, h: 0.65, r: 0.08,
      fill: { color: BRAND_DARK }, line: { color: BRAND_DARK }
    });
    slide.addText([
      { text: 'Pre-engineered to connect seamlessly with our ', options: { color: 'FFFFFF' } },
      { text: 'JourneyOn AI WhatsApp booking assistant ', options: { color: COLOR_HIGHLIGHT, bold: true } },
      { text: 'whenever your team is ready.', options: { color: 'FFFFFF' } }
    ], {
      x: 1.0, y: 4.3, w: 8.0, h: 0.35,
      fontSize: 10, fontFace: 'Helvetica'
    });
  }

  // ==========================================================
  // SLIDE 6: LIVE AI SEARCH SCENARIO
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'REAL-WORLD SIMULATION',
      'How Menara Peninsula wins when a corporate executive queries AI'
    );

    // Prompt Card
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.45, w: 8.4, h: 1.2, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: COLOR_KICKER, width: 1.5 }
    });
    slide.addText('EXECUTIVE USER PROMPT (CHATGPT / PERPLEXITY)', {
      x: 1.0, y: 1.6, w: 8.0, h: 0.22,
      fontSize: 8, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica'
    });
    slide.addText('"Recommend a 4-star business hotel in Slipi near the inner toll gate with ergonomic desks and direct access to SCBD."', {
      x: 1.0, y: 1.85, w: 8.0, h: 0.6,
      fontSize: 12, italic: true, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });

    // Answer Card
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 2.85, w: 8.4, h: 1.95, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: COLOR_OPTIMAL, width: 1.5 }
    });
    slide.addText('AI MODEL RECOMMENDATION (POWERED BY JOURNEYON AISO & GEO)', {
      x: 1.0, y: 3.0, w: 8.0, h: 0.22,
      fontSize: 8, bold: true, color: COLOR_OPTIMAL, fontFace: 'Helvetica'
    });
    slide.addText(
      '"Menara Peninsula Hotel Jakarta (Jl. Letjen S. Parman Kav. 78, Slipi) is the ideal choice for business executives. Located 20 minutes from SCBD and 45 minutes from Soekarno-Hatta Airport via the adjacent toll gate, it features 380 rooms including Deluxe & Studio business categories equipped with full workstations, high-speed WiFi, and Floor 23 Executive Club Lounge access."\n\n' +
      '✓ Direct Official Citation: https://www.menarapeninsula.com/',
      {
        x: 1.0, y: 3.3, w: 8.0, h: 1.35,
        fontSize: 9.5, color: COLOR_TEXT_HEAD, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      }
    );
  }

  // ==========================================================
  // SLIDE 7: ACCOMMODATIONS
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'ROOM REVENUE',
      'Structuring all 8 room categories for both guests and AI crawlers'
    );

    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.45, w: 4.2, h: 3.3, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('8 Official Room Categories Mapped', {
      x: 1.0, y: 1.65, w: 3.8, h: 0.35,
      fontSize: 12, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    const roomItems =
      '• Deluxe Rooms (28 sqm) — King/Twin beds, ergonomic desk, bathtub\n' +
      '• Studio Rooms (32 sqm) — Living sofa corner, walk-in shower & tub\n' +
      '• Junior Suite Rooms (44 sqm) — Separate living room area, fruit basket\n' +
      '• Deluxe Suites Room (44 sqm) — Contemporary art, powder room\n' +
      '• Club Rooms & Studio (32–44 sqm) — Floor 23 Executive Lounge access\n' +
      '• Club Junior & Peninsula Suites (45–62 sqm) — Luxury dining & living';
    slide.addText(roomItems, {
      x: 1.0, y: 2.1, w: 3.8, h: 2.4,
      fontSize: 9, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
    });

    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.2, y: 1.45, w: 4.0, h: 3.3, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('Why This Wins Direct Bookings', {
      x: 5.4, y: 1.65, w: 3.6, h: 0.35,
      fontSize: 12, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    const roomPerks =
      'Server-Side Rendered Schema (JSON-LD)\n' +
      'Every room has exact dimensions, occupancy, bed types, and bathroom amenities mapped into structured data.\n\n' +
      'Direct Perks Highlighted\n' +
      'Best Rate Guarantee, Airport Transfer (IDR 380k), free high-speed WiFi, and 24/7 room service prominently featured.\n\n' +
      'Official Google Hotel Search\n' +
      'Direct rates connect organically into Google Search at zero advertising cost via Free Booking Links.';
    slide.addText(roomPerks, {
      x: 5.4, y: 2.1, w: 3.6, h: 2.4,
      fontSize: 9, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.15
    });
  }

  // ==========================================================
  // SLIDE 8: MICE & WEDDINGS
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'BANQUET REVENUE',
      'Indexing high-ticket venues for corporate EOs and wedding planners'
    );

    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.45, w: 4.0, h: 2.7, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('Corporate Meetings & Conventions', {
      x: 1.0, y: 1.65, w: 3.6, h: 0.35,
      fontSize: 12, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    const miceText =
      '• Cengkeh Grand Ballroom: 735 sqm, column-free, 7–8m high ceiling, hosting up to 1,200 standing guests for company townhalls.\n\n' +
      '• 15 - 20 Modular Meeting Suites: Easily configured for classroom training (Kunir) or executive boardrooms (Dlima).\n\n' +
      '• Meeting Packages in AISO Data: Half-day (IDR 450k/pax) and Full-day (IDR 550k/pax) package details clearly structured for AI answers.';
    slide.addText(miceText, {
      x: 1.0, y: 2.1, w: 3.6, h: 1.9,
      fontSize: 9, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.15
    });

    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.2, y: 1.45, w: 4.0, h: 2.7, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('Signature Wedding Celebrations', {
      x: 5.4, y: 1.65, w: 3.6, h: 0.35,
      fontSize: 12, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    const wedText =
      '• Platinum Wedding Package (IDR 140M): 400 buffet orders, Junior Suite + 6 Deluxe rooms for family, 120-min bridal spa.\n\n' +
      '• Diamond Wedding Package (IDR 114M): 300 buffet orders, Junior Suite + 4 Deluxe rooms, 90-min bridal spa.\n\n' +
      '• Wedding Blessing & Akad Nikah: Intimate 6-hour package with private hospitality room and dedicated catering.';
    slide.addText(wedText, {
      x: 5.4, y: 2.1, w: 3.6, h: 1.9,
      fontSize: 9, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.15
    });

    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 4.35, w: 8.4, h: 0.55, r: 0.08,
      fill: { color: BRAND_DARK }, line: { color: BRAND_DARK }
    });
    slide.addText('Closing just 1 additional wedding per quarter completely self-funds this entire digital upgrade.', {
      x: 1.0, y: 4.48, w: 8.0, h: 0.3,
      fontSize: 9.5, bold: true, color: COLOR_HIGHLIGHT, fontFace: 'Georgia'
    });
  }

  // ==========================================================
  // SLIDE 9: THE CONVERSION FUNNEL
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'THE CONVERSION FUNNEL',
      'From conversational search to direct hotel revenue in 4 clear steps'
    );

    const steps = [
      {
        num: '1',
        title: 'AI Search Discovery',
        desc: 'A business traveller or wedding planner asks Google or ChatGPT for hotel recommendations in Slipi.'
      },
      {
        num: '2',
        title: 'AISO Recommendation',
        desc: 'Because your data is clean and structured, AI models provide an accurate recommendation with an official link.'
      },
      {
        num: '3',
        title: 'Fast Modern Website',
        desc: 'The guest lands on an ultra-fast website that loads instantly on mobile with crisp photos and clear pricing.'
      },
      {
        num: '4',
        title: 'Direct Booking / Brief',
        desc: 'The guest books directly or submits an event brief. Your sales team closes the deal. 0% commission paid to OTAs!'
      }
    ];

    steps.forEach((s, idx) => {
      const xPos = 0.8 + idx * 2.15;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.45, w: 1.95, h: 2.6, r: 0.08,
        fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
      });

      slide.addShape(pres.ShapeType.ellipse, {
        x: xPos + 0.15, y: 1.65, w: 0.35, h: 0.35,
        fill: { color: BRAND_DARK }, line: { color: BRAND_DARK }
      });
      slide.addText(s.num, {
        x: xPos + 0.15, y: 1.65, w: 0.35, h: 0.35,
        fontSize: 10, bold: true, color: COLOR_HIGHLIGHT, align: 'center', fontFace: 'Georgia'
      });

      slide.addText(s.title, {
        x: xPos + 0.15, y: 2.1, w: 1.65, h: 0.45,
        fontSize: 10.5, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
      });
      slide.addText(s.desc, {
        x: xPos + 0.15, y: 2.6, w: 1.65, h: 1.3,
        fontSize: 8.8, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.15
      });
    });

    slide.addText('We deliver qualified buyers to your website. Your team closes the booking.', {
      x: 0.8, y: 4.35, w: 8.4, h: 0.35,
      fontSize: 11, italic: true, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
  }

  // ==========================================================
  // SLIDE 10: COMMERCIAL LOGIC
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'COMMERCIAL IMPACT',
      'Recapturing 18% to 20% commission and owning guest relationships'
    );

    const metrics = [
      { num: '18% to 20%', label: 'OTA Commission Saved', desc: 'Current fee paid to third-party aggregators on every room booking.' },
      { num: '150+', label: 'Monthly Room Nights', desc: 'Target shift to owned direct booking through improved mobile speed.' },
      { num: '0%', label: 'OTA Direct Fee', desc: 'The hotel keeps 100% of the room revenue and owns the guest contact.' }
    ];

    metrics.forEach((m, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.45, w: 2.65, h: 1.6, r: 0.08,
        fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
      });
      slide.addText(m.num, {
        x: xPos, y: 1.6, w: 2.65, h: 0.45,
        fontSize: 20, bold: true, color: COLOR_TEXT_HEAD, align: 'center', fontFace: 'Georgia'
      });
      slide.addText(m.label, {
        x: xPos + 0.1, y: 2.1, w: 2.45, h: 0.3,
        fontSize: 9.5, bold: true, color: COLOR_KICKER, align: 'center', fontFace: 'Helvetica'
      });
      slide.addText(m.desc, {
        x: xPos + 0.1, y: 2.4, w: 2.45, h: 0.5,
        fontSize: 8.5, color: COLOR_TEXT_MUTED, align: 'center', fontFace: 'Helvetica'
      });
    });

    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 3.25, w: 8.4, h: 1.5, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('First-Party Customer Ownership', {
      x: 1.0, y: 3.4, w: 8.0, h: 0.3,
      fontSize: 11, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    slide.addText(
      'When corporate guests book through OTAs, the OTA owns their contact and suggests competitor hotels for their next trip. When they book directly on your website, they become your permanent corporate customer for repeat business with zero recurring acquisition cost.',
      {
        x: 1.0, y: 3.75, w: 8.0, h: 0.85,
        fontSize: 9, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25
      }
    );
  }

  // ==========================================================
  // SLIDE 11: TIMELINE, PACKAGES & NEXT STEPS
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'EXECUTION & ENGAGEMENT',
      'Fast 5-week launch with clear partnership options'
    );

    const options = [
      {
        tag: 'OPTION A',
        title: 'AISO Search Essentials',
        sub: 'Search Data Upgrade',
        points: [
          'Keep existing website design',
          'Format room & package data for AI',
          'Google Free Booking Links setup',
          'Bi-annual search performance audit'
        ]
      },
      {
        tag: 'OPTION B · RECOMMENDED',
        title: 'New Website + AISO Full Suite',
        sub: 'Complete Digital Upgrade',
        points: [
          'Brand-new, ultra-fast website',
          'Clear 8 room categories showcase',
          'Ballroom & meeting capacity guide',
          'Full GEO & AISO search optimization',
          'Streamlined direct booking bar',
          'Quarterly performance reviews'
        ]
      },
      {
        tag: 'OPTION C',
        title: 'Enterprise Multi-Language',
        sub: 'Regional Corporate Outreach',
        points: [
          'All Option B deliverables included',
          'Multi-language: English, ID, Mandarin, AR',
          'Monthly detailed search reporting',
          'Priority technical support'
        ]
      }
    ];

    options.forEach((o, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.45, w: 2.65, h: 3.1, r: 0.08,
        fill: { color: BG_WHITE }, line: { color: idx === 1 ? BRAND_DARK : CARD_BORDER, width: idx === 1 ? 2 : 1 }
      });

      slide.addText(o.tag, {
        x: xPos + 0.15, y: 1.6, w: 2.35, h: 0.2,
        fontSize: 8, bold: true, color: idx === 1 ? COLOR_KICKER : COLOR_TEXT_MUTED, fontFace: 'Helvetica'
      });
      slide.addText(o.title, {
        x: xPos + 0.15, y: 1.85, w: 2.35, h: 0.35,
        fontSize: 10.5, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
      });
      slide.addText(o.sub, {
        x: xPos + 0.15, y: 2.2, w: 2.35, h: 0.25,
        fontSize: 8.5, italic: true, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica'
      });

      slide.addShape(pres.ShapeType.line, {
        x: xPos + 0.15, y: 2.5, w: 2.35, h: 0,
        line: { color: CARD_BORDER, width: 1 }
      });

      const bullets = o.points.map(p => `• ${p}`).join('\n');
      slide.addText(bullets, {
        x: xPos + 0.15, y: 2.6, w: 2.35, h: 1.8,
        fontSize: 8.5, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      });
    });

    slide.addText('*Itemized investment figures (~IDR 147M/year for Option B) and payment terms are detailed in Commercial Quotation Q-JO-MPH-2026-V2.', {
      x: 0.8, y: 4.8, w: 8.4, h: 0.25,
      fontSize: 8, italic: true, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica'
    });
  }

  const outputPath = 'PITCH_DECK_MENARA_PENINSULA_AISO_V3.pptx';
  await pres.writeFile({ fileName: outputPath });
  console.log('Successfully regenerated PPTX V3 (Balanced Edition):', outputPath);
}

createJourneyOnDeckV3().catch(console.error);
