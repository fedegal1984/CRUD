Endpoints disponibles:

Users:

GET :/user/profile => devuelve los datos del usuario logueado
POST :/user/register => crea un nuevo usuario
POST :/user/login => crea una nueva sesión con usuarios ya registrados
POST :/user/logout => cierra sesión

Posts:

GET :/posts => devuelve todos los posteos realizados por el usuario logueado
GET :/posts/:id => devuelve un posteo por id
POST :/posts => crea un nuevo posteo
DELETE :/posts/:id => elimina un posteo por id
PUT :/posts/:id => modifica el posteo por id