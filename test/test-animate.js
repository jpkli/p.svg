import AnimatedScatterPlot from '../src/animate';
import { csv } from 'd3-request';

export default function(view) {
  csv('../assets/ross_filtered.csv', function(rows) {

    let data = {
      json: rows,
      vmap: {
        x: 'pe',
        y: 'total_rollbacks',
        time: 'real_TS',
        size: 5,
        color: 'steelblue'
      }
    };

    let animatedScatterPlot = new AnimatedScatterPlot(data, view);
  })

}