<template>
    <div id="app">
        <v-toolbar app height="70" class="amber accent-4 font-weight-black">
            <v-toolbar-title>
                <div class="display-1 ml-5">{{ name }}</div>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
            <v-toolbar-items class="hidden-sm-and-down">
              <v-btn text to="/">
                  home
              </v-btn>
              <v-btn text to="/projects">
                 projects
              </v-btn>
              <v-btn text to="/contact">
                  contact
              </v-btn>
              <v-btn text to="/about">
                 about
              </v-btn>
            </v-toolbar-items>
               
        </v-toolbar>

        <v-navigation-drawer disable-resize-watcher right app v-model="drawer" class="amber darken-1 white--text">
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                       <v-list-item-title class="display-1">{{ name }}</v-list-item-title>
                       <v-list-item-subtitle>{{ myEmail }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list
                nav
                dense
                >
                <v-list-item
                v-for="item in items" :key="item.title"
                router :to="item.route"
                >
                    <v-list-item-content>
                        <v-list-item-title class="title">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data(){
        return {
            drawer: false,
            name: 'acOnte',
            myEmail: 'aurelianrobot@gmail.com',
            items: [
                {title: 'Home', route: '/'},
                {title: 'Projects', route: '/projects'},
                {title: 'Contact', route: '/contact'},
                {title: 'About', route: '/about'}
            ]
        }
    }
}
</script>


<style scoped>

</style>