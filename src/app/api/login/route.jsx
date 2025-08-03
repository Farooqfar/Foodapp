import { NextResponse } from "next/server"
import User from "./../../../lib/mongodb.js"
export async function POST(req){
    let {email , password}= await req.json()
    try{

   
    let find =await User.findOne({email:email})
    if(!find) return;
    console.log(find)
    return NextResponse.json({
        find
    })
}
catch(error)
{
    return NextResponse.json({
        error
    })
}
}