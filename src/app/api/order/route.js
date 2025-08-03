import Order from "./../../../lib/order.js"
import { NextResponse } from "next/server";

export async function POST(req) {
    let { fullname, food, address, phone } = await req.json();
    let data = await Order.create({
        fullname,
        food,
        address,
        phone
    })
    return NextResponse.json({
        message: "success"
    })
}
export async function GET(req) {
    const find =await Order.find();
    console.log(find)
    return NextResponse.json({
        order:find
    })
}