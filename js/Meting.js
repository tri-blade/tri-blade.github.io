class MetingJSElement extends HTMLElement {
    connectedCallback() {
        window.APlayer && window.fetch && (this._init(), this._parse())
    }

    disconnectedCallback() {
        this.lock || this.aplayer.destroy()
    }

    _init() {
        // 直接设置歌单信息
        this.meta = {
            server: 'netease',
            type: 'playlist',
            id: '2702970693',
            api: 'https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r'
        };
    }

    _parse() {
        let api = this.meta.api
            .replace(':server', this.meta.server)
            .replace(':type', this.meta.type)
            .replace(':id', this.meta.id)
            .replace(':r', Math.random());

        fetch(api)
            .then(response => response.json())
            .then(data => this._loadPlayer(data));
    }

    _loadPlayer(audio) {
        let options = {
            audio: audio,
            mutex: true,
            lrcType: 3,
            storageName: "metingjs"
        };

        if (audio.length) {
            let element = document.createElement('div');
            this.appendChild(element);
            options.container = element;
            this.aplayer = new APlayer(options);
        }
    }
}

// 注册自定义元素
if (window.customElements && !window.customElements.get('meting-js')) {
    window.customElements.define('meting-js', MetingJSElement);
}