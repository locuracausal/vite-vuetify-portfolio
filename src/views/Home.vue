<template>
    <v-container>
      <v-row  align="center">
        <v-col   >
          <CardPresentation />
        </v-col>
        <v-col>
          <Home />  
        </v-col>
      </v-row>
    </v-container>
</template>

<script lang="ts" setup>
  import CardPresentation from '@/components/CardPresentation.vue'  
  import Home from '@/components/Home.vue'
  
</script>
