<script lang="ts" setup>
  // variable
  const msg = 'Hello!'

  // functions
  function log() {

    console.log(msg)
}
  //
</script>

<template>
    <v-card
      class="mx-auto rounded-lg"
      max-width="434"
    >
      <v-parallax
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-avatar
          color="grey"
          size="150"
          rounded="0"
        >
          <v-img cover src="../assets/Foto-portfolio.jpg"></v-img>
        </v-avatar>
        <v-list-item
          class="text-white"
          title="Ivan Cuadrado"
          subtitle="Technical Software Developer"
          append-icon="mdi-certificate"
          download
          href="../assets/Titulo.rar"
        ></v-list-item>
       
      </v-parallax>
    </v-card>
  </template>