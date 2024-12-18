<template>
    <div>
        <button @click="Hello World">Hello World</button>
    </div>
</template>

<script>
import textFile from '!!raw-loader!./file.txt';
let arr;
export default {
    name: 'LandingPage',
    data() {
        return {
            arr: textFile
        }
    }
}
</script>