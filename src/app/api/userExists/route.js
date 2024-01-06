// In your '/home/anton/Desktop/sandboxs/nextjs_sandbox/fottis/src/app/api/userExists/route.js' file

import connectDB from "@/app/lib/mongodb";
import Apply from "@/app/models/apply";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const { email, phone } = await req.json();
    const checkEmailExists = await Apply.findOne({ email }).select("_id");
    const checkPhoneExists = await Apply.findOne({ phone }).select("_id");

    return NextResponse.json({ checkEmailExists, checkPhoneExists });
  } catch (error) {
    console.error(error);
    return NextResponse.error("An error occurred while processing the request.");
  }
}
