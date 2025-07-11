"use client"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { LucideInfo, LucideMonitor } from "lucide-react"


export default function Taskthree() {
    return (
        <div className="flex flex-col items-center min-h-svh p-4">
            <h1 className="text-3xl font-bold mb-6">Day 3</h1>
            <Card className="w-full max-w-[400px] border-green-400">
                <CardHeader>
                    <CardTitle className="text-xl text-center">Checkpoint 1</CardTitle>
                    <CardDescription className="text-center">Postingan</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center gap-2">
                    <Link to="/about">
                        <Button className="bg-blue-500"><LucideInfo />About</Button>
                    </Link>
                    <Link to="/posts">
                        <Button className="bg-green-500">Post Detail</Button>
                    </Link>
                </CardContent>
            </Card>

            <Card className="w-full max-w-[400px] mt-4 border-green-400">
                <CardHeader>
                    <CardTitle className="text-xl text-center">Checkpoint 2</CardTitle>
                    <CardDescription className="text-center">Products</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center gap-2">
                    <Link to="/products">
                        <Button className="bg-blue-500"><LucideMonitor/>Products</Button>
                    </Link>
                    <Link to="/cart">
                        <Button className="bg-green-500">Cart Detail</Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}