export const prepareBasicInfo = (data: any) => {
  const {
    title,
    category,
    subcategories,
    ownershipType,
    transactionType,
    propertyStatus,
    buildingPermit,
  } = data || {};

  return [
    {
      title: "Title",
      inputInfo: {
        type: "text",
        label: "Title",
        placeholder: "Luxury Villa in Seminyak",
        id: "title",
        value: title,
      },
    },
    {
      title: "Category",
      inputInfo: {
        type: "select",
        label: "Category",
        placeholder: "Please select category",
        id: "category",
        options: [
          {
            label: "Please select Category",
            value: "defaultCategory",
            id: "defaultCategory",
          },
          { label: "Residential", value: "residential", id: "residential" },
          { label: "Land", value: "land", id: "residential" },
          { label: "Commercial", value: "commercial", id: "commercial" },
          { label: "Development", value: "development", id: "development" },
        ],
        value: category,
      },
    },
    {
      title: "Subcategories",
      inputInfo: {
        type: "select",
        label: "Subcategories",
        placeholder: "Please select subcategories",
        id: "subcategories",
        value: subcategories,
        options: [
          {
            label: "Please select Subcategories",
            value: "defaultSubcategory ",
            id: "defaultSubcategory",
          },
          {
            label: "Villa",
            value: "villa",
            id: "villa",
            hidden: !["residential"].find((cat) => cat === category),
          },
          {
            label: "House",
            value: "house",
            id: "house",
            hidden: !["residential"].find((cat) => cat === category),
          },
          {
            label: "Apartment",
            value: "apartment",
            id: "apartment",
            hidden: !["residential"].find((cat) => cat === category),
          },
          {
            label: "Townhouse",
            value: "townhouse",
            id: "townhouse",
            hidden: !["residential"].find((cat) => cat === category),
          },
          {
            label: "Development Land",
            value: "developmentLand",
            id: "developmentLand",
            hidden: !["land"].find((cat) => cat === category),
          },
          {
            label: "Agricultural Land",
            value: "agriculturalLand",
            id: "agriculturalLand",
            hidden: !["land"].find((cat) => cat === category),
          },
          {
            label: "Rice Field",
            value: "riceField",
            id: "riceField",
            hidden: !["land"].find((cat) => cat === category),
          },
          {
            label: "Shop",
            value: "shop",
            id: "shop",
            hidden: !["commercial"].find((cat) => cat === category),
          },
          {
            label: "Restaurant",
            value: "restaurant",
            id: "restaurant",
            hidden: !["commercial"].find((cat) => cat === category),
          },
          {
            label: "Cafe",
            value: "cafe",
            id: "cafe",
            hidden: !["commercial"].find((cat) => cat === category),
          },
          {
            label: "Ruko",
            value: "ruko",
            id: "ruko",
            hidden: !["commercial"].find((cat) => cat === category),
          },
          {
            label: "Off-Plan Projects",
            value: "offPlanProjects",
            id: "offPlanProjects",
            hidden: !["development"].find((cat) => cat === category),
          },
        ],
      },
    },
    {
      title: "Ownership Type",
      inputInfo: {
        type: "select",
        label: "Ownership Type",
        placeholder: "Please select Ownership Type",
        id: "ownershipType",
        value: ownershipType,
        options: [
          {
            label: "Please select Ownership Type",
            value: "defaultOwnershipType",
            id: "defaultOwnershipType",
          },
          {
            label: "Freehold (Hak Milik)",
            value: "freehold",
            id: "freehold",
            hidden: !["residential", "land", "commercial", "development"].find(
              (cat) => cat === category
            ),
          },
          {
            label: "Leasehold (Hak Sewa)",
            value: "leasehold",
            id: "leasehold",
            hidden: !["residential", "land", "commercial", "development"].find(
              (cat) => cat === category
            ),
          },
          {
            label: "Right of Use (Hak Pakai)",
            value: "rightOfUse",
            id: "rightOfUse",
            hidden: !["residential", "land", "commercial"].find(
              (cat) => cat === category
            ),
          },
          {
            label: "Strata Title",
            value: "strataTitle",
            id: "strataTitle",
            hidden: !["residential", "commercial"].find(
              (cat) => cat === category
            ),
          },
          {
            label: "Right to Build (HGB / Hak Guna Bangunan)",
            value: "rightToBuild",
            id: "rightToBuild",
            hidden: !["residential", "land", "commercial", "development"].find(
              (cat) => cat === category
            ),
          },
        ],
      },
    },
    {
      title: "Transaction Type",
      inputInfo: {
        type: "select",
        label: "Transaction Type",
        placeholder: "Please select Transaction Type",
        id: "transactionType",
        value: transactionType,
        options: [
          {
            label: "Please select Transaction Type",
            value: "defaultTransactionType",
            id: "defaultTransactionType",
          },
          {
            label: "Sale",
            value: "sale",
            id: "sale",
            hidden: !["residential", "land", "commercial", "development"].find(
              (cat) => cat === category
            ),
          },
          {
            label: "Rental",
            value: "rental",
            id: "rental",
            hidden: !["residential", "commercial"].find(
              (cat) => cat === category
            ),
          },
        ],
      },
    },
    {
      title: "Property Status",
      inputInfo: {
        type: "select",
        label: "Property Status",
        placeholder: "Please select Property Status",
        id: "propertyStatus",
        value: propertyStatus,
        options: [
          {
            label: "Please select Property Status",
            value: "defaultPropertyStatus",
            id: "defaultPropertyStatus",
          },
          {
            label: "Freehold",
            value: "freehold",
            id: "pr-freehold",
            categoryIds: ["residential", "land", "commercial", "development"],
            hidden: !["sale"].find((cat) => cat === category),
          },
          {
            label: "Leasehold",
            value: "leasehold",
            id: "pr-leasehold",
            hidden: !(
              ["residential", "land", "commercial", "development"].find(
                (cat) => cat === category
              ) && ["sale"].find((cat) => cat === transactionType)
            ),
          },
          {
            label: "Monthly",
            value: "monthly",
            id: "monthly",
            hidden: !(
              ["residential", "commercial"].find((cat) => cat === category) &&
              ["rental"].find((cat) => cat === transactionType)
            ),
          },
          {
            label: "Yearly",
            value: "yearly",
            id: "yearly",
            hidden: !(
              ["residential", "commercial"].find((cat) => cat === category) &&
              ["rental"].find((cat) => cat === transactionType)
            ),
          },
        ],
      },
    },
    {
      title: "Building Permit",
      inputInfo: {
        type: "select",
        label: "Building Permit",
        placeholder: "Please select Building Type",
        id: "buildingPermit",
        value: buildingPermit,
        options: [
          {
            label: "Please select Building Type",
            value: "defaultBuildingPermit",
            id: "defaultBuildingPermit",
          },
          {
            label: "PBG (Persetujuan Bangunan Gedung)",
            value: "pbg",
            id: "pbg",
            hidden: !["residential", "commercial", "development"].find(
              (cat) => cat === category
            ),
          },
          {
            label: "SLF (Sertifikat Laik Fungsi)",
            value: "slf",
            id: "slf",
            hidden: !["residential", "commercial", "development"].find(
              (cat) => cat === category
            ),
          },
        ],
      },
    },
  ];
};

