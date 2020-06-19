<template>
    <div id="projects">
        <v-container>
            <v-row
            justify="center"
            align="center"
            >
                <v-col class="text-center">
                    <div class="text-uppercase display-1 mt-4 text-decoration-underline">my projects</div>
                </v-col>
            </v-row>
            <v-row class="mt-4" >
                <v-col cols="8" sm="6" md="4" lg="3" v-for="project in projects" :key="project.title" >
                    <v-card elevation="9" height="300">
                        <v-card-title class="blue white--text">
                            <div class="text-uppercase">todo-list</div>
                        </v-card-title>
                        <v-card-text>
                            <v-img>
                                <div>Lorem ipsum dolor sit amet.</div>
                            </v-img>
                            <div title>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn class="success white--text">
                                more
                               
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<script>
export default {
    name: 'Projects',
    data(){
        return{
            projects: [
                {title: 'Todo list',languge:'Vue.js', cover: 'lla',paragraphy:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sed asperiores assumenda aspernatur?'},
                {title: 'Ecommerce-site',languge:'django', cover: 'lla',paragraphy:'Lorem ipsum dolor, sit amet  adipisicing elit. Magni sed asperiores assumenda aspernatur?'},
                {title: 'Music-app',languge:'Vue.js', cover: 'lla',paragraphy:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sed asperiores assatur?'},
                {title: 'Personal-site',languge:'Vue.js', cover: 'lla',paragraphy:'Lorem ipsum dolor, sit amet conur adipisicing elit. Magni sed asperiores assumenda aspernatur?'},
            ]
        }
    }
}
</script>

<style scoped>

</style>