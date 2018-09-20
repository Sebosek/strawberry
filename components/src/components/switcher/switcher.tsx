import { Component, Prop, Event, EventEmitter, Watch } from "@stencil/core";

@Component({
    tag: 'strawberry-switcher',
    styleUrl: 'switcher.css',
    shadow: true,
    host: {
        tabindex: 0
    }
})
export class Switcher {
    @Prop({ reflectToAttr: true, mutable: true }) switched: boolean = false

    @Event() changed: EventEmitter<boolean>

    el: HTMLElement

    @Watch('switched')
    watchSwitched() {
        this.el.classList.toggle('switcher--switched', this.switched)
        this.el.classList.toggle('switcher--play-switched', this.switched)
        this.el.classList.toggle('switcher--play-unswitched', !this.switched)
        this.changed.emit(this.switched)
    }

    handleClick() {
        this.toggle()
    }

    componentDidLoad() { 
        this.el.classList.toggle('switcher--switched', this.switched)
    }

    render() {
        return <div class="switcher" ref={(el: HTMLElement) => this.el = el} onClick={this.handleClick.bind(this)}></div>
    }

    private toggle() {
        this.switched = !this.switched
    }
}