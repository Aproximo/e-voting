<?php
/**
 * Created by PhpStorm.
 * User: or_os
 * Date: 20.11.2017
 * Time: 14:56
 */

namespace AppBundle\Controller\Api;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use AppBundle\Entity\Accounts;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class CandidateController extends Controller
{

    public function __construct()
    {
        header("Access-Control-Allow-Origin: *");

    }

    /**
     * article list page
     *
     * @Route("/api/candidate", name="api_candidate")
     *
     */
    public function indexAction(){


        $repo = $this->get('doctrine')->getRepository('AppBundle:Candidate');
        $articles = $repo->findAll();

        $array = $this->get('jms_serializer')->serialize($articles, 'json');



        return new JsonResponse($array);
    }

    /**
     *
     * article by id
     * sl - for tralling slash if its needed
     *
     * @Route("/api/candidate/{id}{sl}", name="api_candidate_page", defaults={"sl" : ""}, requirements={"id" : "[1-9][0-9]*","sl":"/?"})
     *
     */
    public function showAction($id){


        $repo = $this->get('doctrine')->getRepository('AppBundle:Candidate');
        $article = $repo->find($id);

        if(!$article){
            return new JsonResponse("NotFound",404);
        }

        $array = $this->get('jms_serializer')->serialize($article, 'json');



        return new JsonResponse($array);
    }



}