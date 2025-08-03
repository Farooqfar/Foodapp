import { NextResponse } from "next/server"
import User from "./../../../lib/mongodb.js"
export async function POST(req) {
    let { FirstName, LastName, email, password } = await req.json();
    try{

    
    const find = await User.findOne({email:email})
    if(find) return
    const addData = User.create({
        FirstName,
        LastName,
        email,
        password
    })
    return NextResponse.json({
        addData
    })
}catch(error)
{
    return error
}
}