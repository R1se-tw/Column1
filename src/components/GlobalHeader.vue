<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
      <router-link class="navbar-brand" to="/">者也专栏</router-link>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li calss="list-inline-item"><router-link to="/login" class="btn btn-outline-light my-2">Login</router-link></li>
      <li class="list-inline-item"><router-link to="/signup" calss="btn btn-outline-light my-2">Register</router-link></li>
      </ul>
      <ul v-else class="list-inline mb-0">
        <li calss="list-inline-item">
           <dropdown :title="`Welcome ${user.nickName}`">
          <dropdown-item><router-link to="/create" class="dropsown-item">Create an article</router-link></dropdown-item>
          <dropdown-item><router-link :to="`column/${user.column}`" class="dropsown-item">my column</router-link></dropdown-item>
          <dropdown-item disabled><a href="#" class="dropsown-item">Edit the profile</a></dropdown-item>
          <dropdown-item><a href="#" class="dropsown-item">Log out</a></dropdown-item>
          </dropdown>
        </li>
      </ul>
    </nav>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue'
import Dropdown from './Drop-down.vue'
import DropdownItem from './Dropdown-item.vue'
import { UserProps } from '../store'
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown,
    // eslint-disable-next-line vue/no-unused-components
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})

</script>
