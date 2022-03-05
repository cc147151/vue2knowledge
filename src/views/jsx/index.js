import Input from "@/components/input.js"
export default {
  data() {
    return {
      name: "sjy",
      value: ""
    }
  },
  methods: {
    test() {}
  },
  render(h, context) {
    console.log(context)
    console.log("执行")
    return (
      <div>
        <p>{this.name}ff</p> {this.value}
        <input vModel={this.value}></input>
        <Input
          value={this.value}
          scopedSlots={{
            cc: props => {
              return <div>{props.text}</div>
            },
            default: props => {
              return <div>default</div>
            }
          }}
        />
        <button onClick={() => this.test()}>测试点我</button>
      </div>
    )
  }
}
