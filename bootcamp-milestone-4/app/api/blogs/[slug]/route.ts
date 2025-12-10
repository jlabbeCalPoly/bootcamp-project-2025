import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/src/database/db";
import BlogModel from "@/src/database/blogSchema";

/* IParams is a TypeScript type definition that describes the structure of the second
   argument that Next.js passes to our API route handler.

   Without IParams:
   - TypeScript wouldn't know what properties the second argument contains
   - We'd lose autocomplete and type checking
   - Typos like { slug } vs { slg } wouldn't be caught until runtime

   With IParams:
   - TypeScript knows the second argument has a "params" object
   - TypeScript knows "params" contains a "slug" property that's a string
   - We get autocomplete when typing { params } and { slug }
   - TypeScript catches errors if we try to access non-existent properties

   Note: IParams doesn't control what Next.js creates - it just tells TypeScript
   what to expect. The actual object structure is determined by our file path:
   /api/blog/[slug]/route.ts creates { params: { slug: "actual-slug-value" } }
*/
type IParams = {
  params: {
    slug: string;
  };
};

/*
	The function below and the functions you create inside route.ts files are called
	"API route handlers" 
	
	Next.js automatically passes two arguments to API route handlers:
		1. First argument: NextRequest - The incoming HTTP request object
		2. Second argument: NextJS Object - Contains route information and other metadata
				There is ALWAYS a "params" object here but the object within is based on our
				api path naming which in this case is "slug"
	We need to include req, even though we don't use it here, so that we can access
	the second argument
*/
export async function GET(req: NextRequest, { params }: IParams) {
  // If { params } looks confusing, check the note below this code block

  await connectDB(); // function from db.ts before
  const { slug } = await params; // another destructure

  try {
    const blog = await BlogModel.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}

export async function POST(req: NextRequest, { params }: IParams) {
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

  // validate body
  const body = await req.json();
  if (!body) {
    return NextResponse.json(
      'There is an issue with the "body" of your request, please try again',
      { status: 404 }
    );
  }

  // validate slug
  const { slug } = await params;
  if (!slug) {
    return NextResponse.json(
      'There is an issue with the "slug" of your request, please try again',
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
  function validateMessage() {
    if (!validateType(body.Message) || !validatePresence(body.Message)) {
      errors.Message = "Message field cannot be left empty";
    } else if (!validateLen(body.Message, 2000)) {
      errors.Message = "Message must be under 200 characters";
    }
  }

  // validate each part of the body
  validateName();
  validateMessage();

  // If there are any issues with the form contents, error messages will be present in the errors dictionary
  if (Object.keys(errors).length === 0) {
    // Attempt to append to the database
    await connectDB();
    const res = await BlogModel.updateOne(
      { slug: slug },
      {
        $push: {
          comments: {
            $each: [
              {
                name: body.Name,
                date: new Date().toLocaleDateString("en-us"),
                message: body.Message,
              },
            ],
			$position: 0, // Since appending normally goes at the end, set the append position to 0 (helps with ordering the entries chronologically)
            $slice: 20,   // Limits the comment array to 20, prevents excessive data storing and removes the oldest comments
          },
        },
      }
    );
    // Check to see if something was updated
    if (res.modifiedCount !== 0) {
      return NextResponse.json(
        {
          message: "Your message was successfully recieved, thank you!",
        },
        { status: 200 }
      );
    } else {
		return NextResponse.json(
        {
          message: "There seemed to be a problem uploading your message, please try again",
        },
        { status: 500 }
      );
    }
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
