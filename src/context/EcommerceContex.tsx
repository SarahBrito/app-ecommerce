import React, { createContext, useState, useContext, useEffect, ChangeEvent } from 'react';

import Swal from 'sweetalert2';
interface Product {
  id: number;
  title: string;
  price: string,
  description:string,
  image: string,
  quantity:number,
  category: string,
}


interface EcommerceContextProps {
 
  cartItems: Product[];
  products: Product[];
  quantity: number
  searchTitle: string,
  cartQuantity: number,
  addToCart: (product: Product) => void;
  removeProduct: (value: number) => void;
  getProductsCategories: (value:string) => void
  handleShowCategoriesAll: ( ) => void
  updateItemValue: (itemId:number, newValue:number) => void
  searchProductsByTitle: (title:string) => void
  handleSearchInputChange: (event: ChangeEvent<HTMLInputElement>) =>void
}

interface EcommerceProvaiderProps {
  children: React.ReactNode
}

export const EcommerceContext = createContext({} as EcommerceContextProps);

const storedValue = localStorage.getItem('products');
const productsFromLocalStorage = storedValue ? JSON.parse(storedValue): null


const EcommerceProvider = ({ children }: EcommerceProvaiderProps) => {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState<Product[]>(productsFromLocalStorage)
  const [initialProducts, setInitialProducts] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [quantity, setQuantity] = useState(0);
  
  useEffect(()=>{
    localStorage.setItem("products", JSON.stringify(cartItems))
  },[cartItems])

  useEffect(() => {
    getProductsCategoriesAll()
  }, []);

 

  async function getProductsCategories (category:string) {
    
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await response.json()
    setProducts(data)
  }

  async function getProductsCategoriesAll() {
    const response = await fetch(`https://fakestoreapi.com/products`)
    const data = await response.json()
    setInitialProducts(data)
    setProducts(data)
  }
  
  const handleShowCategoriesAll = () =>{
    getProductsCategoriesAll();
  }

  const searchProductsByTitle = (title:string) => {
    // Filtrar os produtos pelo título fornecido
    const filteredProducts = initialProducts.filter((product:Product) =>
      product.title.toLowerCase().includes(title.toLowerCase())
    );

    // Atualizar o estado `products` com a lista filtrada
    setProducts(filteredProducts);
  };
  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTitle(value);

    if (value.trim() === '') {
      setProducts(initialProducts);
    } else {
      searchProductsByTitle(value);
    }
  };
  
  
  const updateItemValue = (itemId:number, newValue:number) => {
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[itemIndex].quantity = newValue;
      setCartItems(updatedItems);
    }
  };

  // const getTotalQuantity = (): number => {
  //   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  //   localStorage.setItem('cartQuantity', totalQuantity.toString());
  //   const cartQuantityFromStorage = localStorage.getItem('cartQuantity');
  //   let value = 0;
  
  //    if (cartQuantityFromStorage) {
  //     value = parseInt(cartQuantityFromStorage, 10);
  //   }
  //   return cartQuantityFromStorage ? parseInt(cartQuantityFromStorage, 10):value;
  // };
  
const getTotalQuantity = (): number => {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  localStorage.setItem('cartQuantity', totalQuantity.toString());
  const cartQuantityFromStorage = localStorage.getItem('cartQuantity');
  return parseInt(cartQuantityFromStorage ?? '0', 10);
};
 
  // Quantitades de items no carrinh
  const cartQuantity = getTotalQuantity();
  

  const addToCart = (productItem: Product) => {
  
  const itemIndex = cartItems.findIndex((item) => item.id === productItem.id);

  if (itemIndex !== -1) {
    // Item já está no carrinho
    const updatedCartItems = [...cartItems];
    updatedCartItems[itemIndex].quantity += 1; // Incrementa a quantidade em 1
    setCartItems(updatedCartItems);
  } else {
    // Item não está no carrinho
    const newItem = {
      ...productItem,
      quantity: 1, //quantidade inicial como 1 ou o valor desejado
    };
    setCartItems([...cartItems, newItem]);
  }

  setQuantity(quantity + 1);

  }


  const removeProduct = (productId:number) => {
    const updateCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updateCart);
    

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      text: `Produto removido do carrinho`,
      showConfirmButton: false,
      timer: 1500,
      width: 500,
      
    })
}

  return (
    <EcommerceContext.Provider value={{  
      addToCart, cartItems, 
      removeProduct,
      products,
      getProductsCategories,
      handleShowCategoriesAll,
      quantity,
      updateItemValue,
      searchProductsByTitle,
      handleSearchInputChange,
      searchTitle,
      cartQuantity
      }}>
      {children}
    </EcommerceContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEcommerce = () =>{
  const context = useContext(EcommerceContext)
  const {
    
    addToCart, 
    cartItems, 
    removeProduct, 
    products,
    getProductsCategories,
    handleShowCategoriesAll,
    quantity,
    updateItemValue,
    searchProductsByTitle,
    handleSearchInputChange,
    searchTitle,
    cartQuantity
  } = context

  return {
    
    addToCart, 
    cartItems, 
    removeProduct, 
    products,  
    getProductsCategories, 
    handleShowCategoriesAll,
    quantity,
    updateItemValue,
    searchProductsByTitle,
    handleSearchInputChange,
    searchTitle,
    cartQuantity
  }
}

export default EcommerceProvider;
