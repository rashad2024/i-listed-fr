"use client";

import { Text, TextArea , Checkbox, Flex, Card, Strong } from "@radix-ui/themes";
import { useDynamicFieldMap } from "@/components/ui/common/useDynamicFieldMap";
import InputField from "@/components/ui/common/Input";
import CustomFileUploader from "@/components/ui/common/CustomFileUploader";
import DynamicInputList from "@/components/ui/common/DynamicInputList";

export default function   ExtrasFeaturePage() {
const { addValue, getValues } = useDynamicFieldMap();

  const getFieldValue = (name: string) => {
    //console.log(name, getValues(), getValues()[name]);
    return getValues()[name];
  };
  const handleChange = (
    name: string,
    value: string | number | boolean | Array<any>
  ) => {
   // console.log(name, value);
    addValue(name, value);
  };
  
  const addMore =() =>{
    console.log("Add more input");
  }
  
  return (
    <Flex gap="3" direction="column">
      <Text> Extras Feature</Text>
      <Flex gap={"3"} direction={"row"}>
        <Card size={"5"} style={{display: "flex",flexDirection: "row",minWidth: "100%", gap: "2rem",alignItems: "center",flexWrap: "wrap" }}>
          <Flex gap={"3"} direction={"column"} style={{minWidth: "100%",flex: "1 1 100%"}}>
            <Text> Living Space </Text>
            <Flex gap="3" direction="row" style={{minWidth:"100%", flexWrap:"wrap"}}>
              <Flex
                gap={"2"}
                direction={"row"}
                justify={"center"}
                align={"center"}
              >
              <Checkbox
                id={"enclosed"}
                defaultChecked={getFieldValue("enclosed") === "on" ? true : false}
                disabled={false}
                name={"enclosed"}
                onClick={(e: any) =>
                handleChange(
                   "enclosed",
                    e.target.getAttribute("data-state") === "checked"
                    ? false
                    : true
                  )
                }
                variant="classic"
                    />
                    Enclosed
                    </Flex>
                     <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
              <Checkbox
                  id={"openPlan"}
                      defaultChecked={getFieldValue("openPlan") === "on" ? true : false}
                      disabled={false}
                      name={"openPlan"}
                      onClick={(e: any) =>
                        handleChange(
                          "openPlan",
                          e.target.getAttribute("data-state") === "checked"
                            ? false
                            : true
                        )
                      }
                      variant="classic"
                    />
                    Open-Plan
                    </Flex>
               <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
              <Checkbox
                  id={"ac"}
                      defaultChecked={getFieldValue("ac") === "on" ? true : false}
                      disabled={false}
                      name={"ac"}
                      onClick={(e: any) =>
                        handleChange(
                          "ac",
                          e.target.getAttribute("data-state") === "checked"
                            ? false
                            : true
                        )
                      }
                      variant="classic"
                    />
                    AC
                  </Flex>
                  
             <DynamicInputList
              inputGroups={[
                {
                  id: "custom-field",
                  type: "text",
                  key: "custom-field",
                  label: "",
                  placeholder: "",
                  value: getFieldValue("custom-field"),
                  onChange: (value: string) =>
                    handleChange("custom-field", value),
                },
              ]}
              inputInfo={{
                type: "button",
                label: "",
                id: "custom-field",
                value: "+",
              }}
              handleChange={addMore}
            />
            </Flex>
          </Flex>
         
         <Flex gap={"3"} direction={"column"} style={{minWidth: "100%",flex: "1 1 100%"}}>
            <Text> Kitchen </Text>
            <Flex gap="3" direction="row" style={{minWidth:"100%", flexWrap:"wrap"}}>
              <Flex
                gap={"2"}
                direction={"row"}
                justify={"center"}
                align={"center"}
              >
              <Checkbox
                id={"fullyEquipped"}
                defaultChecked={getFieldValue("fullyEquipped") === "on" ? true : false}
                disabled={false}
                name={"fullyEquipped"}
                onClick={(e: any) =>
                handleChange(
                   "fullyEquipped",
                    e.target.getAttribute("data-state") === "checked"
                    ? false
                    : true
                  )
                }
                variant="classic"
                    />
                    Fully Equipped
                    </Flex>
                     <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
              <Checkbox
                  id={"fridge"}
                      defaultChecked={getFieldValue("fridge") === "on" ? true : false}
                      disabled={false}
                      name={"fridge"}
                      onClick={(e: any) =>
                        handleChange(
                          "fridge",
                          e.target.getAttribute("data-state") === "checked"
                            ? false
                            : true
                        )
                      }
                      variant="classic"
                    />
                    Fridge
                    </Flex>
               <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
              <Checkbox
                  id={"oven"}
                      defaultChecked={getFieldValue("oven") === "on" ? true : false}
                      disabled={false}
                      name={"oven"}
                      onClick={(e: any) =>
                        handleChange(
                          "oven",
                          e.target.getAttribute("data-state") === "checked"
                            ? false
                            : true
                        )
                      }
                      variant="classic"
                    />
                    Oven
                  </Flex>
                  
                   <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
              <Checkbox
                  id={"stoves"}
                      defaultChecked={getFieldValue("stoves") === "on" ? true : false}
                      disabled={false}
                      name={"stoves"}
                      onClick={(e: any) =>
                        handleChange(
                          "stoves",
                          e.target.getAttribute("data-state") === "checked"
                            ? false
                            : true
                        )
                      }
                      variant="classic"
                    />
                    Stoves
                  </Flex>
                  
             <DynamicInputList
              inputGroups={[
                {
                  id: "custom-field",
                  type: "text",
                  key: "kitchen",
                  label: "",
                  placeholder: "",
                  value: getFieldValue("custom-field"),
                  onChange: (value: string) =>
                    handleChange("custom-field", value),
                },
              ]}
              inputInfo={{
                type: "button",
                label: "",
                id: "custom-field",
                value: "+",
              }}
              handleChange={addMore}
            />
            </Flex>
          </Flex>
          
         <Flex gap={"3"} direction={"column"} style={{minWidth: "100%",flex: "1 1 100%"}}>
            <Text> Utilities Included </Text>
            <Flex gap="3" direction="row" style={{minWidth:"100%", flexWrap:"wrap"}}>
              <Flex
                gap={"2"}
                direction={"row"}
                justify={"center"}
                align={"center"}
              >
              <Checkbox
                id={"electric"}
                defaultChecked={getFieldValue("electric") === "on" ? true : false}
                disabled={false}
                name={"electric"}
                onClick={(e: any) =>
                handleChange(
                   "electric",
                    e.target.getAttribute("data-state") === "checked"
                    ? false
                    : true
                  )
                }
                variant="classic"
                    />
                    Electric
                    </Flex>
                     <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
              <Checkbox
                  id={"water"}
                      defaultChecked={getFieldValue("water") === "on" ? true : false}
                      disabled={false}
                      name={"water"}
                      onClick={(e: any) =>
                        handleChange(
                          "water",
                          e.target.getAttribute("data-state") === "checked"
                            ? false
                            : true
                        )
                      }
                      variant="classic"
                    />
                    Water
                    </Flex>
               <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
              <Checkbox
                  id={"wifi"}
                      defaultChecked={getFieldValue("wifi") === "on" ? true : false}
                      disabled={false}
                      name={"wifi"}
                      onClick={(e: any) =>
                        handleChange(
                          "wifi",
                          e.target.getAttribute("data-state") === "checked"
                            ? false
                            : true
                        )
                      }
                      variant="classic"
                    />
                    Wifi
                  </Flex>
                  
             <DynamicInputList
              inputGroups={[
                {
                  id: "custom-field",
                  type: "text",
                  key: "custom-field",
                  label: "",
                  placeholder: "",
                  value: getFieldValue("custom-field"),
                  onChange: (value: string) =>
                    handleChange("custom-field", value),
                },
              ]}
              inputInfo={{
                type: "button",
                label: "",
                id: "custom-field",
                value: "+",
              }}
              handleChange={addMore}
            />
            </Flex>
          </Flex>
          
            
          
            <Flex gap={"3"} direction={"column"} style={{minWidth: "100%",flex: "1 1 100%"}}>
            <Text> Services Included </Text>
            <Flex gap="3" direction="row" style={{minWidth:"100%", flexWrap:"wrap"}}>
              <Flex
                gap={"2"}
                direction={"row"}
                justify={"center"}
                align={"center"}
              >
              <Checkbox
                id={"cleaning"}
                defaultChecked={getFieldValue("cleaning") === "on" ? true : false}
                disabled={false}
                name={"cleaning"}
                onClick={(e: any) =>
                handleChange(
                   "cleaning",
                    e.target.getAttribute("data-state") === "checked"
                    ? false
                    : true
                  )
                }
                variant="classic"
                    />
                    Cleaning
                    </Flex>
                     <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
              <Checkbox
                  id={"abcd"}
                      defaultChecked={getFieldValue("abcd") === "on" ? true : false}
                      disabled={false}
                      name={"abcd"}
                      onClick={(e: any) =>
                        handleChange(
                          "abcd",
                          e.target.getAttribute("data-state") === "checked"
                            ? false
                            : true
                        )
                      }
                      variant="classic"
                    />
                    Abcd
                    </Flex>
               <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
              <Checkbox
                  id={"abdc"}
                      defaultChecked={getFieldValue("abdc") === "on" ? true : false}
                      disabled={false}
                      name={"abdc"}
                      onClick={(e: any) =>
                        handleChange(
                          "abdc",
                          e.target.getAttribute("data-state") === "checked"
                            ? false
                            : true
                        )
                      }
                      variant="classic"
                    />
                    Abdc
                  </Flex>
                  
             <DynamicInputList
              inputGroups={[
                {
                  id: "custom-field",
                  type: "text",
                  key: "custom-field",
                  label: "",
                  placeholder: "",
                  value: getFieldValue("custom-field"),
                  onChange: (value: string) =>
                    handleChange("custom-field", value),
                },
              ]}
              inputInfo={{
                type: "button",
                label: "",
                id: "custom-field",
                value: "+",
              }}
              handleChange={addMore}
            />
            </Flex>
          </Flex>
          
          <Flex gap={"3"} direction={"column"} style={{minWidth: "100%",flex: "1 1 100%"}}>
            <Text> Additional Features </Text>
            <Flex gap="3" direction="row" style={{minWidth:"100%", flexWrap:"wrap"}}>
              <Flex
                gap={"2"}
                direction={"row"}
                justify={"center"}
                align={"center"}
              >
              <Checkbox
                id={"emergencyExit"}
                defaultChecked={getFieldValue("emergencyExit") === "on" ? true : false}
                disabled={false}
                name={"emergencyExit"}
                onClick={(e: any) =>
                handleChange(
                   "emergencyExit",
                    e.target.getAttribute("data-state") === "checked"
                    ? false
                    : true
                  )
                }
                variant="classic"
                    />
                    Emergency Exit
                    </Flex>
                     <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
              <Checkbox
                  id={"cctv"}
                      defaultChecked={getFieldValue("cctv") === "on" ? true : false}
                      disabled={false}
                      name={"cctv"}
                      onClick={(e: any) =>
                        handleChange(
                          "cctv",
                          e.target.getAttribute("data-state") === "checked"
                            ? false
                            : true
                        )
                      }
                      variant="classic"
                    />
                    CCTV
                    </Flex>
               <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
              <Checkbox
                  id={"securityGuard"}
                      defaultChecked={getFieldValue("securityGuard") === "on" ? true : false}
                      disabled={false}
                      name={"securityGuard"}
                      onClick={(e: any) =>
                        handleChange(
                          "securityGuard",
                          e.target.getAttribute("data-state") === "checked"
                            ? false
                            : true
                        )
                      }
                      variant="classic"
                    />
                  Security Guard
                  </Flex>
                  
                   <Flex
                gap={"2"}
                direction={"row"}
                justify={"center"}
                align={"center"}
              >
              <Checkbox
                id={"balcony"}
                defaultChecked={getFieldValue("balcony") === "on" ? true : false}
                disabled={false}
                name={"balcony"}
                onClick={(e: any) =>
                handleChange(
                   "balcony",
                    e.target.getAttribute("data-state") === "checked"
                    ? false
                    : true
                  )
                }
                variant="classic"
                    />
                    Balcony
                    </Flex>
                     <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
              <Checkbox
                  id={"laundryService"}
                      defaultChecked={getFieldValue("laundryService") === "on" ? true : false}
                      disabled={false}
                      name={"laundryService"}
                      onClick={(e: any) =>
                        handleChange(
                          "laundryService",
                          e.target.getAttribute("data-state") === "checked"
                            ? false
                            : true
                        )
                      }
                      variant="classic"
                    />
                    Laundry Service
                    </Flex>
               <Flex
                    gap={"2"}
                    direction={"row"}
                    justify={"center"}
                    align={"center"}
                  >
              <Checkbox
                  id={"elevatorLift"}
                      defaultChecked={getFieldValue("elevatorLift") === "on" ? true : false}
                      disabled={false}
                      name={"elevatorLift"}
                      onClick={(e: any) =>
                        handleChange(
                          "elevatorLift",
                          e.target.getAttribute("data-state") === "checked"
                            ? false
                            : true
                        )
                      }
                      variant="classic"
                    />
                    Elevator Lift
                  </Flex>
                  
             <DynamicInputList
              inputGroups={[
                {
                  id: "custom-field",
                  type: "text",
                  key: "custom-field",
                  label: "",
                  placeholder: "",
                  value: getFieldValue("custom-field"),
                  onChange: (value: string) =>
                    handleChange("custom-field", value),
                },
              ]}
              inputInfo={{
                type: "button",
                label: "",
                id: "custom-field",
                value: "+",
              }}
              handleChange={addMore}
            />
            </Flex>
          </Flex>
          
          </Card>
        </Flex>
    </Flex>
    )
}