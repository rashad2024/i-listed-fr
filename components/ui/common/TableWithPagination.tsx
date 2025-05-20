"use client";
import { SetStateAction, useState, Dispatch, useEffect } from "react";

import * as Checkbox from "@radix-ui/react-checkbox";
import { Link, Tooltip } from "@radix-ui/themes";
import Icon from "./Icon";
import PaginationView from "./PaginationView";

import { preparePropertyData } from "@/utils/helpers/property-list";

import "@/styles/components/_table.scss";
import ButtonInput from "./Button";

export default function TableWithPagination({
  tableData,
  paginationData,
  handlePageChange,
  editRowData,
  deleteRowData,
  deleteSelectedProperty,
  status,
}: {
  tableData: any;
  paginationData: any;
  handlePageChange: any;
  editRowData: any;
  deleteRowData: any;
  deleteSelectedProperty: any;
  status?: string;
}) {
  const [prepareTableData, setPrepareTableData] = useState<any>(
    preparePropertyData(tableData)
  );
  const [selectedProperties, setSelectedProperties] = useState<any>([]);

  const handleClick = (e: any, id: number) => {
    const isChecked = e.target.getAttribute("data-state") !== "checked";

    setSelectedProperties((prevSelectedProperties: any) => {
      if (isChecked) {
        return [...prevSelectedProperties, id];
      } else {
        return prevSelectedProperties.filter(
          (propertyId: number) => propertyId !== id
        );
      }
    });
  };

  const deleteProperties = () => {
    deleteSelectedProperty(selectedProperties);
  };

  useEffect(() => {
    setPrepareTableData(preparePropertyData(tableData));
  }, [tableData]);

  return (
    <div className="table-wrapper">
      <h2 className="table-title">All Properties</h2>
      <table className="custom-table">
        <thead>
          {!selectedProperties?.length ? (
            <tr>
              <th></th>
              <th>Properties Photo & Name</th>
              <th>Size</th>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Transaction Type</th>
              <th>Address</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          ) : (
            <tr style={{ background: "#EF4444", height: "60px" }}>
              <th></th>
              <th style={{ color: "#fff" }}>
                Select {selectedProperties.length}
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <ButtonInput
                gap="2"
                direction="row"
                type="button"
                className="btn-primary delete-icon"
                onClick={(e: any) => deleteProperties()}
                styles={{ height: "60px" }}
              >
                <Icon name="CustomDeleteIcon" size={16} />
                Delete
              </ButtonInput>
            </tr>
          )}
        </thead>
        <tbody>
          {prepareTableData.map((property: any) => (
            <tr
              key={property.id}
              className={`${
                selectedProperties.includes(property.id) ? "selected" : ""
              }`}
            >
              <td>
                <Checkbox.Root
                  className="checkbox-root"
                  onClick={(e) => handleClick(e, property.id)}
                >
                  <Checkbox.Indicator className="checkbox-indicator">
                    <Icon
                      name="CheckIcon"
                      size={20}
                      style={{ marginTop: "4px" }}
                    />
                  </Checkbox.Indicator>
                </Checkbox.Root>
              </td>
              <td>
                <div className="property-name">
                  <Link
                    href={`/${status ? "drafts" : "property"}/${property.id}`}
                    style={{
                      border: "none",
                      background: "none",
                      textDecoration: "none",
                    }}
                  >
                    {property?.image && (
                      <img
                        src={process.env.NEXT_PUBLIC_BASE_URL + property?.image}
                        alt={property.title}
                      />
                    )}
                    <span>{property.title}</span>
                  </Link>
                </div>
              </td>
              <td>
                {property.size ? `${property.size}${property.landUnit}` : ""}
              </td>
              <td>{property.category}</td>
              <td>{property.subcategory}</td>
              <td>
                <span
                  className={`badge ${property?.transactionType?.toLowerCase()}`}
                >
                  {property.transactionType}
                </span>
              </td>
              <td>{property.address}</td>
              <td>
                {property.price
                  ? `\$\u00A0${property.price.toLocaleString()}`
                  : ""}
              </td>
              <td>
                <div className="actions">
                  <Tooltip content="edit">
                    <button
                      onClick={() => editRowData(property.id)}
                      style={{
                        backgroundColor: "#E9E9E966",
                        borderRadius: "8px",
                      }}
                    >
                      <Icon name="CustomPencilIcon" size={24} />
                    </button>
                  </Tooltip>
                  <Tooltip content="delete">
                    <button
                      onClick={() => deleteRowData(property.id)}
                      style={{
                        backgroundColor: "#E9E9E966",
                        borderRadius: "8px",
                      }}
                    >
                      <Icon name="CustomDeleteIcon" size={24} color="#444444" />
                    </button>
                  </Tooltip>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <PaginationView {...paginationData} onPageChange={handlePageChange} />
    </div>
  );
}
