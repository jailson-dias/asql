<template>
  <v-app id="student">
    <v-navigation-drawer v-model="drawer" app>
      <div class="text-center">
        <img class="my-6" src="@/assets/logo.png" alt="Logo" width="100" />
      </div>
      <v-list dense>
        <template v-for="item in items">
          <v-list-item v-if="item.to" :key="item.text" link :to="item.to">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-else :key="item.text" @click="action(item.click)">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <h3 class="ml-2">{{ header.title.text }}</h3>
      <v-spacer />
      <div class="d-flex flex-row">
        <v-btn v-if="header.prev" class="d-none d-sm-flex text-capitalize white--text" text>
          <v-icon left large>mdi-chevron-left</v-icon>
          Anterior
        </v-btn>
        <v-btn v-if="header.next" class="d-none d-sm-flex text-capitalize white--text mr-1" text>
          Próxima
          <v-icon right large>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn v-if="header.prev" class="d-flex d-sm-none text-capitalize white--text" icon>
          <v-icon left large>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn v-if="header.next" class="d-flex d-sm-none text-capitalize white--text mr-1" icon>
          <v-icon right large>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    drawer: null,
    items: [
      { icon: "mdi-contacts", text: "Atividades", to: "/" },
      { icon: "mdi-history", text: "Finalizadas", to: "/te"},
      { icon: "mdi-content-copy", text: "Sair", click: "sair"}
    ]
  }),

  created() {
    try {
      this.getToken()
    } catch (err) {
      this.$router.push("/login");
    }
  },

  computed: {
    ...mapState("exercise", {
      header: (state) => state.header,
    })
  },

  methods: {
    ...mapActions("user", ["getToken", "logOut"]),
    sair() {
      this.logOut()
      this.$router.push("/login")
    },
    action(name) {
      this[name]()
    }
  }
};
</script>
