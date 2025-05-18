// app/not-found.tsx
"use client";

import { useRouter } from "next/navigation";

import { Flex, Link, Text } from "@radix-ui/themes";

import Icon from "@/components/ui/common/Icon";

import "@/styles/pages/not-found.scss";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="not-found-container">
      <Text as="div" className="not-found-top-icon">
        <Icon name="NotFoundIcon" />
      </Text>
      <Text as="div" className="not-found-bottom-icon">
        <Icon name="NotFound2Icon" />
      </Text>
      <h1 className="page-logo">iListed</h1>
      <h1 className="not-found-header">404</h1>
      <h1 className="not-found-subheader">OPPS! page not found</h1>
      <p className="not-found-text">
        The link you clicked may be broken or the page may have been removed or
        renamed
      </p>
      <Flex gap={"3"} justify={"center"} align={"center"}>
        <Link href="/add-property" className="btn-primary add-property">
          <Icon name="ArrowLeftIcon" size={24} color="white" /> Go Home
        </Link>
      </Flex>
    </div>
  );
}
