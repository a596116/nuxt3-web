---
title: 父組件執行子組件,獲取子組屬性defineExpose
description: 父組件執行子組件,獲取子組屬性defineExpose
author: a596116
date: 2022-08-20
tags: 
  - vue
---
**这个方法是vue3 3.2+ 版本新增的，大概意思就是 在 `<script setup>` 组件中明确要暴露出去的属性，使用 `defineExpose` 编译器宏**
## 子組件

:::div{class="py-4"}
  ::tabs
    :::tab{name="vue" title="Vue"}
      ```vue
      <script setup>
      import {ref, defineExpose} from 'vue'
      const a=ref('子組件屬性')
      const f=ref(()=>{
      console.log('子組件方法')
      })
      // Only available in Vue >= 3.1.3
      defineExpose({
          a
          f
      })
      </script>
      ```
      :::
  ::
:::

## 父組件

:::div{class="py-4"}
  ::tabs
    :::tab{name="vue" title="Vue"}
```vue
<template>
    <ChildComponent ref="childComponentRef" />
</template>

<script setup>
import { ref, onMounted } from 'vue'

const childComponentRef = ref()

onMounted(() => {
    const valueA = childComponentRef.value.a;
    console.log(valueA)
		childComponentRef.value.f
})
</script>
```
:::
  ::
:::