import { Component, Template } from '@scoutgg/widgets'
import template from './home.pug'
import config from '../../../config'
import '../../components/lock/lock'
import '../../components/solved/solved'
@Component('kode')
@Template(template)
export default class Home extends HTMLElement {
  connectedCallback() {
    this.userInput = ''
    this.code = config.code
    this.player = new Audio('public/millionaire.mp3')
  }
  solve() {
    this.solved = true
    this.render()
  }
  play() {
    this.player.loop = true
    this.player.play()
    this.started = true
    this.render()
  }
}