import { Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
interface props {
  children: ReactNode;
}
export default function WrapperAuth({ children }: props) {
  return (
    <>
      <section  className="container p-5 sm:p-0 h-screen grid gap-10 items-center grid-cols-1 md:grid-cols-2 justify-self-center">
        {children}
        <div className="bg-blue-600 md:flex hidden text-center items-center h-full">
          <Stack
            direction="column"
            className="p-3 text-white "
            spacing={3}
            textAlign="start"
          >
            <Typography variant="h3">
              {" "}
              Start Your Blogging Journey
              <br /> Today
            </Typography>
            <Typography variant="subtitle1">
              Join our community of writers and share your stories with the
              world.
            </Typography>
          </Stack>
        </div>
      </section>
    </>
  );
}
