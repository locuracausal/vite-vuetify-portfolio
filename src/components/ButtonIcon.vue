<script lang="ts">

export default {
    props: ['icon_text', 'text'],
    created() {
        // props are exposed on `this`
        console.log(this.text)
    }
}
</script>

<template>
    <v-btn
    href="https://next.vuetifyjs.com/components/all/"
    min-width="164"
    rel="noopener noreferrer"
    target="_blank"
    variant="text"
    >
        <v-icon
            :icon="icon_text"
            size="large"
            start
        />

        {{ text }}
    </v-btn>
  </template>