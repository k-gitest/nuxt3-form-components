<template>
  <div>
    <FormPartsInputText v-model="text" option="inputText" />
    <FormPartsInputTextModel v-model:text="text" option="inputText" />
    <p>{{ text }}</p>
    <FormPartsRadio v-model="radio" :options="radioItems" name="radioItems" />
    <p>{{ radio }}</p>
    <FormPartsSelect v-model="select" :options="selectItems" name="selectItems" />
    <p>{{ select }}</p>
    <FormPartsCheckBox v-model="checkbox" :options="checkboxItems" name="checkboxItems" />
    <p>{{ checkbox }}</p>
    <FormPartsTextArea v-model="textarea" />
    <p>{{ textarea }}</p>
    
    <Modal btText="確認">
      <h3>モーダルタイトル</h3>
      <p>{{refData.text}}</p>
      <p>{{refData.radio}}</p>
      <p>{{refData.select}}</p>
      <p>
        <ul><li v-for="item in refData.checkbox">{{item}}</li></ul></p>
      <p>{{refData.textarea}}</p>
      <FormPartsButton @click="signIn">
        送信
      </FormPartsButton>
    </Modal>
  </div>
</template>

<script setup lang="ts">
  const radioItems = [
    { label: '男性', value: '男性' },
    { label: '女性', value: '女性' },
    { label: 'その他', value: 'その他' },
  ];
  const selectItems = [
    '日本', '米国', '英国', 'ドイツ', 'フランス'
  ];
  const checkboxItems = [
    { label: '野球', value: '野球' },
    { label: 'サッカー', value: 'サッカー' },
    { label: '水泳', value: '水泳' },
  ];
  const text = ref<string>(null)
  const radio = ref<string>('')
  const select = ref<string>('')
  const checkbox = ref<string>(['サッカー', '水泳'])
  const textarea = ref<string>(null)

  type postData = {
    text: string,
    radio: string,
    select: string,
    checkbox: string[],
    textarea: string,
  }

  const refData = ref<postData>({
    text: text,
    radio: radio,
    select: select,
    checkbox: checkbox,
    textarea: textarea,
  })

  const signIn = () => {
    const postData: postData = {
      text: text.value,
      radio: radio.value,
      select: select.value,
      checkbox: [...checkbox.value],
      textarea: textarea.value,
    }
    console.log(postData)
    alert(`
    text: ${postData.text}
    radio: ${postData.radio}
    select: ${postData.select}
    checkbox: ${postData.checkbox}
    textarea: ${textarea.value}
    `)
  }

</script>