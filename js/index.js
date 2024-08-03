$(document).ready(function () {
  $("#development").on(
    "click",
    "#dropdownMenuIconHorizontalButton_dev",
    function () {
      $("#dropdownDotsHorizontal_dev").toggleClass("hidden");
    }
  );
  $("#check").on(
    "click",
    "#dropdownMenuIconHorizontalButton_check",
    function () {
      $("#dropdownDotsHorizontal_check").toggleClass("hidden");
    }
  );
  $("#column4").on(
    "click",
    "#dropdownMenuIconHorizontalButton_column",
    function () {
      $("#dropdownDotsHorizontal_column").toggleClass("hidden");
    }
  );
  $("#complex").on(
    "click",
    "#dropdownMenuIconHorizontalButton_complex",
    function () {
      $("#dropdownDotsHorizontal_complex").toggleClass("hidden");
    }
  );

  $("#user-menu-button").on("click", function () {
    $("#user-dropdown").toggleClass("hidden");
  });

  const sidebar = $("#cta-button-sidebar");
  const toggleButton = $('[data-drawer-toggle="cta-button-sidebar"]');

  toggleButton.click(function () {
    sidebar.toggleClass("-translate-x-full");
  });

  $(document).click(function (event) {
    // Close Sidebar
    if (
      !$(event.target).closest(sidebar).length &&
      !$(event.target).closest(toggleButton).length
    ) {
      if (!sidebar.hasClass("-translate-x-full")) {
        sidebar.addClass("-translate-x-full");
      }
    }

    // Close Dropdown
    if (!$(event.target).closest("#user-menu-button, #user-dropdown").length) {
      $("#user-dropdown").addClass("hidden");
    }

    if (
      !$(event.target).closest(
        "#dropdownMenuIconHorizontalButton, #dropdownDotsHorizontal"
      ).length
    ) {
      $("#dropdownDotsHorizontal").addClass("hidden");
    }
  });

  const dataTablesItem = $('#menu li a:contains("Data Tables")');
  dataTablesItem.addClass("relative text-[#1b254b]");
  dataTablesItem.append(
    '<span class="absolute top-0 right-0 h-full border-r-4 border-solid border-[#422AFB]"></span>'
  );
  dataTablesItem.find("svg").attr("stroke", "#422AFB").attr("fill", "#422AFB");

  $("#menu li a").click(function (e) {
    e.preventDefault();
    // Remove active class from all items
    $("#menu li a").each(function () {
      $(this)
        .find("svg")
        .attr("stroke", "currentColor")
        .attr("fill", "currentColor");
      $(this).find("span.border-r-4").remove();
      $(this).removeClass("relative text-[#1b254b]");
    });
    // Add active class to the clicked item
    $(this).find("svg").attr("stroke", "#422AFB").attr("fill", "#422AFB");
    $(this).addClass("relative text-[#1b254b]");
    $(this).append(
      '<span class="absolute top-0 right-0 h-full rounded-lg border-r-4 border-solid border-[#422AFB]"></span>'
    );
  });

  // Table
  $("#development").html(DropdownPanel("Development Table", "dev"));
  $("#check").html(DropdownPanel("Check Table", "check"));
  $("#column4").html(DropdownPanel("4-Column Table", "column"));
  $("#complex").html(DropdownPanel("Complex Table", "complex"));

  $("#table-container-1").html(
    CreateTable(HeaderDev, DevData, {
      percent: true,
      progress: true,
    })
  );

  $("#check-table").html(
    CreateTable(HeaderCheck, CheckData, { checkbox: true, percent: true })
  );
  $("#table-4-column").html(
    CreateTable(Header4Column, Column4TableData, { percent: true })
  );
  $("#complex-table").html(
    CreateTable(HeaderComplex, ComplexData, { progress: true })
  );

  $("#table-container-1 table").DataTable({
    paging: false,
    searching: false,
    info: false,
  });

  $("#check-table table").DataTable({
    paging: false,
    searching: false,
    info: false,
  });

  $("#table-4-column table").DataTable({
    paging: false,
    searching: false,
    info: false,
  });

  $("#complex-table table").DataTable({
    paging: false,
    searching: false,
    info: false,
  });
});

