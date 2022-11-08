<template>
    <table border="1">
        <thead>
          <tr>
            <td><b>Filter:</b></td>
            <td><input type="text" v-model="filterForm.fio" placeholder="Filter by fio ..."></td>
            <td><input type="text" v-model="filterForm.phone_number" placeholder="Filter by phone number ..."></td>
            <td><input type="text" v-model="filterForm.mobile_number" placeholder="Filter by mobile number ..."></td>
            <td rowspan="2"></td>
          </tr>
          <tr>
            <td><b>ID</b></td>
            <td><b>FIO</b></td>
            <td><b>Phone</b></td>
            <td><b>Mobile</b></td>
          </tr>
        </thead>
        <tbody>
          <AdminTableItem v-for="person in phoneNumbers" :key="person.id" :person="person"/>
        </tbody>
      </table>
</template>

<script>
import AdminTableItem from './AdminTableItem.vue'

export default {
    name: 'AdminTable',
    components: {AdminTableItem},
    props: {
        filterForm: {},
        phoneNumbers: []
    }
}
</script>

<style scoped>
table {
  width: 100%;
  margin-bottom: 1rem;
}

table tr td input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0;
}
</style>