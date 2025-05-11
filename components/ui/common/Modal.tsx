import React, { useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import "@/styles/components/_modal.scss"; // Optional: for custom styles

import Icon from "@/components/ui/common/Icon";

export default function ModalDemo({
  HeadingImage,
  BodyContent,
  closeIcon = "Cross2Icon",
  ActionContainer,
  modalOpen,
}: {
  HeadingImage: any;
  BodyContent: any;
  closeIcon: string;
  ActionContainer: any;
  modalOpen: any;
}) {
  const [open, setOpen] = useState(true);
  return (
    <Dialog.Root open={open}>
      {/* <Dialog.Trigger asChild>
        <button className="button">Open Modal</button>
      </Dialog.Trigger> */}

      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay" />
        <Dialog.Content className="modal-content">
          <Dialog.Title className="modal-title">
            {" "}
            <HeadingImage />{" "}
          </Dialog.Title>
          <Dialog.Description className="modal-description">
            <BodyContent />
            <ActionContainer
              closeModal={() => {
                modalOpen(false);
                setOpen(false);
              }}
            />
          </Dialog.Description>

          <Dialog.Close asChild>
            <button
              className="modal-close"
              aria-label="Close"
              onClick={() => {
                modalOpen(false);
                setOpen(false);
              }}
            >
              <Icon name={closeIcon} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
