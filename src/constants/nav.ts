export const navItems = [
  "HOME",
  "SHOP",
  "SERVICES",
  "ABOUT US",
  "BLOG",
  "CONTACT US",
];

export const getNavURL = (item: string) => {
  switch (item) {
    case "HOME":
      return "/";
    default:
      return `/${item.toLowerCase().replace(" ", "-")}`;
  }
};
