import { retrievePropertyOptions } from "@/features/services/propertyServices";

export const prepareBasicInfo = (data: any) => {
  const {
    title = "",
    categoryId = "",
    subcategoryId = "",
    ownershipTypeId = "",
    transactionTypeId = "",
    propertyStatusId = "",
    buildingPermitId = "",
  } = data || {};

  return [
    {
      title: "Title",
      inputInfo: {
        type: "text",
        label: "Title",
        placeholder: "Luxury Villa in Seminyak",
        value: title || "",
        id: "title",
      },
    },
    {
      title: "Category",
      inputInfo: {
        type: "select",
        label: "Category",
        placeholder: "Please select category",
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
      title: "Subcategories",
      inputInfo: {
        type: "select",
        label: "Subcategories",
        placeholder: "Please select subcategories",
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
            hidden: ![1].find((cat) => cat == categoryId),
          },
          {
            label: "House",
            value: 2,
            id: "house",
            hidden: ![1].find((cat) => cat == categoryId),
          },
          {
            label: "Apartment",
            id: "apartment",
            value: 3,
            hidden: ![1].find((cat) => cat == categoryId),
          },
          {
            label: "Townhouse",
            id: "townHouse",
            value: 4,
            hidden: ![1].find((cat) => cat == categoryId),
          },
          {
            label: "Development Land",
            id: "developmentLand",
            value: 5,
            hidden: ![2].find((cat) => cat == categoryId),
          },
          {
            label: "Agricultural Land",
            value: 6,
            id: "agriculturalLand",
            hidden: ![2].find((cat) => cat == categoryId),
          },
          {
            label: "Rice Field",
            value: 7,
            id: "riceField",
            hidden: ![2].find((cat) => cat == categoryId),
          },
          {
            label: "Shop",
            value: 8,
            id: "shop",
            hidden: ![3].find((cat) => cat == categoryId),
          },
          {
            label: "Restaurant",
            value: 9,
            id: "restaurant",
            hidden: ![3].find((cat) => cat == categoryId),
          },
          {
            label: "Cafe",
            value: 10,
            id: "cafe",
            hidden: ![3].find((cat) => cat == categoryId),
          },
          {
            label: "Ruko",
            value: 11,
            id: "ruko",
            hidden: !["commercial"].find((cat) => cat == categoryId),
          },
          {
            label: "Off-Plan Projects",
            value: 12,
            id: "offPlanProjects",
            hidden: ![4].find((cat) => cat == categoryId),
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
        id: "ownershipTypeId",
        value: ownershipTypeId,
        options: [
          {
            label: "Please select Ownership Type",
            value: "defaultOwnershipType",
            id: "defaultOwnershipType",
          },
          {
            label: "Freehold (Hak Milik)",
            value: 1,
            id: "freehold",
            hidden: ![1, 2, 3, 4].find((cat) => cat == categoryId),
          },
          {
            label: "Leasehold (Hak Sewa)",
            value: 2,
            id: "leasehold",
            hidden: ![1, 2, 3, 4].find((cat) => cat == categoryId),
          },
          {
            label: "Right of Use (Hak Pakai)",
            value: 3,
            id: "rightOfUse",
            hidden: ![1, 2, 3].find((cat) => cat == categoryId),
          },
          {
            label: "Strata Title",
            value: 4,
            id: "strataTitle",
            hidden: ![2, 3].find((cat) => cat == categoryId),
          },
          {
            label: "Right to Build (HGB / Hak Guna Bangunan)",
            value: 5,
            id: "rightToBuild",
            hidden: ![1, 2, 3, 4].find((cat) => cat == categoryId),
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
            hidden: ![1, 2, 3, 4].find((cat) => cat == categoryId),
          },
          {
            label: "Rental",
            value: 2,
            id: "rental",
            hidden: ![1, 2].find((cat) => cat == categoryId),
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
        id: "propertyStatusId",
        value: propertyStatusId,
        options: [
          {
            label: "Please select Property Status",
            value: "defaultPropertyStatus",
            id: "defaultPropertyStatus",
          },
          {
            label: "Freehold",
            value: 1,
            id: "pr-freehold",
            hidden:
              [1, 2, 3, 4].find((cat) => cat == categoryId) &&
              [1].find((cat) => cat == transactionTypeId),
          },
          {
            label: "Leasehold",
            value: "2",
            id: "pr-leasehold",
            hidden: !(
              [1, 2, 3, 4].find((cat) => cat == categoryId) &&
              [1].find((cat) => cat == transactionTypeId)
            ),
          },
          {
            label: "Monthly",
            value: 3,
            id: "monthly",
            hidden: !(
              [1, 2].find((cat) => cat == categoryId) &&
              [2].find((cat) => cat == transactionTypeId)
            ),
          },
          {
            label: "Yearly",
            value: 4,
            id: "yearly",
            hidden: !(
              [1, 2].find((cat) => cat == categoryId) &&
              [2].find((cat) => cat == transactionTypeId)
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
        id: "buildingPermitId",
        value: buildingPermitId,
        options: [
          {
            label: "Please select Building Type",
            value: "defaultBuildingPermit",
            id: "defaultBuildingPermit",
          },
          {
            label: "PBG (Persetujuan Bangunan Gedung)",
            value: 1,
            id: "pbg",
            hidden: ![1, 2, 3].find((cat) => cat == categoryId),
          },
          {
            label: "SLF (Sertifikat Laik Fungsi)",
            value: 2,
            id: "slf",
            hidden: ![1, 2, 3].find((cat) => cat == categoryId),
          },
        ],
      },
    },
  ];
};

export const prepareLocationInfo = (data: any) => {
  const {
    address = "",
    location = "",
    zipCode = "",
    zoneId = "",
    mapLink = "",
    nearByPoints = "",
    roadAccessId = "",
    // touristsAttractions,
    // restaurantsCafe,
    // beaches,
  } = data || {};

  return [
    {
      title: "Address",
      inputInfo: {
        type: "text",
        label: "Location",
        placeholder: "Address of your property",
        id: "address",
        value: address,
      },
    },
    {
      title: "Location",
      inputInfo: {
        type: "text",
        label: "Location",
        placeholder: "Enter Location",
        id: "location",
        value: location,
      },
    },
    {
      title: "Zip code",
      inputInfo: {
        type: "text",
        label: "Zip code",
        placeholder: "Enter zip code",
        id: "zipCode",
        value: zipCode,
      },
    },
    {
      title: "Zone",
      inputInfo: {
        label: "Zone",
        placeholder: "Select zone",
        id: "zoneId",
        value: zoneId,
        iconName: "ZoneIcon",
        iconPosition: "right",
        type: "select",
        options: [
          {
            label: "Please select Zone",
            value: "defaultZone",
            id: "defaultZone",
          },
          {
            label: "Green Zone",
            value: 1,
            id: "greenZone",
            // hidden: ![1, 2, 3, 4].find((cat) => cat ==categoryId),
          },
          {
            label: "Yellow Zone",
            value: 2,
            id: "yellowZone",
            // hidden: ![1, 2, 3, 4].find((cat) => cat ==categoryId),
          },
          {
            label: "Red Zone",
            value: 3,
            id: "redZone",
            // hidden: ![1, 2, 3].find((cat) => cat ==categoryId),
          },
          {
            label: "Pink Zone",
            value: 4,
            id: "pinkZone",
            // hidden: ![2, 3].find((cat) => cat ==categoryId),
          },
          {
            label: "Orange Zone",
            value: 5,
            id: "orangeZone",
            // hidden: ![1, 2, 3, 4].find((cat) => cat ==categoryId),
          },
          {
            label: "Blue Zone",
            value: 6,
            id: "blueZone",
            // hidden: ![1, 2, 3, 4].find((cat) => cat ==categoryId),
          },
        ],
      },
    },
    {
      title: "Google map link",
      inputInfo: {
        type: "text",
        label: "Google map link",
        placeholder: "Enter google map link",
        id: "mapLink",
        value: mapLink,
      },
    },
    {
      title: "Road access",
      inputInfo: {
        type: "select",
        label: "Road Access",
        placeholder: "Please select Road access",
        id: "roadAccessId",
        options: [
          {
            label: "Please select Road access",
            value: "defaultRoadAccess",
            id: "defaultRoadAccess",
          },
          {
            label: "Direct Public Road Access",
            value: 1,
            id: "directPublicRoadAccess",
          },
          {
            label: "Direct Private Road Access",
            value: 2,
            id: "directPrivateRoadAccess",
          },
          {
            label: "Shared Access",
            value: 3,
            id: "sharedAccess",
          },
          {
            label: "Gated Access",
            value: 4,
            id: "gatedAccess",
          },
          {
            label: "No Direct Road Access",
            value: 5,
            id: "noDirectRoadAccess",
          },
        ],
        value: roadAccessId,
      },
    },
    {
      title: "Nearby points of Interest",
      inputGroups: nearByPoints?.length
        ? nearByPoints.map((item: any) => ({
            type: "text",
            placeholder: "Nearby points",
            id: "nearbyPoints",
            value: item,
          }))
        : [
            {
              type: "text",
              placeholder: "Nearby points",
              id: "nearbyPoints",
              value: nearByPoints,
            },
          ],
      inputInfo: {
        type: "button",
        label: "Nearby points of Interest",
        id: "nearByPoints",
        value: "+",
      },
    },
  ];
};

export const preparePropertyDetails = (data: any) => {
  const {
    landSizeId = "",
    builtUpArea = "",
    pricePerUnit = "",
    totalPrice = "",
    numberOfFloors = "",
    maxRooms = "",
    beds = "",
    baths = "",
    furnishingId = "",
    parkingSpaceId = "",
    buildingYear = "",
    availableDate = "",
    pool = "",
    poolTypeId = "",
    poolSize = "",
    categoryId = "",
  } = data || {};

  return [
    {
      title: "Land Size",
      inputInfo: {
        type: "select",
        label: "Land Size",
        placeholder: "Land Size",
        id: "landSizeId",
        value: landSizeId,
        options: [
          {
            label: "Please select Land Size",
            value: "defaultLandSize",
            id: "defaultLandSize",
          },
          {
            label: "are (a)",
            value: 1,
            id: "area",
          },
          {
            label: "m²",
            value: 2,
            id: "m2",
          },
          {
            label: "ft²",
            value: 3,
            id: "ft",
          },
        ],
      },
    },
    {
      title: "Built-Up Area",
      inputInfo: {
        type: "text",
        label: "Built-Up Area",
        placeholder: "Built-Up Area",
        id: "builtUpArea",
        value: builtUpArea,
      },
    },
    {
      title: "Price Per Area Unit",
      inputInfo: {
        type: "text",
        label: "Price Per Area Unit",
        placeholder: "Price Per Area Unit",
        id: "pricePerUnit",
        value: pricePerUnit,
      },
    },
    {
      title: "Total Price",
      inputInfo: {
        type: "number",
        label: "Total Price",
        placeholder: "Total Price",
        id: "totalPrice",
        value: totalPrice,
      },
    },
    {
      title: "Numbers Of Floors",
      inputInfo: {
        type: "number",
        label: "Numbers Of Floors",
        placeholder: "Numbers Of Floors",
        id: "numberOfFloors",
        value: numberOfFloors,
        hidden: ![2, 4].find((cat) => cat == categoryId),
      },
    },
    {
      title: "Max Rooms",
      inputInfo: {
        type: "number",
        label: "Max Rooms",
        placeholder: "Max Rooms",
        id: "maxRooms",
        value: maxRooms,
        hidden: [2, 4].find((cat) => cat == categoryId),
      },
    },
    {
      title: "Beds",
      inputInfo: {
        type: "number",
        label: "Beds",
        placeholder: "Beds",
        id: "beds",
        value: beds,
        hidden: [2, 4].find((cat) => cat == categoryId),
      },
    },
    {
      title: "Baths",
      inputInfo: {
        type: "number",
        label: "Baths",
        placeholder: "Baths",
        id: "baths",
        value: baths,
        hidden: [2, 4].find((cat) => cat == categoryId),
      },
    },
    {
      title: "Furnishing",
      inputInfo: {
        type: "select",
        label: "Furnishing",
        placeholder: "Furnishing",
        id: "furnishingId",
        value: furnishingId,
        hidden: [2, 4].find((cat) => cat == categoryId),
        options: [
          {
            label: "Please select Furnished Type",
            value: "defaultFurnishing",
            id: "defaultFurnishing",
          },
          {
            label: "Furnished",
            value: 1,
            id: "furnished",
          },
          {
            label: "Unfurnished",
            value: 2,
            id: "unfurnished",
          },
        ],
      },
    },
    {
      title: "Parking Space",
      inputInfo: {
        type: "select",
        label: "Parking Space",
        placeholder: "Parking Space",
        id: "parkingSpaceId",
        value: parkingSpaceId,
        hidden: ![2].find((cat) => cat == categoryId),
        options: [
          {
            label: "Please select Parking Space",
            value: "defaultParkingSpace",
            id: "defaultParkingSpace",
          },
          {
            label: "Car",
            value: 1,
            id: "Car",
          },
          {
            label: "Bike",
            value: 2,
            id: "Bike",
          },
        ],
      },
    },
    {
      title: "Building Year",
      inputInfo: {
        type: "date",
        label: "Building Year",
        placeholder: "Building Year",
        id: "buildingYear",
        value: buildingYear,
        iconName: "CalendarIcon",
        iconPosition: "right",
        hidden: ![2, 4].find((cat) => cat == categoryId),
      },
    },
    {
      title: "Property Available Date",
      inputInfo: {
        type: "date",
        label: "Property Available Date",
        placeholder: "Property Available Date",
        id: "availableDate",
        value: availableDate,
        iconName: "CalendarIcon",
        iconPosition: "right",
      },
    },
    {
      title: "Have Pool",
      inputInfo: {
        type: "select",
        label: "Have Pool",
        placeholder: "Have Pool",
        id: "pool",
        value: pool,
        hidden: [2, 4].find((cat) => cat == categoryId),
        options: [
          {
            label: "Please select One",
            value: "defaultHavePool",
            id: "defaultHavePool",
          },
          {
            label: "Yes",
            value: "yes",
            id: "yes",
          },
          {
            label: "No",
            value: "no",
            id: "no",
          },
        ],
      },
    },
    {
      title: "Pool Type",
      inputInfo: {
        type: "select",
        label: "Pool Type",
        placeholder: "Pool Type",
        id: "poolTypeId",
        value: poolTypeId,
        hidden:
          !["yes"].find((poolType) => poolType == pool) ||
          ![2, 4].find((cat) => cat == categoryId),
        options: [
          {
            label: "Please select One",
            value: "defaultHavePool",
            id: "defaultHavePool",
          },
          {
            label: "In Ground",
            value: 1,
            id: "inGround",
          },
          {
            label: "Above-ground",
            value: 2,
            id: "aboveGround",
          },
        ],
      },
    },
    {
      title: "Pool Size",
      inputInfo: {
        type: "text",
        label: "Pool Size",
        placeholder: "Pool Size",
        id: "poolSize",
        value: poolSize,
        hidden:
          !["yes"].find((poolSize) => poolSize == pool) ||
          ![2, 4].find((cat) => cat == categoryId),
      },
    },
  ];
};

export const prepareDescriptionAndMediaInfo = (data: any) => {
  const { description = "", images = [], videoLink = "" } = data || {};

  return [
    {
      title: "Description",
      inputInfo: {
        type: "textarea",
        label: "Description",
        placeholder: "",
        id: "description",
        value: description,
      },
    },
    {
      title: "Media",
      inputInfo: {
        type: "media",
        label: "Media",
        placeholder: "Drag or Upload image",
        id: "images",
        value: images,
      },
    },
    {
      title: "Video",
      inputInfo: {
        type: "text",
        label: "Video(mp4)",
        placeholder: "mp4 video link",
        id: "videoLink",
        value: videoLink,
      },
    },
  ];
};
export const prepareExtrasFeaturesInfo = (data: any) => {
  const {
    ac,
    enclosed,
    openPlan,
    fullyEquipped,
    fridge,
    oven,
    stoves,
    electric,
    water,
    wifi,
    cleaning,
    abcd,
    adcb,
    emergencyExit,
    cctv,
    securityGuard,
    balcony,
    laundryService,
    elevatorLift,
    livingSpace,
    // = [
    //   { name: "Enclosed", value: enclosed, isDefault: true },
    //   { name: "Open-Plan", value: openPlan, isDefault: true },
    //   { name: "AC", value: ac, isDefault: true },
    //   { name: "custom-field", value: "", isDefault: false },
    // ],
    kitchen,
    // = [
    //   { name: "Fully Equipped", value: fullyEquipped, isDefault: true },
    //   { name: "Fridge", value: fridge, isDefault: true },
    //   { name: "Oven", value: oven, isDefault: true },
    //   { name: "Stoves", value: stoves, isDefault: true },
    //   { name: "custom-field", value: "", isDefault: false },
    // ],
    utilitiesIncluded,
    // =
    // [
    //   { name: "Electric", value: electric, isDefault: true },
    //   { name: "Water", value: water, isDefault: true },
    //   { name: "Wifi", value: wifi, isDefault: true },
    // ],
    servicesIncluded,
    // = [
    //   { name: "Cleaning", value: cleaning, isDefault: true },
    //   { name: "Abcd", value: abcd, isDefault: true },
    //   { name: "adcb", value: adcb, isDefault: true },
    // ],
    additionalFeatures,
    // = [
    //   { name: "Emergency Exit", value: emergencyExit, isDefault: true },
    //   { name: "CCTV", value: cctv, isDefault: true },
    //   { name: "Security Guard", value: securityGuard, isDefault: true },
    //   { name: "Balcony", value: balcony, isDefault: true },
    //   { name: "Laundry Service", value: laundryService, isDefault: true },
    //   { name: "Elevator Lift", value: elevatorLift, isDefault: true },
    // ],
  } = data || {};

  return [
    {
      title: "Living Space",
      inputGroups: [
        {
          type: "checkbox",
          placeholder: "Enclosed",
          id: "enclosed",
          value: enclosed,
          isDefault: true,
          category: "livingSpace",
        },
        {
          type: "checkbox",
          placeholder: "Open-Plan",
          id: "openPlan",
          value: openPlan,
          isDefault: true,
          category: "livingSpace",
        },
        {
          type: "checkbox",
          placeholder: "AC",
          id: "ac",
          value: ac,
          isDefault: true,
          category: "livingSpace",
        },
        {
          type: "text",
          placeholder: "",
          id: "livingSpace",
          value: livingSpace,
          category: "livingSpace",
        },
        // ...(livingSpace?.length
        //   ? livingSpace.map((item: any) => ({
        //       type: item.isDefault ? "checkbox" : "text",
        //       placeholder: item.isDefault ? item.name : "",
        //       id: "livingSpace",
        //       value: item.value,
        //     }))
        //   : [
        //       {
        //         type: "text",
        //         placeholder: "",
        //         id: "livingSpace",
        //         value: livingSpace,
        //       },
        //     ]),
      ],
      inputInfo: {
        label: "Living Space",
        placeholder: "Living Space",
        id: "livingSpace",
        type: "button",
        // placeholder: "Beaches",
        value: "+",
      },
    },
    {
      title: "Kitchen",
      inputGroups: [
        {
          type: "checkbox",
          placeholder: "Fully Equipped",
          id: "fullyEquipped",
          value: fullyEquipped,
          isDefault: true,
          category: "kitchen",
        },
        {
          type: "checkbox",
          placeholder: "Fridge",
          id: "fridge",
          value: fridge,
          isDefault: true,
          category: "kitchen",
        },
        {
          type: "checkbox",
          placeholder: "Oven",
          id: "oven",
          value: oven,
          isDefault: true,
          category: "kitchen",
        },
        {
          type: "checkbox",
          placeholder: "Stoves",
          id: "stoves",
          value: stoves,
          isDefault: true,
          category: "kitchen",
        },
        {
          type: "text",
          placeholder: "",
          id: "kitchen",
          value: kitchen,
          isDefault: true,
          category: "utilitiesIncluded",
        },

        // ...(kitchen?.length
        //   ? kitchen.map((item: any) => ({
        //       type: item.isDefault ? "checkbox" : "text",
        //       placeholder: item.isDefault ? item.name : "",
        //       id: "kitchen",
        //       value: item.value,
        //     }))
        //   : [
        //       {
        //         type: "text",
        //         placeholder: "",
        //         id: "kitchen",
        //         value: kitchen,
        //       },
        //     ]),
      ],
      inputInfo: {
        label: "Kitchen",
        placeholder: "Kitchen",
        id: "kitchen",
        type: "button",
        value: "+",
      },
    },
    {
      title: "Utilities included",
      inputGroups: [
        {
          type: "checkbox",
          placeholder: "Electric",
          id: "electric",
          value: electric,
          isDefault: true,
          category: "utilitiesIncluded",
        },
        {
          type: "checkbox",
          placeholder: "Water",
          id: "water",
          value: water,
          isDefault: true,
          category: "utilitiesIncluded",
        },
        {
          type: "checkbox",
          placeholder: "wifi",
          id: "wifi",
          value: wifi,
          isDefault: true,
          category: "utilitiesIncluded",
        },
        {
          type: "text",
          placeholder: "",
          id: "utilitiesIncluded",
          value: utilitiesIncluded,
          isDefault: true,
          category: "utilitiesIncluded",
        },
      ],
      inputInfo: {
        label: "Utilities included",
        id: "utilitiesIncluded",
        type: "button",
        value: "+",
      },
    },
    {
      title: "Services included",
      inputGroups: [
        {
          type: "checkbox",
          placeholder: "cleaning",
          id: "cleaning",
          value: cleaning,
          isDefault: true,
          category: "servicesIncluded",
        },
        {
          type: "checkbox",
          placeholder: "adcb",
          id: "adcb",
          value: adcb,
          isDefault: true,
          category: "servicesIncluded",
        },
        {
          type: "checkbox",
          placeholder: "abcd",
          id: "abcd",
          value: abcd,
          isDefault: true,
          category: "servicesIncluded",
        },
        {
          type: "text",
          placeholder: "",
          id: "servicesIncluded",
          value: servicesIncluded,
          isDefault: true,
          category: "servicesIncluded",
        },
      ],
      inputInfo: {
        label: "Services included",
        id: "servicesIncluded",
        type: "button",
        value: "+",
      },
    },
    {
      title: "Additional Features",
      inputGroups: [
        {
          type: "checkbox",
          placeholder: "Emergency exit",
          id: "emergencyExit",
          value: emergencyExit,
          isDefault: true,
          category: "additionalFeatures",
        },
        {
          type: "checkbox",
          placeholder: "CCTV",
          id: "cctv",
          value: cctv,
          isDefault: true,
          category: "additionalFeatures",
        },
        {
          type: "checkbox",
          placeholder: "Security Guard",
          id: "securityGuard",
          value: securityGuard,
          isDefault: true,
          category: "additionalFeatures",
        },
        {
          type: "checkbox",
          placeholder: "Balcony",
          id: "balcony",
          value: balcony,
          isDefault: true,
          category: "additionalFeatures",
        },
        {
          type: "checkbox",
          placeholder: "Laundry Service",
          id: "laundryService",
          value: laundryService,
          isDefault: true,
          category: "additionalFeatures",
        },
        {
          type: "checkbox",
          placeholder: "Elevator Lift",
          id: "elevatorLift",
          value: elevatorLift,
          isDefault: true,
          category: "additionalFeatures",
        },

        {
          type: "text",
          placeholder: "",
          id: "additionalFeatures",
          value: additionalFeatures,
          isDefault: true,
          category: "additionalFeatures",
        },
      ],
      inputInfo: {
        type: "button",
        // placeholder: "Beaches",
        id: "additionalFeatures",
        value: "+",
      },
    },
  ];
};

export const getFieldOptions = async () => {
  const userRoles = await retrievePropertyOptions();

  const options: Array<{ label: string; value: string }> = [];
  if (userRoles?.data?.length) {
    userRoles.data.map((role: any) => {
      const { name, id } = role;
      options.push({ label: name, value: id });
    });
  }
  return options;
};

export const prepareFormData = (data: any) => {
  const payload: Record<string, any> = {};

  const livingSpace = [];
  const kitchen = [];
  const utilitiesIncluded = [];
  const servicesIncluded = [];
  const additionalFeatures = [];

  // Living space options start
  if (data.enclosed) {
    livingSpace.push({ value: "Enclosed", isDefault: true });
  }
  if (data.openPlan) {
    livingSpace.push({ value: "Open-Plan", isDefault: true });
  }
  if (data.ac) {
    livingSpace.push({ value: "AC", isDefault: true });
  }

  // Living space options end

  // Kitchen options start

  if (data.fullyEquipped) {
    kitchen.push({ value: "Fully equipped", isDefault: true });
  }
  if (data.fridge) {
    kitchen.push({ value: "Fridge", isDefault: true });
  }
  if (data.oven) {
    kitchen.push({ value: "Oven", isDefault: true });
  }
  if (data.stove) {
    kitchen.push({ value: "Stove", isDefault: true });
  }

  // Kitchen options end

  // Utilities included options start

  if (data.electric) {
    utilitiesIncluded.push({ value: "Fully equipped", isDefault: true });
  }
  if (data.water) {
    utilitiesIncluded.push({ value: "Fridge", isDefault: true });
  }
  if (data.wifi) {
    utilitiesIncluded.push({ value: "Oven", isDefault: true });
  }

  // Utilities included options end

  // Services Included options start

  if (data.cleaning) {
    servicesIncluded.push({ value: "Stove", isDefault: true });
  }
  if (data.abcd) {
    servicesIncluded.push({ value: "Stove", isDefault: true });
  }
  if (data.adcb) {
    servicesIncluded.push({ value: "Stove", isDefault: true });
  }
  if (data.emergencyExit) {
    additionalFeatures.push({ value: "Stove", isDefault: true });
  }
  if (data.cctv) {
    additionalFeatures.push({ value: "Stove", isDefault: true });
  }
  if (data.securityGuard) {
    additionalFeatures.push({ value: "Stove", isDefault: true });
  }
  if (data.balcony) {
    additionalFeatures.push({ value: "Stove", isDefault: true });
  }
  if (data.laundryService) {
    additionalFeatures.push({ value: "Stove", isDefault: true });
  }
  if (data.elevatorLift) {
    additionalFeatures.push({ value: "Stove", isDefault: true });
  }

  if (data.title) payload.title = data.title;
  if (data.categoryId) payload.categoryId = parseInt(data.categoryId);
  if (data.subcategoryId) payload.subcategoryId = parseInt(data.subcategoryId);
  if (data.ownershipTypeId)
    payload.ownershipTypeId = parseInt(data.ownershipTypeId);
  if (data.transactionTypeId)
    payload.transactionTypeId = parseInt(data.transactionTypeId);
  if (data.propertyStatusId)
    payload.propertyStatusId = parseInt(data.propertyStatusId);
  if (data.buildingPermitId)
    payload.buildingPermitId = parseInt(data.buildingPermitId);
  if (data.address) payload.address = data.address;
  if (data.location) payload.location = data.location;
  if (data.zipCode) payload.zipCode = data.zipCode;
  if (data.roadAccessId) payload.roadAccessId = parseInt(data.roadAccessId);
  if (data.nearbyPoints) payload.nearbyPoints = data.nearbyPoints;
  if (data.zoneId) payload.zoneId = parseInt(data.zoneId);
  if (data.landSizeId) payload.landSizeId = parseInt(data.landSizeId);
  if (data.builtUpArea) payload.builtUpArea = data.builtUpArea;
  if (data.pricePerUnit) payload.pricePerUnit = parseInt(data.pricePerUnit);
  if (data.totalPrice) payload.totalPrice = parseInt(data.totalPrice);
  if (data.pricePerYear) payload.pricePerYear = parseInt(data.pricePerYear);
  if (data.numberOfFloors)
    payload.numberOfFloors = parseInt(data.numberOfFloors);
  if (data.maxRooms) payload.maxRooms = parseInt(data.maxRooms);
  if (data.beds) payload.beds = parseInt(data.beds);
  if (data.baths) payload.baths = parseInt(data.baths);
  if (data.furnishingId) payload.furnishingId = parseInt(data.furnishingId);
  if (data.buildingYear) payload.buildingYear = data.buildingYear;
  if (data.availableDate) payload.availableDate = data.availableDate;
  if (data.pool === "yes") payload.pool = true;
  if (data.poolTypeId) payload.poolTypeId = parseInt(data.poolTypeId);
  if (data.poolSize) payload.poolSize = data.poolSize;
  if (data.parkingSpaceId)
    payload.parkingSpaceId = parseInt(data.parkingSpaceId);
  if (data.description) payload.description = data.description;
  if (Array.isArray(data.images) && data.images.length)
    payload.images = data.images.map((image: any) => image.name);
  if (data.videoLink) payload.videoLink = data.videoLink;
  if (livingSpace) payload.livingSpace = livingSpace;
  if (kitchen) payload.kitchen = kitchen;
  if (utilitiesIncluded && utilitiesIncluded.length)
    payload.utilitiesIncluded = utilitiesIncluded;
  if (servicesIncluded && servicesIncluded.length)
    payload.servicesIncluded = servicesIncluded;
  if (additionalFeatures && additionalFeatures.length)
    payload.additionalFeatures = additionalFeatures;

  return payload;
};

export const getButtonText = (activeStep: number, selectedCategory: string) => {
  if (activeStep === 0 || !selectedCategory) {
    return "Next";
  }
  if (activeStep === 1) {
    if (selectedCategory === "1" || selectedCategory === "3") {
      return "Next";
    } else if (selectedCategory === "2" || selectedCategory === "4") {
      return "Preview";
    }
  }

  if (activeStep === 2) {
    if (selectedCategory === "2" || selectedCategory === "4") {
      return "Submit";
    } else if (selectedCategory === "1" || selectedCategory === "3") {
      {
        return "Preview";
      }
    }

    if (activeStep === 2 && selectedCategory === "4") {
      return "Next";
    }
  }
  if (activeStep === 3) {
    return "Submit";
  }
};
