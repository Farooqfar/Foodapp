import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import Post from "@/lib/post";
export async function POST(req) {
    const data = await req.formData();
    const fullname = data.get("fullname")
    const description = data.get("description")
    const price = data.get("price")
    const file = data.get("image")
    const bytes = await file.arrayBuffer();
    const buffer =await Buffer.from(bytes);
    const path = `./public/${file.name}`
    await writeFile(path, buffer)
    const post = await Post.create({
        fullname,
        description,
        price,
        image: file.name
    })
    return NextResponse.json({
        post
    })
}

export async function GET(req, res) {
    let allPost = await Post.find();
    return NextResponse.json({
        allPost
    })
}

export async function DELETE(req) {
    let { id } = await req.json()
    const del = await Post.findOneAndDelete({ _id: id })
    return NextResponse.json({
        message: "delete"
    })
}