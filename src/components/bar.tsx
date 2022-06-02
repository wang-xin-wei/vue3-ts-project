import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  render () {
    return (
      <div>{this.msg}</div>
    )
  }
})
