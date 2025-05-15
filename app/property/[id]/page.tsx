"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import CreatePropertyForm from "@/app/add-property/page";
import Skeleton from "@/components/ui/common/Skeleton";

import { getPropertyInfo } from "@/utils/helpers/property-list";
import { preparePropertyData } from "@/utils/helpers/add-property";

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
        const propertyData = preparePropertyData(propertyInfo);

        setProperty(propertyData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProperty();
  }, [id]);

  // useEffect(() => {
  //   const fetchFormOptions = async () => {
  //     const options = await getFieldOptions();

  //     setPropertyOptions(options);
  //     return options;
  //   };
  //   fetchFormOptions();
  // }, []);

  return (
    <main>
      {property ? (
        <CreatePropertyForm property={property} isViewMode={true} />
      ) : (
        <Skeleton />
      )}
    </main>
  );
};

export default PropertyDetails;
