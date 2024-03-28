import { useState } from 'react';
type Return<FormValues> = {
    handleFieldTouch: (fieldName: keyof FormValues) => void;
    isFieldTouched: (fieldName: keyof FormValues) => boolean;
    touchedFields: (keyof FormValues)[];
};
export const useTouchField = <FormValues = { [key: string]: any }>(): Return<FormValues> => {
    const [touchedFields, setTouchedFields] = useState<(keyof FormValues)[]>([]);

    const handleFieldTouch = (touchedFieldName: keyof FormValues): void =>
        setTouchedFields((fields) =>
            fields.some((field) => field === touchedFieldName) ? fields : [...fields, touchedFieldName],
        );
    const isFieldTouched = (fieldName: keyof FormValues): boolean =>
        touchedFields.some((touchedField) => touchedField === fieldName);

    return { handleFieldTouch, isFieldTouched, touchedFields };
};
