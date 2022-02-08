export default {
  name: "test",
  props: ["test"],
  render() {
    const test = this.test
    return <div>{test}</div>
  }
}
