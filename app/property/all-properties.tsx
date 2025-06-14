"use client";

import { useRouter } from "next/navigation";

import { useState, useEffect, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store";
import { Flex, Text, Link } from "@radix-ui/themes";

import { useDynamicFieldMap } from "@/components/ui/common/useDynamicFieldMap";

import Icon from "@/components/ui/common/Icon";
import PropertyDeleteConfirmationModal from "@/app/add-property/delete-confirmation-modal";
import CardView from "@/components/ui/common/CardView";
import TableWithPagination from "@/components/ui/common/TableWithPagination";
import Skeleton from "@/components/ui/common/Skeleton";
import NotFoundPage from "@/components/ui/common/NotFound";
import FilterCard from "./filter-section";

import {
  prepareFilterData,
  getProperties,
} from "@/utils/helpers/property-list";
import { filterPropertyOptions } from "@/utils/helpers/add-property";

import "@/styles/pages/property-list.scss";
import "@/styles/components/_card.scss";

export default function AllProperties({ status }: { status?: any }) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.property
  );

  const [noProperty, setNoProperty] = useState<any>(false);
  const [filterData, setFilterData] = useState<any>({});

  const { addValue, getValues } = useDynamicFieldMap();
  const getFieldValue = (name: string): any => {
    return getValues()[name];
  };
  const fetchProperty = async () => {
    try {
      const propertyInfo = await getProperties(page || 1, getValues(), status);

      if (!propertyInfo?.data?.length) {
        // setTableData([]);
        setNoProperty(true);
        // setPageUpdated(true);
        // return;
      }
      setTableData(propertyInfo.data);
      setPaginationData(propertyInfo.meta?.pagination);
      // setNoProperty(false);
      // setPage(1);
      // setPageUpdated(true);
    } catch (error) {
      console.log(error);
      setNoProperty(true);
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

  const handleChange = (
    name: any,
    value: any,
    shouldFilterOptions?: boolean
  ) => {
    addValue(name, value);
  };

  const handlePageChange = (page: number) => {
    setPage(page);
    setPageUpdated(true);
  };
  const deleteProperty = async (propertyId: string) => {
    if (!propertyId) return;

    setDeletePropertyId(propertyId);
    setShowDeleteConfirmationModal(true);
  };

  const deleteSelectedProperty = async (selectedProperties: any) => {
    setDeletePropertyId(selectedProperties);
    setShowDeleteConfirmationModal(true);
  };

  const editProperty = (propertyId: string) => {
    const params = new URLSearchParams({ mode: "edit" });
    router.push(`/property/${propertyId}?${params.toString()}`);
  };

  useEffect(() => {
    fetchProperty();
    setPageUpdated(false);
  }, [pageUpdated]);
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
          <h2 className="page-title">Property List</h2>
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
        <FilterCard
          handleChange={handleChange}
          getFieldValue={getFieldValue}
          onClick={fetchProperty}
          status={status}
        />
      </Flex>
      {tableData?.length ? (
        <>
          <TableWithPagination
            tableData={tableData}
            paginationData={paginationData}
            handlePageChange={handlePageChange}
            editRowData={editProperty}
            deleteRowData={deleteProperty}
            deleteSelectedProperty={deleteSelectedProperty}
            status={status}
          />
        </>
      ) : noProperty ? (
        <NotFoundPage />
      ) : (
        <Skeleton />
      )}
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
