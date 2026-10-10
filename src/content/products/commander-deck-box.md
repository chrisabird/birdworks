---
title: 'Commander Deck Box'
tagline: 'A deck box for Magic: The Gathering Commander decks.'
order: 1
draft: false

price: null # TBD — £20–£45 band
currency: 'GBP'
postage: null # TBD — flat UK rate
postageLabel: 'UK delivery'
leadTime: null # TBD — recommend "ships in 3–5 working days"

stripeBuyButtonId: null # unused — one face-frame colour, so one button per colour below
stripePublishableKey: null # TBD

# TBD — confirm the part list. Read from the exploded render: lid, slotted
# insert, body, and a separately printed face frame.
parts:
  - name: 'Lid'
    role: 'Slides back to open the box'
    colourable: false
  - name: 'Graveyard insert'
    role: 'Keeps the graveyard in order'
    colourable: false
  - name: 'Body'
    role: 'Holds the deck'
    colourable: false
  - name: 'Face frame'
    role: 'Frames your commander, in your deck colour'

# Named for the deck they match. The renders show yellow for White and grey
# for Black — confirm the filaments. Each colour is its own Stripe buy button.
colours:
  - { name: 'Red', hex: '#a8281e', stripeBuyButtonId: null } # TBD
  - { name: 'White', hex: '#e8e2d4', stripeBuyButtonId: null } # TBD
  - { name: 'Blue', hex: '#1f4e79', stripeBuyButtonId: null } # TBD
  - { name: 'Green', hex: '#2f5d3a', stripeBuyButtonId: null } # TBD
  - { name: 'Black', hex: '#1a1a1a', stripeBuyButtonId: null } # TBD

hero:
  image: '/images/commander-deck-box/red/01-hero.jpg' # render, not a photograph
  imageAlt: 'Commander Deck Box, assembled'
  hoverImage: '/images/commander-deck-box/red/04-exploded.jpg'

intro: >-
  Most deck boxes stop working the moment you open them. This one stays on the
  table. It holds the deck while you play, keeps the graveyard in order, and
  puts your commander on show behind a frame in your deck's colour.

sections:
  - heading: 'It holds the deck'
    body: >-
      Your sleeved deck lives in the body. Slide the lid back and draw from the
      top. The box stays put on the table, so the deck does too.
    image: '/images/commander-deck-box/red/03-lid-open.jpg'
    imageAlt: 'The lid slid back to reveal the top of the box'
    imageSide: 'right'

  - heading: 'It organises the graveyard'
    body: >-
      A slotted insert sits under the lid. The graveyard goes in it, in order
      and in one place, instead of spreading across the play area and into
      someone else's cards.
    image: '/images/commander-deck-box/red/05-top-insert.jpg'
    imageAlt: 'The slotted graveyard insert, seen from above'
    imageSide: 'left'

  - heading: 'It shows your commander'
    body: >-
      The front is a window. Your commander sits behind it, facing the table,
      so everyone can see who they are playing against.
    image: '/images/commander-deck-box/red/02-front.jpg'
    imageAlt: 'The front window of the box, framed in red'
    imageSide: 'right'

  - heading: 'The frame matches your deck'
    body: >-
      The face frame is printed in one of five colours. Pick the one your deck
      plays. Everything else stays white, so the frame is the thing you notice.
    image: '/images/commander-deck-box/blue/01-hero.jpg'
    imageAlt: 'The box with a blue face frame'
    imageSide: 'left'

gallery:
  - image: '/images/commander-deck-box/red/01-hero.jpg'
    alt: 'The box with a red face frame'
    caption: 'Red'
  - image: '/images/commander-deck-box/yellow/01-hero.jpg'
    alt: 'The box with a white face frame'
    caption: 'White'
  - image: '/images/commander-deck-box/blue/01-hero.jpg'
    alt: 'The box with a blue face frame'
    caption: 'Blue'
  - image: '/images/commander-deck-box/green/01-hero.jpg'
    alt: 'The box with a green face frame'
    caption: 'Green'
  - image: '/images/commander-deck-box/grey/01-hero.jpg'
    alt: 'The box with a black face frame'
    caption: 'Black'

specs:
  Material: 'TBD — filament type and brand'
  Capacity: 'TBD — e.g. fits 100 double-sleeved cards'
  Dimensions: 'TBD — mm, closed'
  Weight: 'TBD — g'
  Parts: 'Lid, graveyard insert, body, face frame'
  Colours: 'Face frame in five colours; everything else white'
  Layer height: 'TBD'
  Finish: 'TBD — as-printed, layer lines visible'
  Assembly: 'TBD — snap-fit, no glue required'
  Made in: 'United Kingdom, to order'
---
