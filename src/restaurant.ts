export default class Restaurant {
  category: string;
  name: string;
  distance: number;
  menu: string[];

  constructor(
    category: string,
    name: string,
    distance: number,
    menu: string[]
  ) {
    this.category = category;
    this.name = name;
    this.distance = distance;
    this.menu = menu;
  }
}
