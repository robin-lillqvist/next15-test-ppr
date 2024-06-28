let newsArticles = [
  { id: 1, title: "Breaking News: Market Crash", content: "The stock market experienced a significant crash today..." },
  {
    id: 2,
    title: "Weather Update: Storm Approaching",
    content: "A major storm is approaching the eastern seaboard...",
  },
  {
    id: 3,
    title: "Sports: Local Team Wins Championship",
    content: "The local team won the championship game last night...",
  },
];

let categoryArticles = {
  technology: [
    {
      id: 4,
      title: "New Smartphone Released",
      content: "The latest smartphone model has been released with new features...",
    },
    {
      id: 5,
      title: "AI Advances in Healthcare",
      content: "AI technology is making significant advances in the healthcare industry...",
    },
  ],
  sports: [
    { id: 6, title: "Olympics Update", content: "The Olympics are in full swing with many exciting events..." },
    { id: 7, title: "Soccer World Cup Highlights", content: "Highlights from the recent soccer world cup games..." },
  ],
};

let userActivity = [
  { description: 'Commented on "Breaking News: Market Crash"' },
  { description: 'Liked "Weather Update: Storm Approaching"' },
  { description: 'Shared "Sports: Local Team Wins Championship"' },
];

export { newsArticles, categoryArticles, userActivity };
