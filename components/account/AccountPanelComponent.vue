<template>
  <div class="flex" style="min-height: 100vh">
    <div class=" px-4 lx:px-20 lg:px-20 md:px-20">
      <AccountPanelProfile/>
    </div>
  </div>
</template>

<script setup>
import {defineComponent, ref} from 'vue';
import {useFetchData} from "~/composables/useFetchData";
import {uri} from "~/utils";

const props = defineProps({
  tab: {
    type: Number,
    default: 1,
  },
});
const selectedItem = ref(props.tab);
const user = useCookie('user')
const isLogin = useCookie('is_login')
const token = useCookie('token')

function selectItem(item) {
  selectedItem.value = item;
  if (item === 5) {
    logout()
  }
}

async function logout() {
  const {data, error} = await useFetchData(
      {
        service: uri.logout,
        fields: {},
        token: useCookie("is_login").value ? useCookie("token").value : "",
        callBack: () => {
        },
        error: () => {
        },
      },
      {
        method: 'POST',
      }
  );
  user.value = null
  isLogin.value = false
  token.value = ''
  await goToMain();


}

async function goToMain() {
  await navigateTo({path: '/'})
}

</script>
<style scoped>
/* Add your custom styles here */
</style>
