<template>
  <div class="form__group field">
    <input
      type="input"
      class="form__field"
      :placeholder="label"
      :name="label"
      :id="label"
      required
    />
    <label for="name" class="form__label">{{ label }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
});
</script>
<style scoped lang="scss">
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
}

.form__field {
  width: 100%;
  border: 0;
  border-bottom: 1px solid black !important;
  outline: 0;
  color: $main-blue;
  font-family: Heebo;
  font-size: 15px;
  font-weight: 300 !important;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  border-radius: 1px;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-family: Outfit;
  font-size: 15px !important;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 20px;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image-slice: 1;
}
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}
</style>
