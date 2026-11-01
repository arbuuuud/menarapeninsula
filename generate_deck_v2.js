const pptxgen = require('pptxgenjs');

async function createJourneyOnDeckV2() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9'; // 10 x 5.625 inches
  pres.author = 'Journey On AI';
  pres.company = 'Journey On AI';
  pres.title = 'Next-Gen Web & AI Discovery - Menara Peninsula Hotel Jakarta';

  // --- OFFICIAL JOURNEYON AI BRAND DESIGN SYSTEM ---
  // Backgrounds
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

  // Standard slide background and footer setup
  function applyContentSlide(slide, kickerText, headlineText) {
    slide.background = { color: BG_PALE };

    // Kicker (Small uppercase spaced header)
    if (kickerText) {
      slide.addText(kickerText.toUpperCase(), {
        x: 0.8, y: 0.5, w: 8.4, h: 0.25,
        fontSize: 9.5, bold: true, color: COLOR_KICKER,
        charSpacing: 2, fontFace: 'Helvetica'
      });
    }

    // Headline (Large bold serif in brand dark teal)
    if (headlineText) {
      slide.addText(headlineText, {
        x: 0.8, y: 0.78, w: 8.4, h: 0.55,
        fontSize: 21, bold: true, color: COLOR_TEXT_HEAD,
        fontFace: 'Georgia'
      });
    }

    // Standard JourneyOn footer line
    slide.addText('Journey On AI · Web & AI Discovery Proposal for Menara Peninsula Hotel Jakarta', {
      x: 0.8, y: 5.15, w: 8.4, h: 0.25,
      fontSize: 8.5, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica'
    });
  }

  // ==========================================================
  // SLIDE 1: COVER (Brand Forest Dark Teal + Geometric Circles)
  // ==========================================================
  {
    const slide = pres.addSlide();
    slide.background = { color: BRAND_DARK };

    // Geometric decorative circles (Signature JourneyOn Brand Motif)
    slide.addShape(pres.ShapeType.ellipse, {
      x: 6.4, y: 0.4, w: 3.2, h: 3.2,
      fill: { color: BRAND_CIRCLE }, line: { color: BRAND_CIRCLE }
    });
    slide.addShape(pres.ShapeType.ellipse, {
      x: 7.7, y: 3.0, w: 1.8, h: 1.8,
      fill: { color: BRAND_CIRCLE }, line: { color: BRAND_CIRCLE }
    });

    // Kicker
    slide.addText('JOURNEY ON AI', {
      x: 0.8, y: 0.7, w: 5.0, h: 0.3,
      fontSize: 10, bold: true, color: COLOR_KICKER,
      charSpacing: 2.5, fontFace: 'Helvetica'
    });

    // Hero Title (Serif, High-contrast white)
    slide.addText('Turn AI search enquiries\ninto direct bookings and\nqualified MICE RFPs', {
      x: 0.8, y: 1.5, w: 6.5, h: 1.8,
      fontSize: 32, bold: true, color: 'FFFFFF',
      fontFace: 'Georgia', lineSpacingMultiple: 1.15
    });

    // Subtitle
    slide.addText('A Next-Gen Website & Generative Search Optimization (AISO) Proposal for Menara Peninsula Hotel Jakarta', {
      x: 0.8, y: 3.55, w: 6.5, h: 0.55,
      fontSize: 12, color: 'E2E8F0', fontFace: 'Helvetica', lineSpacingMultiple: 1.2
    });

    // Prepared for
    slide.addText('Prepared for General Manager & Director of Sales · November 2026', {
      x: 0.8, y: 4.75, w: 7.0, h: 0.3,
      fontSize: 9.5, color: '94A3B8', fontFace: 'Helvetica'
    });
  }

  // ==========================================================
  // SLIDE 2: WHERE WE START (The Problem / Shift)
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'WHERE WE START',
      'How corporate guests & planners discover hotels has changed forever'
    );

    const cards = [
      {
        title: 'OTAs take 18% to 20%',
        desc: 'Traditional keyword search defaults guests to OTAs (Traveloka, Agoda, Booking.com), costing the hotel massive commission fees each month.'
      },
      {
        title: 'Guests now ask AI engines',
        desc: 'Planners and corporate PAs query ChatGPT, Perplexity, and Gemini directly for hotel specs, ballroom capacities, and package pricing.'
      },
      {
        title: 'Legacy sites stay invisible',
        desc: 'If property assets and pricing are locked in unstructured HTML or PDFs, AI crawlers fail to parse them and recommend competitors instead.'
      }
    ];

    cards.forEach((c, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.5, w: 2.65, h: 2.3, r: 0.08,
        fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
      });

      slide.addText(c.title, {
        x: xPos + 0.15, y: 1.7, w: 2.35, h: 0.45,
        fontSize: 12, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
      });
      slide.addText(c.desc, {
        x: xPos + 0.15, y: 2.25, w: 2.35, h: 1.35,
        fontSize: 9.5, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      });
    });

    // Dark callout banner at bottom (Signature JourneyOn Style)
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 4.0, w: 8.4, h: 0.65, r: 0.08,
      fill: { color: BRAND_DARK }, line: { color: BRAND_DARK }
    });
    slide.addText([
      { text: 'In our live partner hotels, ', options: { color: 'FFFFFF' } },
      { text: 'over 35% of high-intent guest discovery ', options: { color: COLOR_HIGHLIGHT, bold: true } },
      { text: 'now originates from conversational and AI-first channels.', options: { color: 'FFFFFF' } }
    ], {
      x: 1.0, y: 4.15, w: 8.0, h: 0.35,
      fontSize: 10, fontFace: 'Helvetica'
    });

    slide.addText('Source: JOAI conversation logs & search discovery analytics 2025–2026.', {
      x: 0.8, y: 4.8, w: 8.4, h: 0.2,
      fontSize: 8, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica'
    });
  }

  // ==========================================================
  // SLIDE 3: THE DISCOVERY & CONVERSION MODULE (Step 1-4)
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'THE DISCOVERY & CONVERSION FLOW',
      'From conversational AI enquiry to direct booking'
    );

    const steps = [
      {
        num: '1',
        title: 'Planner asks AI',
        desc: 'Questions on ballrooms, corporate packages, and rooms are asked on ChatGPT, Perplexity, or Gemini.'
      },
      {
        num: '2',
        title: 'AI cites Peninsula',
        desc: 'Structured AISO data ensures Menara Peninsula is cited with a direct link to the official hotel website.'
      },
      {
        num: '3',
        title: 'Fast luxury website',
        desc: 'Sub-second load times (<0.8s) deliver room specs, ballroom capacities, and transparent package inclusions.'
      },
      {
        num: '4',
        title: 'Direct closing',
        desc: 'Guest books directly or submits an event brief. Clean container ready for JourneyOn AI Assistant.'
      }
    ];

    steps.forEach((s, idx) => {
      const xPos = 0.8 + idx * 2.15;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.5, w: 1.95, h: 2.6, r: 0.08,
        fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
      });

      // Number badge in dark circle with ochre number
      slide.addShape(pres.ShapeType.ellipse, {
        x: xPos + 0.15, y: 1.7, w: 0.35, h: 0.35,
        fill: { color: BRAND_DARK }, line: { color: BRAND_DARK }
      });
      slide.addText(s.num, {
        x: xPos + 0.15, y: 1.7, w: 0.35, h: 0.35,
        fontSize: 10, bold: true, color: COLOR_HIGHLIGHT, align: 'center', fontFace: 'Georgia'
      });

      slide.addText(s.title, {
        x: xPos + 0.15, y: 2.15, w: 1.65, h: 0.45,
        fontSize: 11, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
      });
      slide.addText(s.desc, {
        x: xPos + 0.15, y: 2.65, w: 1.65, h: 1.25,
        fontSize: 8.8, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.15
      });
    });

    slide.addText('JOAI optimizes the discovery. Your website captures the guest. Your team keeps the deal.', {
      x: 0.8, y: 4.4, w: 8.4, h: 0.35,
      fontSize: 11, italic: true, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
  }

  // ==========================================================
  // SLIDE 4: FULL PROPERTY - ROOMS
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'ACCOMMODATIONS',
      'The complete room inventory, structured for machine discovery'
    );

    // Left Card: 8 Rooms mapped
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.5, w: 4.2, h: 3.1, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('8 Official Room Categories Mapped', {
      x: 1.0, y: 1.7, w: 3.8, h: 0.35,
      fontSize: 12, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    const roomItems =
      '• Deluxe Rooms (28 sqm) — King/Twin, desk, bathtub\n' +
      '• Studio Rooms (32 sqm) — Living sofa corner, walk-in shower\n' +
      '• Junior Suite Rooms (44 sqm) — Separate living room\n' +
      '• Deluxe Suites Room (44 sqm) — Indonesian artwork, powder room\n' +
      '• Club Rooms (32 sqm) — Floor 23 Executive Lounge privileges\n' +
      '• Club Studio Rooms (44 sqm) — Newly renovated, skyline views\n' +
      '• Club Junior Suites (45 sqm) — Luxury living & dining setup\n' +
      '• Club Peninsula Suites (62 sqm) — Pinnacle 4-chair dining suite';
    slide.addText(roomItems, {
      x: 1.0, y: 2.1, w: 3.8, h: 2.3,
      fontSize: 8.8, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.15
    });

    // Right Card: Machine features
    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.2, y: 1.5, w: 4.0, h: 3.1, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('What Machine Crawlers Receive', {
      x: 5.4, y: 1.7, w: 3.6, h: 0.35,
      fontSize: 12, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    const machinePoints =
      'Server-Side Rendered Schema (JSON-LD)\n' +
      'Every room has exact dimensions, occupancy, bed types, and bathroom amenities mapped.\n\n' +
      'Direct Pricing & Policy Signals\n' +
      'Best Rate Guarantee, check-in policies, and airport transfer (IDR 380k) are read in milliseconds.\n\n' +
      'Google Free Booking Links\n' +
      'Direct rates appear organically in Google Hotel Search at zero commission and zero ad spend.';
    slide.addText(machinePoints, {
      x: 5.4, y: 2.1, w: 3.6, h: 2.3,
      fontSize: 9, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.15
    });

    slide.addText('Real room photography from menarapeninsula.com is embedded natively with zero placeholder images.', {
      x: 0.8, y: 4.75, w: 8.4, h: 0.25,
      fontSize: 8.5, italic: true, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica'
    });
  }

  // ==========================================================
  // SLIDE 5: FULL PROPERTY - MICE & WEDDINGS
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'MICE & WEDDINGS',
      'High-ticket banquet revenue, fully indexed for event planners'
    );

    // Left Card: Corporate MICE
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.5, w: 4.0, h: 2.7, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('Cengkeh Ballroom & Meeting Suites', {
      x: 1.0, y: 1.7, w: 3.6, h: 0.35,
      fontSize: 12, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    const miceText =
      '• Cengkeh Grand Ballroom (735 sqm, column-free, 7-8m ceiling, up to 1,200 standing capacity).\n\n' +
      '• 15 - 20 Modular Meeting Suites: Kunir, Dlima, Jasmine.\n\n' +
      '• Halfday Package: 1 coffee break with 3 snacks, 1 lunch/dinner, 4-hour venue usage.\n\n' +
      '• Fullday Package: 2 coffee breaks with snacks, 1 lunch/dinner, 8-hour venue usage.';
    slide.addText(miceText, {
      x: 1.0, y: 2.1, w: 3.6, h: 1.9,
      fontSize: 8.8, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.15
    });

    // Right Card: Signature Weddings
    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.2, y: 1.5, w: 4.0, h: 2.7, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('Signature Wedding Packages', {
      x: 5.4, y: 1.7, w: 3.6, h: 0.35,
      fontSize: 12, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    const wedText =
      '• Platinum Wedding Package: 400 buffet orders, Junior Suite + 6 Deluxe rooms for family, 120-min Artha Spa, 1st Anniversary stay.\n\n' +
      '• Diamond Wedding Package: 300 buffet orders, Junior Suite + 4 Deluxe rooms, 90-min bridal spa, food tasting for 6 persons.\n\n' +
      '• Wedding Blessing & Akad Nikah: 6-hour venue usage with dedicated hospitality suite.';
    slide.addText(wedText, {
      x: 5.4, y: 2.1, w: 3.6, h: 1.9,
      fontSize: 8.8, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.15
    });

    // Banner at bottom
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 4.35, w: 8.4, h: 0.55, r: 0.08,
      fill: { color: BRAND_DARK }, line: { color: BRAND_DARK }
    });
    slide.addText('Closing just 1 additional signature wedding per quarter completely self-funds this digital upgrade.', {
      x: 1.0, y: 4.48, w: 8.0, h: 0.3,
      fontSize: 9.5, bold: true, color: COLOR_HIGHLIGHT, fontFace: 'Georgia'
    });
  }

  // ==========================================================
  // SLIDE 6: EVIDENCE & COMMERCIAL LOGIC
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'COMMERCIAL LOGIC',
      'Recapturing direct bookings from 18% OTA commission'
    );

    const stats = [
      { num: '18% to 20%', label: 'Current OTA Commission', desc: 'Paid on every third-party room booking' },
      { num: '150+', label: 'Monthly Room Nights', desc: 'Target shift to owned direct engine' },
      { num: '0%', label: 'OTA Direct Fee', desc: 'Hotel keeps 100% of direct room margin' }
    ];

    stats.forEach((st, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.5, w: 2.65, h: 1.6, r: 0.08,
        fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
      });
      slide.addText(st.num, {
        x: xPos, y: 1.65, w: 2.65, h: 0.45,
        fontSize: 20, bold: true, color: COLOR_TEXT_HEAD, align: 'center', fontFace: 'Georgia'
      });
      slide.addText(st.label, {
        x: xPos + 0.1, y: 2.15, w: 2.45, h: 0.3,
        fontSize: 9.5, bold: true, color: COLOR_KICKER, align: 'center', fontFace: 'Helvetica'
      });
      slide.addText(st.desc, {
        x: xPos + 0.1, y: 2.45, w: 2.45, h: 0.5,
        fontSize: 8.5, color: COLOR_TEXT_MUTED, align: 'center', fontFace: 'Helvetica'
      });
    });

    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 3.3, w: 8.4, h: 1.45, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('First-Party Customer Ownership', {
      x: 1.0, y: 3.45, w: 8.0, h: 0.3,
      fontSize: 11, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    slide.addText(
      'When corporate guests book through OTAs, the OTA owns their data and remarkets competitor hotels for their next trip. By capturing bookings directly via your high-performance website and AISO discovery, Menara Peninsula owns the guest relationship permanently, eliminating recurring acquisition costs.',
      {
        x: 1.0, y: 3.8, w: 8.0, h: 0.85,
        fontSize: 9, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      }
    );
  }

  // ==========================================================
  // SLIDE 7: THE 60-DAY ROADMAP
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'THE ROADMAP',
      'From kickoff to public launch and AI indexing'
    );

    const phases = [
      {
        badge: 'WEEKS 1 - 2',
        title: 'Foundation & Build',
        desc: 'Asset ingestion, headless scaffold, luxury UI/UX styling, and 8 room categories layout setup.'
      },
      {
        badge: 'WEEKS 3 - 4',
        title: 'Schema & Feeds',
        desc: 'Server-Side Rendered JSON-LD injection, /llms.txt deployment, and AI Assistant slot configuration.'
      },
      {
        badge: 'WEEK 5',
        title: 'Launch & Index',
        desc: 'DNS cutover, production go-live, Google Free Booking Links activation, and IndexNow broadcast.'
      },
      {
        badge: 'WEEKS 6 - 8',
        title: 'Monitor & Review',
        desc: 'Weekly 20-minute review with sales team: AI Share-of-Voice ranking, click-throughs, and inquiry volume.'
      }
    ];

    phases.forEach((p, idx) => {
      const xPos = 0.8 + idx * 2.15;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.5, w: 1.95, h: 2.8, r: 0.08,
        fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
      });

      slide.addText(p.badge, {
        x: xPos + 0.15, y: 1.7, w: 1.65, h: 0.25,
        fontSize: 8.5, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica'
      });
      slide.addText(p.title, {
        x: xPos + 0.15, y: 2.05, w: 1.65, h: 0.45,
        fontSize: 11, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
      });
      slide.addText(p.desc, {
        x: xPos + 0.15, y: 2.55, w: 1.65, h: 1.5,
        fontSize: 8.8, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      });
    });

    slide.addText('Weekly reviews with your sales team keep adjustments fast and collaborative.', {
      x: 0.8, y: 4.55, w: 8.4, h: 0.25,
      fontSize: 8.5, italic: true, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica'
    });
  }

  // ==========================================================
  // SLIDE 8: PARTNERSHIP FRAMEWORKS (Pure Scope, No Price)
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'PARTNERSHIP OPTIONS',
      'Three engagement scopes tailored to hotel priorities'
    );

    const options = [
      {
        tag: 'ESSENTIALS',
        title: 'Option A: AISO Discovery',
        sub: 'Rapid AI Search Compliance',
        points: [
          'Full Schema.org JSON-LD suite',
          '/llms.txt AI factsheet files',
          'Bing IndexNow automated pings',
          'Google Free Booking Links setup',
          'Bi-annual Share-of-Voice audit'
        ]
      },
      {
        tag: 'RECOMMENDED',
        title: 'Option B: Web + AISO',
        sub: 'Complete Digital Flagship',
        points: [
          'Full Headless Next-Gen Website',
          '8 Room Categories Showcase',
          'Comprehensive MICE & Wedding specs',
          'Complete AISO & /llms.txt engine',
          'AI Assistant integration container',
          'Quarterly Share-of-Voice reports'
        ]
      },
      {
        tag: 'ENTERPRISE',
        title: 'Option C: Enterprise',
        sub: 'Regional Multi-Channel',
        points: [
          'All Option B deliverables',
          'Multi-language (EN/ID/Mandarin/AR)',
          'Monthly detailed benchmarking',
          'Dedicated priority SLA support'
        ]
      }
    ];

    options.forEach((o, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.5, w: 2.65, h: 3.1, r: 0.08,
        fill: { color: BG_WHITE }, line: { color: idx === 1 ? BRAND_DARK : CARD_BORDER, width: idx === 1 ? 2 : 1 }
      });

      slide.addText(o.tag, {
        x: xPos + 0.15, y: 1.65, w: 2.35, h: 0.2,
        fontSize: 8, bold: true, color: idx === 1 ? COLOR_KICKER : COLOR_TEXT_MUTED, fontFace: 'Helvetica'
      });
      slide.addText(o.title, {
        x: xPos + 0.15, y: 1.9, w: 2.35, h: 0.35,
        fontSize: 11, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
      });
      slide.addText(o.sub, {
        x: xPos + 0.15, y: 2.25, w: 2.35, h: 0.25,
        fontSize: 8.5, italic: true, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica'
      });

      slide.addShape(pres.ShapeType.line, {
        x: xPos + 0.15, y: 2.55, w: 2.35, h: 0,
        line: { color: CARD_BORDER, width: 1 }
      });

      const bullets = o.points.map(p => `• ${p}`).join('\n');
      slide.addText(bullets, {
        x: xPos + 0.15, y: 2.65, w: 2.35, h: 1.8,
        fontSize: 8.5, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      });
    });

    slide.addText('*Itemized investment figures and payment terms are detailed in Commercial Quotation Q-JO-MPH-2026-V2.', {
      x: 0.8, y: 4.8, w: 8.4, h: 0.25,
      fontSize: 8, italic: true, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica'
    });
  }

  // ==========================================================
  // SLIDE 9: NEXT STEPS
  // ==========================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'NEXT STEPS',
      'Moving forward with the digital flagship upgrade'
    );

    // Left Column: What we need
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.5, w: 4.0, h: 2.9, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('What We Need From Your Side', {
      x: 1.0, y: 1.7, w: 3.6, h: 0.35,
      fontSize: 12, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    const needs =
      '• DNS access or IT liaison contact for staging setup\n\n' +
      '• Official room and banquet photography assets\n\n' +
      '• Standard meeting and wedding package sheets\n\n' +
      '• Confirmation of booking engine deep-link format\n\n' +
      '• One point of contact for weekly progress sync';
    slide.addText(needs, {
      x: 1.0, y: 2.15, w: 3.6, h: 2.0,
      fontSize: 9, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
    });

    // Right Column: Proposed path
    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.2, y: 1.5, w: 4.0, h: 2.9, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('The Proposed Next Step', {
      x: 5.4, y: 1.7, w: 3.6, h: 0.35,
      fontSize: 12, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    const nextSteps =
      '1. Review Commercial Quotation (Q-JO-MPH-2026-V2)\n' +
      '   Examine the streamlined investment schedule (~IDR 147M Year 1).\n\n' +
      '2. 30-Minute Technical Alignment\n' +
      '   Verify staging environment and asset handover checklist.\n\n' +
      '3. Target 5-Week Go-Live\n' +
      '   Deploy the digital flagship and launch generative AI indexing.';
    slide.addText(nextSteps, {
      x: 5.4, y: 2.15, w: 3.6, h: 2.0,
      fontSize: 9, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
    });

    // Contact Sign-off
    slide.addText('Fajar Pratama · Co-founder, Journey On AI · fajar@inotel.co', {
      x: 0.8, y: 4.65, w: 8.4, h: 0.3,
      fontSize: 9.5, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
  }

  const outputPath = 'PITCH_DECK_MENARA_PENINSULA_AISO_V2.pptx';
  await pres.writeFile({ fileName: outputPath });
  console.log('Successfully generated PPTX V2 in official JourneyOn Brand Template:', outputPath);
}

createJourneyOnDeckV2().catch(console.error);
