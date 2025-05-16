// components/FeatureNoticeToast.tsx
import { useEffect } from "react";
import * as Toast from "@radix-ui/react-toast";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";

import "@/styles/components/_toast.scss";

export default function CustomToast({ onClose }: { onClose: () => void }) {
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
        duration={1000}
        className="feature-toast"
      >
        <div className="toast-content">
          <InfoCircledIcon className="toast-icon" />
          <div>
            <div className="toast-title">Notifications Coming Soon</div>
            <div className="toast-desc">
              This feature is currently under development and will be available
              in an upcoming update. Stay tuned!
            </div>
          </div>
        </div>
      </Toast.Root>
      <Toast.Viewport className="toast-viewport" />
    </Toast.Provider>
  );
}
