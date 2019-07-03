<template>
<select ref="el"
    :data-placeholder="placeholder">
    <template v-if="options">
        <option v-for="option in options"
            :key="option.id"
            :value="option.id">
            {{ option.text }}
        </option>
    </template>
</select>
</template>

<script>
export default {
    props: ['placeholder', 'parameters', 'options', 'value'],
    data() {
        return {
            element: null
        }
    },
    mounted() {
        this.element = $(this.$refs.el)
        this.element
            .select2(this.parameters)
            .on('select2:select', e => {
                this.$emit('input', e.params.data.id)
                this.$emit('change', e.params.data)
            })
    },
    methods: {
        clear() {
            this.element.val(null).trigger('change')
        }
    },
    watch: {
        value(val) {
            this.element.val(val).trigger('change')
        }
    }
}
</script>
