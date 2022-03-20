<template>
  <div v-bind="response">{{ response }}</div>
</template>

<script>
import socket from '~/server.js'
export default {
  name: 'IndexPage',
  data () {
    return {
      response: ''
    }
  },
  mounted () {
    socket.io('http://127.0.0.1:9090')
    this.response = '已連結上'
  }
}
</script>
