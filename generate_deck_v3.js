const pptxgen = require('pptxgenjs');

async function createJourneyOnDeckV3() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9'; // 10 x 5.625 inches
  pres.author = 'Journey On AI';
  pres.company = 'Journey On AI';
  pres.title = 'Next-Gen Website & AI Visibility - Menara Peninsula Hotel Jakarta (V3 Business Edition)';

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

  function applyContentSlide(slide, kickerText, headlineText) {
    slide.background = { color: BG_PALE };

    if (kickerText) {
      slide.addText(kickerText.toUpperCase(), {
        x: 0.8, y: 0.45, w: 8.4, h: 0.22,
        fontSize: 9, bold: true, color: COLOR_KICKER,
        charSpacing: 2, fontFace: 'Helvetica'
      });
    }

    if (headlineText) {
      slide.addText(headlineText, {
        x: 0.8, y: 0.72, w: 8.4, h: 0.55,
        fontSize: 20, bold: true, color: COLOR_TEXT_HEAD,
        fontFace: 'Georgia'
      });
    }

    slide.addText('Journey On AI · Web & AI Visibility Proposal for Menara Peninsula Hotel Jakarta', {
      x: 0.8, y: 5.15, w: 8.4, h: 0.25,
      fontSize: 8.5, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica'
    });
  }

  // SLIDE 1: COVER
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

    slide.addText('JOURNEY ON AI', {
      x: 0.8, y: 0.7, w: 5.0, h: 0.3,
      fontSize: 10, bold: true, color: COLOR_KICKER,
      charSpacing: 2.5, fontFace: 'Helvetica'
    });

    slide.addText('Win more direct bookings\nand corporate events from\nthe new era of search', {
      x: 0.8, y: 1.45, w: 6.8, h: 1.8,
      fontSize: 32, bold: true, color: 'FFFFFF',
      fontFace: 'Georgia', lineSpacingMultiple: 1.15
    });

    slide.addText('A modern website revamp & AI search visibility plan for Menara Peninsula Hotel Jakarta', {
      x: 0.8, y: 3.55, w: 6.8, h: 0.55,
      fontSize: 12, color: 'E2E8F0', fontFace: 'Helvetica', lineSpacingMultiple: 1.2
    });

    slide.addText('Prepared for General Manager & Director of Sales · November 2026', {
      x: 0.8, y: 4.75, w: 7.0, h: 0.3,
      fontSize: 9.5, color: '94A3B8', fontFace: 'Helvetica'
    });
  }

  // SLIDE 2: THE REALITY TODAY
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'THE SHIFT IN GUEST BEHAVIOR',
      'How corporate bookers and event planners choose hotels today'
    );

    const cards = [
      {
        title: 'High OTA Commissions (18% - 20%)',
        desc: 'When corporate guests search on Google, OTAs (Traveloka, Agoda, Booking.com) capture them first. The hotel loses IDR 150,000 to IDR 250,000 per room night on guests who already intended to stay at Menara Peninsula.'
      },
      {
        title: 'Bookers Now Ask AI Tools',
        desc: 'Company secretaries, corporate HR, and wedding planners now ask tools like ChatGPT, Perplexity, and Google Gemini:\n\n"Find a 4-star hotel in Slipi with fast toll access and meeting rooms for 50 people."'
      },
      {
        title: 'Legacy Sites Stay Invisible',
        desc: 'If a hotel’s website is slow or hard for search engines to read, AI search engines cannot verify your room sizes or ballroom capacities — and recommend competitor hotels in West Jakarta instead.'
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
      x: 0.8, y: 4.1, w: 8.4, h: 0.65, r: 0.08,
      fill: { color: BRAND_DARK }, line: { color: BRAND_DARK }
    });
    slide.addText([
      { text: 'In our live partner hotels, ', options: { color: 'FFFFFF' } },
      { text: 'over 35% of high-intent guest discovery ', options: { color: COLOR_HIGHLIGHT, bold: true } },
      { text: 'now begins with conversational search tools and AI assistants.', options: { color: 'FFFFFF' } }
    ], {
      x: 1.0, y: 4.25, w: 8.0, h: 0.35,
      fontSize: 10, fontFace: 'Helvetica'
    });
  }

  // SLIDE 3: YOUR VALUABLE ASSETS
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'THE ASSET OPPORTUNITY',
      'Menara Peninsula has premier assets — let’s make them easy to find'
    );

    const stats = [
      { val: '380 Rooms', lbl: '8 Categories', sub: 'From Deluxe rooms to Floor 23 Club Lounge suites.' },
      { val: '735 m²', lbl: 'Cengkeh Ballroom', sub: 'Column-free, 7–8m ceiling, up to 1,200 guests.' },
      { val: '15 - 20', lbl: 'Meeting Suites', sub: 'Kunir, Dlima, Jasmine suites for training & boards.' },
      { val: '4 Outlets', lbl: 'F&B & Lifestyle', sub: 'Kafe Coleman (24/7), Symphony Lounge, Artha Spa.' }
    ];

    stats.forEach((st, idx) => {
      const xPos = 0.8 + idx * 2.15;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.45, w: 1.95, h: 1.4, r: 0.08,
        fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
      });
      slide.addText(st.val, {
        x: xPos, y: 1.55, w: 1.95, h: 0.35,
        fontSize: 15, bold: true, color: COLOR_TEXT_HEAD, align: 'center', fontFace: 'Georgia'
      });
      slide.addText(st.lbl, {
        x: xPos + 0.1, y: 1.95, w: 1.75, h: 0.25,
        fontSize: 8, bold: true, color: COLOR_KICKER, align: 'center', fontFace: 'Helvetica'
      });
      slide.addText(st.sub, {
        x: xPos + 0.1, y: 2.22, w: 1.75, h: 0.5,
        fontSize: 7.5, color: COLOR_TEXT_MUTED, align: 'center', fontFace: 'Helvetica'
      });
    });

    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 3.1, w: 8.4, h: 1.6, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('The Problem Today', {
      x: 1.0, y: 3.25, w: 8.0, h: 0.3,
      fontSize: 11, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    slide.addText(
      'Right now, information about your ballroom, meeting packages (IDR 450k/550k), and room tiers is buried in slow-loading web pages and downloadable PDFs. When busy corporate planners browse on mobile phones, they get frustrated by slow load times and turn to OTAs or competitors.\n\nOur objective is to make these assets instantly visible and effortless to book directly.',
      {
        x: 1.0, y: 3.6, w: 8.0, h: 0.95,
        fontSize: 9, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25
      }
    );
  }

  // SLIDE 4: WHAT JOURNEYON DOES FOR YOU
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'THE SOLUTION',
      'A fast, modern website that brings guests directly to your sales team'
    );

    const pillars = [
      {
        tag: 'PILLAR 1',
        title: 'Fast, Beautiful Website',
        desc: 'Loads in under 1 second on mobile phones. Elegant luxury design matching the 4-star prestige of Menara Peninsula, showcasing all 8 room categories and your grand ballroom clearly.'
      },
      {
        tag: 'PILLAR 2',
        title: 'AI Search Recommendations',
        desc: 'We format the hotel’s information in the exact structure that modern search engines and AI tools look for. When someone asks AI for a hotel or ballroom in Slipi, Menara Peninsula is cited first.'
      },
      {
        tag: 'PILLAR 3',
        title: 'Zero-Friction Inquiries',
        desc: 'A streamlined direct booking bar for rooms and a clean inquiry form for meetings and weddings that sends complete briefs straight to your sales team to negotiate and close.'
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
      x: 0.8, y: 4.1, w: 8.4, h: 0.65, r: 0.08,
      fill: { color: BRAND_DARK }, line: { color: BRAND_DARK }
    });
    slide.addText([
      { text: 'Pre-engineered to connect seamlessly with our ', options: { color: 'FFFFFF' } },
      { text: 'JourneyOn AI WhatsApp booking assistant ', options: { color: COLOR_HIGHLIGHT, bold: true } },
      { text: 'whenever your team is ready.', options: { color: 'FFFFFF' } }
    ], {
      x: 1.0, y: 4.25, w: 8.0, h: 0.35,
      fontSize: 10, fontFace: 'Helvetica'
    });
  }

  // SLIDE 5: GUEST ROOMS MADE EASY TO BOOK
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'ROOM REVENUE',
      'Showing your 8 room categories clearly to corporate travellers'
    );

    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.45, w: 4.2, h: 3.3, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('Clear, Transparent Room Showcases', {
      x: 1.0, y: 1.65, w: 3.8, h: 0.35,
      fontSize: 12, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    const roomItems =
      '• Deluxe Rooms (28 sqm) — King/Twin beds, working desk, bathtub\n' +
      '• Studio Rooms (32 sqm) — Living sofa corner, walk-in shower & tub\n' +
      '• Junior Suite Rooms (44 sqm) — Separate living room area\n' +
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
      'Instant Mobile Loading\n' +
      'Corporate bookers see crisp photos and key amenities immediately without waiting for heavy scripts.\n\n' +
      'Direct Perks Highlighted\n' +
      'Best Rate Guarantee, Airport Transfer (IDR 380k), free high-speed WiFi, and 24/7 room service prominently featured.\n\n' +
      'Official Google Hotel Search\n' +
      'We connect your direct rates directly into Google Search at zero advertising cost.';
    slide.addText(roomPerks, {
      x: 5.4, y: 2.1, w: 3.6, h: 2.4,
      fontSize: 9, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.15
    });
  }

  // SLIDE 6: MICE & WEDDINGS
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'MICE & BANQUETS',
      'Helping corporate planners and wedding couples choose your venues'
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
      '• Transparent Package Information: Half-day (IDR 450k/pax) and Full-day (IDR 550k/pax) package details clearly presented.';
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
    slide.addText('Closing just 1 additional wedding per quarter completely pays for this entire digital upgrade.', {
      x: 1.0, y: 4.48, w: 8.0, h: 0.3,
      fontSize: 9.5, bold: true, color: COLOR_HIGHLIGHT, fontFace: 'Georgia'
    });
  }

  // SLIDE 7: HOW GUESTS TRAVEL (THE JOURNEY)
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'THE GUEST JOURNEY',
      'From first search to direct revenue in 4 simple steps'
    );

    const steps = [
      {
        num: '1',
        title: 'Guest searches / asks AI',
        desc: 'A business traveller or wedding planner asks Google or ChatGPT for hotel recommendations in Slipi.'
      },
      {
        num: '2',
        title: 'AI recommends Peninsula',
        desc: 'Because your data is clean and structured, AI models provide an accurate recommendation with an official link.'
      },
      {
        num: '3',
        title: 'Fast, impressive website',
        desc: 'The guest lands on an ultra-fast website that loads instantly on mobile with crisp photos and clear pricing.'
      },
      {
        num: '4',
        title: 'Direct booking or brief',
        desc: 'The guest books directly or submits an event brief. Your sales team closes the deal. 0% commission paid to OTAs!'
      }
    ];

    steps.forEach((s, idx) => {
      const xPos = 0.8 + idx * 2.15;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.5, w: 1.95, h: 2.6, r: 0.08,
        fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
      });

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

    slide.addText('We deliver qualified buyers to your website. Your team closes the booking.', {
      x: 0.8, y: 4.4, w: 8.4, h: 0.35,
      fontSize: 11, italic: true, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
  }

  // SLIDE 8: THE FINANCIAL BENEFIT
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'VALUE FOR THE HOTEL',
      'Recapturing OTA commission and owning your guest relationships'
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

  // SLIDE 9: FAST 5-WEEK TIMELINE
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'EXECUTION PLAN',
      'Quick 5-week setup with zero disruption to daily operations'
    );

    const phases = [
      {
        badge: 'WEEKS 1 - 2',
        title: 'Design & Setup',
        desc: 'We gather your photos and package sheets, set up the fast modern website layout, and review design styling with your team.'
      },
      {
        badge: 'WEEKS 3 - 4',
        title: 'Content & AI Feeds',
        desc: 'We input your 8 room types, ballroom specs, and packages, and connect all search engine data feeds.'
      },
      {
        badge: 'WEEK 5',
        title: 'Launch & Go-Live',
        desc: 'We launch the new website live on your domain (menarapeninsula.com) and activate Google direct search links.'
      },
      {
        badge: 'ONGOING',
        title: 'Review & Support',
        desc: 'We continuously monitor search rankings, update packages when you have new promotions, and ensure everything runs smoothly.'
      }
    ];

    phases.forEach((p, idx) => {
      const xPos = 0.8 + idx * 2.15;
      slide.addShape(pres.ShapeType.roundRect, {
        x: xPos, y: 1.45, w: 1.95, h: 2.8, r: 0.08,
        fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
      });

      slide.addText(p.badge, {
        x: xPos + 0.15, y: 1.65, w: 1.65, h: 0.25,
        fontSize: 8.5, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica'
      });
      slide.addText(p.title, {
        x: xPos + 0.15, y: 2.0, w: 1.65, h: 0.45,
        fontSize: 11, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
      });
      slide.addText(p.desc, {
        x: xPos + 0.15, y: 2.5, w: 1.65, h: 1.55,
        fontSize: 8.8, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
      });
    });

    slide.addText('We do the heavy lifting of building and structuring the data so your team can focus on sales.', {
      x: 0.8, y: 4.5, w: 8.4, h: 0.25,
      fontSize: 8.5, italic: true, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica'
    });
  }

  // SLIDE 10: SIMPLE COLLABORATION OPTIONS
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'COLLABORATION PACKAGES',
      'Straightforward options to match your hotel’s goals'
    );

    const options = [
      {
        tag: 'OPTION A',
        title: 'AI Search Essentials',
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
        title: 'New Website + AI Visibility',
        sub: 'Complete Digital Upgrade',
        points: [
          'Brand-new, ultra-fast website',
          'Clear 8 room categories showcase',
          'Ballroom & meeting capacity guide',
          'Full AI search optimization',
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
        fontSize: 11, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
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

  // SLIDE 11: NEXT STEPS
  {
    const slide = pres.addSlide();
    applyContentSlide(
      slide,
      'NEXT STEPS',
      'Moving forward with the digital flagship upgrade'
    );

    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.45, w: 4.0, h: 2.9, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('What We Need from Your Team', {
      x: 1.0, y: 1.65, w: 3.6, h: 0.35,
      fontSize: 12, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    const needs =
      '• Access to room and banquet photography (or existing media files)\n\n' +
      '• Current meeting and wedding package price sheets\n\n' +
      '• Confirmation of booking engine deep-link format\n\n' +
      '• One sales coordinator for weekly alignment';
    slide.addText(needs, {
      x: 1.0, y: 2.1, w: 3.6, h: 2.0,
      fontSize: 9, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
    });

    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.2, y: 1.45, w: 4.0, h: 2.9, r: 0.08,
      fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 }
    });
    slide.addText('The Proposed Next Step', {
      x: 5.4, y: 1.65, w: 3.6, h: 0.35,
      fontSize: 12, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
    const nextSteps =
      '1. Review Commercial Quotation (Q-JO-MPH-2026-V2)\n' +
      '   Examine the streamlined investment schedule (~IDR 147M Year 1).\n\n' +
      '2. 30-Minute Technical Alignment\n' +
      '   Quick checklist review and staging environment verification.\n\n' +
      '3. Target 5-Week Go-Live\n' +
      '   Launch the new website and turn on generative AI search indexing.';
    slide.addText(nextSteps, {
      x: 5.4, y: 2.1, w: 3.6, h: 2.0,
      fontSize: 9, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.2
    });

    slide.addText('Fajar Pratama · Co-founder, Journey On AI · fajar@inotel.co', {
      x: 0.8, y: 4.65, w: 8.4, h: 0.3,
      fontSize: 9.5, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia'
    });
  }

  const outputPath = 'PITCH_DECK_MENARA_PENINSULA_AISO_V3.pptx';
  await pres.writeFile({ fileName: outputPath });
  console.log('Successfully generated PPTX V3 (Business Edition):', outputPath);
}

createJourneyOnDeckV3().catch(console.error);
