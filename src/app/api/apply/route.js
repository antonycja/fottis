import connectDB from "@/app/lib/mongodb";
import Apply from "@/app/models/apply";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.json();
  console.log("Full Name: ", formData.firstName, formData.lastName);
  console.log("Email: ", formData.email);
  console.log("Phone Number: ", formData.phone);
  console.log("Area: ", formData.area);
  console.log("Rent: ", formData.rent);

  try {
    await connectDB();
    await Apply.create(formData);

    return NextResponse.json({
      msg: ["Application was successfully submitted."],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let err in error.errors) {
        errorList.push(error.errors[err].message);
      }
      console.log(errorList)
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable submit application."] });
    }
  }

}
