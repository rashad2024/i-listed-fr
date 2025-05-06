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

  return [{
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
        options: [{
          label: "Please select Category",
          value: "defaultCategory",
          id: "defaultCategory",
        },
          {
            label: "Residential",
            value: "residential",
            id: "residential"
          },
          {
            label: "Land",
            value: "land",
            id: "residential"
          },
          {
            label: "Commercial",
            value: "commercial",
            id: "commercial"
          },
          {
            label: "Development",
            value: "development",
            id: "development"
          },
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
        options: [{
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
        options: [{
          label: "Please select Ownership Type",
          value: "defaultOwnershipType",
          id: "defaultOwnershipType",
        },
          {
            label: "Freehold (Hak Milik)",
            value: "freehold",
            id: "freehold",
            hidden: !["residential",
              "land",
              "commercial",
              "development"].find(
              (cat) => cat === category
            ),
          },
          {
            label: "Leasehold (Hak Sewa)",
            value: "leasehold",
            id: "leasehold",
            hidden: !["residential",
              "land",
              "commercial",
              "development"].find(
              (cat) => cat === category
            ),
          },
          {
            label: "Right of Use (Hak Pakai)",
            value: "rightOfUse",
            id: "rightOfUse",
            hidden: !["residential",
              "land",
              "commercial"].find(
              (cat) => cat === category
            ),
          },
          {
            label: "Strata Title",
            value: "strataTitle",
            id: "strataTitle",
            hidden: !["residential",
              "commercial"].find(
              (cat) => cat === category
            ),
          },
          {
            label: "Right to Build (HGB / Hak Guna Bangunan)",
            value: "rightToBuild",
            id: "rightToBuild",
            hidden: !["residential",
              "land",
              "commercial",
              "development"].find(
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
        options: [{
          label: "Please select Transaction Type",
          value: "defaultTransactionType",
          id: "defaultTransactionType",
        },
          {
            label: "Sale",
            value: "sale",
            id: "sale",
            hidden: !["residential",
              "land",
              "commercial",
              "development"].find(
              (cat) => cat === category
            ),
          },
          {
            label: "Rental",
            value: "rental",
            id: "rental",
            hidden: !["residential",
              "commercial"].find(
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
        options: [{
          label: "Please select Property Status",
          value: "defaultPropertyStatus",
          id: "defaultPropertyStatus",
        },
          {
            label: "Freehold",
            value: "freehold",
            id: "pr-freehold",
            categoryIds: ["residential",
              "land",
              "commercial",
              "development"],
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
        options: [{
          label: "Please select Building Type",
          value: "defaultBuildingPermit",
          id: "defaultBuildingPermit",
        },
          {
            label: "PBG (Persetujuan Bangunan Gedung)",
            value: "pbg",
            id: "pbg",
            hidden: !["residential",
              "commercial",
              "development"].find(
              (cat) => cat === category
            ),
          },
          {
            label: "SLF (Sertifikat Laik Fungsi)",
            value: "slf",
            id: "slf",
            hidden: !["residential",
              "commercial",
              "development"].find(
              (cat) => cat === category
            ),
          },
        ],
      },
    },
  ];
};

export const prepareLocationInfo = (data: any) => {
  const {
    address,
    location,
    zipCode,
    zone,
    mapLink,
    rowCount,
    shoppingCenter,
    touristsAttractions,
    restaurantsCafe,
    beaches,
  } = data || {};

  return [{
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
        type: "text",
        label: "Zone",
        placeholder: "Select zone",
        id: "zone",
        value: zone,
        iconName: "ZoneIcon",
        iconPosition: "right",
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
        id: "roadAccess",
        options: [{
          label: "Please select Road access",
          value: "defaultRoadAccess",
          id: "defaultRoadAccess",
        },
          {
            label: "Excellent",
            value: "excellent",
            id: "excellent"
          },
          {
            label: "Good",
            value: "good",
            id: "good"
          },
          {
            label: "Bad",
            value: "bad",
            id: "bad"
          },
          {
            label: "Worst",
            value: "worst",
            id: "worst"
          },
        ],
        value: "",
      },
    },
    {
      title: "Nearby points of Interest",
      inputInfo: {
        label: "Nearby points of Interest",
        placeholder: "Nearby points of Interest",
        id: "nearbyPoint",
        inputGroups: [{
          count: 1,
          rows: [{
            type: "text",
            placeholder: "Shoping Center",
            id: "shoppingCenter",
            value: shoppingCenter,
          },
            {
              type: "text",
              placeholder: "Tourists Attractions",
              id: "touristsAttractions",
              value: touristsAttractions,
            },
            {
              type: "text",
              placeholder: "Restaurants & Cafes",
              id: "restaurantsCafe",
              value: restaurantsCafe,
            },
            {
              type: "text",
              placeholder: "Beaches",
              id: "beaches",
              value: beaches,
            },
            {
              type: "button",
              // placeholder: "Beaches",
              id: "addButton",
              value: "+",
            },
          ],
        },
        ],
      },
    },
  ];
};

export const prepareInputFields = (
  inputGroups: Array < {
    count: number; rows: any
  } >
) => {
  const inputs: any = [];

  // inputGroups.map((inputGroup: any) => {
  for (const inputGroup of inputGroups) {
    // console.log("inputGroup", inputGroup);
    for (const input of inputGroup.rows) {
      input.rowNumber = inputGroup.count;

      // console.log("input", input);

      inputs.push(input);
    }
  }
  // inputGroup.rows.map((input: any) => {
  // });
  // });
  return inputs;
};

export const addNewRowsToData = (id: string, locationInfo: any) => {
  const inputData: any = locationInfo.map((locationData: any) => {
    const lengthCount = locationData.inputInfo.inputGroups?.length;
    if (lengthCount) {
      const input = locationData.inputInfo.inputGroups[lengthCount - 1];
      const countNo = input.count + 1;

      if (input) {
        const inputData = {
          count: countNo,
          rows: input.rows.map((data: any) => ({
            ...data,
            rowNumber: countNo,
          })),
        };
        locationData.inputInfo.inputGroups.push(inputData);
      }
    }
    return locationData;
  });

  return inputData;
};

export const preparePropertyDetails = (data: any) => {
  const {
    landSize,
    builtUpArea,
    pricePerAreaUnit,
    totalPrice,
    numberOfFloors,
    maxRooms,
    beds,
    baths,
    furnishing,
    parkingSpace,
    buildingYear,
    propertyAvailableDate,
    havePool,
    poolType,
    poolSize,
  } = data || {};

  return [{
    title: "Land Size",
    inputInfo: {
      type: "select",
      label: "Land Size",
      placeholder: "Land Size",
      id: "landSize",
      value: landSize,
      options: [{
        label: "Please select Land Size",
        value: "defaultLandSize",
        id: "defaultLandSize",
      },
        {
          label: "600 sq ft", value: "600", id: "600"
        },
        {
          label: "1000 sq ft", value: "1000", id: "1000"
        },
        {
          label: "1200 sq ft", value: "1200", id: "1200"
        },
        {
          label: "1500 sq ft", value: "1500", id: "1500"
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
        id: "pricePerAreaUnit",
        value: pricePerAreaUnit,
      },
    },
    {
      title: "Total Price",
      inputInfo: {
        type: "text",
        label: "Total Price",
        placeholder: "Total Price",
        id: "totalPrice",
        value: totalPrice,
      },
    },
    {
      title: "Numbers Of Floors",
      inputInfo: {
        type: "text",
        label: "Numbers Of Floors",
        placeholder: "Numbers Of Floors",
        id: "numberOfFloors",
        value: numberOfFloors,
      },
    },
    {
      title: "Max Rooms",
      inputInfo: {
        type: "text",
        label: "Max Rooms",
        placeholder: "Max Rooms",
        id: "maxRooms",
        value: maxRooms,
      },
    },
    {
      title: "Beds",
      inputInfo: {
        type: "text",
        label: "Beds",
        placeholder: "Beds",
        id: "beds",
        value: beds,
      },
    },
    {
      title: "Baths",
      inputInfo: {
        type: "text",
        label: "Baths",
        placeholder: "Baths",
        id: "baths",
        value: baths,
      },
    },
    {
      title: "Furnishing",
      inputInfo: {
        type: "select",
        label: "Furnishing",
        placeholder: "Furnishing",
        id: "furnishing",
        value: furnishing,
        options: [{
          label: "Please select Furnished Type",
          value: "defaultFurnishing",
          id: "defaultFurnishing",
        },
          {
            label: "Unfurnished", value: "Unfurnished", id: "Unfurnished"
          },
          {
            label: "Semi-furnished",
            value: "Semi-furnished",
            id: "Semi-furnished",
          },
          {
            label: "Fully-furnished",
            value: "Fully-furnished",
            id: "Fully-furnished",
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
        id: "parkingSpace",
        value: parkingSpace,
        options: [{
          label: "Please select Parking Space",
          value: "defaultParkingSpace",
          id: "defaultParkingSpace",
        },
          {
            label: "Car", value: "Car", id: "Car"
          },
          {
            label: "Bike", value: "Bike", id: "Bike"
          },
          {
            label: "Cycle", value: "Cycle", id: "Cycle"
          },
          {
            label: "Garage", value: "Garage", id: "Garage"
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
      },
    },
    {
      title: "Property Available Date",
      inputInfo: {
        type: "date",
        label: "Property Available Date",
        placeholder: "Property Available Date",
        id: "propertyAvailableDate",
        value: propertyAvailableDate,
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
        id: "havePool",
        value: havePool,
        options: [{
          label: "Please select One",
          value: "defaultHavePool",
          id: "defaultHavePool",
        },
          {
            label: "Yes", value: "yes", id: "yes"
          },
          {
            label: "No", value: "no", id: "no"
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
        id: "poolType",
        value: poolType,
        hidden: !["yes"].find((poolType) => poolType === havePool),
        options: [{
          label: "Please select One",
          value: "defaultHavePool",
          id: "defaultHavePool",
        },
          {
            label: "In Ground", value: "inGround", id: "inGround"
          },
          {
            label: "Rooftop Pool", value: "rooftopPool", id: "rooftopPool"
          },
          {
            label: "Infinity Pool", value: "infinityPool", id: "infinityPool"
          },
          {
            label: "Kids' Pool", value: "kidsPool", id: "kidsPool"
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
        hidden: !["yes"].find((poolSize) => poolSize === havePool),
      },
    },
  ];
};

export const prepareDescriptionAndMediaInfo = (data: any) => {
  const {
    description, media, videoLink
  } = data || {};

  return [{
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
        id: "media",
        value: media,
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
    kitchen, utilitiesIncluded, servicesIncluded, additionalFeatures, fullyEquipped, fridge, oven, stoves, electric, water, wifi, cleaning, abcd, adcb, emergencyExit, cctv, securityGuard, balcony, laundryService, elevatorLift,
  } = data || {};

  return [{
    title: "Kitchen",
    inputInfo: {
      label: "Kitchen",
      placeholder: "Kitchen",
      id: "kitchen",
      inputGroups: [{
        count: 1,
        rows: [{
          type: "checkbox",
          placeholder: "Fully Equipped",
          id: "fullyEquipped",
          value: fullyEquipped,
          isDefault: true
        },
          {
            type: "checkbox",
            placeholder: "Fridge",
            id: "fridge",
            value: fridge,
            isDefault: true,
          },
          {
            type: "checkbox",
            placeholder: "Oven",
            id: "oven",
            value: oven,
            isDefault: true,
          },
          {
            type: "checkbox",
            placeholder: "Stoves",
            id: "stoves",
            value: stoves,
            isDefault: true,
          },
          {
            type: "button",
            // placeholder: "Beaches",
            id: "addButton",
            value: "+",
          },
        ],
      },
      ],
    },
  },
    {
      title: "Utilities included",
      inputInfo: {
        label: "Utilities included",
        id: "utilitiesIncluded",
        inputGroups: [{
          count: 1,
          rows: [{
            type: "checkbox",
            placeholder: "Electric",
            id: "electric",
            value: electric,
            isDefault: true,
          },
            {
              type: "checkbox",
              placeholder: "Water",
              id: "water",
              value: water,
              isDefault: true,
            },
            {
              type: "checkbox",
              placeholder: "wifi",
              id: "wifi",
              value: wifi,
              isDefault: true,
            },
            {
              type: "button",
              // placeholder: "Beaches",
              id: "addButton",
              value: "+",
            },
          ],
        },
        ],
      },
    },
    {
      title: "Services included",
      inputInfo: {
        label: "Services included",
        id: "servicesIncluded",
        inputGroups: [{
          count: 1,
          rows: [{
            type: "checkbox",
            placeholder: "cleaning",
            id: "cleaning",
            value: cleaning,
            isDefault: true,
          },
            {
              type: "checkbox",
              placeholder: "adcb",
              id: "adcb",
              value: adcb,
              isDefault: true,
            },
            {
              type: "checkbox",
              placeholder: "abcd",
              id: "abcd",
              value: abcd,
              isDefault: true,
            },
            {
              type: "button",
              // placeholder: "Beaches",
              id: "addButton",
              value: "+",
            },
          ],
        },
        ],
      },
    },
    {
      title: "Additional Features",
      inputInfo: {
        label: "Additional Features",
        id: "additionalFeatures",
        inputGroups: [{
          count: 1,
          rows: [{
            type: "checkbox",
            placeholder: "Emergency exit",
            id: "emergencyExit",
            value: emergencyExit,
            isDefault: true,
          },
            {
              type: "checkbox",
              placeholder: "CCTV",
              id: "cctv",
              value: cctv,
              isDefault: true,
            },
            {
              type: "checkbox",
              placeholder: "Security Guard",
              id: "securityGuard",
              value: securityGuard,
              isDefault: true,
            },
            {
              type: "checkbox",
              placeholder: "Balcony",
              id: "balcony",
              value: balcony,
              isDefault: true,
            },
            {
              type: "checkbox",
              placeholder: "Laundry Service",
              id: "laundryService",
              value: laundryService,
              isDefault: true,
            },
            {
              type: "checkbox",
              placeholder: "Elevator Lift",
              id: "elevatorLift",
              value: elevatorLift,
              isDefault: true,
            },
            {
              type: "button",
              // placeholder: "Beaches",
              id: "addButton",
              value: "+",
            },
          ],
        },
        ],
      },
    },
  ];
};