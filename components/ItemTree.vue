<template>
  <div>
    <div ref="chartDiv" />
  </div>
</template>

<script setup>
import { GoogleCharts } from 'google-charts';

const chartDiv = ref(null);

onMounted(() => {
  // ---- Items Tree ---- //
  GoogleCharts.load(drawChart, { packages: ['orgchart'] });

  function drawChart() {
    // Standard google charts functionality is available as GoogleCharts.api after load
    const data = new GoogleCharts.api.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('string', 'Manager');
    data.addRows([
      ['Mike', ''],

      ['Jim', 'Mike'],
      ['Alice', 'Mike'],

      ['Bob', 'Jim'],
      ['Carol', 'Jim'],
      ['jojo', 'Jim'],
      ['jaja', 'Jim'],
      ['jajda', 'Alice']
    ]);

    const chart = new GoogleCharts.api.visualization.OrgChart(chartDiv.value);
    chart.draw(data, { allowHtml: true });
  }
});
</script>
