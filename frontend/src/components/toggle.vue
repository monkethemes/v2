<template>
   <div class="relative">
      <input
         :type="isRadio ? 'radio' : 'checkbox'"
         :id="id"
         :name="isRadio ? radioName : undefined"
         :value="isRadio ? value : undefined"
         :checked="isRadio ? modelValue === value : modelValue"
         @change="toggle"
         class="hidden"
      />
      <label
         :for="id"
         class="flex items-center cursor-pointer text-xs transition hover:text-text active:text-sub"
         :class="isActive ? activeClass : 'text-sub'"
      >
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
      modelValue: {
         type: [Boolean, String],
         default: false
      },
      activeClass: {
         type: String,
         default: 'text-main'
      },
      isRadio: {
         type: Boolean,
         default: false
      },
      value: String,
      radioName: {
         type: String,
         default: 'radio-group'
      }
   },
   computed: {
      isActive() {
         if (this.isRadio) {
            return this.modelValue === this.value;
         }
         return this.modelValue;
      }
   },
   methods: {
      toggleCheckbox(event) {
         this.$emit('update:modelValue', event.target.checked);
      },
      toggleRadio(event) {
         this.$emit('update:modelValue', event.target.value);
      },
      toggle(event) {
         if (this.isRadio) {
            this.$emit('update:modelValue', event.target.value);
         } else {
            this.$emit('update:modelValue', event.target.checked);
         }
      }
   }
};
</script>
