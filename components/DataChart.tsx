export enum ChartType {
  LINE = 'line',
  PIE = 'pie',
  DONUT = 'doughnut',
  POLAR = 'polarArea',
  SCATTER = 'scatter',
  BAR = 'bar',
  // ...
}

interface Props {
  type: ChartType,
  data: {
    labels: string[],
    datasets: any[],
  },
  options: any,
} 

const DataChart = (props: Props): JSX.Element => {
  return (
    <canvas></canvas>
  )
}

export default DataChart