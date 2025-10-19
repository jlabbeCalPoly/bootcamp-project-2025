type Blog = {
    title: string,
    date: string,
    description: string,
    image: string,
    imageAlt: string,
    slug: string
}

const Blogs: Blog[] = [
    {
        title: "Blog no. 1",
        date: "10/13/2025",
        description: "Blog no. 1 is focused on... and discusses...",
        image: "../Assets/tempIcon.png",
        imageAlt: "ImageAlt",
        slug: "./blog1.html"
    },
    {
        title: "Blog no. 2",
        date: "10/13/2025",
        description: "Blog no. 2 is focused on... and discusses...",
        image: "../Assets/tempIcon.png",
        imageAlt: "ImageAlt",
        slug: "./blog2.html"
    }
]

const blogContainer = document.getElementById('blog-container');

Blogs.forEach((blog) => {
    const blogList = document.createElement("div");
    blogList.className = "blog-list";

    const blogListImage = document.createElement("div");
    blogListImage.className = "blog-list-image";

    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;

    blogListImage.append(image);

    const blogListDescription = document.createElement("div");
    blogListDescription.className = "blog-list-description";

    const h2 = document.createElement("h2");
    h2.textContent = blog.title;

    const h3 = document.createElement("h3");
    h3.textContent = blog.date;

    const pDescription = document.createElement("p");
    pDescription.textContent = blog.description;

    const a = document.createElement("a");
    a.href = blog.slug;
    a.textContent = "Learn more";

    blogListDescription.append(h2);
    blogListDescription.append(h3);
    blogListDescription.append(pDescription);
    blogListDescription.append(a);

    blogList.append(blogListImage);
    blogList.append(blogListDescription);
    blogContainer?.append(blogList);
})