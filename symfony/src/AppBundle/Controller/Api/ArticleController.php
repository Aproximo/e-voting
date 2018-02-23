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

class ArticleController extends Controller
{

    /**
     * article list page
     *
     * @Route("/api/article", name="api_article")
     *
     */
    public function indexAction(){
        header("Access-Control-Allow-Origin: *");

        $repo = $this->get('doctrine')->getRepository('AppBundle:Article');
        $articles = $repo->findAll();

        $array = $this->get('jms_serializer')->serialize($articles, 'json');



        return new JsonResponse($array);
    }

    /**
     *
     * article by id
     * sl - for tralling slash if its needed
     *
     * @Route("/api/article/{id}{sl}", name="api_article_page", defaults={"sl" : ""}, requirements={"id" : "[1-9][0-9]*","sl":"/?"})
     *
     */
    public function showAction($id){
        header("Access-Control-Allow-Origin: *");

        $repo = $this->get('doctrine')->getRepository('AppBundle:Article');
        $article = $repo->find($id);

        if(!$article){
            return new JsonResponse("NotFound",404);
        }

        $array = $this->get('jms_serializer')->serialize($article, 'json');



        return new JsonResponse($array);
    }



//        $article->setTitle('Symfony start')->setContent('Some text bla bla');
//
//        $em = $this->get('doctrine')->getManager();
//
//        $em->persist($article);
//        $em->flush();

}