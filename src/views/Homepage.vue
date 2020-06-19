<template>
    <v-container fluid fill-height class="homepages">
        <v-row no-gutters class="no-gutters">
            <v-col
            justify="center"
            align="center"
            >
                <div class="white--text display-2">hello, i<span class="io">'</span>m <span class="io">aurelian</span></div>
                <div class="white--text title my-4 px-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora. <span>
                Lorem  Tempora ipsa saepe modi quis sapienteunt assumenda.</span></div>
                <v-btn large class="amber darken-3 black--text">
                contact
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Homepage'
}
</script>

<style scoped>
.homepages{
    height: 90vh;
    width: 100%;
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80');
    background-size: cover;


}
.io{
    color:orange;
    text-transform: uppercase;
    font-weight: bold;
}
</style>