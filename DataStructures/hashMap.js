class HashTable {
    constructor(size = 17) {
        this.keyMap = new Array(size)
    }
    _hash(key) {
        let total = 0,
            weirdPrime = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i],
                value = char.charCodeAt(0) - 96
            total = (total * weirdPrime + value) % this.keyMap.length
        }
        return total
    }
    set(key, value) {
        let index = this._hash(key)
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }
    get(key) {
        let index = this._hash(key)
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }
    keys() {
        let keys = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keys.includes(this.keyMap[i][j][0])) {
                        keys.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keys
    }
    values() {
        let values = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!values.includes(this.keyMap[i][j][1])) {
                        values.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return values
    }
}






var hashMap = new HashTable()

hashMap.set("maroon", "#800000")
hashMap.set("yellow", "#FFFF00")
hashMap.set("olive", "#808000")
hashMap.set("salmon", "#FA8072")
hashMap.set("lightcoral", "#F08080")
hashMap.set("mediumvioletred", "#C71585")
hashMap.set("plum", "#DDA0DD")
hashMap.set("purple", "#DDA0DD")
// hashMap.set("violet", "#DDA0DD")

hashMap.keys().forEach(key => console.log(hashMap.get(key)))