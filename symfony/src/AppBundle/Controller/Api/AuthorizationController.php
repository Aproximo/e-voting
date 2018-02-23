<?php
/**
 * Created by PhpStorm.
 * User: or_os
 * Date: 20.12.2017
 * Time: 12:29
 */

namespace AppBundle\Controller\Api;



use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\Common\Persistence\ObjectManager;
use AppBundle\Entity\User;


class AuthorizationController extends Controller
{

    public function __construct()
    {
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Headers: Content-Type, *');
    }

    /**
     * @Route("/api/users", name="api")
     *
     */
    public function indexAction(Request $request)
    {
//        // dz: get 500, 404 json if errors
        $users = $this
            ->getDoctrine()
            ->getRepository('AppBundle:User')
            ->find("1")
        ;

        if (!$users) {
            return new Response("",404, "Not found");
        }

        $array = $this->get('jms_serializer')->serialize($users, 'json');



        return new JsonResponse($array);

    }




    /**
     * @Route("/api/humans", name="api_humans")
     *
     */
    public function humansAction(Request $request)
    {


        $data = json_decode($request->getContent(), true);

        $array = ['passport_id', 'passport_pin', 'itn', 'name', 'surname', 'date_of_birthday', 'valid_until'];

        $i = true;
            if (is_array($data)){
                foreach ($array as $value){
                    if (!array_key_exists ( $value , $data )){
                        $i = false;
                    }
                }
            } else {
                $i = false;
            }

        if (!$i){
                return new JsonResponse($data);
//            return new Response("Validation error", 400);
        }

        $users = $this
            ->getDoctrine()
            ->getRepository('AppBundle:UserData')
            ->Compare($data);

        if (!$users){
            return new Response('User was not found',
                401,
                array('content-type' => 'text/html'));
        }

        return new Response('Allowed',
            200,
            array('content-type' => 'text/html'));
    }


    /**
     * @Route ("/api/registration", name="api_registration")
     */
    public function registrationAction (Request $request, ObjectManager $manager){
        $data = json_decode($request->getContent(), true);

        if (!$data['email'] && !$data['password']){
            return new Response("",400, "Bad Request");
//            return "Hello world";
            return new Response("",405, "Method Not Allowed");
        }

        $users = $this
            ->getDoctrine()
            ->getRepository('AppBundle:User')
            ->getByEmail($data['email']);
        return new JsonResponse($data);
        if ($users) {
            return new Response("",405, "Method Not Allowed");
        }

        $user = new User();

        $encoder = $this->container->get('security.password_encoder');
        $passwordEncoded = $encoder->encodePassword($user, $data['password']);

        $user->setEmail($data['email']);
        $user->setPassword($passwordEncoded);

        $manager->persist($user);
        $manager->flush();

        return new Response("User was created",201, "Created");

    }

//    /**
//     * @Route ("/api/login", name="api_login")
//     */
//    public function loginAction (Request $request, ObjectManager $manager){
//        $data = json_decode($request->getContent(), true);
//
//        if (!$data['email'] && !$data['password']){
//            return new Response("",400, "Bad Request");
//        }
//
//        $user = $this
//            ->getDoctrine()
//            ->getRepository('AppBundle:User')
//            ->getByEmail($data['email']);
//
//        if (!$user) {
//            return new Response("",404, "Not Found");
//        }
//
//
//        $encoder = $this->container->get('security.password_encoder');
//        $passwordEncoded = $encoder->encodePassword($user, $data['password']);
//
//        if ($passwordEncoded == $user['password']){
//
//            return JsonResponse::create($user['roles'], 200);
//        }
//
//        return new Response("User was created",400, "Bad Request");
//
//    }


}