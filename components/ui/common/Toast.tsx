// components/FeatureNoticeToast.tsx
import { useEffect } from "react";
import * as Toast from "@radix-ui/react-toast";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";

import "@/styles/components/_toast.scss";

export default function CustomToast({
  onClose,
  headerMessage,
  bodyMessage,
}: {
  onClose: () => void;
  headerMessage: string;
  bodyMessage: string;
}) {
  const [open, setOpen] = useState(true);

  // Call parent onClose when toast closes
  useEffect(() => {
    if (!open) {
      onClose?.(); // Safe call if onClose exists
    }
  }, [open, onClose]);

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        duration={4000}
        className="feature-toast"
      >
        <div className="toast-content">
          <InfoCircledIcon className="toast-icon" />
          <div>
            <div className="toast-title">{headerMessage}</div>
            <div className="toast-desc">{bodyMessage}</div>
          </div>
        </div>
      </Toast.Root>
      <Toast.Viewport className="toast-viewport" />
    </Toast.Provider>
  );
}
