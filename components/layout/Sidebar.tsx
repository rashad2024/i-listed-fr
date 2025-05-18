"use client";

import { persistor } from "@/store";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store";
import { useRouter } from "next/navigation";

import { Text, Link } from "@radix-ui/themes";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import Icon from "../ui/common/Icon";
import ButtonInput from "@/components/ui/common/Button";
import CustomToast from "@/components/ui/common/Toast";

import { logout } from "@/features/redux/Auth/authThunks";

import "../../styles/components/_sidebar.scss";

export default function Sidebar({ pageType }: { pageType?: string }) {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.auth
  );
  const router = useRouter();

  const logoutUser = async () => {
    // Optional: Clear other storage

    localStorage.removeItem("persist:root");
    persistor.purge();

    await dispatch(logout())
      .unwrap()
      .then((data) => {
        // Do something after store is updated

        if (data) {
          // Purge persisted state
          router.push("/login"); //
        }
      })
      .catch((err) => {
        console.error("Registration error:", err);
        router.push("/login"); //
      });
  };

  return (
    <div className="sidebar">
      <div className="logo">iListed</div>
      <hr />

      <div className="menu ">
        <Accordion.Root
          type="multiple"
          className="accordionRoot"
          defaultValue={["property-navigation"]}
        >
          {/* <Accordion.Item value="dashboard" className="accordionItem">
            <Accordion.Header>
              {/* <Accordion.Trigger className="accordionTrigger"> */}
          {/* <Link href="/dashboard">
            <Icon name="CustomDashboardIcon" size={16} />
            <Text>Dashboard</Text>
          </Link> */}
          {/* </Accordion.Trigger> */}
          {/* </Accordion.Header>
          </Accordion.Item> */}
          <Accordion.Item
            value="property-navigation"
            className={`accordionItem ${pageType ? "active" : ""}`}
          >
            <Accordion.Header>
              <Accordion.Trigger className="accordionTrigger">
                <span>
                  <Icon name="HouseIcon" size={16} /> <Text>Properties</Text>
                </span>
                <ChevronDownIcon />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="accordionContent">
              <Link
                href="/add-property"
                className={pageType === "add-property" ? "active" : ""}
              >
                <Text>Add Property</Text>
              </Link>
              <Link
                href="/property/list/drafts"
                className={pageType === "drafts" ? "active" : ""}
              >
                <Text>Drafts</Text>
              </Link>
              <Link
                href="/property"
                className={pageType === "property" ? "active" : ""}
              >
                <Text>Listings</Text>
              </Link>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2" className="accordionItem">
            <Accordion.Header>
              {/* <Accordion.Trigger className="accordionTrigger"> */}
              <ButtonInput
                type="button"
                gap={"3"}
                className="btn-primary"
                direction={"column"}
                onClick={() => logoutUser()}
                disabled={loading}
              >
                <span>Logout</span>
              </ButtonInput>
              {/* </Accordion.Trigger> */}
            </Accordion.Header>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
}
