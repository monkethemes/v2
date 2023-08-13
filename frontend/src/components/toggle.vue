<!-- Toggle.vue -->
<template>
    <div>
        <input type="checkbox" :id="id" :checked="modelValue" @change="toggle" class="hidden">
        <label :for="id"
            class="flex items-center cursor-pointer text-xs transition hover:text-text active:text-sub"
            :class="modelValue ? activeClass : 'text-sub'">
            <slot></slot>
        </label>
    </div>
</template>

<script>
export default {
    name: 'Toggle',
    props: {
        id: {
            type: String,
            required: true
        },
        modelValue: Boolean,
        activeClass: {
            type: String,
            default: 'text-main'
        }
    },
    methods: {
        toggle(event) {
            this.$emit('update:modelValue', event.target.checked);
        }
    }
}
</script>