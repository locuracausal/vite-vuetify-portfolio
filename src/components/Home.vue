<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row>
        <v-img
          contain
          height="50"
          src="@/assets/logo.svg"
        />
        <v-img
          contain
          height="50"
          src="@/assets/logo-vue.svg"
        />
      </v-row>
      
      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">My portfolio</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <ButtonIcon :text="'Education'" :icon_text="'mdi-book-education-outline'"/>
        </v-col>

        <v-col cols="auto">
          <ButtonIcon :text="'Projects'" :icon_text="'mdi-briefcase-outline'"/>
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col v-for="socialNetwork in socialNetworks" :key="socialNetwork.name">
          <v-btn
          :icon="'mdi-' + socialNetwork.name"
          color="primary"
          target="_blank"
          :href=socialNetwork.url 
        ></v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>


<script lang="ts" setup>
  const socialNetworks = [
    {
      name: 'twitter',
      url: 'https://twitter.com/IvanCuadrado8',
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/ivan.cuadrado.1/'
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ivan-cuadrado-2ba56918b/'
    }

  ]
  //
</script>
