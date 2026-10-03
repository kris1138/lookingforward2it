export interface Copy {
  meta: {
    title: string;
    description: string;
    ogImageAlt: string;
  };
  nav: {
    stay: string;
    story: string;
    films: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleEm: string;
    titleB: string;
    lead: string;
    ctaSubscribe: string;
    ctaWatch: string;
    note: string;
    imageAlt: string;
  };
  intro: {
    eyebrow: string;
    pull: string;
  };
  cols: { title: string; body: string }[];
  story: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    caption: string;
    imageAlt: string;
    teaserCta: string;
  };
  now: {
    eyebrow: string;
    rows: { when: string; what: string }[];
  };
  films: {
    eyebrow: string;
    title: string;
    lead: string;
    listLabel: string;
    foot: string;
    playLabel: string;
    playerTitle: string;
  };
  stay: {
    eyebrow: string;
    title: string;
    lead: string;
    rooms: { title: string; body: string }[];
    teaserLead: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    labelWhere: string;
    labelWatch: string;
    labelFollow: string;
    labelWrite: string;
    address: string;
    addressNote: string;
    teaserCta: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    blurb: string;
    visitHeading: string;
    findUsHeading: string;
    findUs: string;
    note: string;
  };
}
