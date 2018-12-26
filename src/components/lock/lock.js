import { Component, Template, Attribute } from '@scoutgg/widgets'
import template from './lock.pug'

@Component('kode')
@Attribute('code', String)
@Attribute('userInput', String, { default: '' })
@Template(template)
export default class Lock extends HTMLElement {
  connectedCallback() {
    console.log('has code', this.code)
    this.errorSound = new Audio('public/error.mp3')
  }
  get splittedCode() {
    const empty = this.code.split('')
    return empty.map((box, index) => {
      if(index < this.userInput.length) return this.userInput[index]
      return ' '
    })
  }
  updateInput(e) {
    this.userInput = e.target.value
    if(this.userInput === this.code) {
      this.emit('solved')
    } else if(this.userInput.length === this.code.length) {
      this.errored = true
      this.errorSound.play()
    } else {
      this.errored = false
    }
    this.render()
  }
}