// DATA DEVELOPMENT TABLE
const HeaderDev = ["NAME", "TECH", "DATE", "PROGRESS"];
const HeaderCheck = ["NAME", "PROGRESS", "QUANTITY", "DATE"];
const Header4Column = ["NAME", "PROGRESS", "QUANTITY", "DATE"];
const HeaderComplex = ["NAME", "STATUS", "DATE", "PROGRESS"];

const data = [
  {
    name: "Project Alpha",
    technology: "Python",
    date: "2024-07-25",
    progress: 70,
    quantity: 1234,
    status: "approved",
  },
  {
    name: "Project Beta",
    technology: "Java",
    date: "2024-07-30",
    progress: 40,
    quantity: 5678,
    status: "disable",
  },
  {
    name: "Project Gamma",
    technology: "JavaScript",
    date: "2024-08-01",
    progress: 20,
    quantity: 910,
    status: "error",
  },
  {
    name: "Project Delta",
    technology: "C++",
    date: "2024-07-22",
    progress: 90,
    quantity: 2345,
    status: "approved",
  },
  {
    name: "Project Epsilon",
    technology: "Go",
    date: "2024-07-28",
    progress: 55,
    quantity: 6789,
    status: "disable",
  },
  {
    name: "Project Zeta",
    technology: "Rust",
    date: "2024-07-29",
    progress: 30,
    quantity: 3456,
    status: "error",
  },
  {
    name: "Project Eta",
    technology: "Kotlin",
    date: "2024-08-02",
    progress: 10,
    quantity: 7890,
    status: "approved",
  },
  {
    name: "Project Theta",
    technology: "Swift",
    date: "2024-07-27",
    progress: 80,
    quantity: 4567,
    status: "disable",
  },
  {
    name: "Project Iota",
    technology: "PHP",
    date: "2024-07-26",
    progress: 60,
    quantity: 8901,
    status: "error",
  },
  {
    name: "Project Kappa",
    technology: "Ruby",
    date: "2024-07-24",
    progress: 100,
    quantity: 234,
    status: "approved",
  },
  {
    name: "Project Lambda",
    technology: ".NET",
    date: "2024-07-31",
    progress: 25,
    quantity: 678,
    status: "disable",
  },
];

const DevData = data.map((value) => [
  value.name,
  value.technology,
  formatDate(value.date),
  value.progress,
]);

const CheckData = data.map((value) => [
  value.name,
  value.progress,
  value.quantity,
  formatDate(value.date),
]);

const Column4TableData = data
  .slice(0, 4)
  .map((value) => [
    value.name,
    value.progress,
    value.quantity,
    formatDate(value.date),
  ]);

const ComplexData = data
  .slice(0, 4)
  .map((value) => [
    value.name,
    value.status,
    formatDate(value.date),
    value.progress,
  ]);

