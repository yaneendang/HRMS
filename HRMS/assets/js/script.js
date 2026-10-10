// =========================================
// HRMS - JAVASCRIPT
// MILESTONE 3
// =========================================


// =========================================
// SIDEBAR
// =========================================

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

if (menuToggle && sidebar) {

    menuToggle.addEventListener("click", function () {

        sidebar.classList.toggle("show");

    });

}


// Menutup sidebar ketika menu diklik pada mobile
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(function (item) {

    item.addEventListener("click", function () {

        if (window.innerWidth <= 768 && sidebar) {

            sidebar.classList.remove("show");

        }

    });

});


// =========================================
// DATA KARYAWAN
// =========================================



// Data awal jika belum ada data tersimpan
const defaultEmployees = [

    {
        nik: "2026001",
        nama: "Andi Saputra",
        email: "andi@hrms.com",
        department: "IT",
        position: "Staff IT",
        status: "Aktif"
    },

    {
        nik: "2026002",
        nama: "Dina Sari",
        email: "dina@hrms.com",
        department: "HR",
        position: "HR Staff",
        status: "Aktif"
    },

    {
        nik: "2026003",
        nama: "Rizky Pratama",
        email: "rizky@hrms.com",
        department: "Finance",
        position: "Finance Staff",
        status: "Aktif"
    },

    {
        nik: "2026004",
        nama: "Sinta Wulandari",
        email: "sinta@hrms.com",
        department: "Marketing",
        position: "Marketing Staff",
        status: "Tidak Aktif"
    },

    {
        nik: "2026005",
        nama: "Budi Santoso",
        email: "budi@hrms.com",
        department: "Operasional",
        position: "Supervisor",
        status: "Aktif"
    }

];


// Mengambil data dari localStorage
// Jika belum ada, gunakan data awal
let employees =
    JSON.parse(localStorage.getItem("hrmsEmployees"))
    || defaultEmployees;


// =========================================
// MENYIMPAN DATA KARYAWAN
// =========================================

function saveEmployees() {

    localStorage.setItem(
        "hrmsEmployees",
        JSON.stringify(employees)
    );

}


// =========================================
// ELEMENT HTML
// =========================================

const employeeTable =
    document.getElementById("employeeTable");

const employeeModal =
    document.getElementById("employeeModal");

const employeeForm =
    document.getElementById("employeeForm");

const btnTambah =
    document.getElementById("btnTambah");

const btnCloseModal =
    document.getElementById("btnCloseModal");

const btnCancel =
    document.getElementById("btnCancel");

const searchInput =
    document.getElementById("searchInput");

const filterDepartment =
    document.getElementById("filterDepartment");


// =========================================
// MENAMPILKAN DATA KARYAWAN
// =========================================

function renderEmployees(data = employees) {

    // Jika halaman bukan halaman Data Karyawan
    if (!employeeTable) {

        return;

    }


    employeeTable.innerHTML = "";


    // Jika data kosong
    if (data.length === 0) {

        employeeTable.innerHTML = `

            <tr>

                <td
                    colspan="8"
                    style="text-align: center; padding: 30px;">

                    Data karyawan tidak ditemukan.

                </td>

            </tr>

        `;

        return;

    }


    // Menampilkan setiap data
    data.forEach(function (employee) {

        const index =
            employees.indexOf(employee);


        // Membuat inisial nama
        const initials =
            employee.nama
                .split(" ")
                .map(function (word) {

                    return word[0];

                })
                .join("")
                .substring(0, 2)
                .toUpperCase();


        // Class status
        const statusClass =
            employee.status === "Aktif"
                ? "active"
                : "inactive";


        employeeTable.innerHTML += `

            <tr>

                <td>
                    ${index + 1}
                </td>


                <td>
                    ${employee.nik}
                </td>


                <td>

                    <div class="employee">

                        <div class="employee-avatar">

                            ${initials}

                        </div>

                        <span>

                            ${employee.nama}

                        </span>

                    </div>

                </td>


                <td>
                    ${employee.email}
                </td>


                <td>
                    ${employee.department}
                </td>


                <td>
                    ${employee.position}
                </td>


                <td>

                    <span
                        class="data-status ${statusClass}">

                        ${employee.status}

                    </span>

                </td>


                <td>

                    <div class="action-buttons">

                        <button
                            class="btn-action btn-edit"
                            onclick="editEmployee(${index})"
                            title="Edit">

                            ✏️

                        </button>


                        <button
                            class="btn-action btn-delete"
                            onclick="deleteEmployee(${index})"
                            title="Hapus">

                            🗑️

                        </button>

                    </div>

                </td>

            </tr>

        `;

    });

}


