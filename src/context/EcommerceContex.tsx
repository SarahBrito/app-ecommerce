import React, { createContext, useState, useContext } from 'react';


interface Product {
  id: number;
  title: string;
  price: string,
  description:string,
  image: string,
  quantity: number
}

interface EcommerceContextProps {
  quantityCartItems: number;
  cartItems: Product[];
  addToCart: (product: Product) => void;
  selectedValue: string;
  updateSelectedValue: (value: string) => void;
  removeProduct: (value: any) => void
}

interface EcommerceProvaiderProps {
  children: React.ReactNode
}

export const EcommerceContext = createContext({} as EcommerceContextProps);

const EcommerceProvider = ({ children }: EcommerceProvaiderProps) => {

  const [quantityCartItems, setQuantityCartItems] = useState(0);
  const [cartItems, setCartItems] = useState<Product[]>([])

  const [selectedValue, setSelectedValue] = useState('');

  const updateSelectedValue = (value: string) => {
    setSelectedValue(value);
  };

  const addToCart = (productItem: Product) => {
    // Lógica para adicionar um item ao carrinho
    console.log(quantityCartItems)
    setCartItems([...cartItems, productItem])
    setQuantityCartItems(quantityCartItems + 1)
  };

  const removeProduct = (productId:any) => {
    const updateCart = cartItems.filter((product) => product.id !== productId);
    setCartItems(updateCart);
}

  return (
    <EcommerceContext.Provider value={{ quantityCartItems, addToCart, cartItems, selectedValue, updateSelectedValue, removeProduct }}>
      {children}
    </EcommerceContext.Provider>
  );
};

export const useEcommerce = () =>{
  const context = useContext(EcommerceContext)
  const {quantityCartItems, addToCart, cartItems, selectedValue, updateSelectedValue, removeProduct} = context

  return {quantityCartItems, addToCart, cartItems, selectedValue, updateSelectedValue, removeProduct}
}

export default EcommerceProvider;
