<template>
  <div class="admin">
    <div class="container">
      <h1 class="center">This is an Admin page</h1>
      <AdminTable :filterForm="filterForm" :phoneNumbers="preparedPhoneNumbers"/>
      <div class="add-form">
          <p>FIO: <input type="text" v-model="addForm.fio" placeholder="FIO..."></p>
          <p>Phone number: <input type="text" v-model="addForm.phone_number" placeholder="Phone number ..."></p>
          <p>Mobile number: <input type="text" v-model="addForm.mobile_number" placeholder="Mobile number ..."></p>
          <button @click="addPerson()">Add</button>
      </div>
    </div>
  </div>
</template>
<script>
import AdminTable from '../components/AdminTable.vue'
import { computed, ref, watch } from 'vue'
import {useStore} from 'vuex'

export default {
  name: 'Admin',
  components: {AdminTable},
  setup(){
    const store = useStore()

    const filterForm = ref({
      fio: '',
      phone_number: '',
      mobile_number: ''
    })

    const addForm = ref({
      id: '',
      fio: '',
      phone_number: '',
      mobile_number: ''
    })

    const preparedPhoneNumbers = ref(store.state.phone_numbers)

    watch(() => store.state.phone_numbers, () => {
      preparedPhoneNumbers.value = store.getters.getAll
    })

    watch(filterForm.value, (currentValueOfFilterForm) => {
      preparedPhoneNumbers.value = store.getters.getFiltered(currentValueOfFilterForm)
    })

    const addPerson = () => {
      if (
        !addForm.value.fio ||
        !addForm.value.phone_number ||
        !addForm.value.mobile_number
      ) { return }


      addForm.value.id = Date.now()
      store.commit('addPerson', addForm.value)
      addForm.value = {
        id: '',
        fio: '',
        phone_number: '',
        mobile_number: ''
      }
    }

    const deletePerson = (id) => {
      store.commit('deletePerson', id)
    }

    return {
      preparedPhoneNumbers,
      filterForm, addForm,

      addPerson, deletePerson
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  height: 600px;
  margin: 0 auto;
}

.add-form {
  width: 300px;
}
.add-form p {
  display: flex;
  justify-content: space-between;
}
.add-form button {
  width: 100%;
}

</style>
