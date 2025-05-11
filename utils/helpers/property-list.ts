import {
  retrievePropertyData,
  fetchPropertiesServices,
  batchDeleteService,
} from "@/features/services/propertyServices";
// import { fetchProperties } from "@/features/redux/Property/propertyThunks";

export const getPropertyInfo = async (id: string) => {
  const propertyData = await retrievePropertyData(id);

  return propertyData.data;
};

export const prepareFilterData = (data: any, fetchProperty?: any) => {
  const {
    search = "",
    categoryId = "",
    subcategoryId = "",
    transactionTypeId = "",
    priceRange = "",
  } = data || {};

  return [
    {
      title: "Search By Keyword",
      inputInfo: {
        type: "text",
        label: "Search By Keyword",
        placeholder: "Search By name",
        value: search || "",
        id: "search",
      },
    },
    {
      title: "Category",
      inputInfo: {
        type: "select",
        label: "Category",
        placeholder: "Search by category",
        id: "categoryId",
        value: categoryId || "",
        options: [
          {
            label: "Please select Category",
            value: "defaultCategory",
            id: "defaultCategory",
          },
          {
            label: "Residential",
            value: 1,
            id: "residential",
          },
          {
            label: "Land",
            value: 2,
            id: "land",
          },
          {
            label: "Commercial",
            value: 3,
            id: "commercial",
          },
          {
            label: "Development",
            value: 4,
            id: "development",
          },
        ],
      },
    },
    {
      title: "Subcategory",
      inputInfo: {
        type: "select",
        label: "Subcategories",
        placeholder: "Search by subcategory",
        id: "subcategoryId",
        value: subcategoryId,
        options: [
          {
            label: "Please select Subcategories",
            value: "defaultSubcategory ",
            id: "defaultSubcategory",
          },
          {
            label: "Villa",
            value: 1,
            id: "villa",
            hidden: categoryId && ![1].find((cat) => cat == categoryId),
          },
          {
            label: "House",
            value: 2,
            id: "house",
            hidden: categoryId && ![1].find((cat) => cat == categoryId),
          },
          {
            label: "Apartment",
            id: "apartment",
            value: 3,
            hidden: categoryId && ![1].find((cat) => cat == categoryId),
          },
          {
            label: "Townhouse",
            id: "townHouse",
            value: 4,
            hidden: categoryId && ![1].find((cat) => cat == categoryId),
          },
          {
            label: "Development Land",
            id: "developmentLand",
            value: 5,
            hidden: categoryId && ![2].find((cat) => cat == categoryId),
          },
          {
            label: "Agricultural Land",
            value: 6,
            id: "agriculturalLand",
            hidden: categoryId && ![2].find((cat) => cat == categoryId),
          },
          {
            label: "Rice Field",
            value: 7,
            id: "riceField",
            hidden: categoryId && ![2].find((cat) => cat == categoryId),
          },
          {
            label: "Shop",
            value: 8,
            id: "shop",
            hidden: categoryId && ![3].find((cat) => cat == categoryId),
          },
          {
            label: "Restaurant",
            value: 9,
            id: "restaurant",
            hidden: categoryId && ![3].find((cat) => cat == categoryId),
          },
          {
            label: "Cafe",
            value: 10,
            id: "cafe",
            hidden: categoryId && ![3].find((cat) => cat == categoryId),
          },
          {
            label: "Ruko",
            value: 11,
            id: "ruko",
            hidden: categoryId && ![3].find((cat) => cat == categoryId),
          },
          {
            label: "Off-Plan Projects",
            value: 12,
            id: "offPlanProjects",
            hidden: categoryId && ![4].find((cat) => cat == categoryId),
          },
        ],
      },
    },
    {
      title: "Transaction Type",
      inputInfo: {
        type: "select",
        label: "Transaction Type",
        placeholder: "Search by Transaction Type",
        id: "transactionTypeId",
        value: transactionTypeId,
        options: [
          {
            label: "Please select Transaction Type",
            value: "defaultTransactionType",
            id: "defaultTransactionType",
          },
          {
            label: "Sale",
            value: 1,
            id: "sale",
            hidden:
              categoryId && ![1, 2, 3, 4].find((cat) => cat == categoryId),
          },
          {
            label: "Rental",
            value: 2,
            id: "rental",
            hidden: categoryId && ![1, 2].find((cat) => cat == categoryId),
          },
        ],
      },
    },
    {
      title: "Price Range",
      inputInfo: {
        type: "range",
        label: "Price Range",
        id: "priceRange",
        value: priceRange,
        min: 0,
        max: 1000000000,
        step: 100000,
      },
    },
    {
      title: "Filter Button",
      inputInfo: {
        type: "button-input",
        placeholder: "Filter",
        id: "buildingPermitId",
        value: "Filter",
        iconName: "CustomFilterIcon",
        iconPosition: "left",
        onClick: () => {
          fetchProperty(data);
        },
      },
    },
  ];
};

const prepareFilter = (filterData: any) => {
  const filterInfo: any = {};
  if (filterData.search) {
    filterInfo.search = filterData.search;
  }
  if (filterData.categoryId) {
    filterInfo.categoryId = parseInt(filterData.categoryId);
  }
  if (filterData.subcategoryId) {
    filterInfo.subcategoryId = parseInt(filterData.subcategoryId);
  }
  if (filterInfo.transactionTypeId) {
    filterInfo.transactionTypeId =
      parseInt(filterData.transactionTypeId) || filterData.transactionTypeId;
  }
  if (filterData?.priceRange) {
    filterInfo.totalPriceMin = filterData?.priceRange
      ? filterData?.priceRange[0]
      : 0;
  }
  if (filterData?.priceRange) {
    filterInfo.totalPriceMax = filterData?.priceRange
      ? filterData?.priceRange[1]
      : 0;
  }

  return filterInfo;
};

export const getProperties = async (
  page: number,
  filterData: any,
  status?: any
) => {
  const filterInfo: any = prepareFilter(filterData);
  const response = await fetchPropertiesServices(page, filterInfo, status);

  return response;
};

export const preparePropertyData = (data: any) => {
  if (!data?.length) return [];

  return data.map((property: any) => {
    const {
      category,
      id,
      title,
      builtUpArea,
      subcategory,
      transactionType,
      address,
      totalPrice,
      images,
    } = property;

    return {
      id: id,
      title: title,
      size: builtUpArea,
      category: category?.name,
      subcategory: subcategory?.name,
      transactionType: transactionType?.name,
      address: address,
      price: totalPrice,
      image: images[0],
    };
  });
};

export const deleteAllProperties = async (propertyIds: any) => {
  const response = await batchDeleteService({ ids: propertyIds });

  return response;
};