// =========================================
// TOMBOL TAMBAH KARYAWAN
// =========================================

if (btnTambah) {

    btnTambah.addEventListener("click", function () {

        employeeForm.reset();


        document.getElementById("editIndex").value = "";


        document.getElementById("modalTitle").textContent =
            "Tambah Karyawan";


        employeeModal.classList.add("show");

    });

}


// =========================================
// MENUTUP MODAL
// =========================================

function closeModal() {

    if (employeeModal) {

        employeeModal.classList.remove("show");

    }

}


if (btnCloseModal) {

    btnCloseModal.addEventListener(
        "click",
        closeModal
    );

}


if (btnCancel) {

    btnCancel.addEventListener(
        "click",
        closeModal
    );

}


// Menutup modal ketika klik di luar
if (employeeModal) {

    employeeModal.addEventListener(
        "click",
        function (event) {

            if (event.target === employeeModal) {

                closeModal();

            }

        }
    );

}


// =========================================
// SIMPAN / EDIT DATA
// =========================================

if (employeeForm) {

    employeeForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nik =
                document.getElementById("nik").value.trim();

            const nama =
                document.getElementById("nama").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const department =
                document.getElementById("department").value;

            const position =
                document.getElementById("position").value.trim();

            const status =
                document.getElementById("status").value;

            const editIndex =
                document.getElementById("editIndex").value;


            // =====================================
            // VALIDASI
            // =====================================

            if (
                nik === "" ||
                nama === "" ||
                email === "" ||
                department === "" ||
                position === ""
            ) {

                alert(
                    "Semua data yang bertanda * wajib diisi."
                );

                return;

            }


            // Validasi NIK
            if (!/^[0-9]+$/.test(nik)) {

                alert(
                    "NIK hanya boleh berisi angka."
                );

                return;

            }


            // Validasi Email
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                alert(
                    "Format email tidak valid."
                );

                return;

            }


            // Data baru
            const newEmployee = {

                nik: nik,

                nama: nama,

                email: email,

                department: department,

                position: position,

                status: status

            };


            // =====================================
            // EDIT
            // =====================================

            if (editIndex !== "") {

                employees[editIndex] =
                    newEmployee;


                alert(
                    "Data karyawan berhasil diperbarui."
                );

            }


            // =====================================
            // TAMBAH
            // =====================================

            else {

                employees.push(
                    newEmployee
                );


                alert(
                    "Data karyawan berhasil ditambahkan."
                );

            }


         // Simpan data ke localStorage
saveEmployees();

// Refresh tabel
renderEmployees();

// Tutup modal
closeModal();

// Reset form
employeeForm.reset();

        }
    );

}


// =========================================
// EDIT KARYAWAN
// =========================================

function editEmployee(index) {

    const employee =
        employees[index];


    document.getElementById("nik").value =
        employee.nik;

    document.getElementById("nama").value =
        employee.nama;

    document.getElementById("email").value =
        employee.email;

    document.getElementById("department").value =
        employee.department;

    document.getElementById("position").value =
        employee.position;

    document.getElementById("status").value =
        employee.status;


    document.getElementById("editIndex").value =
        index;


    document.getElementById("modalTitle").textContent =
        "Edit Karyawan";


    employeeModal.classList.add("show");

}


// =========================================
// HAPUS KARYAWAN
// =========================================