function formatDate(dateStr) {
  let date = new Date(dateStr);

  let monthNames = [
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
  ];

  let day = date.getDate().toString().padStart(2, "0");
  let month = monthNames[date.getMonth()];
  let year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

function CreateTable(headers, data, options = {}) {
  const { checkbox = false, progress = false, percent = false } = options;
  const header = headers
    .map((header) => `<th class="px-6 py-3">${header}</th>`)
    .join("");

  const body = data
    .map(
      (row) => `
    <tr>
      ${
        checkbox
          ? `<td class="px-6 py-4">
             <input type="checkbox" class="w-4 h-4 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" value="${row[0]}">
             ${row[0]}
           </td>`
          : `<td class="px-6 py-4">${row[0]}</td>`
      }
      ${row
        .slice(1)
        .map((cell, index) => {
          const headerName = headers[index + 1];
          if (headerName === "PROGRESS") {
            if (progress && percent) {
              return `
              <td class="px-6 py-4 flex justify-center gap-2 items-center">
                <span>${cell}%</span>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${cell}%"></div>
                </div>
              </td>
            `;
            } else if (progress) {
              return `
              <td class="px-6 py-4">
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${cell}%"></div>
                </div>
              </td>
            `;
            } else if (percent) {
              return `<td class="px-6 py-4">${cell}%</td>`;
            }
          }

          if (headerName === "STATUS") {
            switch (cell) {
              case "approved":
                return `<td class="px-6 py-4 flex gap-2 items-center"><svg stroke="#01B574" fill="#01B574" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg> ${cell}</td>`;
              case "disable":
                return `<td class="px-6 py-4 flex gap-2 items-center"><svg stroke="#EE5D50" fill="#EE5D50" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg> ${cell}</td>`;
              case "error":
                return `<td class="px-6 py-4 flex gap-2 items-center"><svg stroke="#FFB547" fill="#FFB547" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg> ${cell}</td>`;
              default:
                return `<td class="px-6 py-4">${cell}</td>`;
            }
          }
          return `<td class="px-6 py-4">${cell}</td>`;
        })
        .join("")}
    </tr>`
    )
    .join("");

  return `
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-400 uppercase border-b border-gray-400">
        <tr>${header}</tr>
      </thead>
      <tbody class="text-[#1B2559] bg-white font-bold">
        ${body}
      </tbody>
    </table>
  `;
}

function DropdownPanel(title, id) {
  const titleTable = `<h1 class="font-bold text-2xl">${title}</h1>`;
  const button = `<button
                   id="dropdownMenuIconHorizontalButton_${id}"
                   data-dropdown-toggle="dropdownDotsHorizontal_${id}"
                   class="inline-flex items-center w-9 h-9 appearance-none p-2 text-sm font-medium text-center text-[#1b254b] bg-[#F4F7FE] rounded-xl hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
                   type="button"
                 >
                   <svg
                     class="w-5 h-5"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 16 3"
                   >
                     <path
                       d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
                     />
                   </svg>
                 </button>`;
  const dropdownMenu = `<div
                   id="dropdownDotsHorizontal_${id}"
                   class="opacity-100 visible z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 absolute top-100 right-0 mt-8"
                 >
                   <ul
                     class="py-2 text-sm text-gray-500 w-full"
                   >
                     <li class="flex items-center ml-2">
                       <svg
                         stroke="currentColor"
                         fill="currentColor"
                         stroke-width="0"
                         viewBox="0 0 24 24"
                         focusable="false"
                         class="chakra-icon css-1i1t8en"
                         height="1em"
                         width="1em"
                         xmlns="http://www.w3.org/2000/svg"
                       >
                         <path fill="none" d="M0 0h24v24H0V0z"></path>
                         <path
                           d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                         ></path>
                       </svg>
                       <p class="block py-1 px-1">Panel 1</p>
                     </li>
                     <li class="flex items-center ml-2">
                       <svg
                         stroke="currentColor"
                         fill="currentColor"
                         stroke-width="0"
                         viewBox="0 0 24 24"
                         focusable="false"
                         class="chakra-icon css-1i1t8en"
                         height="1em"
                         width="1em"
                         xmlns="http://www.w3.org/2000/svg"
                       >
                         <path fill="none" d="M0 0h24v24H0V0z"></path>
                         <path
                           d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"
                         ></path>
                       </svg>
                       <p class="block py-1 px-1">Panel 2</p>
                     </li>
                     <li class="flex items-center ml-2">
                       <svg
                         stroke="currentColor"
                         fill="currentColor"
                         stroke-width="0"
                         viewBox="0 0 24 24"
                         focusable="false"
                         class="chakra-icon css-1i1t8en"
                         height="1em"
                         width="1em"
                         xmlns="http://www.w3.org/2000/svg"
                       >
                         <path fill="none" d="M0 0h24v24H0z"></path>
                         <path
                           d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"
                         ></path>
                       </svg>
                       <p class="block py-1 px-1">Panel 3</p>
                     </li>
                     <li class="flex items-center ml-2">
                       <svg
                         stroke="currentColor"
                         fill="currentColor"
                         stroke-width="0"
                         viewBox="0 0 24 24"
                         focusable="false"
                         class="chakra-icon css-1i1t8en"
                         height="1em"
                         width="1em"
                         xmlns="http://www.w3.org/2000/svg"
                       >
                         <path fill="none" d="M0 0h24v24H0V0z"></path>
                         <path
                           d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 00-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0014 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 00-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 00.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                         ></path>
                       </svg>
                       <p class="block py-1 px-1">Panel 4</p>
                     </li>
                   </ul>
                 </div>`;

  return `${titleTable}${button}${dropdownMenu}`;
}
