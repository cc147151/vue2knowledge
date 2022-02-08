import Input from "@/components/input.js"
export default {
  data() {
    return {
      name: "sjy",
      age: "22",
      value: ""
    }
  },
  methods: {
    test() {
      this.age = "33"
    }
  },
  render(props) {
    console.log(props.children)
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
            }
          }}
        />
        <button onClick={() => this.test()}>测试点我</button>
      </div>
    )
  }
}
