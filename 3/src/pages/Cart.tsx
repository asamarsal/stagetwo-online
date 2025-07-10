import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Loader2Icon, LucideHome, LucideTrash } from "lucide-react"

import React, { useEffect, useState } from "react"

export default function Cart() {

  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh select-none bg-blue-600">
        <Card className="w-full max-w-[400px]">
          <CardHeader>
            <CardTitle className="text-xl text-center">Cart</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center gap-2">
            <ul className="px-6 pb-2">
              {cart.length === 0 ? (
                <li>Cart kosong</li>
              ) : (
                cart.map((item) => (
                  <li key={item.id} className="mb-2 flex items-center">
                    <img src={item.image} alt={item.title} className="w-30 h-20 m-2" />
                    {item.title}
                  </li>
                ))
              )}
            </ul>
          </CardContent>
          <CardContent className="flex justify-center gap-2">
              <Link to="/">
                  <Button className="bg-blue-500">
                    <LucideHome/>Home</Button>
              </Link>
              <Button className="bg-yellow-500" 
              onClick={() => {
                localStorage.removeItem("cart");
                setCart([]);
                }}>
                  <LucideTrash />Hapus
              </Button>
              <Link to="/products">
                  <Button className="bg-red-500">
                    <Loader2Icon className="animate-bounce" />Products
                  </Button>
              </Link>
          </CardContent>
      </Card>
    </div>
  )
}