export const locationInfo = [
  {
    title: "Address",
    inputInfo: {
      type: "text",
      label: "Location",
      placeholder: "Address of your property",
      id: "address",
      value: "",
    },
  },
  {
    title: "Location",
    inputInfo: {
      type: "text",
      label: "Location",
      placeholder: "Enter Location",
      id: "location",
      value: "",
    },
  },
  {
    title: "Zip code",
    inputInfo: {
      type: "text",
      label: "Zip code",
      placeholder: "Enter zip code",
      id: "zipCode",
      value: "",
    },
  },
  {
    title: "Zone",
    inputInfo: {
      type: "text",
      label: "Zone",
      placeholder: "Select zone",
      id: "zone",
      value: "",
    },
  },
  {
    title: "Google map link",
    inputInfo: {
      type: "text",
      label: "Google map link",
      placeholder: "Enter google map link",
      id: "mapLink",
      value: "",
    },
  },
  {
    title: "Road access",
    inputInfo: {
      type: "text",
      label: "Road access",
      placeholder: "Select road access",
      id: "roadAccess",
      value: "",
    },
  },
  {
    title: "Nearby points of Interest",
    inputInfo: {
      type: "text",
      label: "Landmark",
      placeholder: "Select landmark",
      id: "landmark",
      value: "",
    },
  },
];
