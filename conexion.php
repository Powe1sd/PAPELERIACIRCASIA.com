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

// Ahora tienes una conexión abierta a tu base de datos y puedes usarla para realizar consultas.

// Ejemplo de consulta
$resultado = $conexion->query("SELECT id, precio FROM anchetas");

// Manejar el resultado de la consulta, por ejemplo:
if ($resultado->num_rows > 0) {
    while ($fila = $resultado->fetch_assoc()) {
        // Accede a los datos de cada fila, por ejemplo:
        $id = $fila["id"];
        $precio = $fila["precio"];
        echo "ID: $id, Precio: $precio<br>";
    }
} else {
    echo "No se encontraron registros en la tabla 'anchetas'.";
}

// Cerrar la conexión cuando hayas terminado
$conexion->close();
?>
