import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import Post from "@/lib/post";
import { NextResponse } from "next/server";
import Post from "@/lib/post";

export async function POST(req) {
    try {
        const data = await req.formData();

        const fullname = data.get("fullname");
        const description = data.get("description");
        const price = data.get("price");
        const file = data.get("image");

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const base64 = buffer.toString("base64");
        const mimeType = file.type;
        const base64Image = `data:${mimeType};base64,${base64}`;

        const post = await Post.create({
            fullname,
            description,
            price,
            image: base64Image // store as base64
        });

        return NextResponse.json({ post });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
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