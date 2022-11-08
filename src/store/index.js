import { createStore } from 'vuex'

export default createStore({
  state: {
    phone_numbers: [
      {
        id: '1667908999506',
        fio: 'Бринза Константин Олегович',
        phone_number: '77490',
        mobile_number: '+380784693123'
      },
      {
        id: '1667908999507',
        fio: 'Микитчук Степан Васильович',
        phone_number: '52390',
        mobile_number: '+380462355463'
      },
      {
        id: '1667908999508',
        fio: 'Весняна Вікторія Сергіївна',
        phone_number: '93034',
        mobile_number: '+380854624413'
      },
    ]
  },
  getters: {
    getAll: (state) => {return state.phone_numbers},
    getFiltered: (state) => (formFilterFields) => {
      const filtered = state.phone_numbers.filter(person => {
        if (
          person.fio.toLocaleLowerCase().includes(formFilterFields.fio.toLocaleLowerCase()) &&
          person.phone_number.toLocaleLowerCase().includes(formFilterFields.phone_number.toLocaleLowerCase()) &&
          person.mobile_number.toLocaleLowerCase().includes(formFilterFields.mobile_number.toLocaleLowerCase())
          ){ return true; }
        return false;
      })
      return filtered;
    }
  },
  mutations: {
    addPerson: (state, newPerson) => {state.phone_numbers.push(newPerson)},
    deletePerson: (state, id) => {
      state.phone_numbers = state.phone_numbers.filter((person) => {
        return person.id !== id
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
