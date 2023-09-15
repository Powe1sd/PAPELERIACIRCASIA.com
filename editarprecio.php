<?php
// Datos de conexión a la base de datos
$host = "localhost"; // Cambia esto si tu base de datos está en un servidor diferente
$usuario = "root"; // Reemplaza con tu nombre de usuario de MySQL
$contraseña = ""; // Reemplaza con tu contraseña de MySQL
$base_de_datos = "precios"; // Reemplaza con el nombre de tu base de datos

// Conexión a la base de datos
$conexion = new mysqli($host, $usuario, $contraseña, $base_de_datos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}else {
    echo "Conexión exitosa a la base de datos."; // Mensaje de éxito
}

// Configurar el conjunto de caracteres a UTF-8 (opcional)
$conexion->set_charset("utf8");

// Verificar si la solicitud es una solicitud POST
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["id"]) && isset($_POST["precios"])) {
    // Obtén los datos de la solicitud
    $id = $_POST["id"];
    $nuevoPrecio = $_POST["precio"];

    // Realiza la inserción en la base de datos
    $consulta = "INSERT INTO anchetas (id, precios) VALUES (?, ?)";
    $stmt = $conexion->prepare($consulta);
    $stmt->bind_param("id", $id, $nuevoPrecio);

    if ($stmt->execute()) {
        // La inserción fue exitosa
        echo json_encode(array("success" => true));
    } else {
        // Hubo un error en la inserción
        echo json_encode(array("success" => false));
    }

    // Cierra la conexión a la base de datos
    $stmt->close();
    $conexion->close();
} else {
    // La solicitud no es válida
    echo json_encode(array("success" => false));
}
?>
