<template>
  <button class="scroll-to-top" aria-label="Scroll to top">↑</button>
</template>

<style scoped lang="scss">
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #0055f3;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0044c3;
    transform: scale(1.1);
  }

  &:active {
    background-color: #003399;
  }
}
</style>
