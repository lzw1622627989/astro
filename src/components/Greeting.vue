<template>
    <div>
        <h3>{{ greeting }}! Thank you for visiting!</h3>
        <button @click=" randomMessage ">
            New Greeting
        </button>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    interface propsType {
        messages: string[];
    }
    const props = defineProps<propsType>();
    console.log( props );
    const greeting = ref(props.messages[ 0 ]);
    function randomMessage () {
        greeting.value = props.messages[ ( Math.floor( Math.random() * props.messages.length ) ) ]
    }


</script>

<style lang="scss" scoped></style>