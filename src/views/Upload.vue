<template>
  <div style="text-align: left;">
    <button @click="handleClick">Click me!</button>
    <!-- user 前置摄像头 environment 后置摄像头 -->
    <input type="file" accept="image/*" capture="environment" ref="uploadBtn" style="visibility: hidden;">
    <MediaRecorder
      :visible.sync="recorderVisible"
      :config="mediaRecorderConfig"
      @takePhoto="handleTakePhoto" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      recorderVisible: false
    }
  },
  computed: {
    isIos () {
      return /iPhone|iPad/.test(window.navigator.userAgent)
    },
    mediaRecorderConfig () {
      return this.isIos
        ? {
          video: { aspectRatio: 1 / 1 },
          mirror: true
        }
        : {
          video: { aspectRatio: 4 / 3 },
          mirror: true
        }
    }
  },
  methods: {
    isMobile () {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    },
    handleClick () {
      if (this.isMobile()) {
        this.$refs.uploadBtn.click()
      } else {
        this.recorderVisible = true
      }
    },
    handleTakePhoto (photo) {
      console.log('Download Photo')
      const { dataUrl } = photo
      const a = document.createElement('a')
      a.href = dataUrl
      a.download = 'avatar.png'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }
}
</script>

<style scoped lang="less">
</style>
