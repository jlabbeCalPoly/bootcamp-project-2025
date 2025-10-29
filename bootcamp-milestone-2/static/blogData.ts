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
        title: "How to make dynamic buttons using module scripts",
        date: "10/13/2025",
        category: "Code",
        image: "/tempIcon.png",
        imageAlt: "",
        slug: "/blogs/buttonComponent"
    },
    {
        title: "How to create user-friendly components for a settings page",
        date: "10/13/2025",
        category: "Code",
        image: "/tempIcon.png",
        imageAlt: "",
        slug: "/blogs/settingComponent"
    }
]; 

export default blogs; // This will allow us to access this data anywhere!