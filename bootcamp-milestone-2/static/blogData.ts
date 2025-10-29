export interface Blog {
    title: string,
    date: string,
    category: string,
    image: string,
    imageAlt: string,
    slug: string
}

const blogs: Blog[] = [
	{
        title: "Blog no. 1",
        date: "10/13/2025",
        category: "Code",
        image: "/tempIcon.png",
        imageAlt: "",
        slug: "./blog1.html"
    },
    {
        title: "Blog no. 2",
        date: "10/13/2025",
        category: "Code",
        image: "/tempIcon.png",
        imageAlt: "",
        slug: "./blog2.html"
    }
]; 

export default blogs; // This will allow us to access this data anywhere!