function deleteEmployee(index) {

    const employee =
        employees[index];


    const confirmation =
        confirm(
            `Apakah Anda yakin ingin menghapus data ${employee.nama}?`
        );


    if (!confirmation) {

        return;

    }


   employees.splice(index, 1);

// Simpan perubahan
saveEmployees();

// Tampilkan ulang tabel
renderEmployees();

alert(
    "Data karyawan berhasil dihapus."
);

}


// =========================================
// SEARCH & FILTER
// =========================================

function filterEmployees() {

    const keyword =
        searchInput.value
            .toLowerCase()
            .trim();


    const department =
        filterDepartment.value;


    const filtered =
        employees.filter(function (employee) {


            const matchKeyword =

                employee.nama
                    .toLowerCase()
                    .includes(keyword)

                ||

                employee.nik
                    .toLowerCase()
                    .includes(keyword);


            const matchDepartment =

                department === "all"

                ||

                employee.department === department;


            return (
                matchKeyword &&
                matchDepartment
            );

        });


    renderEmployees(filtered);

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterEmployees
    );

}


if (filterDepartment) {

    filterDepartment.addEventListener(
        "change",
        filterEmployees
    );

}


// =========================================
// LOAD DATA SAAT HALAMAN DIBUKA
// =========================================

renderEmployees();
// =========================================
// FORM KARYAWAN - VALIDASI
// =========================================

const employeePageForm =
    document.getElementById("employeePageForm");


if (employeePageForm) {

    employeePageForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // Ambil data
            const nik =
                document.getElementById("formNik");

            const nama =
                document.getElementById("formNama");

            const email =
                document.getElementById("formEmail");

            const phone =
                document.getElementById("formPhone");

            const department =
                document.getElementById("formDepartment");

            const position =
                document.getElementById("formPosition");

            const status =
                document.getElementById("formStatus");


            // Bersihkan error
            clearFormErrors();


            let isValid = true;


            // =====================================
            // VALIDASI NIK
            // =====================================

            if (nik.value.trim() === "") {

                showError(
                    nik,
                    "nikError",
                    "NIK wajib diisi."
                );

                isValid = false;

            } else if (!/^[0-9]+$/.test(nik.value.trim())) {

                showError(
                    nik,
                    "nikError",
                    "NIK hanya boleh berisi angka."
                );

                isValid = false;

            }


            // =====================================
            // VALIDASI NAMA
            // =====================================

            if (nama.value.trim() === "") {

                showError(
                    nama,
                    "namaError",
                    "Nama lengkap wajib diisi."
                );

                isValid = false;

            }


            // =====================================
            // VALIDASI EMAIL
            // =====================================

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (email.value.trim() === "") {

                showError(
                    email,
                    "emailError",
                    "Email wajib diisi."
                );

                isValid = false;

            } else if (!emailPattern.test(email.value.trim())) {

                showError(
                    email,
                    "emailError",
                    "Format email tidak valid."
                );

                isValid = false;

            }


            // =====================================
            // VALIDASI NO HP
            // =====================================

            if (phone.value.trim() === "") {

                showError(
                    phone,
                    "phoneError",
                    "Nomor HP wajib diisi."
                );

                isValid = false;

            } else if (!/^[0-9]+$/.test(phone.value.trim())) {

                showError(
                    phone,
                    "phoneError",
                    "Nomor HP hanya boleh berisi angka."
                );

                isValid = false;

            } else if (phone.value.trim().length < 10) {

                showError(
                    phone,
                    "phoneError",
                    "Nomor HP minimal 10 digit."
                );

                isValid = false;

            }


            // =====================================
            // VALIDASI DEPARTEMEN
            // =====================================

            if (department.value === "") {

                showError(
                    department,
                    "departmentError",
                    "Departemen wajib dipilih."
                );

                isValid = false;

            }


            // =====================================
            // VALIDASI JABATAN
            // =====================================

            if (position.value.trim() === "") {

                showError(
                    position,
                    "positionError",
                    "Jabatan wajib diisi."
                );

                isValid = false;

            }


            // =====================================
            // VALIDASI STATUS
            // =====================================

            if (status.value === "") {

                showError(
                    status,
                    "statusError",
                    "Status wajib dipilih."
                );

                isValid = false;

            }


            // =====================================
            // JIKA VALID
            // =====================================

            if (isValid) {

                alert(
                    "Data karyawan berhasil disimpan!"
                );


                employeePageForm.reset();


                window.location.href =
                    "data-master.html";

            }

        }
    );

}


