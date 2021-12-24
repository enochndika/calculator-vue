import { ref } from 'vue';
import { findOperation } from './utils';

export const useForm = () => {
  const result = ref(15);
  const leftNumber = ref(7);
  const rightNumber = ref(8);
  const operation = ref('+');

  const resetForm = () => {
    result.value = 0;
    leftNumber.value = 0;
    rightNumber.value = 0;
    operation.value = '+';
  };

  const onSubmit = () => {
    result.value = findOperation({
      left: leftNumber.value,
      right: rightNumber.value,
      opt: operation.value,
    });

    if (isNaN(result.value)) {
      window.alert('Vous ne pouvez pas diviser 0 par 0');
      resetForm();
    }
  };

  return {
    methods: {
      onSubmit,
      resetForm,
    },
    fields: {
      result,
      leftNumber,
      rightNumber,
      operation,
    },
  };
};
