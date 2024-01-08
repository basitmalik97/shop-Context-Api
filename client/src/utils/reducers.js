import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  TOGGLE_CART,
} from "./actions";

const initialState = {
  products: [
    {
      _id: 20,
      image: "/images/bedtime-book.jpg",
      name: "Book",
      price: 200,
      quantity: 4,
    },
    {
      _id: 19,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStfXaH1x0y81g0TUZ-cMmy5_Oj-Uj_Z4wXxw&usqp=CAU",
      name: "Book 2",
      price: 200,
      quantity: 4,
    },
    {
      _id: 18,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYH4Pq0M_pgjROfvoTRbG1LrAeeEd8iLaaTA&usqp=CAU",
      name: "Book 3",
      price: 200,
      quantity: 4,
    },
    {
      _id: 17,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfCL4tBjqO68lFpswwGjcRmhKskBzL254Llw&usqp=CAU",
      name: "Book 4",
      price: 200,
      quantity: 4,
    },
    {
      _id: 16,
      image: "/images/bedtime-book.jpg",
      name: "Book 5",
      price: 200,
      quantity: 4,
    },
    {
      _id: 15,
      image: "/images/bedtime-book.jpg",
      name: "Book 5",
      price: 200,
      quantity: 4,
    },
    {
      _id: 14,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUmKe903BV-QQgMDWvMRWRwVLCxH2BgucuxTHRKTnGG2eA4PlGPesghaGQrOQf28trJQ&usqp=CAU",
      name: "Book 5",
      price: 200,
      quantity: 4,
    },
    {
      _id: 13,
      image: "/images/bedtime-book.jpg",
      name: "Book 5",
      price: 200,
      quantity: 4,
    },
    {
      _id: 12,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAoOhrsSpaZorwn5CweAaYuUEIDoBdA7MFQ&usqp=CAU",
      name: "Book 5",
      price: 200,
      quantity: 4,
    },
    {
      _id: 11,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNuwV50M_oBYL0DdTlHRB0TjnutmbpIAvp2Q&usqp=CAU",
      name: "Book 5",
      price: 200,
      quantity: 4,
    },
    {
      _id: 10,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqzV6sZzkf55uewzb7dZc33c20gFwhvdoGQ&usqp=CAU",
      name: "Book 5",
      price: 200,
      quantity: 4,
    },
    {
      _id: 9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPce8Hhcyjei10ipGotw7nn25K7rGDpzUimQ&usqp=CAU",
      name: "Book 5",
      price: 200,
      quantity: 4,
    },
    {
      _id: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefNycTXUhfYtLVnxiNtjS3fmY1oI2uyuzpA&usqp=CAU",
      name: "Book 5",
      price: 200,
      quantity: 4,
    },
    {
      _id: 7,
      image:
        "https://www.smartstone.com.au/wp-content/uploads/2019/06/kichen-reno-Stylekitchensbydesign_statuariovenato.jpg",
      name: "Book 5",
      price: 200,
      quantity: 4,
    },
    {
      _id: 6,
      image:
        "https://s.alicdn.com/@sc04/kf/H2e45e7b0359e447584140038258e370er.jpg_300x300.jpg",
      name: "Book 5",
      price: 200,
      quantity: 4,
    },
    {
      _id: 5,
      image:
        "https://vnetfurniture.com/assets/images/thumbs/649becf03b1ad8ded389e02a_purist-kichen-cabinet-concept_800.jpeg",
      name: "Book 5",
      price: 200,
      quantity: 4,
    },
    {
      _id: 4,
      image:
        "https://s.alicdn.com/@sc04/kf/H207056a23db24eca8702f83e641a4013y.jpg_300x300.jpg",
      name: "Book 5",
      price: 200,
      quantity: 4,
    },
    {
      _id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUoyl8Zc4Q5b4xwBdWNMTZaUX5DTyxZesB6q9HgCG8RmgArzlAJoQ8SAW0CJlZ4scuQs&usqp=CAU",
      name: "Book 5",
      price: 200,
      quantity: 4,
    },
    {
      _id: 2,
      image:
        "https://wealdkitchenmakers.co.uk/wp-content/uploads/2016/06/Edmondson-Interiors-Davis3.jpg",
      name: "Book 5",
      price: 200,
      quantity: 4,
    },
    {
      _id: 1,
      image:
        "https://media.nkba.org/nkba/2021/04/15/60788498b8fabc06cfb5032f/lake-front-kichen-design-by-vivian-khoury-1920x1920.jpg",
      name: "Book 5",
      price: 200,
      quantity: 4,
    },
  ],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };
    // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    default:
      return state;
  }
};

export default reducer;
