import { ref } from 'vue';

const Permission = {
  name: import.meta.env.VITE_APP_PERMISSION,
  validRoutes: ref([]),
  getValidRoutes: () => {
    return Permission.validRoutes.value;
  },
  setValidRoutes: (arr = []) => {
    Permission.validRoutes.value = arr;
  },
  reset: () => {
    Permission.validRoutes.value = [];
  }
};

export default Permission;
