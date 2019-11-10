<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Julio Rock",
          "Maiara Maraisa",
          "Israel Severino",
        ],
        datasets: [
          {
            label: "Solucao",
            backgroundColor: "#f87979",
            data: [1, 2, 5]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
