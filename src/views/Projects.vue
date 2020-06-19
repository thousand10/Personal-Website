<template>
    <div id="projects">
        <v-container>
            <v-row
            justify="center"
            align="center"
            >
                <v-col class="text-center">
                    <div class="text-uppercase display-1 mt-4">my projects</div>
                </v-col>
            </v-row>
            <v-row class="mt-4" >
                <v-col cols="11" sm="6" md="4" lg="3" 
                    v-for="project in projects"
                    :key="project.title"
                    class="mx-auto"
                     >
                    <v-card elevation="9" height="400" class="mx-auto my-2" :to="project.route">
                        <v-card-title class="orange white--text">
                            <div>{{project.title}}</div>
                        </v-card-title>
                        <v-img
                        height="200"
                        class="white--text align-end"
                         gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.9)"
                        :src="project.cover"
                        >
                            <v-card-subtitle class="white--text text-capitalize">{{project.text}}</v-card-subtitle>
                        </v-img>
                        <v-card-text>
                            <div>{{project.paragraphy}}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn class="success">
                                explore
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-rating
                                :value="4.0"
                                color="amber"
                                dense
                                readonly
                                size="15"
                            ></v-rating>
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
                {title: 'Todo list',languge:'Vue.js', text:' ipsum dolor sit amet consectetur, adipisicing el', cover: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',paragraphy:'Lorem ipsum dolor, sit amet consectetur adipisicing el assumenda aspernatur? i assatur', route: 'https://github.com/thousand10/Personal-Website'},
                {title: 'Ecommerce-site',languge:'django', text:' ipsum dolor sit amet consectetur, adipisicing el', cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',paragraphy:'Lorem ipsum dolor, sit amet  adipisicing elit. Magni sed asperiores sit amet da aspernatur?'},
                {title: 'Music-app',languge:'Vue.js', text:' ipsum dolor sit amet consectetur, adipisicing el', cover: 'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',paragraphy:'Lorem ipsum dolor, sit amet consectetur adipi assatur? sit amet consectetur adipi assatur'},
                {title: 'Personal-site',languge:'Vue.js', text:' ipsum dolor sit amet consectetur, adipisicing el', cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',paragraphy:'Lorem ipsum dolor, sitt amet consectetur adipi assatur  aspernatur?'},
            ]
        }
    }
}
</script>

<style scoped>

</style>