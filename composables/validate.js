import { computed, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";

export function useValidateComposable (fields, rules) {
  const formData = reactive(fields);

  const validateRules = computed(() => rules);

  const v$ = useVuelidate(validateRules, formData);

  const fieldError = (fieldName) => {
    const foundError = v$.value.$errors.find(error => fieldName === error.$property);
    if (!foundError) {
      return null;
    }
    return v$.value.$errors.find(error => fieldName === error.$property).$message;
  };

  return { formData, v$, fieldError };
}
