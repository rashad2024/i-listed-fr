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
            name: "Residential",
            id: 1,
          },
          {
            name: "Land",
            id: 2,
          },
          {
            name: "Commercial",
            id: 3,
          },
          {
            name: "Development",
            id: 4,
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
            name: "Villa",
            id: 1,
            hidden: categoryId && ![1].find((cat) => cat == categoryId),
          },
          {
            name: "House",
            id: 2,
            hidden: categoryId && ![1].find((cat) => cat == categoryId),
          },
          {
            name: "Apartment",
            id: 3,
            hidden: categoryId && ![1].find((cat) => cat == categoryId),
          },
          {
            name: "Townhouse",
            id: 4,
            hidden: categoryId && ![1].find((cat) => cat == categoryId),
          },
          {
            name: "Development Land",
            id: 5,
            hidden: categoryId && ![2].find((cat) => cat == categoryId),
          },
          {
            name: "Agricultural Land",
            id: 6,
            hidden: categoryId && ![2].find((cat) => cat == categoryId),
          },
          {
            name: "Rice Field",
            id: 7,
            hidden: categoryId && ![2].find((cat) => cat == categoryId),
          },
          {
            name: "Shop",
            id: 8,
            hidden: categoryId && ![3].find((cat) => cat == categoryId),
          },
          {
            name: "Restaurant",
            id: 9,
            hidden: categoryId && ![3].find((cat) => cat == categoryId),
          },
          {
            name: "Cafe",
            id: 10,
            hidden: categoryId && ![3].find((cat) => cat == categoryId),
          },
          {
            name: "Ruko",
            id: 11,
            hidden: categoryId && ![3].find((cat) => cat == categoryId),
          },
          {
            name: "Off-Plan Projects",
            id: 12,
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
            name: "Sale",
            id: 1,
            hidden:
              categoryId && ![1, 2, 3, 4].find((cat) => cat == categoryId),
          },
          {
            name: "Rental",
            id: 2,
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