// =========================================
// MENAMPILKAN ERROR
// =========================================

function showError(
    input,
    errorId,
    message
) {

    input.classList.add("input-error");


    const errorElement =
        document.getElementById(errorId);


    if (errorElement) {

        errorElement.textContent =
            message;

    }

}


// =========================================
// MEMBERSIHKAN ERROR
// =========================================

function clearFormErrors() {

    const inputs =
        document.querySelectorAll(
            "#employeePageForm input, #employeePageForm select"
        );


    inputs.forEach(function (input) {

        input.classList.remove(
            "input-error"
        );

    });


    const errors =
        document.querySelectorAll(
            "#employeePageForm .form-error"
        );


    errors.forEach(function (error) {

        error.textContent = "";

    });

}
// =========================================
// TOMBOL TAMBAH DATA DARI DASHBOARD
// =========================================

const btnTambahDashboard =
    document.getElementById("btnTambahDashboard");

if (btnTambahDashboard) {

    btnTambahDashboard.addEventListener("click", function () {

        window.location.href = "pages/data-master.html";

    });

}

/* =========================================
   HRMS - DROPDOWN NOTIFIKASI & PROFIL
   Berlaku untuk Dashboard dan halaman lainnya
========================================= */

(function () {
    function initHeaderDropdowns() {
        const notificationBtn =
            document.getElementById("notificationBtn");

        const notificationMenu =
            document.getElementById("notificationMenu");

        const profileBtn =
            document.getElementById("profileBtn");

        const profileMenu =
            document.getElementById("profileMenu");

        // Jika halaman tidak memiliki header ini, hentikan
        function closeMenus() {
            if (notificationMenu) {
                notificationMenu.classList.remove("show");
            }

            if (profileMenu) {
                profileMenu.classList.remove("show");
            }

            if (notificationBtn) {
                notificationBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

            if (profileBtn) {
                profileBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        }

        function toggleMenu(button, menu) {
            if (!button || !menu) return;

            const shouldOpen =
                !menu.classList.contains("show");

            closeMenus();

            if (shouldOpen) {
                menu.classList.add("show");
                button.setAttribute("aria-expanded", "true");
            }
        }

        if (notificationBtn && notificationMenu) {
            notificationBtn.addEventListener("click", function (event) {
                event.stopPropagation();
                toggleMenu(notificationBtn, notificationMenu);
            });
        }

        if (profileBtn && profileMenu) {
            profileBtn.addEventListener("click", function (event) {
                event.stopPropagation();
                toggleMenu(profileBtn, profileMenu);
            });
        }

        document.addEventListener("click", function (event) {
            const insideDropdown =
                event.target.closest(".hrms-dropdown");

            if (!insideDropdown) {
                closeMenus();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeMenus();
            }
        });

        // Tombol profil di Dashboard
        const profileDetailBtn =
            document.getElementById("profileDetailBtn");

        const settingsBtn =
            document.getElementById("settingsBtn");

        const logoutBtn =
            document.getElementById("logoutBtn");

        if (profileDetailBtn) {
            profileDetailBtn.addEventListener("click", function () {
                alert("Halaman Profil Saya belum dibuat.");
            });
        }

        if (settingsBtn) {
            settingsBtn.addEventListener("click", function () {
                alert("Halaman Pengaturan Akun belum dibuat.");
            });
        }

        if (logoutBtn) {
            logoutBtn.addEventListener("click", function () {
                const confirmed = confirm(
                    "Apakah kamu yakin ingin logout?"
                );

                if (confirmed) {
                    const path = window.location.pathname;
                    const inPages = path.replace(/\\/g, "/")
                        .includes("/pages/");

                    window.location.href =
                        inPages ? "../index.html" : "index.html";
                }
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initHeaderDropdowns
        );
    } else {
        initHeaderDropdowns();
    }
})();