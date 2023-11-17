import { defineComponent } from 'vue'

export type AvatarProps = {}

export const Avatar = defineComponent({
  name: 'Avatar',
  setup(_, { attrs }) {
    return () => <div {...attrs}>Hello</div>
  },
})
