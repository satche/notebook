<template>
  <div class="test">
    <span v-for="(tag, index) in $frontmatter.tags" :key="index">
      <Badge>{{ tag }}</Badge>
    </span>
    <slot></slot>
  </div>
</template>
