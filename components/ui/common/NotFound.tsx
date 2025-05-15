import { Flex, Text, Link } from "@radix-ui/themes";

import Icon from "@/components/ui/common/Icon";
import ButtonInput from "./Button";

export default function NotFoundPage() {
  return (
    <Flex
      gap={"3"}
      direction={"column"}
      justify={"center"}
      align={"center"}
      style={{ marginTop: "180px" }}
    >
      <Flex gap={"3"} justify={"center"} align={"center"}>
        <Icon name="NoPropertyIcon" size={213} />
      </Flex>
      <Flex gap={"3"} justify={"center"} align={"center"}>
        <Text className="card-header">No Properties Yet</Text>
      </Flex>
      <Flex gap={"3"} justify={"center"} align={"center"}>
        <Text className="card-content">
          "Start building your property listings to manage and publish them
          here. Once added, they’ll appear in your dashboard for quick editing,
          tracking, and control.
        </Text>
      </Flex>
      <Flex gap={"3"} justify={"center"} align={"center"}>
        <Link href="/add-property" className="btn-primary add-property">
          <Icon name="PlusIcon" size={24} color="white" /> Add Property
        </Link>
      </Flex>
    </Flex>
  );
}
