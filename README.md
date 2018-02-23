## TODO

![Image alt](https://github.com/Aproximo/e-voting/raw/myronov/pages/pages.jpg)


Front
=

* разделения доступа по роутам /регистрация/авторизация/голосование/ок
* валидация формы
* страничка личный кабинет (оплата ком услуг, петиции, жалобы, электронная очередь)
* страничка голосования (местные выборы./ выборы президента/ парламентские выборы)

Back
=

 * /api/humans (post)
    * in: array [user_data]
    * out: http response(200, 401)
 * /api/article (get)
 * /api/article/{id} (get)
 * /api/candidates
    * out: http response(200, 401)/array [candidates]
 * /api/login (post)
    * in: array  [login, password] 
    * out: http JsonResponse (array [roles, token],200) or Response (400, 404)
 * /api/registration (post)
    * in: array [login, password]   
    * out: http response (201, 400, 405)

DB
=


* article
    * id
    * title
    * text
    * category_id
* category
    * id
    * name
* users
    * id
    * email
    * roles
    * password
* user_data
    * id
    * user_id
    * itn
    * passport_id
    * passport_pin
    * name
    * surname
    * date_of_birthday
    * valid_until
* candidates
    id: 
    number: 
    path: 
    name: 
    consigment: 
    photo:
    electioneering:    
    