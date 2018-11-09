import p4 from 'p4';
import Map from '../src/map';

export default function() {
    let area = new Map({
        data: {
            json: [
            ],
            vmap: {
                x: 'time',
                y: 'value',
                color: 'black'
            }
        },
        view: {
            container: 'body',
            width: 500,
            height: 500,
            padding: {left: 100, right: 10, top: 10, bottom: 60},
            axes: true
        }
    })
    area.render();
}