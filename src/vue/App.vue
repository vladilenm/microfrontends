<template>
  <div class="container">
    <div class="card">
      <h1>Vue Micro App</h1>

      <h3>Vue Click Count: {{ count }}</h3>

      <button class="btn" @click="increment">Increment Count</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: window.store.count,
    }
  },
  methods: {
    increment() {
      window.store.increment()
    },
  },
  mounted() {
    window.store.subscribe(() => {
      this.count = window.store.count
    })
  },
}
</script>

<style scoped>
.container {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
}
.card {
  text-align: center;
  width: 400px;
  padding: 1rem;
}

.btn {
  color: #42b983;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  letter-spacing: 0.05em;
  border: 1px solid #42b983;
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 10px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #fff;
  transition: all 0.22s;
}

.btn:active {
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.btn:hover {
  cursor: pointer;
  opacity: 0.8;
}

.card {
  overflow: hidden;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  background: #fff;
}
</style>
