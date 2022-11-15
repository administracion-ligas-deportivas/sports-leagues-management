import { Alert } from "@mui/material";

export function InputWithError({ children, error, severity = "error" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".1rem" }}>
      {children}
      {error && <Alert severity={severity}>{error?.message ?? ""}</Alert>}
    </div>
  );
}
