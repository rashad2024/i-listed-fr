// components/Toast.tsx
import * as Toast from "@radix-ui/react-toast";
import { useState } from "react";

export default function CustomToast() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"success" | "error">("success");

  const triggerToast = (msg: string, type: "success" | "error") => {
    setMessage(msg);
    setType(type);
    setOpen(true);
  };

  return (
    <Toast.Provider swipeDirection="right">
      <button onClick={() => triggerToast("Saved successfully!", "success")}>
        Show Success
      </button>
      <button onClick={() => triggerToast("Something went wrong!", "error")}>
        Show Error
      </button>

      <Toast.Root
        className={`toast ${type}`}
        open={open}
        onOpenChange={setOpen}
        duration={5000}
      >
        <Toast.Title className="toast-title">
          {type === "success" ? "✅ Success" : "❌ Error"}
        </Toast.Title>
        <Toast.Description className="toast-desc">{message}</Toast.Description>
      </Toast.Root>

      <Toast.Viewport className="toast-viewport" />
    </Toast.Provider>
  );
}
