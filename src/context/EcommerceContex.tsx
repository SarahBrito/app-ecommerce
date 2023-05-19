import React, { createContext, useState, useContext } from 'react';


interface Product {
  id: number;
  title: string;
  price: string,
  description:string,
  image: string
}

interface EcommerceContextProps {
  quantityCartItems: number;
  cartItems: Product[];
  addToCart: (product: Product) => void;
}

interface EcommerceProvaiderProps {
  children: React.ReactNode
}

export const EcommerceContext = createContext({} as EcommerceContextProps);

const EcommerceProvider = ({ children }: EcommerceProvaiderProps) => {

  const [quantityCartItems, setQuantityCartItems] = useState(0);
  const [cartItems, setCartItems] = useState<Product[]>([])

  const addToCart = (productItem: Product) => {
    // Lógica para adicionar um item ao carrinho

    console.log(quantityCartItems)
    setCartItems([...cartItems, productItem])
    setQuantityCartItems(quantityCartItems + 1)
  };

  

  return (
    <EcommerceContext.Provider value={{ quantityCartItems, addToCart, cartItems }}>
      {children}
    </EcommerceContext.Provider>
  );
};

export const useEcommerce = () =>{
  const context = useContext(EcommerceContext)
  const {quantityCartItems, addToCart, cartItems} = context

  return {quantityCartItems, addToCart, cartItems}
}

export default EcommerceProvider;
