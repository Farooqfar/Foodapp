import Order from "./../../../lib/order.js";
import { NextResponse } from "next/server";

// POST - Create a new order
export async function POST(req) {
    try {
        const { fullname, food, address, phone } = await req.json();

        // Input validation
        if (!fullname || !food || !address || !phone) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const newOrder = await Order.create({
            fullname,
            food,
            address,
            phone,
        });

        return NextResponse.json(
            { message: "Order created successfully", order: newOrder },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating order:", error);
        return NextResponse.json(
            { error: "Failed to create order" },
            { status: 500 }
        );
    }
}

// GET - Fetch all orders
export async function GET(req) {
    try {
        const orders = await Order.find();
        return NextResponse.json(
            { orders },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching orders:", error);
        return NextResponse.json(
            { error: "Failed to fetch orders" },
            { status: 500 }
        );
    }
}