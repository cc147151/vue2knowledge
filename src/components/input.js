export default {
  render(h) {
    return (
      <div>
        <p>jsx</p>
        {this.$scopedSlots.cc({ text: "测试" })}
      </div>
    )
  }
}
