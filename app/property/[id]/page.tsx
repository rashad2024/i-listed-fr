"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Flex } from "@radix-ui/themes";

import PropertyForm from "../../add-property/property-form";
import Skeleton from "@/components/ui/common/Skeleton";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

import { getPropertyInfo } from "@/utils/helpers/property-list";

import "@/styles/pages/property.scss";

const PropertyDetails = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const { id } = params;
  const shouldEdit = searchParams.get("mode");
  const [property, setProperty] = useState<any>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        if (!id) return;
        const propertyInfo = await getPropertyInfo(id as string);

        setProperty(propertyInfo);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProperty();
  }, [id]);

  return (
    <main>
      {property ? (
        <>
          <Sidebar pageType={"property"} />
          <div className="right-container">
            <Header />
            <PropertyForm property={property} previewProperty={!shouldEdit} />
          </div>
        </>
      ) : (
        <Skeleton />
      )}
    </main>
  );
};

export default PropertyDetails;
