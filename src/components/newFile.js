/* __placeholder__ */
export default (await import('vue')).defineComponent({
name: 'DepthMonitoring',
data() {
return {
property: {
a: 1,
b: 1,
c: 1
},
};
},
watch: {
"property": {
deep: true,
handler() {
console.log("修改了");
}
}
},
mounted: {
const: aaa = 1 > 0 && 2 < 4 ? "1" : "b"
}
});
