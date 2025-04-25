<template>
  <div class="error-container">
    <div class="error-box">
      <i class="fas fa-exclamation-circle"></i>
      <p class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.error-box {
  text-align: center;
  padding: 2rem;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 0.25rem;
}

.error-box i {
  color: #721c24;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.error-message {
  color: #721c24;
  font-size: 1.5rem;
  margin-bottom: 0;
}
</style>
