import { Flex, Button } from "@radix-ui/themes";

import "@/styles/components/_button.scss";
export default function ButtonInput({
  gap,
  type,
  direction,
  children,
  onClick,
  disabled,
  className,
  styles,
}: //
{
  gap: string;
  type?: "button" | "submit" | "reset" | undefined;
  direction: any;
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  styles?: any;
}) {
  return (
    <Flex direction={direction} gap={gap} style={styles}>
      <Button
        type={type}
        color="gray"
        variant="soft"
        highContrast
        onClick={onClick}
        disabled={disabled}
        className={className}
      >
        {children}
      </Button>
    </Flex>
  );
}
