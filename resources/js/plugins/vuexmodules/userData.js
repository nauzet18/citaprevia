
export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    setUser (state, user) {
      state.user = user;
    },
  },
  getters: {
    getUserName (state) {
      if ( state.user == null )
        return null;

      return state.user.username;
    },
    getUser (state) {

      return state.user;
    },

  },
  actions: {
    loadUser: (context) => {
      return new Promise((resolve, reject) => {

        let user = { id: 1, username: 'Nauzet Melián Batista'};
        context.commit('setUser', user);

        resolve(user)
      })


/*
//Bueno esto no tiene sentido en mi app... en xercos el login iba por una vista de balde, aqui la idea es q es todo VUE
así que este actión, puede no tener sentido...

      return new Promise((resolve, reject) => {

          axios.get('/user')
          .then(function (resp) {
            let user = resp.data;
            context.commit('setuser', user);

            resolve(user)
          })
          .catch(function (resp) {

              console.log("Could not load User Data from vuex store actions loaduser");
              reject( null)
          });

      })
*/
     },
  },
}