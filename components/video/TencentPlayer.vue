<template>
  <video
    :id='tcPlayerId'
    class='tencent-player'
    width='1100'
    preload='auto'
    playsinline
    webkit-playsinline
  ></video>
</template>
<script>
  export default {
    name: 'TencentPlayer',
    data() {
      return {
        tcPlayerId: 'tcPlayer' + Date.now(),
        player: null,
      }
    },
    props: {
      options: {
        type: Object,
        default() {
          return {};
        },
      },
    },
    watch: {
      options: {
        handler(newV, oldV) {
          this.$nextTick(() => {
            this.loadJS();
          });
        },
        immediate: true,
        deep: true,
      },
    },
    methods: {
      onoptions(cur, old) {
        this.$nextTick(() => {
          this.loadJS();
        });
      },
      loadTcScript(callback) {
        this.loadScript(callback, {
          id: 'tcPlayerScriptId',
          url: '//imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.min.js',
        });
      },
      loadScript(callback, params) {
        if (document.getElementById(params.id)) {
          callback();
        } else {
          const script = document.createElement('script');
          script.async = true;
          script.src = params.url;
          script.id = params.id;
          script.onload = () => {
            callback();
          };
          document.body.appendChild(script);
        }
      },
      loadJS() {
        if (window.TCPlayer) {
          this.initVideo();
        } else {
          this.loadTcScript(() => {
            this.initVideo();
          });
        }
      },
      initVideo() {
        const playerParm = {
          fileID: this.options.fileID,
          appID: this.options.appID,
          autoplay: this.options.autoplay ? true : false,
        };
        setTimeout(() => {
          if (!this.player) {
            this.player = TCPlayer(this.tcPlayerId, playerParm);
          } else {
            this.player.loadVideoByID(playerParm);
          }
        });
      }
    },
  }
</script>
<style lang='scss' scoped>
  @import url('//imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.css');
</style>
