var Blogs = [
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
];
var blogContainer = document.getElementById('blog-container');
Blogs.forEach(function (blog) {
    var blogList = document.createElement("div");
    blogList.className = "blog-list";
    var blogListImage = document.createElement("div");
    blogListImage.className = "blog-list-image";
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    blogListImage.append(image);
    var blogListDescription = document.createElement("div");
    blogListDescription.className = "blog-list-description";
    var h2 = document.createElement("h2");
    h2.textContent = blog.title;
    var h3 = document.createElement("h3");
    h3.textContent = blog.date;
    var pDescription = document.createElement("p");
    pDescription.textContent = blog.description;
    var a = document.createElement("a");
    a.href = blog.slug;
    a.textContent = "Learn more";
    blogListDescription.append(h2);
    blogListDescription.append(h3);
    blogListDescription.append(pDescription);
    blogListDescription.append(a);
    blogList.append(blogListImage);
    blogList.append(blogListDescription);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.append(blogList);
});
