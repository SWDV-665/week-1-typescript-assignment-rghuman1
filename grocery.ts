class Grocery {
    name: string;
    quantity: number;
    // You can add more attributes if needed, like price, category, etc.
  
    constructor(name: string, quantity: number) {
      this.name = name;
      this.quantity = quantity;
    }
  }
  
  // Creating an array of grocery items
  const groceries: Grocery[] = [
    new Grocery("Milk", 3),
    new Grocery("Bread", 6),
    new Grocery("Eggs", 11),
  ];
  
  // Export the groceries array so it can be used in other files
  export { groceries };
  