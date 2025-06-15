import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    console.log("Blog created:", newBlog);

    // Reset form
    setTitle("");
    setContent("");
    // Optionally: redirect or show success message
  };

  return (
    <section className="h-screen grid  items-center">
      <div className="mx-auto w-full sm:w-[60%] p-4 justify-self-center mt-10 rounded bg-white">
        <Typography variant="h4" gutterBottom>
          📝 Create New Blog
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Blog Title"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <TextField
              label="Blog Content"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />

            <Button variant="contained" color="primary" type="submit">
              Publish
            </Button>
          </Stack>
        </form>
      </div>
    </section>
  );
}
