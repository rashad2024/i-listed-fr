import { useState } from "react";

export function useDynamicFieldMap() {
  const [fieldMap, setFieldMap] = useState<Record<any, any[]>>({});

  const addValue = (key: string, value: any) => {
    setFieldMap((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const addBulkValue = (data: any) => {
    setFieldMap((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const getValues = () => fieldMap;

  const reset = () => setFieldMap({});

  return {
    addValue,
    getValues,
    reset,
    addBulkValue,
    fieldMap, // exposed for real-time display if needed
  };
}
