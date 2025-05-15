"use client";

import { useRouter } from "next/navigation";

import { useState, useEffect, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store";
import { Flex, Text, Link } from "@radix-ui/themes";

import Icon from "@/components/ui/common/Icon";
import PropertyDeleteConfirmationModal from "@/app/add-property/delete-confirmation-modal";
import CardView from "@/components/ui/common/CardView";
import TableWithPagination from "@/components/ui/common/TableWithPagination";
import Skeleton from "@/components/ui/common/Skeleton";

import {
  prepareFilterData,
  getProperties,
  deleteAllProperties,
} from "@/utils/helpers/property-list";

import "@/styles/pages/property-list.scss";
import "@/styles/components/_card.scss";
import { any } from "zod";
import { NonUndefined } from "react-hook-form";

export default function AllProperties({ status }: { status?: any }) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.property
  );

  const [filterData, setFilterData] = useState<any>({});
  const fetchProperty = async (data: any) => {
    try {
      const propertyInfo = await getProperties(page || 1, data, status);

      setTableData(propertyInfo.data);
      setPaginationData(propertyInfo.meta?.pagination);
      setPage(1);
    } catch (error) {
      console.log(error);
    }
  };

  const [filterInfo, setFilterInfo] = useState<any>(
    prepareFilterData(filterData, fetchProperty)
  );
  const [tableData, setTableData] = useState<any>([]);
  const [paginationData, setPaginationData] = useState<any>({});
  const [page, setPage] = useState<number>(0);
  const [pageUpdated, setPageUpdated] = useState(false);
  const [deletePropertyId, setDeletePropertyId] = useState<string>("");

  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);

  const handleChange = (id: any, value: any) => {
    setFilterData({ ...filterData, [id]: value });
    setFilterInfo(
      prepareFilterData({ ...filterData, [id]: value }, fetchProperty)
    );
  };

  const deleteProperty = async (propertyId: string) => {
    if (!propertyId) return;

    setDeletePropertyId(propertyId);
    setShowDeleteConfirmationModal(true);
  };

  const deleteSelectedProperty = async (selectedProperties: any) => {
    await deleteAllProperties(selectedProperties)
      .then((data: any) => {
        // Do something after store is updated
        if (data.success) {
          setPage(page);
          router.push(`/property${status ? "/drafts" : ""}`); // Redirect to /property-list
        }
      })
      .catch((err: any) => {
        const { errors } = JSON.parse(err);
        console.log(errors);
      });
  };

  const editProperty = (propertyId: string) => {
    const params = new URLSearchParams({ mode: "edit" });
    router.push(`/property/${propertyId}?${params.toString()}`);
  };

  useEffect(() => {
    fetchProperty(filterData);
    setPageUpdated(false);
  }, [page, pageUpdated]);
  return (
    <Flex
      direction={"column"}
      gap={"3"}
      justify={"start"}
      className="property-list-container"
    >
      <Flex
        direction={"row"}
        gap={"3"}
        justify={"between"}
        className="preview-header"
      >
        <Flex direction={"column"} gap={"3"} justify={"start"} className="">
          <h2>Property List</h2>
          <Text as="p" className="preview-subtitle">
            {" "}
            View and manage property information
          </Text>
        </Flex>
        <Link href="/add-property" className="btn-primary add-property">
          <Icon name="PlusIcon" size={24} color="white" /> Add Property
        </Link>
      </Flex>
      <Flex
        direction={"column"}
        gap={"3"}
        justify={"between"}
        style={{ width: "100%", maxWidth: "100%" }}
        className="info-container filter-container"
      >
        <CardView
          formData={filterInfo}
          id="filter-card"
          handleChange={handleChange}
          data={filterData}
          cardTitle="Property Filter"
        />
        {tableData?.length ? (
          <TableWithPagination
            tableData={tableData}
            paginationData={paginationData}
            setPage={setPage}
            editRowData={editProperty}
            deleteRowData={deleteProperty}
            deleteSelectedProperty={deleteSelectedProperty}
          />
        ) : (
          <Skeleton />
        )}
      </Flex>
      {showDeleteConfirmationModal && (
        <PropertyDeleteConfirmationModal
          propertyId={deletePropertyId}
          setShowDeleteConfirmationModal={setShowDeleteConfirmationModal}
          isUpdated={setPageUpdated}
        />
      )}
    </Flex>
  );
}
