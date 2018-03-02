<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;





/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\CandidateRepository")
 * @ORM\Table(name="candidates")
 */
class Candidate
{

    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\Column(type="string")
     */
    private $number;


    /**
     * @ORM\Column(type="string")
     */
    private $name;


    /**
     * @ORM\Column(type="string")
     */
    private $photo;

    /**
     * @ORM\Column(type="string")
     */
    private $consigment;


    /**
     * @ORM\Column(type="text")
     */
    private $electioneering;

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set number
     *
     * @param string $number
     *
     * @return Candidate
     */
    public function setNumber($number)
    {
        $this->number = $number;

        return $this;
    }

    /**
     * Get number
     *
     * @return string
     */
    public function getNumber()
    {
        return $this->number;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Candidate
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set photo
     *
     * @param string $photo
     *
     * @return Candidate
     */
    public function setPhoto($photo)
    {
        $this->photo = $photo;

        return $this;
    }

    /**
     * Get photo
     *
     * @return string
     */
    public function getPhoto()
    {
        return $this->photo;
    }

    /**
     * Set electioneering
     *
     * @param string $electioneering
     *
     * @return Candidate
     */
    public function setElectioneering($electioneering)
    {
        $this->electioneering = $electioneering;

        return $this;
    }

    /**
     * Get electioneering
     *
     * @return string
     */
    public function getElectioneering()
    {
        return $this->electioneering;
    }

    /**
     * Set consigment
     *
     * @param string $consigment
     *
     * @return Candidate
     */
    public function setConsigment($consigment)
    {
        $this->consigment = $consigment;

        return $this;
    }

    /**
     * Get consigment
     *
     * @return string
     */
    public function getConsigment()
    {
        return $this->consigment;
    }
}
