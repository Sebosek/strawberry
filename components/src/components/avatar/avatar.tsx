import { Component, Prop, Event, EventEmitter, Watch } from "@stencil/core";

export type state = 'default' | 'running'

@Component({
    tag: 'strawberry-avatar',
    styleUrl: 'avatar.css',
    shadow: true
})
export class Avatar {
    @Prop({ 
        reflectToAttr: true, 
        mutable: true 
    }) state: state = 'default'
    @Prop({ 
        reflectToAttr: true
    }) initials: string = ''

    @Event() elapsed: EventEmitter<string>

    private _map = {
        'default': 'avatar',
        'running': 'avatar avatar--blocked avatar--blocked--running'
    }

    private _timer;

    @Watch('state')
    watchState(newValue: state, oldValue: state) {
        if (!this._map[newValue]) {
            throw Error(`Invalid value '${newValue}' of [state] attribute in <strawberry-avatar> element`)
        }

        if (oldValue === 'default' && newValue === 'running') {
            this.run()

            return
        }

        if (newValue === 'default') {
            this.clean()
        }
    }

    componentWillLoad() {
        if (this.state === 'running') {
            this.run()
        }
    }
    
    render() {
        return <div class={this._map[this.state]} data-initials={this.initials}></div>
    }

    timeoutCallback() {
        this.state = 'default'
        this.elapsed.emit(this.initials)
        this.clean()
    }

    private run() {
        if (!!window) {
            this._timer = window.setTimeout(this.timeoutCallback.bind(this), 100000)
        }
    }

    private clean() {
        if (!!window) {
            window.clearTimeout(this._timer)
        }
    }
}