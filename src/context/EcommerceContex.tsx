import React, { createContext, useState, useContext, useEffect } from 'react';

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
  quantityCartItems: number;
  cartItems: Product[];
  products: Product[];
  addToCart: (product: Product) => void;
  removeProduct: (value: number) => void;
  getProductsCategories: (value:string) => void
  handleShowCategoriesAll: ( ) => void
  // incrementValue:()=> void
  // decrementValue:()=> void
  quantity: number
  updateItemValue: (itemId:number, newValue:number)=>void
}

interface EcommerceProvaiderProps {
  children: React.ReactNode
}

export const EcommerceContext = createContext({} as EcommerceContextProps);

const EcommerceProvider = ({ children }: EcommerceProvaiderProps) => {

  const [products, setProducts] = useState([]);
  const [quantityCartItems, setQuantityCartItems] = useState(0);
  const [cartItems, setCartItems] = useState<Product[]>([])
 
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
    setProducts(data)
  }
  
  const handleShowCategoriesAll = () =>{
    getProductsCategoriesAll();
  }
  
  const [quantity, setQuantity] = useState(0);

  // const incrementValue = () => {
  //   setQuantity(quantity + 1);
  // };

  // const decrementValue = () => {
  //   setQuantity(quantity - 1);
  // };

  const updateItemValue = (itemId:number, newValue:number) => {
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[itemIndex].quantity = newValue;
      setCartItems(updatedItems);
    }
  };

  const addToCart = (productItem: Product) => {
  
  const itemIndex = cartItems.findIndex((item) => item.id === productItem.id);

  if (itemIndex !== -1) {
    // Item já está no carrinho, atualize a propriedade quantity
    const updatedCartItems = [...cartItems];
    updatedCartItems[itemIndex].quantity += 1; // Incrementa a quantidade em 1
    setCartItems(updatedCartItems);
  } else {
    // Item não está no carrinho, adicione-o com quantidade 1
    const newItem = {
      ...productItem,
      quantity: 1, // Defina a quantidade inicial como 1 ou o valor desejado
    };
    setCartItems([...cartItems, newItem]);
  }

  setQuantityCartItems(quantityCartItems + 1);
  setQuantity(quantity + 1);
   
  }

  const removeProduct = (productId:number) => {
    const updateCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updateCart);
    setQuantityCartItems(quantityCartItems - 1)

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
      quantityCartItems, 
      addToCart, cartItems, 
      removeProduct,
      products,
      getProductsCategories,
      handleShowCategoriesAll,
      // incrementValue,
      // decrementValue,
      quantity,
      updateItemValue
      
      }}>
      {children}
    </EcommerceContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEcommerce = () =>{
  const context = useContext(EcommerceContext)
  const {
    quantityCartItems, 
    addToCart, 
    cartItems, 
    removeProduct, 
    products,
    getProductsCategories,
    handleShowCategoriesAll,
    // incrementValue,
    // decrementValue,
    quantity,
    updateItemValue
  } = context

  return {
    quantityCartItems, 
    addToCart, 
    cartItems, 
    removeProduct, 
    products,  
    getProductsCategories, 
    handleShowCategoriesAll,
    // incrementValue,
    // decrementValue,
    quantity,
    updateItemValue
  }
}

export default EcommerceProvider;
