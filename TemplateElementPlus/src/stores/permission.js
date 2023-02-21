import { ref } from 'vue';

const Permission = {
  name: import.meta.env.VITE_APP_PERMISSION,
  validRoutes: ref([]),
  get: () => {
    return Permission.validRoutes.value;
  },
  set: (arr = []) => {
    Permission.validRoutes.value = arr;
  },
  reset: () => {
    Permission.validRoutes.value = [];
  }
};

export default Permission;
