
import { Button, Card, CardContent, Typography, Stack } from "@mui/material";

// Mock data
const blogs = [
  {
    id: 1,
    userId: "user123",
    title: "First Blog",
    content: "This is the first blog content.",
  },
  {
    id: 2,
    userId: "user456",
    title: "Second Blog",
    content: "Another blog, from another user.",
  },
];

// Assume this is the currently logged-in user
const currentUserId = "user123";

export default function DiscoverBlogsPage() {
  const handleDelete = (id) => {
    // Implement delete logic (e.g., call API)
    console.log("Deleting blog with ID:", id);
  };

  const handleEdit = (id) => {
    // Navigate to edit page or open modal
    console.log("Editing blog with ID:", id);
  };

  return (
    <section className="max-w-4xl mx-auto p-4">
      <Typography variant="h4" gutterBottom>
        📚 Discover Blogs
      </Typography>

      <Stack spacing={3}>
        {blogs.map((blog) => (
          <Card key={blog.id} className="shadow-md">
            <CardContent>
              <Typography variant="h6">{blog.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {blog.content}
              </Typography>

              {/* Only show actions if it's the current user's blog */}
              {blog.userId === currentUserId && (
                <Stack direction="row" spacing={2} mt={2}>
                  <Button variant="outlined" color="primary" onClick={() => handleEdit(blog.id)}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="error" onClick={() => handleDelete(blog.id)}>
                    Delete
                  </Button>
                </Stack>
              )}
            </CardContent>
          </Card>
        ))}
      </Stack>
    </section>
  );
}
