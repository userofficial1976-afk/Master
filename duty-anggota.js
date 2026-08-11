```javascript
// ============================================================
// DUTY-ANGGOTA.JS
// LAPORAN ANGGARAN KERJA LEBIH MASA
// PAGE PENGISIAN DUTY ANGGOTA
// ============================================================


// ============================================================
// 1. SUPABASE
// ============================================================

// Gantikan dengan credential Supabase project baru

const SUPABASE_URL = "MASUKKAN_SUPABASE_URL";
const SUPABASE_ANON_KEY = "MASUKKAN_SUPABASE_ANON_KEY";


const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);


// ============================================================
// 2. GLOBAL DATA
// ============================================================

let dataAnggota = [];
let dataKodDuty = [];
let dataTempatKerja = [];

let anggotaDipilih = null;
let kodDutyDipilih = null;
let tempatKerjaDipilih = null;


// ============================================================
// 3. SENARAI BULAN
// ============================================================

const SENARAI_BULAN = [
    "",
    "Januari",
    "Februari",
    "Mac",
    "April",
    "Mei",
    "Jun",
    "Julai",
    "Ogos",
    "September",
    "Oktober",
    "November",
    "Disember"
];


// ============================================================
// 4. NAMA HARI
// ============================================================

const SENARAI_HARI = [
    "Ahad",
    "Isnin",
    "Selasa",
    "Rabu",
    "Khamis",
    "Jumaat",
    "Sabtu"
];


// ============================================================
// 5. DOM READY
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    mulaPage
);


// ============================================================
// 6. MULA PAGE
// ============================================================

async function mulaPage(){

    console.log(
        "DUTY ANGGOTA SYSTEM START"
    );


    pasangEventTarikh();

    pasangEventUnit();

    pasangEventPos();

    pasangEventAnggota();

    pasangEventKodDuty();

    pasangEventTempatKerja();

    pasangEventTampungan();

    pasangEventHariKhas();

    pasangEventKLM();

    pasangEventButton();


    await muatAnggota();

    await muatUnit();


    console.log(
        "DUTY ANGGOTA SYSTEM READY"
    );

}


// ============================================================
// 7. TARIKH
// ============================================================

function pasangEventTarikh(){

    const tarikh =
        document.getElementById("tarikh");


    if(!tarikh){
        return;
    }


    tarikh.addEventListener(
        "change",
        paparMaklumatTarikh
    );

}


// ============================================================
// 8. PAPAR TARIKH
// ============================================================

function paparMaklumatTarikh(){

    const nilai =
        document.getElementById("tarikh").value;


    const hari =
        document.getElementById("hari");

    const bulan =
        document.getElementById("bulanNama");

    const tahun =
        document.getElementById("tahun");


    if(!nilai){

        hari.textContent = "-";
        bulan.textContent = "-";
        tahun.textContent = "-";

        return;

    }


    const date =
        new Date(
            nilai + "T00:00:00"
        );


    hari.textContent =
        SENARAI_HARI[
            date.getDay()
        ];


    bulan.textContent =
        SENARAI_BULAN[
            date.getMonth() + 1
        ];


    tahun.textContent =
        date.getFullYear();

}


// ============================================================
// 9. LOAD DATA ANGGOTA
// ============================================================

async function muatAnggota(){

    try{

        const {
            data,
            error
        } = await supabaseClient

            .from("Data_Anggota")

            .select(`
                no_skb,
                wilayah,
                kawasan,
                pangkat,
                no_anggota,
                nama,
                pos,
                unit,
                jawatan,
                ketua_pos,
                ketua_unit,
                status,
                gaji_pokok,
                gaji_elaun,
                rm_pehariklmbiasa,
                rm_perharioffday,
                rm_perjamoffday,
                rm_perharicutiam,
                rm_perjamcutiam
            `)

            .order(
                "nama",
                {
                    ascending:true
                }
            );


        if(error){

            console.error(
                "ERROR DATA ANGGOTA:",
                error
            );

            alert(
                "Gagal mengambil data anggota."
            );

            return;

        }


        dataAnggota =
            data || [];


        console.log(
            "DATA ANGGOTA:",
            dataAnggota
        );


    }catch(error){

        console.error(error);

    }

}


// ============================================================
// 10. LOAD UNIT
// ============================================================

async function muatUnit(){

    const selectUnit =
        document.getElementById("unit");


    if(!selectUnit){
        return;
    }


    selectUnit.innerHTML =
        `<option value="">
            -- Pilih Unit --
        </option>`;


    const senaraiUnit = [
        ...new Set(

            dataAnggota

                .map(
                    item => item.unit
                )

                .filter(
                    Boolean
                )

        )
    ];


    senaraiUnit.sort(
        (a,b) =>
            a.localeCompare(
                b,
                "ms"
            )
    );


    senaraiUnit.forEach(
        unit => {

            const option =
                document.createElement(
                    "option"
                );

            option.value = unit;

            option.textContent = unit;

            selectUnit.appendChild(
                option
            );

        }
    );

}


// ============================================================
// 11. EVENT UNIT
// ============================================================

function pasangEventUnit(){

    const unit =
        document.getElementById("unit");


    if(!unit){
        return;
    }


    unit.addEventListener(
        "change",
        async function(){

            const nilai =
                this.value;


            resetPos();

            resetAnggota();

            resetMaklumatAnggota();

            resetKodDuty();

            resetTempatKerja();


            if(!nilai){
                return;
            }


            await muatKodDuty(
                nilai
            );


            await muatTempatKerja(
                nilai
            );


            isiSenaraiPos(
                nilai
            );

        }
    );

}


// ============================================================
// 12. ISI SENARAI POS
// ============================================================

function isiSenaraiPos(
    unit
){

    const selectPos =
        document.getElementById(
            "posAsal"
        );


    const senaraiPos = [
        ...new Set(

            dataAnggota

                .filter(
                    item =>
                        item.unit === unit
                )

                .map(
                    item =>
                        item.pos
                )

                .filter(
                    Boolean
                )

        )
    ];


    senaraiPos.sort(
        (a,b) =>
            a.localeCompare(
                b,
                "ms"
            )
    );


    selectPos.innerHTML =
        `<option value="">
            -- Pilih Pos --
        </option>`;


    senaraiPos.forEach(
        pos => {

            const option =
                document.createElement(
                    "option"
                );

            option.value = pos;

            option.textContent = pos;

            selectPos.appendChild(
                option
            );

        }
    );


    selectPos.disabled =
        senaraiPos.length === 0;

}


// ============================================================
// 13. EVENT POS
// ============================================================

function pasangEventPos(){

    const pos =
        document.getElementById(
            "posAsal"
        );


    if(!pos){
        return;
    }


    pos.addEventListener(
        "change",
        function(){

            resetAnggota();

            resetMaklumatAnggota();


            if(!this.value){
                return;
            }


            const unit =
                document.getElementById(
                    "unit"
                ).value;


            isiSenaraiAnggota(
                unit,
                this.value
            );

        }
    );

}


// ============================================================
// 14. ISI SENARAI ANGGOTA
// ============================================================

function isiSenaraiAnggota(
    unit,
    pos
){

    const selectAnggota =
        document.getElementById(
            "anggota"
        );


    const senarai =
        dataAnggota

            .filter(
                item =>
                    item.unit === unit &&
                    item.pos === pos
            )

            .sort(
                (a,b) =>
                    (a.nama || "")
                        .localeCompare(
                            b.nama || "",
                            "ms"
                        )
            );


    selectAnggota.innerHTML =
        `<option value="">
            -- Pilih Anggota --
        </option>`;


    senarai.forEach(
        anggota => {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                String(
                    anggota.no_skb
                );


            option.textContent =
                anggota.nama ||
                "-";


            selectAnggota.appendChild(
                option
            );

        }
    );


    selectAnggota.disabled =
        senarai.length === 0;

}


// ============================================================
// 15. EVENT ANGGOTA
// ============================================================

function pasangEventAnggota(){

    const anggota =
        document.getElementById(
            "anggota"
        );


    if(!anggota){
        return;
    }


    anggota.addEventListener(
        "change",
        function(){

            const noSkb =
                this.value;


            if(!noSkb){

                resetMaklumatAnggota();

                return;

            }


            anggotaDipilih =
                dataAnggota.find(
                    item =>
                        String(
                            item.no_skb
                        ) === String(
                            noSkb
                        )
                );


            if(!anggotaDipilih){
                return;
            }


            paparMaklumatAnggota(
                anggotaDipilih
            );


            aktifkanSection3();

        }
    );

}


// ============================================================
// 16. PAPAR MAKLUMAT ANGGOTA
// ============================================================

function paparMaklumatAnggota(
    anggota
){

    setText(
        "noSkb",
        anggota.no_skb
    );


    setText(
        "noAnggota",
        anggota.no_anggota
    );


    setText(
        "kawasan",
        anggota.kawasan
    );


    setText(
        "wilayah",
        anggota.wilayah
    );


    setText(
        "unitInfo",
        anggota.unit
    );


    setText(
        "ketuaUnit",
        anggota.ketua_unit
    );


    setText(
        "ketuaPos",
        anggota.ketua_pos
    );


    setText(
        "posInfo",
        anggota.pos
    );


    document.getElementById(
        "namaPengguna"
    ).textContent =
        anggota.ketua_pos ||
        "-";

}


// ============================================================
// 17. LOAD KOD DUTY
// ============================================================

async function muatKodDuty(
    unit
){

    const select =
        document.getElementById(
            "kodDuty"
        );


    select.innerHTML =
        `<option value="">
            -- Pilih Kod Duty --
        </option>`;


    select.disabled = true;


    const {
        data,
        error
    } = await supabaseClient

        .from("kod_duty")

        .select(`
            kod,
            waktu_tugasan,
            jam_kerja,
            jam_klm,
            status,
            unit
        `)

        .eq(
            "unit",
            unit
        )

        .order(
            "kod",
            {
                ascending:true
            }
        );


    if(error){

        console.error(
            "ERROR KOD DUTY:",
            error
        );

        return;

    }


    dataKodDuty =
        data || [];


    dataKodDuty
        .filter(
            item =>
                !item.status ||
                item.status.toLowerCase()
                    === "aktif"
        )
        .forEach(
            item => {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    item.kod;


                option.textContent =
                    item.kod +
                    " - " +
                    (
                        item.waktu_tugasan ||
                        ""
                    );


                select.appendChild(
                    option
                );

            }
        );


    select.disabled =
        dataKodDuty.length === 0;

}


// ============================================================
// 18. AKTIFKAN SECTION 3
// ============================================================

function aktifkanSection3(){

    document.getElementById(
        "kodDuty"
    ).disabled = false;


    document.getElementById(
        "kodTempatKerja"
    ).disabled = false;

}


// ============================================================
// 19. EVENT KOD DUTY
// ============================================================

function pasangEventKodDuty(){

    const select =
        document.getElementById(
            "kodDuty"
        );


    select.addEventListener(
        "change",
        function(){

            const kod =
                this.value;


            kodDutyDipilih =
                dataKodDuty.find(
                    item =>
                        item.kod === kod
                );


            if(!kodDutyDipilih){

                resetMaklumatDuty();

                return;

            }


            setText(
                "waktuTugasan",
                kodDutyDipilih.waktu_tugasan
            );


            setText(
                "jamKerja",
                formatNumber(
                    kodDutyDipilih.jam_kerja
                )
            );


            setText(
                "jamKlmHariBiasa",
                formatNumber(
                    kodDutyDipilih.jam_klm
                )
            );


            // Formula sebenar RM akan
            // dimasukkan kemudian.
            setRM(
                "rmKlmHariBiasa",
                0
            );

        }
    );

}


// ============================================================
// 20. LOAD TEMPAT KERJA
// ============================================================

async function muatTempatKerja(
    unit
){

    const select =
        document.getElementById(
            "kodTempatKerja"
        );


    select.innerHTML =
        `<option value="">
            -- Pilih Kod Tempat Kerja --
        </option>`;


    select.disabled = true;


    const {
        data,
        error
    } = await supabaseClient

        .from("kod_tempat_kerja")

        .select(`
            id,
            kod_tempat_kerja,
            nama_tempat_kerja,
            status,
            unit
        `)

        .eq(
            "unit",
            unit
        )

        .order(
            "kod_tempat_kerja",
            {
                ascending:true
            }
        );


    if(error){

        console.error(
            "ERROR TEMPAT KERJA:",
            error
        );

        return;

    }


    dataTempatKerja =
        data || [];


    dataTempatKerja
        .filter(
            item =>
                item.status === "Aktif"
        )
        .forEach(
            item => {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    item.kod_tempat_kerja;


                option.textContent =
                    item.kod_tempat_kerja +
                    " - " +
                    item.nama_tempat_kerja;


                select.appendChild(
                    option
                );

            }
        );


    select.disabled =
        dataTempatKerja.length === 0;


    isiPosTampungan(
        dataTempatKerja
    );

}


// ============================================================
// 21. EVENT TEMPAT KERJA
// ============================================================

function pasangEventTempatKerja(){

    const select =
        document.getElementById(
            "kodTempatKerja"
        );


    select.addEventListener(
        "change",
        function(){

            const kod =
                this.value;


            tempatKerjaDipilih =
                dataTempatKerja.find(
                    item =>
                        item.kod_tempat_kerja === kod
                );


            setText(
                "namaTempatKerja",
                tempatKerjaDipilih
                    ?.nama_tempat_kerja ||
                "-"
            );

        }
    );

}


// ============================================================
// 22. POS TAMPUNGAN
// ============================================================

function isiPosTampungan(
    data
){

    const select =
        document.getElementById(
            "posTampungan"
        );


    select.innerHTML =
        `<option value="">
            -- Tiada / Pilih Pos --
        </option>`;


    data
        .filter(
            item =>
                item.status === "Aktif"
        )
        .forEach(
            item => {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    item.kod_tempat_kerja;


                option.textContent =
                    item.kod_tempat_kerja +
                    " - " +
                    item.nama_tempat_kerja;


                select.appendChild(
                    option
                );

            }
        );

}


// ============================================================
// 23. EVENT TAMPUNGAN
// ============================================================

function pasangEventTampungan(){

    const input =
        document.getElementById(
            "jamTampungan"
        );


    input.addEventListener(
        "input",
        function(){

            // Formula RM Tampungan
            // akan dimasukkan kemudian.

            setRM(
                "rmTampungan",
                0
            );

        }
    );

}


// ============================================================
// 24. HARI KHAS
// ============================================================

function pasangEventHariKhas(){

    const offday =
        document.querySelectorAll(
            'input[name="offday"]'
        );


    offday.forEach(
        radio => {

            radio.addEventListener(
                "change",
                function(){

                    const aktif =
                        this.value === "1";


                    const input =
                        document.getElementById(
                            "jamOffday"
                        );


                    input.disabled =
                        !aktif;


                    if(!aktif){

                        input.value = 0;

                        setRM(
                            "rmHariOffday",
                            0
                        );

                        setRM(
                            "rmKlmOffday",
                            0
                        );

                    }

                }
            );

        }
    );


    const cutiam =
        document.querySelectorAll(
            'input[name="cutiam"]'
        );


    cutiam.forEach(
        radio => {

            radio.addEventListener(
                "change",
                function(){

                    const aktif =
                        this.value === "1";


                    const input =
                        document.getElementById(
                            "jamCutiam"
                        );


                    input.disabled =
                        !aktif;


                    if(!aktif){

                        input.value = 0;

                        setRM(
                            "rmHariCutiam",
                            0
                        );

                        setRM(
                            "rmKlmCutiam",
                            0
                        );

                    }

                }
            );

        }
    );


    document.getElementById(
        "jamOffday"
    ).addEventListener(
        "input",
        kiraRMOffday
    );


    document.getElementById(
        "jamCutiam"
    ).addEventListener(
        "input",
        kiraRMCutiam
    );

}


// ============================================================
// 25. RM OFFDAY
// ============================================================

function kiraRMOffday(){

    if(!anggotaDipilih){
        return;
    }


    const jam =
        Number(
            document.getElementById(
                "jamOffday"
            ).value
        ) || 0;


    // Formula sebenar belum diberikan.

    setRM(
        "rmHariOffday",
        0
    );


    setRM(
        "rmKlmOffday",
        0
    );

}


// ============================================================
// 26. RM CUTI AM
// ============================================================

function kiraRMCutiam(){

    if(!anggotaDipilih){
        return;
    }


    const jam =
        Number(
            document.getElementById(
                "jamCutiam"
            ).value
        ) || 0;


    // Formula sebenar belum diberikan.

    setRM(
        "rmHariCutiam",
        0
    );


    setRM(
        "rmKlmCutiam",
        0
    );

}


// ============================================================
// 27. SECTION 5 - KLM
// ============================================================

function pasangEventKLM(){

    const senarai = [

        ["klmWajib", "jamKlmWajib"],
        ["klmMc", "jamKlmMc"],
        ["klmCutiTahun", "jamKlmCutiTahun"],
        ["klmCutiEhsan", "jamKlmCutiEhsan"],
        ["klmEskot", "jamKlmEskot"],
        ["klmCit", "jamKlmCit"],
        ["klmKursus", "jamKlmKursus"],
        ["klmCutiGanti", "jamKlmCutiGanti"],
        ["klmLain", "jamKlmLain"]

    ];


    senarai.forEach(
        ([checkboxId, inputId]) => {

            const checkbox =
                document.getElementById(
                    checkboxId
                );


            const input =
                document.getElementById(
                    inputId
                );


            if(!checkbox || !input){
                return;
            }


            checkbox.addEventListener(
                "change",
                function(){

                    input.disabled =
                        !this.checked;


                    if(!this.checked){

                        input.value = 0;

                    }

                }
            );

        }
    );

}


// ============================================================
// 28. BUTTON
// ============================================================

function pasangEventButton(){

    const btnReset =
        document.getElementById(
            "btnReset"
        );


    const btnSimpan =
        document.getElementById(
            "btnSimpan"
        );


    btnReset.addEventListener(
        "click",
        resetForm
    );


    btnSimpan.addEventListener(
        "click",
        simpanDuty
    );

}


// ============================================================
// 29. SIMPAN DUTY
// ============================================================

async function simpanDuty(){

    if(!anggotaDipilih){

        alert(
            "Sila pilih anggota terlebih dahulu."
        );

        return;

    }


    const tarikh =
        document.getElementById(
            "tarikh"
        ).value;


    const unit =
        document.getElementById(
            "unit"
        ).value;


    const pos =
        document.getElementById(
            "posAsal"
        ).value;


    const kodDuty =
        document.getElementById(
            "kodDuty"
        ).value;


    const kodTempatKerja =
        document.getElementById(
            "kodTempatKerja"
        ).value;


    if(!tarikh){

        alert(
            "Sila pilih tarikh bertugas."
        );

        return;

    }


    if(!unit){

        alert(
            "Sila pilih unit."
        );

        return;

    }


    if(!pos){

        alert(
            "Sila pilih pos asal."
        );

        return;

    }


    if(!kodDuty){

        alert(
            "Sila pilih kod duty."
        );

        return;

    }


    if(!kodTempatKerja){

        alert(
            "Sila pilih kod tempat kerja."
        );

        return;

    }


    const date =
        new Date(
            tarikh + "T00:00:00"
        );


    const bulan =
        SENARAI_BULAN[
            date.getMonth() + 1
        ];


    const tahun =
        String(
            date.getFullYear()
        );


    const hari =
        SENARAI_HARI[
            date.getDay()
        ];


    const offday =
        document.querySelector(
            'input[name="offday"]:checked'
        )?.value === "1";


    const cutiam =
        document.querySelector(
            'input[name="cutiam"]:checked'
        )?.value === "1";


    const jamOffday =
        Number(
            document.getElementById(
                "jamOffday"
            ).value
        ) || 0;


    const jamCutiam =
        Number(
            document.getElementById(
                "jamCutiam"
            ).value
        ) || 0;


    const jamTampungan =
        Number(
            document.getElementById(
                "jamTampungan"
            ).value
        ) || 0;


    const posTampungan =
        document.getElementById(
            "posTampungan"
        ).value ||
        null;


    const now =
        new Date().toISOString();


    const record = {

        tarikh: tarikh,

        bulan: bulan,

        tahun: tahun,

        hari: hari,

        no_skb:
            anggotaDipilih.no_skb,

        kod_duty:
            kodDuty,

        waktu_tugasan:
            kodDutyDipilih
                ?.waktu_tugasan ||
            null,

        jam_kerja:
            String(
                kodDutyDipilih
                    ?.jam_kerja ??
                ""
            ),

        jam_klm:
            String(
                kodDutyDipilih
                    ?.jam_klm ??
                ""
            ),

        pos: pos,

        dikemaskini_oleh:
            anggotaDipilih.ketua_pos ||
            null,

        dikemaskini_pada:
            now,

        ketua_pos:
            anggotaDipilih.ketua_pos ||
            null,

        kod_tempat_kerja:
            kodTempatKerja,

        tempat_kerja:
            tempatKerjaDipilih
                ?.nama_tempat_kerja ||
            null,

        nama_anggota:
            anggotaDipilih.nama ||
            null,

        no_anggota:
            anggotaDipilih.no_anggota ||
            null,

        kawasan:
            anggotaDipilih.kawasan ||
            null,

        unit:
            anggotaDipilih.unit ||
            null,

        ketua_unit:
            anggotaDipilih.ketua_unit ||
            null,

        nama_ketua_pos:
            anggotaDipilih.ketua_pos ||
            null,

        nama_pos_asal:
            anggotaDipilih.pos ||
            null,

        kod_waktu_kerja:
            kodDuty,

        hari_offday_bertugas:
            offday
                ? "Ya"
                : "Tidak",

        jam_offday_bertugas:
            jamOffday,

        hari_cutiam_bertugas:
            cutiam
                ? "Ya"
                : "Tidak",

        jam_cutiam_bertugas:
            jamCutiam,

        pos_tampungan:
            posTampungan,

        jam_tampungan:
            jamTampungan,

        rm_jam_offday:
            0,

        jumlah_offday:
            offday
                ? 1
                : 0,

        rm_hari_offday:
            0,

        jumlah_cutiam:
            cutiam
                ? 1
                : 0,

        rm_jam_cutiam:
            0,

        rm_hari_cutiam:
            0,

        rm_klm_hari_biasa:
            0,

        rm_klm_tampungan:
            0,

        rm_klm_seluruh:
            0

    };


    console.log(
        "REKOD DUTY:",
        record
    );


    const {
        data,
        error
    } = await supabaseClient

        .from("jadual_duty")

        .insert(
            record
        )

        .select();


    if(error){

        console.error(
            "ERROR SIMPAN DUTY:",
            error
        );


        alert(
            "Gagal simpan duty:\n" +
            error.message
        );


        return;

    }


    console.log(
        "DUTY BERJAYA DISIMPAN:",
        data
    );


    alert(
        "Duty anggota berjaya disimpan."
    );


    resetForm();

}


// ============================================================
// 30. RESET FORM
// ============================================================

function resetForm(){

    const formElements =
        document.querySelectorAll(
            "input, select"
        );


    formElements.forEach(
        element => {

            if(
                element.type === "radio"
            ){

                element.checked =
                    element.value === "0";

                return;

            }


            if(
                element.type === "checkbox"
            ){

                element.checked = false;

                return;

            }


            if(
                element.id === "jamTampungan" ||
                element.id === "jamOffday" ||
                element.id === "jamCutiam" ||
                element.id.startsWith("jamKlm")
            ){

                element.value = 0;

                return;

            }


            if(
                element.tagName === "SELECT"
            ){

                element.selectedIndex = 0;

            }

        }
    );


    document.getElementById(
        "posAsal"
    ).disabled = true;


    document.getElementById(
        "anggota"
    ).disabled = true;


    document.getElementById(
        "kodDuty"
    ).disabled = true;


    document.getElementById(
        "kodTempatKerja"
    ).disabled = true;


    document.getElementById(
        "jamOffday"
    ).disabled = true;


    document.getElementById(
        "jamCutiam"
    ).disabled = true;


    [
        "jamKlmWajib",
        "jamKlmMc",
        "jamKlmCutiTahun",
        "jamKlmCutiEhsan",
        "jamKlmEskot",
        "jamKlmCit",
        "jamKlmKursus",
        "jamKlmCutiGanti",
        "jamKlmLain"
    ].forEach(
        id => {

            document.getElementById(
                id
            ).disabled = true;

        }
    );


    resetMaklumatAnggota();

    resetMaklumatDuty();

    resetTempatKerja();


    anggotaDipilih = null;

    kodDutyDipilih = null;

    tempatKerjaDipilih = null;


    paparMaklumatTarikh();


    resetSemuaRM();

}


// ============================================================
// 31. RESET POS
// ============================================================

function resetPos(){

    const select =
        document.getElementById(
            "posAsal"
        );


    select.innerHTML =
        `<option value="">
            -- Pilih Pos --
        </option>`;


    select.disabled = true;

}


// ============================================================
// 32. RESET ANGGOTA
// ============================================================

function resetAnggota(){

    const select =
        document.getElementById(
            "anggota"
        );


    select.innerHTML =
        `<option value="">
            -- Pilih Anggota --
        </option>`;


    select.disabled = true;

}


// ============================================================
// 33. RESET MAKLUMAT ANGGOTA
// ============================================================

function resetMaklumatAnggota(){

    [
        "noSkb",
        "noAnggota",
        "kawasan",
        "wilayah",
        "unitInfo",
        "ketuaUnit",
        "ketuaPos",
        "posInfo"
    ].forEach(
        id =>
            setText(
                id,
                "-"
            )
    );

}


// ============================================================
// 34. RESET KOD DUTY
// ============================================================

function resetKodDuty(){

    const select =
        document.getElementById(
            "kodDuty"
        );


    select.innerHTML =
        `<option value="">
            -- Pilih Kod Duty --
        </option>`;


    select.disabled = true;

}


// ============================================================
// 35. RESET MAKLUMAT DUTY
// ============================================================

function resetMaklumatDuty(){

    setText(
        "waktuTugasan",
        "-"
    );


    setText(
        "jamKerja",
        "0.00"
    );


    setText(
        "jamKlmHariBiasa",
        "0.00"
    );


    setRM(
        "rmKlmHariBiasa",
        0
    );

}


// ============================================================
// 36. RESET TEMPAT KERJA
// ============================================================

function resetTempatKerja(){

    const select =
        document.getElementById(
            "kodTempatKerja"
        );


    select.innerHTML =
        `<option value="">
            -- Pilih Kod Tempat Kerja --
        </option>`;


    select.disabled = true;


    setText(
        "namaTempatKerja",
        "-"
    );


    const posTampungan =
        document.getElementById(
            "posTampungan"
        );


    posTampungan.innerHTML =
        `<option value="">
            -- Tiada / Pilih Pos --
        </option>`;

}


// ============================================================
// 37. RESET SEMUA RM
// ============================================================

function resetSemuaRM(){

    const rmIds = [

        "rmKlmHariBiasa",
        "rmTampungan",
        "rmHariOffday",
        "rmKlmOffday",
        "rmHariCutiam",
        "rmKlmCutiam",

        "rmKlmWajib",
        "rmKlmMc",
        "rmKlmCutiTahun",
        "rmKlmCutiEhsan",
        "rmKlmEskot",
        "rmKlmCit",
        "rmKlmKursus",
        "rmKlmCutiGanti",
        "rmKlmLain",

        "summaryHariBiasa",
        "summaryTampungan",
        "summaryHariOffday",
        "summaryKlmOffday",
        "summaryHariCutiam",
        "summaryKlmCutiam",
        "summaryWajib",
        "summaryMc",
        "summaryCutiTahun",
        "summaryCutiEhsan",
        "summaryEskot",
        "summaryCit",
        "summaryKursus",
        "summaryCutiGanti",
        "summaryLain",
        "jumlahKeseluruhan"

    ];


    rmIds.forEach(
        id =>
            setRM(
                id,
                0
            )
    );

}


// ============================================================
// 38. SET TEXT
// ============================================================

function setText(
    id,
    value
){

    const element =
        document.getElementById(
            id
        );


    if(!element){
        return;
    }


    element.textContent =
        value ??
        "-";

}


// ============================================================
// 39. SET RM
// ============================================================

function setRM(
    id,
    value
){

    const element =
        document.getElementById(
            id
        );


    if(!element){
        return;
    }


    element.textContent =
        "RM " +
        formatNumber(
            value
        );

}


// ============================================================
// 40. FORMAT NUMBER
// ============================================================

function formatNumber(
    value
){

    const number =
        Number(
            value
        );


    if(
        Number.isNaN(
            number
        )
    ){

        return "0.00";

    }


    return number.toLocaleString(
        "en-MY",
        {
            minimumFractionDigits:2,
            maximumFractionDigits:2
        }
    );

}


// ============================================================
// 41. RESET MAKLUMAT PENGGUNA
// ============================================================

setText(
    "namaPengguna",
    "-"
);
```
