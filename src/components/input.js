export default {
  render(h) {
    return (
      <div>
        <p>jsx</p>
        {this.$scopedSlots.cc({ text: "测试" })}
        {!this.$scopedSlots.default && <div>一个按钮</div>}
        {this.$scopedSlots.default && this.$scopedSlots.default()}
      </div>
    )
  }
}
