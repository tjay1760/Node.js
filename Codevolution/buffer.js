const buffer = new Buffer.from("Tjay", "utf-8")

buffer.write("mosst")
console.log(buffer)
console.log(buffer.toJSON())

console.log(buffer.toString())