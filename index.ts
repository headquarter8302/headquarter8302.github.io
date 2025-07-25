export const enum BodyIdentifiers {
  Main = "main",
  Blog = "blog",
  Music = "music",
  NotFound = "notfound"
}

export const enum RootPages {
  Index = "/",
  Blog = "/blog",
  Music = "/music"
}

export const enum SectionTypes {
  Transparent = "transparent",
  Generic = "var(--bg-highlight)",
}

export const ExternalLinks = {
  GitHub: "https://github.com/headquarter8302",
  Fandom: {
    CommunityCentral: "https://community.fandom.com/wiki/User:Headquarter8302"
  } as const
} as const;
