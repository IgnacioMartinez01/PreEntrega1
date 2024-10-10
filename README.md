DOCUMENTACIÓN INICIAL PRE-ENTREGA 1:


Proyecto:
Para iniciar con este informe, debemos mencionar que se trata de un proyecto el cual consiste sobre la creación de una red social similar a la ya conocida, Instagram.
Para la cual se aplicarán conocimientos ya adquiridos como el uso de React para la creación, comportamiento y renderización de la web creada.
Se implementarán Hooks tales como UseState() para modificación de estados, así como el Hook de UseEffect() para dar comportamiento a nuestra aplicación.
En esta primera entrega hemos usado React para la creación de una página web, la cual está creada mediante, uso de componentes, localizados en una carpeta específica Components, la cual como indica, aloja los componentes para luego usarlos en App() donde posteriormente se renderizaron.
Le aplicamos estilos mediante un archivo Css, el cual posteriormente es importado al App para que estos estilos sean aplicados en nuestros componentes.
Cabe destacar que se implementa el uso de él Hook “UseState()” con el cual damos comportamiento tanto al campo Usuario, como el campo Password.



Para loguearse en nuestra página a través de renders condicionales indicamos el comportamiento sobre cómo debe comportarse nuestra página. Se implementó de la siguiente manera:

return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de registro */}
       

        {/* Ruta de login */}
        <Route exact path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Ruta de perfil con protección de autenticación */}
        <Route
          exact
          path="/perfil"
          element={isLoggedIn ? <Perfil /> : <Navigate to="/login" replace />}
        />

        {/* Ruta del feed con protección de autenticación */}
        <Route
          exact
          path="/feed"
          element={isLoggedIn ? <Feed /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  );




En la siguiente línea: 

<Route
exact path=”/perfil”>
element={isLoggedIn ? <Perfil/> : <Navigate to=”/login” replace/>}/>


Básicamente lo que se plantea es que, si el usuario está logueado lo lleve al Feed y si no lo está lo lleve a al Login nuevamente, por no estar logueado.

Luego en cuanto a la Feed en principio, no se ha colocado nada, pero debería tener presente fotos, perfiles etc de usuarios registrados
Lo mismo ocurre con la sección del Perfil, la cual está falta de datos, pero en ella debería aparecer la información del usuario registrado, es decir de nosotros.




Manual de usuario

Presentamos una aplicación similar a Instagram, con funcionalidades dinámicas y fáciles de entender cómo navegar a través de un feed con posteos, fotos y videos, al mismo tiempo que interactuar sobre los mismos e interactuar con otros usuarios de la app.

Lo primero que se va a encontrar como usuario va a ser una sección de Registro. Para utilizar la app los usuarios deberán tener una cuenta creada y posteriormente loguearse a ella. Para el registro se le pedirá ingresar 3 campos; nombre de usuario, email y una contraseña. Una vez ingresados dichos datos deberá dar click al botón “Registrarse”. Dicha acción le creará una cuenta para poder utilizar nuestra app.

Posteriormente, el usuario será dirigido a una pestaña de Login. La acción de “loguearse” se refiere a ingresar los datos previamente creados de su cuenta. Se pedirá ingresar su usuario/email y su contraseña. Una vez logueado, podrá acceder a las funcionalidades de la app, como ver su perfil, otros perfiles o navegar por el feed, entre otros. La pestaña de Login también cuenta con un botón que dice: “No tiene cuenta? Regístrese aquí”. Dicho botón redireccionará al usuario a la página de registro para completar el proceso.

Antes de proceder a las funciones de “feed” y perfil, cabe aclarar que cualquier persona que no esté efectivamente “logueada” e intente acceder a dichas secciones será redirigido directamente a la sección de Login. La información de Login se mantendrá hasta que se deje de correr la aplicación, por lo que si usted se Loguea y navega entre secciones de la app no tendrá que volver a repetir el proceso de Login hasta volver a abrir la app.

Una vez efectivamente logueado, usted podrá acceder a todas las funciones que ofrece la app. Comencemos con el perfil. Allí verá su nombre de usuario, foto de perfil, descripción, posteos y recuento de seguidores/seguidores. Cada uno de estos campos podrá ser editado a su gusto, así como realizar acciones sobre la privacidad de su perfil, poniéndolo público o privado, para restringir quién puede ver su contenido.

Asimismo, podrá visitar el perfil de otras personas. En caso que dicha persona tenga un perfil público, podrá ver sus posteos e historias sin necesidad de estar siguiéndola, de lo contrario, deberá enviar una solicitud y que dicha persona la acepte para así poder interactuar con su perfil a través de posteos o historias. En caso de seguirse mutuamente también podrá enviarse mensajes directos con otros usuarios. Usted tendrá la opción de bloquear usuarios para no permitir más interacciones, tanto de mensajes como visualizaciones en su perfil y posteos.

En la sección de feed encontrará publicaciones y estados de cuentas a las que sigue. En la parte superior se desplegarán “historias”, estás tendrán un contorno circular que cuando sea presionado ocupará la pantalla y se mostrará su contenido. La característica de dichas historias o estados es que duran 24 horas, después se eliminan. También podrá ver posteos de usuarios. La manera de interactuar con estos es mediante un botón de “me gusta” o “like”, el cual quedará público para que el dueño del posteo y demás personas lo vean. Los comentarios en las publicaciones tendrán el mismo comportamiento. Los posteos no se borran automáticamente como las historias, quedan almacenados y a la vista en el perfil de cada usuario donde se pueden ver hasta que dicho usuario decida eliminarlos. Cuando un usuario reciba un me gusta o un comentario recibirá una notificación, al igual que si recibe un mensaje directo de otro usuario.

Una vez termine su uso en la app y la cierre, la próxima vez que ingrese deberá volver a loguearse con sus datos o crear otra cuenta registrándose.
