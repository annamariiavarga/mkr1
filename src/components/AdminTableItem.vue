<template>
    <tr>
        <td>{{person.id}}</td>
        <td>{{person.fio}}</td>
        <td>{{person.phone_number}}</td>
        <td>{{person.mobile_number}}</td>
        <td><a href="#" @click.prevent="deletePerson(person.id)">X</a></td>
    </tr>
</template>

<script>
import { useStore } from 'vuex'
export default {
    name: 'AdminTableItem',
    props: {
        person: {}
    },
    setup() {
        const store = useStore()
        
        const deletePerson = (id) => {
            store.commit('deletePerson', id)
        }

        return {
            deletePerson
        }
    }
}
</script>