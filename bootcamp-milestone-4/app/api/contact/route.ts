import { NextRequest, NextResponse } from "next/server";
import PostEmail from "@/static/postEmail";

/* HELPER FUNCTIONS */

// Validates that the passed in value is a string
function validateType(val: string | undefined): boolean {
  return val !== undefined && typeof val === "string";
}

// Validate that the passed in value isn't just whitespace
function validatePresence(val: string): boolean {
  return val.trim().length > 0;
}

// Validate the length of the input provided, given a max length
function validateLen(val: string, max: number): boolean {
  return val.trim().length <= max;
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  // validate body
  if (!body) {
    return NextResponse.json(
      "There is an issue with the body of your request, please try again",
      { status: 404 }
    );
  }

  // create a dictionary to hold any error messages that occur
  const errors: { [error: string]: string } = {};

  // Form validation functions
  function validateName() {
    if (!validateType(body.Name) || !validatePresence(body.Name)) {
      errors.Name = "Name field cannot be left empty";
    } else if (!validateLen(body.Name, 40)) {
      errors.Name = "Name must be under 40 characters";
    }
  }
  function validateEmail() {
    if (!validateType(body.Email) || !validatePresence(body.Email)) {
      errors.Email = "Email field cannot be left empty";
    } else if (!validateLen(body.Email, 256)) {
      errors.Email = "Email must be under 256 characters";
    }
  }
  function validateSubject() {
    if (!validateType(body.Subject)) {
      errors.Subject = "Subject must be a string";
    } else if (!validateLen(body.Subject, 256)) {
      errors.Subject = "Subject must be under 256 characters";
    }
  }
  function validateMessage() {
    if (!validateType(body.Message) || !validatePresence(body.Message)) {
      errors.Message = "Message field cannot be left empty";
    } else if (!validateLen(body.Message, 1000)) {
      errors.Message = "Message must be under 1000 characters";
    }
  }

  // validate each part of the body
  validateName();
  validateEmail();
  validateSubject();
  validateMessage();

  // If there are any issues with the form contents, error messages will be present in the errors dictionary
  if (Object.keys(errors).length === 0) {
    const res = await PostEmail(body.Name, body.Email, body.Subject, body.Message);
    return res;
  } else {
    return NextResponse.json(
      {
        message:
          "Looks like a few fields need your attention. Please update them and submit again",
        errors: errors,
      },
      { status: 400 }
    );
  }
}
