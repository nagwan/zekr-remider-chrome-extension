<script>
import azkar from './azkar'

export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {
    activeZekr () {
      return azkar[Math.floor(Math.random() * azkar.length)]
    }
  },
  methods: {}
}
</script>
<template>
    <div class="container">
        <div>
            <img
                width="30"
                height="30"
                alt="Zekr Reminder"
                src="/icons/logo.png"
            />
        </div>

        <div>
          <h2>{{activeZekr.name}}</h2>
        </div>
    </div>
</template>
<style scoped lang='sass'></style>
