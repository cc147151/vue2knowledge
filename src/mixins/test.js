export default {
    data() {
        return {
            
        }
    },
    beforeCreate() {
        console.log("mixins-beforeCreate");
      },
      created() {
        console.log("mixins-created");
      },
      beforeMount() {
        console.log("mixins-beforeMount");
      },
      mounted() {
        console.log("mixins-mounted");
      },
      beforeDestroy() {
        console.log("mixins-beforeDestroy")
      },
      destroyed() {
        console.log("mixins-destroyed");
      },
}