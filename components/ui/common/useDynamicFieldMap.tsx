import { useState } from "react";

export function useDynamicFieldMap() {
  const [fieldMap, setFieldMap] = useState<Record<string, any[]>>({});

  const addValue = (key: string, value: any) => {
    setFieldMap((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const getValues = () => fieldMap;

  const reset = () => setFieldMap({});

  return {
    addValue,
    getValues,
    reset,
    fieldMap, // exposed for real-time display if needed
  };
}
