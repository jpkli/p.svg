import p4 from 'p4';
import geoMap from '../src/map';

export default function() {
    let data = {
        json: [
        ],
        vmap: {
            x: 'time',
            y: 'value',
            color: 'black'
        }
    };

    let view = {
        container: 'body',
        width: 1080,
        height: 720,
        padding: {left: 100, right: 10, top: 10, bottom: 60},
        axes: true
    }

    let area = new geoMap(data, view)
    area.render();
}