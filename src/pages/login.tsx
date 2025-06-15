import { Button, Stack, TextField, Typography } from "@mui/material";
import WrapperAuth from "../components/authContainer";

export default function Loign() {
  return (
    <WrapperAuth>
          <Stack spacing={2}>
      <Typography variant="h2">welcome</Typography>
        <TextField id="name" label="name" variant="outlined" />
        <p className="text-red-500 hidden text-sm font-light">
          This field is required
        </p>
        <TextField id="password" label="password" variant="outlined" />
        <p className="text-red-500 hidden text-sm font-light">
          This field is required
        </p>
        <Button size="medium" sx={{ width: "200px" }} variant="contained">
          login
        </Button>
        <p>
          Do you have an account ,
          <a className="text-blue-600" href="/register">
            Register now 
          </a>
        </p>
      </Stack>
    </WrapperAuth>
  );
}
