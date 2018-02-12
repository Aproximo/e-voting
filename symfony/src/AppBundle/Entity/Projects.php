<?php
/**
 * Created by PhpStorm.
 * User: or_os
 * Date: 06.12.2017
 * Time: 12:54
 */

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ORM\Table(name="projects")
 */
class Projects
{

    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

//    /**
//     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Organisations")
//     */
//    private $operator;
//
//    /**
//     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Organisations")
//     */
//    private $mandator;
//
//    /**
//     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\Organisations")
//     */
//    private $subcontractor;



    public function __construct() {
        $this->subcontractor = new \Doctrine\Common\Collections\ArrayCollection();
    }


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
     * Set operator
     *
     * @param \AppBundle\Entity\Organisations $operator
     *
     * @return Projects
     */
    public function setOperator(\AppBundle\Entity\Organisations $operator = null)
    {
        $this->operator = $operator;

        return $this;
    }

    /**
     * Get operator
     *
     * @return \AppBundle\Entity\Organisations
     */
    public function getOperator()
    {
        return $this->operator;
    }

    /**
     * Set mandator
     *
     * @param \AppBundle\Entity\Organisations $mandator
     *
     * @return Projects
     */
    public function setMandator(\AppBundle\Entity\Organisations $mandator = null)
    {
        $this->mandator = $mandator;

        return $this;
    }

    /**
     * Get mandator
     *
     * @return \AppBundle\Entity\Organisations
     */
    public function getMandator()
    {
        return $this->mandator;
    }

    /**
     * Add subcontractor
     *
     * @param \AppBundle\Entity\Organisations $subcontractor
     *
     * @return Projects
     */
    public function addSubcontractor(\AppBundle\Entity\Organisations $subcontractor)
    {
        $this->subcontractor[] = $subcontractor;

        return $this;
    }

    /**
     * Remove subcontractor
     *
     * @param \AppBundle\Entity\Organisations $subcontractor
     */
    public function removeSubcontractor(\AppBundle\Entity\Organisations $subcontractor)
    {
        $this->subcontractor->removeElement($subcontractor);
    }

    /**
     * Get subcontractor
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getSubcontractor()
    {
        return $this->subcontractor;
    }
}
