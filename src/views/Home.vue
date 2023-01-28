<template>
    <v-container>
      <v-row>
        <v-col>
          <Avatar />
        </v-col>
        <v-col>
          <HelloWorld />  
        </v-col>
      </v-row>
    </v-container>
</template>

<script lang="ts" setup>
  import Avatar from '@/components/CardPresentation.vue'  
  import HelloWorld from '@/components/HelloWorld.vue'
</script>
