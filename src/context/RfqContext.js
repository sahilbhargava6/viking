"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const RfqContext = createContext();

export function RfqProvider({ children }) {
  const [basket, setBasket] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("viking_rfq_basket");
      if (saved) {
        setBasket(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load RFQ basket", e);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem("viking_rfq_basket", JSON.stringify(basket));
    } catch (e) {
      console.error("Failed to persist RFQ basket", e);
    }
  }, [basket]);

  const addToBasket = (part, quantity = 1) => {
    setBasket((prev) => {
      const existing = prev.find((item) => item.id === part.id);
      if (existing) {
        return prev.map((item) =>
          item.id === part.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...part, quantity }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromBasket = (partId) => {
    setBasket((prev) => prev.filter((item) => item.id !== partId));
  };

  const updateQuantity = (partId, delta) => {
    setBasket((prev) =>
      prev
        .map((item) => {
          if (item.id === partId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const totalItems = basket.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <RfqContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
        updateQuantity,
        clearBasket,
        isDrawerOpen,
        setIsDrawerOpen,
        totalItems,
      }}
    >
      {children}
    </RfqContext.Provider>
  );
}

export function useRfq() {
  const ctx = useContext(RfqContext);
  if (!ctx) {
    throw new Error("useRfq must be used within an RfqProvider");
  }
  return ctx;
}
