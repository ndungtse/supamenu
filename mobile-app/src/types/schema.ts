interface Timestamps {
    createdAt: Date;
    updatedAt: Date;
  }
  
  interface User extends Timestamps {
    id: string;
    email: string;
    fullName: string;
    phoneNumber: string;
    password: string;
    orders: Order[];
    cart: Cart;
    cartId: string;
    role: Role;
    verified: boolean;
    verificationToken?: string;
  }
  
  interface Item extends Timestamps {
    id: string;
    name: string;
    priceInRwf: number;
    price: number;
    image: string;
    imagePath: string;
    description: string;
    isAvailableForPurchase: boolean;
    quantityAvailable: number;
    Order: Order[];
    cartId?: string;
    Restaurant?: Restaurant;
    restaurantId?: string;
    Menu?: Menu;
    menuId?: string;
    CartItem: CartItem[];
  }
  
  interface Order extends Timestamps {
    id: string;
    user: User;
    userId: string;
    items: Item[];
    cart: Cart;
    cartId: string;
    totalPrice: number;
    status: Status;
  }
  
  interface Cart extends Timestamps {
    id: string;
    user?: User;
    userId?: string;
    items: CartItem[];
    totalPrice: number;
    Order: Order[];
  }
  
  interface CartItem extends Timestamps {
    id: string;
    item: Item;
    itemId: string;
    quantity: number;
    cart: Cart;
    cartId: string;
  }
  
  interface Restaurant extends Timestamps {
    id: string;
    name: string;
    address: string;
    phoneNumber: string;
    imagePath?: string;
    image?: string;
    menu: Item[];
  }
  
  interface Menu extends Timestamps {
    id: string;
    name: string;
    items: Item[];
    restaurantId: string;
  }
  
  enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN',
  }
  
  enum Status {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    DELIVERED = 'DELIVERED',
    CANCELLED = 'CANCELLED',
  }