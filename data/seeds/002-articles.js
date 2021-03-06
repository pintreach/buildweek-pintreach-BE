exports.seed = function(knex) {
  return knex('articles').insert([
    {
      title:
        'Canagliflozin and Renal Outcomes in Type 2 Diabetes and Nephropathy',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1811744',
      user_id: 1,
      type: 'medicine',
    },
    {
      title:
        'Coronary Angiography after Cardiac Arrest without ST-Segment Elevation',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1816897',
      user_id: 1,
      type: 'medicine',
    },
    {
      title:
        'Glutaminase Deficiency Caused by Short Tandem Repeat Expansion in GLS',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1806627',
      user_id: 1,
      type: 'medicine',
    },
    {
      title:
        'Compartmentalized gut lymph node drainage dictates adaptive immune responses',
      url: 'https://www.nature.com/articles/s41586-019-1125-3',
      user_id: 2,
      type: 'medicine',
    },
    {
      title: 'The bone marrow microenvironment at single-cell resolution',
      url: 'https://www.nature.com/articles/s41586-019-1104-8',
      user_id: 2,
      type: 'biology',
    },
    {
      title:
        'No detection of methane on Mars from early ExoMars Trace Gas Orbiter observations',
      url: 'https://www.nature.com/articles/s41586-019-1096-4',
      user_id: 2,
      type: 'physics',
    },
    {
      title: 'Gauging Market Responses to Monetary Policy Communication',
      url:
        'https://research.stlouisfed.org/publications/review/2019/02/14/gauging-market-responses-to-monetary-policy-communication/',
      user_id: 3,
      type: 'economics',
    },
    {
      title:
        'The Real Term Premium in a Stationary Economy with Segmented Asset Markets',
      url:
        'https://research.stlouisfed.org/publications/review/2019/04/15/the-real-term-premium-in-a-stationary-economy-with-segmented-asset-markets/',
      user_id: 3,
      type: 'economics',
    },
    {
      title:
        'Predicting the Yield Curve Inversions that Predict Recessions: Part 2',
      url:
        'https://research.stlouisfed.org/publications/economic-synopses/2019/04/15/predicting-the-yield-curve-inversions-that-predict-recessions-part-2/',
      user_id: 3,
      type: 'economics',
    },
  ]);
};
