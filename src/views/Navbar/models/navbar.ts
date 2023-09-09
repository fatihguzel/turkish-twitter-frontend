export interface NavItem {
  name: string;
  route: string;
  icon: string;
  children: NavItem[];
}

export const navItems: NavItem[] = [
  {
    name: "Ana Sayfa",
    route: "/",
    icon: "mdi-home",
    children: [],
  },
  {
    name: "Profil",
    route: "/profile",
    icon: "mdi-account",
    children: [],
  },
  {
    name: "Logout",
    route: "/account/login",
    icon: "mdi-logout",
    children: [],
  },
];
