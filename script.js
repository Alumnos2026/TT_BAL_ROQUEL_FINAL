let dataTable;
let dataTableIsInitilized = false;


const dataTableOptions = {
    scrollX: "1000px",
    columnDefs: [
        { className: "centered", targets: [0, 1, 2, 3, 4, 5, 6] },
        { orderable: false, targets: [5, 6] },
        //{ width: "50%", targets: [0] }
    ],
    pageLength: 5,
    destroy: true,
    language: {
        lengthMenu: "Mostrar MENU registros por página",
        zeroRecords: "Ningúna empresa encontrado",
        info: "Mostrando de START a END de un total de TOTAL registros",
        infoEmpty: "Ningúna empresa encontrado",
        infoFiltered: "(filtrados desde MAX registros totales)",
        search: "Buscar:",
        loadingRecords: "Cargando...",
        paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior"
        }
    }
};







const initDataTable = async() =>{

    if(dataTableIsInitilized) {
        dataTable.destroy(); 

    }
await listarCompany();


dataTable =$("#datatable_company").DataTable(dataTableOptions);
dataTableIsInitilized =true;

};





const listarCompany = async () => {
    try {
        const respuesta = await fetch(
            "https://fakerapi.it/api/v1/companies?_quantity=100"
        );
        const respuestaJSON = await respuesta.json();
        
        // Estructurar los datos en JSON limpio
        const datosFormateados = respuestaJSON.data.map((company, index) => ({
            id: index + 1,
            nombre: company.name,
            email: company.email,
            ciudad: company.country,
            compañia: company.name,
            status: "Activo"
        }));
        
        console.log("Datos en JSON:", datosFormateados);
        
        let content = ""; //acumulara el html de cada fila
        
        datosFormateados.forEach((item) => {
            content += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.nombre}</td>
                    <td>${item.email}</td>
                    <td>${item.ciudad}</td>
                    <td>${item.compañia}</td>
                    <td><i class="bi bi-check-lg" style="color: green;"></i></td>
                    <td><i class="bi bi-pencil-square" style="color: blue;"></i><i class="bi bi-trash-fill" style="color: red;"></i></td>
                </tr>`;
        });
        
        tableBody_company.innerHTML = content;
        
    } catch (error) {
        alert("Error al cargar los datos");
        console.error(error);
    }
};

window.addEventListener("load",initDataTable);

const string1 = " Con registros de ";
const string2 = " Empresas ";
const numero1 = 100;
const bolena = true;
const name = null;


alert(string1+numero1 + string2);




let contador = 1;

        function aginput() {

            let div = document.createElement("div");
            div.className = "grupo";

            if (contador % 2 === 1) {
                div.style.backgroundColor = "#9b99b5"; 
            } else {
                div.style.backgroundColor = "#c2b8b6"; 
            }


            let label = document.createElement("label");
            label.innerHTML = "Hijo numero: " + contador;

    
            div.appendChild(label);

            document.getElementById("contenedor").appendChild(div);

            contador++;
        }

        function reset() {
            document.getElementById("contenedor").innerHTML = "";
            contador = 1;
        }

