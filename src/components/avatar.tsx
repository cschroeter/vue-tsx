import { defineComponent } from 'vue'

export type AvatarProps = {}

export const Avatar = defineComponent({
  name: 'Avatar',
  setup(_, { slots, attrs }) {
    return () => <div {...attrs}>{slots.default?.()}</div>
  },
})
