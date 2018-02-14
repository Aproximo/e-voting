<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;
use JMS\Serializer\Annotation as JMS;


/**
 * User
 *
 * @ORM\Table(name="user_data")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\UserDataRepository")
 *
 */
class UserData
{
    /**
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     *
     */
    private $id;


    /**
     * @ORM\Column(type="string", length=9, unique=true)
     */
    private $passport_id;

    /**
     * @ORM\Column(type="string", length=4)
     */
    private $passport_pin;

    /**
     * @ORM\Column(type="string", length=10, unique=true)
     */
    private $itn;

    /**
     * @ORM\Column(type="string")
     */
    private $name;

    /**
     * @ORM\Column(type="string")
     */
    private $surname;

    /**
     * @ORM\Column(type="date")
     */
    private $date_of_birthday;

    /**
     * @ORM\Column(type="date")
     */
    private $valid_until;

    /**
     *
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\User", inversedBy="user_data")
     * @ORM\JoinColumn(name="user_id",referencedColumnName="id")
     */
    private $user_id;



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
     * Set passportId
     *
     * @param string $passportId
     *
     * @return UserData
     */
    public function setPassportId($passportId)
    {
        $this->passport_id = $passportId;

        return $this;
    }

    /**
     * Get passportId
     *
     * @return string
     */
    public function getPassportId()
    {
        return $this->passport_id;
    }

    /**
     * Set passportPin
     *
     * @param string $passportPin
     *
     * @return UserData
     */
    public function setPassportPin($passportPin)
    {
        $this->passport_pin = $passportPin;

        return $this;
    }

    /**
     * Get passportPin
     *
     * @return string
     */
    public function getPassportPin()
    {
        return $this->passport_pin;
    }

    /**
     * Set itn
     *
     * @param string $itn
     *
     * @return UserData
     */
    public function setItn($itn)
    {
        $this->itn = $itn;

        return $this;
    }

    /**
     * Get itn
     *
     * @return string
     */
    public function getItn()
    {
        return $this->itn;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return UserData
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
     * Set surname
     *
     * @param string $surname
     *
     * @return UserData
     */
    public function setSurname($surname)
    {
        $this->surname = $surname;

        return $this;
    }

    /**
     * Get surname
     *
     * @return string
     */
    public function getSurname()
    {
        return $this->surname;
    }

    /**
     * Set dateOfBirthday
     *
     * @param \DateTime $dateOfBirthday
     *
     * @return UserData
     */
    public function setDateOfBirthday($dateOfBirthday)
    {
        $this->date_of_birthday = $dateOfBirthday;

        return $this;
    }

    /**
     * Get dateOfBirthday
     *
     * @return \DateTime
     */
    public function getDateOfBirthday()
    {
        return $this->date_of_birthday;
    }

    /**
     * Set validUntil
     *
     * @param \DateTime $validUntil
     *
     * @return UserData
     */
    public function setValidUntil($validUntil)
    {
        $this->valid_until = $validUntil;

        return $this;
    }

    /**
     * Get validUntil
     *
     * @return \DateTime
     */
    public function getValidUntil()
    {
        return $this->valid_until;
    }

    /**
     * Set userId
     *
     * @param \AppBundle\Entity\User $userId
     *
     * @return UserData
     */
    public function setUserId(\AppBundle\Entity\User $userId = null)
    {
        $this->user_id = $userId;

        return $this;
    }

    /**
     * Get userId
     *
     * @return \AppBundle\Entity\User
     */
    public function getUserId()
    {
        return $this->user_id;
    }
}
