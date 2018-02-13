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
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;


class ProgrammerController extends Controller
{
    /**
     * @Route("/api/users", name="api")
     *
     */
    public function indexAction(Request $request)
    {   header("Access-Control-Allow-Origin: *");
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
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Headers: Content-Type, *');

        $data = json_decode($request->getContent(), true);

        $users = $this
            ->getDoctrine()
            ->getRepository('AppBundle:User')
            ->getByPassportId($data['passport_id']);

        if (!$users){
            return new Response('User was not found',
                401,
                array('content-type' => 'text/html'));
        }

        return new Response('Allowed',
            200,
            array('content-type' => 'text/html'));
    }

}