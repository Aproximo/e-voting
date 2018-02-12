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
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;


class SecurityController extends Controller
{
    /**
     * @Route("/api/form", name="api_form")
     *
     */
    public function indexAction(Request $request)
    {
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Headers: Content-Type, *');

        $data = json_decode($request->getContent(), true);


    if (!$data){
        return new Response('Woops, i didn;t get data');
    }

        return new Response('Let\'s do this!');


    }

}