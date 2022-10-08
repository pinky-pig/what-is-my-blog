import { showConfetti } from './confetti'
export class Sortition {
  // (加速)__________ min_jumps _(生成)_(减速)__________
  jumps = 0
  min_jumps = 30 // 超过这个数字开始抽奖
  current_index = -1
  speed = 30 // 移动速度
  timer: any = 0
  result = -1
  total_items = 0
  constructor(total_items: number) {
    this.total_items = total_items
  }

  start() {
    this.jumps = 0
    this.speed = 100
    this.result = -1
    this.controllSpeed()
    // 显示结果--可修改优化
    const domArr1 = document.getElementsByClassName('item8')
    domArr1[0].innerHTML = ''
  }

  controllSpeed() {
    this.jumps += 1
    this.runCircle()
    // 抽中
    if (this.jumps > this.min_jumps + 10 && this.result === this.current_index) {
      clearTimeout(this.timer)
      // 显示烟花
      showConfetti()

      // 显示结果--可修改优化
      const domArr1 = document.getElementsByClassName('item8')
      domArr1[0].innerHTML = `${this.current_index}`

      this.result = -1
      this.jumps = 0
    }
    else {
      // 未抽中
      if (this.jumps < this.min_jumps) { // 加速
        this.speed -= 5
      }
      else if (this.jumps === this.min_jumps) { // 确定位置
        const random_number = this.generatePickedNumber()
        this.result = random_number
      }
      else { // 減速
        this.speed += 20
      }
      this.timer = setTimeout(this.controllSpeed.bind(this), this.speed)
    }
  }

  generatePickedNumber() {
    return Math.floor(Math.random() * this.total_items)
  }

  runCircle() {
    // 显示结果--可修改优化
    const name = `item${this.current_index}`
    const domArr = document.getElementsByClassName(name) as any
    if (domArr[0])
      domArr[0].style.outline = ''

    this.current_index += 1
    // 如果当前下标大于总项就置零从头开始
    if (this.current_index > this.total_items - 1)
      this.current_index = 0

    // 显示结果--可修改优化
    const name1 = `item${this.current_index}`
    const domArr1 = document.getElementsByClassName(name1) as any
    if (domArr1[0])
      domArr1[0].style.outline = '5px solid #5F6CAF'
  }
}
