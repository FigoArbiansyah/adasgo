// UTILS
const utils = {
  days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
};

// DUMMY DATA
const lineChartData = {
  labels: utils.days,
  datasets: [
    {
      label: "Profit",
      data: [1, 5, 0, 1, 0, 4, 5],
      borderWidth: 1,
    },
    {
      label: "Loss",
      data: [5, 0, 3, 1, 3, 5, 4],
      borderWidth: 1,
    },
  ],
};

const barChartData = {
  labels: utils.days,
  datasets: [
    {
      label: "#",
      data: [1, 5, 3, 1, 3, 4, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],

      borderWidth: 1,
    },
  ],
};

const donutChartData = {
  labels: ["Male", "Female"],
  datasets: [
    {
      label: "Visitor Count",
      data: [300, 50],
      backgroundColor: ["#3661EB", "#59C3C8"],
      hoverOffset: 4,
    },
  ],
};

const pieChartData = {
  labels: ["Students", "Employee"],
  datasets: [
    {
      label: "Visitor Count",
      data: [200, 300],
      backgroundColor: ["#3661EB", "#59C3C8"],
      hoverOffset: 4,
    },
  ],
};
// END OF DUMMY DATA

// Mendapatkan element select
let drawdownSelectedIndex = -1;
const selectOptionDrawdown = document.getElementById("select-option-drawdown");

// Fungsi yang akan dipanggil setelah perubahan terjadi
function handleDrawdownChange() {
  console.log(
    "selectOptionDrawdown.selectedIndex : ",
    selectOptionDrawdown.selectedIndex
  );
  console.log("drawdownSelectedIndex : ", drawdownSelectedIndex);
}

selectOptionDrawdown.addEventListener("change", () => {
  drawdownSelectedIndex = selectOptionDrawdown.selectedIndex;
  // Panggil fungsi callback di sini setelah diperbarui
  handleDrawdownChange();
});

// Panggil fungsi callback untuk mencetak nilai awal
handleDrawdownChange();
// let drawdownSelectedIndex = -1;
// const selectOptionDrawdown = document.getElementById("select-option-drawdown");
// selectOptionDrawdown.addEventListener("change", () => {
//   drawdownSelectedIndex = selectOptionDrawdown.selectedIndex;
//   // Test output
//   console.log(
//     "selectOptionDrawdown.selectedIndex : ",
//     selectOptionDrawdown.selectedIndex
//   );
//   console.log("drawdownSelectedIndex : ", drawdownSelectedIndex);
// });
// console.log("drawdownSelectedIndex : ", drawdownSelectedIndex);

// Fungsi untuk membuat chart
const generateChart = (ctx, data, type) => {
  new Chart(ctx, {
    type,
    data,
    // options: {
    //   scales: {
    //     y: {
    //       beginAtZero: true,
    //     },
    //   },
    // },
  });
};

// Mendapatkan elemen canvas
const lineChartCanvas = document.getElementById("line-chart");
const barChartCanvas1 = document.getElementById("bar-chart-1");
const donutChartCanvas1 = document.getElementById("donut-chart-1");
const pieChartCanvas1 = document.getElementById("pie-chart-1");

// Generate chart
generateChart(lineChartCanvas, lineChartData, "line");
generateChart(barChartCanvas1, barChartData, "bar");
generateChart(donutChartCanvas1, donutChartData, "doughnut");
generateChart(pieChartCanvas1, pieChartData, "pie");
